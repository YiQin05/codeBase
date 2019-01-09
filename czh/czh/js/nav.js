(function () {
    function Nav() {
    }

    Nav.prototype.create = function () {
        //显示定制导航
        if (App.showNav()) {
            var menu = ''
                + '<style type="text/css">'
                + '    *{margin:0;padding:0;}'
                + '    a,img{border:0;}'
                + '    #menu{position:fixed;bottom:0px;width:100%;height:1.3rem;line-height:1.3rem;z-index:999;background:#F6F7F7;}'
                + '    #menu ul{margin:0 auto;list-style-type:none;width:100%;height:100%;border-top:1px solid #A9AAAB;}'
                + '    #menu ul li{float:left;width:50%;height:100%;text-align:center;position:relative;font-size:0.32rem;/*border-right:1px solid #ccc;*/}'
                + '    #menu ul li .my_icon{margin:0 auto;display: block;width:0.67rem;height:0.67rem;background:url(images/ic_tabbar_profile.png) no-repeat;background-size:100% 100%;}'
                + '    #menu ul li.on p{color:#0E8FE8;}'
                + '    #menu ul li .home_icon{margin:0 auto;display: block;width:0.67rem;height:0.67rem;background:url(images/ic_tabbar_home_active.png) no-repeat;background-size:100% 100%;}'
                +'     #menu ul li p{font-size:0.26rem;font-weight:500; color:rgba(153,153,153,1);line-height:0.38rem;}'
                + '    #menu ul li:nth-of-type(3){border-right:none;}'
                + '    #menu ul li .menu_li{padding-top:0.21rem;position:absolute;top:0px;left:0px;z-index:20;width:100%;height:100%;color:#454545;font-size:0.38rem;}'
                + '    #menu ul li .img_front img{width:100%;height:100%;}'
                + '    #menu ul li span div{position:absolute;top:0px;left:0px;}'
                + '    #menu ul li span a{float:left;width:100%;height:1.135rem;line-height:1.135rem;color:#454545;text-decoration:none;font-size: 0.34rem;}'
                + '    .footer_front{position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:888;display:none;}'
                + '</style>'
                + '<div id="menu">'
                + '    <ul>'
                + '        <li class="">'
                + '            <div class="menu_li" onclick="window.location=\'/czh/wash_car.html\'"><i class="home_icon"></i><p  style="color: #0E8FE8">首页</p></div>'
                + '        </li>'
                + '        <li class="">'
                + '            <div class="menu_li" onclick="window.location=\'/usr/personalcenter.html?partner=czh\'"><i class="my_icon"></i><p>我的</p></div>'
                + '        </li>'
                + '    </ul>'
                + '</div>'
                + '<div class="footer_front"><img src="images/front.png" width="100%" height="100%"></div>'
            ;
            var createMenu = function () {
                eval(''
                    + '$("body").append(menu);'
                    + '$(document).ready(function () {'
                    + '     $("#menu ul li").each(function (j) {'
                    + '         $("#menu ul li").eq(j).removeClass("on");'
                    + '         $("#menu ul li span").eq(j).animate({bottom: -$("#menu ul li span").eq(j).height()}, 100);'
                    + '     });'
                    + '     $("#menu ul li").each(function (i) {'
                    + '         $(this).click(function () {'
                    + '             if ($(this).attr("class") != "on") {'
                    + '                 $("#menu ul .on span").animate({bottom: -$("#menu ul .on span").height()}, 200);'
                    + '                 $("#menu ul .on").removeClass("on");'
                    + '                 $(this).addClass("on");'
                    + '                 $("span", this).show();'
                    + '                 $("span", this).animate({bottom: 15}, 200);'
                    + '                 $(".footer_front").show();'
                    + '             } else {'
                    + '                 $("#menu ul li span").eq(i).animate({bottom: -$("#menu ul li span").eq(i).height()}, 200);'
                    + '                 $(this).removeClass("on");'
                    + '                 $(".footer_front").hide();'
                    + '             }'
                    + '        });'
                    + '    });'
                    + '    $(".footer_front").click(function () {'
                    + '         $("#menu ul .on span").animate({bottom: -$("#menu ul .on span").height()-200}, 200);'
                    + '         $("#menu ul .on").removeClass("on");'
                    + '         $(this).hide();'
                    + '    });'
                    + '});'
                );
            }
            if ('undefined' == typeof jQuery) {
                var jqs = document.createElement("script");
                jqs.src = "js/jquery.min.js";
                jqs.type = "text/javascript";
                jqs.onload = function () {
                    createMenu();
                };
                document.getElementsByTagName("head")[0].appendChild(jqs);
            } else {
                createMenu();
            }
	    }
    }
    window.Nav = window.Nav || new Nav();
    window.Nav.create();
})();
