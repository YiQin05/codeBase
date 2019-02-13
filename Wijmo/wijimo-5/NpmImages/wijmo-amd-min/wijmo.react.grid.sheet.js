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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.grid.sheet","wijmo/wijmo.react.grid.sheet"],function(e,t,o,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof window?window:self,s=i||t;n.wijmo=n.wijmo||{},n.wijmo.react=n.wijmo.react||{},n.wijmo.react.grid=n.wijmo.react.grid||{},n.wijmo.react.grid.sheet=s;var c=function(e){function t(t){return e.call(this,t,r.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})||this}return __extends(t,e),t}(o.ComponentBase);t.FlexSheet=c;var a=function(e){function t(t){var o=e.call(this,t,r.Sheet,{objectProps:["itemsSource"]})||this;return o._parentProp="sheets",o}return __extends(t,e),t}(o.ComponentBase);t.Sheet=a});