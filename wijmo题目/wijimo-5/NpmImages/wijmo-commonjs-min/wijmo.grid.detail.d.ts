import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcSelfRef from 'wijmo/wijmo.grid.detail';
export declare enum KeyAction {
    None = 0,
    ToggleDetail = 1,
}
export declare enum DetailVisibilityMode {
    Code = 0,
    Selection = 1,
    ExpandSingle = 2,
    ExpandMulti = 3,
}
export declare class FlexGridDetailProvider {
    static _WJC_DETAIL: string;
    _g: wjcGrid.FlexGrid;
    _maxHeight: number;
    _mode: wjcSelfRef.DetailVisibilityMode;
    _animated: boolean;
    _toSel: any;
    _createDetailCellFn: Function;
    _disposeDetailCellFn: Function;
    _rowHasDetailFn: Function;
    _keyActionEnter: wjcSelfRef.KeyAction;
    constructor(grid: wjcGrid.FlexGrid, options?: any);
    readonly grid: wjcGrid.FlexGrid;
    detailVisibilityMode: DetailVisibilityMode;
    maxHeight: number;
    isAnimated: boolean;
    keyActionEnter: KeyAction;
    createDetailCell: Function;
    disposeDetailCell: Function;
    rowHasDetail: Function;
    getDetailRow(row: any): DetailRow;
    isDetailVisible(row: any): boolean;
    isDetailAvailable(row: any): boolean;
    hideDetail(row?: any): void;
    showDetail(row: any, hideOthers?: boolean): void;
    _handleFixedCells(): void;
    _toIndex(row: any): number;
    _hdrClick(e: MouseEvent): void;
    _toggleRowDetail(row: number): boolean;
    _selectionChanged(s: wjcGrid.FlexGrid, e: wjcCore.EventArgs): void;
    _formatItem(s: any, e: wjcGrid.FormatItemEventArgs): void;
    _resizedRow(s: any, e: wjcGrid.CellRangeEventArgs): void;
    _hasDetail(row: number): boolean;
    _isRegularRow(row: wjcGrid.Row): boolean;
    _createDetailCell(row: wjcGrid.Row, col?: wjcGrid.Column): HTMLElement;
}
export declare class DetailMergeManager extends wjcGrid.MergeManager {
    constructor(grid: wjcGrid.FlexGrid);
    getMergedRange(p: wjcGrid.GridPanel, r: number, c: number, clip?: boolean): wjcGrid.CellRange;
}
export declare class DetailRow extends wjcGrid.Row {
    _detail: HTMLElement;
    constructor(parentRow: wjcGrid.Row);
    detail: HTMLElement;
}
