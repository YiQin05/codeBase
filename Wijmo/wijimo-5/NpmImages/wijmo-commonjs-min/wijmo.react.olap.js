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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcOlap=require("wijmo/wijmo.olap"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.olap"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.olap=wjcSelf;var PivotGrid=function(e){function t(t){return e.call(this,t,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.PivotGrid=PivotGrid;var PivotChart=function(e){function t(t){return e.call(this,t,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.PivotChart=PivotChart;var PivotPanel=function(e){function t(t){return e.call(this,t,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.PivotPanel=PivotPanel;var Slicer=function(e){function t(t){return e.call(this,t,wjcOlap.Slicer,{objectProps:["field"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.Slicer=Slicer;var Wj=wjcReactBase;