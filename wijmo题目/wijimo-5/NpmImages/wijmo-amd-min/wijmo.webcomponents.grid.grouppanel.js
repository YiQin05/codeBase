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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.webcomponents.base","wijmo/wijmo.grid.grouppanel","wijmo/wijmo.webcomponents.grid.grouppanel"],function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,p=r||t;i.wijmo=i.wijmo||{},i.wijmo.webcomponents=i.wijmo.webcomponents||{},i.wijmo.webcomponents.grid=i.wijmo.webcomponents.grid||{},i.wijmo.webcomponents.grid.grouppanel=p;var a=function(e){function t(){var t=e.call(this,document.createElement("div"))||this;return t._wjBehaviour=o.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return o.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)},t}(n.GroupPanel);t.WjcGroupPanel=a,o.WjComponentBehavior.register("wjc-group-panel",a)});