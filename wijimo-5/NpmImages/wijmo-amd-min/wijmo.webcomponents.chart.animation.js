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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.webcomponents.base","wijmo/wijmo.chart.animation","wijmo/wijmo.webcomponents.chart.animation"],function(t,e,o,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof window?window:self,a=i||e;r.wijmo=r.wijmo||{},r.wijmo.webcomponents=r.wijmo.webcomponents||{},r.wijmo.webcomponents.chart=r.wijmo.webcomponents.chart||{},r.wijmo.webcomponents.chart.animation=a;var c=function(t){function e(){var e=t.call(this)||this;return e._wjBehaviour=o.WjComponentBehavior._attach(e),e}return __extends(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return o.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()},e.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)},e.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()},e.wrappedClass=function(){return n.ChartAnimation},e.parentInCtor=!0,e}(HTMLElement);e.WjcFlexChartAnimation=c,o.WjComponentBehavior.register("wjc-flex-chart-animation",c)});