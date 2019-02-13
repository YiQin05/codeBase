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
var wijmo;
(function (wijmo) {
    var collections;
    (function (collections) {
        'use strict';
        /**
         * Base class for server-based CollectionView classes.
         */
        var SimpleServerCollectionView = /** @class */ (function (_super) {
            __extends(SimpleServerCollectionView, _super);
            /**
             * Initializes a new instance of the @see:ServerCollectionViewBase class.
             *
             * @param url Url of the data service (e.g. 'DataHandler.ashx').
             * @param options JavaScript object containing initialization data (property
             * values and event handlers) for the @see:SimpleServerCollectionView.
             */
            function SimpleServerCollectionView(url, options) {
                var _this = _super.call(this) || this;
                /**
                 * Occurs when the @see:SimpleServerCollectionView finishes loading data.
                 */
                _this.loaded = new wijmo.Event();
                /**
                 * Occurs when there is an error reading or writing data.
                 */
                _this.error = new wijmo.Event();
                _this._url = wijmo.asString(url, false);
                if (options) {
                    wijmo.copy(_this, options);
                }
                _this._getData();
                return _this;
            }
            // ** object model
            /**
             * Loads or re-loads the data from the server.
             */
            SimpleServerCollectionView.prototype.load = function () {
                this._getData();
            };
            /**
             * Raises the @see:loaded event.
             */
            SimpleServerCollectionView.prototype.onLoaded = function (e) {
                this.loaded.raise(this, e);
            };
            /**
             * Raises the @see:error event.
             *
             * @param e @see:RequestErrorEventArgs that contains information about the error.
             */
            SimpleServerCollectionView.prototype.onError = function (e) {
                this.error.raise(this, e);
                return !e.cancel;
            };
            // ** overrides
            /**
             * Override @see:commitNew to add the new item to the database.
             */
            SimpleServerCollectionView.prototype.commitNew = function () {
                var _this = this;
                // commit to database
                var item = this.currentAddItem;
                if (item) {
                    wijmo.httpRequest(this._getRequestUrl(), {
                        method: 'POST',
                        requestHeaders: {
                            'Accept': 'application/json' // to get new item back as JSON
                        },
                        data: item,
                        success: function (xhr) {
                            if (xhr.responseText) {
                                var newItem = _this._parseJSON(xhr.responseText);
                                for (var key in newItem) {
                                    item[key] = newItem[key];
                                }
                                _this._notifyItemChanged(item);
                            }
                        },
                        error: this._error.bind(this)
                    });
                }
                // allow base class
                _super.prototype.commitNew.call(this);
            };
            /**
             * Override @see:commitEdit to modify the item in the database.
             */
            SimpleServerCollectionView.prototype.commitEdit = function () {
                var _this = this;
                // commit to database
                var item = this.currentEditItem;
                if (item && !this.currentAddItem && !this._sameContent(item, this._edtClone)) {
                    if (this.items.indexOf(item) > -1) {
                        wijmo.httpRequest(this._getRequestUrl(this._edtClone), {
                            method: 'PUT',
                            requestHeaders: {
                                'Accept': 'application/json' // to get edited item back as JSON
                            },
                            data: item,
                            success: function (xhr) {
                                if (xhr.responseText) {
                                    var edtItem = _this._parseJSON(xhr.responseText);
                                    for (var key in edtItem) {
                                        item[key] = edtItem[key];
                                    }
                                    _this._notifyItemChanged(item);
                                }
                            },
                            error: this._error.bind(this)
                        });
                    }
                }
                // allow base class
                _super.prototype.commitEdit.call(this);
            };
            /**
             * Override @see:remove to remove the item from the database.
             *
             * @param item Item to be removed from the database.
             */
            SimpleServerCollectionView.prototype.remove = function (item) {
                var _this = this;
                // remove from database
                if (item && item != this.currentAddItem) {
                    if (this.items.indexOf(item) > -1) {
                        wijmo.httpRequest(this._getRequestUrl(item), {
                            method: 'DELETE',
                            success: function (xhr) {
                                _this._getData();
                            },
                            error: this._error.bind(this),
                        });
                    }
                }
                // allow base class
                _super.prototype.remove.call(this, item);
            };
            // ** implementation
            // get the data
            SimpleServerCollectionView.prototype._getData = function () {
                var _this = this;
                // go get the data
                wijmo.httpRequest(this._getRequestUrl(), {
                    data: {
                        ticks: Date.now() // discard buffer
                    },
                    success: function (xhr) {
                        var position = _this.currentPosition, response = _this._parseJSON(xhr.responseText);
                        _this.sourceCollection = response.value;
                        _this.refresh();
                        if (position > -1) {
                            _this.moveCurrentToPosition(position);
                        }
                        _this.onLoaded();
                    },
                    error: function (xhr) {
                        if (_this.onError(new wijmo.RequestErrorEventArgs(xhr))) {
                            throw 'HttpRequest Error: ' + xhr.status + ' ' + xhr.statusText;
                        }
                    }
                });
            };
            // get url for read and write requests (GET/POST/PUT/DELETE)
            SimpleServerCollectionView.prototype._getRequestUrl = function (item) {
                var url = this._url;
                if (url[url.length - 1] != '/') {
                    url += '/';
                }
                if (item) {
                    url += '(' + item.ID + ')';
                }
                return url;
            };
            // handle errors...
            SimpleServerCollectionView.prototype._error = function (xhr) {
                if (this.onError(new wijmo.RequestErrorEventArgs(xhr))) {
                    this._getData();
                    throw 'HttpRequest Error: ' + xhr.status + ' ' + xhr.statusText;
                }
            };
            // parse JSON including dates
            SimpleServerCollectionView.prototype._parseJSON = function (text) {
                return JSON.parse(text, function (key, value) {
                    if (typeof value === 'string') {
                        // parse dates saved as JSON-strings
                        var m = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/);
                        if (m) {
                            return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]));
                        }
                        // parse dates saved as OData-style strings
                        m = value.match(/^\/Date\((\d+)\)\/$/);
                        if (m) {
                            return new Date(parseInt(m[1]));
                        }
                    }
                    return value;
                });
            };
            return SimpleServerCollectionView;
        }(collections.CollectionView));
        collections.SimpleServerCollectionView = SimpleServerCollectionView;
    })(collections = wijmo.collections || (wijmo.collections = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=SimpleServerCollectionView.js.map