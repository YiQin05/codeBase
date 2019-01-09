/**
 * @license jQuery webcam plugin v1.0.0 09/12/2010
 * http://www.xarg.org/project/jquery-webcam-plugin/
 *
 * Copyright (c) 2010, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
import $ from 'jquery'
function webcamJsFun () {
  // (function ($) {
  console.log(45641654)
  var webcam = {
    'append': true, // append object instead of overwriting
    'extern': null, // external select token to support jQuery dialogs
    'width': 320,
    'height': 240,
    'mode': 'callback', // callback | save | stream
    'swffile': '../swf/jscam.swf',
    'quality': 85,
    'debug': function () {},
    'onCapture': function () {},
    'onTick': function () {},
    'onSave': function () {},
    'onLoad': function () {}
  }
  window['webcam'] = webcam
  $['fn']['webcam'] = function (options) {
    console.log(638217)
    console.log(options)
    if (typeof options === 'object') {
      for (var ndx in webcam) {
        if (options[ndx] !== undefined) {
          webcam[ndx] = options[ndx]
        }
      }
    }
    // CLASSID="CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000"
    var source = '<object id="XwebcamXobjectX" type="application/x-shockwave-flash" data="' + webcam['swffile'] + '" width="' + webcam['width'] + '" height="' + webcam['height'] + '"><param name="movie" value="' + webcam['swffile'] + '" /><param name="FlashVars" value="mode=' + webcam['mode'] + '&amp;quality=' + webcam['quality'] + '" /><param name="allowScriptAccess" value="always" /></object>'
    if (webcam['extern'] !== null) {
      $(webcam['extern'])[webcam['append'] ? 'append' : 'html'](source)
      console.log($(webcam['extern'])[webcam['append'] ? 'append' : 'html'](source))
    } else {
      this[webcam['append'] ? 'append' : 'html'](source)
    }
    console.log(1323)
    console.log(document.getElementById('XwebcamXobjectX'))
    var run = 3;
    (function _register () {
      var cam = document.getElementById('XwebcamXobjectX')
      console.log(cam['capture'])
      if (cam && cam['capture'] !== undefined) {
      /* Simple callback methods are not allowed :-/ */
        console.log('进入')
        webcam['capture'] = function (x) {
          try {
            return cam['capture'](x)
          } catch (e) {}
        }
        webcam['save'] = function (x) {
          try {
            return cam['save'](x)
          } catch (e) {}
        }
        webcam['setCamera'] = function (x) {
          try {
            return cam['setCamera'](x)
          } catch (e) {}
        }
        webcam['getCameraList'] = function () {
          try {
            return cam['getCameraList']()
          } catch (e) {}
        }
        webcam['pauseCamera'] = function () {
          try {
            return cam['pauseCamera']()
          } catch (e) {}
        }
        webcam['resumeCamera'] = function () {
          try {
            return cam['resumeCamera']()
          } catch (e) {}
        }
        webcam['onLoad']()
      } else if (run === 0) {
        webcam['debug']('error', 'Flash movie not yet registered!')
      } else {
        /* Flash interface not ready yet */
        run--
        console.log(run)
        window.setTimeout(_register, 1000 * (4 - run))
      }
    })()
  }
  // })(jQuery)
}
export {
  webcamJsFun
}
