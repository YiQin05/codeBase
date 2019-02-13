onload = function () {

    var ddTree = new wijmo.input.DropDownTree('#ddTree', {
        displayMemberPath: 'header',
        childItemsPath: 'items',
        showCheckboxes: true,
        itemsSource: getTreeData(),
        checkedItemsChanged: function (s, e) {
            console.log('dropDownTree.checkedItemsChanged:');
            s.checkedItems.forEach(function (item, index) {
                console.log(index, item[s.displayMemberPath])
            })
        }
    });
    var ddTreeNoCheck = new wijmo.input.DropDownTree('#ddTreeNoCheck', {
        displayMemberPath: 'header',
        childItemsPath: 'items',
        showCheckboxes: false,
        itemsSource: getTreeData(),
        checkedItemsChanged: function (s, e) {
            console.log('dropDownTreeNoCheck.checkedItemsChanged:');
            s.checkedItems.forEach(function (item, index) {
                console.log(index, item[s.displayMemberPath])
            })
        }
    });

    var multiSelect = new wijmo.input.MultiSelect('#multiSelect', {
        itemsSource: 'Austria,Belgium,Chile,Denmark'.split(','),
        checkedItemsChanged: function (s, e) {
            console.log('multiSelect.checkedItemsChanged:');
            s.checkedItems.forEach(function (item, index) {
                console.log(index, item)
            })
        }
    });

    function getTreeData() {
        return [
            { header: 'Electronics', img: 'resources/electronics.png', items: [
                { header: 'Trimmers/Shavers' },
                { header: 'Tablets' },
                { header: 'Phones', img: 'resources/phones.png', items: [
                    { header: 'Apple' },
                    { header: 'Motorola', newItem: true },
                    { header: 'Nokia' },
                    { header: 'Samsung' }
                ]},
                { header: 'Speakers', newItem: true },
                { header: 'Monitors' }
            ]},
            { header: 'Toys', img: 'resources/toys.png', items: [
                { header: 'Shopkins' },
                { header: 'Train Sets' },
                { header: 'Science Kit', newItem: true },
                { header: 'Play-Doh' },
                { header: 'Crayola' }
            ]},
            { header: 'Home', img: 'resources/home.png', items: [
                { header: 'Coffeee Maker' },
                { header: 'Breadmaker', newItem: true },
                { header: 'Solar Panel', newItem: true },
                { header: 'Work Table' },
                { header: 'Propane Grill' }
            ]}
        ];
    }
}
