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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();define(["require","exports","wijmo/wijmo","wijmo/wijmo.odata"],function(t,e,r,i){"use strict";function n(){var t;return(t=a.wijmo)&&t.grid}function o(){var t,e;return(t=a.wijmo)&&(e=t.grid)&&e.filter}Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window?window:self,s=i||e;a.wijmo=a.wijmo||{},a.wijmo.odata=s;var u=function(t){function e(e,i,n){var o=t.call(this)||this;return o._count=0,o._sortOnServer=!0,o._pageOnServer=!0,o._filterOnServer=!0,o._showDatesAsGmt=!1,o._inferDataTypes=!0,o._reviverBnd=o._reviver.bind(o),o.loading=new r.Event,o.loaded=new r.Event,o.error=new r.Event,o._url=r.asString(e,!1),o._tbl=r.asString(i),n&&r.copy(o,n),o.sortDescriptions.collectionChanged.addHandler(function(){o.sortOnServer&&o._getData()}),o._getData(),o}return __extends(e,t),Object.defineProperty(e.prototype,"tableName",{get:function(){return this._tbl},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fields",{get:function(){return this._fields},set:function(t){this._fields!=t&&(this._fields=r.asArray(t),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"requestHeaders",{get:function(){return this._requestHeaders},set:function(t){this._requestHeaders=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keys",{get:function(){return this._keys},set:function(t){this._keys=r.asArray(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expand",{get:function(){return this._expand},set:function(t){this._expand=r.asString(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"jsonReviver",{get:function(){return this._jsonReviver},set:function(t){this._jsonReviver=r.asFunction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataTypes",{get:function(){return this._dataTypes},set:function(t){this._dataTypes=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inferDataTypes",{get:function(){return this._inferDataTypes},set:function(t){t!=this.inferDataTypes&&(this._inferDataTypes=r.asBoolean(t),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showDatesAsGmt",{get:function(){return this._showDatesAsGmt},set:function(t){t!=this.showDatesAsGmt&&(this._showDatesAsGmt=r.asBoolean(t),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sortOnServer",{get:function(){return this._sortOnServer},set:function(t){t!=this._sortOnServer&&(this._sortOnServer=r.asBoolean(t),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageOnServer",{get:function(){return this._pageOnServer},set:function(t){t!=this._pageOnServer&&(this._pageOnServer=r.asBoolean(t),this.pageSize&&this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterOnServer",{get:function(){return this._filterOnServer},set:function(t){t!=this._filterOnServer&&(this._filterOnServer=r.asBoolean(t),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterDefinition",{get:function(){return this._filterDef},set:function(t){t!=this._filterDef&&(this._filterDef=r.asString(t),this._getData())},enumerable:!0,configurable:!0}),e.prototype.updateFilterDefinition=function(t){this.filterOnServer&&n()&&o()&&t instanceof o().FlexGridFilter&&(this.filterDefinition=this._asODataFilter(t))},Object.defineProperty(e.prototype,"oDataVersion",{get:function(){return this._odv},set:function(t){this._odv=r.asNumber(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLoading",{get:function(){return this._loading},enumerable:!0,configurable:!0}),e.prototype.onLoading=function(t){this.loading.raise(this,t)},e.prototype.onLoaded=function(t){this.loaded.raise(this,t)},e.prototype.load=function(){this._getData()},e.prototype.onError=function(t){return this.error.raise(this,t),!t.cancel},e.prototype.commitNew=function(){var e=this,i={Accept:"application/json"};if(this.requestHeaders)for(var n in this.requestHeaders)i[n]=this.requestHeaders[n];var o=this.currentAddItem;if(o){var a=this._getWriteUrl();r.httpRequest(a,{method:"POST",requestHeaders:i,data:this._convertToDbFormat(o),success:function(t){var r=JSON.parse(t.responseText,e._reviverBnd);e.keys.forEach(function(t){o[t]=r[t]}),e.refresh()},error:this._error.bind(this)})}t.prototype.commitNew.call(this)},e.prototype.commitEdit=function(){var e=this.currentEditItem;if(e&&!this.currentAddItem&&!this._sameContent(e,this._edtClone)){var i=this._getWriteUrl(this._edtClone);r.httpRequest(i,{method:"PUT",requestHeaders:this.requestHeaders,data:this._convertToDbFormat(e),error:this._error.bind(this)})}t.prototype.commitEdit.call(this)},e.prototype.remove=function(e){if(e&&e!=this.currentAddItem&&this.items.indexOf(e)>-1){var i=this._getWriteUrl(e);r.httpRequest(i,{method:"DELETE",requestHeaders:this.requestHeaders,error:this._error.bind(this)})}t.prototype.remove.call(this,e)},Object.defineProperty(e.prototype,"totalItemCount",{get:function(){return this._count},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageCount",{get:function(){return this.pageSize?Math.ceil(this.totalItemCount/this.pageSize):1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageSize",{get:function(){return this._pgSz},set:function(t){t!=this._pgSz&&(this._pgSz=r.asInt(t),this.pageOnServer?(this._pgIdx=r.clamp(this._pgIdx,0,this.pageCount-1),this._getData()):this.refresh())},enumerable:!0,configurable:!0}),e.prototype.onPageChanging=function(e){return t.prototype.onPageChanging.call(this,e),!e.cancel&&this.pageOnServer&&this._getData(),!e.cancel},e.prototype._getPageView=function(){return this.pageOnServer?this._view:t.prototype._getPageView.call(this)},e.prototype._performRefresh=function(){var e=this._canFilter,r=this._canSort;this._canFilter=!this._filterOnServer,this._canSort=!this._sortOnServer,t.prototype._performRefresh.call(this),this._canFilter=e,this._canSort=r},e.prototype._storeItems=function(t,e){e?Array.prototype.push.apply(this.sourceCollection,t):this.sourceCollection=t},e.prototype._getReadUrl=function(t){var e=this._url;return"/"!=e[e.length-1]&&(e+="/"),t?e=0==t.indexOf("http")?t:e+t:this._tbl&&(e+=this._tbl),e},e.prototype._getReadParams=function(t){var e={$format:"json"};if(this._tbl&&!t){if(this._odv<4?e.$inlinecount="allpages":e.$count=!0,this.fields&&(e.$select=this.fields.join(",")),this.expand&&(e.$expand=this.expand),this.sortOnServer&&this.sortDescriptions.length){for(var r="",i=0;i<this.sortDescriptions.length;i++){var n=this.sortDescriptions[i];r&&(r+=","),r+=n.property,n.ascending||(r+=" desc")}e.$orderby=r}this.pageOnServer&&this.pageSize>0&&(e.$skip=this.pageIndex*this.pageSize,e.$top=this.pageSize),this.filterDefinition&&(e.$filter=this.filterDefinition)}return e},e.prototype._getData=function(t,e){var i=this;this._toGetData&&clearTimeout(this._toGetData),this._toGetData=setTimeout(function(){if(null!=i._odv){i._loading=!0,i.onLoading();var n=r.httpRequest(i._getReadUrl(t),{requestHeaders:i.requestHeaders,data:i._getReadParams(t),success:function(e){var r=JSON.parse(e.responseText,i._reviverBnd),n=r.d?r.d.results:r.value,o=r.d?r.d.__count:r["odata.count"]||r["@odata.count"];if(null!=o&&(i._count=parseInt(o)),i.pageIndex>0&&i.pageIndex>=i.pageCount){var a=i.pageIndex;if(i.moveToLastPage(),i.pageIndex!=a)return}t||i.inferDataTypes&&!i._dataTypesInferred&&(i._dataTypesInferred=i._getInferredDataTypes(n));var s=i.dataTypes?i.dataTypes:i._dataTypesInferred;if(s)for(var u=0;u<n.length;u++)i._convertItem(s,n[u]);i._storeItems(n,null!=t),i.refresh(),(t=r.d?r.d.__next:r["odata.nextLink"]||r["@odata.nextLink"])?i._getData(t):(i._loading=!1,i.onLoaded())},error:function(t){if(i._loading=!1,i.onLoaded(),i.onError(new r.RequestErrorEventArgs(t)))throw"HttpRequest Error: "+t.status+" "+t.statusText}});r.isFunction(e)&&e(n)}else i._getSchema()},100)},e.prototype._convertToDbFormat=function(t){var e={};for(var i in t){var n=t[i];r.isDate(n)&&this._showDatesAsGmt?n=new Date(n.getTime()-6e4*n.getTimezoneOffset()):r.isNumber(n)&&this._odv<4&&(n=n.toString()),e[i]=n}return e},e.prototype._reviver=function(t,i){return"string"==typeof i&&e._rxDate.test(i)&&(i=0==i.indexOf("/Date(")?new Date(parseInt(i.substr(6))):new Date(i),r.isDate(i)&&this._showDatesAsGmt&&(i=new Date(i.getTime()+6e4*i.getTimezoneOffset()))),this._jsonReviver?this._jsonReviver(t,i):i},e.prototype._convertItem=function(t,e){for(var i in t){var n=t[i],o=e[i];null!=o&&(o=n==r.DataType.Date&&r.isString(o)&&0==o.indexOf("/Date(")?new Date(parseInt(o.substr(6))):r.changeType(o,n,null),r.isDate(o)&&this._showDatesAsGmt&&(o=new Date(o.getTime()+6e4*o.getTimezoneOffset())),e[i]=o)}},e.prototype._getInferredDataTypes=function(t){var i=null;if(t.length>0){for(var n={},o=0;o<t.length&&o<10;o++)this._extend(n,t[o]);for(var a in n){var s=n[a];r.isString(s)&&e._rxDate.test(s)&&(i||(i={}),i[a]=r.DataType.Date)}}return i},e.prototype._getServiceUrl=function(){var t=this._url;return"/"!=t[t.length-1]&&(t+="/"),t},e.prototype._getSchema=function(){var t=this,i=this._getServiceUrl()+"$metadata",n=e._odvCache;this._odv=n[i],this._odv?this._getData():r.httpRequest(i,{requestHeaders:this.requestHeaders,success:function(e){var r=e.responseText.match(/<.*Version\s*=\s*"([0-9.]+)"/),o=r?parseFloat(r[1]):4;n[i]=t._odv=o},error:function(e){n[i]=t._odv=4},complete:function(e){t._getData()}})},e.prototype._getWriteUrl=function(t){var e=this._getServiceUrl();if(e+=this._tbl,t){r.assert(this.keys&&this.keys.length>0,"write operations require keys.");var i=[];this.keys.forEach(function(e){r.assert(null!=t[e],"key values cannot be null."),i.push(e+"="+t[e])}),e+="("+i.join(",")+")"}return e},e.prototype._asODataFilter=function(t){for(var e="",r=0;r<t.grid.columns.length;r++){var i=t.grid.columns[r],n=t.getColumnFilter(i,!1);n&&n.isActive&&(e&&(e+=" and "),n.conditionFilter&&n.conditionFilter.isActive?e+=this._asODataConditionFilter(n.conditionFilter):n.valueFilter&&n.valueFilter.isActive&&(e+=this._asODataValueFilter(n.valueFilter)))}return e},e.prototype._asODataValueFilter=function(t){var e=t.column,i=e.binding,n=e.dataMap,o=(t._getUniqueValues(e,!1),"");for(var a in t.showValues){var s=r.changeType(a,e.dataType,e.format);n&&r.isString(s)&&(s=n.getKeyValue(s)),o&&(o+=" or "),o+=this._asEquals(i,s,e.dataType)}return o.length&&(o="("+o+")"),o},e.prototype._asEquals=function(t,e,i){return i==r.DataType.Date?"("+t+" ge "+this._asODataValue(e,i)+" and "+t+" lt "+this._asODataValue(r.DateTime.addDays(e,1),i)+")":"("+t+" eq "+this._asODataValue(e,i)+")"},e.prototype._asODataConditionFilter=function(t){var e=this._asODataCondition(t,t.condition1),r=this._asODataCondition(t,t.condition2);return e&&r?"("+e+(t.and?" and ":" or ")+r+")":e?"("+e+")":r?"("+r+")":null},e.prototype._asODataCondition=function(t,e){var r=t.column.binding,i=this._asODataValue(e.value,t.column.dataType);switch(e.operator){case 0:return this._asEquals(r,e.value,t.column.dataType);case 1:return r+" ne "+i;case 2:return r+" gt "+i;case 3:return r+" ge "+i;case 4:return r+" lt "+i;case 5:return r+" le "+i;case 6:return"startswith("+r+","+i+")";case 7:return"endswith("+r+","+i+")";case 8:return this._odv>=4?"contains("+r+","+i+")":"substringof("+i.toLowerCase()+", tolower("+r+"))";case 9:return this._odv>=4?"not contains("+r+","+i+")":"not substringof("+i.toLowerCase()+", tolower("+r+"))"}},e.prototype._asODataValue=function(t,e){return r.isDate(t)?(this._showDatesAsGmt&&(t=new Date(t.getTime()-6e4*t.getTimezoneOffset())),t=t.toJSON(),this._odv<4&&(t="datetime'"+t.substr(0,10)+"'"),t):r.isString(t)?"'"+t.replace(/'/g,"''")+"'":null!=t?t.toString():e==r.DataType.String?"''":null},e.prototype._error=function(t){if(this.onError(new r.RequestErrorEventArgs(t)))throw this._getData(),"HttpRequest Error: "+t.status+" "+t.statusText},e._odvCache={},e._rxDate=/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}|\/Date\([\d\-]*?\)/,e}(r.CollectionView);e.ODataCollectionView=u;var p=function(t){function e(e,r,i){var n=this;return null==i&&(i={}),i.pageOnServer=!0,i.sortOnServer=!0,i.canGroup=!1,i.pageSize||(i.pageSize=100),n=t.call(this,e,r,i)||this,n._data=[],n.sourceCollection=n._data,n._skip=0,n.setWindow(0,n.pageSize),n}return __extends(e,t),e.prototype.setWindow=function(t,e){var r=this;this._toSetWindow&&clearTimeout(this._toSetWindow),this._toSetWindow=setTimeout(function(){r._toSetWindow=null,r._performSetWindow(t,e)},50)},Object.defineProperty(e.prototype,"pageOnServer",{get:function(){return!0},set:function(t){if(!t)throw"ODataVirtualCollectionView requires pageOnServer = true."},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sortOnServer",{get:function(){return!0},set:function(t){if(!r.asBoolean(t))throw"ODataVirtualCollectionView requires sortOnServer = true."},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterOnServer",{get:function(){return!0},set:function(t){if(!r.asBoolean(t))throw"ODataVirtualCollectionView requires filterOnServer = true."},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canGroup",{get:function(){return this._canGroup},set:function(t){if(r.asBoolean(t))throw"ODataVirtualCollectionView does not support grouping."},enumerable:!0,configurable:!0}),e.prototype._performRefresh=function(){this.isLoading||(this._refresh=!0),t.prototype._performRefresh.call(this)},e.prototype._getReadParams=function(e){var r=t.prototype._getReadParams.call(this,e);return e||(r.$skip=this._skip||0,r.$top=this.pageSize),r},e.prototype._storeItems=function(t,e){if(this._refresh||this._data.length!=this.totalItemCount){this._data.length=this.totalItemCount;for(i=0;i<this._data.length;i++)this._data[i]=null;this._refresh=!1}e||(this.currentPosition<0&&this.moveCurrentToFirst(),this._loadOffset=0);for(var r=this._loadOffset+(this._skip||0),i=0;i<t.length;i++)this._data[i+r]=t[i];this._loadOffset+=t.length},e.prototype._performSetWindow=function(t,e){var i=this;this._pendingRequest&&(this._pendingRequest.abort(),this._pendingRequest=null),t=r.asInt(t),e=r.asInt(e),r.assert(e>=t,"Start must be smaller than end.");var n=r.isNumber(this._start)&&t>this._start;this._start=t,this._end=e;for(var o=!1,a=t;a<e&&a<this._data.length&&!o;a++)o=null==this._data[a];if(o){for(var s=Math.max(0,n?t:e-this.pageSize),a=s;a<this._data.length&&null!=this._data[a];a++)s++;this._skip=s,this._getData(null,function(t){i._pendingRequest=t})}},e}(u);e.ODataVirtualCollectionView=p});