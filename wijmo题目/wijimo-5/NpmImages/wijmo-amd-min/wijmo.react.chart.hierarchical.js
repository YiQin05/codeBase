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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.hierarchical","wijmo/wijmo.react.chart.hierarchical"],function(t,e,r,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window?window:self,a=i||e;n.wijmo=n.wijmo||{},n.wijmo.react=n.wijmo.react||{},n.wijmo.react.chart=n.wijmo.react.chart||{},n.wijmo.react.chart.hierarchical=a;var c=function(t){function e(e){return t.call(this,e,o.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}return __extends(e,t),e}(r.ComponentBase);e.Sunburst=c;var s=function(t){function e(e){return t.call(this,e,o.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})||this}return __extends(e,t),e}(r.ComponentBase);e.TreeMap=s});