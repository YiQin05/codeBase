var wijmo;
(function (wijmo) {
    var grid;
    (function (grid) {
        'use strict';
        /**
         * Implements pagination on a @see:FlexGrid control by setting hiding
         * and showing rows using their height property.
         *
         * In most scenarios, pagination is done at the data-layer level, using
         * the grid's @see:FlexGrid.collectionView. But that does not take into
         * account grid-specific operations like expanding and collapsing row
         * groups, so pages with collapsed items appear shorter than the selected
         * page size.
         *
         * The @see:FlexGridPager class addresses this by allowing the grid to
         * load all rows as usual (without data-level pagination), and then
         * hiding rows that are not on the current page by setting their height
         * to zero. This way, when a group is collapsed, additional rows are
         * shown to fill the current page as needed.
         */
        var FlexGridPager = /** @class */ (function () {
            /**
             * Creates a new instance of the @see:FlexGridPager class.
             *
             * @param flex The @see:FlexGrid that will be controlled by this @see:FlexGridPager.
             * @param pageSize The number of rows to show on each page.
             */
            function FlexGridPager(flex, pageSize) {
                var _this = this;
                /**
                 * Occurs when the page state changes.
                 */
                this.stateChanged = new wijmo.Event();
                this._g = wijmo.asType(flex, grid.FlexGrid, false);
                this._pageSize = wijmo.asNumber(pageSize, false, true);
                this._pageIndex = 0;
                flex.loadedRows.addHandler(function (s, e) {
                    _this.invalidate();
                });
                flex.groupCollapsedChanged.addHandler(function (s, e) {
                    _this.refresh();
                });
                this.refresh();
                // refresh after collapse/expand on pivot grid
                if (flex instanceof wijmo.olap.PivotGrid) {
                    flex.hostElement.addEventListener('mousedown', function (e) {
                        var icon = wijmo.closest(e.target, '[wj-pivot-collapse]');
                        if (icon) {
                            _this.refresh();
                        }
                    });
                }
            }
            Object.defineProperty(FlexGridPager.prototype, "itemCount", {
                // ** object model
                /**
                 * Gets the number of rows currently in view.
                 */
                get: function () {
                    return this._lastRow - this._firstRow + 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGridPager.prototype, "pageCount", {
                /**
                 * Gets the total number of pages.
                 */
                get: function () {
                    return this._pageCount;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGridPager.prototype, "pageIndex", {
                /**
                 * Gets or sets the index of the current page.
                 */
                get: function () {
                    return this._pageIndex;
                },
                set: function (value) {
                    this.moveToPage(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGridPager.prototype, "pageSize", {
                /**
                 * Gets or sets the page size (number of rows to display on each page).
                 */
                get: function () {
                    return this._pageSize;
                },
                set: function (value) {
                    this._pageSize = wijmo.asNumber(value);
                    this.refresh();
                    this.moveToPage(this.pageIndex);
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Sets the first page as the current page.
             */
            FlexGridPager.prototype.moveToFirstPage = function () {
                return this.moveToPage(0);
            };
            /**
             * Sets the last page as the current page.
             */
            FlexGridPager.prototype.moveToLastPage = function () {
                return this.moveToPage(this._pageCount - 1);
            };
            /**
             * Sets the next page as the current page.
             */
            FlexGridPager.prototype.moveToNextPage = function () {
                return this.moveToPage(this.pageIndex + 1);
            };
            /**
             * Sets the previous page as the current page.
             */
            FlexGridPager.prototype.moveToPreviousPage = function () {
                return this.moveToPage(this.pageIndex - 1);
            };
            /**
             * Moves to the page at the specified index.
             */
            FlexGridPager.prototype.moveToPage = function (index) {
                index = wijmo.clamp(wijmo.asNumber(index), 0, this.pageCount - 1);
                if (index != this._pageIndex) {
                    this._pageIndex = index;
                    this.refresh();
                }
                return this._pageIndex == index;
            };
            /**
             * Schedules a call to the @see:refresh method.
             */
            FlexGridPager.prototype.invalidate = function () {
                var _this = this;
                if (this._toRefresh) {
                    clearTimeout(this._toRefresh);
                }
                this._toRefresh = setTimeout(function () {
                    _this._toRefresh = null;
                    _this.refresh();
                }, 10);
            };
            /**
             * Updates the state of the @see: FlexGridPager.
             */
            FlexGridPager.prototype.refresh = function () {
                var _this = this;
                var g = this._g;
                // count non-hidden rows
                var visRows = [];
                for (var i = 0; i < g.rows.length; i++) {
                    var r = g.rows[i];
                    if (r.visible && !r._getFlag(grid.RowColFlags.ParentCollapsed)) {
                        visRows.push(r);
                    }
                }
                // update page count, row indices
                this._pageCount = 1;
                this._firstRow = 0;
                this._lastRow = visRows.length ? visRows.length - 1 : 0;
                if (this._pageSize > 0 && visRows.length) {
                    // compute page count and index
                    this._pageCount = this._pageSize ? Math.ceil(visRows.length / this._pageSize) : 1;
                    this._pageIndex = Math.max(0, Math.min(this._pageCount, this._pageIndex));
                    // compute row range for current page
                    var start = Math.min(this._pageIndex * this._pageSize, visRows.length - 1);
                    this._firstRow = visRows[start].index;
                    this._lastRow = visRows[Math.min(start + this._pageSize, visRows.length) - 1].index;
                }
                // show/hide rows
                g.deferUpdate(function () {
                    for (var i = 0; i < g.rows.length; i++) {
                        g.rows[i].height = (i < _this._firstRow || i > _this._lastRow)
                            ? 0
                            : null;
                    }
                });
                // all done
                this.onStateChanged(wijmo.EventArgs.empty);
            };
            /**
             * Raises the @see:stateChanged event.
             */
            FlexGridPager.prototype.onStateChanged = function (e) {
                this.stateChanged.raise(this, e);
            };
            return FlexGridPager;
        }());
        grid.FlexGridPager = FlexGridPager;
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=FlexGridPager.js.map