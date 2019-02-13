onload = function () {

    // ensure topic ids are unique
    // (prepend '=' as needed to make them unique)
    var fiddleCount = ensureUniqueIds(toc, {});

    // create tree
    var tree = new wijmo.nav.TreeView('#treeView', {
        displayMemberPath: 'header',
        childItemsPath: 'items',
        itemsSource: toc,
        formatItem: function (s, e) {
            var elem = e.element;
            if (e.dataItem.module) {
                var template = '<span class="module-icon module-icon-{symbol}" title="{fileName}">{symbol}</span> ';
                var icon = wijmo.format(template, e.dataItem.module);
                elem.innerHTML = icon + elem.innerHTML;
            }
            if (!e.dataItem.id || e.dataItem.id[0] == '?') {
                elem.style.color = 'red';
            }
        }
    });
    var msg = wijmo.format('<b>{count:n0}</b> Lessons Available!<br/>(and more on the way...)', {
        count: fiddleCount
    });
    document.getElementById('itemCount').innerHTML = msg;

    // show selected item on click or enter
    tree.addEventListener(tree.hostElement, 'click', function (e) {
        location.hash = tree.selectedItem.id;
    });
    tree.addEventListener(tree.hostElement, 'keydown', function (e) {
        if (e.keyCode == wijmo.Key.Enter) {
            e.preventDefault();
            location.hash = tree.selectedItem.id;
        }
    });

    // show item's fiddle in fiddle frame
    var fiddleFrame = document.getElementById('fiddleFrame');
    function showFiddle(item) {
        if (item && item.id && item.id.indexOf('?') < 0) {
            var src = '//jsfiddle.net/Wijmo5/' +
                item.id.replace(/^=+/g, '') + // aliases start with '=' characters
                '/embedded/result,html,js,css/';
            if (src != fiddleFrame.src) {
                fiddleFrame.src = src;
            }
        }
    }

    // simple routing
    // http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html
    function router() {

        // select item, show fiddle
        var id = location.hash.slice(1);
        var item = findItem(toc, id) || toc[0];
        tree.selectedItem = item;
        showFiddle(item);

        // update page title (for SEO)
        var path = tree.selectedPath;
        var title = path[path.length -1];
        document.title = title + ' | Learn Wijmo';
    }
    addEventListener('hashchange', router);
    router();

    // find an item in a hierarchical list by its id
    function findItem(list, id) {
        if (list && id) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (item.id == id) {
                    return item;
                }
                if (item.items) {
                    item = findItem(item.items, id);
                    if (item != null) {
                        return item;
                    }
                }
            }
        }
        return null;
    }

    // ensure the fiddle ids are unique
    function ensureUniqueIds(items, ids) {
        var cnt = 0;
        for (var i = 0; items && i < items.length; i++) {
            var item = items[i];
            while (item.id in ids) {
                item.id = '=' + item.id;
            }
            ids[item.id] = true;
            if (item.id[0] != '=') {
                cnt++;
            }
            if (item.items) {
                cnt += ensureUniqueIds(item.items, ids)
            }
        }
        return cnt;
    }

    // add keywords field to each fiddle
    if (wijmo.isFunction(getFiddleKeywords)) {

        // add keywords field to each fiddle
        var keywords = getFiddleKeywords();
        var index = getFiddleIndex();
        for (var id in index) {
            var indices = index[id];
            var fiddleKeywords = '';
            for (var i = 0; i < indices.length; i++) {
                var kw = keywords[indices[i]];
                fiddleKeywords += kw + ' ';
            }
            var fiddle = findItem(toc, id);
            if (fiddle) { // watch out for commented-out items! (TFS 295641)
                fiddle.keywords = fiddleKeywords;
            }
        }

        // build autocomplete items source
        var searchItems = [];
        addSearchItems(toc, searchItems, '');
        function addSearchItems(fiddles, list, path) {
            for (var i = 0; i < fiddles.length; i++) {
                var fiddle = fiddles[i];
                list.push({
                    header: path + fiddle.header,
                    keywords: fiddle.keywords,
                    fiddle: fiddle,
                });
                if (fiddle.items && fiddle.items.length) {
                    addSearchItems(fiddle.items, searchItems, path + fiddle.header + ' / ');
                }
            }
        }

        // add AutoComplete control to search for fiddles
        var ac = new wijmo.input.AutoComplete('#search', {
            placeholder: 'Search',
            dropDownCssClass: 'search-dropdown',
            itemsSource: searchItems,
            displayMemberPath: 'header',
            searchMemberPath: 'keywords',
            delay: 300,
            selectedIndex: -1,
            selectedIndexChanged: function (s, e) {
                var item = s.selectedItem;
                if (item) {
                    location.hash = item.fiddle.id;
                }
            }
        })
    }
}

// define modules to show in the UI
var modules = {
    wijmo: { fileName: 'wijmo.js', symbol: 'Wj' },
    flexGrid: { fileName: 'wijmo.grid.js', symbol: 'Gr' },
    input: { fileName: 'wijmo.input.js', symbol: 'In' },
    chart: { fileName: 'wijmo.chart.js', symbol: 'Ch' },
    gauge: { fileName: 'wijmo.gauge.js', symbol: 'Ga' },
    nav: { fileName: 'wijmo.nav.js', symbol: 'Nv' },
    olap: { fileName: 'wijmo.olap.js', symbol: 'Ol' },
    viewer: { fileName: 'wijmo.viewer.js', symbol: 'Vw' }
};

// table of contents
// NOTE: the same fiddle can be included in multiple topics using 
// the same id; the 'ensureUniqueIds' function below will make 
// IDs unique so routing works OK for the duplicates.
var toc = [
    { header: 'Wijmo', module: modules.wijmo, id: 'oL3msc5j', items: [
        { header: 'Referencing Wijmo 5', id: 't2h58s45' },
        { header: 'Creating Controls', id: '4w5vzopr' },
        { header: 'Controls and Elements', id: 'h79d5u77' },
        { header: 'Properties and Enums', id: '2mk8w9av' },
        { header: 'Wijmo Events', id: '9tkuuf5t', items: [
            { header: 'HTML Events', id: 'yaameL1e' }
        ]},
        { header: 'Themes', id: 'eg3yfe56' },
        { header: 'Pseudo Classes', id: 'gp1er53j', items: [
            { header: 'FlexGrid Focus', id: '3ydpcqet' }
        ]},
        { header: 'Globalization', id: 'euta6t2d', items: [
            { header: 'Formatting', id: 'u9fo3ynp' },
            { header: 'Parsing', id: 'bjtfttf5' },
            { header: 'Customization', id: 'crpozugn' },
            { header: 'wijmo.format', id: '1ot27737', items: [
                { header: 'Pluralization', id: '69wx5mhz' }
            ]}
        ]},
        { header: 'CollectionView', id: 't3yc062t', items: [
            { header: 'Loading Data', id: 'dxnemmoL', items: [
                { header: 'Spinners', id: 'h23w5emj' },
                { header: 'Loading JSON Dates', id: 'ene3rLmb' }
            ]},
            { header: 'Creating Views', id: 'w6pyagt2', items: [
                { header: 'Currency', id: '1cqm4ca8' },
                { header: 'Sorting', id: '2g70rkct', items: [
                    { header: 'International Sort', id: 'fnn9w7sc' },
                    { header: 'Stable Sort', id: '6gkymL4z' }
                ]},
                { header: 'Filtering', id: 'rgzc4LyL', items: [
                    { header: 'Chaining', id: 'azb2u3st' }
                ]},
                { header: 'Grouping', id: 'rnspm1uy', items: [
                    { header: 'Custom Groups', id: 'x2td7qrw' }
                ]},
                { header: 'Paging', id: 'Lt57ppor' }
            ]},
            { header: 'Editing Views', id: '022vxh6a', items: [
                { header: 'Editing', id: '022vxh6a' },
                { header: 'Adding/Removing Items', id: 'ggevzdbj' },
                { header: 'Tracking Changes', id: 's2nemwc3' },
                { header: 'Validation', id: 'cgvks8x8' }
            ]},
            { header: 'Performance', id: 'jmnmqkxh' },
            { header: 'Data Providers', id: 'xgo9us0r' }
        ]},
        { header: 'Other Services', id: 'hmq6bgkc', items: [
            { header: 'Tooltips', id: '7djvL68d', items: [
                { header: 'Cell Notes', id: '2d0jhd6r' }
            ]},
            { header: 'Clipboard', id: '64vr06dd' },
            { header: 'PrintDocument', id: 'c75xjs11' },
            { header: 'Color', id: 'xjo09z48' },
            { header: 'Glyphs', id: '14oo9xeg', items: [
                { header: 'Customizing', id: 'g7mxg2w2' }
            ]},
            { header: 'wijmo.format', id: '1ot27737' },
            { header: 'wijmo.httpRequest', id: '7vjtej20' },
            { header: 'wijmo.animate', id: 'ro9twyer' },
            { header: 'wijmo.showPopup', id: 'svg8pqwp' }
        ]}
        // TODO: Advanced Topics: templates, Authoring Controls
    ]},
    { header: 'Input', module: modules.input, id: 'wuf3acrc', items: [
        { header: 'Architecture', id: 'yb006bpe', items: [
            { header: 'DropDown', id: 'f2e7Lyqr' },
            { header: 'ComboBox', id: 'h85qyq55' },
            { header: 'Pseudo-Classes', id: 'qhp9s0nx', items: [
                { header: 'Focused State', id: 'c6ravuqd' },
                { header: 'Clear Buttons', id: 'L21g8dyc' },
                { header: 'Material Design', id: '5zaL8qqa' }
            ]}
        ]},
        { header: 'Strings/Objects', id: 'g5fh8uds', items: [
            { header: 'ComboBox', id: 'uvvk9b2u', items: [
                { header: 'Strings', id: 'nLcLr7cr' },
                { header: 'Numbers and Dates', id: 'qr2070ft' },
                { header: 'Objects', id: '1kjw0fw0', items: [
                    { header: 'Grouping', id: 'sy7u9rn6', items: [
                        { header: 'Grouping By Initial', id: 'x2td7qrw' },
                        { header: 'Custom Groups', id: 'zqbozuwv' }
                    ]}, 
                    { header: 'Master/Detail', id: 'uazd9mx4' },
                    { header: 'Sorting and Filtering', id: 'pqjhmwz8' },
                    { header: 'Chaining Combos', id: 'a8teyfhq' }
                ]}, 
                { header: 'Multi-Column', id: 'w1bmx3cz' },
                { header: 'HTML Content', id: '8k4fav0x' },
                { header: 'Auto-Add Items', id: 'hpnv1vb3' },
                { header: 'Infinite Scrolling', id: 'bdj4un60' }
            ]},
            { header: 'AutoComplete', id: 'coarr9j5', items: [
                { header: 'Async Loading', id: 'teLupgq3' },
                { header: 'Searching', id: 'Lbt3t7wf', items: [
                    { header: 'Search Path', id: 'L7mbp7sz' },
                    { header: 'Search Parameters', id: '1t1zh0dh' },
                    { header: 'Custom Search', id: '2r67wkcr' }
                ]},
                { header: 'Auto-Add Items', id: 'hpnv1vb3' },
                { header: 'Filtering', id: '1dhfa7ms' }
            ]},
            { header: 'InputMask', id: 'j6er01bx', items: [
                { header: 'rawValue', id: '1cLkog4u' },
                { header: 'promptChar', id: '5e6wz2s7' },
                { header: 'maskFull', id: '4zhhL6q0' }
            ]},
            { header: 'ListBox', id: 'pLLrjkjd', items: [
                { header: 'Infinite Scrolling', id: '4avorsnd' },
                { header: 'formatItem', id: 'y0kdwvk4' }
            ]}
        ]},
        { header: 'Numbers', id: 'f0c4Ldnb', items: [
            { header: 'InputNumber', id: 'f0c4Ldnb', items: [
                { header: 'Formatting', id: 'qybq241k' },
                { header: 'Step', id: 'qsL5fjyy' },
                { header: 'Ranges (min/max)', id: 'wo6kfyda' }
            ]},
            { header: 'Gauges (Sliders)', id: 'xrxb3tcg', items: [
                { header: 'LinearGauge', id: 'rkabhum1' },
                { header: 'RadialGauge', id: 'nm6e4q1z' }
            ]},
            { header: 'ComboBox', id: 'qr2070ft' }
        ]},
        { header: 'Dates and Times', id: 'zgr431mw', items: [
            { header: 'InputDate', id: 'bj0wbdfd', items: [
                { header: 'Formatting', id: 'e7ryekcj' },
                { header: 'Ranges (min/max)', id: 'L7tn8j16' },
                { header: 'Customization', id: '9o00t6mm', items: [
                    { header: 'More Customization', id: 'jqfw8908' }
                ]},
                { header: 'Validation', id: 'btot9vr5' }
            ]},
            { header: 'InputTime', id: 'hdpnf1Lz' },
            { header: 'InputDateTime', id: '465gmuL2' },
            { header: 'Calendar', id: 'm1g1oaxd', items: [
                { header: 'Ranges (min/max)', id: 'tcwa9hqd' },
                { header: 'Customization', id: 'azt2ajy1' },
                { header: 'Styling', id: '9cg71fnv' },
                { header: 'Validation', id: 'z7wveb75' }
            ]},
            { header: 'ComboBox', id: 'qr2070ft' }
        ]},
        { header: 'Colors', id: 'z84ebpec', items: [ 
            { header: 'InputColor', id: 'kdca1Lk5' },
            { header: 'ColorPicker', id: 'tyardv5k' },
            { header: 'ComboBox', id: 'b00w0ebe' }
        ]},
        { header: 'Multi-Item', id: 'b0f7bk6u', items: [
            { header: 'MultiSelect', id: '44w7fob2', items: [
                { header: 'MultiSelect ($checked)', id: '22h1ekow' }
            ]},
            { header: 'MultiAutoComplete', id: '94c6wb77' },
            { header: 'ListBox', id: 'txhtjL5a' },
            { header: 'ListBox without Checkboxes', id: '22psnknv' }
        ]},
        { header: 'Menus', id: '5fe93pm8', items: [
            { header: 'Commands', id: 'kbfrm8hz' },
            { header: 'Value Pickers', id: '2jbxyq9p' },
            { header: 'Split Buttons', id: 'go8u85tk' },
            { header: 'Context Menus', id: 'bx7cto2u' },
            { header: 'Hierarchical Menus', id: '3pjgcefw' }
        ]},
        { header: 'Popups and Dialogs', id: 'j9t6s1xp', items: [
            { header: 'Dialogs', id: '1ctsagyd', items: [
                { header: 'Alerts and Prompts', id: '9vxtfaf3' },
                { header: 'Transitions', id: 'jmef8wtu' },
                { header: 'Pop-up Editors', id: '05s8w5fz' },
                { header: 'Pop-up Dialogs', id: 'k2zsjon8' },
                { header: 'Draggable Dialogs', id: 'f344L1b8' }
            ]},
            { header: 'Popups with Owners', id: 'e225vyns' }
        ]}
    ]},
    { header: 'FlexGrid', module: modules.flexGrid, id: 'bwdea8y3', items: [ 
        { header: 'Concepts', id: 'bwdea8y3', items: [
            { header: 'Architecture', id: '2vosx6m7' },
            { header: 'Accessibility', id: '9x71ogu8' },
            { header: 'Grid Panels', id: '152hy1w9' },
            { header: 'Rows and Columns', id: 'bzb13rpv' },
            { header: 'Sizing and Scrolling', id: 'hdrtamq4', items: [
                { header: 'Sizing with the Mouse', id: 'mg1n00to' },
                { header: 'Auto Row Heights', id: '41gr9gyt', items: [
                    { header: 'Asynchronous Auto-Sizing', id: '2sna1oht' },
                ]},
                { header: 'Auto Column Widths', id: 'horay76q' },
                { header: 'No Scrollbars', id: '4rktv5g5' },
                { header: 'Virtualization', id: 'ujfroryj' },
                { header: 'Scrolling and ViewRange', id: 'pkdmuk8m' },
                { header: 'Sticky Headers', id: 's7s75zd3' },
                { header: 'Deferred Resizing', id: 'efvw5czL' },
                { header: 'Fast Scroller (iOS-style)', id: 'oe4b58nt' }
            ]},
            { header: 'Data Operations', id: '2vosx6m7', items: [
                { header: 'Sorting', id: 'pu062h9t', items: [
                    { header: 'Multi-Column Sorts', id: 'c9pL350n' },
                    { header: 'On-Demand Sorting', id: 'xa356c78' },
                    { header: 'International Sort', id: 'fnn9w7sc' },
                ]},
                { header: 'Grouping', id: 'ah2f5w7f', items: [
                    { header: 'GroupPanel', id: 'hf7ud7ge' }
                ]},
                { header: 'Filtering', id: '0p5r9csy', items: [
                    { header: 'FlexGridFilter', id: '1ttsyag4', items: [
                        { header: 'Custom Filter Types', id: 'mv5dc510' },
                        { header: 'Custom Icons', id: 'afq2b6p6' },
                        { header: 'Custom Operators', id: 'Lsh961a1' },
                        { header: 'Optimizations', id: 'zv5a82g8' }
                    ]},
                    { header: 'Server-Side', id: '1bbh88tr' },
                    { header: 'Hierarchical Data', id: 'oL2xbgxr' }
                ]},
                { header: 'Paging', id: 'Lt57ppor' },
                { header: 'Loading', id: 'h23w5emj' },
                { header: 'Searching', id: '7tq8jrn0' },
                { header: 'Persisting State', id: 'znjcvd10' }
            ]},
            { header: 'Cells', id: 'd21zrqgd' },
            { header: 'Binding', id: 'y9Lj6os0', items: [
                { header: 'Deep Binding', id: '3kLqwp9e' }
            ]},
            { header: 'Selection', id: 't5n993gq', items: [
                { header: 'Marquee', id: 'zph4o0od'},
                { header: 'Selection and Focus', id: 'djmr2hny' },
                { header: 'Selection Aggregates', id: 'xsm1raj5' },
                { header: 'Multi-Range Selection', id: 'ttdrv4Ln' },
                { header: 'Checkbox-Based Selection', id: 'ufsL2aae' },
                { header: 'Searching', id: '7tq8jrn0' }
            ]},
            { header: 'Animations', id: 'f6bhbp1d' }, 
            { header: 'Cell Merging', id: 'od6emykh', items: [
                { header: 'Header Merging', id: 'uqmsqye2' },
                { header: 'Custom Merging', id: 'p9qv7dmt' },
                { header: 'Restricted Merging', id: '42t9j95q' }
            ]},
            { header: 'Clipboard', id: '04fsxxbo', items: [
                { header: 'Programmatic', id: '4pxLtk0o' }
            ]}
        ]},
        { header: 'Columns', id: 'ayuvd5sm', items: [ 
            { header: 'Collections', id: 'ayuvd5sm' },
            { header: 'Properties', id: 'w9p0em0d' },
            { header: 'DataMaps', id: 'cn3p3wq7', items: [
                { header: 'Dynamic DataMaps', id: 'we6y7f2g', items: [
                    { header: 'Customize', id: '9aoo7mzm' },
                    { header: 'Switch', id: '6b68fwkp' }
                ]}
            ]},
            { header: 'Sizing', id: 'Lb786a3f', items: [
                { header: 'Without Headers', id: 'qfze7xw6' },
                { header: 'Auto-Sizing', id: 'udcxxa6L' }
            ]},
            { header: 'Reordering', id: 'ejtt0jx8', items: [
                { header: 'Dragging Bound Rows', id: 'kyg0qsda'},
                { header: 'Custom Markers', id: '5dd6mzkc' },
                { header: 'Drop Target Control', id: '4r4xqz5c' }
            ]},
            { header: 'Column Layout', id: 'daxp8gm6', items: [
                { header: 'Column Picker', id: 'svg8pqwp' },
                { header: 'Persisting State', id: 'znjcvd10' },
                { header: 'Responsive Layouts', id: 'rz7h0cLg' }
            ]},
            { header: 'Freezing', id: 'pctunrd9', items: [
                { header: 'Freeze Button (Excel style)', id: '71qupacx' },
                { header: 'Freezing Handler', id: 'nwxgeazj' },
                { header: 'Multi-Pane Grids', id: 'p8hw2a3v' }
            ]},
            { header: 'Sticky Headers', id: '8zLr88n6' },
            { header: 'Aggregates', id: '1pg27ffw', items: [
                { header: 'Above the Data', id: 'st9jw19v' },
                { header: 'Below the Data', id: 'Lrrmzsnw' },
                { header: 'Custom Aggregates', id: 'cg2f5kfj' }
            ]},
            { header: 'Custom Cells', id: '8Lgc37dc' },
            { header: 'Styling', id: 'nLdmgjng' }
        ]},
        { header: 'Rows', id: 'ye46ku04', items: [
            { header: 'Collections', id: 'ye46ku04' },
            { header: 'Properties', id: 'xup60a1t' },
            { header: 'Adding/Removing', id: 'fwn44Lyy' },
            { header: 'Freezing', id: 'pctunrd9' },
            { header: 'Details', id: 'r9up8exz' },
            { header: 'Styling', id: 'psdsh942', items: [
                { header: 'Row Heights', id: 'je6p2tgt', items: [
                    { header: 'Preserve Row Heights', id: 'yj54Lq9x' }
                ]},
                { header: 'Vertical Alignment', id: 'u9r4weon', items: [
                    { header: 'Flex Display', id: 'vtf3ko0a' } // REVIEW: CSS only in the next version
                ]},
                { header: 'Hover', id: 'khcym8zp' }
            ]}
        ]},
        { header: 'Data Binding', id: '8pg43pj6', items: [
            { header: 'CollectionView', id: 'y3ehyzbs' },
            { header: 'Loading Data', id: 'dxnemmoL', items: [
                { header: 'Spinners', id: 'h23w5emj' },
                { header: 'Loading JSON Dates', id: 'ene3rLmb' }
            ]},
            { header: 'OData', id: 'r5a21ysm' },
            { header: 'Virtual Data', id: 'smh5p6xr' },
            { header: 'Infinite Scrolling', id: 'ujfroryj' },
            { header: 'Hierarchical Data', id: 'gz7e6Lgv', items: [ 
                { header: 'Master/Detail', id: 'x0tud0b8' },
                { header: 'Tree Grids', id: 'kk9j93bL', items:[
                    { header: 'XML Documents', id: 'xb7rn2sk' },
                    { header: 'Editable Tree Grids', id: 'a2Lynj6v' },
                    { header: 'Unbound Tree Grids', id: 'Los124e0' },
                    { header: 'Filtering', id: 'oL2xbgxr' },
                    { header: 'Lazy Loading', id: 'a17mh3q3' },
                ]},
                { header: 'Row Details', id: 'r9up8exz' }
            ]}
        ]},
        { header: 'Editing', id: 'Lebn7sh8', items: [
            { header: 'Read-only, Required Columns', id: '32jh96oh' },
            { header: 'DataMaps', id: 'cn3p3wq7' },
            { header: 'Clipboard', id: '04fsxxbo', items: [
                { header: 'Custom Content', id: '184bmpra' }
            ]},
            { header: 'Quick-Editing', id: 'etfsotsL' },
            { header: 'Validation', id: 'ayewg4pg', items: [
                { header: 'CollectionView', id: 'twgjr6s8' }
            ]},
            { header: 'Custom Editing', id: '8tm4mdqr', items: [
                { header: 'Editing Events', id: '8tm4mdqr' },
                { header: 'Always Editing', id: '4wmn70sz' },
                { header: 'Inline Editing', id: 'hkxco8kb' },
                { header: 'Popup Editors', id: '05s8w5fz' },
                { header: 'Custom Editors', id: '1w9hr82h' },
                { header: 'IME (Input Method Editor)', id: 'yLk3kuLu', items: [
                    { header: 'IME Control', id: 'ahgtucrz' }
                ]}
            ]}
        ]},
        { header: 'Custom Cells', id: 'cbb2dpv9', items: [
            { header: 'Conditional Styling', id: 'cbb2dpv9' },
            { header: 'Cell Notes', id: '2d0jhd6r' },
            { header: 'Dynamic Updates', id: 'wm71r0em' },
            { header: 'Sparklines', id: '8Lgc37dc' },
            { header: 'Custom Editors', id: '1w9hr82h' },
            { header: 'Templates', id: '8yr4gg67', items: [
                { header: 'Templates in Angular', id: 'dd14cqcx' },
                { header: 'Templates and the Clipboard', id: 'pe6qo7s4' }
            ]}
        ]},
        { header: 'Events', id: 'hzkw9x4p', items: [
            { header: 'Mouse', id: '16kyxo0n' },
            { header: 'Keyboard', id: 'k2zsjon8' },
            { header: 'Selection', id: '8th382uh' },
            { header: 'Editing', id: '8tm4mdqr' },
            { header: 'Resizing', id: 'syq26khL' },
            { header: 'Reordering', id: '4r4xqz5c' },
            { header: 'Drag and Drop', id: '0z1ou6cn' }
        ]},
        { header: 'Import/Export', id: 'v9z4he0s', items: [
            { header: 'Excel (XLSX)', id: 'yzcefvLy' },
            { header: 'PDF', id: 'equxqkyt' },
            { header: 'Printer', id: 'v9z4he0s' }
        ]}
    ]},
    { header: 'FlexChart', module: modules.chart, id: 'zrbukdvm', items: [
        { header: 'Concepts', id: 'zrbukdvm', items: [
            { header: 'Architecture', id: 'oybe27o0', items: [
                { header: 'Sorting', id: 'oybe27o0' },
                { header: 'Filtering', id: '8mbqew00' },
                { header: 'Render Cycle', id: 'veL6qgv0' }
            ]},
            { header: 'Chart Types', id: '9n1dm5gd', items: [
                { header: 'Multiple Chart Types', id: 'Lzgnha8k' },
                { header: 'Special Chart Types', id: 'xcxLm4mk', items: [
                    { header: 'Bar', id: '8nndw7q5' },
                    { header: 'Bubble', id: 'cef074Lc' },
                    { header: 'Candlestick', id: '5zmgvsgo' },
                    { header: 'HighLowOpenClose', id: 'p2qftk2b' },
                    { header: 'Funnel', id: 'qte100x6' },
                    { header: 'Pareto', id: 'u0stkL5w' },
                    { header: 'Gantt', id: '6zcmwjqr' }
                ]}
            ]},
            { header: 'Styling', id: '64dy5ao5', items: [
                { header: 'Series Styles', id: 'merzxr1q' },
                { header: 'Palettes', id: 'aszrs9ho' },
                { header: 'Gradients', id: 'exLsubmh' }
            ]},
            { header: 'Export', id: 'oqm2scqa' }
        ]},
        { header: 'Chart Elements', id: 'nggzzs57', items: [
            { header: 'Legends and Titles', id: 'f81nn01v', items: [
                { header: 'Title Styles', id: 'oje5us08' },
                { header: 'Legend Styles', id: 'vkzasp97' },
                { header: 'Legend Position', id: '42tw7ntq' },
                { header: 'Legend Toggle', id: 'neg1dbyk' },
                { header: 'Data Labels', id: '1g783zxx' } // << review: it would be nice to be able to change the label position in the rendering event...
            ]},
            { header: 'Series', id: 'n5c7gL6g', items: [
                { header: 'Series Picker', id: 'wo8d3eLy' },
                { header: 'Chart Types', id: 'Lzgnha8k' },
                { header: 'Data Sources', id: '2q7L7po1' }
            ]},
            { header: 'Axes', id: 'q7y3Lejg', items: [
                { header: 'Labels and Formats', id: '303ccLve', items: [
                    { header: 'Custom Labels', id: 'u4gnd9q0' }
                ]},
                { header: 'Gridlines and Tickmarks', id: 'rqtq4uxr' },
                { header: 'Ranges', id: 'abrn5uow', items: [
                    { header: 'Zoom', id: 'pjobw9dx' }
                ]},
                { header: 'Origin and Position', id: 'b5vzbu34' },
                { header: 'Reverse', id: '8nndw7q5' },
                { header: 'Extra Axes', id: 't7p5h580' },
                { header: 'Chart Scaling', id: 'rvn85cmb' }
            ]},
            { header: 'Tooltips', id: 'a8sg9Lur', items: [
                { header: 'Data Labels', id: '1g783zxx' }
            ]},
            { header: 'Extra Elements', id: 'rn6eostL', items: [
                { header: 'Plot Areas', id: 'b57te4pp', items: [
                    { header: 'Stacked Charts', id: 'aq72xLtt' }
                ]},
                { header: 'Line Markers', id: 'uLowxat8' },
                { header: 'Annotations', id: 'unrhhc0w', items: [
                    { header: 'Symbols', id: 'zjn6m1eg' },
                    { header: 'Zones', id: 'yrom6u5z' },
                    { header: 'Zones Redux', id: 'hgc8L5w9' }
                ]},
                { header: 'Analytics', id: '8w9pc2r1', items: [
                    { header: 'Trend Lines', id: 'kfpjr61s' },
                    { header: 'Moving Averages', id: '357ztq8n' },
                    { header: 'Box & Whisker (Boxplot)', id: '9r6beor0' },
                    { header: 'Error Bars', id: 'c0zfy395' },
                    { header: 'Waterfall Charts', id: 't6bnzka7' },
                    { header: 'Custom Functions', id: '5ay8qdec' }
                ]},
                { header: 'Range Selectors', id: 'vctwhrnw' }
            ]},
        ]},
        { header: 'Events', id: 'aq2p3vud', items: [
            { header: 'Mouse', id: 'nggzzs57', items: [
                { header: 'Hit-Testing', id: 'nggzzs57' },
                { header: 'Zooming', id: 'pjobw9dx' },
                { header: 'Zooming with the Wheel', id: '8mbqew00' },
                { header: 'Grouping and Drill-down', id: 'e2pp0f66' }
            ]},
            { header: 'Selection', id: '06a4khdL', items: [
                { header: 'Grouping and Drill-down', id: 'e2pp0f66' }
            ]},
            { header: 'Rendering', id: 'hgc8L5w9', items: [
                { header: 'ItemFormatter', id: 'rptz23nL' }
            ]}
        ]},
        {  header: 'Interactive Charts', id: 'qx0us59L', items: [
            { header: 'Zooming', id: 'pjobw9dx' },
            { header: 'Filtering and Zooming', id: '8mbqew00' },
            { header: 'Selection', id: '06a4khdL' },
            { header: 'Grouping and Drill-down', id: 'e2pp0f66' },
            { header: 'Animations', id: 'sxoxzt9h' }
        ]}
    ]},
    { header: 'Gauge', module: modules.gauge, id: 'xb3bugpk', items: [
        { header: 'Concepts', id: 'xb3bugpk', items: [
            { header: 'Architecture', id: 'uypoe7ds', items: [
                { header: 'Basic Properties', id: '38g6fLLz' },
                { header: 'Ranges', id: 'oe6gev0q', items: [
                    { header: 'Stacked Ranges', id: 't8xye5ds'}
                ]}
            ]},
            { header: 'Gauge Types', id: 'ewzq66f1', items: [
                { header: 'Radial Gauges', id: 'kqkm8zt0' },
                { header: 'Linear Gauges', id: 'wkcehhvu' },
                { header: 'Bullet Graphs', id: 'vqrwdvgq' }
            ]},
            { header: 'Styling', id: 'v2gchd3v', items: [
                { header: 'CSS', id: 'v2gchd3v' },
                { header: 'Hover', id: '1zk0jvs5' },
                { header: 'Focus', id: 'hbxcp3j9' },
                { header: 'Ranges', id: 'psmjmygd' },
                { header: 'Custom Pointers', id: 'mbno06j3', items: [
                    { header: 'More Custom Pointers', id: '68omyg79' }
                ]},
                { header: 'Silverlight', id: 'opf79jw1' }
            ]}
        ]},
        { header: 'Gauge Elements', id: 'b3nuoepd', items: [
            { header: 'Face', id: 'jxg3au0y' },
            { header: 'Pointer', id: 'nkf0tfhn', items: [
                { header: 'Needle Pointers', id: 'mbno06j3' }
            ]},
            { header: 'Ranges', id: '994qn6fn' },
            { header: 'Thumb', id: '5c4bjL9x' },
            { header: 'Tickmarks', id: '1eLcgmah' },
            { header: 'Text Values', id: 'yd0brsvp' }
        ]}
    ]},
    { header: 'Nav', module: modules.nav, id: 'm6cwskx8', items: [
        { header: 'TabPanel', id: '17tmuomr', items: [
            { header: 'Concepts', id: '17tmuomr' },
            { header: 'Markup', id: '3tLbk982' },
            { header: 'Hosting Wijmo Controls', id: 'yc7d6rfd' },
            { header: 'Ribbon', id: '2pujtLha' },
            { header: 'Tabs In Code', id: '259ok034' },
            { header: 'Styling and CSS', id: 'qoesqnb6' },
            { header: 'Disabled and Invisible Tabs', id: 'bknhxznL' },
            { header: 'Detached Panels', id: 'or5nc0uh' },
            { header: 'Accessibility', id: '08xpbyg8' },
            { header: 'Right To Left', id: '7qv2y2dw' }
        ]},
        { header: 'TreeView', id: 'm6cwskx8', items: [
            { header: 'Concepts', id: 'm6cwskx8', items: [
                { header: 'Architecture', id: 'bxpexr3q' },
                { header: 'Main Properties', id: 'egmg93wc' },
                { header: 'Context Menus', id: 'kt8r17hq' },
                { header: 'Navigation Trees', id: 'p0Ls7msq' },
                { header: 'Styling and CSS', id: 'Lzgtk447', items: [
                    { header: 'Node Borders', id: 'otxe6L2t' },
                    { header: 'Accordion Trees', id: '3szu9v50' },
                    { header: 'Another Accordion', id: 'djnsh4La' },
                    { header: 'RTL', id: 'gorw2bvs' }
                ]},
                { header: 'Searching', id: 'ff81c4u0' }
            ]},
            { header: 'Nodes', id: 'qj8dduvL', items: [
                { header: 'Images', id: 'z1b4xpn9' },
                { header: 'Checkboxes', id: 'uurvbz7n' },
                { header: 'Custom Content', id: 'pavjqgbf' },
                { header: 'Custom Styles', id: 'otxe6L2t' },
                { header: 'Showing and Selecting', id: 'h2z0Lct3' },
                { header: 'Editing', id: 'mztye1La' },
                { header: 'Disabling', id: 'rttjv6xn' },
                { header: 'Changing', id: 'k1bdne55', items: [
                    { header: 'Adding', id: 'y4mgkhpf' },
                    { header: 'Removing', id: 'ua62afam' },
                    { header: 'Refreshing', id: 'k1bdne55' }
                ]},
                { header: 'Drag and Drop', id: '1duLq6t2', items: [
                    { header: 'Within Trees', id: '1duLq6t2' },
                    { header: 'Between Trees', id: 'fg3onk3L' }
                ]}
            ]},
            { header: 'Data Binding', id: 'm6cwskx8', items: [
                { header: 'Initial State', id: 'u9721o74' },
                { header: 'Heterogeneous Data', id: 'fo76b5tk' },
                { header: 'Refreshing', id: 'k1bdne55' },
                { header: 'Lazy Loading', id: '64kuc0db', items: [
                    { header: 'Lazy OData', id: '3765751u' },
                    { header: 'Re-loading', id: 'kv6bfrru' }
                ]}
            ]}
        ]
        },
        { header: 'Ribbon', id: '2pujtLha' }
    ]},
    { header: 'Olap', module: modules.olap, id: 'sgk2n74q', items: [
        { header: 'Concepts', id: 'sgk2n74q', items: [
            { header: 'Architecture', id: 'sgk2n74q' },
            { header: 'Tutorial', id: 'm59t0cro', items: [
                { header: 'Expenses By Buyer', id: '7kr5fsjc' },
                { header: 'Expenses By Expense Type', id: 'cngqdx7z' },
                { header: 'Expenses By Buyer and Type', id: 'vxLyd6mj' },
                { header: 'Multiple Row Fields', id: 'm8cwvuq9' },
                { header: 'Filter by Date (Value)', id: 'kqprjtvo', items: [
                    { header: 'Filter by Date (Condition)', id: 'mojudnz6' },
                    { header: 'Filter by Date (Slicer)', id: '3p8rcuqe' },
                    { header: 'Filter Source Data', id: 'porg3fdw' }
                ]},
                { header: 'Visual Summary (PivotChart)', id: 'ohfp6a2y' },
                { header: 'Add Interactivity (PivotPanel)', id: 'fo43ma21' }
            ]}
        ]},
        { header: 'PivotEngine', id: 'sL7whktg', items: [
            { header: 'Choose Fields', id: 'vce89zp2', items: [
                { header: 'Clone Measure Fields', id: 'q4ntLrdj' },
                { header: 'Clone Dimension Fields', id: 'zqoaugwr' },
                { header: 'Deep Binding', id: '4a8fu653' }
            ]},
            { header: 'Customize Fields', id: 'pm91grco', items: [
                { header: 'Format', id: 'ntd9z7fx' },
                { header: 'ShowAs', id: '7z3woue9' },
                { header: 'Sort', id: 'j0dLt3qg' },
                { header: 'HTML Content', id: 'wL8nv67r' },
                { header: 'Calculated Fields', id: 'sn26L3do' }
            ]},
            { header: 'Create Views', id: 'o2q4hL6c', items: [
                { header: 'Edit and Persist Views', id: 'y97cd1uL' }
            ]},
            { header: 'Performance', id: '7bvmdw58' },
            { header: 'Server-Side Data', id: 'zbjd5n2x', items: [
                { header: 'OLAP Cubes (specific fields)', id: 'poey8tr9' },
                { header: 'ComponentOne Data Services', id: 'fdma2Lns' }
            ]}
        ]}, 
        { header: 'PivotPanel', id: '5u2m0Lj8', items: [
            { header: 'Drag/Drop', id: '5u2m0Lj8', items: [
                { header: 'Touch (with polyfill)', id: '8dzj65r2' }
            ]}, 
            { header: 'Edit Fields', id: 'nvaom6j4' },
            { header: 'Value Fields', id: '9caywpvm' },
            { header: 'Row and Column Fields', id: 'ano4dL1e' },
            { header: 'Filter Fields', id: '89d456jz' },
            { header: 'Custom Layouts', id: 'by89qp63', items: [
                { header: 'Stacked', id: 'by89qp63' },
                { header: 'Side by Side', id: '432sfpba' },
                { header: 'Custom (2 columns)', id: '8bqke21o' },
                { header: 'Fields Only', id: 'm3k2wbng' },
                { header: 'Areas Only (2 by 2)', id: 'rj54w91o' },
                { header: 'Areas Only (1 by 4)', id: '3y27zq1h' }
            ]}
        ]},
        { header: 'PivotGrid', id: '8u4wrhv2', items: [
            { header: 'Subtotals', id: '9sjenrxv', items:[
                { header: 'Frozen Rows', id: 'z97ftswy' }
            ]},
            { header: 'Sort', id: 'j0dLt3qg' },
            { header: 'Customize', id: '60om78qg', items: [
                { header: 'Sparklines', id: 't19vLjc5' },
                { header: 'HTML Content', id: 'wL8nv67r' }
            ]},
            { header: 'Details', id: '1n6ds9uv' },
            { header: 'Export', id: 'c2mkqz4o' }
        ]}, 
        { header: 'PivotChart', id: 'n5k1gycv', items: [
            { header: 'Chart Types', id: 'grjozn1h' },
            { header: 'Title', id: 'Lhcromng' },
            { header: 'Legend', id: 'skwovfep' },
            //{ header: 'Totals', id: 'sjz6reLx' }, // REVIEW: not working?
            { header: 'Export', id: '8h2rj6w5' }
        ]},
        { header: 'Slicer', id: '3p8rcuqe' }
    ]}
];
