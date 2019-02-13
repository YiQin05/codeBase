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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcChartInteraction=require("wijmo/wijmo.chart.interaction");var __glob="undefined"!=typeof window?window:self;const core_1=require("@angular/core"),core_2=require("@angular/core"),core_3=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");exports.wjFlexChartRangeSelectorMeta={selector:"wj-flex-chart-range-selector",template:``,inputs:["wjProperty","isVisible","min","max","orientation","seamless","minScale","maxScale"],outputs:["initialized","rangeChangedNg: rangeChanged"],providers:[]};class WjFlexChartRangeSelector extends wjcChartInteraction.RangeSelector{constructor(e,t,r){super(r),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartRangeSelector.meta={outputs:exports.wjFlexChartRangeSelectorMeta.outputs},WjFlexChartRangeSelector.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartRangeSelectorMeta.selector,template:exports.wjFlexChartRangeSelectorMeta.template,inputs:exports.wjFlexChartRangeSelectorMeta.inputs,outputs:exports.wjFlexChartRangeSelectorMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartRangeSelector)},...exports.wjFlexChartRangeSelectorMeta.providers]}]}],WjFlexChartRangeSelector.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartRangeSelector=WjFlexChartRangeSelector,exports.wjFlexChartGesturesMeta={selector:"wj-flex-chart-gestures",template:``,inputs:["wjProperty","mouseAction","interactiveAxes","enable","scaleX","scaleY","posX","posY"],outputs:["initialized"],providers:[]};class WjFlexChartGestures extends wjcChartInteraction.ChartGestures{constructor(e,t,r){super(r),this.isInitialized=!1;this._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}}WjFlexChartGestures.meta={outputs:exports.wjFlexChartGesturesMeta.outputs},WjFlexChartGestures.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexChartGesturesMeta.selector,template:exports.wjFlexChartGesturesMeta.template,inputs:exports.wjFlexChartGesturesMeta.inputs,outputs:exports.wjFlexChartGesturesMeta.outputs,providers:[{provide:"WjComponent",useExisting:core_2.forwardRef(()=>WjFlexChartGestures)},...exports.wjFlexChartGesturesMeta.providers]}]}],WjFlexChartGestures.ctorParameters=(()=>[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef]}]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector]}]},{type:void 0,decorators:[{type:core_3.Inject,args:["WjComponent"]},{type:core_3.SkipSelf},{type:core_2.Optional}]}]),exports.WjFlexChartGestures=WjFlexChartGestures;let moduleExports=[WjFlexChartRangeSelector,WjFlexChartGestures];class WjChartInteractionModule{}WjChartInteractionModule.decorators=[{type:core_1.NgModule,args:[{imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjChartInteractionModule.ctorParameters=(()=>[]),exports.WjChartInteractionModule=WjChartInteractionModule;