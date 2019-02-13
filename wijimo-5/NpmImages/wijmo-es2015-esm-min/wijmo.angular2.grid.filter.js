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
import*as wjcGridFilter from"wijmo/wijmo.grid.filter";var __glob="undefined"!=typeof window?window:self;import{Component,NgModule}from"@angular/core";import{ElementRef,Injector,Optional,forwardRef}from"@angular/core";import{Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior,WjDirectiveBaseModule}from"wijmo/wijmo.angular2.directiveBase";export var wjFlexGridFilterMeta={selector:"wj-flex-grid-filter",template:``,inputs:["wjProperty","showFilterIcons","showSortButtons","defaultFilterType","filterColumns"],outputs:["initialized","filterChangingNg: filterChanging","filterChangedNg: filterChanged","filterAppliedNg: filterApplied"],providers:[]};export class WjFlexGridFilter extends wjcGridFilter.FlexGridFilter{constructor(e,t,r){super(r),this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,r);this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}};WjFlexGridFilter.meta={outputs:wjFlexGridFilterMeta.outputs},WjFlexGridFilter.decorators=[{type:Component,args:[{selector:wjFlexGridFilterMeta.selector,template:wjFlexGridFilterMeta.template,inputs:wjFlexGridFilterMeta.inputs,outputs:wjFlexGridFilterMeta.outputs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexGridFilter)},...wjFlexGridFilterMeta.providers]}]}],WjFlexGridFilter.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]}]);let moduleExports=[WjFlexGridFilter];export class WjGridFilterModule{};WjGridFilterModule.decorators=[{type:NgModule,args:[{imports:[WjDirectiveBaseModule,CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjGridFilterModule.ctorParameters=(()=>[]);