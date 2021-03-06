import * as wjcCore from 'wijmo/wijmo';
import * as wjcXlsx from 'wijmo/wijmo.xlsx';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridFilter from 'wijmo/wijmo.grid.filter';
export declare class _CalcEngine {
    private _owner;
    private _expression;
    private _expressLength;
    private _pointer;
    private _expressionCache;
    private _tokenTable;
    private _token;
    private _idChars;
    private _functionTable;
    private _cacheSize;
    private _tableRefStart;
    private _rowIndex;
    private _columnIndex;
    private _containsCellRef;
    private _sheet;
    constructor(owner: FlexSheet);
    unknownFunction: wjcCore.Event;
    onUnknownFunction(funcName: string, params: Array<_Expression>): _Expression;
    evaluate(expression: string, format?: string, sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
    addCustomFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
    addFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
    _clearExpressionCache(): void;
    _parse(expression: string): _Expression;
    private _buildSymbolTable();
    private _registerAggregateFunction();
    private _registerMathFunction();
    private _registerLogicalFunction();
    private _registerTextFunction();
    private _registerDateFunction();
    private _registLookUpReferenceFunction();
    private _registFinacialFunction();
    private _registAddressRelatedFunction();
    private _addToken(symbol, id, type);
    private _parseExpression();
    private _parseCompareOrConcat();
    private _parseAddSub();
    private _parseMulDiv();
    private _parsePower();
    private _parseUnary();
    private _parseAtom();
    private _getToken();
    private _getTableToken();
    private _parseDigit();
    private _parseString();
    private _parseDate();
    private _parseSheetRef();
    private _getCellRange(identifier);
    private _parseCellRange(cell);
    private _parseCell(cell);
    private _getParameters();
    private _getTableReference(table, sheetRef, needTableName?);
    private _getTableParameter();
    private _getTableRange(table, tableRefs);
    private _getAggregateResult(aggType, params, sheet?);
    private _getFlexSheetAggregateResult(aggType, params, sheet?);
    private _getItemList(params, sheet?, needParseToNum?, isGetEmptyValue?, isGetHiddenValue?, columnIndex?);
    private _countBlankCells(items);
    private _countNumberCells(items);
    private _getRankOfCellRange(num, items, order?);
    private _handleCountIfs(params, sheet?);
    private _countCellsByCriterias(itemsList, criterias, sheet?, countItems?);
    private _handleSumIfs(params, sheet?);
    private _sumCellsByCriterias(itemsList, criterias, sumItems?, sheet?);
    private _getProductOfNumbers(items);
    private _handleSubtotal(params, sheet);
    private _handleDCount(params, sheet);
    private _DCountWithCriterias(countItems, countRef, criteriaRef);
    private _getColumnIndexByField(cellExpr, field);
    private _getSumProduct(params, sheet);
    private _getItemListForSumProduct(params, sheet);
    private _getSheet(sheetRef);
    private _parseRightExpr(rightExpr);
    private _combineExpr(leftExpr, rightExpr);
    private _parseRegCriteria(criteria);
    private _calculateRate(params, sheet?);
    private _handleHLookup(params, sheet?);
    private _exactMatch(lookupValue, cells, sheet?, needHandleWildCard?);
    private _approximateMatch(lookupValue, cells, sheet?);
    private _parseToScientificValue(value, intCoefficientFmt, decimalCoefficientFmt, intExponentFmt, decimalExponentFmt);
    _checkCache(expression: string, sheetIndex?: number, rowIndex?: number, columnIndex?: number): _Expression;
    private _ensureNonFunctionExpression(expr, sheet?);
    private _getDefinedName(name, sheetName);
    private _numAlpha(i);
}
export declare class _Token {
    private _tokenType;
    private _tokenID;
    private _value;
    constructor(val: any, tkID: _TokenID, tkType: _TokenType);
    readonly value: any;
    readonly tokenID: _TokenID;
    readonly tokenType: _TokenType;
}
export declare class _FunctionDefinition {
    private _paramMax;
    private _paramMin;
    private _func;
    constructor(func: Function, paramMax?: number, paramMin?: number);
    readonly paramMax: number;
    readonly paramMin: number;
    readonly func: Function;
}
export declare enum _TokenType {
    COMPARE = 0,
    ADDSUB = 1,
    MULDIV = 2,
    POWER = 3,
    CONCAT = 4,
    GROUP = 5,
    LITERAL = 6,
    IDENTIFIER = 7,
    SQUAREBRACKETS = 8,
}
export declare enum _TokenID {
    GT = 0,
    LT = 1,
    GE = 2,
    LE = 3,
    EQ = 4,
    NE = 5,
    ADD = 6,
    SUB = 7,
    MUL = 8,
    DIV = 9,
    DIVINT = 10,
    MOD = 11,
    POWER = 12,
    CONCAT = 13,
    OPEN = 14,
    CLOSE = 15,
    END = 16,
    COMMA = 17,
    PERIOD = 18,
    ATOM = 19,
}
export declare class _Expression {
    private _token;
    _evaluatedValue: any;
    constructor(arg?: any);
    readonly token: _Token;
    evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    static toString(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): string;
    static toNumber(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): number;
    static toBoolean(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    static toDate(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    static isDateValue(val: any): boolean;
    _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): boolean;
    _moveCellRangeExp(sheetIndex: number, srcRange: wjcGrid.CellRange, dstRange: wjcGrid.CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
    _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
    _updateCellBoundary(row: number, col: number): boolean;
    _getStringExpression(): string;
}
export declare class _UnaryExpression extends _Expression {
    private _expr;
    constructor(arg: any, expr: _Expression);
    evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): boolean;
    _moveCellRangeExp(sheetIndex: number, srcRange: wjcGrid.CellRange, dstRange: wjcGrid.CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
    _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
    _getStringExpression(): string;
}
export declare class _BinaryExpression extends _Expression {
    private _leftExpr;
    private _rightExpr;
    constructor(arg: any, leftExpr: _Expression, rightExpr: _Expression);
    evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): boolean;
    _moveCellRangeExp(sheetIndex: number, srcRange: wjcGrid.CellRange, dstRange: wjcGrid.CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
    _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
    _getStringExpression(): string;
}
export declare class _CellRangeExpression extends _Expression {
    private _cells;
    private _sheetRef;
    private _flex;
    private _isCellRange;
    private _absRow;
    private _absCol;
    private _absRow2;
    private _absCol2;
    private _evalutingRange;
    private _isWholeRow;
    _tableName: string;
    _tableParams: string[];
    constructor(cells: wjcGrid.CellRange, sheetRef: string, flex: FlexSheet, isCellRange?: boolean, absRow?: boolean, absCol?: boolean, absRow2?: boolean, absCol2?: boolean, isWholeRow?: boolean);
    evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    getValues(isGetHiddenValue?: boolean, columnIndex?: number, sheet?: Sheet): any[];
    getValuseWithTwoDimensions(isGetHiddenValue?: boolean, sheet?: Sheet): any[];
    readonly cells: wjcGrid.CellRange;
    readonly sheetRef: string;
    private _getCellValue(cell, sheet?, rowIndex?, columnIndex?);
    _getSheet(): Sheet;
    _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): boolean;
    _moveCellRangeExp(sheetIndex: number, srcRange: wjcGrid.CellRange, dstRange: wjcGrid.CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
    _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
    _updateCellBoundary(row: number, col: number): boolean;
    _getStringExpression(): string;
    private _getTableParamsStringExpression();
}
export declare class _FunctionExpression extends _Expression {
    private _funcId;
    private _funcDefinition;
    private _params;
    private _needCacheEvaluatedVal;
    constructor(funcId: string, func: _FunctionDefinition, params: Array<_Expression>, needCacheEvaluatedVal?: boolean);
    evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
    _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): boolean;
    _moveCellRangeExp(sheetIndex: number, srcRange: wjcGrid.CellRange, dstRange: wjcGrid.CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
    _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
    _updateCellBoundary(row: number, col: number): boolean;
    _getStringExpression(): string;
    private _parseParamsExpToString();
}
export declare class _UndoAction {
    _owner: FlexSheet;
    private _sheetIndex;
    constructor(owner: FlexSheet);
    readonly sheetIndex: number;
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _EditAction extends _UndoAction {
    private _selections;
    private _oldValues;
    private _newValues;
    private _isPaste;
    private _mergeAction;
    private _cellStyleAction;
    private _deletedTables;
    _affectedFormulas: any;
    constructor(owner: FlexSheet, selection?: wjcGrid.CellRange);
    readonly isPaste: boolean;
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    markIsPaste(): void;
    updateForPasting(rng: wjcGrid.CellRange): void;
    _storeDeletedTables(table: Table): void;
    private _checkActionState();
    private _saveValues(isOldValue);
    private _handleUndoRedo(isUndo);
}
export declare class _ColumnResizeAction extends _UndoAction {
    private _colIndex;
    private _panel;
    private _oldColWidth;
    private _newColWidth;
    constructor(owner: FlexSheet, panel: wjcGrid.GridPanel, colIndex: number);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _handleUndoRedo(isUndo);
}
export declare class _RowResizeAction extends _UndoAction {
    private _rowIndex;
    private _panel;
    private _oldRowHeight;
    private _newRowHeight;
    constructor(owner: FlexSheet, panel: wjcGrid.GridPanel, rowIndex: number);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _handleUndoRedo(isUndo);
}
export declare class _ColumnsChangedAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    private _columnIndex;
    private _count;
    private _isAdding;
    _affectedFormulas: any;
    _affectedDefinedNameVals: any;
    _deletedTables: Table[];
    constructor(owner: FlexSheet, columnIndex?: number, count?: number, isAdding?: boolean);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _saveValues(isOldValue);
    private _handleUndoRedo(isUndo);
}
export declare class _RowsChangedAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    private _rowIndex;
    private _count;
    private _isAdding;
    _affectedFormulas: any;
    _affectedDefinedNameVals: any;
    _deletedTables: Table[];
    constructor(owner: FlexSheet, rowIndex?: number, count?: number, isAdding?: boolean);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _saveValues(isOldValue);
    private _handleUndoRedo(isUndo);
}
export declare class _CellStyleAction extends _UndoAction {
    private _oldStyledCells;
    private _newStyledCells;
    constructor(owner: FlexSheet, styledCells?: any);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    _checkActionState(): boolean;
    private _handleUndoRedo(isUndo);
}
export declare class _CellMergeAction extends _UndoAction {
    private _oldMergedCells;
    private _newMergedCells;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _handleUndoRedo(isUndo);
    _checkActionState(): boolean;
}
export declare class _SortColumnAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _saveValues(isOldvalue);
    private _handleUndoRedo(isUndo);
}
export declare class _MoveCellsAction extends _UndoAction {
    private _draggingCells;
    private _draggingColumnSetting;
    private _oldDroppingCells;
    private _newDroppingCells;
    private _oldDroppingColumnSetting;
    private _newDroppingColumnSetting;
    private _dragRange;
    private _dropRange;
    private _isCopyCells;
    private _isDraggingColumns;
    private _draggingTableColumns;
    _affectedFormulas: any;
    _affectedDefinedNameVals: any;
    constructor(owner: FlexSheet, draggingCells: wjcGrid.CellRange, droppingCells: wjcGrid.CellRange, isCopyCells: boolean);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _saveValues(isOldvalue);
    private _handleUndoRedo(isUndo);
}
export declare class _CutAction extends _UndoAction {
    private _selection;
    private _cutSelection;
    private _cutSheet;
    private _oldValues;
    private _newValues;
    private _oldCutValues;
    private _newCutValues;
    private _mergeAction;
    private _celltyleAction;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    updateForPasting(rng: wjcGrid.CellRange): void;
    private _saveCutValues(isOldvalue);
    private _handleUndoRedo(isUndo);
}
export declare class _TableSettingAction extends _UndoAction {
    private _table;
    private _oldTableSetting;
    private _newTableSetting;
    constructor(owner: FlexSheet, table: Table);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _saveValues(isOldvalue);
    private _handleUndoRedo(isUndo);
}
export declare class _TableAction extends _UndoAction {
    private _addedTable;
    private _orgHeaderCellsContent;
    constructor(owner: FlexSheet, table: Table);
    undo(): void;
    redo(): void;
    private _handleUndoRedo(isUndo);
}
export declare class _FilteringAction extends _UndoAction {
    private _oldFilterDefinition;
    private _newFilterDefinition;
    private _oldRowsVisible;
    private _newRowsVisible;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _handleUndoRedo(isUndo);
    private _getRowsVisible();
    private _setRowVisible(isUndo);
}
export declare class _FillAction extends _UndoAction {
    private _fillSource;
    private _fillRange;
    private _oldCellSettings;
    private _newCellSettings;
    constructor(owner: FlexSheet, source: wjcGrid.CellRange);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    private _handleUndoRedo(isUndo);
}
export declare class _ContextMenu extends wjcCore.Control {
    private _owner;
    private _insRows;
    private _delRows;
    private _insCols;
    private _delCols;
    private _splitter;
    private _convertTable;
    private _idx;
    private _isDisableDelRow;
    private _isDisableConvertTable;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet);
    readonly visible: boolean;
    show(e: MouseEvent, point?: wjcCore.Point): void;
    hide(): void;
    moveToNext(): void;
    moveToPrev(): void;
    moveToFirst(): void;
    moveToLast(): void;
    handleContextMenu(): void;
    private _init();
    private _removeSelectedState(menuItems);
    private _showTableOperation();
    private _addTable();
}
export declare class _TabHolder extends wjcCore.Control {
    private _owner;
    private _sheetControl;
    private _divSheet;
    private _divSplitter;
    private _divRight;
    private _funSplitterMousedown;
    private _splitterMousedownHdl;
    private _startPos;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet);
    readonly sheetControl: _SheetTabs;
    visible: boolean;
    getSheetBlanketSize(): number;
    adjustSize(): void;
    private _init();
    private _splitterMousedownHandler(e);
    private _splitterMousemoveHandler(e);
    private _splitterMouseupHandler(e);
    private _adjustDis(dis);
}
export declare class _FlexSheetCellFactory extends wjcGrid.CellFactory {
    updateCell(panel: wjcGrid.GridPanel, r: number, c: number, cell: HTMLElement, rng?: wjcGrid.CellRange): void;
    private _resetCellStyle(cell);
    private _getFormattedValue(value, format);
    private _getFirstVisibleCell(g, rng);
    private _isURL(strUrl);
}
export declare class FlexSheet extends wjcGrid.FlexGrid {
    private _sheets;
    private _selectedSheetIndex;
    private _tabHolder;
    private _contextMenu;
    private _divContainer;
    private _columnHeaderClicked;
    private _htDown;
    private _filter;
    private _calcEngine;
    private _functionListHost;
    private _functionList;
    private _functionTarget;
    private _undoStack;
    private _longClickTimer;
    private _cloneStyle;
    private _sortManager;
    private _dragable;
    private _isDragging;
    private _draggingColumn;
    private _draggingRow;
    private _draggingMarker;
    private _draggingTooltip;
    private _draggingCells;
    private _dropRange;
    private _wholeColumnsSelected;
    private _addingSheet;
    private _mouseMoveHdl;
    private _clickHdl;
    private _touchStartHdl;
    private _touchEndHdl;
    private _keydownHdl;
    private _toRefresh;
    _copiedRanges: wjcGrid.CellRange[];
    _copiedSheet: Sheet;
    _isCutting: boolean;
    private _cutValue;
    private _isContextMenuKeyDown;
    _colorThemes: string[];
    _enableMulSel: boolean;
    _isClicking: boolean;
    _isCopying: boolean;
    _isUndoing: boolean;
    _reservedContent: any;
    _lastVisibleFrozenRow: number;
    _lastVisibleFrozenColumn: number;
    private _definedNames;
    private _builtInTableStylesCache;
    _needCopyToSheet: boolean;
    _isPasting: boolean;
    private _resizing;
    _isSorting: boolean;
    private _fillingData;
    private _fillingPoint;
    private _fillingSource;
    private _fillingRange;
    private _fillingMarker;
    _orgCellSettings: any[];
    private _fillSmartTagHost;
    private _fillMenuHost;
    private _fillingTooltip;
    private _endDragFillOperationHdl;
    private _enableDragDrop;
    private _enableFormulas;
    private _orgRowVisible;
    static controlTemplate: string;
    constructor(element: any, options?: any);
    _getProductInfo(): string;
    readonly sheets: SheetCollection;
    selectedSheetIndex: number;
    readonly selectedSheet: Sheet;
    readonly isFunctionListOpen: boolean;
    isTabHolderVisible: boolean;
    readonly undoStack: UndoStack;
    readonly sortManager: SortManager;
    readonly filter: FlexSheetFilter;
    showFilterIcons: boolean;
    readonly definedNames: wjcCore.ObservableArray;
    enableDragDrop: boolean;
    enableFormulas: boolean;
    selectedSheetChanged: wjcCore.Event;
    onSelectedSheetChanged(e: wjcCore.PropertyChangedEventArgs): void;
    draggingRowColumn: wjcCore.Event;
    onDraggingRowColumn(e: DraggingRowColumnEventArgs): void;
    droppingRowColumn: wjcCore.Event;
    onDroppingRowColumn(e?: wjcCore.EventArgs): void;
    loaded: wjcCore.Event;
    onLoaded(e?: wjcCore.EventArgs): void;
    unknownFunction: wjcCore.Event;
    onUnknownFunction(e: UnknownFunctionEventArgs): void;
    sheetCleared: wjcCore.Event;
    onSheetCleared(e?: wjcCore.EventArgs): void;
    prepareChangingRow: wjcCore.Event;
    onPrepareChangingRow(e: RowColumnChangedEventArgs): void;
    prepareChangingColumn: wjcCore.Event;
    onPrepareChangingColumn(e: RowColumnChangedEventArgs): void;
    rowChanged: wjcCore.Event;
    onRowChanged(e: RowColumnChangedEventArgs): void;
    columnChanged: wjcCore.Event;
    onColumnChanged(e: RowColumnChangedEventArgs): void;
    refresh(fullUpdate?: boolean): void;
    setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
    containsFocus(): boolean;
    addUnboundSheet(sheetName?: string, rows?: number, cols?: number, pos?: number, grid?: wjcGrid.FlexGrid): Sheet;
    addBoundSheet(sheetName: string, source: any, pos?: number, grid?: wjcGrid.FlexGrid): Sheet;
    applyCellsStyle(cellStyle: ICellStyle, cells?: wjcGrid.CellRange[], isPreview?: boolean): void;
    freezeAtCursor(): void;
    showColumnFilter(): void;
    clear(): void;
    getSelectionFormatState(): IFormatState;
    insertRows(index?: number, count?: number): void;
    deleteRows(index?: number, count?: number): void;
    insertColumns(index?: number, count?: number): void;
    deleteColumns(index?: number, count?: number): void;
    mergeRange(cells?: wjcGrid.CellRange, isCopyMergeCell?: boolean): void;
    getMergedRange(panel: wjcGrid.GridPanel, r: number, c: number, clip?: boolean): wjcGrid.CellRange;
    evaluate(formula: string, format?: string, sheet?: Sheet, getPrimitiveResult?: boolean): any;
    getCellValue(rowIndex: number, colIndex: number, formatted?: boolean, sheet?: Sheet): any;
    showFunctionList(target: HTMLElement): void;
    hideFunctionList(): void;
    selectPreviousFunction(): void;
    selectNextFunction(): void;
    applyFunctionToCell(): void;
    save(fileName?: string, options?: IFlexSheetXlsxOptions): wjcXlsx.Workbook;
    saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any, options?: IFlexSheetXlsxOptions): wjcXlsx.Workbook;
    saveToWorkbookOM(options?: IFlexSheetXlsxOptions): wjcXlsx.IWorkbook;
    load(workbook: any): void;
    loadAsync(workbook: any, onLoaded?: (workbook: wjcXlsx.Workbook) => void, onError?: (reason?: any) => any): void;
    loadFromWorkbookOM(workbook: wjcXlsx.IWorkbook): void;
    undo(): void;
    redo(): void;
    select(rng: any, show?: any): void;
    addCustomFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
    addFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
    dispose(): void;
    getClipString(rng?: wjcGrid.CellRange): string;
    setClipString(text: string, rng?: wjcGrid.CellRange): boolean;
    getBuiltInTableStyle(styleName: string): TableStyle;
    _getCvIndex(index: number): number;
    protected _bindGrid(full: boolean): void;
    private _init();
    private _flexSheetSyncSelection(force);
    private _initFuncsList();
    private _getFunctions();
    private _addCustomFunctionDescription(name, description);
    private _getCurrentFormulaIndex(searchText);
    private _prepareCellForEditHandler();
    private _addSheet(sheetName?, rows?, cols?, pos?, grid?);
    private _showSheet(index);
    private _selectedSheetChange(sender, e);
    private _sourceChange(sender, e);
    private _sheetVisibleChange(sender, e);
    private _applyStyleForCell(rowIndex, colIndex, cellStyle, forceApply?);
    private _checkCellFormat(rowIndex, colIndex, formatState);
    _resetMergedRange(range: wjcGrid.CellRange): boolean;
    private _updateCellsForUpdatingRow(originalRowCount, index, count, isDelete?);
    private _updateCellsForUpdatingColumn(originalColumnCount, index, count, isDelete?);
    _cloneObject(source: any): any;
    private _evaluate(formula, format?, sheet?, rowIndex?, columnIndex?);
    _copyTo(sheet: Sheet): void;
    _copyFrom(sheet: Sheet, needRefresh?: boolean): void;
    private _resetMappedColumns(flex);
    private _loadFromWorkbook(workbook);
    private _saveToWorkbook(options);
    private _mouseDown(e);
    private _mouseMove(e);
    private _mouseUp(e);
    private _click();
    private _touchStart(e);
    private _touchEnd();
    private _keydown(e);
    private _showDraggingMarker(e);
    private _showFillMarker(e);
    private _showFillTooltip();
    private _showFillMenuSmartTag(fillOperation);
    private _showFillMenu(fillOperation?);
    private _endDragFillOperation(e);
    private _removeActiveStyleForFillMenuItem();
    private _disposeFillSmartTag();
    private _disposeFillMenu();
    private _handleDropping(e);
    private _moveCellContent(srcRowIndex, srcColIndex, desRowIndex, desColIndex, isCopyContent);
    private _allowExchangeCells(isRow, isReverse);
    private _exchangeTableColumns(isReverse);
    private _exchangeCellStyle(isReverse);
    _containsMergedCells(rng: wjcGrid.CellRange, sheet?: Sheet): boolean;
    private _multiSelectColumns(ht);
    private _cumulativeOffset(element);
    private _cumulativeScrollOffset(element);
    private _checkHitWithinSelection(ht);
    private _clearForEmptySheet(rowsOrColumns);
    private _containsGroupRows(cellRange);
    private _delSeletionContent(evt);
    _updateAffectedFormula(index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: wjcGrid.CellRange): any;
    private _updateAffectedNamedRanges(index, count, isAdding, isRow);
    private _updateFormulaBoundaryForEditingCell(row, col);
    _updateColumnFiler(srcColIndex: number, descColIndex: number): void;
    private _isDescendant(paranet, child);
    _clearCalcEngine(): void;
    private _getRangeString(ranges, sheet, isGetCellValue?);
    _getSelectionForListBoxMode(flex: wjcGrid.FlexGrid): wjcGrid.CellRange;
    private _containsRandFormula(ranges, sheet);
    private _isMultipleRowsSelected(ranges?, sheet?);
    private _isMultipleColumnsSelected(ranges?, sheet?);
    private _postSetClipStringProcess(cellData, row, col, copiedRow, copiedCol, styleInfo?);
    private _delCutData(rowsSpan, colsSpan);
    private _containsMultiLineText(rows);
    private _sortByRow(sel1, sel2);
    private _sortByColumn(sel1, sel2);
    _setFlexSheetToDirty(): void;
    static convertNumberToAlpha(c: number): string;
    _updateFormulaForReorderingRows(srcRow: number, dstRow: number, isResetFormula?: boolean): void;
    private _updateFormulaForDropping(isChangePos);
    private _updateNamedRangesForDropping(isChangePos);
    private _updateCellRefForDropping(cellData, sheetIndex, isChangePos?);
    _updateCellStyleForReorderingRows(srcRow: number, dstRow: number, sortedCellsStyle: any): void;
    _scanFormulas(): any[];
    _resetFormulas(formulas: any[]): void;
    _getCellStyle(rowIndex: number, colIndex: number, sheet?: Sheet): ICellStyle;
    _validateSheetName(sheetName: string): boolean;
    _checkExistDefinedName(name: string, sheetName: string, ignoreIndex?: number): boolean;
    private _updateDefinedNameWithSheetRefUpdating(oldSheetName, newSheetName);
    _updateFormulasWithNameUpdating(oldName: string, newName: string, isTable?: boolean): void;
    _getDefinedNameIndexByName(name: string): number;
    private _updateTablesForUpdatingRow(index, count, isDelete?);
    private _updateTablesForUpdatingColumn(index, count, isDelete?);
    _isDisableDeleteRow(topRow: number, bottomRow: number): boolean;
    _copy(key: string, value: any): boolean;
    private _getTableSheetIndex(sheetTables, tableName);
    private _sheetSortConverter(sd, item, value, init);
    _formatEvaluatedResult(result: any, col: wjcGrid.Column, format: string): any;
    private _updateCellRef(cellData, sheetIndex, index, count, isAdding, isRow, affectRange?);
    private _updateCellBoundary(cellData, row, col);
    private _fillData(operation?);
    private _getFillData(srcIndex, cellDiff, source, isFillRow, series, needGetTrendData);
    private _fillFormula(cellData, srcRowIndex, srcColIndex, dstRowIndex, dstColIndex);
    private _getFillSeries(isFillRow, seriesIndex, srcIndex);
    private _getLinearBestFitTrendData(vals, valIndexes, index);
    _getCellSettingsForFill(fillSource?: wjcGrid.CellRange, fillRange?: wjcGrid.CellRange): any[];
    private _resetCellsForFillRange(operation);
    private _canDoFillOperation();
    _updateItemIndexForInsertingRow(items: any[], newItemIndex: number, rowCount: number): void;
    _updateItemIndexForRemovingRow(items: any[], itemIndex: number): void;
    _copyRowsToSelectedSheet(): void;
    _copyColumnsToSelectedSheet(): void;
    private _getUniqueColumnName();
    private _parseFromWorkbookTable(workbookTable, sheet);
    private _parseFromWorkbookTableStyle(tableStyle);
    private _parseFromWorkbookTableStyleElement(tableStyleElement);
    private _parseToWorkbookTable(table);
    private _parseToWorkbookTableStyle(tableStyle);
    private _parseToWorkbookTableStyleElement(tableStyleElement, isBandedStyle?);
    private _isBuiltInStyleName(styleName);
    _getTable(name: string): Table;
    private _checkTableHeaderRow(tables, workbook);
    private _isTableColumnRef(cellData, cellRef);
    private _getThemeColor(theme, tint?);
    private _createBuiltInTableStyle(styleName);
    private _generateTableLightStyle1(styleIndex, styleName, isLowerStyle);
    private _generateTableLightStyle2(styleIndex, styleName);
    private _generateTableMediumStyle1(styleIndex, styleName);
    private _generateTableMediumStyle2(styleIndex, styleName);
    private _generateTableMediumStyle3(styleIndex, styleName);
    private _generateTableMediumStyle4(styleIndex, styleName);
    private _generateTableDarkStyle1(styleIndex, styleName);
    private _generateTableDarkStyle2(styleIndex, styleName);
    static _toOADate(val: Date): number;
    static _fromOADate(oADate: number): Date;
}
export declare class DraggingRowColumnEventArgs extends wjcCore.EventArgs {
    private _isDraggingRows;
    private _isShiftKey;
    constructor(isDraggingRows: boolean, isShiftKey: boolean);
    readonly isDraggingRows: boolean;
    readonly isShiftKey: boolean;
}
export declare class UnknownFunctionEventArgs extends wjcCore.EventArgs {
    private _funcName;
    private _params;
    value: string;
    constructor(funcName: string, params: any[]);
    readonly funcName: string;
    readonly params: any[];
}
export declare class RowColumnChangedEventArgs extends wjcCore.EventArgs {
    private _index;
    private _count;
    private _added;
    constructor(index: number, count: number, added: boolean);
    readonly index: number;
    readonly count: number;
    readonly added: boolean;
    readonly isAdd: boolean;
}
export declare class FlexSheetPanel extends wjcGrid.GridPanel {
    constructor(grid: wjcGrid.FlexGrid, cellType: wjcGrid.CellType, rows: wjcGrid.RowCollection, cols: wjcGrid.ColumnCollection, element: HTMLElement);
    getSelectedState(r: number, c: number, rng: wjcGrid.CellRange): wjcGrid.SelectedState;
    getCellData(r: number, c: any, formatted: boolean): any;
    setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
    _renderCell(row: HTMLElement, r: number, c: number, vrng: wjcGrid.CellRange, state: boolean, ctr: number): number;
}
export declare class HeaderRow extends wjcGrid.Row {
    constructor();
}
export declare class DefinedName {
    private _owner;
    private _name;
    private _value;
    _sheetName: string;
    constructor(owner: FlexSheet, name: string, value: any, sheetName?: string);
    name: string;
    value: any;
    readonly sheetName: string;
}
export interface ICellStyle {
    className?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    textDecoration?: string;
    textAlign?: string;
    verticalAlign?: string;
    backgroundColor?: string;
    color?: string;
    format?: string;
    whiteSpace?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string;
    borderTopColor?: string;
    borderTopStyle?: string;
    borderTopWidth?: string;
    borderBottomColor?: string;
    borderBottomStyle?: string;
    borderBottomWidth?: string;
}
export interface IFormatState {
    isBold?: boolean;
    isItalic?: boolean;
    isUnderline?: boolean;
    textAlign?: string;
    isMergedCell?: boolean;
}
export interface IFlexSheetXlsxOptions {
    includeFormulaValues?: boolean;
}
export declare class Sheet {
    private _name;
    _owner: FlexSheet;
    private _rowCount;
    private _columnCount;
    private _visible;
    _unboundSortDesc: wjcCore.ObservableArray;
    private _currentStyledCells;
    private _currentMergedRanges;
    private _grid;
    private _selectionRanges;
    private _isEmptyGrid;
    _rowSettings: any[];
    _filterDefinition: string;
    _scrollPosition: wjcCore.Point;
    _freezeHiddenRows: boolean[];
    _freezeHiddenCols: boolean[];
    private _tables;
    _sortList: ColumnSortDescription[];
    private _filterSetting;
    _showDefaultHeader: boolean;
    _dataView: any[];
    constructor(owner?: FlexSheet, grid?: wjcGrid.FlexGrid, sheetName?: string, rows?: number, cols?: number);
    readonly grid: wjcGrid.FlexGrid;
    name: string;
    visible: boolean;
    rowCount: number;
    columnCount: number;
    readonly selectionRanges: wjcCore.ObservableArray;
    itemsSource: any;
    filterSetting: IFilterSetting;
    readonly tables: wjcCore.ObservableArray;
    _styledCells: any;
    readonly _mergedRanges: wjcGrid.CellRange[];
    nameChanged: wjcCore.Event;
    onNameChanged(e: wjcCore.PropertyChangedEventArgs): void;
    visibleChanged: wjcCore.Event;
    onVisibleChanged(e: wjcCore.EventArgs): void;
    dispose(): void;
    getCellStyle(rowIndex: number, columnIndex: number): ICellStyle;
    addTableFromArray(row: number, column: number, array: any[], properties?: string[], tableName?: string, tableStyle?: TableStyle, options?: ITableOptions, shift?: boolean): Table;
    findTable(rowIndex: number, columnIndex: number): Table;
    _attachOwner(owner: FlexSheet): void;
    _setValidName(validName: string): void;
    _storeRowSettings(): void;
    _setRowSettings(): void;
    _addTable(range: wjcGrid.CellRange, tableName?: string, tableStyle?: TableStyle, columns?: TableColumn[], options?: ITableOptions): Table;
    _addSelection(selection: wjcGrid.CellRange): void;
    private _compareRows();
    private _createGrid();
    private _clearGrid();
    private _gridItemsSourceChanged();
    private _addHeaderRow();
    private _getUniqueTableName();
    private _needShiftForTable(range);
    private _needAddRowCountForAddTable(shiftCount, tableRange);
    _moveDownTable(table: Table): void;
    _moveDownCells(count: number, range: wjcGrid.CellRange): void;
    _moveUpCells(count: number, range: wjcGrid.CellRange): void;
    _moveDownCellsWithinTable(index: number, count: number, tableRange: wjcGrid.CellRange): void;
    _moveUpCellsWithinTable(index: number, count: number, tableRange: wjcGrid.CellRange): void;
    _canShiftCells(shiftRange: wjcGrid.CellRange): boolean;
    _needMoveDownTable(table: Table): boolean;
    _needAddRowCountForInsertTableRows(count: number, range: wjcGrid.CellRange): number;
    _getFilterSetting(): void;
    _applyFilterSetting(): void;
    private _clearFilterSetting();
    _cloneMergedCells(): wjcGrid.CellRange[];
    _getMergedRange(row: number, col: number): wjcGrid.CellRange;
}
export declare class SheetCollection extends wjcCore.ObservableArray {
    private _current;
    sheetCleared: wjcCore.Event;
    onSheetCleared(): void;
    selectedIndex: number;
    selectedSheetChanged: wjcCore.Event;
    onSelectedSheetChanged(e: wjcCore.PropertyChangedEventArgs): void;
    insert(index: number, item: any): void;
    push(...item: any[]): number;
    splice(index: number, count: number, item?: any): any[];
    removeAt(index: number): void;
    sheetNameChanged: wjcCore.Event;
    onSheetNameChanged(e: wjcCore.NotifyCollectionChangedEventArgs): void;
    sheetVisibleChanged: wjcCore.Event;
    onSheetVisibleChanged(e: wjcCore.NotifyCollectionChangedEventArgs): void;
    selectFirst(): boolean;
    selectLast(): boolean;
    selectPrevious(): boolean;
    selectNext(): boolean;
    hide(pos: number): boolean;
    show(pos: number): boolean;
    clear(): void;
    isValidSheetName(sheet: Sheet): boolean;
    getValidSheetName(currentSheet: Sheet): string;
    private _moveCurrentTo(pos);
    private _getSheetIndexFrom(sheetName);
    private _postprocessSheet(item);
    private _getUniqueName();
}
export declare class _SheetTabs extends wjcCore.Control {
    private _sheets;
    private _sheetContainer;
    private _tabContainer;
    private _sheetPage;
    private _newSheet;
    private _owner;
    private _rtl;
    private _sheetTabClicked;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet, options?: any);
    refresh(fullUpdate: any): void;
    private _sourceChanged(sender, e?);
    private _selectedSheetChanged(sender, e);
    private _initControl();
    private _initSheetTab();
    private _initSheetPage();
    private _getSheetTabs();
    private _getSheetElement(sheetItem, isActive?);
    private _updateTabActive(pos, active);
    private _updateTabShown(sender, e);
    _adjustSize(): void;
    private _getItemIndex(container, item);
    private _updateSheetName(sender, e);
    private _scrollSheetTabContainer(currentSheetTab);
    private _adjustSheetsPosition();
    private _scrollToActiveSheet(newIndex, oldIndex);
    private _adjustNavigationButtons(rtl);
}
export declare class _UnboundSortDescription {
    private _column;
    private _ascending;
    constructor(column: wjcGrid.Column, ascending: boolean);
    readonly column: wjcGrid.Column;
    readonly ascending: boolean;
}
export interface IFilterSetting {
    filterColumns?: string[];
    columnFilterSettings?: IColumnFilterSetting[];
}
export interface IColumnFilterSetting {
    column: any;
    filterType?: wjcGridFilter.FilterType;
    dataMap?: wjcGrid.DataMap;
    valueFilterSetting?: IValueFiterSetting;
    conditionFilterSetting?: IConditionFilterSetting;
}
export interface IValueFiterSetting {
    maxValues?: number;
    uniqueValues?: any[];
    sortValues?: boolean;
    dataMap: wjcGrid.DataMap;
}
export interface IConditionFilterSetting {
    dataMap?: wjcGrid.DataMap;
}
export declare class SortManager {
    private _sortDescriptions;
    private _owner;
    _committedList: ColumnSortDescription[];
    constructor(owner: FlexSheet);
    sortDescriptions: wjcCore.CollectionView;
    addSortLevel(columnIndex?: number, ascending?: boolean): void;
    deleteSortLevel(columnIndex?: number): void;
    copySortLevel(): void;
    editSortLevel(columnIndex?: number, ascending?: boolean): void;
    moveSortLevel(offset: number): void;
    checkSortItemExists(columnIndex: any): number;
    commitSort(undoable?: boolean): void;
    cancelSort(): void;
    clearSort(): void;
    private _getColumnIndex(property);
    private _getSortItem(columnIndex);
    _cloneSortList(sortList: ColumnSortDescription[]): ColumnSortDescription[];
    _updateSortSortDescription(colIndex: number, count: number, isAdd?: boolean): void;
    private _isEmpty(obj);
}
export declare class ColumnSortDescription {
    private _columnIndex;
    private _ascending;
    constructor(columnIndex: number, ascending: boolean);
    columnIndex: number;
    ascending: boolean;
    clone(): ColumnSortDescription;
}
export declare class UndoStack {
    private MAX_STACK_SIZE;
    private _owner;
    private _stack;
    private _pointer;
    _pendingAction: _UndoAction;
    private _resizingTriggered;
    private _stackSize;
    constructor(owner: FlexSheet);
    stackSize: number;
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    undoStackChanged: wjcCore.Event;
    onUndoStackChanged(): void;
    undo(): void;
    redo(): void;
    clear(): void;
    _addAction(action: _UndoAction): void;
    _pop(): _UndoAction;
    _updateCurrentAction(actionType: any): void;
    private _initCellEditAction(sender, args);
    private _initCellEditActionForPasting();
    private _afterProcessCellEditAction(self);
    private _beforeUndoRedo(action);
}
export declare class Table {
    _owner: FlexSheet;
    private _sheet;
    private _name;
    private _columns;
    private _range;
    private _style;
    private _showHeaderRow;
    private _showTotalRow;
    private _showBandedColumns;
    private _showBandedRows;
    private _alterFirstColumn;
    private _alterLastColumn;
    _orgHeaderCellsContent: any[];
    constructor(name: string, range: wjcGrid.CellRange, style?: TableStyle, columns?: TableColumn[], options?: ITableOptions);
    name: string;
    readonly sheet: Sheet;
    style: TableStyle;
    showHeaderRow: boolean;
    showTotalRow: boolean;
    showBandedColumns: boolean;
    showBandedRows: boolean;
    alterFirstColumn: boolean;
    alterLastColumn: boolean;
    getRange(section?: TableSection, column?: any): wjcGrid.CellRange;
    getColumns(): TableColumn[];
    insertRows(index: number, count?: number, shift?: boolean): boolean;
    deleteRows(index: number, count?: number, shift?: boolean): void;
    _addColumn(index: number, columnName?: string): void;
    _updateCell(rowIndex: number, colIndex: number, cell: HTMLElement): void;
    _updateTableRange(topRowChange: number, bottomRowChage: number, leftColChange: number, rightColChange: number): void;
    _setTableRange(range: wjcGrid.CellRange, columns?: TableColumn[]): void;
    _updateColumnName(columnIndex: number, columnName: string): void;
    _updateColumnTotalRowContent(column: TableColumn, columnIndex?: number): void;
    _attachSheet(sheet: Sheet): void;
    _detachSheet(): void;
    private _pushTableColumns(columns);
    private _generateColumns(showHeaderRow);
    _getTableCellAppliedStyles(cellRowIndex: number, cellColIndex: number): ITableSectionStyle;
    private _applyStylesForCell(cellStyle, cell);
    private _extendStyle(dstStyle, srcStyle, cellRowIndex, cellColIndex, isHeaderCell, isTotalCell);
    private _getSubtotalFunction(functionName);
    private _checkColumnNameExist(name);
    private _adjustTableRangeWithHeaderRow();
    private _adjustTableRangeWithTotalRow();
    private _updateTotalRow();
    private _getUniqueColumnName(index, columnName?);
    _moveColumns(src: number, dst: number): void;
    private _canInsertRowsWithoutShift(count);
    private _beneathRowIsEmpty();
    private _getDataRange();
    private _getHeaderRange();
    private _getFooterRange();
    private _getColumnIndex(column);
}
export declare class TableColumn {
    private _table;
    private _name;
    _totalRowLabel: string;
    _totalRowFunction: string;
    private _showFilterButton;
    constructor(name: string, totalRowLabel?: string, totalRowFunction?: string, showFilterButton?: boolean);
    readonly table: Table;
    name: string;
    totalRowLabel: string;
    totalRowFunction: string;
    showFilterButton: boolean;
    _attach(table: Table): void;
    private _updateTableTotalInfo();
}
export declare class TableStyle {
    private _name;
    private _isBuiltIn;
    private _wholeTableStyle;
    private _firstBandedColumnStyle;
    private _secondBandedColumnStyle;
    private _firstBandedRowStyle;
    private _secondBandedRowStyle;
    private _firstColumnStyle;
    private _lastColumnStyle;
    private _headerRowStyle;
    private _totalRowStyle;
    private _firstHeaderCellStyle;
    private _lastHeaderCellStyle;
    private _firstTotalCellStyle;
    private _lastTotalCellStyle;
    constructor(name: string, isBuiltIn?: boolean);
    name: string;
    wholeTableStyle: ITableSectionStyle;
    firstBandedColumnStyle: IBandedTableSectionStyle;
    secondBandedColumnStyle: IBandedTableSectionStyle;
    firstBandedRowStyle: IBandedTableSectionStyle;
    secondBandedRowStyle: IBandedTableSectionStyle;
    firstColumnStyle: ITableSectionStyle;
    lastColumnStyle: ITableSectionStyle;
    headerRowStyle: ITableSectionStyle;
    totalRowStyle: ITableSectionStyle;
    firstHeaderCellStyle: ITableSectionStyle;
    lastHeaderCellStyle: ITableSectionStyle;
    firstTotalCellStyle: ITableSectionStyle;
    lastTotalCellStyle: ITableSectionStyle;
    readonly isBuiltIn: boolean;
}
export interface ITableSectionStyle extends ICellStyle {
    borderHorizontalColor?: any;
    borderHorizontalStyle?: string;
    borderHorizontalWidth?: string;
    borderVerticalColor?: any;
    borderVerticalStyle?: string;
    borderVerticalWidth?: string;
}
export interface IBandedTableSectionStyle extends ITableSectionStyle {
    size?: number;
}
export interface ITableOptions {
    showHeaderRow?: boolean;
    showTotalRow?: boolean;
    showBandedColumns?: boolean;
    showBandedRows?: boolean;
    alterFirstColumn?: boolean;
    alterLastColumn?: boolean;
}
export declare enum TableSection {
    All = 0,
    Data = 1,
    Header = 2,
    Footer = 3,
}
export declare class FlexSheetValueFilter extends wjcGridFilter.ValueFilter {
    constructor(column: wjcGrid.Column);
    apply(value: any): boolean;
}
export declare class FlexSheetValueFilterEditor extends wjcGridFilter.ValueFilterEditor {
    updateEditor(): void;
    updateFilter(): void;
}
export declare class FlexSheetConditionFilter extends wjcGridFilter.ConditionFilter {
    constructor(column: wjcGrid.Column);
    apply(value: any): boolean;
}
export declare class FlexSheetColumnFilter extends wjcGridFilter.ColumnFilter {
    constructor(owner: FlexSheetFilter, column: wjcGrid.Column);
}
export declare class FlexSheetColumnFilterEditor extends wjcGridFilter.ColumnFilterEditor {
    constructor(element: any, filter: FlexSheetColumnFilter, sortButtons?: boolean);
    _showFilter(filterType: wjcGridFilter.FilterType): void;
    private _sortBtnClick(e, asceding);
    private cloneElement(element);
}
export declare class FlexSheetFilter extends wjcGridFilter.FlexGridFilter {
    private _undoAcion;
    private _filterChanged;
    filterDefinition: string;
    apply(): void;
    editColumnFilter(col: any, ht?: wjcGrid.HitTestInfo): void;
    closeEditor(): void;
    getColumnFilter(col: any, create?: boolean): FlexSheetColumnFilter;
    private _checkGroupVisible(range);
}
