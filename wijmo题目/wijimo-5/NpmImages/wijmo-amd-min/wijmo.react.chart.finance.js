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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.finance","wijmo/wijmo.react.chart.finance"],function(e,t,n,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,a=o||t;i.wijmo=i.wijmo||{},i.wijmo.react=i.wijmo.react||{},i.wijmo.react.chart=i.wijmo.react.chart||{},i.wijmo.react.chart.finance=a;var c=function(e){function t(t){return e.call(this,t,r.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return __extends(t,e),t}(n.ComponentBase);t.FinancialChart=c;var s=function(e){function t(t){var n=e.call(this,t,r.FinancialSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return n._parentProp="series",n._siblingId="series",n}return __extends(t,e),t}(n.ComponentBase);t.FinancialChartSeries=s});