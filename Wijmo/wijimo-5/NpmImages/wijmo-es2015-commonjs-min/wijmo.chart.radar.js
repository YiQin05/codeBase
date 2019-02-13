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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcChart=require("wijmo/wijmo.chart"),wjcCore=require("wijmo/wijmo");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.chart.radar");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.chart=__glob.wijmo.chart||{},__glob.wijmo.chart.radar=wjcSelf;var RadarChartType;!function(t){t[t.Column=0]="Column",t[t.Scatter=1]="Scatter",t[t.Line=2]="Line",t[t.LineSymbols=3]="LineSymbols",t[t.Area=4]="Area"}(RadarChartType=exports.RadarChartType||(exports.RadarChartType={}));class FlexRadar extends wjcChart.FlexChartCore{constructor(t,e){super(t,e),this._chartType=RadarChartType.Line,this._startAngle=0,this._totalAngle=360,this._reversed=!1,this._areas=[]}get _radarLinePlotter(){return null==this.__radarLinePlotter&&(this.__radarLinePlotter=new _RadarLinePlotter,this._initPlotter(this.__radarLinePlotter)),this.__radarLinePlotter}get _radarColumnPlotter(){return null==this.__radarColumnPlotter&&(this.__radarColumnPlotter=new _RadarBarPlotter,this._initPlotter(this.__radarColumnPlotter)),this.__radarColumnPlotter}_initAxes(){super._initAxes(),this.axes.pop(),this.axes.pop(),this.axisX=new FlexRadarAxis(wjcChart.Position.Bottom),this.axisX.majorGrid=!0,this.axisY=new FlexRadarAxis(wjcChart.Position.Left),this.axisY.majorTickMarks=wjcChart.TickMark.Outside,this.axes.push(this.axisX),this.axes.push(this.axisY)}_layout(t,e,a){super._layout(t,e,a);var r=this.axisX._height;this._plotRect.top+=r/2;var i=this._plotRect;this._radius=Math.min(i.width,i.height)/2,this._center=new wjcCore.Point(i.left+i.width/2,i.top+i.height/2)}get chartType(){return this._chartType}set chartType(t){(t=wjcCore.asEnum(t,RadarChartType))!=this._chartType&&(this._chartType=t,this.invalidate())}get startAngle(){return this._startAngle}set startAngle(t){t!=this._startAngle&&(this._startAngle=wjcCore.asNumber(t,!0),this.invalidate())}get totalAngle(){return this._totalAngle}set totalAngle(t){t!=this._totalAngle&&t>=0&&(this._totalAngle=wjcCore.asNumber(t,!0),this._totalAngle<=0&&(wjcCore.assert(!1,"totalAngle must be greater than 0."),this._totalAngle=0),this._totalAngle>360&&(wjcCore.assert(!1,"totalAngle must be less than or equal to 360."),this._totalAngle=360),this.invalidate())}get reversed(){return this._reversed}set reversed(t){t!=this._reversed&&(this._reversed=wjcCore.asBoolean(t,!0),this.invalidate())}get stacking(){return this._stacking}set stacking(t){(t=wjcCore.asEnum(t,wjcChart.Stacking))!=this._stacking&&(this._stacking=t,this.invalidate())}_getChartType(){var t=wjcChart.ChartType.Line;switch(this.chartType){case RadarChartType.Area:t=wjcChart.ChartType.Area;break;case RadarChartType.Line:t=wjcChart.ChartType.Line;break;case RadarChartType.Column:t=wjcChart.ChartType.Column;break;case RadarChartType.LineSymbols:t=wjcChart.ChartType.LineSymbols;break;case RadarChartType.Scatter:t=wjcChart.ChartType.Scatter}return t}_getPlotter(t){var e=this.chartType,a=null;if(t){var r=t.chartType;null!=r&&r!=e&&(e=r,!0)}switch(e){case RadarChartType.Line:this._radarLinePlotter.hasSymbols=!1,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!1,a=this._radarLinePlotter;break;case RadarChartType.LineSymbols:this._radarLinePlotter.hasSymbols=!0,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!1,a=this._radarLinePlotter;break;case RadarChartType.Area:this._radarLinePlotter.hasSymbols=!1,this._radarLinePlotter.hasLines=!0,this._radarLinePlotter.isArea=!0,a=this._radarLinePlotter;break;case RadarChartType.Scatter:this._radarLinePlotter.hasSymbols=!0,this._radarLinePlotter.hasLines=!1,this._radarLinePlotter.isArea=!1,a=this._radarLinePlotter;break;case RadarChartType.Column:this._radarColumnPlotter.isVolume=!1,this._radarColumnPlotter.width=.8,a=this._radarColumnPlotter;break;default:a=super._getPlotter(t)}return a}_convertPoint(t,e){var a=new wjcCore.Point,r=this._center;return a.x=r.x+t*Math.sin(e),a.y=r.y-t*Math.cos(e),a}_createSeries(){return new FlexRadarSeries}_clearCachedValues(){super._clearCachedValues(),this._isPolar=!1,this._areas=[]}_performBind(){if(this._xDataType=null,this._xlabels.splice(0),this._xvals.splice(0),this._cv){var t=this._cv.items;if(t){for(var e=t.length,a=0;a<e;a++){var r=t[a];if(this.bindingX){var i=r[this.bindingX];wjcCore.isNumber(i)?(this._xvals.push(wjcCore.asNumber(i)),this._xDataType=wjcCore.DataType.Number):wjcCore.isDate(i)&&(this._xDataType=wjcCore.DataType.Date),this._xlabels.push(r[this.bindingX])}}this._xvals.length==e?this._xlabels.splice(0):this._xvals.splice(0)}}this._xDataType===wjcCore.DataType.Number&&(this._isPolar=!0)}_prepareRender(){super._prepareRender(),this._areas=[]}}exports.FlexRadar=FlexRadar;class FlexRadarSeries extends wjcChart.SeriesBase{get chartType(){return this._finChartType}set chartType(t){(t=wjcCore.asEnum(t,RadarChartType,!0))!=this._finChartType&&(this._finChartType=t,this._invalidate())}_getChartType(){var t;switch(this.chartType){case RadarChartType.Area:t=wjcChart.ChartType.Area;break;case RadarChartType.Line:t=wjcChart.ChartType.Line;break;case RadarChartType.Column:t=wjcChart.ChartType.Column;break;case RadarChartType.LineSymbols:t=wjcChart.ChartType.LineSymbols;break;case RadarChartType.Scatter:t=wjcChart.ChartType.Scatter}return t}}exports.FlexRadarSeries=FlexRadarSeries;class FlexRadarAxis extends wjcChart.Axis{constructor(){super(...arguments),this._points=[],this._axisLabels=[]}_render(t){if(this._hasVisibileSeries()){super._render(t);var e=this._axisLabels;if(e.length){var a=()=>{var r=this.axisType==wjcChart.AxisType.X?"wj-axis-x-labels "+wjcChart.FlexChart._CSS_AXIS_X:"wj-axis-y-labels "+wjcChart.FlexChart._CSS_AXIS_Y;t.startGroup(r),e.forEach(e=>{var a=e.labelAngle;a>0?wjcChart.FlexChart._renderRotatedText(t,e.text,e.pos,e.align,e.vAlign,e.pos,a,e.class):a<0?wjcChart.FlexChart._renderRotatedText(t,e.text,e.pos,e.align,e.vAlign,e.pos,a,e.class):this._renderLabel(t,e.val,e.text,e.pos,e.align,e.vAlign,e.class)}),t.endGroup(),this._axisLabels=[],this._chart.rendered.removeHandler(a)};this._chart.rendered.addHandler(a,this)}}}_getHeight(t,e){var a=super._getHeight(t,e);return this._axisType==wjcChart.AxisType.Y&&(a=4),this._height=2*a,2*a}_getActualRange(){return this._isTimeAxis&&null!=this.__actualMax&&null!=this.__actualMin?this.__actualMax-this.__actualMin:super._getActualRange()}_updateActualLimits(t,e,a,r=null,i=null){super._updateActualLimits(t,e,a,r,i);var s,h=this._chart,l=this._lbls,n=this.actualMin.valueOf?this.actualMin.valueOf():this.actualMin,o=this.actualMax.valueOf?this.actualMax.valueOf():this.actualMax;this._lbls&&this===h.axisX&&(h._angles=[],this._isTimeAxis&&0===this._lbls.length&&this._values.forEach(t=>{l.push(this._formatValue(t))}),s=l.length,h.totalAngle<360&&(s-=1),l.forEach((t,e)=>{var a=n+e/s*(o-n),r=h.startAngle+e/s*h.totalAngle;isNaN(r)||isNaN(a)||h._angles.push({value:this.convert(a),angle:r}),this._isTimeAxis?((null==this.__actualMin||this.__actualMin>t)&&(this.__actualMin=t),(null==this.__actualMax||this.__actualMax<t)&&(this.__actualMax=t)):null==this.__actualMin&&null==this.__actualMax||(this.__actualMin=null,this.__actualMax=null)}),this._isTimeAxis&&this._lbls.length>0&&(this._updateAutoFormat(0),this._lbls=l.map(t=>{let e=wjcCore.asDate(t).valueOf();return this._formatValue(e)})))}_updateActualLimitsByChartType(t,e,a){var r=this._chart;if(r._getChartType()!=wjcChart.ChartType.Column&&360===r.totalAngle&&this.axisType===wjcChart.AxisType.X)if(this._isTimeAxis){var i=(r._xlabels.length||r._xvals.length)-1;a+=(a-e)/(i=i<1?1:i)}else r._isPolar||(a+=1);return{min:e,max:a}}convert(t,e,a){var r=null==e?this.actualMax:e,i=null==a?this.actualMin:a,s=this._chart;if(!s)return NaN;if(r==i)return 0;if(this.axisType===wjcChart.AxisType.X)return s.reversed?(s.startAngle-(t-i)/(r-i)*s.totalAngle)*Math.PI/180:(s.startAngle+(t-i)/(r-i)*s.totalAngle)*Math.PI/180;if(this._getLogBase()){if(t<=0)return NaN;var h=Math.log(r/i);return Math.log(t/i)/h*s._radius}return(t-i)/(r-i)*s._radius}_renderLineAndTitle(t){var e=this._chart,a=wjcChart.FlexChart._CSS_LINE,r=(e.startAngle-90)*Math.PI/180,i=e.totalAngle*Math.PI/180,s=e._radius;this.axisType===wjcChart.AxisType.X&&this.axisLine&&(t.stroke=wjcChart.FlexChart._FG,e._isPolar?(r=e.reversed?r-i:r,t.drawPieSegment(e._center.x,e._center.y,s,r,i,a)):this._renderPolygon(t,s,a))}_renderPolygon(t,e,a){var r=this._chart,i=r._angles,s=i.length,h=r.axisX.minorGrid,l=[],n=[];if(i.forEach((t,a)=>{if(h&&a>0){var s=r._convertPoint(e,t.value-(t.value-i[a-1].value)/2);l.push(s.x),n.push(s.y)}var o=r._convertPoint(e,t.value);l.push(o.x),n.push(o.y)}),r.totalAngle<360)l.push(r._center.x),n.push(r._center.y);else if(h&&s>=2){var o=r._convertPoint(e,i[s-1].value-(i[s-2].value-i[s-1].value)/2);l.push(o.x),n.push(o.y)}t.drawPolygon(l,n,a)}_renderMinors(t,e,a,r){var i,s=this._chart,h=wjcChart.FlexChart._CSS_GRIDLINE_MINOR,l=this.minorGrid,n=s._angles,o=n.length,_=s.axisX.minorGrid,c=wjcChart.FlexChart._FG,u=this._GRIDLINE_WIDTH,d=(s.startAngle,Math.PI,s.totalAngle,Math.PI,this._TICK_OVERLAP),g=this.minorTickMarks,C=!0;this._vals.minor=e,g==wjcChart.TickMark.Outside?d=1:g==wjcChart.TickMark.Inside?d=-1:g==wjcChart.TickMark.Cross?d=0:C=!1,this.axisType==wjcChart.AxisType.Y?(t.stroke=c,t.strokeWidth=u,e.forEach(e=>{var a=this.convert(e);if(l&&this._renderYGridLine(t,s,a,h),C&&(n.forEach((e,r)=>{if(_&&r>0){i=e.value-(e.value-n[r-1].value)/2;var h=s._convertPoint(a,i);this._drawMinorTickLength(t,d,i,h)}i=e.value;var l=s._convertPoint(a,i);this._drawMinorTickLength(t,d,i,l)}),_&&o>=2)){i=n[o-1].value-(n[o-2].value-n[o-1].value)/2;var r=s._convertPoint(a,i);this._drawMinorTickLength(t,d,i,r)}})):(t.stroke=c,t.strokeWidth=u,e.forEach(e=>{var a=this.convert(e);l&&(this._renderXGridLine(t,s,a,h),C&&this._drawMinorTickLength(t,d,a-Math.PI/2,s._convertPoint(s._radius,a)))}))}_drawMinorTickLength(t,e,a,r){var i=this._TICK_HEIGHT,s=wjcChart.FlexChart._CSS_TICK_MINOR,h=.5*(e-1)*i*Math.cos(a),l=.5*(1+e)*i*Math.cos(a),n=.5*(e-1)*i*Math.sin(a),o=.5*(1+e)*i*Math.sin(a);t.drawLine(r.x+h,r.y+n,r.x+l,r.y+o,s)}_renderLabelsAndTicks(t,e,a,r,i,s,h,l,n){this._points=[],i=this.labelAngle||0;var o,_=this._chart,c=this.labelPadding||2,u=wjcChart.FlexChart._CSS_LABEL,d=wjcChart.FlexChart._CSS_GRIDLINE,g=wjcChart.FlexChart._CSS_TICK,C=wjcChart.FlexChart._FG,p=this._TICK_WIDTH,v=this.majorGrid,x=wjcChart.FlexChart._FG,w=this._GRIDLINE_WIDTH,y=_.startAngle*Math.PI/180,A=(_.totalAngle,Math.PI,1);if(this.axisType==wjcChart.AxisType.Y){v=a!=this.actualMin&&v&&a!=this.actualMax;var T=this.convert(a),j=_._convertPoint(T,y);if(v&&(t.stroke=x,t.strokeWidth=w,this._renderYGridLine(t,_,T,d)),t.stroke=C,t.strokeWidth=p,h){(o=(_.startAngle%360+360)%360)<=90&&o>=75||o>=270&&o<=285?A=2:(o>90&&o<=105||o<270&&o>=255)&&(A=0);b=new wjcCore.Point(j.x-c-Math.abs(l-n),j.y);this._axisLabels.push({val:a,text:r,pos:b,align:2,vAlign:A,labelAngle:i,class:u})}s!=wjcChart.TickMark.None&&t.drawLine(j.x-n*Math.cos(y),j.y-n*Math.sin(y),j.x-l*Math.cos(y),j.y-l*Math.sin(y),g)}else{var m=this.convert(a);if(v&&(t.stroke=x,t.strokeWidth=w,this._renderXGridLine(t,_,m,d)),t.stroke=C,t.strokeWidth=p,h){var P,f,L,b=_._convertPoint(_._radius+c,m);P=_._angles&&_._angles.length?_._angles[e].angle:_.startAngle+(a-this.actualMin)*_.totalAngle/(this.actualMax-this.actualMin),P=(P%=360)>=0?P:P+360,f=this._getXLabelVAlign(P),L=this._getXLabelAlign(P),_._isPolar&&(r=this._formatValue(P)),i>0?wjcChart.FlexChart._renderRotatedText(t,r,b,L,f,b,i,u):i<0?wjcChart.FlexChart._renderRotatedText(t,r,b,L,f,b,i,u):this._renderLabel(t,a,r,b,L,f,u)}s!=wjcChart.TickMark.None&&this._renderXTick(t,_,m,g,l,n)}return!0}_renderXGridLine(t,e,a,r){var i=e._center,s=e._convertPoint(e._radius,a);t.drawLine(i.x,i.y,s.x,s.y,r)}_renderXTick(t,e,a,r,i,s){var h,l;e._center;h=e._convertPoint(e._radius+i,a),l=e._convertPoint(e._radius+s,a),t.drawLine(h.x,h.y,l.x,l.y,r)}_renderYGridLine(t,e,a,r){e._angles;var i=e._center,s=e.startAngle*Math.PI/180,h=e.totalAngle*Math.PI/180;e._isPolar?(s=(e.startAngle-90)*Math.PI/180,s=e.reversed?s-h:s,t.drawPieSegment(i.x,i.y,a,s,h,r)):this._renderPolygon(t,a,r)}_getXLabelVAlign(t){var e=1,a=this._chart,r=a.startAngle;return a.reversed&&(t=(360+r+(r%360-t%360))%360),0===t?e=2:180===t&&(e=0),e}_getXLabelAlign(t){var e=0,a=this._chart,r=a.startAngle;return a.reversed&&(t=(360+r+(r%360-t%360))%360),t>0&&t<180?e=-1:t>180&&t<360&&(e=1),e+1}_createTimeLabels(t,e,a,r){if(this._axisType==wjcChart.AxisType.Y)super._createTimeLabels(t,e,a,r);else{var i=this._values;this.format;if(!i||0===i.length)return;i.forEach(t=>{a.push(t),r.push(this._formatValue(t))})}}_niceNumber(t,e,a){var r=this._chart,i=this.actualMax-this.actualMin,s=r.totalAngle;return s>360&&(s%=360),r._isPolar?s%8==0?i/8:s%6==0?i/6:s%4==0?i/4:s%3==0?i/3:s%2==0?i/2:super._niceNumber(t,e,a):super._niceNumber(t,e,a)}}exports.FlexRadarAxis=FlexRadarAxis;class _RadarLinePlotter extends wjcChart._LinePlotter{constructor(){super(...arguments),this.isArea=!1}_getLabelPoint(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),s=r.convert(e.dataY);return this.chart._convertPoint(s,i)}plotSeries(t,e,a,r,i,s,h){var l=wjcCore.asType(r,wjcChart.SeriesBase),n=this.chart,o=l._getChartType()||n._getChartType(),_=n.series.indexOf(r),c=r.getValues(0),u=r.getValues(1);if(c){u||(u=this.dataInfo.getXVals());var d=wjcChart._BasePlotter.cloneStyle(r.style,["fill"]),g=c.length,C=!0;u?g=Math.min(g,u.length):(C=!1,u=new Array(g));var p=this._DEFAULT_WIDTH,v=l._getSymbolFill(_),x=l._getAltSymbolFill(_)||v,w=l._getSymbolStroke(_),y=l._getAltSymbolStroke(_)||w,A=l._getSymbolSize();t.stroke=w,t.strokeWidth=p,t.fill=v;var T=new Array,j=new Array,m=a.actualMax,P=this.stacking!=wjcChart.Stacking.None&&!l._isCustomAxisY(),f=this.stacking==wjcChart.Stacking.Stacked100pc&&!l._isCustomAxisY();void 0!==l._getChartType()&&(P=f=!1);for(var L=l.interpolateNulls,b=!1,M=0;M<g;M++){var S=C?u[M]:M,k=null==c[M]?0:c[M];if(wjcChart._DataInfo.isValid(S)&&wjcChart._DataInfo.isValid(k)){if(P)if(f&&(k/=this.dataInfo.getStackedAbsSum(S)),k>=0){R=isNaN(this.stackPos[S])?0:this.stackPos[S];k=this.stackPos[S]=R+k}else{var R=isNaN(this.stackNeg[S])?0:this.stackNeg[S];k=this.stackNeg[S]=R+k}k=Math.min(k,m);var I;I=new wjcChart._DataPoint(_,M,S,k);var N=e.convert(S),F=a.convert(k),X=this.chart._convertPoint(F,N);if(S=X.x,k=X.y,isNaN(S)||isNaN(k))b=!0,!0!==L&&(T.push(void 0),j.push(void 0));else{T.push(S),j.push(k);var D=new wjcChart._CircleArea(new wjcCore.Point(S,k),.5*A);D.tag=I,this.hitTester.add(D,_)}}else b=!0,!0!==L&&(T.push(void 0),j.push(void 0))}var V=0;if(this.hasLines)if(this.isArea?t.fill=v||i._getColorLight(_):t.fill="none",b&&!0!==L){for(var G=[],Y=[],M=0;M<g;M++)void 0===T[M]?(G.push(void 0),Y.push(0)):(G.push(T[M]),Y.push(j[M]));G.length>1&&(n._isPolar&&o!==wjcChart.ChartType.Area?this._drawLines(t,G,Y,null,d,this.chart._plotrectId):(n.totalAngle<360&&(G.push(n._center.x),Y.push(n._center.y)),t.drawPolygon(G,Y,null,d,this.chart._plotrectId)),this.hitTester.add(new wjcChart._LinesArea(G,Y),_),V++)}else n._isPolar&&o!==wjcChart.ChartType.Area?this._drawLines(t,T,j,null,d,this.chart._plotrectId):(n.totalAngle<360&&(T.push(n._center.x),j.push(n._center.y)),t.drawPolygon(T,j,null,d,this.chart._plotrectId)),this.hitTester.add(new wjcChart._LinesArea(T,j),_),V++;t.fill=v;for(M=0;M<g;M++){var S=T[M],k=j[M];!1===this.hasLines&&(t.fill=c[M]>0?v:x,t.stroke=c[M]>0?w:y),this.isValid(S,k,e,a)&&((this.hasSymbols||this.chart.itemFormatter)&&A>0&&this._drawSymbol(t,S,k,A,l,M),r._setPointIndex(M,V),V++)}}}}exports._RadarLinePlotter=_RadarLinePlotter;class _RadarBarPlotter extends wjcChart._BarPlotter{adjustLimits(t,e){this.dataInfo=t;var a=t.getMinX(),r=t.getMinY(),i=t.getMaxX(),s=t.getMaxY(),h=t.getDeltaX();return h<=0&&(h=1),this.chart.totalAngle<360&&(h=0),this.unload(),this.chart.axisY._getLogBase()||(this.origin>s?s=this.origin:this.origin<r&&(r=this.origin)),new wjcCore.Rect(a,r,i-a+h,s-r)}_getLabelPoint(t,e){var a=t._getAxisX(),r=t._getAxisY(),i=a.convert(e.dataX),s=r.convert(e.dataY);return this.chart._convertPoint(s,i)}plotSeries(t,e,a,r,i,s,h){var l=this.chart.series.indexOf(r),n=wjcCore.asType(r,wjcChart.SeriesBase),o=(this.chart.options,this.width),_=this.chart,c=-90*Math.PI/180;s=s||0;var u,d=n._getAxisY()._uniqueId,g=(this.stackNegMap[d],this.stackPosMap[d]),C=this.stacking!=wjcChart.Stacking.None,p=this.stacking==wjcChart.Stacking.Stacked100pc,v=r.getValues(0),x=r.getValues(1);if(v){x||(x=this.dataInfo.getXVals());var w;(w=x?_.totalAngle/x.length:_.totalAngle/(e.actualMax-e.actualMin))>0&&(o=C?w*o*Math.PI/180:w*Math.pow(o,s+1)*Math.PI/180);var y=n._getSymbolFill(l),A=n._getAltSymbolFill(l)||y,T=n._getSymbolStroke(l),j=n._getAltSymbolStroke(l)||T,m=v.length;null!=x&&(m=Math.min(m,x.length));var P,f,L=this.origin,b=0;void 0!==n._getChartType()&&(C=p=!1),L<a.actualMin?L=a.actualMin:L>a.actualMax&&(L=a.actualMax);a.convert(L);var M=e.actualMin,S=e.actualMax,k=a.actualMax;n._isCustomAxisY()&&(C=p=!1),_._areas[l]||(_._areas[l]=[]);for(var R=0;R<m;R++){var I=x?x[R]:R,N=null==v[R]?0:v[R];if(this._getSymbolOrigin&&a.convert(this._getSymbolOrigin(L,R,m)),this._getSymbolStyles){var F=this._getSymbolStyles(R,m);y=F&&F.fill?F.fill:y,A=F&&F.fill?F.fill:A,T=F&&F.stroke?F.stroke:T,j=F&&F.stroke?F.stroke:j}if(P=N>0?y:A,f=N>0?T:j,t.fill=P,t.stroke=f,wjcChart._DataInfo.isValid(I)&&wjcChart._DataInfo.isValid(N)){if(C){var X=I-.5*o,D=I+.5*o;if(X<M&&D<M||X>S&&D>S)continue;if(X=e.convert(X),D=e.convert(D),!wjcChart._DataInfo.isValid(X)||!wjcChart._DataInfo.isValid(D))continue;var V,G;p&&(N/=this.dataInfo.getStackedAbsSum(I));var Y=isNaN(g[I])?0:g[I];V=Y,G=Y+N,g[I]=Y+N;var E=e.convert(I),B=a.convert(V),O=a.convert(G);E-=o/2,t.drawDonutSegment(_._center.x,_._center.y,O,B,E+c,o,null,n.symbolStyle),(u=new wjcChart._DonutSegment(new wjcCore.Point(_._center.x,_._center.y),O,B,E+c,o,_.startAngle||0)).tag=new wjcChart._DataPoint(l,R,I,Y+N),this.hitTester.add(u,l)}else{var E=e.convert(I),W=a.convert(Math.min(N,k));_._convertPoint(W,E);E-=o/2,t.drawPieSegment(_._center.x,_._center.y,W,E+c,o,null,n.symbolStyle),(u=new wjcChart._PieSegment(new wjcCore.Point(_._center.x,_._center.y),W,E+c,o,_.startAngle)).tag=new wjcChart._DataPoint(l,R,I,N),this.hitTester.add(u,l)}_._areas[l].push(u),r._setPointIndex(R,b),b++}}}}}exports._RadarBarPlotter=_RadarBarPlotter;