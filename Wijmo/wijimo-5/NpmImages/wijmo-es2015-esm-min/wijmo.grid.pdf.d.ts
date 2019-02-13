import * as wjcPdf from 'wijmo/wijmo.pdf';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcSelfRef from 'wijmo/wijmo.grid.pdf';
export declare enum ScaleMode {
    ActualSize = 0,
    PageWidth = 1,
    SinglePage = 2,
}
export declare enum ExportMode {
    All = 0,
    Selection = 1,
}
export interface ICellStyle {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    font?: any;
}
export interface IFlexGridStyle {
    cellStyle?: ICellStyle;
    altCellStyle?: ICellStyle;
    groupCellStyle?: ICellStyle;
    headerCellStyle?: ICellStyle;
    footerCellStyle?: ICellStyle;
    errorCellStyle?: ICellStyle;
}
export interface IFlexGridDrawSettings {
    customCellContent?: boolean;
    drawDetailRows?: boolean;
    embeddedFonts?: wjcPdf.IPdfFontFile[];
    exportMode?: ExportMode;
    formatItem?: Function;
    maxPages?: number;
    repeatMergedValuesAcrossPages?: boolean;
    recalculateStarWidths?: boolean;
    styles?: IFlexGridStyle;
    progress?: Function;
    _progressMax?: number;
}
export interface IFlexGridExportSettings extends IFlexGridDrawSettings {
    scaleMode?: ScaleMode;
    documentOptions?: any;
}
export interface _IFlexGridAdapter {
    columns: _IColumnCollection;
    rows: _IRowCollection;
    bottomLeftCells: _IGridPanel;
    cells: _IGridPanel;
    columnFooters: _IGridPanel;
    columnHeaders: _IGridPanel;
    rowHeaders: _IGridPanel;
    topLeftCells: _IGridPanel;
    treeIndent: number;
    getSelection(): _ICellRange[];
    getComputedStyle(cell: HTMLElement): CSSStyleDeclaration;
    getMergedRange(p: _IGridPanel, r: number, c: number): _ICellRange;
    showColumnHeader: boolean;
    showRowHeader: boolean;
    showColumnFooter: boolean;
    alignMergedTextToTheTopRow(panel: _IGridPanel): boolean;
    getCell(panel: _IGridPanel, row: number, column: number): HTMLElement;
    getCellContent(panel: _IGridPanel, row: _IRow, col: _IColumn, colIdx: number): string;
    getCellStyle(panel: _IGridPanel, row: _IRow, col: _IColumn): ICellStyle;
    getColumn(panel: _IGridPanel, row: number, col: number): _IColumn;
    isAlternatingRow(row: _IRow): boolean;
    isBooleanCell(panel: _IGridPanel, row: _IRow, col: _IColumn): boolean;
    isGroupRow(row: _IRow): boolean;
    isNewRow(row: _IRow): boolean;
    isDetailRow(row: _IRow): boolean;
    isExpandableGroupRow(row: _IRow): boolean;
}
export interface _IGridPanel {
    columns: _IColumnCollection;
    cellType: number;
    rows: _IRowCollection;
    height: number;
    width: number;
}
export interface _IColumnCollection {
    [index: number]: _IColumn;
    firstVisibleIndex: number;
    length: number;
}
export interface _IColumn {
    aggregate: number;
    dataType: number;
    index: number;
    isVisible: boolean;
    renderWidth: number;
    wordWrap: boolean;
    getAlignment(): string;
}
export interface _IRowCollection {
    [index: number]: _IRow;
    length: number;
    maxGroupLevel: number;
}
export interface _IRow {
    index: number;
    isVisible: boolean;
    level?: number;
    renderHeight: number;
}
export declare enum _CellType {
    None = 0,
    Cell = 1,
    ColumnHeader = 2,
    RowHeader = 3,
    TopLeft = 4,
    ColumnFooter = 5,
    BottomLeft = 6,
}
export declare class PdfFormatItemEventArgs extends wjcCore.CancelEventArgs {
    private _p;
    private _rng;
    private _data;
    private _canvas;
    private _cell;
    private _clientRect;
    private _contentRect;
    private _textTop;
    private _style;
    private _getFormattedCell;
    constructor(p: any, rng: any, cell: HTMLElement, canvas: wjcPdf.PdfPageArea, clientRect: wjcCore.Rect, contentRect: wjcCore.Rect, textTop: number, style: ICellStyle, getFormattedCell?: Function);
    readonly panel: wjcGrid.GridPanel;
    readonly range: wjcGrid.CellRange;
    readonly row: number;
    readonly col: number;
    data: any;
    cancelBorders: boolean;
    readonly canvas: wjcPdf.PdfPageArea;
    readonly cell: HTMLElement;
    readonly clientRect: wjcCore.Rect;
    readonly contentRect: wjcCore.Rect;
    getFormattedCell(): HTMLElement;
    readonly style: ICellStyle;
    readonly textTop: number;
}
export declare function _merge(dst: any, src: any, overwrite?: boolean): any;
export declare class _FlexGridPdfConverterCore {
    private static BorderWidth;
    private static DefFont;
    static DefaultDrawSettings: IFlexGridDrawSettings;
    static draw(flex: _IFlexGridAdapter, doc: wjcPdf.PdfDocument, point?: wjcCore.Point, width?: number, height?: number, settings?: IFlexGridExportSettings): void;
    static _applyDefaultDrawSettings(settings: any): IFlexGridDrawSettings;
    private static _drawInternal(flex, doc, point, width, height, settings);
    private static _getCellsCount(flex, settings, pages);
    private static _getRowsToRender(flex, settings);
    private static _getScaleFactor(gr, scaleMode, rect);
    private static _getPages(gr, ranges, rect, settings, isPositionedMode, scaleFactor);
}
export interface _ICellRange {
    row: number;
    col: number;
    row2: number;
    col2: number;
    bottomRow: number;
    rightCol: number;
    leftCol: number;
    topRow: number;
    isValid: boolean;
    getRenderSize(panel: _IGridPanel): wjcCore.Size;
    clone(): _ICellRange;
}
export declare class _CellRange implements _ICellRange {
    private _row;
    private _col;
    private _row2;
    private _col2;
    firstVisibleRow: number;
    visibleRowsCount: number;
    constructor(panel: _IGridPanel, cr: _ICellRange);
    constructor(panel: _IGridPanel, row: number, col: number, row2: number, col2: number);
    row: number;
    col: number;
    row2: number;
    col2: number;
    readonly topRow: number;
    readonly bottomRow: number;
    readonly leftCol: number;
    readonly rightCol: number;
    readonly rowSpan: number;
    readonly isValid: boolean;
    copyFrom(cr: _CellRange): void;
    clone(): wjcSelfRef._CellRange;
    getRenderSize(p: _IGridPanel): wjcCore.Size;
    setRange(r?: number, c?: number, r2?: number, c2?: number): void;
}
export declare function _removeFakeCell(): void;
export declare class FlexGridPdfConverter {
    static _DefaultExportSettings: IFlexGridExportSettings;
    static draw(flex: any, doc: wjcPdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
    static drawToPosition(flex: any, doc: wjcPdf.PdfDocument, point: wjcCore.Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
    static export(flex: wjcGrid.FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
    static _getFlexGridAdapter(flex: wjcGrid.FlexGrid, settings: IFlexGridDrawSettings): _IFlexGridAdapter;
    static _applyDefaultExportSettings(settings: any): IFlexGridExportSettings;
}
export interface IClientDataItem {
    content: any;
    settings: any;
}
export interface _IFlexGridClientDataItem extends IClientDataItem {
    content: _IFlexGridAdapter;
    settings: IFlexGridExportSettings;
    isGrid?: boolean;
    progressMessaging?: boolean;
}
export interface IClientData {
    [name: string]: IClientDataItem;
}
export declare class PdfWebWorkerExportDoneEventArgs extends wjcCore.EventArgs {
    private _blob;
    private _buf;
    constructor(buffer: ArrayBuffer);
    readonly blob: Blob;
    readonly buffer: ArrayBuffer;
}
export declare class PdfWebWorkerClient {
    static exportGrid(worker: Worker, grid: wjcGrid.FlexGrid, fileName: string, settings: IFlexGridExportSettings, done?: Function, progress?: Function): void;
    static export(worker: Worker, settings: any, done: Function, progress?: Function): void;
    static addGrid(worker: Worker, grid: wjcGrid.FlexGrid, name: string, settings: IFlexGridDrawSettings): void;
    static addImage(worker: Worker, image: string, name: string, settings: wjcPdf.IPdfImageDrawSettings): void;
    static addString(worker: Worker, value: string, name: string): void;
    static serializeGrid(grid: wjcGrid.FlexGrid, settings?: IFlexGridExportSettings): ArrayBuffer;
    private static _addClientData(worker, value, name, settings, isGrid?);
    private static _clearClientData(worker);
    private static _clientDataToArrayBuffer(worker);
    private static _gridToJson(grid, settings?);
    private static _getJsonConverter(flex, settings);
}
export declare class PdfWebWorker {
    static initExportGrid(): void;
    static initExport(draw: Function): void;
    static sendExportProgress(value: number): void;
    static deserializeGrid(data: ArrayBuffer, settings?: IFlexGridDrawSettings): any;
    private static _deserializeGridFromString(jsonStr, settings?);
    private static _disableUnsupportedFeatures(settings);
    private static _getJsonAdapter(json, settings);
}
