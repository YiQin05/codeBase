onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // utilities
    function onClick(id, fn) {
        document.getElementById(id).addEventListener('click', fn);
    }
    function setText(id, text) {
        document.getElementById(id).textContent = text;
    }
    function disable(id, disabled) {
        var e = document.getElementById(id);
        wijmo.setAttribute(e, 'disabled', disabled ? 'disabled' : null);
    }
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }

    // data for the sample
    var data = {

        // create simple flat data
        getData: function (count) {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wijmo.collections.ObservableArray();

            for (var i = 0; i < count; i++) {
                data.push({
                    id: i,
                    country: countries[i % countries.length],
                    date: new Date(2014, i % 12, i % 28),
                    amount: Math.random() * 10000,
                    active: i % 4 === 0
                });
            }

            return data;
        },

        // create some hierarchical data
        treeData: [
            {
                name: '\u266B Adriane Simione', items: [
                    {
                        name: '\u266A Intelligible Sky', items: [
                            { name: 'Theories', length: '2:02' },
                            { name: 'Giant Eyes', length: '3:29' },
                            { name: 'Jovian Moons', length: '1:02' },
                            { name: 'Open Minds', length: '2:41' },
                            { name: 'Spacetronic Eyes', length: '3:41' }]
                    }
                ]
            },
            {
                name: '\u266B Amy Winehouse', items: [
                    {
                        name: '\u266A Back to Black', items: [
                            { name: 'Addicted', length: '1:34' },
                            { name: 'He Can Only Hold Her', length: '2:22' },
                            { name: 'Some Unholy War', length: '2:21' },
                            { name: 'Wake Up Alone', length: '3:43' },
                            { name: 'Tears Dry On Their Own', length: '1:25' }]
                    },
                    {
                        name: '\u266A Live in Paradiso', items: [
                            { name: "You Know That I'm No Good", length: '2:32' },
                            { name: 'Wake Up Alone', length: '1:04' },
                            { name: 'Valerie', length: '1:22' },
                            { name: 'Tears Dry On Their Own', length: '3:15' },
                            { name: 'Rehab', length: '3:40' }]
                    }]
            },
            {
                name: '\u266B Black Sabbath', items: [
                    {
                        name: '\u266A Heaven and Hell', items: [
                            { name: 'Neon Knights', length: '3:03' },
                            { name: 'Children of the Sea', length: '2:54' },
                            { name: 'Lady Evil', length: '1:43' },
                            { name: 'Heaven and Hell', length: '2:23' },
                            { name: 'Wishing Well', length: '3:22' },
                            { name: 'Die Young', length: '2:21' }]
                    },
                    {
                        name: '\u266A Never Say Die!', items: [
                            { name: 'Swinging The Chain', length: '4:32' },
                            { name: 'Breakout', length: '3:54' },
                            { name: 'Over To You', length: '2:43' },
                            { name: 'Air Dance', length: '1:34' },
                            { name: 'Johnny Blade', length: '1:02' },
                            { name: 'Never Say Die', length: '2:11' }]
                    },
                    {
                        name: '\u266A Paranoid', items: [
                            { name: 'Rat Salad', length: '3:44' },
                            { name: 'Hand Of Doom', length: '4:21' },
                            { name: 'Electric Funeral', length: '2:12' },
                            { name: 'Iron Man', length: '3:22' },
                            { name: 'War Pigs', length: '3:13' }]
                    }]
            },
            {
                name: '\u266B Brand X', items: [
                    {
                        name: '\u266A Unorthodox Behaviour', items: [
                            { name: 'Touch Wood', length: '2:54' },
                            { name: 'Running of Three', length: '1:34' },
                            { name: 'Unorthodox Behaviour', length: '2:23' },
                            { name: 'Smacks of Euphoric Hysteria', length: '3:12' },
                            { name: 'Euthanasia Waltz', length: '2:22' },
                            { name: 'Nuclear Burn', length: '4:01' }]
                    }]
            }
        ]
    };


    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    new wijmo.grid.FlexGrid('#gsFlexGrid', {
        itemsSource: data.getData(100)
    });


    ////////////////////////////////////////////////////////////////////////
    // Column Definitions

    // initialize a grid using an 'options' object
    new wijmo.grid.FlexGrid('#cdInitMethod', {
        autoGenerateColumns: false,
        columns: [
            { header: 'Country', binding: 'country', width: '*' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        itemsSource: data.getData(100)
    });

    // initialize a second grid by setting properties
    var fgColsCollection = new wijmo.grid.FlexGrid('#cdColsCollection');
    fgColsCollection.autoGenerateColumns = false;
    fgColsCollection.itemsSource = data.getData(100);

    // add columns one by one
    var c = new wijmo.grid.Column();
    c.binding = 'country';
    c.header = 'Country';
    c.width = '*';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'date';
    c.header = 'Date';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'amount';
    c.header = 'Revenue';
    c.format = 'n0';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'active';
    c.header = 'Active';
    fgColsCollection.columns.push(c);


    ////////////////////////////////////////////////////////////////////////
    // Selection Modes
    var smFlexGrid= new wijmo.grid.FlexGrid('#smFlexGrid', {
        itemsSource: data.getData(100)
    });
    var smMenu = new wijmo.input.Menu('#smMenu', {
        itemClicked: function (s, e) {
            smFlexGrid.selectionMode = s.selectedValue;
            updateMenuHeader(s, 'Selection Mode');
        }
    });
    updateMenuHeader(smMenu, 'Selection Mode');


    ////////////////////////////////////////////////////////////////////////
    // Frozen Cells
    var fzFlexGrid = new wijmo.grid.FlexGrid('#fzFlexGrid', {
        itemsSource: data.getData(100),
        frozenRows: 2,
        frozenColumns: 2
    });
    document.getElementById('btnFreeze').addEventListener('click', function (e) {
        if (fzFlexGrid.frozenRows) {
            fzFlexGrid.frozenRows = 0;
            fzFlexGrid.frozenColumns = 0;
            e.target.textContent = 'Freeze';
        } else {
            fzFlexGrid.frozenRows = 2;
            fzFlexGrid.frozenColumns = 2;
            e.target.textContent = 'Unfreeze';
        }
    });

    ////////////////////////////////////////////////////////////////////////
    // Editing
    new wijmo.grid.FlexGrid('#eFlexGrid', {
        autoGenerateColumns: false,
        columns: [
            { header: 'ID', binding: 'id', width: '*', isReadOnly: true },  // cannot edit
            { header: 'Country', binding: 'country' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        itemsSource: data.getData(100)
    });


    ////////////////////////////////////////////////////////////////////////
    // Grouping
    var gFlexGrid = new wijmo.grid.FlexGrid('#gFlexGrid', {
        autoGenerateColumns: false,
        columns: [
            { header: 'Country', binding: 'country', width: '*' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' }
        ],
        itemsSource: data.getData(100)
    });
    var gMenu = new wijmo.input.Menu('#gMenu', {
        itemClicked: function (s, e) {

            // clear any current groups
            var gds = gFlexGrid.collectionView.groupDescriptions;
            gds.clear();

            // add new group
            var groupBy = s.selectedValue;
            if (groupBy) {
                var groupNames = groupBy.split(',');
                for (var i = 0; i < groupNames.length; i++) {
                    var groupName = groupNames[i];
                    if (groupName == 'date') { // group dates by year
                        var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                            return item.date.getFullYear();
                        });
                        gds.push(groupDesc);
                    } else if (groupName == 'amount') { // group amounts in ranges
                        var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                            return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
                        });
                        gds.push(groupDesc);
                    } else { // group everything else by value
                        var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                        gds.push(groupDesc);
                    }
                }
            }
            updateMenuHeader(s, 'Group By');
        }
    });
    updateMenuHeader(gMenu, 'Group By');


    ////////////////////////////////////////////////////////////////////////
    // Filtering
    var fFlexGrid = new wijmo.grid.FlexGrid('#fFlexGrid', {
        itemsSource: data.getData(100)
    });

    // apply a filter to the grid's CollectionView
    var filterText = '';
    fFlexGrid.collectionView.filter = function (item) {
        return filterText
            ? item.country.toLowerCase().indexOf(filterText) > -1
            : true;
    }

    // refresh filter when text changes
    document.getElementById('fFilter').addEventListener('input', function (e) {
        filterText = e.target.value.toLowerCase();
        fFlexGrid.collectionView.refresh();
    });


    ////////////////////////////////////////////////////////////////////////
    // Paging
    var pFlexGrid = new wijmo.grid.FlexGrid('#pFlexGrid', {
        itemsSource: data.getData(100)
    });

    // set page size to 10
    var cvPaged = pFlexGrid.collectionView;
    cvPaged.pageSize = 10;
    cvPaged.pageChanged.addHandler(function () {
        updatePager(cvPaged);
    });
    updatePager(cvPaged);

    // handle pager buttons
    onClick('btnPageFirst', function () {
        cvPaged.moveToFirstPage();
    });
    onClick('btnPagePrev', function () {
        cvPaged.moveToPreviousPage();
    });
    onClick('btnPageNext', function () {
        cvPaged.moveToNextPage();
    });
    onClick('btnPageLast', function () {
        cvPaged.moveToLastPage();
    });

    // disable/enable buttons and update display text for pager
    function updatePager(cv) {

        var firstPage = cv.pageIndex <= 0;
        disable('btnPageFirst', firstPage);
        disable('btnPagePrev', firstPage);

        var lastPage = cv.pageIndex >= cv.pageCount - 1;
        disable('btnPageNext', lastPage);
        disable('btnPageLast', lastPage);

        setText('btnPageCurrent', (cv.pageIndex + 1) + ' / ' + (cv.pageCount));
    }


    ////////////////////////////////////////////////////////////////////////
    // Master - Detail

    // create a grid to show/edit the data
    var mdFlexGrid = new wijmo.grid.FlexGrid('#mdFlexGrid', {
        selectionMode: 'Row',
        itemsSource: data.getData(100)
    });

    // update detail pane now and when the current item changes
    updateDetails();
    mdFlexGrid.collectionView.currentChanged.addHandler(updateDetails);

    // update the details when the CollectionView's currentItem changes
    function updateDetails() {
        var cv = mdFlexGrid.collectionView,
            item = cv.currentItem;
        setText('mdCurId', item.id);
        setText('mdCurCountry', item.country);
        setText('mdCurDate', wijmo.Globalize.format(item.date, 'd'));
        setText('mdCurRevenue', wijmo.Globalize.format(item.amount, 'c'));
        setText('mdCurActive', item.active);
    }


    ////////////////////////////////////////////////////////////////////////
    // Conditional Styling
    new wijmo.grid.FlexGrid('#csFlexGrid', {
        autoGenerateColumns: false,
        columns: [
            { header: 'Country', binding: 'country', width: '*', isContentHtml: true, isReadOnly: true },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        formatItem: function (s, e) {

            // we are only interested in regular (scrollable) cells
            if (e.panel == s.cells) { 

                // compute the cell color (for all columns, since cells may be recycled)
                var color = '';
                if (s.columns[e.col].binding == 'amount') {
                    var amount = e.panel.getCellData(e.row, e.col);
                    color = amount < 500 ? 'red' : amount < 2500 ? 'black' : 'green';
                }

                // always set the color
                e.cell.style.color = color;
            }
        },
        itemsSource: data.getData(100)
    });


    ////////////////////////////////////////////////////////////////////////
    // Themes
    new wijmo.grid.FlexGrid('#tFlexGrid', {
        itemsSource: data.getData(100)
    });


    ////////////////////////////////////////////////////////////////////////
    // Trees and Hierarchical Data
    new wijmo.grid.FlexGrid('#tvFlexGrid', {
        autoGenerateColumns: false,
        columns: [
            { binding: 'name', width: '*' },
            { binding: 'length', width: 80, align: 'center' }
        ],
        itemsSource: data.treeData,     // hierarchical data
        childItemsPath: 'items',        // set hierarchy path
        allowResizing: 'None',          // disable resizing
        headersVisibility: 'None',      // hide headers
        selectionMode: 'ListBox'        // use ListBox selection
    });


    ////////////////////////////////////////////////////////////////////////
    // Handling nulls
    new wijmo.grid.FlexGrid('#nvGrid', {
        autoGenerateColumns: false,
        itemsSource: data.getData(100),
        columns: [
            { header: 'Country', binding: 'country', width: '*', isRequired: true },
            { header: 'Date', binding: 'date', isRequired: false },
            { header: 'Revenue', binding: 'amount', format: 'n0', isRequired: false },
            { header: 'Active', binding: 'active', isRequired: false }
        ]
    });
}

