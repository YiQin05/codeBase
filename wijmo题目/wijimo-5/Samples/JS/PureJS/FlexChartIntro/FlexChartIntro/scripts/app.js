onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // helper function for Menu headers
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }

    // helper function for showing text
    function setText(id, value, format) {
        document.getElementById(id).textContent = format
            ? wijmo.Globalize.format(value, format)
            : value;
    }

    // generate some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        appData = [], rangeData = [], funnelData = [], boxPlotterData = [], sales = 10000;
    for (var i = 0; i < countries.length; i++) {
        appData.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
        var year = new Date().getFullYear();
        rangeData.push({
            country: countries[i],
            num1: Math.random() * 10000,
            num2: Math.random() * 20000,
            date1: new Date(year, Math.floor(Math.random() * 6), Math.floor(Math.random() * 14)),
            date2: new Date(year, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))
        });
        funnelData.push({
            country: countries[i],
            sales: sales
        });
        boxPlotterData.push({
            country: countries[i],
            downloads: [getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData()],
            sales: [getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData()],
            expenses: [getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData()]
        });
        sales = sales - Math.round(Math.random() * 2000);
    }
    function getData() {
        return Math.round(Math.random() * 100);
    }


    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    var gsChart = new wijmo.chart.FlexChart('#gettingStartedChart', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Chart Types
    var ctChart = new wijmo.chart.FlexChart('#chartTypes', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]
    });
    var typeMenu = new wijmo.input.Menu('#typeMenu', {
        itemClicked: function (s, e) {
            ctChart.chartType = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(typeMenu, 'Chart Type');
    var stackingMenu = new wijmo.input.Menu('#stackingMenu', {
        itemClicked: function (s, e) {
            ctChart.stacking = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Stacking');
        }
    });
    updateMenuHeader(stackingMenu, 'Stacking');
    var rotatedMenu = new wijmo.input.Menu('#rotatedMenu', {
        itemClicked: function (s, e) {
            ctChart.rotated = s.selectedValue == 'true';
            updateMenuHeader(s, 'Rotated');
        }
    });
    updateMenuHeader(rotatedMenu, 'Rotated');


    ////////////////////////////////////////////////////////////////////////
    // Range Bar/Column
    var rngChart = new wijmo.chart.FlexChart('#rangebarChart', {
        itemsSource: rangeData,
        bindingX: 'country',
        series: [{ binding: 'num1,num2' }],
        tooltip: {
            content: function (ht) {
                var str = ht.x + ': <br/>';
                var dataTypes = rangebarDataTypeMenu.selectedValue.split(',');
                var min = Math.min(ht.item[dataTypes[0]], ht.item[dataTypes[1]]);
                var max = Math.max(ht.item[dataTypes[0]], ht.item[dataTypes[1]]);
                if (wijmo.isDate(ht.item[dataTypes[0]])) {
                    str += (new Date(min)).toLocaleDateString() + ' - ' + (new Date(max)).toLocaleDateString();
                } else {
                    str += Math.round(min) + ' - ' + Math.round(max);
                }
                return str;
            }
        }
    });
    var rangebarTypeMenu = new wijmo.input.Menu('#rangebarTypeMenu', {
        itemClicked: function (s, e) {
            rngChart.chartType = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(rangebarTypeMenu, 'Chart Type');
    var rangebarDataTypeMenu = new wijmo.input.Menu('#rangebarDataTypeMenu', {
        itemClicked: function (s, e) {
            rngChart.series[0].binding = s.selectedValue;
            updateMenuHeader(s, 'Data Type');
        }
    });
    updateMenuHeader(rangebarDataTypeMenu, 'Data Type');


    ////////////////////////////////////////////////////////////////////////
    // Funnel Charts
    var fnlChart = new wijmo.chart.FlexChart('#funnelChart', {
        itemsSource: funnelData,
        chartType: wijmo.chart.ChartType.Funnel,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' }
        ],
        dataLabel: { content: '{y}' },
        options: {
            funnel: {
                neckWidth: 0.2,
                neckHeight: 0.2,
                type: 'default'
            }
        }
    });
    var neckWidth = new wijmo.input.InputNumber('#funnelNeckWidth', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                fnlChart.options.funnel.neckWidth = s.value;
                fnlChart.refresh(true);
            }
        },
        value: 0.2
    });
    var neckHeight = new wijmo.input.InputNumber('#funnelNeckHeight', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                fnlChart.options.funnel.neckHeight = s.value;
                fnlChart.refresh(true);
            }
        },
        value: 0.2
    });
    var funnelType = new wijmo.input.Menu('#funnelType', {
        itemClicked: function (s, e) {
            fnlChart.options.funnel.type = s.selectedValue;
            fnlChart.refresh(true);
            updateMenuHeader(s, 'Funnel Type');
        }
    });
    updateMenuHeader(funnelType, 'Funnel Type');


    ////////////////////////////////////////////////////////////////////////
    // Mixed Chart Types
    var mixChart = new wijmo.chart.FlexChart('#mixedTypesChart', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads', chartType: wijmo.chart.ChartType.LineSymbols }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Legend and Titles
    var ltChart = new wijmo.chart.FlexChart('#chartLegendAndTitles', {
        itemsSource: appData,
        bindingX: 'country',
        header: 'Sample Chart',
        footer: 'copyright (c) ComponentOne',
        axisX: { title: 'country' },
        axisY: { title: 'amount' },
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]
    });
    var positionMenu = new wijmo.input.Menu('#positionMenu', {
        itemClicked: function (s, e) {
            ltChart.legend.position = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Legend');
        }
    });
    updateMenuHeader(positionMenu, 'Legend');

    // sync the input's value with FlexChart's header
    var headerInput = document.getElementById('headerInput');
    headerInput.value = ltChart.header;
    headerInput.addEventListener('input', function (e) {
        ltChart.header = e.target.value;
    });

    // sync the input's value with FlexChart's footer
    var footerInput = document.getElementById('footerInput');
    footerInput.value = ltChart.footer;
    footerInput.addEventListener('input', function (e) {
        ltChart.footer = e.target.value;
    });

    // sync the input's value with FlexChart's X-Axis title
    var xTitleInput = document.getElementById('xTitleInput');
    xTitleInput.value = ltChart.axisX.title;
    xTitleInput.addEventListener('input', function (e) {
        ltChart.axisX.title = e.target.value;
    });

    // sync the input's value with FlexChart's Y-Axis title
    var yTitleInput = document.getElementById('yTitleInput');
    yTitleInput.value = ltChart.axisY.title;
    yTitleInput.addEventListener('input', function (e) {
        ltChart.axisY.title = e.target.value;
    });


    ////////////////////////////////////////////////////////////////////////
    // Tooltips
    var ttChart = new wijmo.chart.FlexChart('#chartTooltip', {
        itemsSource: appData,
        bindingX: 'country',
        tooltip: { content: "<img src='resources/{x}.png'/> <b>{seriesName}</b><br/>{y}" },
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Styling Series
    var ssChart = new wijmo.chart.FlexChart('#chartSeriesStyle', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            {
                name: 'Sales',
                binding: 'sales',
                style: {
                    fill: 'green',
                    stroke: 'darkgreen',
                    strokeWidth: 1
                }
            },
            {
                name: 'Expenses',
                binding: 'expenses',
                style: {
                    fill: 'red',
                    stroke: 'darkred',
                    strokeWidth: 1
                }
            },
            {
                name: 'Downloads',
                binding: 'downloads',
                chartType: 'LineSymbols',
                style: {
                    stroke: 'orange',
                    strokeWidth: 5
                },
                symbolStyle: {
                    fill: 'gold',
                    stroke: 'gold'
                }
            }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Customizing Axes
    var axChart = new wijmo.chart.FlexChart('#chartCustomizeAxes', {
        itemsSource: appData,
        bindingX: 'country',
        axisX: { axisLine: true, majorGrid: true },
        axisY: { format: 'c0', max: 10000, majorUnit: 2000, axisLine: true, majorGrid: true },
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Theming
    var thmChart = new wijmo.chart.FlexChart('#chartTheme', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]
    });


    ////////////////////////////////////////////////////////////////////////
    // Selection Modes
    var smChart = new wijmo.chart.FlexChart('#chartSelectionMode', {
        itemsSource: appData,
        bindingX: 'country',
        selectionMode: 'Series',
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ],
        selectionChanged: function (s, e) {
            showChartSelection();
        }
    });

    // chart type
    var typeMenu = new wijmo.input.Menu('#chartTypeMenu', {
        itemClicked: function (s, e) {
            smChart.chartType = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(typeMenu, 'Chart Type');

    // selection mode
    var selectionModeMenu = new wijmo.input.Menu('#seletionModeMenu', {
        itemClicked: function (s, e) {
            smChart.selectionMode = parseInt(s.selectedValue);
            showChartSelection();
            updateMenuHeader(s, 'Selection Mode');
        }
    });
    updateMenuHeader(selectionModeMenu, 'Selection Mode');

    // update selection pane when selection or selection mode change
    function showChartSelection() {
        var seriesContainer = document.getElementById('seriesContainer'),
            series = smChart.selectionMode ? smChart.selection : null
        if (series) {

            // show selected series
            seriesContainer.style.display = '';
            setText('seriesName', series.name);
            var item = series.collectionView.currentItem,
                detailContainer = document.getElementById('detailContainer');
            if (item && smChart.selectionMode == wijmo.chart.SelectionMode.Point) {

                // show selected point
                detailContainer.style.display = '';
                setText('seriesCountry', item.country);
                setText('seriesSales', item.sales, 'c2');
                setText('seriesExpenses', item.expenses, 'c2');
                setText('seriesDownloads', item.downloads, 'n0');
            } else {
                detailContainer.style.display = 'none';
            }
        } else {
            seriesContainer.style.display = 'none';
        }
    }


    ////////////////////////////////////////////////////////////////////////
    // Toggle Series Visibility
    var svChart = new wijmo.chart.FlexChart('#chartLegendToggle', {

        // initialize chart
        itemsSource: appData,
        bindingX: 'country',
        legendToggle: true,
        series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ],

        // update checkboxes when series visibility changes
        seriesVisibilityChanged: function (s, e) {
            s.series.forEach(function (series) {
                var seriesName = series.name,
                    checked = series.visibility == wijmo.chart.SeriesVisibility.Visible;
                document.getElementById('cb' + seriesName).checked = checked;
            });
        }
    });

    // update series visibility when checkboxes are clicked
    svChart.series.forEach(function (series, index) {
        var el = document.getElementById('cb' + series.name);
        el.checked = series.visibility == wijmo.chart.SeriesVisibility.Visible;
        el.addEventListener('click', function (e) {
            series.visibility = e.target.checked
                ? wijmo.chart.SeriesVisibility.Visible
                : wijmo.chart.SeriesVisibility.Legend;
        });
    });


    ////////////////////////////////////////////////////////////////////////
    // Gradient Colors
    var pdgradChart = new wijmo.chart.FlexChart('#predefinedChart', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { binding: 'sales' }
        ]
    });

    // pre-defined color menu
    var predefinedColorMenu = new wijmo.input.Menu('#predefinedColorMenu', {
        itemClicked: function (s, e) {
            applyBasicGradientColor();
            updateMenuHeader(s, 'Color');
        }
    });
    applyBasicGradientColor();
    function applyBasicGradientColor() {
        pdgradChart.series[0].style = {
            fill: predefinedColorMenu.selectedValue
        };
        pdgradChart.refresh(true);
    }
    updateMenuHeader(predefinedColorMenu, 'Color');

    // chart with custom gradients
    var gradChart = new wijmo.chart.FlexChart('#chartGradientColors', {
        itemsSource: appData,
        bindingX: 'country',
        series: [
            { binding: 'sales' }
        ]
    });

    // chart type
    var gradientChartType = new wijmo.input.Menu('#gradientChartType', {
        itemClicked: function (s, e) {
            gradChart.chartType = parseInt(gradientChartType.selectedValue);
            updateMenuHeader(s, 'Chart Type');
        }
    });
    updateMenuHeader(gradientChartType, 'Chart Type');

    // custom gradient
    var startColor = new wijmo.input.InputColor('#gradientStartColor', {
        valueChanged: function(s, e) {
            applyGradientColor();
        },
        value: '#ff0000'
    });
    var endColor = new wijmo.input.InputColor('#gradientEndColor', {
        valueChanged: function(s, e) {
            applyGradientColor();
        },
        value: '#0000ff'
    });
    var startOffset = new wijmo.input.InputNumber('#gradientStartOffset', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function(s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                applyGradientColor();
            }
        },
        value: 0
    });
    var endOffset = new wijmo.input.InputNumber('#gradientEndOffset', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function(s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                applyGradientColor();
            }
        },
        value: 1
    });
    var startOpacity = new wijmo.input.InputNumber('#gradientStartOpacity', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function(s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                applyGradientColor();
            }
        },
        value: 1
    });
    var endOpacity = new wijmo.input.InputNumber('#gradientEndOpacity', {
        min: 0,
        max: 1,
        step: .1,
        valueChanged: function(s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                applyGradientColor();
            }
        },
        value: 1
    });

    // gradient type and direction
    var type = new wijmo.input.Menu('#gradientTypeMenu', {
        itemClicked: function(s, e) {
            applyGradientColor();
            updateMenuHeader(type, 'Gradient Type');
        }
    });
    updateMenuHeader(type, 'Gradient Type');
    var direction = new wijmo.input.Menu('#gradientDirectionMenu', {
        itemClicked: function(s, e) {
            applyGradientColor();
            updateMenuHeader(direction, 'Direction');
        }
    });
    updateMenuHeader(direction, 'Direction');

    // apply the current gradient color
    function applyGradientColor() {
        if (type && direction) {
            var t = type.selectedValue,
                d = direction.selectedValue,
                color = t,
                dtDirection = document.getElementById('dtGradientDirection'),
                ddDirection = document.getElementById('ddGradientDirection');
            if (t === 'l') {
                dtDirection.style.display = 'block';
                ddDirection.style.display = 'block';
                color += d == 'horizontal'
                    ? '(0, 0, 1, 0)'
                    : '(0, 0, 0, 1)';
            } else {
                dtDirection.style.display = 'none';
                ddDirection.style.display = 'none';
                color += '(0.5, 0.5, 0.5)'
            }
            color += startColor.value;
            if (startOffset.value != 0 || startOpacity.value != 1) {
                color += ':' + startOffset.value;
            }
            if (startOpacity.value != 1) {
                color += ':' + startOpacity.value;
            }
            color += '-' + endColor.value;
            if (endOffset.value != 1 || endOpacity.value != 1) {
                color += ':' + endOffset.value;
            }
            if (endOpacity.value != 1) {
                color += ':' + endOpacity.value;
            }
            setText('gradientColorsLabel', color);
            gradChart.series[0].style = {
                fill: color
            };
            gradChart.refresh(true);
        }
    }
    applyGradientColor();


    ////////////////////////////////////////////////////////////////////////
    // Dynamic Charts
    var toAddData = null,
        interval = null,
        trafficData = new wijmo.collections.ObservableArray(),
        setInterval = function(interval) {
            if (toAddData) {
                clearTimeout(toAddData);
                toAddData = null;
            }
            if (interval) {
                toAddData = setTimeout(function() {
                    addTrafficItem(trafficData, interval);
                });
            }
        };

    // create FlexChart
    var dynamicChart = new wijmo.chart.FlexChart('#dynamicChart', {
        chartType: 'Area',
        stacking: 'Stacked',
        itemsSource: trafficData,
        bindingX: 'time',
        axisX: { format: 'mm:ss' },
        series: [
            { name: 'Trucks', binding: 'trucks' },
            { name: 'Ships', binding: 'ships' },
            { name: 'Planes', binding: 'planes' }
        ]
    });
    setInterval(500);

    // Bind the click event to the speed buttons
    var intervalHash = { // interval hash for the speed buttons
        Slow: 200,
        Medium: 100,
        Fast: 50,
        Stop: 0
    };
    for (var prop in intervalHash) {
        document.getElementById('btn' + prop).addEventListener('click', buttonClick(intervalHash[prop]));
    }
    function buttonClick(value) {
        return function() {
            setInterval(value);
        };
    }
    function addTrafficItem(trafficData, interval) {
        var len = trafficData.length,
            last = len ? trafficData[len - 1] : null,
            trucks = last ? last.trucks : 0,
            ships = last ? last.ships : 0,
            planes = last ? last.planes : 0;
        trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
        ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
        planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

        // add random data, limit array length
        trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
        if (trafficData.length > 200) {
            trafficData.splice(0, 1);
        }

        // keep adding
        if (interval) {
            toAddData = setTimeout(function() {
                addTrafficItem(trafficData, interval);
            }, interval);
        }
    }
}

