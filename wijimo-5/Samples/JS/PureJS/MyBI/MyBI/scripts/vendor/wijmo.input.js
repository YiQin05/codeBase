/*
    *
    * Wijmo Library 5.20182.500
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
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
    var input;
    (function (input) {
        'use strict';
        // globalization info
        wijmo._addCultureInfo('DropDown', {
            ariaLabels: {
                tgl: 'Toggle Dropdown'
            }
        });
        /**
         * DropDown control (abstract).
         *
         * Contains an input element and a button used to show or hide the drop-down.
         *
         * Derived classes must override the _createDropDown method to create whatever
         * editor they want to show in the drop down area (a list of items, a calendar,
         * a color editor, etc).
         */
        var DropDown = /** @class */ (function (_super) {
            __extends(DropDown, _super);
            /**
             * Initializes a new instance of the @see:DropDown class.
             *
             * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
             * @param options The JavaScript object containing initialization data for the control.
             */
            function DropDown(element, options) {
                var _this = _super.call(this, element, null, true) || this;
                // property storage
                _this._showBtn = true;
                _this._autoExpand = true;
                _this._animate = false;
                /**
                 * Occurs when the value of the @see:text property changes.
                 */
                _this.textChanged = new wijmo.Event();
                /**
                 * Occurs before the drop down is shown or hidden.
                 */
                _this.isDroppedDownChanging = new wijmo.Event();
                /**
                 * Occurs after the drop down is shown or hidden.
                 */
                _this.isDroppedDownChanged = new wijmo.Event();
                // instantiate and apply template
                var tpl = _this.getTemplate();
                _this.applyTemplate('wj-control wj-content wj-dropdown', tpl, {
                    _tbx: 'input',
                    _btn: 'btn',
                    _dropDown: 'dropdown'
                }, 'input');
                // label button element
                var labels = wijmo.culture.DropDown.ariaLabels;
                wijmo.setAriaLabel(_this._btn.querySelector('button'), labels.tgl);
                // set reference element (used for positioning the drop-down)
                var tbx = _this._tbx;
                _this._elRef = tbx;
                // disable autocomplete/correct/capitalize
                // (important for mobile browsers including Chrome/ Android)
                // https://davidwalsh.name/disable-autocorrect
                wijmo.disableAutoComplete(tbx);
                // create drop-down element, update button display
                _this._createDropDown();
                _this._updateBtn();
                // remove drop-down from DOM (so IE/Edge can print properly)
                // NOTE: this causes some accessibility warnings
                wijmo.removeChild(_this._dropDown);
                // we start collapsed
                wijmo.addClass(_this.hostElement, 'wj-state-collapsed');
                // update focus state when the drop-down gets or loses focus
                var fs = _this._updateFocusState.bind(_this); // TFS 153367
                _this.addEventListener(_this.dropDown, 'blur', fs, true);
                _this.addEventListener(_this.dropDown, 'focus', fs);
                // keyboard events (the same handlers are used for the control and for the drop-down)
                var kd = _this._keydown.bind(_this);
                _this.addEventListener(_this.hostElement, 'keydown', kd);
                _this.addEventListener(_this.dropDown, 'keydown', kd);
                // prevent smiley that appears when the user presses alt-down
                _this.addEventListener(tbx, 'keypress', function (e) {
                    if (e.keyCode == 9787 && _this._altDown) {
                        e.preventDefault();
                    }
                });
                // textbox events
                _this.addEventListener(tbx, 'input', function () {
                    _this._setText(_this.text, false);
                });
                _this.addEventListener(tbx, 'click', function () {
                    if (_this._autoExpand) {
                        _this._expandSelection(); // expand the selection to the whole number/word that was clicked
                    }
                });
                // IE 9 does not fire an input event when the user removes characters from input 
                // filled by keyboard, cut, or drag operations.
                // https://developer.mozilla.org/en-US/docs/Web/Events/input
                // so subscribe to keyup and set the text just in case (TFS 111189)
                if (wijmo.isIE9()) {
                    _this.addEventListener(tbx, 'keyup', function () {
                        _this._setText(_this.text, false);
                    });
                }
                // toggle the drop-down on mousedown (used to be on click)
                _this.addEventListener(_this._btn, 'mousedown', function (e) {
                    if (!e.defaultPrevented && e.button == 0) {
                        setTimeout(function () {
                            _this._btnclick(e);
                        });
                    }
                });
                // stop propagation of click events on the drop-down element
                // they are not children of the hostElement, which can confuse Bootstrap popups
                _this.addEventListener(_this._dropDown, 'click', function (e) {
                    e.stopPropagation();
                });
                return _this;
            }
            Object.defineProperty(DropDown.prototype, "text", {
                //--------------------------------------------------------------------------
                //#region ** object model
                /**
                 * Gets or sets the text shown on the control.
                 */
                get: function () {
                    return this._tbx.value;
                },
                set: function (value) {
                    if (value != this.text) {
                        this._setText(value, true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "inputElement", {
                /**
                 * Gets the HTML input element hosted by the control.
                 *
                 * Use this property in situations where you want to customize the
                 * attributes of the input element.
                 */
                get: function () {
                    return this._tbx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "isReadOnly", {
                /**
                 * Gets or sets a value that indicates whether the user can modify
                 * the control value using the mouse and keyboard.
                 */
                get: function () {
                    return this._tbx.readOnly;
                },
                set: function (value) {
                    this._tbx.readOnly = wijmo.asBoolean(value);
                    wijmo.toggleClass(this.hostElement, 'wj-state-readonly', this.isReadOnly);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "isRequired", {
                /**
                 * Gets or sets a value that determines whether the control value must be set to
                 * a non-null value or whether it can be set to null
                 * (by deleting the content of the control).
                 */
                get: function () {
                    return this._tbx.required;
                },
                set: function (value) {
                    this._tbx.required = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "placeholder", {
                /**
                 * Gets or sets the string shown as a hint when the control is empty.
                 */
                get: function () {
                    return this._tbx.placeholder;
                },
                set: function (value) {
                    this._tbx.placeholder = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "isDroppedDown", {
                /**
                 * Gets or sets a value that indicates whether the drop down is currently visible.
                 */
                get: function () {
                    var dd = this._dropDown;
                    return dd && dd.style.display != 'none';
                },
                set: function (value) {
                    var _this = this;
                    value = wijmo.asBoolean(value) && !this.isDisabled && !this.isReadOnly;
                    if (value != this.isDroppedDown && this.onIsDroppedDownChanging(new wijmo.CancelEventArgs())) {
                        var host_1 = this.hostElement, dd_1 = this._dropDown, dds = dd_1.style;
                        if (value) {
                            // show drop-down
                            if (!dds.minWidth) {
                                dds.minWidth = host_1.getBoundingClientRect().width + 'px';
                            }
                            dds.display = 'block';
                            this._updateDropDown();
                            // work around Safari/IOS bug (TFS 321525)
                            // https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
                            this.addEventListener(document.body, 'touchstart', function (e) {
                                if (!wijmo.contains(host_1, e.target) && !wijmo.contains(dd_1, e.target)) {
                                    _this.isDroppedDown = false;
                                }
                            });
                        }
                        else {
                            // work around Safari/IOS bug (TFS 321525)
                            // https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
                            this.removeEventListener(document.body, 'touchstart');
                            // hide drop-down
                            var focus_1 = this.containsFocus();
                            wijmo.hidePopup(dd_1);
                            if (focus_1) {
                                if (!this.isTouching || !this.showDropDownButton) {
                                    this.selectAll();
                                }
                                else {
                                    this.hostElement.focus();
                                }
                            }
                        }
                        this._updateFocusState();
                        wijmo.toggleClass(host_1, 'wj-state-collapsed', !this.isDroppedDown);
                        this.onIsDroppedDownChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "dropDown", {
                /**
                 * Gets the drop down element shown when the @see:isDroppedDown
                 * property is set to true.
                 */
                get: function () {
                    return this._dropDown;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "dropDownCssClass", {
                /**
                 * Gets or sets a CSS class name to add to the control's drop-down element.
                 *
                 * This property is useful when styling the drop-down element, because it is
                 * shown as a child of the document body rather than as a child of the control
                 * itself, which prevents using CSS selectors based on the parent control.
                 */
                get: function () {
                    return this._cssClass;
                },
                set: function (value) {
                    if (value != this._cssClass) {
                        wijmo.removeClass(this._dropDown, this._cssClass);
                        this._cssClass = wijmo.asString(value);
                        wijmo.addClass(this._dropDown, this._cssClass);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "showDropDownButton", {
                /**
                 * Gets or sets a value that indicates whether the control should display a drop-down button.
                 */
                get: function () {
                    return this._showBtn;
                },
                set: function (value) {
                    this._showBtn = wijmo.asBoolean(value);
                    this._updateBtn();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "autoExpandSelection", {
                /**
                 * Gets or sets a value that indicates whether the control should automatically expand the
                 * selection to whole words/numbers when the control is clicked.
                 */
                get: function () {
                    return this._autoExpand;
                },
                set: function (value) {
                    this._autoExpand = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DropDown.prototype, "isAnimated", {
                /**
                 * Gets or sets a value that indicates whether the control should use a fade-in animation
                 * when displaying the drop-down.
                 */
                get: function () {
                    return this._animate;
                },
                set: function (value) {
                    this._animate = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Sets the focus to the control and selects all its content.
             */
            DropDown.prototype.selectAll = function () {
                if (this._elRef == this._tbx) {
                    wijmo.setSelectionRange(this._tbx, 0, this.text.length);
                }
                if (!this.containsFocus()) {
                    this.focus();
                }
            };
            /**
             * Raises the @see:textChanged event.
             */
            DropDown.prototype.onTextChanged = function (e) {
                this.textChanged.raise(this, e);
                this._updateState();
            };
            /**
             * Raises the @see:isDroppedDownChanging event.
             */
            DropDown.prototype.onIsDroppedDownChanging = function (e) {
                this.isDroppedDownChanging.raise(this, e);
                return !e.cancel;
            };
            /**
             * Raises the @see:isDroppedDownChanged event.
             */
            DropDown.prototype.onIsDroppedDownChanged = function (e) {
                this.isDroppedDownChanged.raise(this, e);
            };
            //#endregion
            //--------------------------------------------------------------------------
            //#region ** overrides
            // transfer focus from control to textbox
            // (but don't show the soft keyboard when the user touches the drop-down button)
            DropDown.prototype.onGotFocus = function (e) {
                if (!this.isTouching && !wijmo.contains(this._dropDown, wijmo.getActiveElement())) {
                    this.selectAll();
                }
                _super.prototype.onGotFocus.call(this, e);
            };
            // close the drop-down when losing focus
            DropDown.prototype.onLostFocus = function (e) {
                this._commitText();
                if (!this.containsFocus()) {
                    this.isDroppedDown = false;
                }
                _super.prototype.onLostFocus.call(this, e);
            };
            // check whether this control or its drop-down contain the focused element.
            // this is needed mostly for context menus, where the drop-down's owner
            // is not a child of the control (TFS 268503).
            DropDown.prototype.containsFocus = function () {
                return _super.prototype.containsFocus.call(this) ||
                    (this.isDroppedDown && wijmo.contains(this._dropDown, wijmo.getActiveElement()));
            };
            // close and dispose of drop-down when disposing the control
            DropDown.prototype.dispose = function () {
                this.isDroppedDown = false;
                var dd = this.dropDown;
                if (dd) {
                    var ctl = wijmo.Control.getControl(dd);
                    if (ctl) {
                        ctl.dispose();
                    }
                    wijmo.removeChild(dd);
                }
                _super.prototype.dispose.call(this);
            };
            // reposition dropdown when refreshing
            DropDown.prototype.refresh = function (fullUpdate) {
                if (fullUpdate === void 0) { fullUpdate = true; }
                _super.prototype.refresh.call(this, fullUpdate);
                // update popup/focus
                if (this.isDroppedDown) {
                    if (getComputedStyle(this.hostElement).display != 'none') {
                        var ae = wijmo.getActiveElement();
                        wijmo.showPopup(this._dropDown, this.hostElement, false, false, this.dropDownCssClass == null);
                        if (ae instanceof HTMLElement && ae != wijmo.getActiveElement()) {
                            ae.focus();
                        }
                    }
                }
            };
            // reposition dropdown when window size changes
            DropDown.prototype._handleResize = function () {
                if (this.isDroppedDown) {
                    this.refresh();
                }
            };
            //#endregion
            //--------------------------------------------------------------------------
            //#region ** implementation
            // expand the current selection to the entire number/string that was clicked
            DropDown.prototype._expandSelection = function () {
                var tbx = this._tbx, val = tbx.value, start = tbx.selectionStart, end = tbx.selectionEnd;
                if (val && start == end) {
                    var ct = this._getCharType(val, start);
                    if (ct > -1) {
                        for (; end < val.length; end++) {
                            if (this._getCharType(val, end) != ct) {
                                break;
                            }
                        }
                        for (; start > 0; start--) {
                            if (this._getCharType(val, start - 1) != ct) {
                                break;
                            }
                        }
                        if (start != end) {
                            wijmo.setSelectionRange(tbx, start, end);
                        }
                    }
                }
            };
            // get the type of character (digit, letter, other) at a given position
            DropDown.prototype._getCharType = function (text, pos) {
                var chr = text[pos];
                if (chr >= '0' && chr <= '9')
                    return 0;
                if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z'))
                    return 1;
                return -1;
            };
            // handle keyboard events
            DropDown.prototype._keydown = function (e) {
                // remember alt key for preventing smiley
                this._altDown = e.altKey;
                // ignore if default prevented
                if (e.defaultPrevented)
                    return;
                // handle key
                switch (e.keyCode) {
                    // close dropdown on tab, escape, enter
                    case wijmo.Key.Tab:
                    case wijmo.Key.Escape:
                    case wijmo.Key.Enter:
                        if (this.isDroppedDown) {
                            this.isDroppedDown = false;
                            if (e.keyCode != wijmo.Key.Tab && !this.containsFocus()) {
                                this.focus();
                            }
                            e.preventDefault();
                        }
                        break;
                    // toggle drop-down on F4, alt up/down
                    case wijmo.Key.F4:
                    case wijmo.Key.Up:
                    case wijmo.Key.Down:
                        if (e.keyCode == wijmo.Key.F4 || e.altKey) {
                            if (wijmo.contains(document.body, this.hostElement)) {
                                var dd = this.isDroppedDown;
                                this.isDroppedDown = !dd; // sets focus to input element (TFS 242752)
                                if (this.isDroppedDown == !dd) {
                                    e.preventDefault();
                                }
                            }
                        }
                        break;
                }
            };
            // handle clicks on the drop-down button
            DropDown.prototype._btnclick = function (e) {
                if (!e.defaultPrevented && e.button == 0) {
                    this.isDroppedDown = !this.isDroppedDown;
                }
            };
            // update text in textbox
            DropDown.prototype._setText = function (text, fullMatch) {
                // make sure we have a string
                if (text == null)
                    text = '';
                text = text.toString();
                // update element
                if (text != this._tbx.value) {
                    this._tbx.value = text;
                }
                // fire change event
                if (text != this._oldText) {
                    this._oldText = text;
                    this.onTextChanged();
                }
            };
            // update drop-down button visibility
            DropDown.prototype._updateBtn = function () {
                this._btn.style.display = this._showBtn ? '' : 'none';
            };
            // create the drop-down element
            DropDown.prototype._createDropDown = function () {
                // override in derived classes
            };
            // commit the text in the value element
            DropDown.prototype._commitText = function () {
                // override in derived classes
            };
            // update drop down content before showing it
            DropDown.prototype._updateDropDown = function () {
                if (this.isDroppedDown) {
                    this._commitText();
                    wijmo.showPopup(this._dropDown, this.hostElement, false, this._animate, this.dropDownCssClass == null);
                }
            };
            /**
             * Gets or sets the template used to instantiate @see:DropDown controls.
             */
            DropDown.controlTemplate = '<div class="wj-template">' +
                '<div class="wj-input">' +
                '<div class="wj-input-group wj-input-btn-visible">' +
                '<input wj-part="input" type="text" class="wj-form-control"/>' +
                '<span wj-part="btn" class="wj-input-group-btn">' +
                '<button class="wj-btn wj-btn-default" tabindex="-1">' +
                '<span class="wj-glyph-down"></span>' +
                '</button>' +
                '</span>' +
                '</div>' +
                '</div>' +
                '<div wj-part="dropdown" class="wj-content wj-dropdown-panel" style="display:none">' +
                '</div>' +
                '</div>';
            return DropDown;
        }(wijmo.Control));
        input.DropDown = DropDown;
    })(input = wijmo.input || (wijmo.input = {}));
})(wijmo || (wijmo = {}));
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
    var input;
    (function (input) {
        'use strict';
        /**
         * The @see:ListBox control displays a list of items which may contain
         * plain text or HTML, and allows users to select items with the mouse
         * or the keyboard.
         *
         * Use the @see:ListBox.selectedIndex property to determine which item
         * is currently selected.
         *
         * You can populate a @see:ListBox using an array of strings or you can
         * use an array of objects, in which case the @see:ListBox.displayMemberPath
         * property determines which object property is displayed on the list.
         *
         * To display items that contain HTML rather than plain text, set the
         * @see:ListBox.isContentHtml property to true.
         *
         * The @see:ListBox control supports the following keyboard commands:
         *
         * <table>
         *   <thead>
         *     <tr><th>Key Combination</th><th>Action</th></tr>
         *   </thead>
         *   <tbody>
         *     <tr><td>Up/Down</td><td>Select the previous/next item</td></tr>
         *     <tr><td>PageUp/Down</td><td>Select the item one page above or below the selection</td></tr>
         *     <tr><td>Home/End</td><td>Select the first/last items</td></tr>
         *     <tr><td>Space</td><td>Toggle the checkbox in the current item (see the @see:checkedMemberPath property)</td></tr>
         *     <tr><td>Other characters</td><td>Search for items that contain the text typed (multi-character auto-search)</td></tr>
         *   </tbody>
         * </table>
         *
         * The example below creates a @see:ListBox control and populates it using
         * a 'countries' array. The control updates its @see:ListBox.selectedIndex
         * and @see:ListBox.selectedItem properties as the user moves the selection.
         *
         * @fiddle:8HnLx
         */
        var ListBox = /** @class */ (function (_super) {
            __extends(ListBox, _super);
            /**
             * Initializes a new instance of the @see:ListBox class.
             *
             * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
             * @param options The JavaScript object containing initialization data for the control.
             */
            function ListBox(element, options) {
                var _this = _super.call(this, element) || this;
                _this._pathDisplay = new wijmo.Binding(null);
                _this._pathValue = new wijmo.Binding(null);
                _this._pathChecked = new wijmo.Binding(null);
                _this._html = false;
                _this._checkedItems = [];
                // work variables
                _this._itemRole = 'option';
                _this._search = '';
                _this._fmtItemHandlers = 0;
                // ** events
                /**
                 * Occurs when the value of the @see:selectedIndex property changes.
                 */
                _this.selectedIndexChanged = new wijmo.Event();
                /**
                 * Occurs when the list of items changes.
                 */
                _this.itemsChanged = new wijmo.Event();
                /**
                 * Occurs before the list items are generated.
                 */
                _this.loadingItems = new wijmo.Event();
                /**
                 * Occurs after the list items have been generated.
                 */
                _this.loadedItems = new wijmo.Event();
                /**
                 * Occurs when the current item is checked or unchecked by the user.
                 *
                 * This event is raised when the @see:checkedMemberPath is set to the name of a
                 * property to add CheckBoxes to each item in the control.
                 *
                 * Use the @see:selectedItem property to retrieve the item that was checked or
                 * unchecked.
                 */
                _this.itemChecked = new wijmo.Event();
                /**
                 * Occurs when the value of the @see:checkedItems property changes.
                 */
                _this.checkedItemsChanged = new wijmo.Event();
                /**
                 * Occurs when an element representing a list item has been created.
                 *
                 * This event can be used to format list items for display. It is similar
                 * in purpose to the @see:itemFormatter property, but has the advantage
                 * of allowing multiple independent handlers.
                 */
                _this.formatItem = new wijmo.Event();
                // instantiate and apply template
                _this.applyTemplate('wj-control wj-content wj-listbox', null, null);
                // accessibility: https://www.w3.org/TR/wai-aria-1.1/#listbox
                var host = _this.hostElement;
                wijmo.setAttribute(host, 'role', 'listbox', true);
                // initializing from <select> tag
                if (_this._orgTag == 'SELECT') {
                    _this._initFromSelect(_this.hostElement);
                }
                // handle mouse and keyboard
                _this.addEventListener(host, 'click', _this._click.bind(_this));
                _this.addEventListener(host, 'keydown', _this._keydown.bind(_this));
                _this.addEventListener(host, 'keypress', _this._keypress.bind(_this));
                // prevent wheel from propagating to parent elements
                _this.addEventListener(host, 'wheel', function (e) {
                    if (host.scrollHeight > host.offsetHeight) {
                        if ((e.deltaY < 0 && host.scrollTop == 0) ||
                            (e.deltaY > 0 && host.scrollTop + host.offsetHeight >= host.scrollHeight)) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                });
                // initialize control options
                _this.initialize(options);
                return _this;
            }
            Object.defineProperty(ListBox.prototype, "itemsSource", {
                //--------------------------------------------------------------------------
                //#region ** object model
                /**
                 * Gets or sets the array or @see:ICollectionView object that contains
                 * the list items.
                 */
                get: function () {
                    return this._items;
                },
                set: function (value) {
                    if (this._items != value) {
                        // unbind current collection view
                        if (this._cv) {
                            this._cv.currentChanged.removeHandler(this._cvCurrentChanged, this);
                            this._cv.collectionChanged.removeHandler(this._cvCollectionChanged, this);
                            this._cv = null;
                        }
                        // save new data source and collection view
                        this._items = value;
                        this._cv = wijmo.asCollectionView(value);
                        // bind new collection view
                        if (this._cv != null) {
                            this._cv.currentChanged.addHandler(this._cvCurrentChanged, this);
                            this._cv.collectionChanged.addHandler(this._cvCollectionChanged, this);
                        }
                        // update the list
                        this._populateList();
                        this.onItemsChanged();
                        this.onSelectedIndexChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "collectionView", {
                /**
                 * Gets the @see:ICollectionView object used as the item source.
                 */
                get: function () {
                    return this._cv;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "isContentHtml", {
                /**
                 * Gets or sets a value indicating whether items contain plain text or HTML.
                 */
                get: function () {
                    return this._html;
                },
                set: function (value) {
                    if (value != this._html) {
                        this._html = wijmo.asBoolean(value);
                        this._populateList();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "itemFormatter", {
                /**
                 * Gets or sets a function used to customize the values shown on
                 * the list.
                 * The function takes two arguments, the item index and the default
                 * text or html, and returns the new text or html to display.
                 *
                 * If the formatting function needs a scope (i.e. a meaningful
                 * 'this' value), then remember to set the filter using the 'bind'
                 * function to specify the 'this' object. For example:
                 *
                 * <pre>
                 *   listBox.itemFormatter = customItemFormatter.bind(this);
                 *   function customItemFormatter(index, content) {
                 *     if (this.makeItemBold(index)) {
                 *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
                 *     }
                 *     return content;
                 *   }
                 * </pre>
                 */
                get: function () {
                    return this._itemFormatter;
                },
                set: function (value) {
                    if (value != this._itemFormatter) {
                        this._itemFormatter = wijmo.asFunction(value);
                        this._populateList();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "displayMemberPath", {
                /**
                 * Gets or sets the name of the property to use as the visual
                 * representation of the items.
                 */
                get: function () {
                    return this._pathDisplay.path;
                },
                set: function (value) {
                    if (value != this.displayMemberPath) {
                        this._pathDisplay.path = wijmo.asString(value);
                        this._populateList();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "selectedValuePath", {
                /**
                 * Gets or sets the name of the property used to get the
                 * @see:selectedValue from the @see:selectedItem.
                 */
                get: function () {
                    return this._pathValue.path;
                },
                set: function (value) {
                    this._pathValue.path = wijmo.asString(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "checkedMemberPath", {
                /**
                 * Gets or sets the name of the property used to control the
                 * CheckBoxes  placed next to each item.
                 *
                 * Use this property to create multi-select LisBoxes.
                 * When an item is checked or unchecked, the control raises the
                 * @see:itemChecked event.
                 * Use the @see:selectedItem property to retrieve the item that
                 * was checked or unchecked, or use the @see:checkedItems property
                 * to retrieve the list of items that are currently checked.
                 */
                get: function () {
                    return this._pathChecked.path;
                },
                set: function (value) {
                    if (value != this.checkedMemberPath) {
                        this._pathChecked.path = wijmo.asString(value);
                        this._populateList();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "itemRole", {
                /**
                 * Gets or sets the value or the "role" attribute added to the
                 * list items. The default value for this property is "option".
                 */
                get: function () {
                    return this._itemRole;
                },
                set: function (value) {
                    if (value != this.itemRole) {
                        this._itemRole = wijmo.asString(value);
                        this._populateList();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Gets the string displayed for the item at a given index.
             *
             * The string may be plain text or HTML, depending on the setting
             * of the @see:isContentHtml property.
             *
             * @param index The index of the item.
             */
            ListBox.prototype.getDisplayValue = function (index) {
                // get the text or html
                var item = null;
                if (index > -1 && wijmo.hasItems(this._cv)) {
                    item = this._cv.items[index];
                    if (this.displayMemberPath) {
                        item = this._pathDisplay.getValue(item);
                    }
                }
                var text = item != null ? item.toString() : '';
                // allow caller to override/modify the text or html
                if (this.itemFormatter) {
                    text = this.itemFormatter(index, text);
                }
                // return the result
                return text;
            };
            /**
             * Gets the text displayed for the item at a given index (as plain text).
             *
             * @param index The index of the item.
             */
            ListBox.prototype.getDisplayText = function (index) {
                var children = this.hostElement.children, item = index > -1 && index < children.length
                    ? children[index]
                    : null;
                return item != null ? item.textContent : '';
            };
            /**
             * Gets a value that determines whether the item at a given index is enabled.
             *
             * @param index The index of the item.
             */
            ListBox.prototype.isItemEnabled = function (index) {
                // skip empty items
                if (!this.getDisplayText(index)) {
                    return false;
                }
                // skip disabled items
                var item = this.hostElement.children[index];
                if (!item ||
                    item.hasAttribute('disabled') ||
                    wijmo.hasClass(item, 'wj-state-disabled')) {
                    return false;
                }
                // seems OK
                return true;
            };
            Object.defineProperty(ListBox.prototype, "selectedIndex", {
                /**
                 * Gets or sets the index of the currently selected item.
                 */
                get: function () {
                    return this._cv ? this._cv.currentPosition : -1;
                },
                set: function (value) {
                    if (this._cv) {
                        this._cv.moveCurrentToPosition(wijmo.asNumber(value));
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "selectedItem", {
                /**
                 * Gets or sets the item that is currently selected.
                 */
                get: function () {
                    return this._cv ? this._cv.currentItem : null;
                },
                set: function (value) {
                    if (this._cv) {
                        this._cv.moveCurrentTo(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "selectedValue", {
                /**
                 * Gets or sets the value of the @see:selectedItem obtained using
                 * the @see:selectedValuePath.
                 */
                get: function () {
                    var item = this.selectedItem;
                    if (item && this.selectedValuePath) {
                        item = this._pathValue.getValue(item);
                    }
                    return item;
                },
                set: function (value) {
                    var path = this.selectedValuePath, index = -1;
                    if (this._cv) {
                        for (var i = 0; i < this._cv.items.length; i++) {
                            var item = this._cv.items[i], itemValue = path ? this._pathValue.getValue(item) : item;
                            if (itemValue === value || // not just '==': TFS 289009
                                wijmo.DateTime.equals(itemValue, value)) {
                                index = i;
                                break;
                            }
                        }
                        this.selectedIndex = index;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ListBox.prototype, "maxHeight", {
                /**
                 * Gets or sets the maximum height of the list.
                 */
                get: function () {
                    var host = this.hostElement;
                    return host ? parseFloat(host.style.maxHeight) : null;
                },
                set: function (value) {
                    var host = this.hostElement;
                    if (host) {
                        host.style.maxHeight = wijmo.asNumber(value) + 'px';
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Highlights the selected item and scrolls it into view.
             */
            ListBox.prototype.showSelection = function () {
                var index = this.selectedIndex, host = this.hostElement, children = host.children, e;
                // highlight
                for (var i = 0; i < children.length; i++) {
                    var selected = i == index;
                    e = children[i];
                    wijmo.toggleClass(e, 'wj-state-selected', selected);
                    e.tabIndex = selected ? this._orgTabIndex : -1;
                    wijmo.setAttribute(e, 'aria-selected', selected);
                }
                // scroll into view
                if (index > -1 && index < children.length) {
                    e = children[index];
                    var rco = e.getBoundingClientRect(), rcc = host.getBoundingClientRect();
                    if (rco.bottom > rcc.bottom) {
                        host.scrollTop += rco.bottom - rcc.bottom;
                    }
                    else if (rco.top < rcc.top) {
                        host.scrollTop -= rcc.top - rco.top;
                    }
                }
                // make sure the focus is within the selected element (TFS 135278)
                if (index > -1 && this.containsFocus()) {
                    e = children[index];
                    if (e instanceof HTMLElement && !wijmo.contains(e, wijmo.getActiveElement())) {
                        e.focus();
                    }
                }
                // update control's tabindex as well
                host.tabIndex = index < 0 ? this._orgTabIndex : -1;
            };
            /**
             * Loads the list with items from the current @see:itemsSource.
             */
            ListBox.prototype.loadList = function () {
                this._populateList();
            };
            /**
             * Gets the checked state of an item on the list.
             *
             * This method is applicable only on multi-select ListBoxes
             * (see the @see:checkedMemberPath property).
             *
             * @param index Item index.
             */
            ListBox.prototype.getItemChecked = function (index) {
                var item = this._cv.items[index];
                if (wijmo.isObject(item) && this.checkedMemberPath) {
                    return this._pathChecked.getValue(item);
                }
                var cb = this._getCheckbox(index);
                return cb ? cb.checked : false;
            };
            /**
             * Sets the checked state of an item on the list.
             *
             * This method is applicable only on multi-select ListBoxes
             * (see the @see:checkedMemberPath property).
             *
             * @param index Item index.
             * @param checked Item's new checked state.
             */
            ListBox.prototype.setItemChecked = function (index, checked) {
                this._setItemChecked(index, checked, true);
            };
            /**
             * Toggles the checked state of an item on the list.
             * This method is applicable only to multi-select ListBoxes
             * (see the @see:checkedMemberPath property).
             *
             * @param index Item index.
             */
            ListBox.prototype.toggleItemChecked = function (index) {
                this.setItemChecked(index, !this.getItemChecked(index));
            };
            Object.defineProperty(ListBox.prototype, "checkedItems", {
                /**
                 * Gets or sets an array containing the items that are currently checked.
                 */
                get: function () {
                    this._checkedItems.splice(0, this._checkedItems.length);
                    if (this._cv) {
                        for (var i = 0; i < this._cv.items.length; i++) {
                            if (this.getItemChecked(i)) {
                                this._checkedItems.push(this._cv.items[i]);
                            }
                        }
                    }
                    return this._checkedItems;
                },
                set: function (value) {
                    var cv = this._cv, host = this.hostElement, arr = wijmo.asArray(value, false);
                    if (cv && arr) {
                        var pos = cv.currentPosition, top_1 = host.scrollTop;
                        for (var i = 0; i < cv.items.length; i++) {
                            var item = cv.items[i];
                            this._setItemChecked(i, arr.indexOf(item) > -1, false);
                        }
                        cv.moveCurrentToPosition(pos);
                        host.scrollTop = top_1;
                        this.onCheckedItemsChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Raises the @see:selectedIndexChanged event.
             */
            ListBox.prototype.onSelectedIndexChanged = function (e) {
                this.selectedIndexChanged.raise(this, e);
            };
            /**
             * Raises the @see:itemsChanged event.
             */
            ListBox.prototype.onItemsChanged = function (e) {
                this.itemsChanged.raise(this, e);
            };
            /**
             * Raises the @see:loadingItems event.
             */
            ListBox.prototype.onLoadingItems = function (e) {
                this.loadingItems.raise(this, e);
            };
            /**
             * Raises the @see:loadedItems event.
             */
            ListBox.prototype.onLoadedItems = function (e) {
                this.loadedItems.raise(this, e);
            };
            /**
             * Raises the @see:itemChecked event.
             */
            ListBox.prototype.onItemChecked = function (e) {
                this.itemChecked.raise(this, e);
            };
            /**
             * Raises the @see:checkedItemsChanged event.
             */
            ListBox.prototype.onCheckedItemsChanged = function (e) {
                this.checkedItemsChanged.raise(this, e);
            };
            /**
             * Raises the @see:formatItem event.
             *
             * @param e @see:FormatItemEventArgs that contains the event data.
             */
            ListBox.prototype.onFormatItem = function (e) {
                this.formatItem.raise(this, e);
            };
            //#endregion
            //--------------------------------------------------------------------------
            //#region ** overrides
            /**
             * Refreshes the control.
             *
             * @param fullUpdate Whether to update the control layout as well as the content.
             */
            ListBox.prototype.refresh = function (fullUpdate) {
                if (fullUpdate === void 0) { fullUpdate = true; }
                _super.prototype.refresh.call(this, fullUpdate);
                // repopulate the list the user added formatItem handlers (TFS 330302, 330312)
                if (this.formatItem.handlerCount != this._fmtItemHandlers) {
                    if (this._e.offsetHeight || this._e.offsetWidth) {
                        this._fmtItemHandlers = this.formatItem.handlerCount;
                        this._populateList();
                    }
                }
            };
            //#endregion
            //--------------------------------------------------------------------------
            //#region ** implementation
            // sets the checked state of an item on the list
            ListBox.prototype._setItemChecked = function (index, checked, notify) {
                if (notify === void 0) { notify = true; }
                // update data item
                var item = this._cv.items[index];
                if (wijmo.isObject(item)) {
                    var ecv = wijmo.tryCast(this._cv, 'IEditableCollectionView');
                    if (this._pathChecked.getValue(item) != checked) {
                        this._checking = true;
                        if (ecv) {
                            ecv.editItem(item);
                            this._pathChecked.setValue(item, checked);
                            ecv.commitEdit();
                        }
                        else {
                            this._pathChecked.setValue(item, checked);
                            this._cv.refresh();
                        }
                        this._checking = false;
                    }
                }
                // update checkbox value and checked pseudo-class
                var cb = this._getCheckbox(index);
                if (cb) {
                    cb.checked = checked;
                    var e = wijmo.closest(cb, '.wj-listbox-item');
                    if (e) {
                        wijmo.toggleClass(e, 'wj-state-checked', checked);
                    }
                }
                // fire events
                if (notify) {
                    this.onItemChecked();
                    this.onCheckedItemsChanged();
                }
            };
            // handle changes to the data source
            ListBox.prototype._cvCollectionChanged = function (sender, e) {
                if (!this._checking) {
                    this._populateList();
                    this.onItemsChanged();
                }
            };
            ListBox.prototype._cvCurrentChanged = function (sender, e) {
                if (!this._checking) {
                    this.showSelection();
                    this.onSelectedIndexChanged();
                }
            };
            // populate the list from the current itemsSource
            ListBox.prototype._populateList = function () {
                // get ready to populate
                var host = this.hostElement;
                if (host) {
                    // remember if we have focus
                    var focus_1 = this.containsFocus();
                    // fire event so user can clean up any current items
                    this.onLoadingItems();
                    // empty list (faster/safer than setting HTML to empty string)
                    host.textContent = '';
                    // populate list
                    if (this._cv) {
                        // add items to document fragment
                        var frag = document.createDocumentFragment();
                        for (var i = 0; i < this._cv.items.length; i++) {
                            // get item text
                            var text = this.getDisplayValue(i);
                            if (this._html != true) {
                                text = wijmo.escapeHtml(text);
                            }
                            // add checkbox (with tabindex -1 for accessibility: TFS 135857?)
                            var isChecked = false;
                            if (this.checkedMemberPath) {
                                isChecked = this._pathChecked.getValue(this._cv.items[i]);
                                text = '<label><input tabindex="-1" type="checkbox"' +
                                    (isChecked ? ' checked' : '') + '> ' + text + '</label>';
                            }
                            // build item
                            var item = document.createElement('div'), clsName = 'wj-listbox-item';
                            item.innerHTML = text;
                            if (wijmo.hasClass(item.firstChild, 'wj-separator')) {
                                clsName += ' wj-separator';
                            }
                            if (isChecked) {
                                clsName += ' wj-state-checked';
                            }
                            item.className = clsName;
                            // set the item role, selected state
                            if (this.itemRole) {
                                wijmo.setAttribute(item, 'role', this.itemRole);
                            }
                            wijmo.setAttribute(item, 'aria-selected', false);
                            // allow custom formatting
                            if (this.formatItem.hasHandlers) {
                                var e = new FormatItemEventArgs(i, this._cv.items[i], item);
                                this.onFormatItem(e);
                            }
                            // add item to list
                            frag.appendChild(item);
                        }
                        // move elements to host all at once
                        host.appendChild(frag);
                    }
                    // make sure the list is not totally empty
                    // or min-height/max-height won't work properly in IE/Edge
                    if (host.children.length == 0) {
                        host.appendChild(document.createElement('div'));
                    }
                    // restore focus
                    if (focus_1 && !this.containsFocus()) {
                        this.focus();
                    }
                    // scroll selection into view
                    this.showSelection();
                    // fire event so user can hook up to items
                    this.onLoadedItems();
                }
            };
            // click to select elements
            ListBox.prototype._click = function (e) {
                if (e.button == 0 && !e.defaultPrevented) {
                    // select the item that was clicked
                    var children = this.hostElement.children;
                    for (var index_1 = 0; index_1 < children.length; index_1++) {
                        if (wijmo.contains(children[index_1], e.target)) {
                            this.selectedIndex = index_1;
                            break;
                        }
                    }
                    // handle checkboxes
                    var index = this.selectedIndex;
                    if (this.checkedMemberPath && index > -1) {
                        var cb = this._getCheckbox(index);
                        if (cb == e.target) {
                            var item = children[index];
                            item.focus(); // take focus from the checkbox (Firefox, TFS 135857)
                            this.setItemChecked(index, cb.checked);
                        }
                    }
                }
            };
            // handle keydown (cursor keys)
            ListBox.prototype._keydown = function (e) {
                var index = this.selectedIndex, host = this.hostElement, children = host.children;
                // honor defaultPrevented
                if (e.defaultPrevented)
                    return;
                // ctrl+A toggles checkboxes
                if (e.keyCode == 65 && (e.ctrlKey || e.metaKey)) {
                    if (this.checkedMemberPath && wijmo.hasItems(this.collectionView)) {
                        this.checkedItems = this.getItemChecked(0) ? [] : this.collectionView.items;
                        e.preventDefault();
                        return;
                    }
                }
                // not interested in other meta keys
                if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
                    return;
                // handle the event
                switch (e.keyCode) {
                    case wijmo.Key.Down:
                        e.preventDefault();
                        this._selectNext();
                        break;
                    case wijmo.Key.Up:
                        e.preventDefault();
                        this._selectPrev();
                        break;
                    case wijmo.Key.Home:
                        e.preventDefault();
                        this._selectFirst();
                        break;
                    case wijmo.Key.End:
                        e.preventDefault();
                        this._selectLast();
                        break;
                    case wijmo.Key.PageDown:
                        e.preventDefault();
                        this._selectNextPage();
                        break;
                    case wijmo.Key.PageUp:
                        e.preventDefault();
                        this._selectPrevPage();
                        break;
                    case wijmo.Key.Space:
                        if (this.checkedMemberPath && index > -1) {
                            var cb = this._getCheckbox(index);
                            if (cb && this.isItemEnabled(index)) {
                                this.setItemChecked(index, !cb.checked);
                                e.preventDefault();
                            }
                        }
                        break;
                }
            };
            // handle keypress (select/search)
            ListBox.prototype._keypress = function (e) {
                var _this = this;
                // honor defaultPrevented
                if (e.defaultPrevented)
                    return;
                // don't interfere with inner input elements (TFS 132081)
                if (e.target instanceof HTMLInputElement)
                    return;
                // auto search
                if (e.charCode > 32 || (e.charCode == 32 && this._search)) {
                    e.preventDefault();
                    // update search string
                    this._search += String.fromCharCode(e.charCode).toLowerCase();
                    //console.log('looking for ' + this._search);
                    if (this._toSearch) {
                        clearTimeout(this._toSearch);
                    }
                    this._toSearch = setTimeout(function () {
                        _this._toSearch = null;
                        _this._search = '';
                    }, wijmo.Control._SEARCH_DELAY);
                    // perform search
                    var index = this._findNext(); // multi-char search
                    if (index < 0 && this._search.length > 1) {
                        this._search = this._search[this._search.length - 1];
                        index = this._findNext(); // single-char search
                    }
                    if (index > -1) {
                        this.selectedIndex = index;
                    }
                }
            };
            // move the selection to the next enabled item
            ListBox.prototype._selectNext = function () {
                var len = this.hostElement.children.length;
                for (var i = this.selectedIndex + 1; i < len; i++) {
                    if (this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                }
                return false;
            };
            // move the selection to the previous enabled item
            ListBox.prototype._selectPrev = function () {
                for (var i = this.selectedIndex - 1; i >= 0; i--) {
                    if (this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                }
                return false;
            };
            // select the first enabled item
            ListBox.prototype._selectFirst = function () {
                var len = this.hostElement.children.length;
                for (var i = 0; i < len; i++) {
                    if (this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                }
                return false;
            };
            // select the last enabled item
            ListBox.prototype._selectLast = function () {
                var len = this.hostElement.children.length;
                for (var i = len - 1; i >= 0; i--) {
                    if (this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                }
                return false;
            };
            // select the first valid item in the next page
            ListBox.prototype._selectNextPage = function () {
                var host = this.hostElement, height = host.offsetHeight, children = host.children, offset = 0;
                for (var i = this.selectedIndex + 1; i < this._cv.items.length; i++) {
                    var itemHeight = children[i].scrollHeight;
                    if (offset + itemHeight > height && this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                    offset += itemHeight;
                }
                return this._selectLast();
            };
            // select the first valid item in the previous page
            ListBox.prototype._selectPrevPage = function () {
                var host = this.hostElement, height = host.offsetHeight, children = host.children, offset = 0;
                for (var i = this.selectedIndex - 1; i > 0; i--) {
                    var itemHeight = children[i].scrollHeight;
                    if (offset + itemHeight > height && this.isItemEnabled(i)) {
                        this.selectedIndex = i;
                        return true;
                    }
                    offset += itemHeight;
                }
                return this._selectFirst();
            };
            // look for the '_search' string from the current position
            ListBox.prototype._findNext = function () {
                if (this.hostElement) {
                    var cnt = this.hostElement.childElementCount, start = this.selectedIndex;
                    // start searching from current or next item
                    if (start < 0 || this._search.length == 1) {
                        start++;
                    }
                    // search through the items (with wrapping)
                    for (var off = 0; off < cnt; off++) {
                        var index = (start + off) % cnt, txt = this.getDisplayText(index).trim().toLowerCase();
                        if (txt.indexOf(this._search) == 0 && this.isItemEnabled(index)) {
                            //console.log('match at ' + index);
                            return index;
                        }
                    }
                }
                // not found
                return -1;
            };
            // gets the checkbox element in a given ListBox item
            ListBox.prototype._getCheckbox = function (index) {
                var host = this.hostElement;
                return (host && index > -1 && index < host.children.length)
                    ? host.children[index].querySelector('input[type=checkbox]')
                    : null;
            };
            // build collectionView from OPTION elements items in a SELECT element
            // this is used by the ComboBox
            ListBox.prototype._initFromSelect = function (hostElement) {
                var children = hostElement.children, items = [], selIndex = -1;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    if (child.tagName == 'OPTION') {
                        // keep track of selected item
                        if (child.hasAttribute('selected')) {
                            selIndex = items.length;
                        }
                        // add option to collectionView
                        if (child.innerHTML) {
                            items.push({
                                hdr: child.innerHTML,
                                val: child.getAttribute('value'),
                                cmdParam: child.getAttribute('cmd-param')
                            });
                        }
                        else {
                            items.push({
                                hdr: '<div class="wj-separator"/>'
                            });
                        }
                        // remove child from host
                        hostElement.removeChild(child);
                        i--;
                    }
                }
                // apply items to control
                if (items) {
                    this.displayMemberPath = 'hdr';
                    this.selectedValuePath = 'val';
                    this.itemsSource = items;
                    this.selectedIndex = selIndex;
                }
            };
            return ListBox;
        }(wijmo.Control));
        input.ListBox = ListBox;
        /**
         * Provides arguments for the @see:ListBox.formatItem event.
         */
        var FormatItemEventArgs = /** @class */ (function (_super) {
            __extends(FormatItemEventArgs, _super);
            /**
             * Initializes a new instance of the @see:FormatItemEventArgs class.
             *
             * @param index Index of the item being formatted.
             * @param data Data item being formatted.
             * @param item Element that represents the list item to be formatted.
             */
            function FormatItemEventArgs(index, data, item) {
                var _this = _super.call(this) || this;
                _this._index = wijmo.asNumber(index);
                _this._data = data;
                _this._item = wijmo.asType(item, HTMLElement);
                return _this;
            }
            Object.defineProperty(FormatItemEventArgs.prototype, "index", {
                /**
                 * Gets the index of the data item in the list.
                 */
                get: function () {
                    return this._index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FormatItemEventArgs.prototype, "data", {
                /**
                 * Gets the data item being formatted.
                 */
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FormatItemEventArgs.prototype, "item", {
                /**
                 * Gets a reference to the element that represents the list item to be formatted.
                 */
                get: function () {
                    return this._item;
                },
                enumerable: true,
                configurable: true
            });
            return FormatItemEventArgs;
        }(wijmo.EventArgs));
        input.FormatItemEventArgs = FormatItemEventArgs;
    })(input = wijmo.input || (wijmo.input = {}));
})(wijmo || (wijmo = {}));

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
    var input;
    (function (input) {
        'use strict';
        /**
         * The @see:ComboBox control allows users to pick strings from lists.
         *
         * The control automatically completes entries as the user types, and
         * allows users to show a drop-down list with the items available.
         *
         * Use the @see:ComboBox.itemsSource property to populate the list of
         * options.
         * The items may be strings or objects. If the items are objects, use
         * the @see:ComboBox.displayMemberPath to define which property of the
         * items will be displayed in the list and use the @see:ComboBox.selectedValuePath
         * property to define which property of the items will be used to set the
         * combo's @see:ComboBox.selectedValue property.
         *
         * Use the @see:ComboBox.selectedIndex or the @see:ComboBox.text properties
         * to determine which item is currently selected.
         *
         * The @see:ComboBox.isEditable property determines whether users can enter
         * values that are not present in the list.
         *
         * The example below creates a @see:ComboBox control and populates it with
         * a list of countries. The @see:ComboBox searches for the country as the
         * user types.
         * The @see:ComboBox.isEditable property is set to false, so the user must
         * select one of the items in the list.
         *
         * The example also shows how to create and populate a @see:ComboBox using
         * an HTML <b>&lt;select&gt;</b> element with <b>&lt;option&gt;</b> child
         * elements.
         *
         * @fiddle:8HnLx
         */
        var ComboBox = /** @class */ (function (_super) {
            __extends(ComboBox, _super);
            /**
             * Initializes a new instance of the @see:ComboBox class.
             *
             * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
             * @param options The JavaScript object containing initialization data for the control.
             */
            function ComboBox(element, options) {
                var _this = _super.call(this, element) || this;
                // property storage
                _this._editable = false;
                // private stuff
                _this._delKey = 0;
                _this._composing = false;
                _this._pathHdr = new wijmo.Binding(null);
                _this._bsCollapse = true;
                /**
                 * Occurs when the value of the @see:itemsSource property changes.
                 */
                _this.itemsSourceChanged = new wijmo.Event();
                /**
                 * Occurs when the value of the @see:selectedIndex property changes.
                 */
                _this.selectedIndexChanged = new wijmo.Event();
                // add wj-combobox class to host element
                var host = _this.hostElement;
                wijmo.addClass(host, 'wj-combobox');
                // give the drop-down a unique ID
                _this.dropDown.id = wijmo.getUniqueId(host.id + '_dropdown');
                // disable auto-expand by default
                _this.autoExpandSelection = false;
                // handle IME
                _this.addEventListener(_this._tbx, 'compositionstart', function () {
                    _this._composing = true;
                });
                _this.addEventListener(_this._tbx, 'compositionend', function () {
                    _this._composing = false;
                    setTimeout(function () {
                        _this._setText(_this.text, true);
                    });
                });
                // use wheel to scroll through the items
                _this.addEventListener(host, 'wheel', function (e) {
                    if (!e.defaultPrevented && !_this.isDroppedDown && !_this.isReadOnly && _this.containsFocus()) {
                        if (_this.selectedIndex > -1) {
                            var step = wijmo.clamp(-e.deltaY, -1, +1);
                            _this.selectedIndex = wijmo.clamp(_this.selectedIndex - step, 0, _this.collectionView.items.length - 1);
                            e.preventDefault();
                        }
                    }
                });
                // initializing from <select> tag
                if (_this._orgTag == 'SELECT') {
                    _this._lbx._initFromSelect(host);
                }
                // refresh text after CollectionView updates
                _this._lbx.loadedItems.addHandler(function (s) {
                    if (_this.selectedIndex > -1) {
                        _this.selectedIndex = _this._lbx.selectedIndex;
                    }
                });
                // initialize control options
                _this.isRequired = true;
                _this.initialize(options);
                return _this;
            }
            Object.defineProperty(ComboBox.prototype, "itemsSource", {
                //--------------------------------------------------------------------------
                //#region ** object model
                /**
                 * Gets or sets the array or @see:ICollectionView object that contains
                 * the items to select from.
                 */
                get: function () {
                    return this._lbx.itemsSource;
                },
                set: function (value) {
                    if (this._lbx.itemsSource != value) {
                        this._lbx.itemsSource = value;
                        this.onItemsSourceChanged();
                    }
                    this._updateBtn();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "collectionView", {
                /**
                 * Gets the @see:ICollectionView object used as the item source.
                 */
                get: function () {
                    return this._lbx.collectionView;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "displayMemberPath", {
                /**
                 * Gets or sets the name of the property to use as the visual
                 * representation of the items.
                 */
                get: function () {
                    return this._lbx.displayMemberPath;
                },
                set: function (value) {
                    this._lbx.displayMemberPath = value;
                    var text = this.getDisplayText();
                    if (this.text != text) {
                        this._setText(text, true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "headerPath", {
                /**
                 * Gets or sets the name of a property to use for getting the value
                 * displayed in the control's input element.
                 *
                 * The default value for this property is null, which causes the control
                 * to display the same content in the input element as in the selected
                 * item of the drop-down list.
                 *
                 * Use this property if you want to de-couple the value shown in the
                 * input element from the values shown in the drop-down list. For example,
                 * the input element could show an item's name and the drop-down list
                 * could show additional detail.
                 */
                get: function () {
                    return this._pathHdr.path;
                },
                set: function (value) {
                    this._pathHdr.path = wijmo.asString(value);
                    var text = this.getDisplayText();
                    if (this.text != text) {
                        this._setText(text, true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "selectedValuePath", {
                /**
                 * Gets or sets the name of the property used to get the
                 * @see:selectedValue from the @see:selectedItem.
                 */
                get: function () {
                    return this._lbx.selectedValuePath;
                },
                set: function (value) {
                    this._lbx.selectedValuePath = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "isContentHtml", {
                /**
                 * Gets or sets a value indicating whether the drop-down list displays
                 * items as plain text or as HTML.
                 */
                get: function () {
                    return this._lbx.isContentHtml;
                },
                set: function (value) {
                    if (value != this.isContentHtml) {
                        this._lbx.isContentHtml = wijmo.asBoolean(value);
                        var text = this.getDisplayText();
                        if (this.text != text) {
                            this._setText(text, true);
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "itemFormatter", {
                /**
                 * Gets or sets a function used to customize the values shown in
                 * the drop-down list.
                 * The function takes two arguments, the item index and the default
                 * text or html, and returns the new text or html to display.
                 *
                 * If the formatting function needs a scope (i.e. a meaningful 'this'
                 * value), then remember to set the filter using the 'bind' function
                 * to specify the 'this' object. For example:
                 *
                 * <pre>
                 *   comboBox.itemFormatter = customItemFormatter.bind(this);
                 *   function customItemFormatter(index, content) {
                 *     if (this.makeItemBold(index)) {
                 *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
                 *     }
                 *     return content;
                 *   }
                 * </pre>
                 */
                get: function () {
                    return this._lbx.itemFormatter;
                },
                set: function (value) {
                    this._lbx.itemFormatter = wijmo.asFunction(value); // update drop-down
                    this.selectedIndex = this._lbx.selectedIndex; // update control
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "formatItem", {
                /**
                 * Event that fires when items in the drop-down list are created.
                 *
                 * You can use this event to modify the HTML in the list items.
                 * For details, see the @see:ListBox.formatItem event.
                 */
                get: function () {
                    return this.listBox.formatItem;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "selectedIndex", {
                /**
                 * Gets or sets the index of the currently selected item in
                 * the drop-down list.
                 */
                get: function () {
                    return this._lbx.selectedIndex;
                },
                set: function (value) {
                    if (value != this.selectedIndex) {
                        this._lbx.selectedIndex = value;
                    }
                    value = this.selectedIndex; // TFS 214555
                    var text = this.getDisplayText(value);
                    if (this.text != text) {
                        this._setText(text, true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "selectedItem", {
                /**
                 * Gets or sets the item that is currently selected in
                 * the drop-down list.
                 */
                get: function () {
                    return this._lbx.selectedItem;
                },
                set: function (value) {
                    this._lbx.selectedItem = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "selectedValue", {
                /**
                 * Gets or sets the value of the @see:selectedItem, obtained
                 * using the @see:selectedValuePath.
                 */
                get: function () {
                    return this._lbx.selectedValue;
                },
                set: function (value) {
                    this._lbx.selectedValue = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "isEditable", {
                /**
                 * Gets or sets a value that determines whether the content of the
                 * input element should be restricted to items in the @see:itemsSource
                 * collection.
                 */
                get: function () {
                    return this._editable;
                },
                set: function (value) {
                    this._editable = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "maxDropDownHeight", {
                /**
                 * Gets or sets the maximum height of the drop-down list.
                 */
                get: function () {
                    return this._lbx.maxHeight;
                },
                set: function (value) {
                    this._lbx.maxHeight = wijmo.asNumber(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ComboBox.prototype, "maxDropDownWidth", {
                /**
                 * Gets or sets the maximum width of the drop-down list.
                 *
                 * The width of the drop-down list is also limited by the width of
                 * the control itself (that value represents the drop-down's
                 * minimum width).
                 */
                get: function () {
                    var lbx = this._dropDown;
                    return parseInt(lbx.style.maxWidth);
                },
                set: function (value) {
                    var lbx = this._dropDown;
                    lbx.style.maxWidth = wijmo.asNumber(value) + 'px';
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Gets the string displayed in the input element for the item at a
             * given index (always plain text).
             *
             * @param index The index of the item to retrieve the text for.
             */
            ComboBox.prototype.getDisplayText = function (index) {
                if (index === void 0) { index = this.selectedIndex; }
                // get display text directly from the headerPath if that was specified
                if (this.headerPath && index > -1 && wijmo.hasItems(this.collectionView)) {
                    var item = this.collectionView.items[index], text = item ? this._pathHdr.getValue(item) : null;
                    text = text != null ? text.toString() : '';
                    if (this.isContentHtml) {
                        if (!this._cvt) {
                            this._cvt = document.createElement('div');
                        }
                        this._cvt.innerHTML = text;
                        text = this._cvt.textContent;
                    }
                    return text.trim();
                }
                // headerPath not specified, get text straight from the ListBox
                return this._lbx.getDisplayText(index).trim();
            };
            /**
             * Gets the index of the first item that matches a given string.
             *
             * @param text The text to search for.
             * @param fullMatch Whether to look for a full match or just the start of the string.
             * @return The index of the item, or -1 if not found.
             */
            ComboBox.prototype.indexOf = function (text, fullMatch) {
                var cv = this.collectionView;
                if (wijmo.hasItems(cv) && text != null) {
                    // preserve the current selection if possible 
                    // http://wijmo.com/topic/wj-combo-box-bug/#post-76154
                    var index = this.selectedIndex;
                    if (fullMatch && text == this.getDisplayText(index)) {
                        return index;
                    }
                    // scan the list from the start
                    text = text.toString().toLowerCase();
                    for (var i = 0; i < cv.items.length; i++) {
                        if (this.listBox.isItemEnabled(i)) {
                            var t = this.getDisplayText(i).toLowerCase();
                            if (fullMatch) {
                                if (t == text) {
                                    return i;
                                }
                            }
                            else {
                                if (text && t.indexOf(text) == 0) {
                                    return i;
                                }
                            }
                        }
                    }
                }
                // not found
                return -1;
            };
            Object.defineProperty(ComboBox.prototype, "listBox", {
                /**
                 * Gets the @see:ListBox control shown in the drop-down.
                 */
                get: function () {
                    return this._lbx;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Raises the @see:itemsSourceChanged event.
             */
            ComboBox.prototype.onItemsSourceChanged = function (e) {
                this.itemsSourceChanged.raise(this, e);
            };
            /**
             * Raises the @see:selectedIndexChanged event.
             */
            ComboBox.prototype.onSelectedIndexChanged = function (e) {
                this._updateBtn();
                this.selectedIndexChanged.raise(this, e);
            };
            //#endregion ** object model
            //--------------------------------------------------------------------------
            //#region ** overrides
            // update the content when refreshing
            ComboBox.prototype.refresh = function (fullUpdate) {
                if (fullUpdate === void 0) { fullUpdate = true; }
                _super.prototype.refresh.call(this, fullUpdate);
                if (wijmo.hasItems(this.collectionView)) {
                    this._lbx.refresh();
                    if (this.selectedIndex > -1) {
                        this.selectedIndex = this._lbx.selectedIndex;
                    }
                }
            };
            // prevent empty values if editable and required
            ComboBox.prototype.onLostFocus = function (e) {
                // Safari does not finish composition on blur (TFS 236810)
                if (this._composing) {
                    this._composing = false;
                    this._setText(this.text, true);
                }
                // prevent empty values if editable and required (TFS 138025)
                if (this.isEditable && this.isRequired && !this.text) {
                    if (wijmo.hasItems(this.collectionView)) {
                        this.selectedIndex = 0;
                    }
                }
                // raise event as usual
                _super.prototype.onLostFocus.call(this, e);
            };
            // prevent dropping down with no items
            ComboBox.prototype.onIsDroppedDownChanging = function (e) {
                if (!this.isDroppedDown && !wijmo.hasItems(this.collectionView)) {
                    e.cancel = true;
                    return false; // TFS 252531
                }
                return _super.prototype.onIsDroppedDownChanging.call(this, e);
            };
            // show current selection when dropping down
            ComboBox.prototype.onIsDroppedDownChanged = function (e) {
                _super.prototype.onIsDroppedDownChanged.call(this, e);
                if (this.isDroppedDown) {
                    this._lbx.showSelection();
                    if (!this.isTouching) {
                        this.selectAll();
                    }
                }
                wijmo.setAttribute(this.dropDown, 'aria-expanded', this.isDroppedDown);
            };
            // update button visibility and state
            ComboBox.prototype._updateBtn = function () {
                var cv = this.collectionView, tbx = this._tbx, ddId = this.dropDown.id, hasList = wijmo.hasItems(cv);
                // allow base class
                _super.prototype._updateBtn.call(this);
                // show button if the 'showButton' property is true and we have an itemsSource
                this._btn.style.display = (this._showBtn && cv != null) ? '' : 'none';
                // enable the button if the itemsSource has more than one item
                wijmo.enable(this._btn, hasList);
                // update aria attributes to match drop-down state
                // accessibility: 
                // https://www.w3.org/TR/wai-aria-1.1/#combobox
                // http://oaa-accessibility.org/examples/role/77/
                wijmo.setAttribute(tbx, 'role', hasList ? 'combobox' : null);
                wijmo.setAttribute(tbx, 'aria-autocomplete', hasList ? 'both' : null);
                wijmo.setAttribute(tbx, 'aria-owns', (hasList && this.dropDown.parentElement) ? ddId : null);
                // http://www.heydonworks.com/article/aria-controls-is-poop
                //setAttribute(this._btn, 'aria-controls', hasList ? ddId : null);
                wijmo.setAttribute(this.dropDown, 'aria-expanded', hasList ? false : null);
            };
            // select all text (and focus on the input element) when user clicks the button
            ComboBox.prototype._btnclick = function (e) {
                _super.prototype._btnclick.call(this, e);
                if (!this.isTouching && this._elRef == this._tbx) {
                    this.selectAll();
                }
            };
            // create the drop-down element
            ComboBox.prototype._createDropDown = function () {
                var _this = this;
                // create the drop-down element
                if (!this._lbx) {
                    this._lbx = new input.ListBox(this._dropDown);
                }
                // limit the size of the drop-down
                this._lbx.maxHeight = 200;
                // update our selection when user picks an item from the ListBox
                // or when the selected index changes because the list changed
                this._lbx.selectedIndexChanged.addHandler(function () {
                    // update the drop-down button
                    _this._updateBtn();
                    // update the aria-activedescendant attribute
                    var index = _this._lbx.selectedIndex, children = _this._lbx.hostElement.children, id = index > -1 && index < children.length ? children[index].id : null;
                    wijmo.setAttribute(_this._tbx, 'aria-activedescendant', id && id.length ? id : null);
                    // update index and raise event
                    _this.selectedIndex = index;
                    _this.onSelectedIndexChanged();
                });
                // update button display when item list changes
                this._lbx.itemsChanged.addHandler(function () {
                    _this._updateBtn();
                });
                // close the drop-down when the user clicks to select an item
                this.addEventListener(this._dropDown, 'click', this._dropDownClick.bind(this));
            };
            //#endregion ** overrides
            //--------------------------------------------------------------------------
            //#region ** implementation
            // close the drop-down when the user clicks to select an item
            ComboBox.prototype._dropDownClick = function (e) {
                if (!e.defaultPrevented) {
                    if (e.target != this._dropDown) {
                        this.isDroppedDown = false;
                    }
                }
            };
            // update text in textbox
            ComboBox.prototype._setText = function (text, fullMatch) {
                // not while composing IME text...
                if (this._composing)
                    return;
                // prevent reentrant calls while moving CollectionView cursor
                if (this._settingText)
                    return;
                this._settingText = true;
                // make sure we have a string
                if (text == null)
                    text = '';
                text = text.toString();
                // get variables we need
                var index = this.selectedIndex, cv = this.collectionView, start = this._getSelStart(), len = -1, autoComplete = true;
                // handle cases where user presses delete on editable boxes
                if (this.isEditable) {
                    if (this._delKey || !this.containsFocus()) {
                        fullMatch = true;
                        autoComplete = false;
                    }
                }
                // search for the index
                index = this.indexOf(text, fullMatch);
                if (autoComplete) {
                    if (index < 0 && fullMatch) {
                        index = this.indexOf(text, false);
                    }
                    if (index < 0 && start > 0) {
                        index = this.indexOf(text.substr(0, start), false);
                    }
                }
                // not found and not editable? restore old text and move cursor to matching part
                if (index < 0 && !this.isEditable && wijmo.hasItems(cv)) {
                    if (this.isRequired || text) {
                        var oldText = this._oldText || ''; // TFS 233094
                        index = Math.max(0, this.indexOf(oldText, false));
                        for (var i = 0; i < text.length && i < oldText.length; i++) {
                            if (text[i] != oldText[i]) {
                                start = i;
                                break;
                            }
                        }
                    }
                }
                if (index > -1) {
                    len = start;
                    text = this.getDisplayText(index);
                }
                // update element
                if (text != this._tbx.value) {
                    this._tbx.value = text;
                }
                // update text selection
                if (len > -1 && this.containsFocus() && !this.isTouching) {
                    this._updateInputSelection(len);
                }
                // update collectionView
                if (cv) {
                    cv.moveCurrentToPosition(index);
                }
                // clear flags
                this._delKey = 0;
                this._settingText = false;
                // call base class to fire textChanged event
                _super.prototype._setText.call(this, text, fullMatch);
            };
            // skip to the next/previous item that starts with a given string
            ComboBox.prototype._findNext = function (text, step) {
                var selIndex = this.selectedIndex, view = this.collectionView, len = view ? view.items.length : 0, listBox = this.listBox;
                if (view && len && step) {
                    text = text.toLowerCase();
                    // no wrapping here. to enable wrapping, start with "(selIndex + step + len) % len"
                    // instead of "selIndex + step"
                    for (var index = selIndex + step; index > -1 && index < len; index += step) {
                        var itemText = this.getDisplayText(index).toLowerCase();
                        if (itemText && itemText.indexOf(text) == 0) {
                            var item = this.dropDown.children[index]; // REVIEW: what's this for?
                            if (!item || listBox.isItemEnabled(index)) {
                                return index;
                            }
                        }
                    }
                }
                return selIndex;
            };
            // override to select items with the keyboard
            ComboBox.prototype._keydown = function (e) {
                // allow base class
                _super.prototype._keydown.call(this, e);
                // done if default prevented or read-only
                if (e.defaultPrevented || this.isReadOnly) {
                    return;
                }
                // not if the alt key is pressed (TFS 273476/272449)
                if (e.altKey) {
                    return;
                }
                // not if we have no items
                if (!wijmo.hasItems(this.collectionView)) {
                    return;
                }
                // if the input element is not visible, we're done (e.g. menu)
                if (this._elRef != this._tbx) {
                    return;
                }
                // special handling for Back/Delete/Up/Down keys (TFS 153089, 200212, 279218)
                this._delKey = 0;
                var start = this._getSelStart();
                switch (e.keyCode) {
                    // remember Back/Delete for use later in _setText
                    case wijmo.Key.Back:
                        if (this._bsCollapse && !this.isEditable) {
                            var end = this._getSelEnd();
                            if (start > 0 && end == this._tbx.value.length && wijmo.hasItems(this.collectionView)) {
                                this._setSelRange(start - 1, end);
                            }
                        }
                        this._delKey = e.keyCode;
                        break;
                    case wijmo.Key.Delete:
                        this._delKey = e.keyCode;
                        break;
                    // move up/down the list
                    case wijmo.Key.Up:
                    case wijmo.Key.Down:
                        if (start == this.text.length) {
                            start = 0;
                        }
                        ;
                        this.selectedIndex = this._findNext(this.text.substr(0, start), e.keyCode == wijmo.Key.Up ? -1 : +1);
                        this._setSelRange(start, this.text.length);
                        e.preventDefault();
                        break;
                    case wijmo.Key.PageUp:
                        this._lbx._selectPrevPage();
                        e.preventDefault();
                        break;
                    case wijmo.Key.PageDown:
                        this._lbx._selectNextPage();
                        e.preventDefault();
                        break;
                }
            };
            // set selection range in input element (if it is visible)
            ComboBox.prototype._updateInputSelection = function (start) {
                if (this._elRef == this._tbx) {
                    this._setSelRange(start, this._tbx.value.length);
                }
            };
            // get selection start in an extra-safe way (TFS 82372)
            ComboBox.prototype._getSelStart = function () {
                return this._tbx && this._tbx.value
                    ? this._tbx.selectionStart
                    : 0;
            };
            // get selection end in an extra-safe way
            ComboBox.prototype._getSelEnd = function () {
                return this._tbx && this._tbx.value
                    ? this._tbx.selectionEnd
                    : 0;
            };
            // set selection range in an extra-safe way
            ComboBox.prototype._setSelRange = function (start, end) {
                var tbx = this._tbx;
                if (this._elRef == tbx) {
                    wijmo.setSelectionRange(tbx, start, end);
                }
            };
            return ComboBox;
        }(input.DropDown));
        input.ComboBox = ComboBox;
    })(input = wijmo.input || (wijmo.input = {}));
})(wijmo || (wijmo = {}));
