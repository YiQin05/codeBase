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
import*as wjcCore from"wijmo/wijmo";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.base";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.base=wjcSelf;import*as ReactDOM from"react-dom";import*as React from"react";export class ComponentBase extends React.Component{constructor(t,e,i){super(t),this._objPropHash={},this._isMounted=!1,this._mountedCBs=[],this.props=t,this.controlType=e;for(let t of i&&i.objectProps||[])this._objPropHash[t]=!0}render(){let t={};t[ComponentBase._propsParent]=this;let e=React.Children.map(this.props.children,e=>React.cloneElement(e,t));return React.createElement("div",this._isChild()?{style:{display:"none"}}:null,e)}componentDidMount(){if(this._isChild()){let t=this.props[ComponentBase._propsParent];t&&t._mountedCB(()=>{this._setParent(t)})}else this._prepareControl();return this.control}componentWillUnmount(){this._siblingInsertedEH&&this._getElement().removeEventListener("DOMNodeInserted",this._siblingInsertedEH);let t=this.control;if(t)if(this._isChild()){let e=this._getParentProp();if(e){let i=this.parent.control[e];if(wjcCore.isArray(i)){let e=i.indexOf(t);e>-1&&i.splice(e,1)}}}else t instanceof wjcCore.Control&&t.dispose()}shouldComponentUpdate(t){var e=this.control;return this._copy(e,t),!0}_mountedCB(t){this._isMounted?t():this._mountedCBs.push(t)}_createControl(){let t=this._isChild()?this._isParentInCtor()?this.parent.control:void 0:this._getElement();return new this.controlType(t)}_prepareControl(){let t=this.control=this._createControl(),e=this._getElement(),i=this.props,n=t instanceof wjcCore.Control,r=ComponentBase;this._siblingId||(null==this.constructor[r._typeSiblingIdProp]&&(this.constructor[r._typeSiblingIdProp]=++r._siblingDirId+""),this._siblingId=this.constructor[r._typeSiblingIdProp]),e.setAttribute(r._typeSiblingIdProp,this._siblingId);var s={};for(var o in i)if(!this._ignoreProp(o))if(o in t)s[o]=i[o];else switch(o){case"className":wjcCore.addClass(e,i.className);break;case"style":wjcCore.setCss(e,i.style);break;default:null!=e[o]&&(e[o]=i[o])}n?t.initialize(s):this._copy(t,s,!0),this._isMounted=!0;let l=this._mountedCBs;this._mountedCBs=[];for(let t of l)t();wjcCore.isFunction(i.initialized)&&i.initialized(t)}_initParent(){let t=this._getParentProp();if(t){let e=this.parent.control,i=e[t];if(wjcCore.isArray(i)){let t=this._getSiblingIndex();(t<0||t>=i.length)&&(t=i.length),i.splice(t,0,this.control),this._siblingInsertedEH=this._siblingInserted.bind(this),this._getElement().addEventListener("DOMNodeInserted",this._siblingInsertedEH)}else e[t]=this.control}}_setParent(t){if(t!==this.parent){if(this.parent)throw"Wijmo child component is already attached to a different parent.";this.parent=t,this._prepareControl(),this._initParent()}}_isChild(){return null!=this._parentProp||null!=this._parentInCtor}_isParentInCtor(){return!0===this._parentInCtor}_getParentProp(){return this.props.wjProperty||this._parentProp}_getSiblingIndex(){var t=this._getElement(),e=t.parentElement;if(!e)return-1;for(var i=e.childNodes,n=-1,r=this._siblingId,s=0;s<i.length;s++){var o=i[s];if(1==o.nodeType&&o.getAttribute(ComponentBase._typeSiblingIdProp)==r&&(++n,o===t))return n}return-1}_siblingInserted(t){if(t.target===this._getElement()){var e=this._getSiblingIndex(),i=this.control,n=this.parent.control[this._getParentProp()],r=n.indexOf(i);e>=0&&r>=0&&e!==r&&(n.splice(r,1),e=Math.min(e,n.length),n.splice(e,0,i))}}_copy(t,e,i=!1){if(!t||!e)return;let n,r=t===this.control;for(var s in e)if(!this._ignoreProp(s)||!r){var o=e[s];if(s in t){if(this._isEvent(t,s))i&&wjcCore.isFunction(o)&&t[s].addHandler(o);else if(!this._sameValue(t[s],o))if(null==o)t[s]=o;else if(wjcCore.isPrimitive(o)||wjcCore.isFunction(o)||this._objPropHash[s]&&t===(n||(n=this.control)))t[s]=o;else if(wjcCore.isArray(o)&&wjcCore.isArray(t[s])){let e=t[s],i=o;if(i.length==e.length)for(var l=0;l<i.length;l++)this._copy(e[l],i[l])}else wjcCore.isObject(o)&&this._copy(t[s],e[s])}else"className"==s?t.hostElement&&wjcCore.addClass(t.hostElement,e[s]):"style"==s&&t.hostElement&&wjcCore.setCss(t.hostElement,e[s])}}_sameValue(t,e){return t==e||wjcCore.DateTime.equals(t,e)}_isEvent(t,e){let i=t&&t[e];return null!=i&&i instanceof wjcCore.Event}_getElement(){return ReactDOM.findDOMNode(this)}_ignoreProp(t){return"children"===t}};ComponentBase._propsParent="$parent",ComponentBase._typeSiblingIdProp="_wjSiblingIdProp",ComponentBase._siblingDirId=0;