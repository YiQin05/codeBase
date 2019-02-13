onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // data for the sample
    var app = {
        chartData: new wijmo.collections.ObservableArray()
    };

    // load the data asynchronously
    loadData();
    function loadData() {
        wijmo.httpRequest('data/fb.json', {
            success: function (xhr) {
                app.chartData.deferUpdate(function () {
                    var arr = JSON.parse(xhr.responseText);
                    for (var i = 0; i < arr.length; i++) {
                        app.chartData.push(arr[i]);
                    }
                });
            }
        });
    }

    // shorthand for Wijmo Globalize method
    function format(value, format) {
        return wijmo.Globalize.format(value, format);
    }

    // update menu header
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }

    // shorthand for wijmo.chart.finance.FinancialChartType
    var ChartType = wijmo.chart.finance.FinancialChartType;


    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    var introChart = new wijmo.chart.finance.FinancialChart('#introChart', {
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { name: 'Open', binding: 'open' },
            { name: 'Close', binding: 'close' }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Chart Types
    var ctChart = new wijmo.chart.finance.FinancialChart('#ctChart', {
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { binding: 'close' }
        ],
        symbolSize: 4,
        tooltip: {
            content: function (ht) {
                var dateStr = 'Date: ' + ht.x + '<br/>',
                    hlocStr = 'Open: ' + format(ht.item.open, 'n2') + '<br/>' +
                        'High: ' + format(ht.item.high, 'n2') + '<br/>' +
                        'Low: ' + format(ht.item.low, 'n2') + '<br/>' +
                        'Close: ' + format(ht.item.close, 'n2') + '<br/>',
                    closeStr = 'Close: ' + format(ht.item.close, 'n2'),
                    volStr = 'Volume: ' + format(ht.item.volume, 'n0'),
                    toolTipStr;
                switch (ctMenu.value) {
                    case ChartType.Line:
                    case ChartType.Column:
                        toolTipStr = dateStr + closeStr;
                        break;
                    case ChartType.ColumnVolume:
                        toolTipStr = dateStr + closeStr + '<br/>' + volStr;
                        break;
                    case ChartType.EquiVolume:
                    case ChartType.CandleVolume:
                    case ChartType.ArmsCandleVolume:
                        toolTipStr = dateStr + hlocStr + volStr;
                        break;
                    default:
                        toolTipStr = dateStr + hlocStr;
                        break;
                }
                return toolTipStr;
            }
        }
    });

    // create menu
    var ctMenu = new wijmo.input.Menu('#ctMenu', {
        itemClicked: function (s, e) {
            var ct = wijmo.changeType(s.selectedValue, wijmo.DataType.Number);
            if (wijmo.isNumber(ct)) {

                // set chart type
                ctChart.chartType = ct;

                // set binding
                var binding = 'high,low,open,close'; // default
                switch (ct) {
                    case ChartType.Area:
                    case ChartType.Line:
                    case ChartType.Column:
                        binding = 'close';
                        break;
                    case ChartType.ColumnVolume:
                        binding = 'close,volume';
                        break;
                    case ChartType.EquiVolume:
                    case ChartType.CandleVolume:
                    case ChartType.ArmsCandleVolume:
                        binding = 'high,low,open,close,volume';
                        break;
                }
                ctChart.series[0].binding = binding;

                // set options
                switch (ct) {
                    case ChartType.LineBreak:
                        ctChart.options = {
                            lineBreak: {
                                newLineBreaks: 3
                            }
                        };
                        break;
                    case ChartType.Renko:
                        ctChart.options = {
                            renko: {
                                boxSize: 2,
                                rangeMode: 'Fixed',
                                fields: 'Close'
                            }
                        };
                        break;
                    case ChartType.Kagi:
                        ctChart.options = {
                            kagi: {
                                reversalAmount: 1,
                                rangeMode: 'Fixed',
                                fields: 'Close'
                            }
                        };
                        break;
                }
            }
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(ctMenu, 'Chart Type');


    ////////////////////////////////////////////////////////////////////////
    // Marker

    // create chart
    var mkChart = new wijmo.chart.finance.FinancialChart('#mkChart', {
        chartType: 'Candlestick',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { binding: 'high,low,open,close' }
        ],
        tooltip: { content: '' },
        axisY: { position: wijmo.chart.Position.Right },
        header: 'Facebook, Inc. (FB)',
        symbolSize: 4,
        rendered: function (s, e) {
            var plotArea = s.hostElement.querySelector('.wj-plot-area');
            plotAreaRect = wijmo.getElementRect(plotArea);
        }
    });

    // create markers
    var markerPos = new wijmo.Point(),
        markerContent,
        plotAreaRect;
    var midMarker = new wijmo.chart.LineMarker(mkChart, {
        lines: 'Both',
        interaction: 'Move',
        alignment: wijmo.chart.LineMarkerAlignment.Top | wijmo.chart.LineMarkerAlignment.Left,
        content: function () {
            markerContent = getMarkerContent(new wijmo.Point(markerPos.x, markerPos.y));
            return markerContent ? markerContent.content : '';
        },
        positionChanged: function (s, e) {
            markerPos = e;
        }
    });
    var hMarker = new wijmo.chart.LineMarker(mkChart, {
        lines: 'None',
        interaction: 'Move',
        horizontalPosition: 1,
        content: function () {
            return markerContent && markerContent.y ? markerContent.y.toString() : '';
        }
    });
    var vMarker = new wijmo.chart.LineMarker(mkChart, {
        lines: 'None',
        interaction: 'Move',
        verticalPosition: 1,
        content: function () {
            return markerContent && markerContent.x ? markerContent.x.toString() : '';
        }
    });

    // hide/show markers
    var host = mkChart.hostElement;
    host.addEventListener('mouseenter', function (e) {
        showMarkers(true);
    });
    host.addEventListener('mouseleave', function (e) {
        showMarkers(false);
    });
    host.addEventListener('touchstart', function (e) {
        showMarkers(true);
    });
    host.addEventListener('touchend', function (e) {
        showMarkers(false);
    });
    showMarkers(false);

    // show/hide markers
    function showMarkers(show) {
        var host = mkChart.hostElement,
            lineMarkers = host.querySelectorAll('.wj-chart-linemarker-container');
        for (var i = 0; i < lineMarkers.length; i++) {
            lineMarkers[i].style.visibility = show ? 'visible' : 'hidden';
        }
    }

    // get the marker content
    function getMarkerContent(pt) {
        var retVal = {
                content: '',
                x: '',
                y: ''
            };

        // calculate the y value
        if (!plotAreaRect) {
            retVal.y = 0;
        } else {
            var axisYMax = mkChart.axisY.actualMax,
                axisYMin = mkChart.axisY.actualMin;
            retVal.y = axisYMax - ((pt.y - plotAreaRect.top) / plotAreaRect.height) * (axisYMax - axisYMin);
            retVal.y = retVal.y.toFixed(2);
        }

        // calculate the x value
        var ptMarker = new wijmo.Point(pt.x, NaN),
            ht = mkChart.series[0].hitTest(ptMarker);
        if (ht.x && ht.y !== null) {
            retVal.x = ht.x;
        }

        // all done
        return retVal;
    }


    ////////////////////////////////////////////////////////////////////////
    // Range Selector
    var stChart = new wijmo.chart.finance.FinancialChart('#stChart', {
        chartType: 'Candlestick',
        itemsSource: app.chartData,
        series: [
            { binding: 'high,low,open,close' }
        ],
        header: 'Facebook, Inc. (FB)',
        symbolSize: 4,
        bindingX: 'date',
        axisX: { labels: false, axisLine: false },
        legend: { position: wijmo.chart.Position.None },
        plotMargin: '60 30 0 50',
        tooltip: {
            content: function (ht) {
                return 'Date: ' + ht.x + '<br/>' +
                    'Open: ' + format(ht.item.open, 'n2') + '<br/>' +
                    'High: ' + format(ht.item.high, 'n2') + '<br/>' +
                    'Low: ' + format(ht.item.low, 'n2') + '<br/>' +
                    'Close: ' + format(ht.item.close, 'n2');
            }
        }
    });

    // create extra/smaller chart with range selector
    var rsChart = new wijmo.chart.finance.FinancialChart('#rsChart', {
        chartType: 'Line',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { binding: 'close' }
        ],
        axisY: { labels: false, majorGrid: false },
        tooltip: { content: '' },
        plotMargin: '0 30 NaN 50'
    });
    var rangeSelector = new wijmo.chart.interaction.RangeSelector(rsChart, {
        seamless: true, // allow reversing min/max by dragging
        rangeChanged: function (s, e) {
            stChart.axisX.min = s.min;
            stChart.axisX.max = s.max;
            stChart.invalidate();
        }
    });


    ////////////////////////////////////////////////////////////////////////
    // TrendLines
    var tlChart = new wijmo.chart.finance.FinancialChart('#tlChart', {
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        chartType: 'Line',
        axisY: { position: 'Right' },
        legend: { position: 'Top' },
        series: [{ name: 'Close', binding: 'close' }]
    });

    // add moving average trend line
    var movingAverage = new wijmo.chart.analytics.MovingAverage({
        name: wijmo.chart.analytics.MovingAverageType[0] + ' Moving Average',
        type: wijmo.chart.analytics.MovingAverageType.Simple,
        itemsSource: app.chartData,
        binding: 'close',
        period: 2,
        style: {
            strokeWidth: 4
        }
    });
    tlChart.series.push(movingAverage);

    // allow user to change the moving average period
    var period = new wijmo.input.InputNumber('#period', {
        step: 1,
        format: 'n0',
        value: 2,
        min: 2,
        max: 10, // data loaded asynchronously
        valueChanged: function (s, e) {
            s.max = app.chartData.length - 1; // data loaded asynchronously
            if (s.value >= s.min && s.value <= s.max) {
                movingAverage.period = s.value;
            }
        }
    });

    // select moving average type
    var maMenu = new wijmo.input.Menu('#maMenu', {
        itemClicked: function (s, e) {
            var arg = wijmo.changeType(s.selectedValue, wijmo.DataType.Number);
            if (wijmo.isNumber(arg)) {
                movingAverage.type = arg;
            }
            movingAverage.name = s.text + ' Moving Average';
            updateMenuHeader(s, 'Period');
        }
    });
    updateMenuHeader(maMenu, 'Period');


    ////////////////////////////////////////////////////////////////////////
    // Event Annotations
    var anChart = new wijmo.chart.finance.FinancialChart('#anChart', {
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        chartType: 'Line',
        series: [
            { name: 'Close', binding: 'close' }
        ]
    });

    // add annotation layer
    var al = new wijmo.chart.annotation.AnnotationLayer(anChart);

    // add rectangle annotation
    al.items.push(new wijmo.chart.annotation.Rectangle({
        width: 40, height: 30, pointIndex: 16,//1/28/15 
        tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
        offset: { x: 0, y: -15 },
        seriesIndex: 0,
        position: 'Center',
        attachment: 'DataIndex',
        style: { 'fill': '#cccccc', 'stroke': '#888888', 'fill-opacity': 1, 'stroke-width': 1, 'stroke-opacity': 1 },
        content: 'R'
    }));

    // add ellipse annotation
    al.items.push(new wijmo.chart.annotation.Ellipse({
        width: 40, height: 30, pointIndex: 17, //01/29/15
        offset: { x: 0, y: -15 },
        seriesIndex: 0,
        position: 'Center',
        attachment: 'DataIndex',
        style: { 'fill': '#cccccc', 'stroke': '#888888', 'fill-opacity': 1, 'stroke-width': 1, 'stroke-opacity': 1 },
        content: 'E',
        tooltip: 'FACEBOOK INC Files SEC form 10-K, Annual Report'
    }));

    // add circle annotation
    al.items.push(new wijmo.chart.annotation.Circle({
        radius: 20, pointIndex: 49, //03/17/15
        tooltip: 'Coverage initiated on Facebook by Brean Capital',
        offset: { x: 0, y: -15 },
        seriesIndex: 0,
        style: { 'fill': '#cccccc', 'stroke': '#888888', 'fill-opacity': 1, 'stroke-width': 1, 'stroke-opacity': 1 },
        position: 'Center',
        attachment: 'DataIndex',
        content: 'C'
    }));

    // add square annotation
    al.items.push(new wijmo.chart.annotation.Square({
        length: 30, pointIndex: 75, //04/22/15
        tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
        offset: { x: 0, y: -15 },
        seriesIndex: 0,
        style: { 'fill': '#cccccc', 'stroke': '#888888', 'fill-opacity': 1, 'stroke-width': 1, 'stroke-opacity': 1 },
        position: 'Center',
        attachment: 'DataIndex',
        content: 'S'
    }));


    ////////////////////////////////////////////////////////////////////////
    // Animation
    var animChart = new wijmo.chart.finance.FinancialChart('#animChart', {
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { binding: 'close' }
        ],
        symbolSize: 4,
        footer: 'Click on chart to refresh',
        tooltip: {
            content: function (ht) {
                var dateStr = 'Date: ' + ht.x + '<br/>',
                    hlocStr = 'Open: ' + format(ht.item.open, 'n2') + '<br/>' +
                        'High: ' + format(ht.item.high, 'n2') + '<br/>' +
                        'Low: ' + format(ht.item.low, 'n2') + '<br/>' +
                        'Close: ' + format(ht.item.close, 'n2') + '<br/>',
                    closeStr = 'Close: ' + format(ht.item.close, 'n2'),
                    toolTipStr;
                switch (ht.chart.chartType) {
                    case ChartType.Line:
                    case ChartType.Column:
                        toolTipStr = dateStr + closeStr;
                        break;
                    default:
                        toolTipStr = dateStr + hlocStr;
                        break;
                }
                return toolTipStr;
            }
        }
    });

    // refresh chart on clicks to show animation
    animChart.hostElement.addEventListener('click', function () {
        animChart.refresh(true);
    });

    // create ChartAnimation
    var animation = new wijmo.chart.animation.ChartAnimation(animChart, {
        easing: 'Linear'
    });

    // change chartType
    var animChartType = new wijmo.input.Menu('#animChartType', {
        itemClicked: function (s, e) {
            var arg = wijmo.changeType(s.selectedValue, wijmo.DataType.Number),
                binding = 'high,low,open,close';
            if (wijmo.isNumber(arg)) {
                animChart.chartType = arg;
                switch (arg) {
                    case ChartType.Area:
                    case ChartType.Line:
                    case ChartType.Column:
                        binding = 'close';
                        break;
                    case ChartType.ColumnVolume:
                        binding = 'close,volume';
                        break;
                    case ChartType.EquiVolume:
                    case ChartType.CandleVolume:
                    case ChartType.ArmsCandleVolume:
                        binding = 'high,low,open,close,volume';
                        break;
                }
                animChart.series[0].binding = binding;
            }
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(animChartType, 'Chart Type');

    // change animation easing
    var animEasing = new wijmo.input.Menu('#animEasing', {
        itemClicked: function (s) {
            var arg = s.selectedValue;
            if (arg) {
                animation.easing = wijmo.chart.animation.Easing[arg];
                animChart.refresh(true);
            }
            updateMenuHeader(s, 'Easing');
        }
    });
    updateMenuHeader(animEasing, 'Easing');

    // change animation duration
    var animDuration = new wijmo.input.InputNumber('#animDuration', {
        step: 200,
        format: 'n0',
        value: 400,
        min: 200,
        max: 5000,
        valueChanged: function (s, e) {
            animation.duration = s.value;
            animChart.refresh(true);
        }
    });
}