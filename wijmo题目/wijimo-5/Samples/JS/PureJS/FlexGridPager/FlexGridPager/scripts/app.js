onload = function() {

    // FlexGrid with FlexGridPager
    var theGrid = new wijmo.grid.FlexGrid('#the-grid', {
        itemsSource: getData(),
    });
    var groups = ['country', 'product'];
    groups.forEach(function (prop) {
        var gd = new wijmo.collections.PropertyGroupDescription(prop);
        theGrid.collectionView.groupDescriptions.push(gd);
    })
    theGrid.getColumn('discount').format = 'p2';
    theGrid.getColumn('country').dataMap = getCountries();

    // add grid-level pagination
    var thePager = new wijmo.grid.FlexGridPager(theGrid, 8);
    var thePageSize = new wijmo.input.ComboBox('#the-page-size', {
        itemsSource: [0, 4, 8, 20, 5000],
        selectedItem: thePager.pageSize,
        selectedIndexChanged: function (s, e) {
            thePager.pageSize = s.selectedItem;
        }
    });
    document.getElementById('the-pager').addEventListener('click', function (e) {
        var btn = wijmo.closest(e.target, 'button');
        if (btn) {
            if (btn.id.indexOf('first') > -1) {
                thePager.moveToFirstPage();
            } else if (btn.id.indexOf('prev') > -1) {
                thePager.moveToPreviousPage();
            } else if (btn.id.indexOf('next') > -1) {
                thePager.moveToNextPage();
            } else if (btn.id.indexOf('last') > -1) {
                thePager.moveToLastPage();
            }
        }
    });
    thePager.stateChanged.addHandler(function (s, e) {
        updatePager(thePager, 'the-pager-current');
    });
    updatePager(thePager, 'the-pager-current');

    // FlexPivot with FlexGridPager
    var pivotEngine = new wijmo.olap.PivotEngine({
        itemsSource: getData(),
        showRowTotals: 'Subtotals',
        rowFields: ['Country', 'Product'],
        valueFields: ['Sales', 'Expenses']
    });

    var thePivotGrid = new wijmo.olap.PivotGrid('#the-pivot-grid', {
        itemsSource: pivotEngine
    });

    // add grid-level pagination
    var thePivotPager = new wijmo.grid.FlexGridPager(thePivotGrid, 8);
    var thePageSizePivot = new wijmo.input.ComboBox('#the-page-size-pivot', {
        itemsSource: [0, 4, 8, 20, 5000],
        selectedItem: thePivotPager.pageSize,
        selectedIndexChanged: function (s, e) {
            thePivotPager.pageSize = s.selectedItem;
        }
    });
    document.getElementById('the-pivot-pager').addEventListener('click', function (e) {
        var btn = wijmo.closest(e.target, 'button');
        if (btn) {
            if (btn.id.indexOf('first') > -1) {
                thePivotPager.moveToFirstPage();
            } else if (btn.id.indexOf('prev') > -1) {
                thePivotPager.moveToPreviousPage();
            } else if (btn.id.indexOf('next') > -1) {
                thePivotPager.moveToNextPage();
            } else if (btn.id.indexOf('last') > -1) {
                thePivotPager.moveToLastPage();
            }
        }
    });
    thePivotPager.stateChanged.addHandler(function (s, e) {
        updatePager(thePivotPager, 'the-pivot-pager-current');
    });
    updatePager(thePivotPager, 'the-pivot-pager-current');

    // ** utilities

    // update pager text
    function updatePager(pager, current) {
        var caption = 'Page ' + (pager.pageIndex + 1) + ' of ' + pager.pageCount;
        document.getElementById(current).textContent = caption;
    }

    // create some random data
    function getCountries() {
        return 'US,Canada,Mexico,Germany,UK,Sweden,Norway,Denmark,Japan,China,Korea'.split(',');
    }
    function getProducts() {
        return 'Phones,Cars,Skates,Shirts,Helmets'.split(',');
    }
    function getData() {
        var data = [],
            countries = getCountries(),
            products = getProducts();
        for (var i = 0; i < 500; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                product: products[i % products.length],
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                discount: Math.round(Math.random() * 100) / 100,
                overdue: (i + 1) % 4 == 0
            });
        }
        return data;
    }
}
