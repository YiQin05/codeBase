onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // generate data for the samples
    function getData() {
        var data = [],
            times = [['Jan', 'Feb', 'Mar'], ['Apr', 'May', 'June'], ['Jul', 'Aug', 'Sep'], ['Oct', 'Nov', 'Dec']],
            years = [],
            year = new Date().getFullYear(),
            yearLen = Math.max(Math.round(Math.abs(5 - Math.random() * 10)), 3),
            quarterAdded = false;

        for (var i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        years.forEach(function (y, yIndex) {
            var addQuarter = Math.random() > 0.5;
            if (!quarterAdded && yIndex == years.length - 1) {
                addQuarter = true;
            }
            if (addQuarter) {
                quarterAdded = true;
                times.forEach(function (q, qIndex) {
                    var addMonth = Math.random() > 0.5,
                        quar = 'Q' + (qIndex + 1);
                    if (addMonth) {
                        q.forEach(function (m) {
                            data.push({
                                year: y.toString(),
                                quarter: quar,
                                month: m,
                                value: Math.round(Math.random() * 100)
                            });
                        });
                    } else {
                        data.push({
                            year: y.toString(),
                            quarter: quar,
                            value: Math.round(Math.random() * 400)
                        });
                    }
                });
            } else {
                data.push({
                    year: y.toString(),
                    value: Math.round(Math.random() * 1200)
                });
            }
        });
        return data;
    }
    function getHierarchicalData() {
        var data = [],
            times = [['Jan', 'Feb', 'Mar'], ['Apr', 'May', 'June'], ['Jul', 'Aug', 'Sep'], ['Oct', 'Nov', 'Dec']],
            years = [],
            year = new Date().getFullYear(),
            yearLen = Math.max(Math.round(Math.abs(5 - Math.random() * 10)), 3),
            quarterAdded = false;
        for (var i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        years.forEach(function (y, yIndex) {
            var addQuarter = Math.random() > 0.5;
            if (!quarterAdded && yIndex === years.length - 1) {
                addQuarter = true;
            }
            var year = {
                year: y.toString(),
            };
            if (addQuarter) {
                var quarters = [];
                quarterAdded = true;
                times.forEach(function (q, qIndex) {
                    var addMonth = Math.random() > 0.5,
                        quarter = {
                            quarter: 'Q' + (qIndex + 1)
                        };
                    if (addMonth) {
                        var months = [];
                        q.forEach(function (m) {
                            months.push({
                                month: m,
                                value: Math.round(Math.random() * 100)
                            });
                        });
                        quarter.items = months;
                    } else {
                        quarter.value = Math.round(Math.random() * 400);
                    }
                    quarters.push(quarter);
                });
                year.items = quarters;
            } else {
                year.value = Math.round(Math.random() * 1200)
            }
            data.push(year);
        });
        return data;
    }
    function getGroupCVData() {
        var data = [],
            quarters = ['Q1', 'Q2', 'Q3', 'Q4'],
            months = [
                [
                    { name: 'Jan', value: 1 },
                    { name: 'Feb', value: 2 },
                    { name: 'Mar', value: 3 }
                ], [
                    { name: 'Apr', value: 4 },
                    { name: 'May', value: 5 },
                    { name: 'Jun', value: 6 }
                ], [
                    { name: 'Jul', value: 7 },
                    { name: 'Aug', value: 8 },
                    { name: 'Sep', value: 9 }
                ], [
                    { name: 'Oct', value: 10 },
                    { name: 'Nov', value: 11 },
                    { name: 'Dec', value: 12 }
                ]],
            years = [],
            year = new Date().getFullYear(),
            yearLen = 3,
            len = 100;
        for (var i = yearLen; i > 0; i--) {
            years.push(year - i);
        }
        for (i = 0; i < len; i++) {
            var y = Math.floor(Math.random() * yearLen);
            var q = Math.floor(Math.random() * 4);
            var m = Math.floor(Math.random() * 3);
            data.push({
                year: years[y],
                quarter: quarters[q],
                month: months[q][m].name,
                monthVal: months[q][m].value,
                value: Math.round(Math.random() * 100)
            });
        }
        var cv = new wijmo.collections.CollectionView(data);
        cv.sortDescriptions.push(new wijmo.collections.SortDescription('year', false));
        cv.sortDescriptions.push(new wijmo.collections.SortDescription('quarter', false));
        cv.sortDescriptions.push(new wijmo.collections.SortDescription('monthVal', false));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('year'));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('quarter'));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('month'));
        return cv;
    }
    function getThemeData() {
        return [
            { name: '5', items: [
                { name: '4', items: [
                    { name: '3', items: [
                        { name: '2', items: [
                            { name: '1', value: 1 }
                        ]}
                    ]}
                ]}
            ]}
        ];
    }

    // helper methods
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }


    ////////////////////////////////////////////////////////////////////////////
    // Getting Started
    var introChart = new wijmo.chart.hierarchical.Sunburst('#introChart', {
        binding: 'value',
        bindingName: ['year', 'quarter', 'month'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });


    ////////////////////////////////////////////////////////////////////////////
    // Grouped CollectionView
    var groupCVChart = new wijmo.chart.hierarchical.Sunburst('#groupCVChart', {
        binding: 'value',
        itemsSource: getGroupCVData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });


    ////////////////////////////////////////////////////////////////////////////
    // Basic Features
    var basicChart = new wijmo.chart.hierarchical.Sunburst('#basicChart', {
        binding: 'value',
        bindingName: 'year, quarter, month',
        childItemsPath: 'items',
        itemsSource: getHierarchicalData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });

    // change the chart properties
    var innerRadius = new wijmo.input.InputNumber('#basicInnerRadius', {
        min: 0,
        max: 1,
        step: 0.1,
        format: 'n1',
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                basicChart.innerRadius = s.value;
            }
        }
    });
    var offset = new wijmo.input.InputNumber('#basicOffset', {
        min: 0,
        max: 1,
        step: 0.1,
        format: 'n1',
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                basicChart.offset = s.value;
            }
        }
    });
    var startAngle = new wijmo.input.InputNumber('#basicStartAngle', {
        min: -360,
        max: 360,
        step: 45,
        valueChanged: function (s) {
            if (s.value >= s.min && s.value <= s.max) {
                basicChart.startAngle = s.value;
            }
        }
    });
    var palettes = new wijmo.input.Menu('#basicPalette', {
        itemsSource: 'standard,cocoa,coral,dark,highcontrast,light,midnight,modern,organic,slate,zen,cyborg,superhero,flatly,darkly,cerulan'.split(','),
        textChanged: function (s, e) {
            if (s.selectedValue) {
                basicChart.palette = wijmo.chart.Palettes[s.text];
                updateMenuHeader(s, 'Palette');
            }
        }
    });
    updateMenuHeader(palettes, 'Palette');
    document.getElementById('basicReversed').addEventListener('click', function (e) {
        basicChart.reversed = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////////
    // Legend and Titles
    var ltChart = new wijmo.chart.hierarchical.Sunburst('#ltChart', {
        binding: 'value',
        bindingName: ['year', 'quarter', 'month'],
        itemsSource: getData(),
        header: 'Sales',
        footer: 'GrapeCity, inc.',
    });

    // change chart properties
    var header = document.getElementById('ltHeader');
    header.value = ltChart.header;
    header.addEventListener('input', function (e) {
        ltChart.header = e.target.value;
    });
    var footer = document.getElementById('ltFooter');
    footer.value = ltChart.footer;
    footer.addEventListener('input', function (e) {
        ltChart.footer = e.target.value;
    });
    var ltLegPos = new wijmo.input.Menu('#ltLegPos', {
        itemClicked: function (s, e) {
            ltChart.legend.position = s.selectedValue;
            updateMenuHeader(s, 'Legend Position');
        },
        selectedValue: 'Right'
    });
    updateMenuHeader(ltLegPos, 'Legend Position');


    ////////////////////////////////////////////////////////////////////////////
    // Selection
    var selChart = new wijmo.chart.hierarchical.Sunburst('#selChart', {
        binding: 'value',
        bindingName: ['year', 'quarter', 'month'],
        itemsSource: getData(),
        isAnimated: true,
        selectionMode: 'Point',
        selectedItemPosition: 'Top'
    });

    // change chart properties
    var selItemOffset = new wijmo.input.InputNumber('#selItemOffset', {
        min: 0,
        max: 0.5,
        step: 0.1,
        format: 'n1',
        valueChanged: function (s) {
            if (s.value >= s.min && s.value <= s.max) {
                selChart.selectedItemOffset = s.value;
            }
        }
    });
    var selItemPos = new wijmo.input.Menu('#selItemPos', {
        itemClicked: function (s, e) {
            selChart.selectedItemPosition = s.selectedValue;
            updateMenuHeader(s, 'Selected Item Position');
        },
        selectedValue: 'Top'
    });
    updateMenuHeader(selItemPos, 'Selected Item Position');
    document.getElementById('selAnimated').addEventListener('click', function (e) {
        selChart.isAnimated = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////////
    // Theming
    var themeChart = new wijmo.chart.hierarchical.Sunburst('#themeChart', {
        itemsSource: getThemeData(),
        header: 'Bullseye(target)',
        binding: 'value',
        bindingName: 'name',
        childItemsPath: 'items',
        legend: { position: 'None' },
        tooltip: { content: '' }
    });
} 