﻿/*
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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcChartRadar from"wijmo/wijmo.chart.radar";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.chart.radar";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.radar=wjcSelf;export class FlexRadar extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadar,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})}};export class FlexRadarAxis extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadarAxis,{objectProps:["plotArea","itemsSource"]}),this._parentProp="axes"}};export class FlexRadarSeries extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartRadar.FlexRadarSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]}),this._parentProp="series",this._siblingId="series"}};var Wj=wjcReactBase;