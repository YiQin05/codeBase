onload = function () {

    // load data from the server using our SimpleServerCollectionView.
    // this CollectionView performs sorting and paging on the server.
    // it does not support filtering or write operations.
    var view = new wijmo.collections.SimpleServerCollectionView('DataHandler.ashx', {
        pageSize: 10,
        loaded: function (s, e) {
            updatePager();
        }
    });

    // bind a FlexGrid to the SimpleServerCollectionView
    var theGrid = new wijmo.grid.FlexGrid('#theGrid', {
        itemsSource: view,
        isReadOnly: false,
        allowAddNew: true,
        allowDelete: true
    });

    // add a filter to the grid
    // to demonstrate server-side filtering
    var f = new wijmo.grid.filter.FlexGridFilter(theGrid);

    // reload data
    document.getElementById('reload').addEventListener('click', function () {
        view.load();
    });

    // handle pager buttons
    document.getElementById('thePager').addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'btnFirst':
                view.moveToFirstPage();
                break;
            case 'btnPrev':
                view.moveToPreviousPage();
                break;
            case 'btnNext':
                view.moveToNextPage();
                break;
            case 'btnLast':
                view.moveToLastPage();
                break;
        }
        updatePager();
    });

    // allow user to select the page size
    var thePageSize = new wijmo.input.ComboBox('#thePageSize', {
        itemsSource: [6, 8, 10, 12, 20, 25, 50, 1000],
        text: view.pageSize.toString(),
        selectedIndexChanged: function (s, e) {
            view.pageSize = s.selectedValue;
            updatePager();
        }
    });

    // update pager display
    function updatePager() {
        var currPage = wijmo.format('Page {page:n0} of {count:n0}', {
            page: view.pageIndex + 1,
            count: view.pageCount
        });
        document.getElementById('txtCurrent').value = currPage;
    }
}
