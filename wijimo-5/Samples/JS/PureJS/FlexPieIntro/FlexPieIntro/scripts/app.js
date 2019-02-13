onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // update menu header to show a title and the value
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }

    // get some data for the pie charts
    function getData() {
        var data = [],
            names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'];
        names.forEach(function (name) {
            data.push({
                name: name,
                value: Math.round(Math.random() * 100)
            });
        });
        return data;
    }


    //////////////////////////////////////////////////////////
    // Getting Started
    var introChart = new wijmo.chart.FlexPie('#introChart', {
        binding: 'value',
        bindingName: 'name',
        itemsSource: getData()
    });


    //////////////////////////////////////////////////////////
    // Basic Features
    var basicChart = new wijmo.chart.FlexPie('#basicChart', {
        binding: 'value',
        bindingName: 'name',
        itemsSource: getData()
    });

    // change the pie properties
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
        format: 'n0',
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                basicChart.startAngle = s.value;
            }
        }
    });
    var palettes = new wijmo.input.Menu('#basicPalette', {
        itemsSource: 'standard,cocoa,coral,dark,highcontrast,light,midnight,modern,organic,slate,zen,cyborg,superhero,flatly,darkly,cerulan'.split(','),
        itemClicked: function (s, e) {
            basicChart.palette = wijmo.chart.Palettes[s.text];
            updateMenuHeader(s, 'Palette');
        }
    });
    updateMenuHeader(palettes, 'Palette');
    document.getElementById('basicReversed').addEventListener('click', function (e) {
        basicChart.reversed = e.target.checked;
    });


    //////////////////////////////////////////////////////////
    // Legend and Titles
    var ltChart = new wijmo.chart.FlexPie('#ltChart', {
        itemsSource: getData(),
        binding: 'value',
        bindingName: 'name',
        header: 'Fruit By Value',
        footer: '(c) ' + new Date().getFullYear() + ' GrapeCity, inc.'
    });

    // header input
    var header = document.getElementById('ltHeader');
    header.value = ltChart.header;
    header.addEventListener('input', function (e) {
        ltChart.header = e.target.value;
    });

    // footer input
    var footer = document.getElementById('ltFooter');
    footer.value = ltChart.footer;
    footer.addEventListener('input', function (e) {
        ltChart.footer = e.target.value;
    });

    // legend position
    var ltLegPos = new wijmo.input.Menu('#ltLegPos', {
        itemClicked: function (s, e) {
            ltChart.legend.position = s.selectedValue;
            updateMenuHeader(s, 'Legend Position');
        },
        selectedValue: 'Right'
    });
    updateMenuHeader(ltLegPos, 'Legend Position');


    //////////////////////////////////////////////////////////
    // Selection
    var selChart = new wijmo.chart.FlexPie('#selChart', {
        binding: 'value',
        bindingName: 'name',
        itemsSource: getData(),
        isAnimated: true,
        selectionMode: 'Point',
        selectedItemPosition: 'Top'
    });

    // change chart properties
    var inputNumber = new wijmo.input.InputNumber('#selItemOffset', {
        min: 0,
        max: 0.5,
        step: 0.1,
        format: 'n',
        valueChanged: function (s, e) {
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


    //////////////////////////////////////////////////////////
    // Theming
    var themeChart = new wijmo.chart.FlexPie('#themeChart', {
        binding: 'value',
        bindingName: 'name',
        itemsSource: getData(),
        header: 'Header',
        footer: 'Footer'
    });
}

