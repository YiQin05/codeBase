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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcInput=require("wijmo/wijmo.input");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.input");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.input=wjcSelf;const React=require("react");class ListBox extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.ListBox,{objectProps:["itemsSource","selectedItem","selectedValue","checkedItems"]})}}exports.ListBox=ListBox;class ComboBox extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.ComboBox,{objectProps:["itemsSource","selectedItem","selectedValue"]})}}exports.ComboBox=ComboBox;class AutoComplete extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.AutoComplete,{objectProps:["itemsSource","selectedItem","selectedValue"]})}}exports.AutoComplete=AutoComplete;class Calendar extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.Calendar)}}exports.Calendar=Calendar;class ColorPicker extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.ColorPicker,{objectProps:["palette"]})}}exports.ColorPicker=ColorPicker;class InputMask extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputMask)}}exports.InputMask=InputMask;class InputColor extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputColor)}}exports.InputColor=InputColor;class MultiSelect extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.MultiSelect,{objectProps:["itemsSource","selectedItem","selectedValue","checkedItems"]})}}exports.MultiSelect=MultiSelect;class MultiAutoComplete extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.MultiAutoComplete,{objectProps:["itemsSource","selectedItem","selectedValue","selectedItems"]})}}exports.MultiAutoComplete=MultiAutoComplete;class InputNumber extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputNumber)}}exports.InputNumber=InputNumber;class InputDate extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputDate)}}exports.InputDate=InputDate;class InputTime extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputTime,{objectProps:["itemsSource","selectedItem","selectedValue"]})}}exports.InputTime=InputTime;class InputDateTime extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.InputDateTime)}}exports.InputDateTime=InputDateTime;class Menu extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.Menu,{objectProps:["itemsSource","selectedItem","selectedValue","value"]})}}exports.Menu=Menu;class Popup extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcInput.Popup)}render(){return React.createElement("div",null,this.props.children)}}exports.Popup=Popup;var Wj=wjcReactBase;