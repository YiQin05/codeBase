// JavaScript Document
//window.addEvent("domready",function(){})
window.onload=function(){ initPage();return;}
document.onkeypress=function(){$("lg_out").style.display==""&&event.keyCode==13&&login()}
window.onresize=function(){resize();}
var HEADER_MENUS_ITEM=110;
var b_INIT_MENUS_LIVEVIEW=!1, b_INIT_MENUS_SETTING=!1, b_INIT_REPLAY_PAGE=!1, b_INIT_ONRESIZE=!1;
var timeProcess_RESIZE;
var sNowURLName = "local";
var Sys={},ua=navigator.userAgent.toLowerCase(),s;
(s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:(s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:(s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]:(s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]:(s=ua.match(/version\/([\d.]+).*safari/))&&(Sys.safari=s[1]);

function initPage(){
	try{
		parent.moveTo(0,0); parent.resizeTo(screen.width,screen.height-30); parent.focus();
	}catch(e){}
	// initLanguage(); 改
	// parseInt($("digest").value)==1 改
	if(true){
		$("username").value="admin"; $("password").value="admin"; $("b_e").style.display="none";
		gotoLogin();
	}else{
		showLogin();
		$("b_login").addEvent("click",login);$("b_cancel_l").addEvent("click",function(){window.close();});
		$("username").value = $("uname").value;/*$("password").value = "admin";*/$("password").focus();$("password").select();
	}
	// setTimeout("ocxConfirm();", 300); 用作下载并安装WebCMS.exe
	return true;
}
function initLanguage(){
	var nlan = parseInt($("vlanguage").value); 
	if(isNaN(nlan)){
		var syslan = navigator.browserLanguage.toLowerCase();//得到浏览器所用的语言
		if(syslan.indexOf("zh-cn")>-1){lanset=1;}else{lanset=0;}
	}else{lanset = nlan; }
	if(lanset==1){m_szLanguage='cn';}
	else if(lanset==2){m_szLanguage='en'}
	else{m_szLanguage='en';} 
	setCookies("nLANGUAGE", lanset, 7);
	ApplyXmlLang("login.xml", m_szLanguage);
	m_xmlDoc = null; 
	ApplyXmlLang("index.xml", m_szLanguage);
	m_xmlDoc = null; 
	ApplyXmlLang("replay.xml", m_szLanguage);
	m_xmlDoc = null; 
	ApplyXmlLang("ptz.xml", m_szLanguage);
	m_xmlDoc = null; 
	ApplyXmlLang("setting.xml", m_szLanguage);
	m_xmlDoc = null; 
	getXMLHandler("./xml/htmlalert.xml", m_szLanguage);	//加载语言xml
	getJsAlertText(); 
	return true;
}
function showLogin(){$("lg_out").style.top="0px";$("lg_out").style.display="";$("main").style.display="none";}

function login(){
	
/*
	if(document.all.WebCMS.object ==null ) { 
		        alert(ALERTLOGINif);
	}
*/	
	var pageversion= $("pageversion").value
	setCookies("pageversion",pageversion,7);
	var despageversion= $("despageversion").value
	setCookies("despageversion",despageversion,7);
	
	
	if(pageversion!=1 || despageversion == 2){
		setCookies("pagerPWD",$("password").value,7);
	}
	
	//登录交互
	var sURL = "/webs/loginCMS";
	var nRanstr	= ranString(8);
	//sURL = "./xml/loginxml.xml";
	sURL = sURL + "?username=" + $("username").value;
	

	if(despageversion==2){
		
		//var pswurl=hex_md5($("password").value); 
		//var stringvc=$("WebCMS").WebEncryptString($("password").value);
		
		//DES加密
		var deskey = "qXSdHWfbSZaaLeHBRhLgxBiG"; 
		var stringbe = $("password").value;
		var pswurl = DES3.encrypt(deskey,stringbe);
		//-----------------
	
		//setCookies("SESSION",stringvc,7);
		//setCookies("stringmvc",hex_md5(stringvc),7);
		//setCookies("SESSION",pswurl,7);
		setCookies("stringmvc",pswurl,7);
		
		sURL = sURL + "&password=" + pswurl;//$("password").value;
	}
	else if(pageversion==1){
		var pswurl=hex_md5($("password").value); 
		var stringvc=$("WebCMS").WebEncryptString($("password").value);

		setCookies("SESSION",stringvc,7);
		setCookies("stringmvc",hex_md5(stringvc),7);
		sURL = sURL + "&password=" + pswurl;
	}else{
		sURL = sURL + "&password=" + $("password").value;
	}
	
	sURL = sURL + "&pageversion="+pageversion;
	sURL = sURL + "&UserID="+ nRanstr +"";
	sURL = sURL + "&ftppassword=YWRtaW4";
	sURL = sURL + "&despageversion="+despageversion;
	//alert(sURL);
	console.log(8)
	g_xmlhttp.open("get", sURL, false);
	SafeHttpSend(g_xmlhttp, null);
	//     g_xmlhttp.onreadystatechange = function()
	{
		if (g_xmlhttp.readyState != 4){return false;}
	}
    if (g_xmlDoc!=null){delete g_xmlDoc;g_xmlDoc=null;}

    g_xmlDoc = FormatToXmlDOM(g_xmlhttp.responseText);
    g_xmlDoc.async = false;
	if(selectSingleNode(g_xmlDoc,"html/body/level")){
		var nlevel = selectSingleNodeValue(g_xmlDoc,"html/body/level");//g_xmlDoc.selectSingleNode("html/body/level").text;
		if(isNaN(nlevel)||nlevel<0){
			alert(ALERTLOGIN);return false; //登陆失败
		}
		else if(nlevel == 9)
		{
			alert(ALERLOGINERR);return false;
		}
		setCookies("nUserLevel", nlevel, 1);
	}else{alert(ALERTLOGINCON+"~");return false;}
	
	var ipversion = parseInt($("ipversion").value);
	if(ipversion == 4 || ipversion ==6)
	{
		$("WebCMS").SetProtocolVersion(ipversion);
	}
	else
	{
		$("WebCMS").SetProtocolVersion(4);
	}
	gotoLogin();
	return true;
}
function gotoLogin(){
	initMainPage();	initMenus(); goMain(0);
	setTimeout("loginNVS();", 350);
}
function initMainPage(){
	$("lg_out").style.display	= "none";
	$("main").style.display		= "";
	$("main").style.top			= "0px";
	$("b_preview").addEvent("click",function(){goMain(0)});
	$("b_playback").addEvent("click",function(){goMain(1)});
	$("b_ptzctrl").addEvent("click",function(){goMain(2)});
	$("b_config").addEvent("click",function(){goMain(3)});
	$("b_alarm").addEvent("click",function(){goMain(4)});
	$("d_alarmtip").addEvent("click",function(){goMain(4)});
	$("b_quit").addEvent("click",function(){goMain(110)});
	return true;
}
function initMenus(){
	var base64 = new Base64();
	//$("passwd").value =base64.encode($("passwordset").value);
	setCookies("pageString", hex_md5(base64.encode($("username").value)), 7);
	//setCookies("charset_gbk",hex_md5(base64.encode($("password").value), 7));
	setCookies("pagerUseName",$("username").value, 7)
	setCookies("pageURL", $("url").value, 7);	
	setCookies("pagePort", $("port").value, 1);
	setCookies("intSDRecord", $("nstorage").value, 7);
	setCookies("intChannel", $("nchannel").value, 7);	//通道数
	setCookies("alarmoutputcount", $("noutput").value,1);	//报警输入路数
	//setCookies("nUserLevel", $("nlevel").value,1);		//登录用户权限
	setCookies("devicetype", $("devicetype").value, 7);
	setCookies("iswifi", $("iswifi").value, 1);		//是否有探头WIFI
}
function goMain(a){
	b_INIT_ONRESIZE=1;
	//if(HEADER_MENUS_ITEM==3&&a!=3){$("set_fm").src="";}
	try{if(bInitReplayOcx==1){var nWindow = parseInt($("nwindows").value);$("ReVideoX").PLAY_Pause(nWindow);} }catch(e){}
	if(a!=0){
		var i, r=0, c=0; l=0, scf="";
		for(i=0; i<4; i++){r=1; if(bRECORD[i]>0){scf = ALERTVIEWRECORD;}}
		if(bCALL>0){c=1; if(scf!=""){scf = scf + "、" + ALERTVIEWCALL;}else{scf = ALERTVIEWCALL;}}
		for(i=0; i<4; i++){l=1; if(bLISTEN[i]>0){if(scf!=""){scf = scf + "、" + ALERTVIEWLISTEN;}else{scf = ALERTVIEWLISTEN;}}}
		if(scf!=""){if(!confirm(scf + " " + ALERTVIEWCHANGE)){return false;}else{
				if(r==1){$("WebCMS").StopRecord();}
				if(c==1){$("WebCMS").StopTalk();}
				if(l==1){$("WebCMS").PlayAudio(0);}
			}
		}
	}
	
	switch(a){
		case 0:	//实时预览
			goPreview(a); break;
		case 1:	//录像回放
			goPlayback(a); break;
		case 2:	//PTZ控制(暂不使用)
			goPtzCtrl(a); break;
		case 3:	//设置
			goSysConfig(a); break;
		case 4:	//报警
			goAlarm(a); break;
		case 110://退出
			goLogout(a); break;
		default:	//否则显示登录
			goLogout(a); break;
	}
	if(a!=0){initState(0);}
	HEADER_MENUS_ITEM=a;
}
//实时浏览
function goPreview(a){
	// console.log('到这了')
	if(HEADER_MENUS_ITEM==0){return false;}
	console.log('到这了111')
	$("mb0").style.display="none";
	$("mb1").style.display="none";
	$("mb2").style.display="none";
	$("mb").style.display="";
	$("set_fm").src="";
	changeNavStyle($("b_preview"));
	if(!b_INIT_MENUS_LIVEVIEW){
		g_xmlhttp.open("get", "http://172.16.10.100/html/body_menus_bar.html", false);
		SafeHttpSend(g_xmlhttp, null);
		//g_xmlhttp.onreadystatechange = function()
		{
			if (g_xmlhttp.readyState != 4){return false;}
			document.getElementById("mb_btn_bar").innerHTML = g_xmlhttp.responseText;
		}
		b_INIT_MENUS_LIVEVIEW=1;
		// $("b_image").className	= "Rightbtn image"; 改
		// $("b_ptz").className	= "Rightbtn ptz";
		RIGHT_FOCUS_SHOW=0;RIGHT_SIDE=0;
		$("image_adjust").style.display="none";	//亮色调节
		$("focus_adjust").style.display="none";	//聚焦变倍
		$("ptz_control").style.display="none";	//球机PTZ 聚焦变倍
		m_szLanguage='cn';
		ApplyXmlLang("index.xml", m_szLanguage);
	}
	HEADER_MENUS_ITEM	= a;
	manualResize();
	if(!("webkit"==getwebtype()||"hh"==getwebtype()))//判断浏览器是否是IE
	{
		var bStream	= $("WebCMS").GetStreamType();
		console.log(2333)
		console.log($("WebCMS"))
		console.log(bStream)
		if(bStream){
			$("b_Stream1").className = "b_Stream1";
			$("b_Stream2").className = "b_Stream2";
		}else{
			$("b_Stream1").className = "b_Stream2";
			$("b_Stream2").className = "b_Stream1";
		}
		setTimeout("startPreview();", 300);
	}
}
//录像回放
function goPlayback(a){
	if(HEADER_MENUS_ITEM==1)return false;
	stopPreview();
	$("mb").style.display="none";
	$("mb0").style.display="none";
	$("mb2").style.display="none";
	$("mb1").style.display="";
	$("set_fm").src="";
	changeNavStyle($("b_playback"));
	if(!b_INIT_REPLAY_PAGE){
//加载设备功能菜单
		g_xmlhttp.open("get", "html/body_replay_left.html", false);
		SafeHttpSend(g_xmlhttp, null);
//     g_xmlhttp.onreadystatechange = function()
		{
			if (g_xmlhttp.readyState != 4){return;}
			
			var configData;
			configData = g_xmlhttp.responseText;
			document.getElementById("review_ctrl").innerHTML = configData;
		}
		g_xmlhttp.open("get", "html/body_replay_menus.html", false);
		SafeHttpSend(g_xmlhttp, null);
//     g_xmlhttp.onreadystatechange = function()
		{
			if (g_xmlhttp.readyState != 4){return;}
			
			var configData;
			configData = g_xmlhttp.responseText;
			document.getElementById("div_replay_menus").innerHTML = configData;
		}
		initReplayPage();
		b_INIT_REPLAY_PAGE=1;
		ApplyXmlLang("replay.xml", m_szLanguage);
		changeStorage();
	}
	HEADER_MENUS_ITEM	= a;
	manualResize();
}
//PTZ控制 暂未使用
function goPtzCtrl(a){
	if(HEADER_MENUS_ITEM==2)return false;
	stopPreview();
	$("mb0").style.display="none";
	$("mb1").style.display="none";
	$("mb2").style.display="none";
	$("mb").style.display="";
	//$("set_fm").src="";
	RIGHT_SIDE			= 165;
	HEADER_MENUS_ITEM	= a;
	manualResize();
}
//参数设置
function goSysConfig(a){
	if(HEADER_MENUS_ITEM==3)return false;
	stopPreview();
	$("mb").style.display="none";
	$("mb1").style.display="none";
	$("mb2").style.display="none";
	$("mb0").style.display=""; 
	changeNavStyle($("b_config"));
	//$("set_fm").src="";
	if(!b_INIT_MENUS_SETTING){
//加载设备功能菜单
		g_xmlhttp.open("get", "html/body_menus_setting.html?=version=18.7.2", false);
		SafeHttpSend(g_xmlhttp, null);
//     g_xmlhttp.onreadystatechange = function()
		{
			if (g_xmlhttp.readyState != 4){return;}
			
			var configData;
			configData = g_xmlhttp.responseText;
			document.getElementById("mb0_setting_bar").innerHTML = configData;
		}
//加载脚本
		if(document.getElementById("setting_bar_js") == null){
			console.log(101111111)
			g_xmlhttp.open("get", "jsmain/set.js?=version=18.7.2", false);
			SafeHttpSend(g_xmlhttp, null);
//       	 g_xmlhttp.onreadystatechange = function()
        	{
				if (g_xmlhttp.readyState == 4){
					DynAppendJS("setting_bar_js", g_xmlhttp.responseText);
					initConfigPage(1);
				}
			}
		}else{
			initConfigPage(1);
		}
		b_INIT_MENUS_SETTING=1;
		ApplyXmlLang("setting.xml", m_szLanguage);
	}else{
		if("webkit"==getwebtype()||"hh"==getwebtype())
		{
			goDFPage("network", "la_netbasic");
		}else{
			goDFPage("local", "la_local");
		}
	}

	if($("log_videomask").value == '0')
	{
		$("l_videomask").style.display = "none";
	}

	if($("log_camera").value == '0')
        {
		$("m_camera").style.display = "none";
        }
	
  	
//加载设备功能菜单 结束
	HEADER_MENUS_ITEM	= a;
	manualResize();
}
//报警
function goAlarm(a){
	if(HEADER_MENUS_ITEM==4)return false;
	stopPreview();
	$("mb").style.display="none";
	$("mb0").style.display="none";
	$("mb1").style.display="none";
	$("mb2").style.display="";
	changeNavStyle($("b_alarm"));
	$("d_alarmtip").style.display="none";
	var base64 = new Base64(); 
	//$("alarm_fm").src="alarmlog.asp?user=admin&pwd=12345678a";
	//$("password").value =$("WebCMS").WebEncryptString($("passwordset").value);
	var base64 = new Base64();  
	var stringvc=$("WebCMS").WebEncryptString($("password").value);
	var pswurl=base64.encode(stringvc);
	$("alarm_fm").src="alarmlog.asp?"+base64.encode("user=")+base64.encode($("uname").value)+base64.encode("&pwd=")+pswurl;
	HEADER_MENUS_ITEM	= a;
	manualResize();
}
//退出
function goLogout(a){
	stopViewLogout();
	$("mb").style.display="";
	$("mb0").style.display="none";
	$("mb1").style.display="none";
	$("mb2").style.display="none";
	//changeNavStyle($("b_quit"));
	HEADER_MENUS_ITEM	= a;
	manualResize();
	$("password").value="";$("password").focus();
}
function changeNavStyle(a){
	$("nav").getElements("a").each(function(a){a.className="nav_btn"});
	a.className = "nav_btn1";
	//alert(a.id);
}
function manualResize(){
	b_INIT_ONRESIZE =!1;
	resize();
}
function resize(){
	if(onReTOS<3&&b_INIT_ONRESIZE){if(timeProcess_RESIZE)clearInterval(timeProcess_RESIZE);timeProcess_RESIZE=setTimeout("resize();", (3-onReTOS)*1000);return false};
	var a, b;
	var myos = appInfo();
	a = document.documentElement.clientWidth;
	b = document.documentElement.clientHeight;
	if(a < 1000) a = 1000;
	if(b < 600) b = 600;
	//alert("a. manualResize(); a=" + a +" b=" + b +" RIGHT_SIDE=" + RIGHT_SIDE +" videoH-width=" + $("videoH").getStyle("width") +" videoH-height=" + $("videoH").getStyle("height"));
	switch(HEADER_MENUS_ITEM){
		case 0:case 2:	//实时预览 PTZ
			if(myos.version==6){a = a - 17;b = b - 17;}
			if(bORIGINAL || bSCALE) return false;
			$("video1").setStyle("paddingTop", "0px");
			$("mb").setStyle("min-width", a + "px");
			$("mb").setStyle("width", a + "px");
			$("mb").setStyle("height", (b-78) + "px");
			$("videoH").setStyle("min-width", a + "px");
			$("videoH").setStyle("width", a + "px");
			$("videoH").setStyle("height", (b-110) + "px");
			$("videoCon").setStyle("width", "100%");
			$("videoCon").setStyle("height", "100%");
			if(RIGHT_SIDE){
				a = a - RIGHT_SIDE;
			}
			$("video1").setStyle("width", (a-30) + "px");
			$("video1").setStyle("height", "100%");
			if("webkit"==getwebtype()||"hh"==getwebtype())//判断浏览器是否是IE   兼容火狐 谷歌rtsp取图像
			{
				try{
					$("FoxFire_video_mb").video.aspectRatio='16:9';	
				}catch(e){}
			}else{
				$("WebCMS").style.width	= "100%";
				$("WebCMS").style.height= (b-110) + "px";
			}
			
			
		break;
		case 1:	//录像回放
			$("mb1").setStyle("min-width", a + "px");
			$("mb1").setStyle("width", a + "px");
			$("mb1").setStyle("height", (b-78) + "px");
			$("revideoH").setStyle("min-width", a + "px");
			$("revideoH").setStyle("width", a + "px");
			$("revideoH").setStyle("height", "100%");
			$("review_video").setStyle("min-width", (a-240) + "px");
			$("review_video").setStyle("width", (a-240) + "px");
			$("review_video").setStyle("height", "100%");
			$("video2").setStyle("width", (a-240) + "px");	//200+30(左右空15px)
			$("video2").setStyle("height", (b-106) + "px");
			$("ReVideoX").style.width	= "100%";
			$("ReVideoX").style.height	= (b-106) + "px";
		break;
		case 3:	//设置
			if(myos.version==6){a = a - 17;b = b - 17;}
			$("mb0").setStyle("min-width", a + "px");
			$("mb0").setStyle("width", a + "px");
			$("mb0").setStyle("height", (b-78) + "px");
			$("divSetting").setStyle("width", (a-30) + "px");
			$("divSetting").setStyle("height", (b-78) + "px");
			$("mb0_setting").setStyle("width", (a-208) + "px");
			$("mb0_setting").setStyle("height", (b-78) + "px");
			if(myos.version==6){
				$("set_fm").setStyle("width", (a-208) + "px");
				$("set_fm").setStyle("height", (b-78) + "px");
			}
		break;
		case 4:	//报警
			$("mb2").setStyle("min-width", a + "px");
			$("mb2").setStyle("width", a + "px");
			$("mb2").setStyle("height", (b-78) + "px");
			$("alarmH").setStyle("min-width", (a-20) + "px");
			$("alarmH").setStyle("width", (a-20) + "px");
			$("alarmH").setStyle("height", (b-78) + "px");
			//$("alarm_body").setStyle("width", (a-230));	//200+30(左右空15px)
			//$("alarm_body").setStyle("height", "100%");
			$("alarm_fm").setStyle("width", (a-20) + "px");
			$("alarm_fm").setStyle("height", (b-78) + "px");
		break;
		default:	//否则显示登录
			$("main").style.display		= "none";
			$("lg_out").style.display	= "";
			$("lg_out").style.top		= "0px"
			$("lg_out").setStyle("height", (b-10) + "px");
		break;
	}
	onReTOS	= 0; b_INIT_ONRESIZE	= 1;
	clearInterval(timeProcess);
	timeProcess = setInterval('setTimeProcess(10)', 1000);
	return  true;
}
function btnLiveCtrl(CTRL_OBJ, CTRL_CMD){
	switch(CTRL_CMD){
		case 1:	//抓拍
			funSnap(CTRL_OBJ);
		break;
		case 2:	//录像
			funRecord(CTRL_OBJ);
		break;
		case 3:	//对讲
			funCall(CTRL_OBJ);
		break;
		case 4:	//监听
			funListen(CTRL_OBJ);
		break;
		case 5:	//报警
			funClrAlarm(CTRL_OBJ);
		break;
		case 6:	//局部放大
			funZoomIn(CTRL_OBJ);
		break;
		case 7:	//全屏
			funFull(CTRL_OBJ);
		break;
		case 8:	//宽高比
			funScale(CTRL_OBJ, 0);
		break;
		case 9:	//原始大小
			funOriginal(CTRL_OBJ, 0);
		break;
		case 51://云台控制
			funPTZCtrl(CTRL_OBJ, 0);
		break;
		case 52://图像调节
			funImageCtrl(CTRL_OBJ, 0);
		break;
		case 61://主码流
			changeStream(CTRL_OBJ, CTRL_CMD); 
			initState(1);
		break;
		case 62://辅码流
			changeStream(CTRL_OBJ, CTRL_CMD); 
			initState(1);
		break;
		case 80:
			funRegional(CTRL_OBJ, 0);
		break;
		default://其他
			
		break;
	}	
	//alert("OBJ:" + CTRL_OBJ.id + " CMD:" + CTRL_CMD);
}
function preventM(a){Sys.ie?document.documentElement.releaseCapture():(a?a:event).preventDefault()}

