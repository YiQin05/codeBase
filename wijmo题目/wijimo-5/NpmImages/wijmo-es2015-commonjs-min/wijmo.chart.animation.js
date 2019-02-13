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
"use strict";function tryGetModuleWijmoChartRadar(){let t,e;return(t=__glob.wijmo)&&(e=t.chart)&&e.radar}function tryGetModuleWijmoChartFinance(){let t,e;return(t=__glob.wijmo)&&(e=t.chart)&&e.finance}Object.defineProperty(exports,"__esModule",{value:!0});const wjcChart=require("wijmo/wijmo.chart"),wjcCore=require("wijmo/wijmo");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.chart.animation");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.chart=__glob.wijmo.chart||{},__glob.wijmo.chart.animation=wjcSelf;var Easing;!function(t){t[t.Linear=0]="Linear",t[t.Swing=1]="Swing",t[t.EaseInQuad=2]="EaseInQuad",t[t.EaseOutQuad=3]="EaseOutQuad",t[t.EaseInOutQuad=4]="EaseInOutQuad",t[t.EaseInCubic=5]="EaseInCubic",t[t.EaseOutCubic=6]="EaseOutCubic",t[t.EaseInOutCubic=7]="EaseInOutCubic",t[t.EaseInQuart=8]="EaseInQuart",t[t.EaseOutQuart=9]="EaseOutQuart",t[t.EaseInOutQuart=10]="EaseInOutQuart",t[t.EaseInQuint=11]="EaseInQuint",t[t.EaseOutQuint=12]="EaseOutQuint",t[t.EaseInOutQuint=13]="EaseInOutQuint",t[t.EaseInSine=14]="EaseInSine",t[t.EaseOutSine=15]="EaseOutSine",t[t.EaseInOutSine=16]="EaseInOutSine",t[t.EaseInExpo=17]="EaseInExpo",t[t.EaseOutExpo=18]="EaseOutExpo",t[t.EaseInOutExpo=19]="EaseInOutExpo",t[t.EaseInCirc=20]="EaseInCirc",t[t.EaseOutCirc=21]="EaseOutCirc",t[t.EaseInOutCirc=22]="EaseInOutCirc",t[t.EaseInBack=23]="EaseInBack",t[t.EaseOutBack=24]="EaseOutBack",t[t.EaseInOutBack=25]="EaseInOutBack",t[t.EaseInBounce=26]="EaseInBounce",t[t.EaseOutBounce=27]="EaseOutBounce",t[t.EaseInOutBounce=28]="EaseInOutBounce",t[t.EaseInElastic=29]="EaseInElastic",t[t.EaseOutElastic=30]="EaseOutElastic",t[t.EaseInOutElastic=31]="EaseInOutElastic"}(Easing=exports.Easing||(exports.Easing={}));var AnimationMode;!function(t){t[t.All=0]="All",t[t.Point=1]="Point",t[t.Series=2]="Series"}(AnimationMode=exports.AnimationMode||(exports.AnimationMode={}));class ChartAnimation{constructor(t,e){this._play=!0;var a=this,i=t.hostElement,n=new wjcCore.Size(i.offsetWidth,i.offsetHeight);a._chart=t,a._updateEventArgs=[],t instanceof wjcChart.FlexPie?a._animation=new FlexPieAnimation(t,a._updateEventArgs):(tryGetModuleWijmoChartRadar()&&tryGetModuleWijmoChartRadar().FlexRadar&&t instanceof tryGetModuleWijmoChartRadar().FlexRadar?a._animation=new FlexRadarAnimation(t,a._updateEventArgs):a._animation=new FlexChartAnimation(t,a._updateEventArgs),a._chartType=t.chartType),e&&a._initOptions(e),t.beginUpdate(),window.setTimeout(()=>{t.rendered.addHandler(a._playAnimation,a),t.endUpdate()},0),a._setCV(t.collectionView),window.addEventListener("resize",function(t){var e=new wjcCore.Size(i.offsetWidth,i.offsetHeight);n.equals(e)||(a._play=!1,n=e)})}_initOptions(t){t.duration&&(this.duration=t.duration),t.easing&&(this.easing=t.easing),t.animationMode&&(this.animationMode=t.animationMode)}_setCV(t){this._cv=t,this._animation._clearState()}get animationMode(){return this._animation.animationMode}set animationMode(t){(t=wjcCore.asEnum(t,AnimationMode))!=this.animationMode&&(this._animation.animationMode=t)}get easing(){return this._animation.easing}set easing(t){(t=wjcCore.asEnum(t,Easing))!=this.easing&&(this._animation.easing=t)}get duration(){return this._animation.duration}set duration(t){(t=wjcCore.asNumber(t))!=this.duration&&(this._animation.duration=t)}get axisAnimation(){return this._animation.axisAnimation}set axisAnimation(t){(t=wjcCore.asBoolean(t))!=this.axisAnimation&&(this._animation.axisAnimation=t)}_playAnimation(){var t=this,e=t._chart,a=e.chartType;t._cv!==e.collectionView&&t._setCV(e.collectionView),null!=t._chartType&&t._chartType!==a&&(t._chartType=a,t._animation._clearState()),t._play?t._animation.playAnimation():t._play=!0}animate(){var t=this._chart;if(t){var e=t.itemsSource;t.beginUpdate(),t.itemsSource=null,t.itemsSource=e,t.endUpdate()}}}exports.ChartAnimation=ChartAnimation;class FlexAnimation{constructor(t,e){this._axisAnimation=!0,this._chart=t,this._timers=[]}get animationMode(){return this._animationMode||AnimationMode.All}set animationMode(t){(t=wjcCore.asEnum(t,AnimationMode,!1))!==this._animationMode&&(this._clearState(),this._animationMode=t)}get easing(){return null==this._easing?Easing.Swing:this._easing}set easing(t){t!==this._easing&&(this._easing=wjcCore.asEnum(t,Easing,!1))}get duration(){return this._duration||400}set duration(t){t!==this._duration&&(this._duration=wjcCore.asNumber(t,!1,!0))}get axisAnimation(){return!!this._axisAnimation}set axisAnimation(t){t!==this._axisAnimation&&(this._axisAnimation=wjcCore.asBoolean(t,!1))}playAnimation(){}_clearState(){this._previousState&&(this._previousState=null),this._currentState&&(this._currentState=null)}_setInitState(t,e,a){var i=AnimationHelper.parseAttrs(e,a);AnimationHelper.setElementAttr(t,i,0)}_getAnimation(t,e){return t[e]||(t[e]=[]),t[e]}_toggleVisibility(t,e){e?AnimationHelper.playAnimation(t,{opacity:0},{opacity:1},null,Easing.Swing,100):t.setAttribute("opacity","0")}_toggleDataLabelVisibility(t){var e=this._chart.hostElement,a=e&&e.querySelector(".wj-data-labels");a&&this._toggleVisibility(a,t)}_playAnimation(t){var e,a=this,i=a.duration,n=a.easing,r=t.length;a._toggleDataLabelVisibility(!1),e=a._getDurationAndDelay(t.length,i),this._timers&&this._timers.length&&(this._timers.forEach(t=>window.clearInterval(t)),this._timers.length=0),t.forEach((t,i)=>{var o;t&&(o=window.setTimeout(()=>{var o;t.forEach((t,s)=>{if(t&&t.ele){if(i===r-1&&0===s){var l=t.done;t.done=function(){a._toggleDataLabelVisibility(!0),l&&l()}}wjcCore.isArray(t.ele)?(o=AnimationHelper.playAnimations(t.ele,t.from,t.to,t.done,n,e.duration),this._timers=this._timers.concat.apply(o)):(o=AnimationHelper.playAnimation(t.ele,t.from,t.to,t.done,n,e.duration),this._timers.push(o))}})},e.delay*i),this._timers.push(o))})}_getDurationAndDelay(t,e){var a={duration:e,delay:0};return t>1&&(this._previousState?(a.duration=e/t,a.delay=e/t):(a.duration=.5*e,a.delay=.5*e/(t-1))),a}}class FlexPieAnimation extends FlexAnimation{constructor(t,e){super(t,e),t.selectionChanged.addHandler(this._selectionChanged,this)}_selectionChanged(){this._isSelectionChanged=!0}_clearState(){super._clearState(),this._isSelectionChanged=!1}_getElementRotate(t){var e,a=t.getAttribute("transform");return a=a&&a.indexOf("rotate")>-1?(a=a.replace("rotate(","").replace(")","")).indexOf(",")>-1?a.split(",").map(t=>+t):a.split(" ").map(t=>+t):[0,(e=this._chart._areas[0].center).x,e.y]}_getDurationAndDelay(t,e){var a={duration:e,delay:0};return this.animationMode===AnimationMode.Point&&t>1&&(a.duration=e/t,a.delay=e/t),a}playAnimation(){super.playAnimation();var t=this,e=[];t._playPieAnimation(e),e.length&&t._playAnimation(e)}_playPieAnimation(t){var e=this,a=e._chart,i=!0;if(e._previousState=e._currentState,e._currentState={areas:a._areas,pels:a._pels,rotate:a._pels.length&&e._getElementRotate(a._pels[0].parentNode)},e._previousState&&(i=!1),e._isSelectionChanged)return a.isAnimated||e._playSelectPieAnimation(t),void(e._isSelectionChanged=!1);i?e._playLoadPieAnimation(t):e._playUpdatePieAnimation(t)}_playSelectPieAnimation(t){if(null!=this._previousState){var e,a,i,n=this,r=n._chart._pels[0].parentNode,o=n._previousState.rotate,s=n._getElementRotate(r),l=o[0],c=s[0];l!==c&&(l-c>180?s[0]+=360:c-l>180&&(o[0]+=360),e=n._getAnimation(t,0),a={rotate:o},i={rotate:s},n._setInitState(r,a,i),e.push({ele:r,from:a,to:i}))}}_playUpdatePieAnimation(t){var e,a,i,n,r=this,o=r._chart,s=r._previousState,l=o._areas,c=o._pels,h=s.areas.length,u=l.length,m=Math.max(u,h),d=r._getAnimation(t,0),_=0;if(0!==u&&0!==h)for(r._playSelectPieAnimation(t),e=0;e<m;e++)a={},c[e]&&c[e].childNodes&&c[e].childNodes.length>0&&(e<u&&e<h&&(i=l[0],0===e&&(_=i.angle),1===h?c[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(i.center.x,i.center.y,i.radius,_,2*Math.PI,i.innerRadius||0)):c[e].childNodes[0].setAttribute("d",s.pels[e].childNodes[0].getAttribute("d"))),e<u?(i=l[e],a.to={pie:[i.center.x,i.center.y,i.radius,i.angle,i.sweep,i.innerRadius||0]},a.ele=c[e].childNodes[0]):(i=l[0],n=s.pels[e],a.to={pie:[i.center.x,i.center.y,i.radius,_+2*Math.PI,0,i.innerRadius||0]},c[0].parentNode.appendChild(n),a.done=function(t){return function(){t.parentNode.removeChild(t)}}(n),a.ele=n.childNodes[0]),e<h?(i=s.areas[e],a.from={pie:[i.center.x,i.center.y,i.radius,i.angle,i.sweep,i.innerRadius||0]}):(c[e].childNodes[0].setAttribute("d",AnimationHelper.getPathDescOfPie(i.center.x,i.center.y,i.radius,2*Math.PI+_,0,i.innerRadius||0)),i=s.areas[0],a.from={pie:[i.center.x,i.center.y,i.radius,2*Math.PI+_,0,i.innerRadius||0]}),d.push(a))}_playLoadPieAnimation(t){var e=this,a=e._chart,i=e.animationMode,n=a._areas;a._pels.forEach((a,r)=>{var o,s=a.childNodes[0],l={},c={};s&&(i===AnimationMode.Point?(e._parsePathByAngle(n[r],l,c),o=e._getAnimation(t,r)):(e._parsePathByRadius(n[r],l,c),o=e._getAnimation(t,0)),e._setInitState(s,l,c),o.push({ele:s,from:l,to:c}))})}_parsePathByRadius(t,e,a){var i,n,r=t.center.x,o=t.center.y,s=t.radius,l=t.angle,c=t.sweep;i=[r,o,0,l,c,0],n=[r,o,s,l,c,t.innerRadius||0],e.pie=i,a.pie=n}_parsePathByAngle(t,e,a){var i,n,r=t.center.x,o=t.center.y,s=t.radius,l=t.angle,c=t.sweep,h=t.innerRadius;i=[r,o,s,l,0,h||0],n=[r,o,s,l,c,h||0],e.pie=i,e["stroke-width"]=0,a.pie=n,a["stroke-width"]=1}}class FlexChartAnimation extends FlexAnimation{constructor(t,e){super(t,e)}_clearState(){super._clearState();var t=this;t._prevAxesStates&&(t._prevAxesStates=null),t._currAxesStates&&(t._currAxesStates=null)}playAnimation(){super.playAnimation();var t,e,a,i,n,r,o,s,l,c=this,h=!0,u=c._chart,m=tryGetModuleWijmoChartFinance()&&tryGetModuleWijmoChartFinance().FinancialChart&&u instanceof tryGetModuleWijmoChartFinance().FinancialChart,d=u.series,_=d.length,p=[];for(c._previousState=c._currentState,c._previousXVal=c._currentXVal,c._currentState=[],c._addStart=0,c._removeStart=0,c._currentXVal=u._xlabels.slice(),c._previousState&&c._previousState.length&&(h=!1,n=(r=c._previousState).length,o=c._previousXVal,s=c._currentXVal,o.length>2&&s.length>2&&((t=s.indexOf(o[0]))>0&&t<s.length-2?s[t+1]===o[1]&&s[t+2]===o[2]&&(c._addStart=t):(t=o.indexOf(s[0]))>0&&t<o.length-2&&o[t+1]===s[1]&&o[t+2]===s[2]&&(c._removeStart=t))),t=0;t<_;t++)if(e=d[t],i=null!=e._getChartType()?e._getChartType():u._getChartType(),a=c._getChartType(i),c._currentState.push({seriesType:i,ele:e.hostElement}),m)c._playDefaultAnimation(p,t);else{if(l=r&&r[t],"Default"===a){c._playDefaultAnimation(p,t);continue}if(h||l&&l.seriesType!==i||l&&l.ele&&(""==l.ele.innerHTML||0===l.ele.childNodes.length))c._playLoadAnimation(p,t,a);else if(c._playUpdateAnimation(p,t,a,e,l&&l.ele||null),t===_-1&&t<n-1)for(t++;t<=n-1;t++)c._playUpdateAnimation(p,t,a,null,l.ele)}c._adjustAnimations(a,p),p.length&&c._playAnimation(p),c.axisAnimation&&!m&&c._playAxesAnimation()}_playAxesAnimation(){var t,e,a,i=this,n=i._chart.axes,r=n.length;for(i._prevAxesStates=i._currAxesStates,i._currAxesStates=[],e=0;e<r;e++)(t=n[e]).hostElement&&i._currAxesStates.push({ele:t.hostElement,vals:t._vals,axis:t,maxValue:wjcCore.isDate(t.actualMax)?t.actualMax.getTime():t.actualMax,minValue:wjcCore.isDate(t.actualMin)?t.actualMin.getTime():t.actualMin});if(i._prevAxesStates)for(a=Math.max(i._prevAxesStates.length,i._currAxesStates.length),e=0;e<a;e++)i._playAxisAnimation(i._prevAxesStates[e],i._currAxesStates[e])}_playAxisAnimation(t,e){var a,i=this,n=[],r=[];e&&e.maxValue-e.minValue&&(a=i._parseAxisState(e),i._convertAxisAnimation(n,a.major,e.axis,t.maxValue,t.minValue),i._convertAxisAnimation(n,a.minor,e.axis,t.maxValue,t.minValue)),t&&t.maxValue-t.minValue&&(a=i._parseAxisState(t),i._convertAxisAnimation(r,a.major,t.axis),i._convertAxisAnimation(r,a.minor,t.axis)),n&&r&&i._combineAxisAnimations(n,r),i._playCurrAxisAnimation(n),i._playPrevAxisAnimation(r)}_combineAxisAnimations(t,e){var a,i,n=e.length;for(a=n-1;a>=0;a--)(i=e[a]).text&&t.some(t=>{if(t.text&&t.text===i.text)return this._combineAxisAnimation(t,i),e.splice(a,1),!0})}_combineAxisAnimation(t,e){["label","majorGrid","tick"].forEach(a=>{t[a]&&e[a]&&this._resetExistAxisAttrs(t[a],e[a])})}_resetExistAxisAttrs(t,e){var a=t.ele,i=e.ele,n={},r={};["x","y","x1","x2","y1","y2"].forEach(t=>{var e=a.getAttribute(t),o=i.getAttribute(t);e!==o&&(n[t]=o,r[t]=e)}),t.calcPos=n,t.elePos=r}_convertAxisAnimation(t,e,a,i,n){var r,o=a.hostElement,s=a.axisType==wjcChart.AxisType.Y;e.forEach((e,l)=>{var c=a.convert(e.val,i,n);isNaN(c)||(r={},e.majorGrid&&(r.majorGrid=this._getAxisAnimationAttrs(e.majorGrid,o,c,s)),e.label&&(r.label=this._getAxisAnimationAttrs(e.label,o,c,s),r.text=e.label.innerHTML||e.label.textContent),e.tick&&(r.tick=this._getAxisAnimationAttrs(e.tick,o,c,s)),t.push(r))})}_getAxisAnimationAttrs(t,e,a,i){var n,r,o;return n={ele:t,parent:e,elePos:{},calcPos:{}},"text"===t.nodeName?(r=i?"y":"x",o=Number(t.getAttribute(r)),n.elePos[r]=o,n.calcPos[r]=a):(r=i?"y1":"x1",o=Number(t.getAttribute(r)),i?(n.elePos={y1:o,y2:o},n.calcPos={y1:a,y2:a}):(n.elePos={x1:o,x2:o},n.calcPos={x1:a,x2:a})),n.elePos.opacity=1,n.calcPos.opacity=0,n}_playCurrAxisAnimation(t){var e=this.duration;t&&0!==t.length&&t.forEach(t=>{["majorGrid","label","tick"].forEach(a=>{var i=t[a];if(i){i.parent;var n=i.ele,r=i.elePos,o=i.calcPos;AnimationHelper.playAnimation(n,o,r,null,Easing.Swing,e)}})})}_playPrevAxisAnimation(t){var e=this.duration;t&&0!==t.length&&t.forEach(t=>{["majorGrid","label","tick"].forEach(a=>{var i=t[a];if(i){var n=i.parent,r=i.ele,o=i.elePos,s=i.calcPos;n.appendChild(r),AnimationHelper.playAnimation(r,o,s,function(){r.parentNode===n&&n.removeChild(r)},Easing.Swing,e)}})})}_parseAxisState(t){if(null==t)return null;var e=t.vals,a=t.axis,i=a.axisType==wjcChart.AxisType.Y,n=t.ele.childNodes,r=0,o=e.major,s=e.minor,l=e.hasLbls,c=[],h=[];return o&&o.forEach((t,e)=>{var o,s={},h=!!l[e];c.push(s),s.val=t,o=n[r],a.majorGrid&&wjcCore.hasClass(o,wjcChart.FlexChart._CSS_GRIDLINE)&&(s.majorGrid=o,o=n[++r]),i?(h&&o&&a.majorTickMarks!==wjcChart.TickMark.None&&wjcCore.hasClass(o,wjcChart.FlexChart._CSS_TICK)&&(s.tick=o,o=n[++r]),h&&o&&(wjcCore.hasClass(o,wjcChart.FlexChart._CSS_LABEL)||o.querySelector("."+wjcChart.FlexChart._CSS_LABEL))&&(s.label=o,r++)):(h&&o&&(wjcCore.hasClass(o,wjcChart.FlexChart._CSS_LABEL)||o.querySelector("."+wjcChart.FlexChart._CSS_LABEL))&&(s.label=o,o=n[++r]),h&&o&&a.majorTickMarks!==wjcChart.TickMark.None&&wjcCore.hasClass(o,wjcChart.FlexChart._CSS_TICK)&&(s.tick=o,r++))}),s&&s.forEach((t,e)=>{var i,o={};h.push(o),o.val=t,i=n[r],a.minorTickMarks!==wjcChart.TickMark.None&&wjcCore.hasClass(i,wjcChart.FlexChart._CSS_TICK_MINOR)&&(o.tick=i,i=n[++r]),a.minorGrid&&wjcCore.hasClass(i,wjcChart.FlexChart._CSS_GRIDLINE_MINOR)&&(o.majorGrid=i,r++)}),{major:c,minor:h}}_playLoadAnimation(t,e,a){this["_playLoad"+a+"Animation"](t,e)}_playUpdateAnimation(t,e,a,i,n){null==i||null==n?null==i?this["_play"+a+"RemoveAnimation"](t,n):this["_play"+a+"AddAnimation"](t,i):this["_play"+a+"MoveAnimation"](t,i,n)}_adjustAnimations(t,e){var a,i=e.length;if("Column"===t||"Bar"===t)for(a=i-1;a>=0;a--)null==e[a]&&e.splice(a,1)}_getChartType(t){var e="Default",a=this._chart._isRotated();switch(t){case wjcChart.ChartType.Scatter:case wjcChart.ChartType.Bubble:case wjcChart.ChartType.Candlestick:case wjcChart.ChartType.HighLowOpenClose:e="Scatter";break;case wjcChart.ChartType.Column:case wjcChart.ChartType.Bar:e=a?"Bar":"Column";break;case wjcChart.ChartType.Line:case wjcChart.ChartType.LineSymbols:case wjcChart.ChartType.Area:case wjcChart.ChartType.Spline:case wjcChart.ChartType.SplineSymbols:case wjcChart.ChartType.SplineArea:e="Line";break;default:e="Default"}return e}_playLoadLineAnimation(t,e){var a,i=this,n=i._chart.series[e],r=i.animationMode,o=n.hostElement;r===AnimationMode.Point?i._playDefaultAnimation(t,e):(a=r===AnimationMode.All?i._getAnimation(t,0):i._getAnimation(t,e),[].slice.call(o.childNodes).forEach(t=>{i._setLineRiseDiveAnimation(a,t,!0)}))}_setLineRiseDiveAnimation(t,e,a){var i,n,r,o,s,l,c,h=this,u=h._chart,m=e.nodeName,d=[],_=[],p=h._chart._plotRect,A=p.top+p.height,g=p.left,y={},f={};if("g"===m&&e.childNodes)[].slice.call(e.childNodes).forEach(e=>{this._setLineRiseDiveAnimation(t,e,a)});else{if("polyline"===m||"polygon"===m){for(r=(l=e.points).length||l.numberOfItems,o=0;o<r;o++)s=l[o]||l.getItem(o),u.rotated?d.push({x:g,y:s.y}):d.push({x:s.x,y:A}),_.push({x:s.x,y:s.y});y[m]=d,f[m]=_}else"ellipse"===m&&(h._toggleVisibility(e,!1),a&&(c=function(){h._toggleVisibility(e,!0)}));i=a?y:f,n=a?f:y,h._setInitState(e,i,n),t.push({ele:e,from:i,to:n,done:c})}}_setLineMoveAnimation(t,e,a,i,n){if(null!=e&&null!=a){var r,o,s,l,c,h,u,m,d,_=this,p=e.nodeName,A=[],g=[],y={},f={};for(d="polygon"===p,s=e.points,h=a.points,r=s.length||s.numberOfItems,l=h.length||h.numberOfItems,m=Math.max(r,l),u=0;u<m;u++)u<r&&(o=s[u]||s.getItem(u),A.push({x:o.x,y:o.y})),u<l&&(c=h[u]||h.getItem(u),g.push({x:c.x,y:c.y}));_._addStart?(_._adjustStartLinePoints(_._addStart,A,s),r+=_._addStart):_._removeStart&&(_._adjustStartLinePoints(_._removeStart,g,h),l+=_._removeStart),l>r?_._adjustEndLinePoints(l,r,A,s,d):l<r&&_._adjustEndLinePoints(r,l,g,h,d),y[p]=A,f[p]=g,_._setInitState(i,y,f),t.push({ele:i,from:y,to:f,done:n})}}_adjustStartLinePoints(t,e,a){for(var i=a[0]||a.getItem(0);t;)e.splice(0,0,{x:i.x,y:i.y}),t--}_adjustEndLinePoints(t,e,a,i,n){var r,o,s;for(n&&(i.length>=3||i.numberOfItems>=3)?(o=a.pop(),r=a.pop(),s=i[i.length-3]||i.getItem(i.numberOfItems-3)):(i.length>0||i.numberOfItems>0)&&(s=i[i.length-1]||i.getItem(i.numberOfItems-1));t>e&&s;)a.push({x:s.x,y:s.y}),e++;n&&o&&r&&(a.push(r),a.push(o))}_playLineRemoveAnimation(t,e){var a,i=this,n=i._chart.series[0].hostElement.parentNode,r=i._getAnimation(t,0);n.appendChild(e),[].slice.call(e.childNodes).forEach(t=>{i._setLineRiseDiveAnimation(r,t,!1)}),r.length&&(a=r[0].done,r[0].done=function(){e&&e.parentNode===n&&n.removeChild(e),a&&a()})}_playLineAddAnimation(t,e){var a=e.hostElement,i=this._getAnimation(t,0);[].slice.call(a.childNodes).forEach(t=>{this._setLineRiseDiveAnimation(i,t,!0)})}_playLineMoveAnimation(t,e,a){var i,n,r,o,s=this,l=(s._chart,s._getAnimation(t,0)),c=[];i=e.hostElement,n=[].slice.call(a.childNodes),[].slice.call(i.childNodes).forEach((t,e)=>{o=t.nodeName,r=n[e],"g"===o&&t.nodeChilds?[].slice.call(t.nodeChilds).forEach((t,e)=>{r&&(c.push(t),s._toggleVisibility(t,!1))}):"polygon"===o||"polyline"===o?s._setLineMoveAnimation(l,r,t,t,0===e?function(){c.forEach(t=>{s._toggleVisibility(t,!0)}),c=null}:null):r&&(c.push(t),s._toggleVisibility(t,!1))})}_playLoadColumnAnimation(t,e){this._playLoadBarAnimation(t,e,!0)}_playLoadBarAnimation(t,e,a=!1){var i=this,n=i._chart.series[e],r=i.animationMode,o=n.hostElement;[].slice.call(o.childNodes).forEach((n,o)=>{var s,l=n.nodeName;s=r===AnimationMode.Point?i._getAnimation(t,o):r===AnimationMode.Series?i._getAnimation(t,e):i._getAnimation(t,0),"g"===l?n.childNodes&&[].slice.call(n.childNodes).forEach((t,e)=>{i._setLoadBarAnimation(s,t,a)}):i._setLoadBarAnimation(s,n,a)})}_setBarAnimation(t,e,a,i,n){this._setInitState(e,a,i),t.push({ele:e,from:a,to:i,done:n})}_setLoadBarAnimation(t,e,a,i=!1,n){var r,o,s=this,l=a?"height":"width",c=a?"y":"x",h=e.getAttribute(l),u=e.getAttribute(c),m=a?"top":"left",d=s._chart._plotRect,_={},p={};_[l]=0,p[l]=Number(h),a&&(_[c]=d[l]+d[m],p[c]=Number(u)),r=i?p:_,o=i?_:p,"g"===e.nodeName?e.childNodes&&[].slice.call(e.childNodes).forEach(e=>{s._setBarAnimation(t,e,r,o,n)}):s._setBarAnimation(t,e,r,o,n)}_setMoveBarAnimation(t,e,a){var i={},n={};null!=e&&null!=a&&(["width","height","x","y","top","left"].forEach(t=>{var r=e.getAttribute(t),o=a.getAttribute(t);r!==o&&(i[t]=Number(r),n[t]=Number(o))}),this._setInitState(a,i,n),t.push({ele:a,from:i,to:n}))}_playColumnRemoveAnimation(t,e){this._playBarRemoveAnimation(t,e,!0)}_playColumnAddAnimation(t,e){this._playBarAddAnimation(t,e,!0)}_playColumnMoveAnimation(t,e,a){this._playBarMoveAnimation(t,e,a,!0)}_playBarRemoveAnimation(t,e,a=!1){var i=this,n=i._chart.series[0].hostElement.parentNode,r=i._getAnimation(t,0);n.appendChild(e),[].slice.call(e.childNodes).forEach(t=>{i._setLoadBarAnimation(r,t,a,!0)}),r.length&&(r[0].done=function(){e&&e.parentNode===n&&n.removeChild(e)})}_playBarAddAnimation(t,e,a=!1){var i=e.hostElement,n=this._getAnimation(t,2);[].slice.call(i.childNodes).forEach(t=>{this._setLoadBarAnimation(n,t,a,!1)})}_playBarMoveAnimation(t,e,a,i=!1){var n,r,o,s,l,c,h,u=this;u._chart;if(n=e.hostElement,o=[].slice.call(a.childNodes),u._addStart)for(h=0,s=o[0];h<u._addStart;)o.splice(0,0,s),h++;if(u._removeStart)for(h=0,s=o[o.length-1];h<u._removeStart;){var m=o.shift();o.push(m),h++}l=o.length,r=[].slice.call(n.childNodes),c=r.length,r.forEach((e,a)=>{var n;if(a<l){if(s=o[a],a<u._addStart?(n=u._getAnimation(t,2),u._setLoadBarAnimation(n,e,i,!1)):a>=l-u._removeStart?(n=u._getAnimation(t,2),u._setLoadBarAnimation(n,e,i,!1),n=u._getAnimation(t,0),u._removeBarAnimation(n,e,s,i)):(n=u._getAnimation(t,1),u._setMoveBarAnimation(n,s,e)),a===c-1&&a<l-1)for(n=u._getAnimation(t,0),a++;a<l;a++)s=o[a],u._removeBarAnimation(n,e,s,i)}else n=u._getAnimation(t,2),u._setLoadBarAnimation(n,e,i,!1)})}_removeBarAnimation(t,e,a,i){var n=e.parentNode;n.appendChild(a),this._setLoadBarAnimation(t,a,i,!0,function(t){return function(){t.parentNode&&t.parentNode===n&&n.removeChild(t)}}(a))}_playLoadScatterAnimation(t,e){var a=this,i=a._chart,n=i.series[e],r=a.animationMode,o=n.hostElement,s=n._xValues||i._xvals;0===s.length&&(s=n._pointIndexes),[].slice.call(o.childNodes).forEach((i,n)=>{var o;o=r===AnimationMode.Point?a._getScatterAnimation(t,s[n]):r===AnimationMode.Series?a._getAnimation(t,e):a._getAnimation(t,0),a._setLoadScatterAnimation(o,i,!1)})}_setLoadScatterAnimation(t,e,a=!1,i){var n,r,o={},s={};"g"===e.nodeName&&e.childNodes?[].slice.call(e.childNodes).forEach(e=>{this._setLoadScatterAnimation(t,e,a,i)}):(["rx","ry","stroke-width"].forEach(t=>{var a=e.getAttribute(t);o[t]=0,s[t]=Number(a)}),n=a?s:o,r=a?o:s,this._setInitState(e,n,r),t.push({ele:e,from:n,to:r,done:i}))}_setUpdateScatterAnimation(t,e,a,i){var n={},r={};["cx","cy"].forEach(t=>{var i=e.getAttribute(t),o=a.getAttribute(t);i!==o&&(n[t]=Number(i),r[t]=Number(o))}),this._setInitState(a,n,r),t.push({ele:a,from:n,to:r,done:i})}_getScatterAnimation(t,e){var a=this._getScatterAnimationIndex(t,e);return t[a]||(t[a]=[]),t[a]}_getScatterAnimationIndex(t,e){var a=this._chart.axisX,i=null==a.min?a.actualMin:a.min,n=null==a.max?a.actualMax:a.max;return Math.ceil((e-i)/((n-i)/20))}_playScatterRemoveAnimation(t,e){var a=this,i=a._chart.series[0].hostElement.parentNode,n=a._getAnimation(t,0);i.appendChild(e),[].slice.call(e.childNodes).forEach(t=>{a._setLoadScatterAnimation(n,t,!0)}),n.length&&(n[0].done=function(){e&&e.parentNode===i&&i.removeChild(e)})}_playScatterAddAnimation(t,e){var a=e.hostElement,i=this._getAnimation(t,0);[].slice.call(a.childNodes).forEach(t=>{this._setLoadScatterAnimation(i,t,!1)})}_playScatterMoveAnimation(t,e,a){var i,n,r,o,s,l,c,h=this,u=(h._chart,h._getAnimation(t,0));if(i=e.hostElement,r=[].slice.call(a.childNodes),h._addStart)for(c=0,o=r[0];c<h._addStart;)r.splice(0,0,o),c++;if(h._removeStart)for(c=0,o=r[r.length-1];c<h._removeStart;){var m=r.shift();r.push(m),c++}s=r.length,n=[].slice.call(i.childNodes),l=n.length,n.forEach((t,e)=>{if(e<s){if(e<h._addStart?h._setLoadScatterAnimation(u,t,!1):e>=s-h._removeStart?(h._setLoadScatterAnimation(u,t,!1),o=r[e],h._removeScatterAnimation(u,t,o)):(o=r[e],h._setUpdateScatterAnimation(u,o,t)),e===l-1&&e<s-1)for(e++;e<s;e++)o=r[e],h._removeScatterAnimation(u,t,o)}else h._setLoadScatterAnimation(u,t,!1)})}_removeScatterAnimation(t,e,a){var i=e.parentNode;i.appendChild(a),this._setLoadScatterAnimation(t,a,!0,function(t){return function(){t.parentNode&&t.parentNode===i&&i.removeChild(t)}}(a))}_playDefaultAnimation(t,e){var a,i=this._chart,n=i.series[e].hostElement,r=i._plotRect,o=i._currentRenderEngine,s=n.getAttribute("clip-path"),l="clipPath"+(1e6*Math.random()).toFixed();o.addClipRect(new wjcCore.Rect(r.left,r.top,0,r.height),l),n.setAttribute("clip-path","url(#"+l+")"),a=i.hostElement.querySelector("#"+l),this._getAnimation(t,0).push({ele:a.querySelector("rect"),from:{width:0},to:{width:r.width},done:function(){n&&(s?n.setAttribute("clip-path",s):n.removeAttribute("clip-path"),a&&a.parentNode&&a.parentNode.removeChild(a))}})}}class FlexRadarAnimation extends FlexChartAnimation{constructor(t,e){super(t,e)}_getDurationAndDelay(t,e){var a=super._getDurationAndDelay(t,e);return this.animationMode===AnimationMode.Point&&(a.duration=e/t,a.delay=e/t),a}_playAxesAnimation(){}_getChartType(t){var e=super._getChartType(t);return"Bar"===e&&(e="Column"),e}_playLoadLineAnimation(t,e){var a,i,n,r=this,o=r._chart,s=r._chart.series[e],l=s._xValues||o._xvals,c=r.animationMode,h=s.hostElement;c===AnimationMode.Point?(0===l.length&&(l=s._pointIndexes),n=[].slice.call(h.childNodes),i=n.length-h.querySelectorAll("ellipse").length,n.forEach((e,a)=>{r._setRadarLinePointAnimation(t,e,a,l,i)})):(a=c===AnimationMode.All?r._getAnimation(t,0):r._getAnimation(t,e),[].slice.call(h.childNodes).forEach(t=>{r._setLineRiseDiveAnimation(a,t,!0)}))}_setRadarLinePointAnimation(t,e,a,i,n){var r,o,s,l,c,h,u,m=this,d=m._chart,_=e.nodeName,p=[],A=[],g=[],y=[],f=d._center,x=[],E=!1,v={},C={},S=0;if("polyline"===_||"polygon"===_){for(r=(l=e.points).length||l.numberOfItems,o=0;o<r;o++)x[u=m._getScatterAnimationIndex(t,i[o])]||(x[u]=[]),x[u].push(o),s=l[o]||l.getItem(o),p.push({x:f.x,y:f.y}),A.push({x:s.x,y:s.y});for(o=0,r=x.length;o<r;o++)x[o]&&(h=m._getAnimation(t,S),g=y.length?y.slice():p.slice(),y=g.slice(),x[o].forEach(t=>{var e=A[t];y[t]={x:e.x,y:e.y}}),C={},(v={})[_]=g,C[_]=y,E||(m._setInitState(e,v,C),E=!0),h.push({ele:e,from:v,to:C,done:c}),S++)}else if("ellipse"===_){if((o=a-(n||0))<0)return;h=d._isPolar?m._getScatterAnimation(t,i[o]):m._getScatterAnimation(t,o),m._toggleVisibility(e,!1),c=function(){m._toggleVisibility(e,!0)},h.push({ele:e,from:v,to:C,done:c})}}_setLineRiseDiveAnimation(t,e,a){var i,n,r,o,s,l,c,h=this,u=h._chart,m=e.nodeName,d=[],_=[],p=u._center,A={},g={};if("polyline"===m||"polygon"===m){for(r=(l=e.points).length||l.numberOfItems,o=0;o<r;o++)s=l[o]||l.getItem(o),d.push({x:p.x,y:p.y}),_.push({x:s.x,y:s.y});A[m]=d,g[m]=_}else"ellipse"===m&&(h._toggleVisibility(e,!1),a&&(c=function(){h._toggleVisibility(e,!0)}));i=a?A:g,n=a?g:A,h._setInitState(e,i,n),t.push({ele:e,from:i,to:n,done:c})}_parsePathByRadius(t,e,a){var i,n,r=t.center.x,o=t.center.y,s=t.radius,l=t.angle,c=t.sweep;i=[r,o,0,l,c,0],n=[r,o,s,l,c,t.innerRadius||0],e.pie=i,a.pie=n}_playUpdateAnimation(t,e,a,i,n){if("Bar"===a||"Column"===a){if(null==i)return;this._playLoadBarAnimation(t,e,!1)}else super._playUpdateAnimation(t,e,a,i,n)}_playLoadBarAnimation(t,e,a=!1){var i=this,n=i._chart,r=n.series[e],o=n._areas[e],s=i.animationMode,l=r.hostElement;[].slice.call(l.childNodes).forEach((a,n)=>{var r,l,c={},h={};r=s===AnimationMode.Point?i._getAnimation(t,n):s===AnimationMode.Series?i._getAnimation(t,e):i._getAnimation(t,0),l=o[n],i._parsePathByRadius(l,c,h),i._setInitState(a,c,h),r.push({ele:a,from:c,to:h})})}}class AnimationHelper{static playAnimations(t,e,a,i,n=Easing.Swing,r,o){var s=t.length,l=0,c=[];return t.forEach((t,h)=>{var u=AnimationHelper.playAnimation(t,e[h],a[h],function(){l===s-1&&i&&i(),l++},n,r,o);c.push(u)}),c}static playAnimation(t,e,a,i,n=Easing.Swing,r,o){var s=AnimationHelper.parseAttrs(e,a);return AnimationHelper.animate(function(e){AnimationHelper.setElementAttr(t,s,e)},i,n,r,o)}static setElementAttr(t,e,a){var i,n;for(n in e)i=e[n],AnimationHelper.calcValue(i,a),t.setAttribute(n,i.getValue(i.value,a))}static getPathDescOfPie(t,e,a,i,n,r=0){var o=!1;n>=2*Math.PI&&(o=!0,n=2*Math.PI-.001);var s=new wjcCore.Point(t,e);s.x+=a*Math.cos(i),s.y+=a*Math.sin(i);var l=i+n,c=new wjcCore.Point(t,e);if(c.x+=a*Math.cos(l),c.y+=a*Math.sin(l),r){var h=new wjcCore.Point(t,e);h.x+=r*Math.cos(l),h.y+=r*Math.sin(l);var u=new wjcCore.Point(t,e);u.x+=r*Math.cos(i),u.y+=r*Math.sin(i)}var m=" 0 0,1 ",d=" 0 0,0 ";Math.abs(n)>Math.PI&&(m=" 0 1,1 ",d=" 0 1,0 ");var _="M "+s.x.toFixed(3)+","+s.y.toFixed(3);return _+=" A "+a.toFixed(3)+","+a.toFixed(3)+m,_+=c.x.toFixed(3)+","+c.y.toFixed(3),r?(_+=o?" M "+h.x.toFixed(3)+","+h.y.toFixed(3):" L "+h.x.toFixed(3)+","+h.y.toFixed(3),_+=" A "+r.toFixed(3)+","+r.toFixed(3)+d,_+=u.x.toFixed(3)+","+u.y.toFixed(3)):_+=" L "+t.toFixed(3)+","+e.toFixed(3),o||(_+=" z"),_}static parseAttrs(t,e){var a={};for(var i in t)if(null!=e[i])switch(i){case"polyline":a.points=AnimationHelper.parseAttr(t[i],e[i],function(t,e){if(1===e){for(var a,i,n;t.length>1;){if(i=t[0],n=t[1],i.x!==n.x||i.y!==n.y){i=null,n=null;break}t.splice(1,1)}for(a=t.length-1;a>0;a--)if(i=n,n=t[a],i){if(i.x!==n.x||i.y!==n.y)break;t.pop()}}return t.map(t=>t.x+","+t.y).join(" ")});break;case"polygon":a.points=AnimationHelper.parseAttr(t[i],e[i],function(t,e){if(1===e){var a,i,n,r,o;for(r=t.pop(),o=t.pop();t.length>1;){if(i=t[0],n=t[1],i.x!==n.x||i.y!==n.y){i=null,n=null;break}t.splice(1,1)}for(a=t.length-1;a>=0;a--)if(i=n,n=t[a],i){if(i.x!==n.x||i.y!==n.y)break;t.splice(a,1)}t.push(o),t.push(r)}return t.map(t=>t.x+","+t.y).join(" ")});break;case"d":a[i]=AnimationHelper.parseAttr(t[i],e[i],function(t){return t.map(t=>"string"==typeof t?t:t[0]+","+t[1]).join(" ")});break;case"pie":a.d=AnimationHelper.parseAttr(t[i],e[i],function(t){return AnimationHelper.getPathDescOfPie.apply(AnimationHelper,t)});break;case"rotate":a.transform=AnimationHelper.parseAttr(t[i],e[i],function(t){return"rotate("+t.join(" ")+")"});break;case"width":case"height":case"rx":case"ry":case"stroke-width":a[i]=AnimationHelper.parseAttr(t[i],e[i],function(t){return Math.abs(t)});break;default:a[i]=AnimationHelper.parseAttr(t[i],e[i])}return a}static animate(t,e,a=Easing.Swing,i=400,n=16){wjcCore.asFunction(t),wjcCore.asNumber(i,!1,!0),wjcCore.asNumber(n,!1,!0);var r=0,o=setInterval(function(){Date.now();var s=r/i;s=EasingHelper[Easing[a]](s),t(s),(r+=n)>=i&&(clearInterval(o),(s<1||s>1)&&t(1),e&&e())},n);return o}static calcValue(t,e){var a=t.from,i=t.diff,n=t.value;wjcCore.isNumber(a)?t.value=0===i?a:a+i*e:wjcCore.isArray(a)&&AnimationHelper.parseArrayAttr(n,a,i,function(t,a){return"number"==typeof t?t+a*e:t})}static parseAttr(t,e,a){var i,n,r,o;return wjcCore.isArray(t)&&wjcCore.isArray(e)?(n=e,r=[],o=(i=t).slice(),AnimationHelper.parseArrayAttr(r,i,n,function(t,e){return t===e?0:e-t})):(o=i=Number(t),r=(n=Number(e))-i),{from:i,to:n,value:o,diff:r,getValue:a||function(t,e){return t}}}static parseArrayAttr(t,e,a,i){e.forEach((e,n)=>{var r={},o=[],s=a[n];wjcCore.isNumber(e)||"string"==typeof e?t[n]=i(e,s):wjcCore.isArray(e)?(e.forEach((t,a)=>{o[a]=i(e[a],s[a])}),t[n]=o):(Object.getOwnPropertyNames(e).forEach(t=>{r[t]=i(e[t],s[t])}),t[n]=r)})}}class EasingHelper{static Linear(t){return t}static Swing(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)}static EaseInQuad(t){return t*t}static EaseOutQuad(t){return t*(2-t)}static EaseInOutQuad(t){return t<.5?2*t*t:(4-2*t)*t-1}static EaseInCubic(t){return t*t*t}static EaseOutCubic(t){return--t*t*t+1}static EaseInOutCubic(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}static EaseInQuart(t){return t*t*t*t}static EaseOutQuart(t){return 1- --t*t*t*t}static EaseInOutQuart(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t}static EaseInQuint(t){return t*t*t*t*t}static EaseOutQuint(t){return 1+--t*t*t*t*t}static EaseInOutQuint(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}static EaseInSine(t){return 1-Math.cos(t*(Math.PI/2))}static EaseOutSine(t){return Math.sin(t*(Math.PI/2))}static EaseInOutSine(t){return-.5*(Math.cos(Math.PI*t)-1)}static EaseInExpo(t){return 0==t?0:Math.pow(2,10*(t-1))}static EaseOutExpo(t){return 1==t?1:1-Math.pow(2,-10*t)}static EaseInOutExpo(t){return t==!!t?t:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))}static EaseInCirc(t){return-(Math.sqrt(1-t*t)-1)}static EaseOutCirc(t){return Math.sqrt(1-Math.pow(t-1,2))}static EaseInOutCirc(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}static EaseInBack(t){var e=1.70158;return t*t*((e+1)*t-e)}static EaseOutBack(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1}static EaseInOutBack(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)}static EaseInBounce(t){return 1-EasingHelper.EaseOutBounce(1-t)}static EaseOutBounce(t){var e=7.5625;return t<1/2.75?e*t*t:t<2/2.75?e*(t-=1.5/2.75)*t+.75:t<2.5/2.75?e*(t-=2.25/2.75)*t+.9375:e*(t-=2.625/2.75)*t+.984375}static EaseInOutBounce(t){return t<.5?.5*EasingHelper.EaseInBounce(2*t):.5*EasingHelper.EaseOutBounce(2*t-1)+.5}static EaseInElastic(t){return t==!!t?t:-Math.pow(2,10*(t-=1))*Math.sin((t-.075)*(2*Math.PI)/.3)}static EaseOutElastic(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}static EaseInOutElastic(t){return t==!!t?t:(t*=2)<1?Math.pow(2,10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*-.5:Math.pow(2,-10*(t-=1))*Math.sin((t-.1125)*(2*Math.PI)/.45)*.5+1}}