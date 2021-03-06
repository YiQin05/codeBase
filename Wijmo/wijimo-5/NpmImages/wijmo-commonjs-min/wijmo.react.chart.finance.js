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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartFinance=require("wijmo/wijmo.chart.finance"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.chart.finance"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.finance=wjcSelf;var FinancialChart=function(e){function t(t){return e.call(this,t,wjcChartFinance.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.FinancialChart=FinancialChart;var FinancialChartSeries=function(e){function t(t){var r=e.call(this,t,wjcChartFinance.FinancialSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.FinancialChartSeries=FinancialChartSeries;var Wj=wjcReactBase;