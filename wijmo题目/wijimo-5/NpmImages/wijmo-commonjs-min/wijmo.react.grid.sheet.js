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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcGridSheet=require("wijmo/wijmo.grid.sheet"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.grid.sheet"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=__glob.wijmo.react.grid||{},__glob.wijmo.react.grid.sheet=wjcSelf;var FlexSheet=function(e){function t(t){return e.call(this,t,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.FlexSheet=FlexSheet;var Sheet=function(e){function t(t){var r=e.call(this,t,wjcGridSheet.Sheet,{objectProps:["itemsSource"]})||this;return r._parentProp="sheets",r}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.Sheet=Sheet;var Wj=wjcReactBase;