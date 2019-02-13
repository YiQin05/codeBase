onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // data for the sample
    var data = {

        // create simple flat data
        getData: function (count) {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = [];
            for (var i = 0; i < count; i++) {
                data.push({
                    Id: i,
                    Country: countries[i % countries.length],
                    Date: new Date(2014, i % 12, i % 28),
                    Amount: Math.random() * 10000,
                    Active: i % 4 === 0
                });
            }
            return data;
        }
    };

    // populate Array of data
    var rawData = data.getData(100);

    // populate Array of data for Chart
    var chartData = data.getData(12);

    // create and bind Wijmo 3 wijgrid
    $('#mywijgrid').wijgrid({
        columnsAutoGenerationMode: 'none',
        data: rawData,
        allowSorting: true,
        scrollMode: 'auto',
        selectionMode: 'singleRow',
        ensureColumnsPxWidth: true,
        columns: [
            { dataKey: 'Id', dataType: 'number', dataFormatString: 'n0', width: '20%' },
            { dataKey: 'Country', width: '20%' },
            { dataKey: 'Date', dataType: 'datetime', width: '20%' },
            { dataKey: 'Amount', dataType: 'currency', width: '20%' },
            { dataKey: 'Active', dataType: 'boolean', width: '20%' }
        ]
    });

    // Sort Grid when button clicked
    $('#btnSortWij').click(function () {
        $('#mywijgrid').wijgrid('columns')[3].options.sortDirection = 'ascending';
        $('#mywijgrid').wijgrid('ensureControl', true);
    });

    // Show Row Headers in Grid when button clicked
    $('#btnHeadersWij').click(function () {
        if ($('#mywijgrid').wijgrid('option', 'showRowHeader') === true) {
            $('#mywijgrid').wijgrid('option', 'showRowHeader', false);
        } else {
            $('#mywijgrid').wijgrid('option', 'showRowHeader', true);
        }
    });

    // Bind to selectionChange in wijgrid
    $("#mywijgrid").bind("wijgridselectionchanged", function (e, args) {
        var amt = args.addedCells.item(3).value();
        $('#lblWij').text(amt); // set text of span tag to Amount value
    });

    // create a Wijmo 5 CollectionView from the rawData Array
    var cv = new wijmo.collections.CollectionView(rawData);

    // create and bind Wijmo 5 FlexGrid
    var myFlexGrid = new wijmo.grid.FlexGrid('#myFlexGrid', {
        autoGenerateColumns: false,
        itemsSource: cv,
        isReadOnly: true,
        selectionMode: wijmo.grid.SelectionMode.Row,
        headersVisibility: wijmo.grid.HeadersVisibility.Column,
        columns: [
            { binding: 'Id', width: '*' },
            { binding: 'Country', width: '*' },
            { binding: 'Date', width: '*' },
            { binding: 'Amount', format: 'c0', width: '*' },
            { binding: 'Active', width: '*' }
        ]
    });

    // Sort Grid when button clicked
    document.getElementById('btnSortFlex').addEventListener('click', function () {
        var sdNew = new wijmo.collections.SortDescription('Amount', true);
        cv.sortDescriptions.splice(0, cv.sortDescriptions.length, sdNew);
    });

    // Show Row Headers in Grid when button clicked
    document.getElementById('btnHeadersFlex').addEventListener('click', function () {
        myFlexGrid.headersVisibility = myFlexGrid.headersVisibility == wijmo.grid.HeadersVisibility.All
            ? 'Column'
            : 'All';
    });

    // Bind to selectionChange in FlexGrid
    myFlexGrid.selectionChanged.addHandler(function (e, args) {
        var amt = myFlexGrid.rows[args.row].dataItem.Amount;
        document.getElementById('lblFlex').innerHTML = amt; // set text of span tag to Amount value
    });

    // create and bind a Wijmo 3 Line Chart
    $('#mywijlinechart').wijlinechart({
        dataSource: chartData,
        showChartLabels: false,
        header: {
            text: 'Sales Report'
        },
        legend: {
            visible: false
        },
        axis: {
            x: { annoFormatString: 'MMM' },
            y: { annoFormatString: 'c0' }
        },
        seriesList: [
            {
                label: 'Sales',
                data: {
                    x: { bind: 'Date' },
                    y: { bind: 'Amount' }
                }
            }
        ],
    });

    // create and bind a Wijmo 5 FlexChart
    var myFlexChart = new wijmo.chart.FlexChart('#myFlexChart', {
        chartType: 'Line',
        header: 'Sales Report',
        legend: {
            position: 'None'
        },
        axisX: {
            format: 'MMM'
        },
        axisY: {
            format: 'c0'
        },
        itemsSource: chartData,
        bindingX: 'Date',
        series: [
            { binding: 'Amount', name: 'Sales' }
        ]
    });
}
