import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcXlsx from 'wijmo/wijmo.xlsx';
export declare class FlexGridXlsxConverter {
    private static hasCssText;
    static save(grid: wjcGrid.FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string): wjcXlsx.Workbook;
    static saveAsync(grid: wjcGrid.FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string, onSaved?: (base64: string) => any, onError?: (reason?: any) => any): wjcXlsx.Workbook;
    static load(grid: wjcGrid.FlexGrid, workbook: any, options?: IFlexGridXlsxOptions): void;
    static loadAsync(grid: wjcGrid.FlexGrid, workbook: any, options?: IFlexGridXlsxOptions, onLoaded?: (workbook: wjcXlsx.Workbook) => void, onError?: (reason?: any) => any): void;
    private static _saveFlexGridToWorkbook(grid, options?);
    private static _loadToFlexGrid(grid, workbook, options);
    private static _parseFlexGridRowToSheetRow(panel, workbookRow, rowIndex, startColIndex, columnSettings, includeCellStyles, fakeCell, cellsCache, isGroupRow, groupLevel, includeColumns, formatItem?);
    static _parseCellStyle(cellStyle: any, isTableStyle?: boolean): wjcXlsx.IWorkbookStyle;
    private static _parseBorder(cellStyle, isTableBorder);
    private static _parseEgdeBorder(cellStyle, edge);
    static _parseBorderStyle(borderStyle: wjcXlsx.BorderStyle, edge: string, cellStyle: any): void;
    private static _parseToExcelFontFamily(fontFamily);
    private static _parseToExcelFormula(formula, isDate);
    private static _parseToTextRuns(value);
    private static _parseToTextRunFont(style);
    static _getMeasureCell(panel: wjcGrid.GridPanel, colIndex: number, patternCell: HTMLDivElement, cellsCache: _CellsCache): HTMLDivElement;
    private static _getColumnSetting(column, colIndex, columns);
    private static _toExcelHAlign(value);
    private static _getColumnCount(sheetData);
    private static _getRowCount(sheetData, columnCnt);
    private static _numAlpha(i);
    private static _getItemType(item);
    private static _setColumn(columns, columnIndex, item);
    private static _getItemValue(item);
    static _getCellStyle(panel: wjcGrid.GridPanel, fakeCell: HTMLDivElement, r: number, c: number): any;
    private static _parseTextRunsToHTML(textRuns);
    private static _extend(dst, src);
    private static _checkParentCollapsed(groupCollapsedSettings, groupLevel);
    private static _getColSpan(p, mergedRange, includeColumns);
    private static _getColumnRenderWidth(colIndex, columns);
    private static _getMergedRange(row, col, mergeCells);
}
export declare class XlsxFormatItemEventArgs extends wjcGrid.CellRangeEventArgs {
    private _cell;
    private _patternCell;
    private _xlsxCell;
    private _cellsCache;
    constructor(panel: wjcGrid.GridPanel, rng: wjcGrid.CellRange, cell: HTMLDivElement, patternCell: HTMLDivElement, cellsCache: _CellsCache, xlsxCell: wjcXlsx.IWorkbookCell);
    readonly cell: HTMLElement;
    xlsxCell: wjcXlsx.IWorkbookCell;
    getFormattedCell(): HTMLElement;
}
export interface IExtendedSheetInfo {
    name: string;
    visible: boolean;
    styledCells: any;
    mergedRanges: wjcGrid.CellRange[];
    fonts: string[];
    tables: wjcXlsx.WorkbookTable[];
    evaluateFormula?: Function;
}
export interface IFlexGridXlsxOptions {
    sheetIndex?: number;
    sheetName?: string;
    sheetVisible?: boolean;
    includeColumnHeaders?: boolean;
    includeRowHeaders?: boolean;
    includeCellStyles?: boolean;
    activeWorksheet?: any;
    includeColumns?: (column: wjcGrid.Column) => boolean;
    formatItem?: (args: XlsxFormatItemEventArgs) => void;
}
export declare type _CellsCache = HTMLDivElement[][];
