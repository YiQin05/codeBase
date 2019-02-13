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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.analytics","wijmo/wijmo.react.chart.analytics"],function(e,t,r,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof window?window:self,o=s||t;n.wijmo=n.wijmo||{},n.wijmo.react=n.wijmo.react||{},n.wijmo.react.chart=n.wijmo.react.chart||{},n.wijmo.react.chart.analytics=o;var a=function(e){function t(t){var r=e.call(this,t,i.TrendLine,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartTrendLine=a;var l=function(e){function t(t){var r=e.call(this,t,i.MovingAverage,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartMovingAverage=l;var c=function(e){function t(t){var r=e.call(this,t,i.YFunctionSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartYFunctionSeries=c;var u=function(e){function t(t){var r=e.call(this,t,i.ParametricFunctionSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartParametricFunctionSeries=u;var y=function(e){function t(t){var r=e.call(this,t,i.Waterfall,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","intermediateTotalPositions","intermediateTotalLabels","styles"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartWaterfall=y;var _=function(e){function t(t){var r=e.call(this,t,i.BoxWhisker,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","meanLineStyle","meanMarkerStyle"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartBoxWhisker=_;var p=function(e){function t(t){var r=e.call(this,t,i.ErrorBar,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","errorBarStyle","value"]})||this;return r._parentProp="series",r._siblingId="series",r}return __extends(t,e),t}(r.ComponentBase);t.FlexChartErrorBar=p});