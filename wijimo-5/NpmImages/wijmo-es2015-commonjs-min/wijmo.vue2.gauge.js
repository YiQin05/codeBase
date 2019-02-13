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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGauge=require("wijmo/wijmo.gauge");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.gauge");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.gauge=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjLinearGaugeBehavior extends wjcVue2Base.WjComponentBehavior{}WjLinearGaugeBehavior.tag="wj-linear-gauge",WjLinearGaugeBehavior.className="wijmo.gauge.LinearGauge",WjLinearGaugeBehavior.classCtor=function(){return wjcGauge.LinearGauge},exports.WjLinearGauge=WjLinearGaugeBehavior.register();class WjBulletGraphBehavior extends wjcVue2Base.WjComponentBehavior{}WjBulletGraphBehavior.tag="wj-bullet-graph",WjBulletGraphBehavior.className="wijmo.gauge.BulletGraph",WjBulletGraphBehavior.classCtor=function(){return wjcGauge.BulletGraph},exports.WjBulletGraph=WjBulletGraphBehavior.register();class WjRadialGaugeBehavior extends wjcVue2Base.WjComponentBehavior{}WjRadialGaugeBehavior.tag="wj-radial-gauge",WjRadialGaugeBehavior.className="wijmo.gauge.RadialGauge",WjRadialGaugeBehavior.classCtor=function(){return wjcGauge.RadialGauge},exports.WjRadialGauge=WjRadialGaugeBehavior.register();class WjRangeBehavior extends wjcVue2Base.WjComponentBehavior{}WjRangeBehavior.tag="wj-range",WjRangeBehavior.className="wijmo.gauge.Range",WjRangeBehavior.parentProp="ranges",WjRangeBehavior.classCtor=function(){return wjcGauge.Range},exports.WjRange=WjRangeBehavior.register();