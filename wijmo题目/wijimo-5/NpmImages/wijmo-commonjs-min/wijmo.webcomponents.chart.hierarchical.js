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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.webcomponents.chart.hierarchical"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.hierarchical=wjcSelf;var _wj_ns_exists_5=!0,WjcSunburst=function(e){function t(){var t=e.call(this,document.createElement("div"))||this;return t._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)},t}(wjcChartHierarchical.Sunburst);exports.WjcSunburst=WjcSunburst,_wj_ns_exists_5&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-sunburst",WjcSunburst);var WjcTreeMap=function(e){function t(){var t=e.call(this,document.createElement("div"))||this;return t._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)},t}(wjcChartHierarchical.TreeMap);exports.WjcTreeMap=WjcTreeMap,_wj_ns_exists_5&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-tree-map",WjcTreeMap);