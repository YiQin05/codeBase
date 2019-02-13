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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.annotation","wijmo/wijmo.react.chart.annotation"],function(t,n,o,e,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,a=r||n;i.wijmo=i.wijmo||{},i.wijmo.react=i.wijmo.react||{},i.wijmo.react.chart=i.wijmo.react.chart||{},i.wijmo.react.chart.annotation=a;var c=function(t){function n(n){var o=t.call(this,n,e.AnnotationLayer)||this;return o._parentInCtor=!0,o}return __extends(n,t),n}(o.ComponentBase);n.FlexChartAnnotationLayer=c;var s=function(t){function n(n){var o=t.call(this,n,null,{objectProps:["point","offset","style","start","end"]})||this;return o._parentProp="items",o}return __extends(n,t),n.prototype._createControl=function(){return new e[this.props.type]},n}(o.ComponentBase);n.FlexChartAnnotation=s});