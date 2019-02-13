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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.olap","wijmo/wijmo.vue2.olap","vue","vue"],function(t,e,o,n,r,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u="undefined"!=typeof window?window:self,s=r||e;u.wijmo=u.wijmo||{},u.wijmo.vue2=u.wijmo.vue2||{},u.wijmo.vue2.olap=s,e.Vue=i.default||a;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-pivot-grid",e.className="wijmo.olap.PivotGrid",e.classCtor=function(){return n.PivotGrid},e}(o.WjComponentBehavior);e.WjPivotGrid=l.register();var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-pivot-chart",e.className="wijmo.olap.PivotChart",e.classCtor=function(){return n.PivotChart},e}(o.WjComponentBehavior);e.WjPivotChart=c.register();var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-pivot-panel",e.className="wijmo.olap.PivotPanel",e.classCtor=function(){return n.PivotPanel},e}(o.WjComponentBehavior);e.WjPivotPanel=p.register();var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-slicer",e.className="wijmo.olap.Slicer",e.classCtor=function(){return n.Slicer},e}(o.WjComponentBehavior);e.WjSlicer=v.register()});