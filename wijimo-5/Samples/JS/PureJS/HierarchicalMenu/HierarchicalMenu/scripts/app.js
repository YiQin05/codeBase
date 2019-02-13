onload = function () {

    // element used to show menu commands
    var target = document.getElementById('menu-target'),
        targetStyle = target.style,
        computedStyle = getComputedStyle(target);

    // create File menu (uses itemClicked event)
    var menuFile = new wijmo.input.Menu('#menu-file', {
        header: 'File',
        displayMemberPath: 'header',
        subItemsPath: 'items',
        openOnHover: true,
        isAnimated: true,
        itemsSource: getFileMenuItems(),
        itemClicked: function (s, e) {
            target.innerHTML = 'Thank you for clicking <b><i>' + s.text + '</i></b>!';
        }
    });

    // create Edit menu (uses itemClicked event)
    var menuEdit = new wijmo.input.Menu('#menu-edit', {
        header: 'Edit',
        displayMemberPath: 'header',
        subItemsPath: 'items',
        openOnHover: true,
        isAnimated: true,
        itemsSource: getEditMenuItems(),
        itemClicked: function (s, e) {
            target.innerHTML = 'Thank you for clicking <b><i>' + s.text + '</i></b>!';
        }
    });

    // create Format menu (uses command property)
    var menuFormat = new wijmo.input.Menu('#menu-format', {
        header: 'Format',
        displayMemberPath: 'header',
        subItemsPath: 'items',
        openOnHover: true,
        isAnimated: true,
        itemsSource: getFormatMenuItems(),
        command: getFormatMenuCommand()
    });

    // toggle animations
    document.getElementById('isAnimated').addEventListener('click', function (e) {
        [menuFile, menuEdit, menuFormat].forEach(function (menu) {
            menu.isAnimated = e.target.checked;
        })
    });

    // toggle open on hover
    document.getElementById('openOnHover').addEventListener('click', function (e) {
        [menuFile, menuEdit, menuFormat].forEach(function (menu) {
            menu.openOnHover = e.target.checked;
        })
    });

    // show right-to-left menus
    document.getElementById('rtl').addEventListener('click', function (e) {
        var menubar = document.querySelector('.menubar');
        menubar.setAttribute('dir', e.target.checked ? 'rtl' : 'ltr');
        wijmo.Control.refreshAll(menubar);
    });

    // file menu items
    function getFileMenuItems() {
        return [
            {
                header: 'New', items: [
                    { header: 'Project' },
                    { header: 'Site' },
                    { header: 'File' },
                ]
            },
            { header: 'Open' },
            { header: 'Save' },
            {
                header: 'Save As', items: [
                    { header: 'Normal' },
                    { header: 'Compressed' },
                    { header: 'Encrypted' }
                ]
            },
            { header: '-' },
            { header: 'Exit' }
        ];
    }

    // edit menu items
    function getEditMenuItems() {
        return [
            {
                header: 'Go to', items: [
                    { header: 'Line' },
                    { header: 'Symbol' },
                    {
                        header: 'File', items: [
                            { header: 'Current Project' },
                            { header: 'Current Solution' },
                            { header: 'Select...' },
                        ]
                    },
                ]
            },
            {
                header: 'Find and Replace', items: [
                    { header: 'Quick Find' },
                    { header: 'Quick Replace' },
                    { header: 'Find in Files' },
                    {
                        header: 'Replace in Files', items: [
                            { header: 'All' },
                            { header: 'Read/Write Only' },
                        ]
                    },
                ]
            },
            { header: '-' },
            { header: 'Undo' },
            { header: 'Redo' }
        ];
    }

    // format menu items
    function getFormatMenuItems() {
        return [
            {
                header: 'Font', items: [
                    {
                        header: 'Family', items: [
                            { header: 'Arial', prop: 'face' },
                            { header: 'Times', prop: 'face' },
                            { header: 'Courier', prop: 'face' },
                            { header: 'Verdana', prop: 'face' },
                            { header: 'Georgia', prop: 'face' }
                        ]
                    },
                    { header: 'Bold', prop: 'font' },
                    { header: 'Italic', prop: 'font' },
                    { header: 'Underline', prop: 'font' },
                    { header: '-' },
                    { header: 'Larger', prop: 'font' },
                    { header: 'Smaller', prop: 'font' }
                ]
            },
            {
                header: 'Color', items: [
                    { header: 'Black', prop: 'color' },
                    { header: 'Red', prop: 'color' },
                    { header: 'Green', prop: 'color' },
                    { header: 'Blue', prop: 'color' }
                ]
            },
            {
                header: 'Background', items: [
                    { header: 'White', prop: 'background' },
                    { header: 'Red', prop: 'background' },
                    { header: 'Green', prop: 'background' },
                    { header: 'Blue', prop: 'background' }
                ]
            },
        ];
    }

    // format menu command
    function getFormatMenuCommand() {
        return {
            executeCommand: function (parm) {
                switch (parm.prop) {
                    case 'face':
                        targetStyle.fontFamily = parm.header;
                        break;
                    case 'font':
                        switch (parm.header) {
                            case 'Bold':
                                targetStyle.fontWeight = targetStyle.fontWeight ? '' : 'bold';
                                break;
                            case 'Italic':
                                targetStyle.fontStyle = targetStyle.fontStyle ? '' : 'italic';
                                break;
                            case 'Underline':
                                targetStyle.textDecoration = targetStyle.textDecoration ? '' : 'underline';
                                break;
                            case 'Larger':
                                targetStyle.fontSize = (parseFloat(computedStyle.fontSize) * 1.2) + 'px';
                                break;
                            case 'Smaller':
                                targetStyle.fontSize = (parseFloat(computedStyle.fontSize) * .8) + 'px';
                                break;
                        }
                        break;
                    case 'color':
                        targetStyle.color = parm.header.toLowerCase();
                        break;
                    case 'background':
                        targetStyle.background = parm.header.toLowerCase();
                        break;
                }
            },
            canExecuteCommand: function (parm) {
                switch (parm.prop) {
                    case 'face':
                        return targetStyle.fontFamily != parm.header;
                    case 'font':
                        switch (parm.header) {
                            case 'Larger':
                                return parseFloat(computedStyle.fontSize) < 24;
                            case 'Smaller':
                                return parseFloat(computedStyle.fontSize) > 8;
                        }
                        break;
                    case 'color':
                    case 'background':
                        var color = parm.header.toLowerCase();
                        return targetStyle.color != color && targetStyle.background != color;
                }
                return true;
            }
        }
    }
}

