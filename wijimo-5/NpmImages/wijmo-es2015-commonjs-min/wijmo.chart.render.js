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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcChart=require("wijmo/wijmo.chart"),wjcCore=require("wijmo/wijmo");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.chart.render");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.chart=__glob.wijmo.chart||{},__glob.wijmo.chart.render=wjcSelf;class _CanvasRenderEngine{constructor(t,e=!1){this._strokeWidth=1,this._fontSize=null,this._fontFamily=null,this._applyCanvasClip=function(t,e){var n=this._canvasRect[e];n&&(t.beginPath(),t.rect(n.left,n.top,n.width,n.height),t.clip(),t.closePath())},this._applyCanvasStyles=function(t,e,n,l,a){var i,s,r,o=this,h=o._canvas.getContext("2d"),g=o.stroke,p=o.fill,_=o.strokeWidth;e&&void 0!==e.stroke&&(g=e.stroke),e&&void 0!==e.fill&&(p=o._getOpacityColor(e.fill,e["fill-opacity"])),t&&(s=window.getComputedStyle(t),r=t.getBBox()),a?s?(h.fillStyle=s.fill,i=s.fontStyle+" "+s.fontSize+" "+s.fontFamily,h.font=i,h.font.replace(/\"/g,"'")!==i.replace(/\"/g,"'")&&(i=s.fontStyle+" "+s.fontSize+" "+(h.font.split(" ")[1]||"sans-serif"),h.font=i)):o.fontSize?(h.fillStyle=o.textFill,h.font=o.fontSize+" "+(o.fontFamily||"sans-serif")):o._canvasDefaultFont&&(h.fillStyle=o._canvasDefaultFont.textFill,i=o._canvasDefaultFont.fontSize+" "+o._canvasDefaultFont.fontFamily,h.font=i,h.font.replace(/\"/g,"'")!==i.replace(/\"/g,"'")&&(i=o._canvasDefaultFont.fontSize+" "+(h.font.split(" ")[1]||"sans-serif"),h.font=i)):(s&&(g=s.stroke&&"none"!==s.stroke?s.stroke:g,p=s.fill&&"none"!==s.fill?o._getOpacityColor(s.fill,s["fill-opacity"]):p,_=s.strokeWidth?s.strokeWidth:_),"none"!==g&&null!=g&&(this._applyColor("strokeStyle",g,r),h.lineWidth=+_.replace(/px/g,""),h.stroke()),l&&null!=p&&"transparent"!==p&&"none"!==p&&(this._applyColor("fillStyle",p,r),h.fill()))};var n=this;n._element=t,n._canvas=document.createElement("canvas"),n._svgEngine=new wjcChart._SvgRenderEngine(t),n._element.appendChild(n._canvas),n._applyCSSStyles=e}beginRender(){var t,e=this,n=e._svgEngine.element,l=e._element;e._applyCSSStyles&&(e._svgEngine.beginRender(),l=n),e._element.appendChild(n),e._canvasRect={},t=window.getComputedStyle(l),e._canvasDefaultFont={fontSize:t.fontSize,fontFamily:t.fontFamily,textFill:t.color}}endRender(){this._applyCSSStyles&&this._svgEngine.endRender(),this._svgEngine.element.parentNode.removeChild(this._svgEngine.element)}setViewportSize(t,e){var n,l,a=this,i=a._canvas,s=(i.getContext("2d"),a.fill);a._applyCSSStyles&&a._svgEngine.setViewportSize(t,e),i.width=t,i.height=e,n=window.getComputedStyle(a._element).backgroundColor,l=a.stroke,n&&(a.stroke=null,a.fill=n,a.drawRect(0,0,t,e),a.fill=s,a.stroke=l)}get element(){return this._canvas}get fill(){return this._fill}set fill(t){this._svgEngine.fill=t,this._fill=t}get fontSize(){return this._fontSize}set fontSize(t){this._svgEngine.fontSize=t;var e=null==t||isNaN(t)?t:t+"px";this._fontSize=e}get fontFamily(){return this._fontFamily}set fontFamily(t){this._svgEngine.fontFamily=t,this._fontFamily=t}get stroke(){return this._stroke}set stroke(t){this._svgEngine.stroke=t,this._stroke=t}get strokeWidth(){return this._strokeWidth}set strokeWidth(t){this._svgEngine.strokeWidth=t,this._strokeWidth=t}get textFill(){return this._textFill}set textFill(t){this._svgEngine.textFill=t,this._textFill=t}addClipRect(t,e){t&&e&&(this._applyCSSStyles&&this._svgEngine.addClipRect(t,e),this._canvasRect[e]=t.clone())}drawEllipse(t,e,n,l,a,i){var s,r=this._canvas.getContext("2d");return this._applyCSSStyles&&(s=this._svgEngine.drawEllipse(t,e,n,l,a,i)),r.save(),r.beginPath(),r.ellipse?r.ellipse(t,e,n,l,0,0,2*Math.PI):(r.translate(t,e),r.scale(1,l/n),r.translate(-t,-e),r.arc(t,e,n,0,2*Math.PI),r.scale(1,1)),this._applyCanvasStyles(s,i,a,!0),r.restore(),s}drawRect(t,e,n,l,a,i,s){var r,o=this._canvas.getContext("2d");return this._applyCSSStyles&&(r=this._svgEngine.drawRect(t,e,n,l,a,i,s)),o.save(),this._applyCanvasClip(o,s),o.beginPath(),o.rect(t,e,n,l),this._applyCanvasStyles(r,i,a,!0),o.restore(),r}drawLine(t,e,n,l,a,i){var s,r=this._canvas.getContext("2d");return this._applyCSSStyles&&(s=this._svgEngine.drawLine(t,e,n,l,a,i)),r.save(),r.beginPath(),r.moveTo(t,e),r.lineTo(n,l),this._applyCanvasStyles(s,i,a),r.restore(),s}drawLines(t,e,n,l,a){if(t&&e&&0!==t.length&&0!==e.length){var i,s,r=this._canvas.getContext("2d"),o=Math.min(t.length,e.length);for(this._applyCSSStyles&&(i=this._svgEngine.drawLines([0,1],[1,0],n,l,a)),r.save(),this._applyCanvasClip(r,a),r.beginPath(),r.moveTo(t[0],e[0]),s=1;s<o;s++)r.lineTo(t[s],e[s]);return this._applyCanvasStyles(i,l,n),r.restore(),i}}drawSplines(t,e,n,l,a){if(t&&e&&0!==t.length&&0!==e.length){var i,s,r=this._canvas.getContext("2d"),o=new wjcChart._Spline(t,e).calculate(),h=o.xs,g=o.ys,p=Math.min(h.length,g.length);for(this._applyCSSStyles&&(i=this._svgEngine.drawSplines([0,1],[1,0],n,l,a)),r.save(),this._applyCanvasClip(r,a),r.beginPath(),r.moveTo(h[0],g[0]),s=1;s<p;s++)r.lineTo(h[s],g[s]);return this._applyCanvasStyles(i,l,n),r.restore(),i}}drawPolygon(t,e,n,l,a){if(t&&e&&0!==t.length&&0!==e.length){var i,s,r=this._canvas.getContext("2d"),o=Math.min(t.length,e.length);for(this._applyCSSStyles&&(i=this._svgEngine.drawPolygon(t,e,n,l,a)),r.save(),this._applyCanvasClip(r,a),r.beginPath(),r.moveTo(t[0],e[0]),s=1;s<o;s++)r.lineTo(t[s],e[s]);return r.closePath(),this._applyCanvasStyles(i,l,n,!0),r.restore(),i}}drawPieSegment(t,e,n,l,a,i,s,r){var o,h=this._canvas.getContext("2d"),g=l,p=l+a;return this._applyCSSStyles&&(o=this._svgEngine.drawPieSegment(t,e,n,l,a,i,s,r)),h.save(),this._applyCanvasClip(h,r),h.beginPath(),h.moveTo(t,e),h.arc(t,e,n,g,p,!1),h.lineTo(t,e),this._applyCanvasStyles(o,s,i,!0),h.restore(),o}drawDonutSegment(t,e,n,l,a,i,s,r,o){var h,g,p,_=this._canvas.getContext("2d"),c=a,y=a+i;return this._applyCSSStyles&&(h=this._svgEngine.drawDonutSegment(t,e,n,l,a,i,s,r,o)),g=new wjcCore.Point(t,e),g.x+=l*Math.cos(c),g.y+=l*Math.sin(c),p=new wjcCore.Point(t,e),p.x+=l*Math.cos(y),p.y+=l*Math.sin(y),_.save(),this._applyCanvasClip(_,o),_.beginPath(),_.moveTo(g.x,g.y),_.arc(t,e,n,c,y,!1),_.lineTo(p.x,p.y),_.arc(t,e,l,y,c,!0),this._applyCanvasStyles(h,r,s,!0),_.restore(),h}drawString(t,e,n,l){var a,i=this._canvas.getContext("2d");return this._applyCSSStyles&&(a=this._svgEngine.drawString(t,e,n,l)),i.save(),i.textBaseline="bottom",this._applyCanvasStyles(a,l,n,!0,!0),i.fillText(t,e.x,e.y),i.restore(),a}drawStringRotated(t,e,n,l,a,i){var s,r=this._canvas.getContext("2d");r.measureText(t);return this._applyCSSStyles&&(s=this._svgEngine.drawStringRotated(t,e,n,l,a,i)),r.save(),r.textBaseline="bottom",r.translate(n.x,n.y),r.rotate(Math.PI/180*l),r.translate(-n.x,-n.y),this._applyCanvasStyles(s,i,a,!0,!0),r.fillText(t,e.x,e.y),r.restore(),s}measureString(t,e,n,l){var a,i=i=this._canvas.getContext("2d");return this._applyCSSStyles?this._svgEngine.measureString(t,e,n,l):(this._applyCanvasStyles(null,null,e,!0,!0),a=i.measureText(t).width,new wjcCore.Size(a,1.5*parseInt(i.font)))}startGroup(t,e,n=!1){var l,a=this._canvas.getContext("2d");return this._applyCSSStyles&&(l=this._svgEngine.startGroup(t,e,n)),a.save(),this._applyCanvasClip(a,e),l}endGroup(){this._applyCSSStyles&&this._svgEngine.endGroup(),this._canvas.getContext("2d").restore()}drawImage(t,e,n,l,a){var i,s=this._canvas.getContext("2d"),r=new Image;return this._applyCSSStyles&&(i=this._svgEngine.drawImage(t,e,n,l,a)),r.onload=function(){s.drawImage(r,e,n,l,a)},r.src=t,i}_getOpacityColor(t,e){var n=new wjcCore.Color(t);return t.indexOf("url")>-1?this.fill:t.indexOf("-")>-1?(this.fill=t,t):(null!=e&&1===n.a&&(n.a=isNaN(e)?1:Number(e)),n.toString())}_applyColor(t,e,n){let l=_GradientColorUtil.tryParse(e),a=this._canvas.getContext("2d");if(null!=l)if(wjcCore.isString(l)||null==n)a[t]=l;else{let e;if(null!=l.x1)e=l.relative?a.createLinearGradient(n.x+l.x1*n.width,n.y+l.y1*n.height,n.x+l.x2*n.width,n.y+l.y2*n.height):a.createLinearGradient(l.x1,l.y1,l.x2,l.y2);else if(null!=l.r)if(l.relative){let t=n.x+l.cx*n.width,i=n.y+l.cy*n.height,s=l.r*n.width,r=l.r*n.height/s,o=n.x+(null==l.fx?l.cx:l.fx)*n.width,h=n.y+(null==l.fy?l.cy:l.fy)*n.height,g=(null==l.fr?0:l.fr)*n.width,p=(null==l.fr?0:l.fr)*n.height,_=Math.min(g,p);e=a.createRadialGradient(o,h/r,_,t,i/r,s),a.setTransform(1,0,0,r,0,0)}else e=a.createRadialGradient(null==l.fx?l.cx:l.fx,null==l.fy?l.cy:l.fy,l.fr||0,l.cx,l.cy,l.r);l.colors&&l.colors.length>0&&null!=e&&l.colors.forEach(t=>{let n=new wjcCore.Color("#000000");null!=t.color&&(n=t.color),null!=t.opacity&&(n.a=t.opacity),e.addColorStop(t.offset,n.toString())}),a[t]=e}}}exports._CanvasRenderEngine=_CanvasRenderEngine;class _GradientColorUtil{static tryParse(t){if(_GradientColorUtil.parsedColor[t])return _GradientColorUtil.parsedColor[t];if(null==t||-1===t.indexOf("-"))return t;var e,n=t.replace(/\s+/g,"").split(/\-/g),l=n[0][0],a=!1,i=n[0].match(/\(\S+\)/)[0].replace(/[\(\\)]/g,"").split(/\,/g);"l"===l||"L"===l?(e={x1:"0",y1:"0",x2:"0",y2:"0",colors:[]},"l"===l&&(a=!0),["x1","y1","x2","y2"].forEach((t,n)=>{null!=i[n]&&(e[t]=+i[n])})):"r"!==l&&"R"!==l||(e={cx:"0",cy:"0",r:"0",colors:[]},"r"===l&&(a=!0),["cx","cy","r","fx","fy","fr"].forEach((t,n)=>{null!=i[n]&&""!==i[n]&&(e[t]=+i[n])})),e.relative=a,_GradientColorUtil.parsedColor[t]=e;var s=n.length-1;return n.forEach((t,n)=>{t.indexOf(")")>-1&&(t=t.match(/\)\S+/)[0].replace(")",""));var l=t.split(":"),a={color:new wjcCore.Color("#000000")};null!=l[0]&&(a.color=wjcCore.Color.fromString(l[0])),null!=l[1]?a.offset=+l[1]:a.offset=n/s,null!=l[2]&&(a.opacity=+l[2]),e.colors.push(a)}),e}}if(_GradientColorUtil.parsedColor={},wjcChart.FlexChartBase&&wjcChart.FlexChartBase.prototype&&wjcChart.FlexChartBase.prototype._exportToImage){var _exportFn=wjcChart.FlexChartBase.prototype._exportToImage;wjcChart.FlexChartBase.prototype._exportToImage=function(t,e){if("svg"!==t){var n,l,a=new _CanvasRenderEngine(this.hostElement,!0),i=this.rendered;this.rendered=new wjcCore.Event,this._render(a,!1),(l=a.element).parentNode.removeChild(l),n=l.toDataURL("image/"+t),e.call(null,n),l=null,a=null,this.rendered=i}else _exportFn.call(this,t,e)}}