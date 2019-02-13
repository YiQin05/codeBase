onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }


    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    var tabGettingStarted = new wijmo.nav.TabPanel('#tabGettingStarted');


    ////////////////////////////////////////////////////////////////////////
    // Hosting Wijmo controls
    var tabWijmoControls = new wijmo.nav.TabPanel('#tabWijmoControls');
    var theGrid = new wijmo.grid.FlexGrid('#theGrid', {
        itemsSource: getData()
    });
    var theChart = new wijmo.chart.FlexChart('#theChart', {
        itemsSource: getData(),
        bindingX: 'country',
        series: [
            { binding: 'sales', name: 'Sales' },
            { binding: 'expenses', name: 'Expenses' },
            { binding: 'downloads', name: 'Downloads' }
        ]
    });
    var theRadialGauge = new wijmo.gauge.RadialGauge('#theRadialGauge', {
        min: 0,
        max: 100,
        value: 75,
        isReadOnly: false
    });
    var theLinearGauge = new wijmo.gauge.LinearGauge('#theLinearGauge', {
        min: 0,
        max: 100,
        value: 75,
        isReadOnly: false
    });
    function getData() {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (var i = 0; i < countries.length; i++) {
            data.push({
                country: countries[i],
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                downloads: Math.round(Math.random() * 20000),
            });
        }
        return data;
    }


    ////////////////////////////////////////////////////////////////////////
    // Creating TabPanels Programmatically
    var tabInCode = new wijmo.nav.TabPanel('#tabInCode'),
        url = 'https://services.odata.org/Northwind/Northwind.svc',
        headers = 'Employees,Categories,Products,Customers'.split(',');
    tabInCode.tabs.deferUpdate(function () { // update only when done
        headers.forEach(function (header) {

            // create the tab header element
            var elHeader = document.createElement('a');
            elHeader.textContent = header;

            // create the tab pane element
            var elPane = document.createElement('div'),
                elGrid = document.createElement('div'),
                grid = new wijmo.grid.FlexGrid(elGrid, {
                    isReadOnly: true,
                    itemsSource: new wijmo.odata.ODataCollectionView(url, header)
                });
            elPane.appendChild(elGrid);

            // add the new Tab to the TabPanel
            tabInCode.tabs.push(new wijmo.nav.Tab(elHeader, elPane));
        });
    });

    // select the first tab
    //tabInCode.selectedIndex = 0;


    ////////////////////////////////////////////////////////////////////////
    // Styling and CSS
    var tabCss = new wijmo.nav.TabPanel('#tabCss');

    // toggle custom classes
    document.getElementById('tabsOnLeft').addEventListener('click', function (e) {
        wijmo.toggleClass(tabCss.hostElement, 'tabs-on-left', e.target.checked);
    });
    document.getElementById('customHeaders').addEventListener('click', function (e) {
        wijmo.toggleClass(tabCss.hostElement, 'custom-headers', e.target.checked);
    });

    // change tab alignment
    var tabAlign = new wijmo.input.ComboBox('#tabAlign', {
        itemsSource: 'Left,Center,Right'.split(','),
        selectedIndexChanged: function (s, e) {
            tabCss.hostElement.querySelector('.wj-tabheaders').style.textAlign = s.text;
        }
    });

    // toggle animation
    document.getElementById('isAnimated').addEventListener('click', function (e) {
        tabCss.isAnimated = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////
    // Disable/Hide tabs
    var tabDisableHide = new wijmo.nav.TabPanel('#tabDisableHide');

    // toggle Europe's disabled state
    document.getElementById('disableEurope').addEventListener('click', function (e) {
        tabDisableHide.getTab('tab-europe').isDisabled = e.target.checked;
    });

    // toggle Oceania's visibility
    document.getElementById('showOceania').addEventListener('click', function (e) {
        tabDisableHide.getTab('tab-oceania').isVisible = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////
    // Detached tabs
    var tabDetached = new wijmo.nav.TabPanel('#tabDetached', {

        // show the content for the selected tab in a separate div
        selectedIndexChanged: function (s, e) {
            var div = document.getElementById('detachedContent');
            div.innerHTML = 'Content for tab <b>' + s.selectedTab.header.textContent + '</b>...';
        }
    });

    // hide the built-in content area
    tabDetached.hostElement.querySelector('.wj-tabpanes').style.display = 'none';


    ////////////////////////////////////////////////////////////////////////
    // Accessibility
    var tabAccessibility = new wijmo.nav.TabPanel('#tabAccessibility');

    // toggle autoSwitch property
    document.getElementById('autoSwitch').addEventListener('click', function (e) {
        tabAccessibility.autoSwitch = e.target.checked;
    });


    ////////////////////////////////////////////////////////////////////////
    // RTL
    var tabRtl = new wijmo.nav.TabPanel('#tabRtl');

}