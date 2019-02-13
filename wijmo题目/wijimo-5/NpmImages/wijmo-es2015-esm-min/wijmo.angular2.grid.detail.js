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
import*as wjcGridDetail from"wijmo/wijmo.grid.detail";var __glob="undefined"!=typeof window?window:self;import{NgModule}from"@angular/core";import{ElementRef,Injector,Directive,ViewContainerRef,TemplateRef,Optional,forwardRef,Renderer}from"@angular/core";import{Inject,SkipSelf}from"@angular/core";import{CommonModule}from"@angular/common";import{WjDirectiveBehavior,WjDirectiveBaseModule}from"wijmo/wijmo.angular2.directiveBase";export var wjFlexGridDetailMeta={selector:"[wjFlexGridDetail]",inputs:["wjFlexGridDetail","maxHeight","detailVisibilityMode","rowHasDetail","isAnimated"],outputs:["initialized"],exportAs:"wjFlexGridDetail",providers:[]};export class WjFlexGridDetail extends wjcGridDetail.FlexGridDetailProvider{constructor(e,t,i,r,o,a){super(i),this.isInitialized=!1;this._wjBehaviour=WjDirectiveBehavior.attach(this,e,t,i);this._viewContainerRef=r,this._templateRef=o,this._domRenderer=a,this._init(),this.created()}created(){}ngOnInit(){this._wjBehaviour.ngOnInit()}ngAfterViewInit(){this._wjBehaviour.ngAfterViewInit()}ngOnDestroy(){this._wjBehaviour.ngOnDestroy()}_init(){this.createDetailCell=((e,t)=>{let i=WjDirectiveBehavior.instantiateTemplate(this.grid.hostElement,this._viewContainerRef,this._templateRef,this._domRenderer,!1,{row:e,col:t,item:e.dataItem}),r=i.viewRef,o=i.rootElement;return r.detectChanges(),o.parentElement.removeChild(o),o[WjFlexGridDetail._viewRefProp]=r,o}),this.disposeDetailCell=(e=>{let t;if(e.detail&&(t=e.detail[WjFlexGridDetail._viewRefProp])){e.detail[WjFlexGridDetail._viewRefProp]=null;let i=this._viewContainerRef.indexOf(t);i>-1&&this._viewContainerRef.remove(i)}})}};WjFlexGridDetail._viewRefProp="__wj_viewRef",WjFlexGridDetail.meta={outputs:wjFlexGridDetailMeta.outputs},WjFlexGridDetail.decorators=[{type:Directive,args:[{selector:wjFlexGridDetailMeta.selector,inputs:wjFlexGridDetailMeta.inputs,outputs:wjFlexGridDetailMeta.outputs,exportAs:wjFlexGridDetailMeta.exportAs,providers:[{provide:"WjComponent",useExisting:forwardRef(()=>WjFlexGridDetail)},...wjFlexGridDetailMeta.providers]}]}],WjFlexGridDetail.ctorParameters=(()=>[{type:ElementRef,decorators:[{type:Inject,args:[ElementRef]}]},{type:Injector,decorators:[{type:Inject,args:[Injector]}]},{type:void 0,decorators:[{type:Inject,args:["WjComponent"]},{type:SkipSelf},{type:Optional}]},{type:ViewContainerRef,decorators:[{type:Inject,args:[ViewContainerRef]}]},{type:TemplateRef,decorators:[{type:Inject,args:[TemplateRef]}]},{type:Renderer,decorators:[{type:Inject,args:[Renderer]}]}]);let moduleExports=[WjFlexGridDetail];export class WjGridDetailModule{};WjGridDetailModule.decorators=[{type:NgModule,args:[{imports:[WjDirectiveBaseModule,CommonModule],declarations:[...moduleExports],exports:[...moduleExports]}]}],WjGridDetailModule.ctorParameters=(()=>[]);