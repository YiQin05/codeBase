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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])};return function(r,t){function a(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartRadar=require("wijmo/wijmo.chart.radar"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.chart.radar"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.radar=wjcSelf;var FlexRadar=function(e){function r(r){return e.call(this,r,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})||this}return __extends(r,e),r}(wjcReactBase.ComponentBase);exports.FlexRadar=FlexRadar;var FlexRadarAxis=function(e){function r(r){var t=e.call(this,r,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]})||this;return t._parentProp="axes",t}return __extends(r,e),r}(wjcReactBase.ComponentBase);exports.FlexRadarAxis=FlexRadarAxis;var FlexRadarSeries=function(e){function r(r){var t=e.call(this,r,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]})||this;return t._parentProp="series",t._siblingId="series",t}return __extends(r,e),r}(wjcReactBase.ComponentBase);exports.FlexRadarSeries=FlexRadarSeries;var Wj=wjcReactBase;