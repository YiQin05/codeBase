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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.chart.radar","wijmo/wijmo.vue2.chart.radar","vue","vue"],function(e,t,r,a,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s="undefined"!=typeof window?window:self,u=o||t;s.wijmo=s.wijmo||{},s.wijmo.vue2=s.wijmo.vue2||{},s.wijmo.vue2.chart=s.wijmo.vue2.chart||{},s.wijmo.vue2.chart.radar=u,t.Vue=n.default||i;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._updateControl=function(t,r){switch(t){case"tooltipContent":this.control.tooltip.content=r;break;case"labelContent":this.control.dataLabel.content=r;break;default:e.prototype._updateControl.call(this,t,r)}},t.tag="wj-flex-radar",t.className="wijmo.chart.radar.FlexRadar",t.extraProps=["tooltipContent","labelContent"],t.classCtor=function(){return a.FlexRadar},t}(r.WjComponentBehavior);t.WjFlexRadar=l.register();var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-radar-axis",t.className="wijmo.chart.radar.FlexRadarAxis",t.parentProp="axes",t.classCtor=function(){return a.FlexRadarAxis},t}(r.WjComponentBehavior);t.WjFlexRadarAxis=c.register();var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-flex-radar-series",t.className="wijmo.chart.radar.FlexRadarSeries",t.parentProp="series",t.siblingId="series",t.classCtor=function(){return a.FlexRadarSeries},t}(r.WjComponentBehavior);t.WjFlexRadarSeries=d.register()});