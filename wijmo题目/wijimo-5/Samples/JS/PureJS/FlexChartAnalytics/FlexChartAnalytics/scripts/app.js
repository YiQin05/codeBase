onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // generate some random data
    var appData = getData(10);
    function getData(count) {
        var data = [];
        for (var i = 1; i <= count; i++) {
            data.push({
                x: i,
                y: Math.floor(Math.random() * 100)
            });
        }
        return data;
    }

    // update menu header to show current value
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }


    ///////////////////////////////////////////////////////////////////////
    // Getting Started

    // create a chart
    var gettingStartedChart = new wijmo.chart.FlexChart('#gettingStartedChart', {
        itemsSource: appData,
        bindingX: 'x',
        series: [
            { name: 'Origin', binding: 'y', chartType: 'Scatter' }
        ]
    });

    // add a TrendLine to the chart
    gettingStartedChart.series.push(new wijmo.chart.analytics.TrendLine({
        name: 'Trendline',
        binding: 'y',
        sampleCount: 100,
    }));


    ///////////////////////////////////////////////////////////////////////
    // Trandline
    var trendLineChart = new wijmo.chart.FlexChart('#trendLineChart', {
        itemsSource: appData,
        bindingX: 'x',
        series: [
            { name: 'Origin', binding: 'y', chartType: 'Scatter'
        }]
    });

    // add TrendLine to the chart
    var trendLine = new wijmo.chart.analytics.TrendLine({
        name: 'Trend Line',
        binding: 'y',
        sampleCount: 100
    });
    trendLineChart.series.push(trendLine);

    // trendline fit type menu
    var fitTypeMenu = new wijmo.input.Menu('#fitTypeMenu', {
        itemClicked: function (s, e) {
            trendLine.fitType = parseInt(fitTypeMenu.selectedValue);
            updateMenuHeader(s, 'Fit Type');
        }
    });
    updateMenuHeader(fitTypeMenu, 'Fit Type');


    ///////////////////////////////////////////////////////////////////////
    // MovingAverage
    var movingAverageChart = new wijmo.chart.FlexChart('#movingAverageChart', {
        itemsSource: getData(40),
        bindingX: 'x',
        series: [
            { name: 'Origin', binding: 'y', chartType: 'Scatter'
        }]
    });

    // create MovingAverage series and add it to the chart
    var movingAverage = new wijmo.chart.analytics.MovingAverage({
        name: 'Moving Avg',
        binding: 'y',
        sampleCount: 100
    });
    movingAverageChart.series.push(movingAverage);

    // change the moving average period
    var periodInput = new wijmo.input.InputNumber('#periodInput', {
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                movingAverage.period = s.value;
            }
        },
        value: 2,
        min: 2,
        max: 29,
        step: 1,
        format: 'n0'
    });

    // change chart type
    var typeMenu = new wijmo.input.Menu('#typeMenu', {
        itemClicked: function (s, e) {
            movingAverage.type = parseInt(typeMenu.selectedValue);
            updateMenuHeader(s , 'Fit Type');
        }
    });
    updateMenuHeader(typeMenu, 'Fit Type');


    ///////////////////////////////////////////////////////////////////////
    // YFunctionSeries
    var yFuncSeriesChart = new wijmo.chart.FlexChart('#yFuncSeriesChart');

    // add a YFunctionSeries series
    yFuncSeriesChart.series.push(new wijmo.chart.analytics.YFunctionSeries({
        name: 'YFunc',
        min: -10,
        max: 10,
        sampleCount: 300,
        func: function (value) {
            return Math.sin(4 * value) * Math.cos(3 * value)
        }
    }));


    ///////////////////////////////////////////////////////////////////////
    // ParametricFunctionSeries
    var paramFuncSeriesChart = new wijmo.chart.FlexChart('#paramFuncSeriesChart');

    //create ParametricFunctionSeries
    var xParam = 5,
        yParam = 7;
    paramFuncSeriesChart.series.push(new wijmo.chart.analytics.ParametricFunctionSeries({
        name: 'ParamFunc',
        max: 2 * Math.PI,
        sampleCount: 1000,
        xFunc: function (value) {
            return Math.cos(value * xParam);
        },
        yFunc: function (value) {
            return Math.sin(value * yParam);
        },
    }));


    ///////////////////////////////////////////////////////////////////////
    // Waterfall
    var waterfallChart = new wijmo.chart.FlexChart('#waterfallChart', {
        itemsSource: getWaterFallData(),
        binding: 'value',
        bindingX: 'name',
        tooltip: {
            content: function (ht) {
                return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
            }
        }
    });

    // create Waterfall series and add it to the chart
    var waterfall = new wijmo.chart.analytics.Waterfall({
        relativeData: true,
        connectorLines: true,
        showTotal: true,
        start: 1000,
        showIntermediateTotal: true,
        intermediateTotalPositions: [3, 6, 9, 12],
        intermediateTotalLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
        name: 'Increase,Decrease,Total',
        styles: {
            connectorLines: {
                stroke: '#333',
                strokeWidth: 3
            },
            start: {
                fill: '#7dc7ed'
            },
            falling: {
                fill: '#dd2714',
                stroke: '#a52714'
            },
            rising: {
                fill: '#0f9d58',
                stroke: '#0f9d58'
            },
            intermediateTotal: {
                fill: '#7dc7ed'
            },
            total: {
                fill: '#7dc7ed'
            }
        }
    });
    waterfallChart.series.push(waterfall);

    // configure waterfall
    document.getElementById('relativeData').addEventListener('click', function (e) {
        waterfall.relativeData = e.target.checked;
    });
    document.getElementById('connectorLines').addEventListener('click', function (e) {
        waterfall.connectorLines = e.target.checked;
    });
    document.getElementById('showTotal').addEventListener('click', function (e) {
        waterfall.showTotal = e.target.checked;
    });
    document.getElementById('showIntermediateTotal').addEventListener('click', function (e) {
        waterfall.showIntermediateTotal = e.target.checked;
    });

    // create some data for the Waterfall chart
    function getWaterFallData() {
        var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data = [];
        names.forEach(function (item) {
            data.push({
                name: item,
                value: Math.round((0.5 - Math.random()) * 1000)
            });
        });
        return data;
    }


    ///////////////////////////////////////////////////////////////////////
    // BoxWhisker
    var boxwhiskerChart = new wijmo.chart.FlexChart('#boxwhiskerChart', {
        itemsSource: getBoxWhiskerData(),
        bindingX: 'country',
        tooltip: {
            content: function (ht) {
                return '<b>' + ht.name + '</b> - <b>' + ht.x + '</b></br>' +
                    '<b>min</b>: ' + ht.item.min + '</br>' +
                    '<b>firstQuartile</b>: ' + ht.item.firstQuartile + '</br>' +
                    '<b>median</b>: ' + ht.item.median + '</br>' +
                    '<b>thirdQuartile</b>: ' + ht.item.thirdQuartile + '</br>' +
                    '<b>max</b>: ' + ht.item.max + '</br>' +
                    '<b>mean</b>: ' + ht.item.mean + '</br>';
            }
        }
    });

    // add some BoxWhisker series to the chart
    boxwhiskerChart.series.push(new wijmo.chart.analytics.BoxWhisker({
        name: 'Downloads',
        binding: 'downloads'
    }));
    boxwhiskerChart.series.push(new wijmo.chart.analytics.BoxWhisker({
        name: 'Sales',
        binding: 'sales'
    }));
    boxwhiskerChart.series.push(new wijmo.chart.analytics.BoxWhisker({
        name: 'Expenses',
        binding: 'expenses'
    }));

    // configure the chart
    var groupWidth = new wijmo.input.InputNumber('#boxGroupWidth', {
        min: 0,
        max: 1,
        step: 0.1,
        valueChanged: function (s) {
            if (s.value >= s.min && s.value <= s.max) {
                boxwhiskerChart.series.forEach(function (series) {
                    series.groupWidth = s.value;
                })
            }
        },
        value: 0.8
    });
    var gapWidth = new wijmo.input.InputNumber('#boxGapWidth', {
        min: 0,
        max: 1,
        step: 0.1,
        valueChanged: function (s) {
            if (s.value >= s.min && s.value <= s.max) {
                boxwhiskerChart.series.forEach(function (series) {
                    series.gapWidth = s.value;
                });
            }
        },
        value: 0.1
    });
    var quartileCalculation = new wijmo.input.Menu('#boxQuartileCalculation', {
        itemClicked: function (s, e) {
            var val = parseInt(s.selectedValue);
            boxwhiskerChart.series.forEach(function (series) {
                series.quartileCalculation = val;
            });
            updateMenuHeader(s);
        }
    });
    updateMenuHeader(quartileCalculation);

    // handle checkboxes
    document.getElementById('boxShowMeanLine').addEventListener('click', function (e) {
        boxwhiskerChart.series.forEach(function (series) {
            series.showMeanLine = e.target.checked;
        });
    });
    document.getElementById('boxShowMeanMarker').addEventListener('click', function (e) {
        boxwhiskerChart.series.forEach(function (series) {
            series.showMeanMarker = e.target.checked;
        });
    });
    document.getElementById('boxShowInnerPoints').addEventListener('click', function (e) {
        boxwhiskerChart.series.forEach(function (series) {
            series.showInnerPoints = e.target.checked;
        });
    });
    document.getElementById('boxShowOutliers').addEventListener('click', function (e) {
        boxwhiskerChart.series.forEach(function (series) {
            series.showOutliers = e.target.checked;
        });
    });
    document.getElementById('boxRotated').addEventListener('click', function (e) {
        boxwhiskerChart.rotated = e.target.checked;
    });
    document.getElementById('boxShowLabel').addEventListener('click', function (e) {
        boxwhiskerChart.dataLabel.content = e.target.checked ? '{y}' : '';
    });

    // create some data for the BoxWhisker chart
    function getBoxWhiskerData() {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        countries.forEach(function (country) {
            data.push({
                country: country,
                downloads: getBoxWhiskerArray(12, 100),
                sales: getBoxWhiskerArray(11, 100),
                expenses: getBoxWhiskerArray(13, 100)
            });
        });
        return data;
    }
    function getBoxWhiskerArray(cnt, maxVal) {
        var arr = [];
        for (var i = 0; i < cnt; i++) {
            arr.push(Math.round(Math.random() * maxVal));
        }
        return arr;
    }


    ///////////////////////////////////////////////////////////////////////
    // Error Bars
    var errorbarChart = new wijmo.chart.FlexChart('#errorbarChart', {
        itemsSource: getErrorBarData(),
        bindingX: 'country',
        tooltip: { content: '{y}' },
    });

    // add ErrorBar series to the chart
    var errorBar = new wijmo.chart.analytics.ErrorBar({
        binding: 'downloads',
        value: 10
    });
    errorbarChart.series.push(errorBar);

    // customize chart/ErrorAmount series
    document.getElementById('ebRotated').addEventListener('click', function (e) {
        errorbarChart.rotated = e.target.checked;
    });

    var chartType = new wijmo.input.Menu('#ebChartType', {
        itemClicked: function (s, e) {
            var val = parseInt(chartType.selectedValue);
            errorbarChart.chartType = val;
            updateMenuHeader(chartType);
        }
    });
    updateMenuHeader(chartType);

    var errorAmount = new wijmo.input.Menu('#ebErrorAmount', {
        itemClicked: function (s, e) {
            var val = parseInt(errorAmount.selectedValue);
            errorBar.errorAmount = val;
            switch (val) {
                case 0:
                    errorBar.value = 10;
                    break;
                case 1: 
                    errorBar.value = 0.1;
                    break;
                case 2: 
                    errorBar.value = 1;
                    break;
                case 4: 
                    errorBar.value = {
                        minus: 5,
                        plus: 10
                    };
                    break;
            }
            updateMenuHeader(errorAmount);
        }
    });
    updateMenuHeader(errorAmount);

    var endStyle = new wijmo.input.Menu('#ebEndStyle', {
        itemClicked: function (s, e) {
            var val = parseInt(s.selectedValue);
            errorBar.endStyle = val;
            updateMenuHeader(s);
        }
    });
    updateMenuHeader(endStyle);

    var direction = new wijmo.input.Menu('#ebDirection', {
        itemClicked: function (s, e) {
            var val = parseInt(s.selectedValue);
            errorBar.direction = val;
            updateMenuHeader(s);
        }
    });
    updateMenuHeader(direction);

    // create some data for the Error Bar chart
    function getErrorBarData() {
        var countries = 'US,Germany,UK,Japan,Italy,Greece,China,France,Russia'.split(','),
            data = [];
        countries.forEach(function (country) {
            data.push({
                country: country,
                downloads: getErrorBarValue(),
                sales: getErrorBarValue()
            });
        });
        return data;
    }
    function getErrorBarValue() {
        var val = Math.round(Math.random() * 100);
        return val > 10 ? val : val + 10;
    }
}
