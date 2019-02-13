﻿/*
    *
    * Wijmo Library 5.20183.550
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();define(["require","exports","wijmo/wijmo","wijmo/wijmo.grid","wijmo/wijmo.grid.detail"],function(e,t,i,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof window?window:self,l=o||t;r.wijmo=r.wijmo||{},r.wijmo.grid=r.wijmo.grid||{},r.wijmo.grid.detail=l,i._addCultureInfo("FlexGridDetailProvider",{ariaLabels:{toggleDetail:"Toggle Row Detail"}});var a;!function(e){e[e.None=0]="None",e[e.ToggleDetail=1]="ToggleDetail"}(a=t.KeyAction||(t.KeyAction={}));var s;!function(e){e[e.Code=0]="Code",e[e.Selection=1]="Selection",e[e.ExpandSingle=2]="ExpandSingle",e[e.ExpandMulti=3]="ExpandMulti"}(s=t.DetailVisibilityMode||(t.DetailVisibilityMode={}));var d=function(){function e(e,t){var n=this;this._mode=s.ExpandSingle,this._animated=!1,this._keyActionEnter=a.None,this._g=e,e.mergeManager=new c(e),e.rowHeaders.hostElement.addEventListener("click",this._hdrClick.bind(this)),e.rowHeaders.hostElement.addEventListener("mousedown",function(t){var i=e.editableCollectionView;(e.activeEditor||i&&i.currentEditItem)&&(n._hdrClick(t),t.preventDefault())}),e.formatItem.addHandler(this._formatItem,this),e.selectionChanged.addHandler(this._selectionChanged,this),e.resizedRow.addHandler(this._resizedRow,this),e.loadingRows.addHandler(function(){n.hideDetail()}),e.updatedView.addHandler(function(){n._handleFixedCells()}),e.draggingRow.addHandler(function(e,t){t.row<e.rows.length-1&&e.rows[t.row+1]instanceof h&&(t.cancel=!0,n.hideDetail(t.row))}),e.hostElement.addEventListener("keydown",function(e){if(e.keyCode==i.Key.Enter&&n._keyActionEnter==a.ToggleDetail){var t=n._g.selection.row;n._toggleRowDetail(t)&&e.preventDefault()}},!0),t&&i.copy(this,t)}return Object.defineProperty(e.prototype,"grid",{get:function(){return this._g},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"detailVisibilityMode",{get:function(){return this._mode},set:function(e){(e=i.asEnum(e,s))!=this._mode&&(this._mode=e,this.hideDetail(),this._g.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxHeight",{get:function(){return this._maxHeight},set:function(e){this._maxHeight=i.asNumber(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAnimated",{get:function(){return this._animated},set:function(e){e!=this._animated&&(this._animated=i.asBoolean(e))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyActionEnter",{get:function(){return this._keyActionEnter},set:function(e){this._keyActionEnter=i.asEnum(e,a)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"createDetailCell",{get:function(){return this._createDetailCellFn},set:function(e){this._createDetailCellFn=i.asFunction(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disposeDetailCell",{get:function(){return this._disposeDetailCellFn},set:function(e){this._disposeDetailCellFn=i.asFunction(e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowHasDetail",{get:function(){return this._rowHasDetailFn},set:function(e){this._rowHasDetailFn=i.asFunction(e,!0)},enumerable:!0,configurable:!0}),e.prototype.getDetailRow=function(e){e=this._toIndex(e);var t=this._g.rows;return t[e]instanceof h?t[e]:e<t.length-1&&t[e+1]instanceof h?t[e+1]:null},e.prototype.isDetailVisible=function(e){return null!=this.getDetailRow(e)},e.prototype.isDetailAvailable=function(e){return e=this._toIndex(e),this._hasDetail(e)},e.prototype.hideDetail=function(e){var t=this._g.rows;if(null!=e){!(t[e=this._toIndex(e)]instanceof h)&&e<t.length-1&&t[e+1]instanceof h&&e++;var n=t[e];n instanceof h&&(this.disposeDetailCell&&this.disposeDetailCell(n),i.Control.disposeAll(n.detail),t.removeAt(e))}else for(var o=0;o<t.length;o++)t[o]instanceof h&&this.hideDetail(o)},e.prototype.showDetail=function(e,t){void 0===t&&(t=!1);var n=this._g,o=n.rows;if((e=this._toIndex(e))>0&&o[e]instanceof h&&e--,t){for(var r=n.selection,l=!1,a=0;a<o.length-1;a++)a!=e&&o[a+1]instanceof h&&(this.hideDetail(a),a<e&&e--,a<r.row&&(r.row--,r.row2--,l=!0));l&&n.select(r,!1)}if(!this.isDetailVisible(e)&&this._hasDetail(e)){var s=new h(o[e]);if(s.detail=this._createDetailCell(o[e]),s.detail){o.insert(e+1,s),n.autoSizeRow(e+1);var d=this._maxHeight;if(i.isNumber(d)&&s.renderHeight>d&&(s.height=d),this._animated){var c=s.detail.style;c.transform="translateY(-100%)",c.opacity="0",i.animate(function(t){t<1?(c.transform="translateY("+(100*-(1-t)).toFixed(0)+"%)",c.opacity=(t*t).toString()):(c.transform="",c.opacity="",i.Control.invalidateAll(s.detail),n.scrollIntoView(e+1,-1))})}else n.scrollIntoView(e+1,-1,!0)}}},e.prototype._handleFixedCells=function(){var e=this._g,t=e.hostElement;if(e.frozenRows||e.frozenColumns){var o=i.Control.getControl(t.querySelector(".wj-flexgrid"));if(o instanceof n.FlexGrid&&(o.frozenRows||o.frozenColumns)){i.setCss([e._eTL,e._eBL,e._eCHdr,e._eCFtr,e._eRHdr,e._eMarquee],{zIndex:"6"});for(var r=e.hostElement.querySelectorAll(".wj-frozen"),l=0;l<r.length;l++){var a=r[l];if(i.closest(a,".wj-flexgrid")==e.hostElement){var s=parseInt(a.style.zIndex);a.style.zIndex=(s%3+3).toString()}}}}},e.prototype._toIndex=function(e){return e instanceof n.Row&&(e=e.index),i.asNumber(e,!1,!0)},e.prototype._hdrClick=function(t){if(!t.defaultPrevented&&0==t.button&&i.closestClass(t.target,e._WJC_DETAIL))switch(this._mode){case s.ExpandMulti:case s.ExpandSingle:var n=this._g,o=n.hitTest(t.target);o.panel||(o=n.hitTest(t)),o.panel&&this._toggleRowDetail(o.row)&&t.preventDefault()}},e.prototype._toggleRowDetail=function(e){if(e>-1){if(this.isDetailVisible(e))return this.hideDetail(e),!0;if(this._hasDetail(e)){var t=this._g;return t.select(new n.CellRange(e,0,e,t.columns.length-1)),this.showDetail(e,this._mode==s.ExpandSingle),!0}}return!1},e.prototype._selectionChanged=function(e,t){var i=this;this._mode==s.Selection&&(this._toSel&&clearTimeout(this._toSel),this._toSel=setTimeout(function(){e.selection.row>-1?i.showDetail(e.selection.row,!0):i.hideDetail()},300))},e.prototype._formatItem=function(t,n){var o=this._g,r=n.panel.rows[n.row];if(n.panel==o.cells&&r instanceof h&&null!=r.detail&&n.col==o.cells.columns.frozen)if(i.addClass(n.cell,"wj-detail"),n.cell.textContent="",n.cell.style.textAlign="",n.cell.appendChild(r.detail),null==r.height){i.Control.refreshAll(n.cell);var l=getComputedStyle(n.cell),a=parseInt(l.paddingTop)+parseInt(l.paddingBottom),d=r.detail.scrollHeight+a;this._maxHeight>0&&d>this._maxHeight&&(d=this._maxHeight),r.height=d,r.detail.style.height||(r.detail.style.height="100%");var c=r.detail.querySelector(".wj-flexgrid");c&&!c.style.height&&(c.style.height="100%")}else setTimeout(function(){i.Control.refreshAll(r.detail)});if(n.panel==o.rowHeaders&&0==n.col&&this._hasDetail(n.row))switch(n.cell.style.cursor="",this._mode){case s.ExpandMulti:case s.ExpandSingle:var u=n.cell,f=o.rows[n.row+1]instanceof h,g=f?"minus":"plus",p=e._WJC_DETAIL;u.innerHTML='<div class="wj-btn wj-btn-glyph '+p+'" role="button" tabindex="-1"><span class="wj-glyph-'+g+'"></span></div>';var _=u.children[0],w=i.culture.FlexGridDetailProvider.ariaLabels.toggleDetail;i.setAriaLabel(_,w),i.setAttribute(_,"aria-expanded",f)}},e.prototype._resizedRow=function(e,t){var n=t.panel.rows[t.row];n instanceof h&&n.detail&&i.Control.refreshAll(n.detail)},e.prototype._hasDetail=function(e){var t=this._g.rows[e];return i.isFunction(this._rowHasDetailFn)?this._rowHasDetailFn(t):this._isRegularRow(t)},e.prototype._isRegularRow=function(e){return!(e instanceof n.GroupRow||e instanceof n._NewRowTemplate)},e.prototype._createDetailCell=function(e,t){return this.createDetailCell?this.createDetailCell(e,t):null},e._WJC_DETAIL="wj-elem-detail",e}();t.FlexGridDetailProvider=d;var c=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype.getMergedRange=function(t,i,o,r){switch(void 0===r&&(r=!0),t.cellType){case n.CellType.Cell:if(t.rows[i]instanceof h){var l=t.columns,a=Math.min(l.length,l.frozen);return o<a?new n.CellRange(i,0,i,a-1):new n.CellRange(i,a,i,l.length-1)}break;case n.CellType.RowHeader:if(t.rows[i]instanceof h)return new n.CellRange(i-1,o,i,o);if(i<t.rows.length-1&&t.rows[i+1]instanceof h)return new n.CellRange(i,o,i+1,o)}return e.prototype.getMergedRange.call(this,t,i,o,r)},t}(n.MergeManager);t.DetailMergeManager=c;var h=function(e){function t(t){var i=e.call(this)||this;return i.isReadOnly=!0,i}return __extends(t,e),Object.defineProperty(t.prototype,"detail",{get:function(){return this._detail},set:function(e){this._detail=e},enumerable:!0,configurable:!0}),t}(n.Row);t.DetailRow=h});