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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcChart from"wijmo/wijmo.chart";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.chart";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=wjcSelf;export class FlexChart extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.FlexChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})}};export class FlexPie extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.FlexPie,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource"]})}};export class FlexChartAxis extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.Axis,{objectProps:["plotArea","itemsSource"]}),this._parentProp="axes"}};export class FlexChartLegend extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.Legend),this._parentProp="legend",this._parentInCtor=!0}};export class FlexChartDataLabel extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.DataLabel,{objectProps:["content"]}),this._parentProp="dataLabel"}};export class FlexPieDataLabel extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.PieDataLabel,{objectProps:["content"]}),this._parentProp="dataLabel"}};export class FlexChartSeries extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.Series,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]}),this._parentProp="series",this._siblingId="series"}};export class FlexChartLineMarker extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.LineMarker),this._parentInCtor=!0}};export class FlexChartDataPoint extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.DataPoint),this._parentProp=""}};export class FlexChartPlotArea extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChart.PlotArea,{objectProps:["style"]}),this._parentProp="plotAreas"}};var Wj=wjcReactBase;