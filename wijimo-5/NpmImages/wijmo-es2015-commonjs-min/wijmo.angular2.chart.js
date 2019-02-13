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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcChart=require("wijmo/wijmo.chart");var __glob="undefined"!=typeof window?window:self;const core_1=require("@angular/core"),core_2=require("@angular/core"),core_3=require("@angular/core"),common_1=require("@angular/common"),forms_1=require("@angular/forms"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");exports.wjFlexChartMeta={selector:"wj-flex-chart",template:`<div><ng-content></ng-content></div>`,inputs:["asyncBindings","wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","rotated","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};class WjFlexChart extends wjcChart.FlexChart{constructor(e,t,r){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t)),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,o=!1){let a=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,i=a.ngZone;i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,r,o)}):super.addEventListener(e,t,r,o)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}}WjFlexChart.meta={outputs:exports.wjFlexChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}},WjFlexChart.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartMeta.selector,template:exports.wjFlexChartMeta.template,inputs:exports.wjFlexChartMeta.inputs,outputs:exports.wjFlexChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChart)},...exports.wjFlexChartMeta.providers]}]}],WjFlexChart.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChart=WjFlexChart,exports.wjFlexPieMeta={selector:"wj-flex-pie",template:`<div><ng-content></ng-content></div>`,inputs:["wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingName","innerRadius","isAnimated","offset","reversed","startAngle","selectedIndex","selectedItemPosition","selectedItemOffset","itemFormatter","labelContent"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useFactory:wijmo_angular2_directiveBase_1.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};class WjFlexPie extends wjcChart.FlexPie{constructor(e,t,r){super(wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(e,t)),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,o=!1){let a=wijmo_angular2_directiveBase_1.WjDirectiveBehavior,i=a.ngZone;i&&a.outsideZoneEvents[t]?i.runOutsideAngular(()=>{super.addEventListener(e,t,r,o)}):super.addEventListener(e,t,r,o)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}}WjFlexPie.meta={outputs:exports.wjFlexPieMeta.outputs},WjFlexPie.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexPieMeta.selector,template:exports.wjFlexPieMeta.template,inputs:exports.wjFlexPieMeta.inputs,outputs:exports.wjFlexPieMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexPie)},...exports.wjFlexPieMeta.providers]}]}],WjFlexPie.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexPie=WjFlexPie,exports.wjFlexChartAxisMeta={selector:"wj-flex-chart-axis",template:``,inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};class WjFlexChartAxis extends wjcChart.Axis{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="axes";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartAxis.meta={outputs:exports.wjFlexChartAxisMeta.outputs},WjFlexChartAxis.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartAxisMeta.selector,template:exports.wjFlexChartAxisMeta.template,inputs:exports.wjFlexChartAxisMeta.inputs,outputs:exports.wjFlexChartAxisMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartAxis)},...exports.wjFlexChartAxisMeta.providers]}]}],WjFlexChartAxis.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartAxis=WjFlexChartAxis,exports.wjFlexChartLegendMeta={selector:"wj-flex-chart-legend",template:``,inputs:["wjProperty","position","title","titleAlign"],outputs:["initialized"],providers:[]};class WjFlexChartLegend extends wjcChart.Legend{constructor(e,t,r){super(r),this.isInitialized=!1,this.wjProperty="legend";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartLegend.meta={outputs:exports.wjFlexChartLegendMeta.outputs},WjFlexChartLegend.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartLegendMeta.selector,template:exports.wjFlexChartLegendMeta.template,inputs:exports.wjFlexChartLegendMeta.inputs,outputs:exports.wjFlexChartLegendMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartLegend)},...exports.wjFlexChartLegendMeta.providers]}]}],WjFlexChartLegend.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartLegend=WjFlexChartLegend,exports.wjFlexChartDataLabelMeta={selector:"wj-flex-chart-data-label",template:``,inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};class WjFlexChartDataLabel extends wjcChart.DataLabel{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="dataLabel";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartDataLabel.meta={outputs:exports.wjFlexChartDataLabelMeta.outputs},WjFlexChartDataLabel.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartDataLabelMeta.selector,template:exports.wjFlexChartDataLabelMeta.template,inputs:exports.wjFlexChartDataLabelMeta.inputs,outputs:exports.wjFlexChartDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartDataLabel)},...exports.wjFlexChartDataLabelMeta.providers]}]}],WjFlexChartDataLabel.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartDataLabel=WjFlexChartDataLabel,exports.wjFlexPieDataLabelMeta={selector:"wj-flex-pie-data-label",template:``,inputs:["wjProperty","content","border","offset","connectingLine","position"],outputs:["initialized","renderingNg: rendering"],providers:[]};class WjFlexPieDataLabel extends wjcChart.PieDataLabel{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="dataLabel";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexPieDataLabel.meta={outputs:exports.wjFlexPieDataLabelMeta.outputs},WjFlexPieDataLabel.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexPieDataLabelMeta.selector,template:exports.wjFlexPieDataLabelMeta.template,inputs:exports.wjFlexPieDataLabelMeta.inputs,outputs:exports.wjFlexPieDataLabelMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexPieDataLabel)},...exports.wjFlexPieDataLabelMeta.providers]}]}],WjFlexPieDataLabel.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexPieDataLabel=WjFlexPieDataLabel,exports.wjFlexChartSeriesMeta={selector:"wj-flex-chart-series",template:`<div><ng-content></ng-content></div>`,inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};class WjFlexChartSeries extends wjcChart.Series{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartSeries.meta={outputs:exports.wjFlexChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexChartSeries.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartSeriesMeta.selector,template:exports.wjFlexChartSeriesMeta.template,inputs:exports.wjFlexChartSeriesMeta.inputs,outputs:exports.wjFlexChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartSeries)},...exports.wjFlexChartSeriesMeta.providers]}]}],WjFlexChartSeries.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartSeries=WjFlexChartSeries,exports.wjFlexChartLineMarkerMeta={selector:"wj-flex-line-marker",template:``,inputs:["wjProperty","isVisible","seriesIndex","horizontalPosition","content","verticalPosition","alignment","lines","interaction","dragLines","dragThreshold","dragContent"],outputs:["initialized","positionChangedNg: positionChanged"],providers:[]};class WjFlexChartLineMarker extends wjcChart.LineMarker{constructor(e,t,r){super(r),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartLineMarker.meta={outputs:exports.wjFlexChartLineMarkerMeta.outputs},WjFlexChartLineMarker.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartLineMarkerMeta.selector,template:exports.wjFlexChartLineMarkerMeta.template,inputs:exports.wjFlexChartLineMarkerMeta.inputs,outputs:exports.wjFlexChartLineMarkerMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartLineMarker)},...exports.wjFlexChartLineMarkerMeta.providers]}]}],WjFlexChartLineMarker.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartLineMarker=WjFlexChartLineMarker,exports.wjFlexChartDataPointMeta={selector:"wj-flex-chart-data-point",template:``,inputs:["wjProperty","x","y"],outputs:["initialized"],providers:[]};class WjFlexChartDataPoint extends wjcChart.DataPoint{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartDataPoint.meta={outputs:exports.wjFlexChartDataPointMeta.outputs},WjFlexChartDataPoint.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartDataPointMeta.selector,template:exports.wjFlexChartDataPointMeta.template,inputs:exports.wjFlexChartDataPointMeta.inputs,outputs:exports.wjFlexChartDataPointMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartDataPoint)},...exports.wjFlexChartDataPointMeta.providers]}]}],WjFlexChartDataPoint.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartDataPoint=WjFlexChartDataPoint,exports.wjFlexChartPlotAreaMeta={selector:"wj-flex-chart-plot-area",template:``,inputs:["wjProperty","column","height","name","row","style","width"],outputs:["initialized"],providers:[]};class WjFlexChartPlotArea extends wjcChart.PlotArea{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="plotAreas";this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartPlotArea.meta={outputs:exports.wjFlexChartPlotAreaMeta.outputs},WjFlexChartPlotArea.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartPlotAreaMeta.selector,template:exports.wjFlexChartPlotAreaMeta.template,inputs:exports.wjFlexChartPlotAreaMeta.inputs,outputs:exports.wjFlexChartPlotAreaMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartPlotArea)},...exports.wjFlexChartPlotAreaMeta.providers]}]}],WjFlexChartPlotArea.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartPlotArea=WjFlexChartPlotArea;let moduleExports=[WjFlexChart,WjFlexPie,WjFlexChartAxis,WjFlexChartLegend,WjFlexChartDataLabel,WjFlexPieDataLabel,WjFlexChartSeries,WjFlexChartLineMarker,WjFlexChartDataPoint,WjFlexChartPlotArea];class WjChartModule{}WjChartModule.decorators=[{type:core_1.NgModule,args:[{imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjChartModule.ctorParameters=(()=>[]),exports.WjChartModule=WjChartModule;