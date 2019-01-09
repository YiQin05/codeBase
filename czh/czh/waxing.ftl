<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>水晶打蜡</title>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="format-detection" content="telephone=no" />
    <link charset="UTF-8" rel="stylesheet" href="${contextPath}/css/promotion/car_cosmetology/reset.min.css">
    <link charset="UTF-8" rel="stylesheet" href="${contextPath}/css/promotion/car_cosmetology/waxing.css?v=1.0">
    <style>
        body {
            overflow: hidden;
        }
        #loading{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0);
            z-index: 999;
        }
        #loading img{
            width: 1.2rem;
            height: 1.2rem;
            position: fixed;
            left: 50%;
            top: 72%;
            z-index: 9999;
            margin-left: -.6rem;
            margin-top: -.6rem;
        }
    </style>
    <script>
        //清除所有cookie
        function clearAllCookie() {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if(keys) {
                for(var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        }
        clearAllCookie();
        localStorage.removeItem("BMap_othersearch_vuizew");
        localStorage.removeItem("BMap_scommon_efjngs");
        localStorage.removeItem("BMap_map_44xrwi");
        localStorage.removeItem("BMap_mapclick_l1jd53");
        localStorage.removeItem("BMap_opmb_n0hysd");
        localStorage.removeItem("BMap_canvablepath_lf2t4w");
        localStorage.removeItem("BMap_common_sqwnmw");
        localStorage.removeItem("BMap_symbol_xyb4di");
        localStorage.removeItem("BMap_marker_tvysem");
        localStorage.removeItem("BMap_hotspot_uwu3tl");
    </script>
    <script>
        //->REM
        ~function () {
            var desW = 750,
                    winW = document.documentElement.clientWidth || document.body.clientWidth;
            if (winW > desW) {
                return;
            }
            document.documentElement.style.fontSize = winW / desW * 100 + 'px';
        }();
    </script>
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b3d1c2360d33d8180935f3c3ecb2a541";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>
<body>
<div id="loading">
    <img src="${contextPath}/images/promotion/car_cosmetology/dot_loading.svg" alt="">
</div>
<div id="main" class="main">
    <div class="header">
        <img src="${contextPath}/images/promotion/car_cosmetology/img_banner_wax@2x.png" alt="">
    </div>
    <div class="content">
        <div class="con-top">
            <p class="my_quan">我的服务券</p>
            <#if coupons gt 0>
                <p class="keyong">
                    <span>${coupons}</span>张可用
                </p>
            <#else>
                <p class="keyong" style="color: #9E9E9E;">
                    暂无可用
                </p>
            </#if>
            <i class="icon2"></i>
        </div>
        <div class="con-lists">
            <ul class="clear">
                <li onclick="toDetail(199)">
                    <i class="car_icon"></i>
                    <p>水晶打蜡</p>
                    <p class="money">130元起<span>280元</span></p>
                </li>
               <#-- <li onclick="toDetail(190)">
                    <i class="car_icon"></i>
                    <p class="mgt">水晶打蜡</p>
                    <p class="money mgt2">130元起<span>260元</span></p>
                    <p class="area">限珠三角地区</p>
                </li>
                <li onclick="toDetail(190)">
                    <i class="car_icon"></i>
                    <p class="mgt">水晶打蜡</p>
                    <p class="money mgt2">130元起<span>260元</span></p>
                    <p class="area">限广东省(其他城市)</p>
                </li>
                <li onclick="toDetail(190)">
                    <i class="car_icon"></i>
                    <p class="mgt">水晶打蜡</p>
                    <p class="money mgt2">130元起<span>260元</span></p>
                    <p class="area">限湖南/江西</p>
                </li>-->
            </ul>
        </div>
    </div>
    <div style="width: 100%;height: 16rem;margin-top: .2rem;position: relative;z-index: 99999;">
        <iframe scrolling="yes" id="myiframe" name="ifm" src="" frameborder="0" style="width:100%;height:100%;"></iframe>
    </div>

</div>

<script charset="UTF-8" type="text/javascript" src="${contextPath}/js/fastclick.min.js"></script>
<script charset="UTF-8" type="text/javascript" src="${contextPath}/js/jquery-1.11.1.min.js"></script>
<script charset="UTF-8" type="text/javascript" src="${contextPath}/js/toast.js"></script>
<!--公司的ak=DUS4dcP4z93GcxARAGscAG6uNkP1o9Gs--> <!-- nM6Z7fsi66CwCKKSg77emBhmVU1h4Rr3-->
<script src="http://api.map.baidu.com/api?v=2.0&ak=DUS4dcP4z93GcxARAGscAG6uNkP1o9Gs"></script>

<script>
    var iframe = document.getElementById("myiframe");
    iframe.onload = function(){
        $('#loading').hide();
        console.log("iframe load done");
    };

    var customerId = '${customerId}';
    var adUrl = '${adUrl}';
    var adId = '${adId}';
    var scid = getParams("scid");

    // 百度定位
    var geolocation = new BMap.Geolocation();
    var gc = new BMap.Geocoder();
    geolocation.getCurrentPosition(function(r){   //定位结果对象会传递给r变量
        if(this.getStatus() == BMAP_STATUS_SUCCESS){  //通过Geolocation类的getStatus()可以判断是否成功定位。
            var pt = r.point;
            gc.getLocation(pt, function(rs){
                // 经纬度信息在rs里
                var point = rs.point;
                //百度经纬度转高德经纬度
                var bdDecrypt = bd_decrypt(point.lng, point.lat);
                var url = "${washCarIframeUrl}?h5=true&adUrl="+ adUrl +"&adId=" + adId + "&scid=" + scid + "&customerId=" + customerId + "&czh_token=" + '${newToken}' + "&lng=" + bdDecrypt.lng + "&lat=" +  bdDecrypt.lat;
                $('#myiframe').attr('src',url);
            });
        }else{
            switch( this.getStatus() ){
                case 2:
                    Toast('位置结果未知 获取位置失败.',1500);
                    break;
                case 3:
                    Toast('导航结果未知 获取位置失败.',1500);
                    break;
                case 4:
                    Toast('非法密钥 获取位置失败.',1500);
                    break;
                case 5:
                    Toast('对不起,非法请求位置  获取位置失败.',1500);
                    break;
                case 6:
                    Toast('对不起,当前 没有权限 获取位置失败.',1500);
                    break;
                case 7:
                    Toast('对不起,服务不可用 获取位置失败.',1500);
                    break;
                case 8:
                    Toast('对不起,请求超时 获取位置失败.',1500);
                    break;
            }
            var url = "${washCarIframeUrl}?h5=true&adUrl="+ adUrl +"&adId=" + adId + "&scid=" + scid + "&customerId=" + customerId + "&czh_token=" + '${newToken}';
            $('#myiframe').attr('src',url);
        }
    },{enableHighAccuracy: true});

    /*解决移动端点击300ms延迟*/
    FastClick.attach(document.body);

    $('.con-top').click(function(){
        window.open('${myTicketsUrl}');
    });

    function toDetail(id) {
        var url = "${cosmetologyDetailUrl}?ssotoken=__ssotoken__&type=item&item_id=" + id;
        window.open(url);
    }

    function getParams(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

    //百度坐标转高德（传入经度、纬度）
    function bd_decrypt(bd_lng, bd_lat) {
        var X_PI = Math.PI * 3000.0 / 180.0;
        var x = bd_lng - 0.0065;
        var y = bd_lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
        var gg_lng = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return {lng: gg_lng, lat: gg_lat}
    }
</script>
</body>
</html>