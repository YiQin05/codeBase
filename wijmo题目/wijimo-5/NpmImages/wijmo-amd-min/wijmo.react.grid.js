/*
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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.grid","wijmo/wijmo.react.grid"],function(t,e,o,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,a=n||e;i.wijmo=i.wijmo||{},i.wijmo.react=i.wijmo.react||{},i.wijmo.react.grid=a;var c=function(t){function e(e){return t.call(this,e,r.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(e,t),e}(o.ComponentBase);e.FlexGrid=c;var s=function(t){function e(e){var o=t.call(this,e,r.Column,{objectProps:["dataMap"]})||this;return o._parentProp="columns",o}return __extends(e,t),e.prototype._initParent=function(){var e=this.parent.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear()),t.prototype._initParent.call(this)},e}(o.ComponentBase);e.FlexGridColumn=s});