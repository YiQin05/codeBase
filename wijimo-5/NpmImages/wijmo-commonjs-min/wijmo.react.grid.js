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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcGrid=require("wijmo/wijmo.grid"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.grid"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=wjcSelf;var FlexGrid=function(e){function t(t){return e.call(this,t,wjcGrid.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(t,e),t}(wjcReactBase.ComponentBase);exports.FlexGrid=FlexGrid;var FlexGridColumn=function(e){function t(t){var r=e.call(this,t,wjcGrid.Column,{objectProps:["dataMap"]})||this;return r._parentProp="columns",r}return __extends(t,e),t.prototype._initParent=function(){var t=this.parent.control;t.autoGenerateColumns&&(t.autoGenerateColumns=!1,t.columns.clear()),e.prototype._initParent.call(this)},t}(wjcReactBase.ComponentBase);exports.FlexGridColumn=FlexGridColumn;var Wj=wjcReactBase;