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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.webcomponents.base","wijmo/wijmo.grid.filter","wijmo/wijmo.webcomponents.grid.filter"],function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,c=r||t;i.wijmo=i.wijmo||{},i.wijmo.webcomponents=i.wijmo.webcomponents||{},i.wijmo.webcomponents.grid=i.wijmo.webcomponents.grid||{},i.wijmo.webcomponents.grid.filter=c;var a=function(e){function t(){var t=e.call(this)||this;return t._wjBehaviour=o.WjComponentBehavior._attach(t),t}return __extends(t,e),Object.defineProperty(t,"observedAttributes",{get:function(){return o.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),t.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},t.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)},t.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},t.wrappedClass=function(){return n.FlexGridFilter},t.parentInCtor=!0,t}(HTMLElement);t.WjcFlexGridFilter=a,o.WjComponentBehavior.register("wjc-flex-grid-filter",a),o.WjComponentBehavior.register("",n.ColumnFilterEditor),o.WjComponentBehavior.register("",n.ConditionFilterEditor),o.WjComponentBehavior.register("",n.ValueFilterEditor)});