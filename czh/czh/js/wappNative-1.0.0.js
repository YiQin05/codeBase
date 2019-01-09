
(function () {
    /**
     * wapp是一个 JS SDK 用于运行于指定APP的web页，该sdk的本地支持由亚美指定APP提供。
     * @name wapp
     * @author swallow email = swallowzhhy@gmail.com
     * @class 亚美InappBrowser本地支持SDK
     */
    var wapp = window.wapp = {};

    /**
     * widget类为页面提供本地的控件支持，例如对话框，图片浏览控件等
     * @memberOf wapp
     * @class 控件支持API集合
     */
    wapp.widget = {};

    /**
     * function类为页面提供本地的功能支持，例如分享，登录等
     * @memberOf wapp
     * @class 功能支持API集合
     */
    wapp.function = {};

    /**
     * control类为页面提供本地的控支持，例如打开、关闭页面，返回等
     * @memberOf wapp
     * @class 控制支持API集合
     */
    wapp.control = {};

    /**
     * utils类为页面提供一些工具方法的支持，例如触发某个事件
     * @memberOf wapp
     * @class 工具支持API集合
     */
    wapp.utils = {};
    wapp.utils.notification = {};
    wapp.utils.notification.view = {};
    wapp.utils.notification.view.did = {};
    wapp.utils.notification.view.will = {};

    /**
     * 要打开的页面类型 = 外部链接类Web页
     * @see http://prototype.ym/czh5.0/#p=h5框架规范
     * @constant
     * @memberOf wapp
     * @type {Number}
     */
    wapp.PAGE_TYPE_EXTERN = 0;

    /**
     * 要打开的页面类型 = Web APP类Web页
     * @see http://prototype.ym/czh5.0/#p=h5框架规范
     * @constant
     * @memberOf wapp
     * @type {Number}
     */
    wapp.PAGE_TYPE_WEBAPP = 1;

    /**
     * 要打开的页面类型 = APP类Web页
     * @see http://prototype.ym/czh5.0/#p=h5框架规范
     * @constant
     * @memberOf wapp
     * @type {Number}
     */
    wapp.PAGE_TYPE_APP = 2;

    /**
     * 要打开的页面类型 = 本地页面
     * @constant
     * @memberOf wapp
     * @type {Number}
     */
    wapp.PAGE_TYPE_NATIVE = 3;

    // wapp.callbacks = {};

    //一些参数
    var scheme = 'wapp://';
    var version = '1.1.0';
    var vender = 'ym';
    var isReady = false;
    var isDebug = false;
    var callbacks = {};
    var listeners = [];
    listeners['ready']=[];
    listeners['error']=[];
    listeners['resume']=[];
    listeners['paused']=[];

    /**
     * 初始化接口，调用者在调用这个sdk的api之前必须先调用这个init接口
     * @function
     * @memberOf wapp
     * @param debug 是否进入调试模式，调试模式会在一些地方弹出alert.
     */
    wapp.init = function (debug) {
        isDebug = debug;
        wapp.utils.addEventListener('ready', function () {
            if (isDebug)
                alert('wapp is ready!');
            isReady = true;
        });
    };

 // ---------------------------------H5 page API---------------------------------
 // These methods provide to the H5 page developer user

     /**
      * 调起一个本地对话框
      * @param title 对话框标题
      * @param message 对话框信息
      * @param cancel 取消
      * @param buttons 按钮
      * @param callback 回调
      * <p>
      *      callback(index)
      *          index: 点击的按钮号，cancel=0; buttons=[1, 2, ...]
      * </p>
      */
     wapp.widget.alert = function (title, message, cancel, buttons, callback) {
         var host = 'alert_widget_native';
         var params = {
             title: title,
             message: message,
             cancel: cancel,
             buttons: JSON.stringify(buttons),
             callback: createCbKey(callback, {index:{}})
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 用本地控件浏览一张大图
      * @param imgUrl 大图地址
      */
     wapp.widget.img = function (imgUrl) {
         var host = 'img_widget_native';
         var params = {
             url: imgUrl
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 调起本地微信分享功能
      * @param shareType 分享类型
      * @param callback 分享结果回调
      */
     wapp.function.wxShare = function (shareType, callback) {
         var host = 'wx_share_function_native';
         var params = {
             share_type: shareType,
             callback: createCbKey(callback)
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 调起本地支付功能
      * @param applicationId 订单ID
      */
     wapp.function.pay = function (businessCode, source) {
         var host = 'pay_function_native';
         var params = {
             business_code: businessCode,
             source: source
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };
     /**
      * 调起本地扫码功能
      * @param type 扫描类型
      * @param timeout 超时时间
      */
     wapp.function.scan = function (type, timeout, callback) {
         var host = 'scan_function_native';
         var params = {
             type: type,
             timeout: timeout,
             callback: createCbKey(callback, {code:{}})
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 获取用户信息
      * @param callback
      * <p>
      *     callback(info)
      *          info: 一个json对象
      * </p>
      */
     wapp.function.getUserInfo = function (callback) {
         var host = 'user_info_function_native';
         var params = {
             callback: createCbKey(callback, {
                 info:{}
             })
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 退出登录
      */
     wapp.function.logout = function () {
         var host = 'logout_function_native';
         var uri = createUri(scheme, host, null);
         nativeCall(uri);
     };

     /**
      * 踢下线
      * @param message 踢下线的消息，与踢下线api返回的消息一致
      */
     wapp.function.kickout = function (message) {
         var host = 'kickout_function_native';
         var params = {
             message: message
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
      * 请求数据
      * @param path 请求路径
      * @param queryParams 请求参数, 以json格式组织。例如：{user:'swallow', password:'123456'}
      * @param callback 请求回调
      * <p>
      *     callback(response)
      *          response:一个json对象
      * </p>
      */
     wapp.function.request = function (path, queryParams, callback) {
         var host = 'request_function_native';
         var params = {
             path: path,
             params: queryParams,
             callback:createCbKey(callback, {
                 response:{}
             })
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };
     
     /**
      * 打开一个页面，包括本地页面，Web页
      * @param type 页面类型{@link http://prototype.ym/czh5.0/#p=h5框架规范}
      * @param title 页面标题
      * @param url 页面地址
      */
     wapp.control.open = function (type, title, url) {
         var host = 'open_control_native';
         var params = {
             wapp_type: type,
             wapp_title: title,
             wapp_url: url
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

     /**
     * 打开外部APP
     * @param app_scheme app跳转地址
     * @param download_url app下载地址
     */
     wapp.control.app = function (app_scheme, download_url) {
       var host = 'app_control_native';
       var params = {
         app_scheme: app_scheme,
         download_url: download_url
       };
       var url = createUri(scheme, host, params);
       nativeCall(url);
     };


 /**
 * 返回页面(多级或一级)
 * @param jume_url 返回页面的DeepLink地址
 */
     wapp.control.back = function(jump_url) {
       var host = 'back_control_native';
       var params = {
           jump_url: jump_url
       };

       var url = createUri(scheme, host, params);
       nativeCall(url);
     };
     
     /**
      * 关闭一个页面
      */
     wapp.control.close = function () {
         var host = 'close.control.native';
         var uri = createUri(scheme, host, null);
         nativeCall(uri)
     };

     /**
      * 打开外部地图并定位到一个地址
      * @param address {string} 要定位到的地址
      */
     wapp.control.openMap = function (address) {
         var host = 'map_control_native';
         var params = {
             address:address
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };
     
     /**
      * 获取上一级或者多级页面的DeepLink URL
      * @param index 
      */
     wapp.control.getPrevious = function (index,callback) {
         var host = 'get_previous_control_native';
         var params = {
        	 index:index,
        	 callback:createCbKey(callback, {
                 response:{}
             })
         };
         var uri = createUri(scheme, host, params);
         nativeCall(uri);
     };

 // ---------------------------------Util Methods---------------------------------
 // These methods is the util methods

     /**
      * 获取wapp版本
      * @function
      * @returns {string} wapp版本
      */
     wapp.utils.getVersion = function () {
         return version;
     };

     /**
      * 获取提供商
      * @returns {string} 提供商简写
      */
     wapp.utils.getVender = function () {
         return vender;
     };

     /**
      * 触发一个错误事件
      * @param message 错误信息
      * @param where 发生错误的地方
      */
     wapp.utils.errorEvent = function (message, where) {
         fireEvent('error', message, where);
     };

     /**
      * 触发一个准备事件
      */
     wapp.utils.readyEvent = function () {
         fireEvent('ready');
     };

     /**
      * 触发一个页面恢复事件
      */
     wapp.utils.resumeEvent = function () {
         fireEvent('resume');
     };

     /**
      * 触发一个页面暂停事件
      */
     wapp.utils.pausedEvent = function () {
         fireEvent('paused');
     };

     /**
      * 添加一个事件监听
      * @param event_name 要监听的事件名
      * @param method 事件触发方法
      */
     wapp.utils.addEventListener = function (event_name, method){
         if(listeners[event_name].indexOf(method) > -1) return; // Listener is already registered
         listeners[event_name].push(method);
     };

     /**
      * 移除事件监听
      * @param event_name 监听的事件名称
      * @param method 要移除的监听方法
      */
     wapp.utils.removeEventListener = function (event_name, method){
         //If no method name is given, remove all listeners from event
         if(method == null){
             listeners[event_name].length=0;
             return;
         }
         var method_index = listeners[event_name].indexOf(method);
         if(method_index > -1){ //Don't try to remove unregistered listeners
             listeners[event_name][method_index] = null;
         }else{
             wapp.utils.errorEvent("An unregistered listener was requested to be removed.", "removeEventListener()")
         }
     };

     wapp.utils.runCb = function (index) {
         if (!callbacks[index])
             return;
         var args = Array.prototype.slice.call(arguments);
         args.shift();
         if (typeof callbacks[index] === "function")
             callbacks[index].apply(null, args);
         delete callbacks[index];

     };


    // 当页面获取焦点时
    wapp.utils.notification.view.will.appear = function () {
        console.log('页面获取焦点');
        // Toast('页面获取焦点',2000);
    };

    // H5提供的方法
    wapp.utils.notification.view.action = function () {
        // Toast('点击了列表',2000);
        console.log('点击了列表');
    };

    // 当页面即将销毁时
    wapp.utils.notification.view.dealloc = function () {
        console.log('页面即将销毁');
        // Toast('页面即将销毁',2000);
    };

    // 当页面失去焦点时
    wapp.utils.notification.view.did.disappear = function () {
        console.log('页面失去焦点');
        // Toast('页面失去焦点',2000);
    };


    // 判断是否为ios端访问
    function _IsIOS() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
    // 判断是否为android端访问
    function _IsAndroid() {
        if (/(Android|Adr)/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
    // 不同平台调用
    function eachOsCall(json) {
        if (_IsIOS()) {
            window.webkit.messageHandlers.local_ios.postMessage(JSON.stringify(json));
        } else if (_IsAndroid()) {
            window.local.execLocal(JSON.stringify(json));
        }
    }


    // 调起APP扫码
    window.scan_native = function (business_code,timeout,callBack) {
        var params = {
            "path": "scan_function_native",
            "params": {
                "business_code": business_code,
                "timeout": timeout,
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };

    // 获取用户信息
    window.user_info_native = function (callBack) {
        var params = {
            "path": "user_info_function_native",
            "params": {
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };

    // 调用原生支付
    window.pay_native = function (orderId,source) {
        var params = {
            "path": "pay_function_native",
            "params": {
                "orderId": orderId,
                "source": source
            }
        };
        eachOsCall(params);
    };

    // 数据请求
    window.request_native = function (request_path,request_params,callBack) {
        request_params = request_params || {};
        var params = {
            "path": "request_function_native",
            "params": {
                "request_path": request_path,
                "request_params": request_params,
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };

    // 获取定位
    window.location_native = function (callBack) {
        var params = {
            "path": "location_function_native",
            "params": {
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };

    // 踢出APP端用户登陆
    // kickoutType 0：其他地方登录挤下线 1：橙色APP修改密码踢下线
    window.kickout_native = function (kickoutType,exitInstruction,exitInfo) {
        var params = {
            "path": "kickout_function_native",
            "params": {
                "kickoutType": kickoutType,
                "exitInstruction": exitInstruction,
                "exitInfo": exitInfo
            }
        };
        eachOsCall(params);
    };

    // 调起原生APP分享
    window.wx_share_native = function (share_type,callBack) {
        var params = {
            "path": "wx_share_function_native",
            "params": {
                "share_type": share_type,
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };

    // 信息警示框
    window.alert_native = function (title,message,cancel,buttons) {
        title = title || '';
        cancel = cancel || '';
        var params = {
            "path": "alert_widget_native",
            "params": {
                "title": title,
                "message": message,
                "cancel": cancel,
                "buttons": buttons
            }
        };
        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];
            if(typeof btn.action === "function"){
                btn.action = createCbKey(btn.action, {"params":{}});
            }
        }
        eachOsCall(params);
    };

    // 图片放大展示
    window.imgZoom_native = function (img_url) {
        var params = {
            "path": "img_widget_native",
            "params": {
                "img_url": img_url
            }
        };
        eachOsCall(params);
    };

    // 返回页面（多级或者一级）
    window.back_native = function (jump_url) {
        jump_url = jump_url || '';
        var params = {
            "path": "back_control_native",
            "params": {
                "jump_url": jump_url
            }
        };
        eachOsCall(params);
    };

    // 跳转外部程序
    window.external_native = function (app_scheme,download_url) {
        download_url = download_url || '';
        var params = {
            "path": "external_control_native",
            "params": {
                "app_scheme": app_scheme,
                "download_url": download_url
            }
        };
        eachOsCall(params);
    };

    // 加载新页面
    window.open_native = function (wapp_type,wapp_title,wapp_url,intercept_type,page_params,right_item) {
        wapp_type = wapp_type || 0;
        wapp_title = wapp_title || '';
        intercept_type = intercept_type || 0;
        page_params = page_params || {};
        var params = {
            "path": "open_control_native",
            "params": {
                "intercept_type": intercept_type,
                "wapp_type": wapp_type,
                "wapp_title": wapp_title,
                "wapp_url": wapp_url,
                "page_params": page_params,
                "right_item": right_item
            }
        };
        for (var i = 0; i < right_item.length; i++) {
            var btn = right_item[i];
            if(typeof btn.action === "function"){
                btn.action = createCbKey(btn.action, {"params":{}});
            }
        }
        eachOsCall(params);
    };

    // 获取上一级或者多级页面的DeepLink URL
    window.get_previous_native = function (index,callBack) {
        index = index || 1;
        var params = {
            "path": "get_previous_control_native",
            "params": {
                "index": index,
                "callback": createCbKey(callBack, {"params":{}})
            }
        };
        eachOsCall(params);
    };


    // ---------------------------------Private Methods---------------------------------
 // These methods will not provide to the sdk user

     function createUri(scheme, host, params) {
         var result = scheme + host + '';
         //无参
         if (params == null)
             return result;

         result += '?';
         for (var key in params) {
             result += key + '=' + params[key] + '&';
         }
         //去掉结尾多余的‘&’
         if (result.lastIndexOf('&') == (result.length-1))
             result = result.substring(0, result.lastIndexOf('&'));

         return result;
     }

     function nativeCall(uri) {
         // if (isReady)
             window.open(uri);
         // else
         //     wapp.utils.errorEvent('The wapp is not ready, it will not work!', 'nativeCall()');
     }

     function randStr() {
         var functionStr = "";
         for (var i = 0; i < parseInt(Math.random() * (20 - 5 + 1) + 5, 10); i++) {
             functionStr = functionStr + String.fromCharCode(parseInt(Math.random() * (57 - 48 + 1) + 48, 10))
         }
         return functionStr
     }

     function createCbKey(cb, params) {
         var random = randStr();
         var cbKey = "wapp.utils.runCb('" + random + "')";
         if (params != null) {
             cbKey = "wapp.utils.runCb('" + random + "',";
             for (var key in params) {
                 cbKey += key+',';
             }
             cbKey = cbKey.substring(0, cbKey.lastIndexOf(','));
             cbKey += ')';
         }
         callbacks[random] = cb;
         return cbKey;
     }

     // ------------------------- Listener -------------------------

     function fireEvent(event){
         if(!listeners[event]){
             return;
         }

         var args = Array.prototype.slice.call(arguments);
         args.shift();
         var length = listeners[event].length;
         for(var i=0; i<length; i++){
             if(typeof listeners[event][i] === "function"){
                 listeners[event][i].apply(null, args);
             }
         }
     }
 })();
