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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid","wijmo/wijmo.vue2.grid","vue","vue"],function(e,t,o,n,r,i,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s="undefined"!=typeof window?window:self,a=r||t;s.wijmo=s.wijmo||{},s.wijmo.vue2=s.wijmo.vue2||{},s.wijmo.vue2.grid=a,t.Vue=i.default||u;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-grid",t.className="wijmo.grid.FlexGrid",t.classCtor=function(){return n.FlexGrid},t}(o.WjComponentBehavior);t.WjFlexGrid=l.register();var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._initParent=function(){var t=this.parent.control;t.autoGenerateColumns&&(t.autoGenerateColumns=!1,t.columns.clear()),e.prototype._initParent.call(this)},t.tag="wj-flex-grid-column",t.className="wijmo.grid.Column",t.parentProp="columns",t.classCtor=function(){return n.Column},t}(o.WjComponentBehavior);t.WjFlexGridColumn=c.register()});