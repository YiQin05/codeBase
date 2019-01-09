(function () {
    function App() {
    }
    
    String.prototype.startsWith=function(str){
    	var reg=new RegExp("^"+str);
    	return reg.test(this);
	}
    
    window.alert = function (msg,time) {
        var duration = time || 3000;
        var m = document.createElement('div');
        var b = document.createElement('div');
        b.innerHTML = msg;
        b.style.cssText = "opacity: 0.7;height: 1.2rem;color: rgb(255, 255, 255);line-height: 1.2rem;text-align: center;border-radius: 0.16rem;position: relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);background: rgb(0, 0, 0);font-size: 0.4rem;white-space:nowrap;display:inline-block;padding:0 0.4rem;";
        m.style.cssText = "width:100%;height:1.2rem;position:fixed;left:0;top:35%;z-index:9999999;font-weight:600;"
        m.appendChild(b);
        document.body.appendChild(m);
        m.className = 'sidebar_move_big';
        setTimeout(function(){
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d * 1000);
        }, duration);
    }
    
    App.prototype.doubleDecode = function (str) {
    	return decodeURIComponent(decodeURIComponent(str));
    }
    
    App.prototype.parseUrl = function (url) {
        if (!url) url = window.location.href;
        var obj = {};
        var reg = /[?&][^?&]+=[^?&]+/g;
        var arr = url.match(reg);
        if (arr === null) return obj;
        arr.forEach(function (item) {
            var tempArr = item.substring(1).split('=');
            var key = decodeURIComponent(tempArr[0]);
            var val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
        return obj;
    };
    App.prototype.cookie = function (name, val, opt) {
        if (arguments.length == 1) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return decodeURIComponent(arr[2]);
            }
            else {
                return "";
            }
        }
        opt = opt || {};
        document.cookie = name+ "=" + encodeURIComponent(val) + (opt.expires ? "; expires=" + opt.expires : "") + (opt.path ? "; path=" + opt.path : "")
    };
    App.prototype.callApi = function (api, paramsKey, dataKey, callback) {
        this.vue.$options.methods.callApi.bind(this.vue)(api, paramsKey, dataKey, callback);
    };
    App.prototype.open = function (func, params) {
        this.vue.$options.methods.open.bind(this.vue)(func, params);
    };
    App.prototype.params = function (key, val) {
        if (val === undefined) {
            return this.queryParams[key] == null ? "" : this.queryParams[key];
        }
        this.queryParams[key] = val;
    };
    App.prototype.data = function (key, val) {
        if (val === undefined) {
            return this.vue.$options.methods.data.bind(this.vue)(key);
        }
        this.vue.$options.methods.data.bind(this.vue)(key, val);
    };
    App.prototype.isWx = function () {
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
    };
    App.prototype.isCzhApp = function () {
        return  navigator.userAgent.indexOf('WappBrowser') > -1;
    };
    App.prototype.isWxPn = function () {
        return this.params("p") == "1" && this.isWx(); 
    };
    App.prototype.showNav = function () {
    	return (this.params("h5") != 'true') && !this.isWxPn();
    };
    App.prototype.create = function (config) {
        var $app = this;
        $app.apiContext = config.apiContext || "/usr/";
        if (!$app.queryParams.suk && window.suk) $app.queryParams.suk = window.suk;
        var $methods = config.methods || {};
        var $el = config.el || "#app";
        $methods.callApi = function (api, params, dataKey, callback) {
            var url = $app.apiContext + (api.startsWith("/") ? api.substr(1) : api);
            this.$http.post(url, JSON.stringify({
                token: $app.queryParams.suk,
                data: (params === null ? {} : ( "object" === typeof params ? params : this[params]))
            })).then(function (res) {
                var result = res.body;
                if (result.flag == 0) {
                    this.err = result.err;
                    if (this.err == "accesstimeout") {
                        if ($app.isWxPn()) {
                            alert("您的身份验证已过期，请退出重新进入!",3000);
                            return;
                        } else {
                            $app.open("/usr/login.html","tourl="+ encodeURI(window.location.href));
                            return;
                        }
                    }
                    if (this.err == "needlogin") {
                        $app.open("/usr/login.html","tourl="+ encodeURI(window.location.href));
                        return;
                    }
                    if (callback) {
                        callback(result.data, this, result.flag, result.err);
                    }
                } else {
                    if (dataKey != null) this[dataKey] = result.data;
                    if (dataKey == "") {
                        for (var k in result.data) {
                            this[k] = result.data[k];
                        }
                    }
                    if (callback) {
                        callback(result.data, this, result.flag, result.err);
                    }
                }
            }, function () {
            });
        };
        $methods.open = function (path, params) {
            var url = path.indexOf("?") > 0 ? path : (path + "?fz=1");
            url += ($app.queryParams.partner ? "&partner=" + $app.queryParams.partner : "");//增加合作商系统参数
            url += ($app.queryParams.h5 ? "&h5=" + $app.queryParams.h5 : "");//h5页面参数
            url += ($app.queryParams.suk ? "&suk=" + $app.queryParams.suk : "") + ($app.queryParams.p == "1" ? "&p=" + $app.queryParams.p : "");
            if (params) {
                url += "&" + params;
            }
            window.location.href = url;
        };
        $methods.params = function (key, val) {
            if (val === undefined) {
                return $app.queryParams[key];
            }
            $app.queryParams[key] = val;
        };
        $methods.data = function (key, val) {
            if (val === undefined) {
                return this[key];
            }
            this[key] = val;
        };
        $methods.goback = function () {
            window.history.back();
        };
        var $data = config.data || {};
        $data.err = "";
        new Vue({
            el: $el,
            data: $data,
            methods: $methods,
            mounted: function () {
                $app.vue = this;
                if (config.mounted) {
                    config.mounted(this, $app);
                }
                this.$el.style.display = "block";
                if (config.created) {
                    config.created(this, $app);
                }
            }
        });
        return this;
    };
    window.App = window.App || new App();
    window.App.queryParams = window.App.parseUrl();
})();