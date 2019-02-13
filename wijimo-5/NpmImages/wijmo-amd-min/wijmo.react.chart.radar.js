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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.radar","wijmo/wijmo.react.chart.radar"],function(e,t,r,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof window?window:self,i=a||t;n.wijmo=n.wijmo||{},n.wijmo.react=n.wijmo.react||{},n.wijmo.react.chart=n.wijmo.react.chart||{},n.wijmo.react.chart.radar=i;var s=function(e){function t(t){return e.call(this,t,o.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return __extends(t,e),t}(r.ComponentBase);t.FlexRadar=s;var c=function(e){function t(t){var r=e.call(this,t,o.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]})||this;return r._parentProp="axes",r}return __extends(t,e),t}(r.ComponentBase);t.FlexRadarAxis=c;var l=function(e){function t(t){var r=e.call(this,t,o.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexRadarSeries=l});