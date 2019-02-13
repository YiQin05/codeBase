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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.gauge","wijmo/wijmo.vue2.gauge","vue","vue"],function(e,t,n,r,a,o,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,s=a||t;i.wijmo=i.wijmo||{},i.wijmo.vue2=i.wijmo.vue2||{},i.wijmo.vue2.gauge=s,t.Vue=o.default||u;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-linear-gauge",t.className="wijmo.gauge.LinearGauge",t.classCtor=function(){return r.LinearGauge},t}(n.WjComponentBehavior);t.WjLinearGauge=l.register();var g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-bullet-graph",t.className="wijmo.gauge.BulletGraph",t.classCtor=function(){return r.BulletGraph},t}(n.WjComponentBehavior);t.WjBulletGraph=g.register();var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-radial-gauge",t.className="wijmo.gauge.RadialGauge",t.classCtor=function(){return r.RadialGauge},t}(n.WjComponentBehavior);t.WjRadialGauge=c.register();var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-range",t.className="wijmo.gauge.Range",t.parentProp="ranges",t.classCtor=function(){return r.Range},t}(n.WjComponentBehavior);t.WjRange=p.register()});