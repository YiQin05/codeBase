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
import*as wjcChartRadar from"wijmo/wijmo.chart.radar";var __glob="undefined"!=typeof window?window:self;import{Component,NgModule}from"@angular/core";import{ElementRef,Injector,Optional,forwardRef}from"@angular/core";import{Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{WjDirectiveBehavior,WjDirectiveBaseModule,WjValueAccessorFactory}from"wijmo/wijmo.angular2.directiveBase";export var wjFlexRadarMeta={selector:"wj-flex-radar",template:`<div><ng-content></ng-content></div>`,inputs:["asyncBindings","wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType","startAngle","totalAngle","reversed","stacking"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:NG_VALUE_ACCESSOR,useFactory:WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};export class WjFlexRadar extends wjcChartRadar.FlexRadar{constructor(e,t,r){super(WjDirectiveBehavior.getHostElement(e,t)),this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}addEventListener(e,t,r,a=!1){let i=WjDirectiveBehavior,o=i.ngZone;o&&i.outsideZoneEvents[t]?o.runOutsideAngular(()=>{super.addEventListener(e,t,r,a)}):super.addEventListener(e,t,r,a)}get tooltipContent(){return this.tooltip.content}set tooltipContent(e){this.tooltip.content=e}get labelContent(){return this.dataLabel.content}set labelContent(e){this.dataLabel.content=e}};WjFlexRadar.meta={outputs:wjFlexRadarMeta.outputs,changeEvents:{selectionChanged:["selection"]}},WjFlexRadar.decorators=[{type:Component,args:[{selector:wjFlexRadarMeta.selector,template:wjFlexRadarMeta.template,inputs:wjFlexRadarMeta.inputs,outputs:wjFlexRadarMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexRadar)},...wjFlexRadarMeta.providers]}]}],WjFlexRadar.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]}]);export var wjFlexRadarAxisMeta={selector:"wj-flex-radar-axis",template:``,inputs:["wjProperty","axisLine","format","labels","majorGrid","majorTickMarks","majorUnit","max","min","position","reversed","title","labelAngle","minorGrid","minorTickMarks","minorUnit","origin","logBase","plotArea","labelAlign","name","overlappingLabels","labelPadding","itemFormatter","itemsSource","binding"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};export class WjFlexRadarAxis extends wjcChartRadar.FlexRadarAxis{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="axes";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexRadarAxis.meta={outputs:wjFlexRadarAxisMeta.outputs},WjFlexRadarAxis.decorators=[{type:Component,args:[{selector:wjFlexRadarAxisMeta.selector,template:wjFlexRadarAxisMeta.template,inputs:wjFlexRadarAxisMeta.inputs,outputs:wjFlexRadarAxisMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexRadarAxis)},...wjFlexRadarAxisMeta.providers]}]}],WjFlexRadarAxis.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]}]);export var wjFlexRadarSeriesMeta={selector:"wj-flex-radar-series",template:`<div><ng-content></ng-content></div>`,inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};export class WjFlexRadarSeries extends wjcChartRadar.FlexRadarSeries{constructor(e,t,r){super(),this.isInitialized=!1,this.wjProperty="series";this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexRadarSeries.meta={outputs:wjFlexRadarSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},WjFlexRadarSeries.decorators=[{type:Component,args:[{selector:wjFlexRadarSeriesMeta.selector,template:wjFlexRadarSeriesMeta.template,inputs:wjFlexRadarSeriesMeta.inputs,outputs:wjFlexRadarSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexRadarSeries)},...wjFlexRadarSeriesMeta.providers]}]}],WjFlexRadarSeries.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]}]);let moduleExports=[WjFlexRadar,WjFlexRadarAxis,WjFlexRadarSeries];export class WjChartRadarModule{};WjChartRadarModule.decorators=[{type:NgModule,args:[{imports:[WjDirectiveBaseModule,CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjChartRadarModule.ctorParameters=(()=>[]);