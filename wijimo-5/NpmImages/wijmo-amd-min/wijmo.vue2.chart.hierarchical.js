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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.chart.hierarchical","wijmo/wijmo.vue2.chart.hierarchical","vue","vue"],function(t,e,o,n,r,a,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c="undefined"!=typeof window?window:self,u=r||e;c.wijmo=c.wijmo||{},c.wijmo.vue2=c.wijmo.vue2||{},c.wijmo.vue2.chart=c.wijmo.vue2.chart||{},c.wijmo.vue2.chart.hierarchical=u,e.Vue=a.default||i;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._updateControl=function(e,o){switch(e){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:t.prototype._updateControl.call(this,e,o)}},e.tag="wj-sunburst",e.className="wijmo.chart.hierarchical.Sunburst",e.extraProps=["tooltipContent","labelContent"],e.classCtor=function(){return n.Sunburst},e}(o.WjComponentBehavior);e.WjSunburst=l.register();var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._updateControl=function(e,o){switch(e){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:t.prototype._updateControl.call(this,e,o)}},e.tag="wj-tree-map",e.className="wijmo.chart.hierarchical.TreeMap",e.extraProps=["tooltipContent","labelContent"],e.classCtor=function(){return n.TreeMap},e}(o.WjComponentBehavior);e.WjTreeMap=s.register()});