var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// start the app when the window loads
window.onload = function () {
    new App();
};
/*
 * The App class implements the UI and persistent storage
 * (the logic is contained in the Model class)
 */
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        // create the model
        var stg = localStorage;
        this._model = new Model(stg.data, stg.selectedRegion, stg.selectedProduct);
        // get latest data from network
        var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRVhwWiWkXp_dqlf8jOSEJlP5DFGTAFwqYJdOweZ4WGJlBsMrcFW_-48eZVCoXMHdNxqFv1CMQXGinq/pub?gid=351800917&single=true&output=csv';
        wijmo.httpRequest(url, {
            success: function (xhr) {
                _this._model.rawData = xhr.responseText;
                localStorage.data = xhr.responseText;
                _this.updateUI();
            }
        });
        // hook up navigation buttons
        document.body.addEventListener('click', function (e) {
            var target = e.target.getAttribute('data-target');
            if (target) {
                var card = document.getElementById(target);
                card.focus();
            }
        });
        // show/hide options card
        var optionsBtn = document.getElementById('btn-options'), options = document.getElementById('div-options');
        optionsBtn.addEventListener('click', function (e) {
            if (options.offsetHeight) {
                wijmo.hidePopup(options);
            }
            else {
                wijmo.showPopup(options, e.target, false, true, false);
                options.tabIndex = 0;
                options.focus();
            }
        });
        options.addEventListener('blur', function (e) {
            setTimeout(function () {
                var ae = document.activeElement;
                if (!wijmo.contains(options, ae) && !wijmo.contains(optionsBtn, ae)) {
                    wijmo.hidePopup(options);
                }
            });
        }, true);
        // populate the cards
        this.createCards();
    }
    // populate the cards with controls
    App.prototype.createCards = function () {
        var _this = this;
        var licenseKey = 'GrapeCity-Internal-Use-Only,392619583864964#B0xJ9b8ckUhh6YhxGTKRGMspEV8xGWzZzM8xGeKd7VyN5S4FkaFhzZ6FkVE3WVMNma5MmdqpVS03kR8lFZwYVNoJTezcTOHZ4UIlTaTZlZpxkUztmTr46SSB5NyQFRWd4Rt36b4cVUz86VP3WRPp7TEdFW036Q8hUNuZTZSxkM8MWcZtmaxB5UFR7MPZGdGdDRhRFZKlGUYB5NKZnRUhlcl3EeOBjZKhEdC54Y4cjNnxUMydlMy9GV5dldX3kbzcEZD5Gc7MmMkFTbQZzUWJTbIdEN5J7ZjhzRMJlTJNEcJFXaJllMN5UQiojITJCLiUUOxQ4N8AzMiojIIJCLzYjMxcTN6kzN0IicfJye35XX3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTis7W0ICZyBlIsIiNxMDNxADI5AjMwgTMwIjI0ICdyNkIsIyboxWa4NXYDBybkJXYuJXZCJiOiEmTDJCLiQjN9QjN8MDO5kTM6ITOzIiOiQWSiwSfiEjd8EDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnlDTIFlQSJXQGJ6NYF7VkdlQO3CSEhzZKpGV4EWRmp7UoZnVphWOrcVOlNmcVJ5RxdlYwcjSnBFUwY6KkZVMXZzNCF7MpljavY6UDNjVQ3SRwpmblNkRXlHcQF5b8Y5QM3mQwBzblxWb684KwhTY';
        wijmo.setLicenseKey(licenseKey);
        // selection card
        this._cmbRegion = new wijmo.input.ComboBox('#cmb-region', {
            itemsSource: this._model.regions,
            selectedIndexChanged: function (s, e) {
                _this._model.selectedRegion = s.selectedIndex > 0 ? s.text : null;
                _this.updateUI();
            }
        });
        this._cmbProduct = new wijmo.input.ComboBox('#cmb-product', {
            itemsSource: this._model.products,
            selectedIndexChanged: function (s, e) {
                _this._model.selectedProduct = s.selectedIndex > 0 ? s.text : null;
                _this.updateUI();
            }
        });
        // current period card
        this._rdgUnits = new wijmo.gauge.RadialGauge('#rdg-units', {
            value: 0,
            pointer: { thickness: .7 },
            hasShadow: false,
            showRanges: true,
            ranges: [{ min: 0, max: 0 }]
        });
        this._rdgRevenue = new wijmo.gauge.RadialGauge('#rdg-revenue', {
            value: 0,
            pointer: { thickness: .7 },
            hasShadow: false,
            format: 'g1,',
            showRanges: true,
            ranges: [{ min: 0, max: 0 }],
            getText: function (gauge, part, value, text) {
                return value > 0
                    ? '$' + text + 'k'
                    : text;
            }
        });
        // trend card
        var trendUnits = new TrendLine('units');
        this._chtUnits = new wijmo.chart.FlexChart('#cht-units', {
            itemsSource: this._model.groupedView,
            chartType: 'Scatter',
            bindingX: 'month',
            axisX: { format: 'MMM yyyy' },
            axisY: { format: 'n0' },
            tooltip: { content: '' },
            symbolSize: 5,
            series: [{ binding: 'units' }],
            rendered: function () {
                if (trendUnits.coefficients) {
                    var e = document.getElementById('trend-units'), up = trendUnits.coefficients.slope > 0;
                    e.className = up ? 'wj-glyph-up' : 'wj-glyph-down';
                }
            }
        });
        this._chtUnits.series.push(trendUnits);
        var trendRevenue = new TrendLine('revenue');
        this._chtRevenue = new wijmo.chart.FlexChart('#cht-revenue', {
            itemsSource: this._model.groupedView,
            chartType: 'Scatter',
            symbolSize: 5,
            axisX: { format: 'MMM yyyy' },
            axisY: { format: 'n0,' },
            tooltip: { content: '' },
            bindingX: 'month',
            series: [{ binding: 'revenue' }],
            rendered: function () {
                if (trendRevenue.coefficients) {
                    var e = document.getElementById('trend-revenue'), up = trendRevenue.coefficients.slope > 0;
                    e.className = up ? 'wj-glyph-up' : 'wj-glyph-down';
                }
            }
        });
        this._chtRevenue.series.push(trendRevenue);
        // details card
        var sparkBars = true;
        this._grdData = new wijmo.grid.FlexGrid('#grd-data', {
            isReadOnly: true,
            allowDragging: 'None',
            headersVisibility: 'Column',
            selectionMode: 'RowRange',
            autoGenerateColumns: false,
            columns: [
                { binding: 'month', header: 'Period', format: 'MMM yyyy', width: '*' },
                //{ binding: 'region', header: 'Region', width: '*' },
                //{ binding: 'product', header: 'Product', width: '*' },
                { binding: 'units', header: 'Unit Sales', width: '*' },
                { binding: 'revenue', header: 'Revenue (US$k)', format: 'n0', width: '*' }
            ],
            formatItem: function (s, e) {
                if (sparkBars && e.panel == s.cells) {
                    var col = s.columns[e.col];
                    if (col.dataType == wijmo.DataType.Number) {
                        var bar = document.createElement('div'), val = s.getCellData(e.row, e.col, false), max = s.collectionView.getAggregate(wijmo.Aggregate.Max, col.binding);
                        wijmo.addClass(bar, 'spark-bar ' + col.binding);
                        bar.style.width = (val / max * 100) + '%';
                        e.cell.appendChild(bar);
                    }
                }
            },
            itemsSource: this._model.groupedView.items
        });
        // toggle sparkbars on double-click
        this._grdData.hostElement.addEventListener('dblclick', function (e) {
            sparkBars = !sparkBars;
            _this._grdData.invalidate();
            e.preventDefault(); // cancel zoom
        }, true);
    };
    // update cards when selection changes
    App.prototype.updateUI = function () {
        var model = this._model;
        if (model.groupedView.items.length) {
            // update state
            var stg = localStorage;
            stg.selectedRegion = model.selectedRegion || '';
            stg.selectedProduct = model.selectedProduct || '';
            // update selection combos
            this._cmbRegion.text = model.selectedRegion;
            this._cmbProduct.text = model.selectedProduct;
            // update gauges
            var view = model.groupedView, lastItem = view.items[view.items.length - 1];
            document.getElementById('current-month').textContent =
                wijmo.Globalize.format(lastItem.month, 'MMMM yyyy');
            var prop = 'units', avg = view.getAggregate(wijmo.Aggregate.Avg, prop), std = view.getAggregate(wijmo.Aggregate.Std, prop), max = view.getAggregate(wijmo.Aggregate.Max, prop);
            this._rdgUnits.max = this.roundMax(max);
            wijmo.copy(this._rdgUnits.ranges[0], {
                min: avg - std / 2,
                max: avg + std / 2
            });
            this._rdgUnits.value = lastItem.units;
            prop = 'revenue';
            avg = view.getAggregate(wijmo.Aggregate.Avg, prop);
            std = view.getAggregate(wijmo.Aggregate.Std, prop);
            max = view.getAggregate(wijmo.Aggregate.Max, prop);
            this._rdgRevenue.max = this.roundMax(max);
            wijmo.copy(this._rdgRevenue.ranges[0], {
                min: avg - std / 2,
                max: avg + std / 2
            });
            this._rdgRevenue.value = lastItem.revenue;
            // bind grid to view items (so it can be sorted independently)
            this._grdData.itemsSource = view.items;
        }
    };
    // round up a number to be used as the max gauge value
    App.prototype.roundMax = function (n) {
        if (!n)
            return 0;
        var str = n.toFixed(0), len = str.length;
        n = parseInt(str.substr(0, 2)) + 1;
        str = n.toFixed(0);
        while (str.length < len) {
            str += '0';
        }
        return parseInt(str);
    };
    return App;
}());
/*
 * The Model class implements the application logic
 *
 * Inputs
 * - rawData: CSV string with data from the server
 * - selectedRegion: Name of the selected region, empty to select all regions
 * - selectedProduct: Name of the selected product, empty to select all products
 *
 * Outputs
 * - regions: CollectionView with all regions
 * - products: CollectionView with all products
 * - filteredView: CollectionView with consolidated and filtered data
 * - groupedView: CollectionView with consolidated/filtered/grouped data
 */
var Model = /** @class */ (function () {
    function Model(rawData, region, product) {
        var _this = this;
        this._rawData = '';
        this._region = '';
        this._product = '';
        this.regions = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();
        this.filteredView = new wijmo.collections.CollectionView();
        this.groupedView = new wijmo.collections.CollectionView();
        // filter data to show currently selected region and product
        this.filteredView.filter = function (item) {
            if (_this.selectedRegion && item.region != _this.selectedRegion) {
                return false;
            }
            if (_this.selectedProduct && item.product != _this.selectedProduct) {
                return false;
            }
            return true;
        };
        // apply ctor parameters
        this.selectedRegion = region;
        this.selectedProduct = product;
        this.rawData = rawData;
    }
    Object.defineProperty(Model.prototype, "rawData", {
        /**
         * Gets or sets the raw data as received from the server.
         */
        get: function () {
            return this._rawData;
        },
        set: function (value) {
            if (value != this.rawData) {
                this._rawData = value;
                this._parseData(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "selectedRegion", {
        /**
         * Gets or sets the region being analyzed.
         */
        get: function () {
            return this._region;
        },
        set: function (value) {
            if (value != this.selectedRegion) {
                this._region = value;
                this._updateView();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "selectedProduct", {
        /**
         * Gets or sets the product being analyzed.
         */
        get: function () {
            return this._product;
        },
        set: function (value) {
            if (value != this.selectedProduct) {
                this._product = value;
                this._updateView();
            }
        },
        enumerable: true,
        configurable: true
    });
    // implementation
    // parse CSV data from Google sheet
    Model.prototype._parseData = function (csv) {
        // sanity
        if (!csv) {
            return;
        }
        // parse the raw data
        var data = [], regionMap = {}, productMap = {}, lines = csv.split('\r\n');
        lines.forEach(function (line, index) {
            if (index) {
                var items = line.trim().split(',');
                // save sales data
                var item = {
                    month: wijmo.Globalize.parseDate(items[1], 'M/yyyy'),
                    region: items[3],
                    product: items[5],
                    units: parseInt(items[6]),
                    revenue: parseFloat(items[7])
                };
                data.push(item);
                // keep track of regions and products
                regionMap[item.region] = item.region;
                productMap[item.product] = item.product;
            }
        });
        // consolidate the data
        data = this._consolidate(data);
        // build arrays with regions and products
        var regions = ['(All Regions)'];
        for (var region in regionMap) {
            regions.push(region);
        }
        regions.sort();
        var products = ['(All Products)'];
        for (var product in productMap) {
            products.push(product);
        }
        products.sort();
        // all done
        this.regions.sourceCollection = regions;
        this.products.sourceCollection = products;
        this.filteredView.sourceCollection = data;
        this._updateView();
    };
    // clean up the data:
    // aggregate items with same month/product/region,
    // remove items with zero sales/revenue
    Model.prototype._consolidate = function (data) {
        var out = [], prev = null, view = new wijmo.collections.CollectionView(data, {
            sortDescriptions: 'month,region,product'.split(',')
        });
        for (var i = 0; i < view.items.length; i++) {
            var item = view.items[i];
            if (prev && item.region == prev.region && item.product == prev.product &&
                wijmo.DateTime.sameDate(item.month, prev.month)) {
                prev.units += item.units;
                prev.revenue += item.revenue;
            }
            else {
                out.push(item);
                prev = item;
            }
        }
        for (var i = 0; i < out.length; i++) {
            var item = out[i];
            if (!item.sales && !item.revenue) {
                out.splice(i, 1);
                i--;
            }
        }
        return out;
    };
    // update the grouped view
    Model.prototype._updateView = function () {
        this.filteredView.refresh();
        var data = [];
        for (var i = 0; i < this.filteredView.items.length; i++) {
            var item = this.filteredView.items[i];
            if (!this.selectedProduct || !this.selectedRegion) {
                item = this._merge(item, {
                    product: this.selectedProduct || this.products.items[0],
                    region: this.selectedRegion || this.regions.items[0],
                });
            }
            data.push(item);
        }
        this.groupedView.sourceCollection = this._consolidate(data);
    };
    // merge two objects into a new one
    Model.prototype._merge = function (o1, o2) {
        var o3 = {};
        for (var key in o1) {
            o3[key] = o1[key];
        }
        for (var key in o2) {
            o3[key] = o2[key];
        }
        return o3;
    };
    return Model;
}());
/**
 * Defines a simple linear regression series to be used with the FlexChart.
 *
 * This is smaller than the wijmo.analytics module.
 *
 * https://github.com/Microsoft/TypeScript/issues/17032
 */
var TrendLine = /** @class */ (function (_super) {
    __extends(TrendLine, _super);
    // constructor
    function TrendLine(binding, options) {
        var _this = _super.call(this) || this;
        _this._xvals = null;
        _this._yvals = null;
        _this._items = null;
        _this._coefficients = null;
        _this.binding = binding;
        _this.chartType = 'Line';
        if (options) {
            _this.initialize(options);
        }
        return _this;
    }
    Object.defineProperty(TrendLine.prototype, "coefficients", {
        // gets the regression coefficients
        get: function () {
            return this._coefficients;
        },
        enumerable: true,
        configurable: true
    });
    // override to get the values to render (just two points)
    TrendLine.prototype.getValues = function (dim) {
        var items = this.chart.collectionView ? this.chart.collectionView.items : null, length = items ? items.length : 0, binding = this.binding, bindingX = this.bindingX;
        if (length && binding && bindingX && items != this._items) {
            this._items = items;
            this._coefficients = this._getRegressionParameters();
            var parms = this._coefficients;
            this._xvals = [
                items[0][bindingX].valueOf(),
                items[length - 1][bindingX].valueOf()
            ];
            this._yvals = [
                parms.intercept + parms.slope * items[0][bindingX].valueOf(),
                parms.intercept + parms.slope * items[length - 1][bindingX].valueOf()
            ];
        }
        return dim == 0 ? this._yvals : this._xvals;
    };
    // calculate linear regression parameters
    TrendLine.prototype._getRegressionParameters = function () {
        // compute sums
        var data = this._items, n = 0, sum_x = 0, sum_y = 0, sum_xy = 0, sum_xx = 0, sum_yy = 0;
        for (var i = 0; i < data.length; i++) {
            var x = data[i][this.bindingX];
            var y = data[i][this.binding];
            if (x != null && y != null) {
                x = x.valueOf();
                y = y.valueOf();
                n++;
                sum_x += x;
                sum_y += y;
                sum_xy += (x * y);
                sum_xx += (x * x);
                sum_yy += (y * y);
            }
        }
        // compute regression parameters
        var slope = (n * sum_xy - sum_x * sum_y) /
            (n * sum_xx - sum_x * sum_x), intercept = (sum_y - slope * sum_x) /
            n, r = (n * sum_xy - sum_x * sum_y) /
            Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y));
        // return regression parameters
        return {
            slope: slope,
            intercept: intercept,
            r2: r * r
        };
    };
    return TrendLine;
}(wijmo.chart.Series));
//# sourceMappingURL=app.js.map