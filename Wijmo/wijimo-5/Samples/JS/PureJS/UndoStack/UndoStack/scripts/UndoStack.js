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
    var undo;
    (function (undo) {
        'use strict';
        /**
         * Class that provides undo/redo functionality for a input elements
         * and Wijmo controls.
         */
        var UndoStack = /** @class */ (function () {
            /**
             * Initializes a new instance of the @see:UndoStack class.
             *
             * @param targets List of input elements, forms, or controls to monitor.
             */
            function UndoStack() {
                var targets = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    targets[_i] = arguments[_i];
                }
                var _this = this;
                this._enabled = true;
                this._stack = [];
                this._maxActions = 1000;
                this._ptr = 0;
                // ** events
                /**
                 * Occurs when the state of the @see:UndoStack changes.
                 *
                 * Use this event to update UI elements that reflect the state of the
                 * @see:UndoStack. For example, to enable or disable undo/redo buttons.
                 */
                this.stateChanged = new wijmo.Event();
                // initialize input event dispatcher
                UndoStack._evtInput = document.createEvent('HTMLEvents');
                UndoStack._evtInput.initEvent('input', true, false);
                // add undo targets
                if (targets) {
                    targets.forEach(function (target) {
                        _this.addUndoTarget(target);
                    });
                }
            }
            /**
             * Adds an undo/redo target to the @see:UndoStack context.
             *
             * @param target Selector, element, or control to add to the @see:UndoStack context.
             */
            UndoStack.prototype.addUndoTarget = function (target) {
                // selectors
                if (wijmo.isString(target)) {
                    this.addUndoTarget(wijmo.getElement(target));
                    return;
                }
                // skip elements with 'wj-no-undo' attribute
                if (target instanceof HTMLElement && target.classList.contains('wj-no-undo')) {
                    return;
                }
                // input elements
                if (target instanceof HTMLInputElement) {
                    this._addInputElement(target);
                    return;
                }
                // textarea elements
                if (target instanceof HTMLTextAreaElement) {
                    this._addTextAreaElement(target);
                    return;
                }
                // select elements
                if (target instanceof HTMLSelectElement) {
                    this._addSelectElement(target);
                    return;
                }
                // Wijmo controls
                var ctl = wijmo.Control.getControl(target);
                if (ctl) {
                    if (ctl instanceof wijmo.grid.FlexGrid) {
                        this._addFlexGrid(ctl);
                        return;
                    }
                    else {
                        this._addWijmoControl(ctl);
                        return;
                    }
                }
                // elements hosting other elements and controls
                if (target instanceof HTMLElement && target.childElementCount) {
                    for (var i = 0; i < target.children.length; i++) {
                        this.addUndoTarget(target.children[i]);
                    }
                }
            };
            Object.defineProperty(UndoStack.prototype, "maxActions", {
                /**
                 * Gets or sets the maximum number of actions to store in the @see:UndoStack.
                 */
                get: function () {
                    return this._maxActions;
                },
                set: function (value) {
                    this._maxActions = wijmo.asNumber(value, false, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UndoStack.prototype, "actionCount", {
                /**
                 * Gets the number of actions currently stored in the @see:UndoStack.
                 */
                get: function () {
                    return this._stack.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UndoStack.prototype, "canUndo", {
                /**
                 * Gets a value that determines whether the @see:UndoStack is ready to undo an action.
                 */
                get: function () {
                    return this._ptr > 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UndoStack.prototype, "canRedo", {
                /**
                 * Gets a value that determines whether the @see:UndoStack is ready to redo an action.
                 */
                get: function () {
                    return this._ptr < this._stack.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Undoes the last action recorded.
             */
            UndoStack.prototype.undo = function () {
                if (this._ptr > 0) {
                    this._ptr--;
                    var action = this._stack[this._ptr];
                    this._enabled = false;
                    action.undo();
                    this._enabled = true;
                    this._pendingAction = null;
                    this.onStateChanged();
                }
            };
            /**
             * Redoes the last action undone.
             */
            UndoStack.prototype.redo = function () {
                if (this._ptr < this._stack.length) {
                    var action = this._stack[this._ptr];
                    this._ptr++;
                    this._enabled = false;
                    action.redo();
                    this._enabled = true;
                    this._pendingAction = null;
                    this.onStateChanged();
                }
            };
            /**
             * Clears the @see:UndoStack.
             */
            UndoStack.prototype.reset = function () {
                this._ptr = 0;
                this._stack.splice(0, this._stack.length);
                this._pendingAction = null;
                this.onStateChanged();
            };
            /**
             * Raises the @see:stateChanged event.
             */
            UndoStack.prototype.onStateChanged = function () {
                this.stateChanged.raise(this, wijmo.EventArgs.empty);
            };
            // ** implementation
            // get the label associated with an input element
            UndoStack._getLabel = function (e) {
                var lbl = e.parentElement;
                if (!(lbl instanceof HTMLLabelElement)) {
                    lbl = document.querySelector('label[for="' + e.id + '"');
                }
                return lbl;
            };
            // compare two states for equality
            UndoStack._sameState = function (state1, state2) {
                if (wijmo.isDate(state1) && wijmo.isDate(state2)) {
                    return wijmo.DateTime.equals(state1, state2);
                }
                if (wijmo.isArray(state1) && wijmo.isArray(state2)) {
                    if (state1.length != state2.length) {
                        return false;
                    }
                    for (var i = 0; i < state2.length; i++) {
                        if (!UndoStack._sameState(state1[i], state2[i])) {
                            return false;
                        }
                    }
                    return true;
                }
                return state1 == state2;
            };
            // open a new undoable action
            UndoStack.prototype._openAction = function (action) {
                // ignore if we have a pending action of same type/target
                var pa = this._pendingAction;
                if (pa &&
                    pa.target == action.target &&
                    pa.constructor == action.constructor) {
                    return;
                }
                // close pending action
                this._closePendingAction();
                // save new pending action
                this._pendingAction = action;
            };
            // close the current pending action
            UndoStack.prototype._closePendingAction = function () {
                this._pushAction(this._pendingAction);
                this._pendingAction = null;
            };
            // close the current action and push it onto the undo stack
            UndoStack.prototype._pushAction = function (action) {
                if (this._enabled &&
                    action &&
                    action.close()) {
                    // discard any actions after the pointer (redo list)
                    this._stack.splice(this._ptr, this._stack.length - this._ptr);
                    wijmo.assert(this._stack.length == this._ptr, 'should be at the end of the stack');
                    // accumulate with last action
                    if (this._stack.length) {
                        var lastAction = this._stack[this._ptr - 1];
                        if (lastAction.shouldAddAsChildAction(action)) {
                            lastAction.addChildAction(action);
                            this.onStateChanged();
                            return;
                        }
                    }
                    // push the current pending action
                    this._stack.push(action);
                    this._ptr++;
                    // limit stack size
                    var extra = this._stack.length - this._maxActions;
                    if (extra > 0) {
                        this._stack.splice(0, extra);
                        this._ptr -= extra;
                        wijmo.assert(this._ptr >= 0, 'pointer should not be negative');
                    }
                    // state has changed
                    this.onStateChanged();
                }
            };
            // add an HTML input element to the UndoStack context
            UndoStack.prototype._addInputElement = function (target) {
                var _this = this;
                if (target.type == 'checkbox') {
                    target.addEventListener('click', function (e) {
                        _this._closePendingAction();
                        _this._openAction(new CheckboxClickAction(target));
                        _this._closePendingAction();
                    });
                }
                else if (target.type == 'radio') {
                    // to make this work in IE, we have to handle mousedown
                    // on the element and on the label it refers to
                    target.addEventListener('mousedown', function (e) {
                        _this._openAction(new RadioClickAction(target));
                    }, true);
                    var lbl = UndoStack._getLabel(target);
                    if (lbl) {
                        lbl.addEventListener('mousedown', function (e) {
                            _this._openAction(new RadioClickAction(target));
                        }, true);
                    }
                    target.addEventListener('focus', function (e) {
                        _this._openAction(new RadioClickAction(target));
                    });
                    target.addEventListener('click', function (e) {
                        _this._closePendingAction();
                    });
                }
                else if (target.type == 'range') {
                    target.addEventListener('mousedown', function (e) {
                        _this._openAction(new RangeChangeAction(target));
                    }, true);
                    target.addEventListener('focus', function (e) {
                        _this._openAction(new RangeChangeAction(target));
                    }, true);
                    target.addEventListener('blur', function (e) {
                        _this._closePendingAction();
                    });
                }
                else {
                    target.addEventListener('focus', function (e) {
                        _this._openAction(new InputChangeAction(target));
                    }, true);
                    target.addEventListener('blur', function (e) {
                        _this._closePendingAction();
                    });
                }
            };
            // add an HTML textarea element to the UndoStack context
            UndoStack.prototype._addTextAreaElement = function (target) {
                var _this = this;
                target.addEventListener('focus', function (e) {
                    _this._openAction(new InputChangeAction(target));
                });
                target.addEventListener('blur', function (e) {
                    _this._closePendingAction();
                });
            };
            // add an HTML select element to the UndoStack context
            UndoStack.prototype._addSelectElement = function (target) {
                var _this = this;
                target.addEventListener('focus', function (e) {
                    _this._openAction(new InputChangeAction(target));
                });
                target.addEventListener('blur', function (e) {
                    _this._closePendingAction();
                });
            };
            // add a Wijmo input control to the UndoStack context
            UndoStack.prototype._addWijmoControl = function (ctl) {
                var _this = this;
                // skip read-only controls
                if (ctl['isReadOnly'])
                    return;
                // create action on focus, push on blur
                var host = ctl.hostElement;
                ctl.addEventListener(host, 'focus', function (e) {
                    _this._openAction(new WijmoControlChangeAction(ctl));
                }, true);
                ctl.addEventListener(host, 'mousedown', function (e) {
                    _this._openAction(new WijmoControlChangeAction(ctl));
                }, true);
                ctl.addEventListener(host, 'blur', function (e) {
                    if (!ctl.containsFocus()) {
                        _this._closePendingAction();
                    }
                }, true);
                // handle blur on dropDown element as well
                var dd = ctl['dropDown'];
                if (dd != null) {
                    ctl.addEventListener(dd, 'blur', function (e) {
                        if (!ctl.containsFocus()) {
                            _this._closePendingAction();
                        }
                    }, true);
                }
            };
            // add a FlexGrid control to the UndoStack context
            UndoStack.prototype._addFlexGrid = function (grid) {
                var _this = this;
                // don't add read-only grids
                if (grid.isReadOnly)
                    return;
                // edit/clear actions
                grid.cellEditEnding.addHandler(function (s, e) {
                    if (!e.cancel && !_this._atNewRowAtTop(s, e) &&
                        s.rows[e.row].dataItem != s.editableCollectionView.currentAddItem) {
                        _this._openAction(new GridEditAction(s, e));
                    }
                });
                grid.cellEditEnded.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // paste
                grid.pastingCell.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridEditAction(s, e));
                    }
                });
                grid.pastedCell.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // sort
                grid.sortingColumn.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridSortAction(s, e));
                    }
                });
                grid.sortedColumn.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // resize/autosize
                grid.resizingColumn.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridResizeAction(s, e));
                    }
                });
                grid.resizedColumn.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                grid.autoSizingColumn.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridResizeAction(s, e));
                    }
                });
                grid.autoSizedColumn.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // drag columns
                grid.draggingColumn.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridDragAction(s, e));
                    }
                });
                grid.draggedColumn.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // remove rows
                grid.deletingRow.addHandler(function (s, e) {
                    if (!e.cancel) {
                        _this._openAction(new GridDeleteRowAction(s, e));
                    }
                });
                grid.deletedRow.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                // add rows
                grid.rowEditEnding.addHandler(function (s, e) {
                    if (!e.cancel && !_this._atNewRowAtTop(s, e)) {
                        _this._openAction(new GridAddRowAction(s, e));
                    }
                });
                grid.rowEditEnded.addHandler(function (s, e) {
                    _this._closePendingAction();
                });
                grid.rowAdded.addHandler(function (s, e) {
                    if (!e.cancel && _this._atNewRowAtTop(s, e)) {
                        _this._openAction(new GridAddRowAction(s, e));
                        _this._closePendingAction();
                    }
                });
                // TODO
                // filter
            };
            UndoStack.prototype._atNewRowAtTop = function (s, e) {
                return s.newRowAtTop &&
                    s.allowAddNew &&
                    s.editableCollectionView &&
                    e.row == 0;
            };
            return UndoStack;
        }());
        undo.UndoStack = UndoStack;
        //////////////////////////////////////////////////////////////////////////////
        // UndoableAction
        //////////////////////////////////////////////////////////////////////////////
        /**
         * Abstract base class for undoable actions.
         */
        var UndoableAction = /** @class */ (function () {
            /**
             * Initializes a new instance of an @see:UndoableAction.
             *
             * @param target Object that the action applies to.
             */
            function UndoableAction(target) {
                this._target = target;
            }
            /**
             * Undoes the action.
             */
            UndoableAction.prototype.undo = function () {
                this.applyState(this._oldState);
                if (this._actions) {
                    this._actions.forEach(function (action) {
                        action.undo();
                    });
                }
            };
            /**
             * Redoes the action.
             */
            UndoableAction.prototype.redo = function () {
                this.applyState(this._newState);
                if (this._actions) {
                    this._actions.forEach(function (action) {
                        action.redo();
                    });
                }
            };
            /**
             * Closes the action by saving the new state.
             * Returns true if the new state is different from the old state.
             */
            UndoableAction.prototype.close = function () {
                return this._oldState != this._newState;
            };
            /**
             * Applies a given state to the target object.
             * @param state State to apply to the target object.
             */
            UndoableAction.prototype.applyState = function (state) {
            };
            /**
             * Gets a value that determines whether a given action should
             * be added as a child action or as a new independent action.
             *
             * @param action @see:UndoableAction to add to this action's
             * child action list.
             */
            UndoableAction.prototype.shouldAddAsChildAction = function (action) {
                return false;
            };
            /**
             * Adds a child action to this action's child list.
             *
             * @param action @see:UndoableAction to add to this action's
             * child action list.
             */
            UndoableAction.prototype.addChildAction = function (action) {
                if (!this._actions) {
                    this._actions = [];
                }
                this._actions.push(action);
            };
            Object.defineProperty(UndoableAction.prototype, "target", {
                /**
                 * Gets a reference to the action's target object.
                 */
                get: function () {
                    return this._target;
                },
                enumerable: true,
                configurable: true
            });
            return UndoableAction;
        }());
        undo.UndoableAction = UndoableAction;
        //////////////////////////////////////////////////////////////////////////////
        // HTMLActions
        //////////////////////////////////////////////////////////////////////////////
        /**
         * Class that represents an undoable HTML input change action.
         */
        var InputChangeAction = /** @class */ (function (_super) {
            __extends(InputChangeAction, _super);
            function InputChangeAction(target) {
                var _this = _super.call(this, target) || this;
                _this._oldState = _this._target.value;
                return _this;
            }
            InputChangeAction.prototype.close = function () {
                this._newState = this._target.value;
                return this._newState != this._oldState;
            };
            InputChangeAction.prototype.applyState = function (state) {
                var target = this._target;
                target.value = state;
                target.dispatchEvent(UndoStack._evtInput);
                if (wijmo.isFunction(target.select)) {
                    target.select();
                }
                else {
                    target.focus();
                }
            };
            return InputChangeAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable HTML checkbox change action.
         */
        var CheckboxClickAction = /** @class */ (function (_super) {
            __extends(CheckboxClickAction, _super);
            function CheckboxClickAction(target) {
                var _this = _super.call(this, target) || this;
                _this._newState = _this._target.checked;
                _this._oldState = !_this._newState;
                return _this;
            }
            CheckboxClickAction.prototype.close = function () {
                return true;
            };
            CheckboxClickAction.prototype.applyState = function (state) {
                this._target.checked = state;
                this._target.focus();
            };
            return CheckboxClickAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable HTML radio button change action.
         */
        var RadioClickAction = /** @class */ (function (_super) {
            __extends(RadioClickAction, _super);
            function RadioClickAction(target) {
                var _this = _super.call(this, target) || this;
                _this._oldState = _this._getState();
                return _this;
            }
            RadioClickAction.prototype.close = function () {
                this._newState = this._getState();
                return this._newState != this._oldState;
            };
            RadioClickAction.prototype.applyState = function (state) {
                if (state) {
                    state.checked = true;
                    state.focus();
                }
            };
            RadioClickAction.prototype._getState = function () {
                var sel = 'input[name="' + this._target.name + '"]:checked';
                return document.querySelector(sel);
            };
            return RadioClickAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable HTML range change action.
         */
        var RangeChangeAction = /** @class */ (function (_super) {
            __extends(RangeChangeAction, _super);
            function RangeChangeAction(target) {
                var _this = _super.call(this, target) || this;
                _this._oldState = _this._target.value;
                return _this;
            }
            RangeChangeAction.prototype.close = function () {
                this._newState = this._target.value;
                return this._newState != this._oldState;
            };
            RangeChangeAction.prototype.applyState = function (state) {
                var target = this._target;
                target.value = state;
                target.focus();
            };
            return RangeChangeAction;
        }(UndoableAction));
        //////////////////////////////////////////////////////////////////////////////
        // WijmoActions
        //////////////////////////////////////////////////////////////////////////////
        /**
         * Class that represents an undoable input control change action.
         */
        var WijmoControlChangeAction = /** @class */ (function (_super) {
            __extends(WijmoControlChangeAction, _super);
            function WijmoControlChangeAction(ctl) {
                var _this = _super.call(this, ctl) || this;
                _this._propName = WijmoControlChangeAction._getControlValueProperty(ctl);
                var value = _this._target[_this._propName];
                _this._oldState = wijmo.isArray(value) ? value.slice(0) :
                    wijmo.isDate(value) ? wijmo.DateTime.clone(value) : value;
                return _this;
            }
            WijmoControlChangeAction.prototype.close = function () {
                var value = this._target[this._propName];
                this._newState = wijmo.isArray(value) ? value.slice(0) :
                    wijmo.isDate(value) ? wijmo.DateTime.clone(value) : value;
                return !UndoStack._sameState(this._oldState, this._newState);
            };
            WijmoControlChangeAction.prototype.applyState = function (state) {
                this._target[this._propName] = state;
            };
            WijmoControlChangeAction._getControlValueProperty = function (ctl) {
                var props = 'checkedItems,selectedItems,value,text'.split(',');
                for (var i = 0; i < props.length; i++) {
                    if (props[i] in ctl) {
                        return props[i];
                    }
                }
                return null;
            };
            return WijmoControlChangeAction;
        }(UndoableAction));
        //////////////////////////////////////////////////////////////////////////////
        // FlexGridActions
        //////////////////////////////////////////////////////////////////////////////
        /**
         * Class that represents an undoable FlexGrid edit action.
         */
        var GridEditAction = /** @class */ (function (_super) {
            __extends(GridEditAction, _super);
            // create a new GridEdit action including the cell address and content
            function GridEditAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                _this._row = e.row;
                _this._col = e.col;
                _this._dataItem = grid.rows[e.row].dataItem;
                _this._oldState = grid.getCellData(e.row, e.col, false);
                return _this;
            }
            // close the action saving the new value
            GridEditAction.prototype.close = function () {
                this._timeStamp = Date.now();
                this._newState = this._target.getCellData(this._row, this._col, false);
                return this._newState != this._oldState;
            };
            // apply a saved cell value (state)
            GridEditAction.prototype.applyState = function (state) {
                // using row index
                var row = this._row;
                // make sure it's the same data item
                var grid = this._target, rows = grid.rows;
                if (this._dataItem && rows[row].dataItem != this._dataItem) {
                    row = -1;
                    for (var i = 0; i < rows.length; i++) {
                        if (rows[i].dataItem == this._dataItem) {
                            row = i;
                            break;
                        }
                    }
                }
                // apply the value
                if (row > -1) {
                    grid.setCellData(row, this._col, state);
                    grid.select(row, this._col);
                    grid.focus();
                }
            };
            // accumulate edits that happen in a quick succession 
            // (e.g. pasting or clearing several cells at once)
            GridEditAction.prototype.shouldAddAsChildAction = function (action) {
                if (action instanceof GridEditAction && action.target == this.target) {
                    console.log(action._timeStamp - this._timeStamp);
                    if (action._timeStamp - this._timeStamp < 100) {
                        return true;
                    }
                }
                return false;
            };
            return GridEditAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable FlexGrid sort action.
         */
        var GridSortAction = /** @class */ (function (_super) {
            __extends(GridSortAction, _super);
            function GridSortAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                var view = _this._target.collectionView;
                if (view) {
                    _this._oldState = view.sortDescriptions.slice(0);
                }
                return _this;
            }
            GridSortAction.prototype.close = function () {
                var view = this._target.collectionView;
                if (view) {
                    this._newState = view.sortDescriptions.slice(0);
                    return true;
                }
                return false;
            };
            GridSortAction.prototype.applyState = function (state) {
                var view = this._target.collectionView;
                if (view) {
                    view.deferUpdate(function () {
                        var sd = view.sortDescriptions;
                        sd.clear();
                        state.forEach(function (sortDesc) {
                            sd.push(sortDesc);
                        });
                    });
                }
            };
            return GridSortAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable FlexGrid column resize action.
         */
        var GridResizeAction = /** @class */ (function (_super) {
            __extends(GridResizeAction, _super);
            function GridResizeAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                _this._col = grid.columns[e.col];
                _this._oldState = _this._col.renderWidth;
                return _this;
            }
            ;
            GridResizeAction.prototype.close = function () {
                this._newState = this._col.renderWidth;
                return this._newState != this._oldState;
            };
            GridResizeAction.prototype.applyState = function (state) {
                this._col.width = state;
            };
            return GridResizeAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable FlexGrid column drag action.
         */
        var GridDragAction = /** @class */ (function (_super) {
            __extends(GridDragAction, _super);
            function GridDragAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                _this._col = grid.columns[e.col];
                _this._oldState = grid.columns.indexOf(_this._col);
                return _this;
            }
            GridDragAction.prototype.close = function () {
                this._newState = this._col.grid.columns.indexOf(this._col);
                return this._newState != this._oldState;
            };
            GridDragAction.prototype.applyState = function (state) {
                var _this = this;
                var cols = this._col.grid.columns;
                cols.deferUpdate(function () {
                    cols.remove(_this._col);
                    cols.insert(state, _this._col);
                });
            };
            return GridDragAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable FlexGrid row removal action.
         */
        var GridDeleteRowAction = /** @class */ (function (_super) {
            __extends(GridDeleteRowAction, _super);
            function GridDeleteRowAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                var view = grid.collectionView, arr = view ? view.sourceCollection : null;
                _this._item = grid.rows[e.row].dataItem;
                _this._oldState = arr ? arr.indexOf(_this._item) : -1;
                return _this;
            }
            GridDeleteRowAction.prototype.close = function () {
                this._newState = -1;
                return this._oldState > -1;
            };
            GridDeleteRowAction.prototype.applyState = function (state) {
                var view = this._target.collectionView, arr = view ? view.sourceCollection : null;
                if (arr) {
                    if (state > -1) {
                        wijmo.assert(arr.indexOf(this._item) < 0, 'item should not be in the collection');
                        arr.splice(state, 0, this._item);
                    }
                    else {
                        wijmo.assert(arr.indexOf(this._item) > -1, 'item should be in the collection');
                        arr.splice(this._oldState, 1);
                    }
                    view.refresh();
                    if (state > -1) {
                        view.moveCurrentTo(this._item);
                    }
                }
            };
            return GridDeleteRowAction;
        }(UndoableAction));
        /**
         * Class that represents an undoable FlexGrid row addition action.
         */
        var GridAddRowAction = /** @class */ (function (_super) {
            __extends(GridAddRowAction, _super);
            function GridAddRowAction(grid, e) {
                var _this = _super.call(this, grid) || this;
                var view = grid.editableCollectionView;
                _this._oldState = null;
                _this._newState = view ? view.currentAddItem : null;
                return _this;
            }
            GridAddRowAction.prototype.close = function () {
                return this._newState;
            };
            GridAddRowAction.prototype.applyState = function (state) {
                var view = this._target.collectionView, arr = view ? view.sourceCollection : null, index = arr ? arr.indexOf(this._newState) : -1;
                if (arr) {
                    if (state == null) {
                        wijmo.assert(index > -1, 'new item should be in the collection');
                        arr.splice(index, 1);
                    }
                    else {
                        wijmo.assert(index < 0, 'new item should not be in the collection');
                        arr.push(state);
                    }
                }
                view.refresh();
                if (state) {
                    view.moveCurrentTo(state);
                }
            };
            return GridAddRowAction;
        }(UndoableAction));
    })(undo = wijmo.undo || (wijmo.undo = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=UndoStack.js.map