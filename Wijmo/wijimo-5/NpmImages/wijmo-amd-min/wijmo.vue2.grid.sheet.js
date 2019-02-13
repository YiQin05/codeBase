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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid.sheet","wijmo/wijmo.vue2.grid.sheet","vue","vue"],function(e,t,o,r,n,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u="undefined"!=typeof window?window:self,a=n||t;u.wijmo=u.wijmo||{},u.wijmo.vue2=u.wijmo.vue2||{},u.wijmo.vue2.grid=u.wijmo.vue2.grid||{},u.wijmo.vue2.grid.sheet=a,t.Vue=i.default||s;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-sheet",t.className="wijmo.grid.sheet.FlexSheet",t.classCtor=function(){return r.FlexSheet},t}(o.WjComponentBehavior);t.WjFlexSheet=c.register();var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-sheet",t.className="wijmo.grid.sheet.Sheet",t.parentProp="sheets",t.classCtor=function(){return r.Sheet},t}(o.WjComponentBehavior);t.WjSheet=h.register()});