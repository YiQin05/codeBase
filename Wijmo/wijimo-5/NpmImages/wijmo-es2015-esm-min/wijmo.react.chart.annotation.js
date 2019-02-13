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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcChartAnnotation from"wijmo/wijmo.chart.annotation";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.chart.annotation";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.annotation=wjcSelf;export class FlexChartAnnotationLayer extends wjcReactBase.ComponentBase{constructor(t){super(t,wjcChartAnnotation.AnnotationLayer),this._parentInCtor=!0}};export class FlexChartAnnotation extends wjcReactBase.ComponentBase{constructor(t){super(t,null,{objectProps:["point","offset","style","start","end"]}),this._parentProp="items"}_createControl(){return new wjcChartAnnotation[this.props.type]}};var Wj=wjcReactBase;