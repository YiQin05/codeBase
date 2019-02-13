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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.olap","wijmo/wijmo.react.olap"],function(t,e,o,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,c=r||e;i.wijmo=i.wijmo||{},i.wijmo.react=i.wijmo.react||{},i.wijmo.react.olap=c;var a=function(t){function e(e){return t.call(this,e,n.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(e,t),e}(o.ComponentBase);e.PivotGrid=a;var s=function(t){function e(e){return t.call(this,e,n.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})||this}return __extends(e,t),e}(o.ComponentBase);e.PivotChart=s;var u=function(t){function e(e){return t.call(this,e,n.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return __extends(e,t),e}(o.ComponentBase);e.PivotPanel=u;var l=function(t){function e(e){return t.call(this,e,n.Slicer,{objectProps:["field"]})||this}return __extends(e,t),e}(o.ComponentBase);e.Slicer=l});