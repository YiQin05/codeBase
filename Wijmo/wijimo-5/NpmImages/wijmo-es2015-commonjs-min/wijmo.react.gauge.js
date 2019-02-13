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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcGauge=require("wijmo/wijmo.gauge");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.gauge");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.gauge=wjcSelf;class LinearGauge extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGauge.LinearGauge)}}exports.LinearGauge=LinearGauge;class BulletGraph extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGauge.BulletGraph)}}exports.BulletGraph=BulletGraph;class RadialGauge extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGauge.RadialGauge)}}exports.RadialGauge=RadialGauge;class Range extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGauge.Range),this._parentProp="ranges"}}exports.Range=Range;var Wj=wjcReactBase;