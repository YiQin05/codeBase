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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartAnnotation=require("wijmo/wijmo.chart.annotation");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.chart.annotation");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.annotation=wjcSelf;class FlexChartAnnotationLayer extends wjcReactBase.ComponentBase{constructor(t){super(t,wjcChartAnnotation.AnnotationLayer),this._parentInCtor=!0}}exports.FlexChartAnnotationLayer=FlexChartAnnotationLayer;class FlexChartAnnotation extends wjcReactBase.ComponentBase{constructor(t){super(t,null,{objectProps:["point","offset","style","start","end"]}),this._parentProp="items"}_createControl(){return new wjcChartAnnotation[this.props.type]}}exports.FlexChartAnnotation=FlexChartAnnotation;var Wj=wjcReactBase;