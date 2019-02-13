onload = function () {

    // app model
    var app = {
        regions: new wijmo.collections.CollectionView(),
        products: new wijmo.collections.CollectionView(),
        data: new wijmo.collections.CollectionView([], {
            groupDescriptions: 'region,product'.split(','),
            filter: function (item) {
                var rgnOK = !cmbRegion.selectedIndex || cmbRegion.text == item.region,
                    prdOK = !cmbProduct.selectedIndex || cmbProduct.text == item.product;
                return rgnOK && prdOK;
            }
        }),
        groupedData: new wijmo.collections.CollectionView()
    }

    // shorthand
    var format = wijmo.Globalize.format;

    // go load the data
    var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRVhwWiWkXp_dqlf8jOSEJlP5DFGTAFwqYJdOweZ4WGJlBsMrcFW_-48eZVCoXMHdNxqFv1CMQXGinq/pub?gid=343311828&single=true&output=csv';
    wijmo.httpRequest(url, {
        success: function (xhr) {
            parseData(xhr.responseText);
            dataChanged();
        }
    });

    // create combos
    var cmbRegion = new wijmo.input.ComboBox('#combo-region', {
        itemsSource: app.regions,
        selectedIndexChanged: function (s, e) {
            dataChanged();
        }
    });
    var cmbProduct = new wijmo.input.ComboBox('#combo-product', {
        itemsSource: app.products,
        selectedIndexChanged: function (s, e) {
            dataChanged();
        }
    });

    // create gauges
    var ggUnits = new wijmo.gauge.RadialGauge('#gauge-units', {
        value: 0,
        hasShadow: false,
        showRanges: true,
        ranges: [
            { min: 0, max: 0, color: 'rgba(255,180,0,.3)' },
        ]
    });
    ggUnits.pointer.thickness = .7;
    var ggRevenue = new wijmo.gauge.RadialGauge('#gauge-revenue', {
        value: 0,
        hasShadow: false,
        format: 'g1,',
        showRanges: true,
        ranges: [
            { min: 0, max: 0, color: 'rgba(255,180,0,.3)' },
        ],
        getText: function (gauge, part, value, text) {
            return value > 0
                ? '$' + text + 'k'
                : text;
        }
    });
    ggRevenue.pointer.thickness = .7;

    // create charts
    var chartUnits = new wijmo.chart.FlexChart('#chart-units', {
        itemsSource: app.groupedData,
        chartType: 'Scatter',
        symbolSize: 5,
        bindingX: 'month',
        axisX: { format: 'MMM yyyy' },
        axisY: {
            format: 'n0',
            title: 'Units Sold'
        },
        tooltip: { content: '' },
        series: [
            { binding: 'units' }
        ],
        rendered: function () {
            var up = trendUnits.coefficients[0] > 0,
                e = document.getElementById('trend-units');
            e.className = up ? 'wj-glyph-up' : 'wj-glyph-down';
        }
    });
    var chartRevenue = new wijmo.chart.FlexChart('#chart-revenue', {
        itemsSource: app.groupedData,
        chartType: 'Scatter',
        symbolSize: 5,
        bindingX: 'month',
        axisX: { format: 'MMM yyyy' },
        axisY: {
            format: 'n0,',
            title: 'Revenue (kUS$)'
        },
        tooltip: { content: '' },
        series: [
            { binding: 'revenue' }
        ],
        rendered: function () {
            var up = trendRevenue.coefficients[0] > 0,
                e = document.getElementById('trend-revenue');
            e.className = up ? 'wj-glyph-up' : 'wj-glyph-down';
        }
    });
    var trendRevenue = new wijmo.chart.analytics.TrendLine({
        binding: 'revenue'
    });
    chartRevenue.series.push(trendRevenue);
    var trendUnits = new wijmo.chart.analytics.TrendLine({
        binding: 'units'
    });
    chartUnits.series.push(trendUnits);

    // create grid
    var grdData = new wijmo.grid.FlexGrid('#grid-data', {
        isReadOnly: true,
        itemsSource: app.data
    });

    // parse the data in the csv file
    function parseData(csv) {
        var data = [],
            regionMap = {},
            productMap = {},
            lines = csv.split('\r\n');

        lines.forEach(function (line, index) {
            if (index) { // skip headers
                var items = line.trim().split(',');

                // save sales data
                var item = {
                    //id: parseInt(items[0]),
                    //monthKey: items[1],
                    month: wijmo.Globalize.parseDate(items[1], 'M/yyyy'),
                    //regionID: parseInt(items[2]),
                    region: items[3],
                    //productID: parseInt(items[4]),
                    product: items[5],
                    units: parseInt(items[6]),
                    revenue: parseFloat(items[7])
                };
                data.push(item);

                // keep track of regions and products
                regionMap[item.region] = item.region;
                productMap[item.product] = item.product;
            }
        });

        // clean up duplicates (same month, product, region)
        //console.log('before: ', data.length, 'items, tot rev', Enumerable.from(data).sum('$.revenue'))
        data = Enumerable
            .from(data)
            .groupBy(
                function (item) { // item key
                    let key = format(item.month, 'M/yyyy');
                    key += '\t' + item.region;
                    key += '\t' + item.product;
                    return key;
                },
                '$', // group item
                function (key, group) { // result item (aggregate units and revenue)
                    return merge(group.first(), {
                        id: -1,
                        units: group.sum('$.units'),
                        revenue: group.sum('$.revenue')
                    });
                })
            .toArray();
        //console.log('after: ', data.length, 'items, tot rev', Enumerable.from(data).sum('$.revenue'))

        // build arrays with regions and products
        var regions = ['(All Regions)'];
        for (region in regionMap) {
            regions.push(region);
        }
        regions.sort();
        var products = ['(All Products)'];
        for (product in productMap) {
            products.push(product);
        }
        products.sort();

        // all done
        app.regions.sourceCollection = regions;
        app.products.sourceCollection = products;
        app.data.sourceCollection = data;
    }

    // apply the data to the UI
    function dataChanged() {
        if (app.data.items.length) {

            // apply filter
            app.data.refresh();

            // group data
            app.groupedData.sourceCollection = Enumerable
                .from(app.data.items)
                .orderBy('$.month') // order by month
                .groupBy( // group by month and optionally by region and product
                function (item) { // item key
                    var key = format(item.month, 'M/yyyy');
                    if (!cmbRegion.selectedIndex) {
                        key += '\t' + item.region;
                    }
                    if (!cmbProduct.selectedIndex) {
                        key += '\t' + item.product;
                    }
                    return key;
                },
                '$', // group item
                function (key, group) { // result item (aggregate units and revenue)
                    var item = merge(group.first(), {
                        id: -1,
                        units: group.sum('$.units'),
                        revenue: group.sum('$.revenue')
                    });
                    if (!cmbRegion.selectedIndex) {
                        item.region = cmbRegion.text;
                    }
                    if (!cmbProduct.selectedIndex) {
                        item.product = cmbProduct.text;
                    }
                    return item;
                })
                .toArray();

            // update current tile
            var view = app.groupedData,
                lastItem = view.items[view.items.length - 1],
                avg = view.getAggregate('Avg', 'units'),
                std = view.getAggregate('Std', 'units'),
                max = view.getAggregate('Max', 'units');
            document.getElementById('current-month').innerHTML = format(lastItem.month, 'MMMM yyyy');
            ggUnits.value = lastItem.units;
            ggUnits.max = roundMax(max);
            wijmo.copy(ggUnits.ranges[0], {
                min: avg - std,
                max: avg + std
            });

            avg = view.getAggregate('Avg', 'revenue');
            std = view.getAggregate('Std', 'revenue');
            max = view.getAggregate('Max', 'revenue');
            ggRevenue.value = lastItem.revenue;
            ggRevenue.max = roundMax(max);
            wijmo.copy(ggRevenue.ranges[0], {
                min: avg - std,
                max: avg + std
            });
        }
    }

    // utility
    function roundMax(n) {
        if (!n) return 0;
        var str = n.toFixed(0),
            len = str.length;
        n = parseInt(str.substr(0, 2)) + 1;
        str = n.toFixed(0);
        while (str.length < len) {
            str += '0';
        }
        return parseInt(str);
    }

    // merge two objects into one
    function merge(o1, o2) {
        var o = {};
        for (key in o1) {
            o[key] = o1[key];
        }
        for (key in o2) {
            o[key] = o2[key];
        }
        return o;
    }
}
