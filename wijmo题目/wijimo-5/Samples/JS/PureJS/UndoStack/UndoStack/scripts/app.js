onload = function() {

    // create the Wijmo controls
    var c = new wijmo.input.ComboBox('#country', {
        itemsSource: getCountries(),
        textChanged: function (s, e) {
            document.getElementById('countryValue').textContent = s.text;
        }
    });
    var a = new wijmo.input.InputNumber('#amount', {
        format: 'c2',
        value: 0,
        min: 0,
        step: 10,
        valueChanged: function (s, e) {
            document.getElementById('amountValue').textContent = s.value;
        }
    });
    var gg = new wijmo.gauge.LinearGauge('#gauge', {
        isReadOnly: false,
        value: 0,
        min: 0,
        step: 10,
        valueChanged: function (s, e) {
            document.getElementById('gaugeValue').textContent = s.value;
        }
    });
    var d = new wijmo.input.InputDate('#date', {
        valueChanged: function (s, e) {
            document.getElementById('dateValue').textContent = s.value;
        }
    });
    var colors = new wijmo.input.MultiSelect('#colors', {
        itemsSource: 'Red,Green,Blue'.split(','),
        showSelectAllCheckbox: true,
        selectAllLabel: 'Select All Colors',
        headerFormat: '{count:n0} colors selected',
        checkedItemsChanged: function (s, e) {
            document.getElementById('colorsValue').textContent = s.checkedItems;
        }
    });
    var mac = new wijmo.input.MultiAutoComplete('#mac', {
        itemsSource: 'Red,Green,Blue'.split(','),
        selectedItemsChanged: function (s, e) {
            document.getElementById('macValue').textContent = s.selectedItems;
        }
    });
    var g = new wijmo.grid.FlexGrid('#grid', {
        itemsSource: getData(),
        allowDelete: true,
        allowAddNew: true,
        //newRowAtTop: true,
        //imeEnabled: true,
        frozenColumns: 2,
        frozenRows: 2
    });
    var col = g.getColumn('country');
    col.dataMap = getCountries();
    col.maxLength = 8;
    col = g.getColumn('discount');
    col.format = 'p0';
    document.getElementById('newRowAtTop').addEventListener('click', function (e) {
        g.newRowAtTop = e.target.checked;
    });

    // create undo stack (after creating the controls)
    var undoStack = new wijmo.undo.UndoStack('#form');
    undoStack.stateChanged.addHandler(function (s, e) {
        updateState();
    });
    function updateState() {
        btnUndo.disabled = !undoStack.canUndo;
        btnRedo.disabled = !undoStack.canRedo;
        cnt.textContent = undoStack.actionCount;
    }

    // create undo/redo buttons
    var btnUndo = document.getElementById('undo');
    var btnRedo = document.getElementById('redo');
    var btnReset = document.getElementById('reset');
    var cnt = document.getElementById('cnt');
    btnUndo.addEventListener('click', function () {
        undoStack.undo();
    });
    btnRedo.addEventListener('click', function () {
        undoStack.redo();
    });
    btnReset.addEventListener('click', function () {
        undoStack.reset();
    });

    // add ctrl-Z/Y shortcuts to undo/redo
    document.addEventListener('keydown', function (e) {
        if (!e.defaultPrevented) {
            if (e.ctrlKey) {  // PC: ctrl+Z to undo, ctrl+Y to redo
                switch (e.keyCode) {
                    case 90: // ctrl+Z
                        e.target.blur();
                        if (undoStack.canUndo) {
                            undoStack.undo();
                            e.preventDefault();
                        }
                        break;
                    case 89: // ctrl+Y
                        e.target.blur();
                        if (undoStack.canRedo) {
                            undoStack.redo();
                            e.preventDefault();
                        }
                        break;
                }
            } else if (e.metaKey && e.keyCode == 90) { // Mac: cmd instead of ctrl
                e.target.blur();
                if (!e.shiftKey) {
                    if (undoStack.canUndo) { // cmd+Z to undo
                        undoStack.undo();
                        e.preventDefault();
                    }
                } else {
                    if (undoStack.canRedo) { // shift+cmd+Z to redo
                        undoStack.redo();
                        e.preventDefault();
                    }
                }
            }
        }
    }, true)

    // create some sample data
    function getCountries() {
        return 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    }
    function getData() {
        var countries = getCountries(),
            names = 'Abe,Bob,Chuck,Dan,Ed,Fred'.split(','),
            data = [];
        for (var i = 0; i < 12; i++) {
            data.push({
                id: i,
                name: names[i % names.length],
                country: countries[i % countries.length],
                active: i % 5 != 0,
                discount: Math.random() / 3,
                downloads: Math.round(Math.random() * 200000),
            });
        }
        return data;
    }
}
