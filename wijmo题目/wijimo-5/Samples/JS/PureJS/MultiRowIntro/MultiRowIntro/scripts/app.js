onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // utility to set element content by id
    function setText(id, value, format) {
        document.getElementById(id).textContent = format
            ? wijmo.Globalize.format(value, format)
            : value;
    }

    // create some data
    var appData = {},
        customers = [],
        firstNames = 'Aaron,Paul,John,Mark,Sue,Tom,Bill,Joe,Tony,Brad,Frank,Chris,Pat'.split(','),
        lastNames = 'Smith,Johnson,Richards,Bannon,Wong,Peters,White,Brown,Adams,Jennings'.split(','),
        cities = 'York,Paris,Rome,Cairo,Florence,Sidney,Hamburg,Vancouver'.split(','),
        states = 'SP,RS,RN,SC,CS,RT,BC'.split(',');
    for (var i = 0; i < 50; i++) {
        var first = firstNames[randBetween(0, firstNames.length - 1)],
            last = lastNames[randBetween(0, lastNames.length - 1)];
        customers.push({
            id: i,
            name: first + ' ' + last,
            address: randBetween(100, 10000) + ' ' + lastNames[randBetween(0, lastNames.length - 1)] + ' St.',
            city: cities[randBetween(0, cities.length - 1)],
            state: states[randBetween(0, states.length - 1)],
            zip: wijmo.format('{p1:d5}-{p2:d3}', {
                p1: randBetween(10000, 99999),
                p2: randBetween(100, 999)
            }),
            email: first + '.' + last + '@gmail.com',
            phone: wijmo.format('{p1:d3}-{p2:d4}', {
                p1: randBetween(100, 999),
                p2: randBetween(1000, 9999)
            })
        });
    }
    var cityMap = new wijmo.grid.DataMap(cities);
    var shippers = [
        { id: 0, name: 'Speedy Express', email: 'speedy@gmail.com', phone: '431-3234', express: true },
        { id: 1, name: 'Flash Delivery', email: 'flash@gmail.com', phone: '431-6563', express: true },
        { id: 2, name: 'Logitrax', email: 'logitrax@gmail.com', phone: '431-3981', express: false },
        { id: 3, name: 'Acme Inc', email: 'acme@gmail.com', phone: '431-3113', express: false }
    ];
    var orders = [];
    var today = new Date();
    for (var i = 0; i < 20; i++) {
        var shipped = wijmo.DateTime.addDays(today, -randBetween(1, 3000));
        orders.push({
            id: i,
            date: wijmo.DateTime.addDays(shipped, -randBetween(1, 5)),
            shippedDate: shipped,
            amount: randBetween(10000, 500000) / 100,
            customer: customers[randBetween(0, customers.length - 1)],
            shipper: shippers[randBetween(0, shippers.length - 1)]
        });
    }
    function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // expose orders CollectionView to the app
    appData.orders = new wijmo.collections.CollectionView(orders);

    // expose grouped orders CollectionView to the app
    appData.groupedOrders = new wijmo.collections.CollectionView(orders, {
        groupDescriptions: [
            'customer.city'
        ]
    });

    // expose paged orders CollectionView to the app
    appData.pagedOrders = new wijmo.collections.CollectionView(orders, {
        pageSize: 4
    });

    // expose addNew oders CollectionView to the app
    appData.addNewOrders = new wijmo.collections.CollectionView(orders, {
        newItemCreator: function () {
            return { // add empty customer and shipper objects to new orders
                customer: {},
                shipper: {}
            }
        },
    });
    appData.addNewOrders.moveCurrentToLast();

    // refresh views when data source changes
    var ordersRefreshing = false;
    appData.orders.collectionChanged.addHandler(function () {
        ordersRefreshing = true;
        if (!pagedOrdersRefreshing) {
            appData.pagedOrders.refresh();
        }
        if (!groupedOrdersRefreshing) {
            appData.groupedOrders.refresh();
        }
        if (!addNewOrdersRefreshing) {
            appData.addNewOrders.refresh();
        }
        ordersRefreshing = false;
    });

    // addNew orders
    var addNewOrdersRefreshing = false;
    appData.addNewOrders.collectionChanged.addHandler(function () {
        addNewOrdersRefreshing = true;
        if (!ordersRefreshing) {
            appData.orders.refresh();
        }
        if (!pagedOrdersRefreshing) {
            appData.pagedOrders.refresh();
        }
        if (!groupedOrdersRefreshing) {
            appData.groupedOrders.refresh();
        }
        addNewOrdersRefreshing = false;
    });

    // grouped orders
    var groupedOrdersRefreshing = false;
    appData.groupedOrders.collectionChanged.addHandler(function () {
        groupedOrdersRefreshing = true;
        if (!ordersRefreshing) {
            appData.orders.refresh();
        }
        if (!pagedOrdersRefreshing) {
            appData.pagedOrders.refresh();
        }
        if (!addNewOrdersRefreshing) {
            appData.addNewOrders.refresh();
        }
        groupedOrdersRefreshing = false;
    });

    // paged orders
    var pagedOrdersRefreshing = false;
    appData.pagedOrders.collectionChanged.addHandler(function () {
        pagedOrdersRefreshing = true;
        if (!ordersRefreshing) {
            appData.orders.refresh();
        }
        if (!addNewOrdersRefreshing) {
            appData.addNewOrders.refresh();
        }
        if (!groupedOrdersRefreshing) {
            appData.groupedOrders.refresh();
        }
        pagedOrdersRefreshing = false;
    });

    // sample layout definitions
    appData.ldOneLine = [
        { cells: [{ binding: 'id', header: 'ID', cssClass: 'id', isReadOnly: true }] },
        { cells: [{ binding: 'date', header: 'Ordered' }] },
        { cells: [{ binding: 'shippedDate', header: 'Shipped' }] },
        { cells: [{ binding: 'amount', header: 'Amount', format: 'c', cssClass: 'amount' }] },
        { cells: [{ binding: 'customer.name', header: 'Customer' }] },
        { cells: [{ binding: 'customer.address', header: 'Address', wordWrap: true }] },
        { cells: [{ binding: 'customer.city', header: 'City', dataMap: cityMap }] },
        { cells: [{ binding: 'customer.state', header: 'State', width: 45 }] },
        { cells: [{ binding: 'customer.zip', header: 'Zip' }] },
        { cells: [{ binding: 'customer.email', header: 'Customer Email', cssClass: 'email' }] },
        { cells: [{ binding: 'customer.phone', header: 'Customer Phone' }] },
        { cells: [{ binding: 'shipper.name', header: 'Shipper' }] },
        { cells: [{ binding: 'shipper.email', header: 'Shipper Email', cssClass: 'email' }] },
        { cells: [{ binding: 'shipper.phone', header: 'Shipper Phone' }] },
        { cells: [{ binding: 'shipper.express', header: 'Express' }] }
    ];
    appData.ldTwoLines = [
        {
            header: 'Order', colspan: 2, cells: [
                { binding: 'id', header: 'ID', cssClass: 'id', isReadOnly: true },
                { binding: 'date', header: 'Ordered' },
                { binding: 'amount', header: 'Amount', format: 'c', cssClass: 'amount' },
                { binding: 'shippedDate', header: 'Shipped' }
            ]
        },
        {
            header: 'Customer', colspan: 3, cells: [
                { binding: 'customer.name', header: 'Name' },
                { binding: 'customer.email', header: 'EMail', colspan: 2, cssClass: 'email' },
                { binding: 'customer.address', header: 'Address' },
                { binding: 'customer.city', header: 'City', dataMap: cityMap },
                { binding: 'customer.state', header: 'State', width: 45 }
            ]
        },
        {
            header: 'Shipper', cells: [
                { binding: 'shipper.name', header: 'Shipper', colspan: 2 },
                { binding: 'shipper.email', header: 'EMail', cssClass: 'email' },
                { binding: 'shipper.express', header: 'Express' }
            ]
        }
    ];
    appData.ldThreeLines = [
        {
            header: 'Order', colspan: 2, cells: [
                { binding: 'id', header: 'ID', colspan: 2, cssClass: 'id' },
                { binding: 'amount', header: 'Amount', format: 'c', colspan: 2, cssClass: 'amount' },
                { binding: 'date', header: 'Ordered' },
                { binding: 'shippedDate', header: 'Shipped' }
            ]
        },
        {
            header: 'Customer', colspan: 3, cells: [
                { binding: 'customer.name', header: 'Name' },
                { binding: 'customer.email', header: 'EMail', colspan: 2, cssClass: 'email' },
                { binding: 'customer.address', header: 'Address', colspan: 2 },
                { binding: 'customer.phone', header: 'Phone' },
                { binding: 'customer.city', header: 'City', dataMap: cityMap },
                { binding: 'customer.state', header: 'State', width: 45 },
                { binding: 'customer.zip', header: 'Zip' },
            ]
        },
        {
            header: 'Shipper', cells: [
                { binding: 'shipper.name', header: 'Shipper' },
                { binding: 'shipper.email', header: 'EMail', cssClass: 'email' },
                { binding: 'shipper.express', header: 'Express' }
            ]
        }
    ];
    appData.layoutDefs = new wijmo.collections.CollectionView([
        {
            name: 'Traditional',
            description: 'Traditional grid view, with one row per record. The user must scroll horizontally to see the whole record.',
            def: appData.ldOneLine
        },
        {
            name: 'Compact',
            description: 'This view uses two rows per record. The layout is divided into three groups: order, customer, and shipper',
            def: appData.ldTwoLines
        },
        {
            name: 'Detailed',
            description: 'This view uses three rows per record. The layout is divided into three groups: order, customer, and shipper',
            def: appData.ldThreeLines
        }
    ]);

    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    var multirow = new wijmo.grid.multirow.MultiRow('#multirow', {
        itemsSource: appData.orders,
        layoutDefinition: appData.layoutDefs.currentItem.def
    });
    var ldComboBox = new wijmo.input.ComboBox('#ldComboBox', {
        itemsSource: appData.layoutDefs,
        displayMemberPath: 'name',
        selectedIndexChanged: function (s, e) {
            var layoutDef = appData.layoutDefs.currentItem;
            if (layoutDef) {
                multirow.layoutDefinition = layoutDef.def;
                setText('desc', layoutDef.description);
            }
        }
    });
    setText('desc', appData.layoutDefs.currentItem.description);


    ////////////////////////////////////////////////////////////////////////
    // Collapsible Column Headers
    var chMultirow = new wijmo.grid.multirow.MultiRow('#chMultirow', {
        itemsSource: appData.orders,
        layoutDefinition: appData.ldThreeLines,
        collapsedHeaders: true,
        showHeaderCollapseButton: true,
        collapsedHeadersChanged: function (s, e) {
            cbCollapsedHeaders.selectedValue = s.collapsedHeaders;
        }
    });

    // handle combo
    var cbCollapsedHeaders = new wijmo.input.ComboBox('#cbCollapsedHeaders', {
        displayMemberPath: 'name',
        selectedValuePath: 'value',
        itemsSource: [
            { name: 'true', value: true },
            { name: 'false', value: false },
            { name: 'null', value: null }
        ],
        selectedValue: chMultirow.collapsedHeaders,
        selectedIndexChanged: function (s, e) {
            chMultirow.collapsedHeaders = s.selectedValue;
        }
    });

    // handle checkbox
    document.getElementById('cbshowHeaderCollapseButton').addEventListener('click', function (e) {
        chMultirow.showHeaderCollapseButton = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////
    // Styling Records, Groups, and Cells
    var styleMultirow = new wijmo.grid.multirow.MultiRow('#styleMultirow', {
        itemsSource: appData.orders,
        layoutDefinition: appData.ldThreeLines
    });


    ////////////////////////////////////////////////////////////////////////
    // Grouping
    var groupMultirow = new wijmo.grid.multirow.MultiRow('#groupMultirow', {
        itemsSource: appData.groupedOrders,
        layoutDefinition: appData.ldThreeLines,
        showGroups: true,
        groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} items)'
    });

    // toggle show groups
    document.getElementById('cbShowGroup').addEventListener('click', function (e) {
        groupMultirow.showGroups = e.target.checked;
    });

    // collapse/expand all
    document.getElementById('btnCollapse').addEventListener('click', function (e) {
        groupMultirow.collapseGroupsToLevel(0);
    });
    document.getElementById('btnExpand').addEventListener('click', function (e) {
        groupMultirow.collapseGroupsToLevel(10);
    });


    ////////////////////////////////////////////////////////////////////////
    // Filtering
    var filterMultirow = new wijmo.grid.multirow.MultiRow('#filterMultirow', {
        itemsSource: appData.orders,
        layoutDefinition: appData.ldThreeLines
    });
    var filter = new wijmo.grid.filter.FlexGridFilter(filterMultirow);


    ////////////////////////////////////////////////////////////////////////
    // Row and Column Freezing
    var freezeMultirow = new wijmo.grid.multirow.MultiRow('#freezeMultirow', {
        itemsSource: appData.orders,
        layoutDefinition: appData.ldTwoLines
    });
    document.getElementById('btnFreeze').addEventListener('click', function (e) {
        freezeMultirow.frozenColumns = freezeMultirow.frozenColumns ? 0 : 2;
        freezeMultirow.frozenRows = freezeMultirow.frozenRows ? 0 : 2;
        e.target.textContent = freezeMultirow.frozenRows == 0 ? 'Freeze' : 'Unfreeze';
    });


    ////////////////////////////////////////////////////////////////////////
    // Paging
    var pagedOrders = appData.pagedOrders;
    var pagingMultirow = new wijmo.grid.multirow.MultiRow('#pageMultirow', {
        itemsSource: pagedOrders,
        layoutDefinition: appData.ldThreeLines
    });

    // paging buttons
    document.getElementById('firstBtn').addEventListener('click', function (e) {
        pagedOrders.moveToFirstPage();
    });
    document.getElementById('previousBtn').addEventListener('click', function (e) {
        pagedOrders.moveToPreviousPage();
    });
    document.getElementById('nextBtn').addEventListener('click', function (e) {
        pagedOrders.moveToNextPage();
    });
    document.getElementById('lastBtn').addEventListener('click', function (e) {
        pagedOrders.moveToLastPage();
    });

    // update page text now and when the current page changes
    updatePageText();
    pagedOrders.collectionChanged.addHandler(function () {
        updatePageText();
    });
    pagedOrders.pageChanged.addHandler(function () {
        updatePageText();
    });
    function updatePageText() {
        var text = wijmo.format('{index:n0} / {count:n0}', {
            index: pagedOrders.pageIndex + 1,
            count: pagedOrders.pageCount
        });
        setText('numBtn', text);
    }


    ////////////////////////////////////////////////////////////////////////
    // Adding and Deleting Records
    var adMultirow = new wijmo.grid.multirow.MultiRow('#adMultirow', {
        itemsSource: appData.addNewOrders,
        layoutDefinition: appData.ldThreeLines,
        showGroups: false,
        allowAddNew: true,
        allowDelete: true
    });

    // handle buttons
    document.getElementById('ckbAllNew').addEventListener('click', function (e) {
        adMultirow.allowAddNew = e.target.checked;
    });
    document.getElementById('ckbAllDelete').addEventListener('click', function (e) {
        adMultirow.allowDelete = e.target.checked;
    });
}
