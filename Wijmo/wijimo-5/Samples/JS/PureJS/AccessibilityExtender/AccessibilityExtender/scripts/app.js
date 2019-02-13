onload = function () {

    // create the grid
    var theGrid = new wijmo.grid.FlexGrid('#theGrid', {
        itemsSource: getData(100),
        showAlternatingRows: false,
        selectionMode: 'ListBox'
    });

    // extend accessibility features
    var acX = new wijmo.grid.accessibility.AccessibilityExtender(theGrid);

    // notify users when columns are sorted
    theGrid.sortedColumn.addHandler(function (s, e) {
        var col = s.columns[e.col],
            order = col.currentSort == '+' ? 'ascending' : 'descending';
        acX.alert('column ' + col.header + ' sorted in ' + order + ' order');
    });

    // hook up filter
    var toSearch = null;
    document.getElementById('filter').addEventListener('input', function (e) {
        clearTimeout(toSearch);
        toSearch = setTimeout(function () {
            var search = e.target.value,
                rx = new RegExp(search, 'i');
            theGrid.collectionView.filter = function (item) {
                return !search || JSON.stringify(item).match(rx);
            }

            // notify users that a filter was applied
            setTimeout(function () {
                var msg = search
                    ? 'grid filtered on ' + search
                    : 'filter removed';
                msg += ': ' + theGrid.rows.length + ' items displayed';
                acX.alert(msg);
            }, 200)
        }, 900)
    });

    // get some random data
    function getData(count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            products = 'Tents,Boots,Knives,Bows,Arrows,Sleeping Bags,Lamps'.split(','),
            data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                product: products[i % products.length],
                active: i % 5 != 0,
                downloads: Math.round(Math.random() * 200000),
                sales: Math.random() * 100000,
                expenses: Math.random() * 50000
            });
        }
        return data;
    }
}
