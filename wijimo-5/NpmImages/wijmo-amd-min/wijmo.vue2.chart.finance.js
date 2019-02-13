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
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.chart.finance","wijmo/wijmo.vue2.chart.finance","vue","vue"],function(t,e,n,o,i,r,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c="undefined"!=typeof window?window:self,s=i||e;c.wijmo=c.wijmo||{},c.wijmo.vue2=c.wijmo.vue2||{},c.wijmo.vue2.chart=c.wijmo.vue2.chart||{},c.wijmo.vue2.chart.finance=s,e.Vue=r.default||a;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype._updateControl=function(e,n){switch(e){case"tooltipContent":this.control.tooltip.content=n;break;case"labelContent":this.control.dataLabel.content=n;break;default:t.prototype._updateControl.call(this,e,n)}},e.tag="wj-financial-chart",e.className="wijmo.chart.finance.FinancialChart",e.extraProps=["tooltipContent","labelContent"],e.classCtor=function(){return o.FinancialChart},e}(n.WjComponentBehavior);e.WjFinancialChart=u.register();var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.tag="wj-financial-chart-series",e.className="wijmo.chart.finance.FinancialSeries",e.parentProp="series",e.siblingId="series",e.classCtor=function(){return o.FinancialSeries},e}(n.WjComponentBehavior);e.WjFinancialChartSeries=l.register()});