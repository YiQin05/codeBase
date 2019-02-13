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
import*as wjcChartAnimation from"wijmo/wijmo.chart.animation";var __glob="undefined"!=typeof window?window:self;import{Component,NgModule}from"@angular/core";import{ElementRef,Injector,Optional,forwardRef}from"@angular/core";import{Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior,WjDirectiveBaseModule}from"wijmo/wijmo.angular2.directiveBase";export var wjFlexChartAnimationMeta={selector:"wj-flex-chart-animation",template:``,inputs:["wjProperty","animationMode","easing","duration","axisAnimation"],outputs:["initialized"],providers:[]};export class WjFlexChartAnimation extends wjcChartAnimation.ChartAnimation{constructor(t,e,o){super(o),this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,t,e,o);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexChartAnimation.meta={outputs:wjFlexChartAnimationMeta.outputs},WjFlexChartAnimation.decorators=[{type:Component,args:[{selector:wjFlexChartAnimationMeta.selector,template:wjFlexChartAnimationMeta.template,inputs:wjFlexChartAnimationMeta.inputs,outputs:wjFlexChartAnimationMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexChartAnimation)},...wjFlexChartAnimationMeta.providers]}]}],WjFlexChartAnimation.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]}]);let moduleExports=[WjFlexChartAnimation];export class WjChartAnimationModule{};WjChartAnimationModule.decorators=[{type:NgModule,args:[{imports:[WjDirectiveBaseModule,CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjChartAnimationModule.ctorParameters=(()=>[]);