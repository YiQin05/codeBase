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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])};return function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcGridGrouppanel=require("wijmo/wijmo.grid.grouppanel"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.webcomponents.grid.grouppanel"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.grid=__glob.wijmo.webcomponents.grid||{},__glob.wijmo.webcomponents.grid.grouppanel=wjcSelf;var _wj_ns_exists_11=!0,WjcGroupPanel=function(e){function o(){var o=e.call(this,document.createElement("div"))||this;return o._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(o),o}return __extends(o,e),Object.defineProperty(o,"observedAttributes",{get:function(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),o.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},o.prototype.attributeChangedCallback=function(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)},o.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},o.prototype.addEventListener=function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];"string"==typeof o[0]?HTMLElement.prototype.addEventListener.apply(this,o):e.prototype.addEventListener.apply(this,o)},o}(wjcGridGrouppanel.GroupPanel);exports.WjcGroupPanel=WjcGroupPanel,_wj_ns_exists_11&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-group-panel",WjcGroupPanel);