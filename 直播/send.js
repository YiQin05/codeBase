// JavaScript Document
var SENDCMD=0, SENDVALUE=-100;
var ALLALARMDATA;

function setalarmdata(alarmdata)
{
	ALLALARMDATA = alarmdata.split("_");
}

function sendBTNSettingEx(pFlag, pCMD, pCTRL, pSTEP, PRES, oSlider, oText){
	try{
		window.status = "";
		var nValue, nRanstr	= ranString(8);
		if(SENDCMD==pCMD){
			nValue = parseInt(SENDVALUE - pCTRL);
			/*if(isNaN(nValue)){SENDVALUE = pCTRL; return false;}
			nValue	= Math.abs(nValue);
			if(nValue < 5){return false;}*/
			SENDVALUE = pCTRL;
		}else{SENDCMD = pCMD; SENDVALUE = pCTRL;}
		var nwindow = parseInt(getCookies("intChannel"));
		if(isNaN(nwindow))nwindow=parseInt($p("nwindows").value);
		if(isNaN(nwindow))nwindow=1;
		nwindow	= nwindow - 1;
		var strURL = "/webs/btnSettingEx";
		var nRanstr	= ranString(8);
		var bFlag=!1;
		CreateAjax();
		if(!oSend){
			window.status = CREATEXMLHTTPERROR;
			return false;
		}
		if(pCTRL!=10000&&pCTRL!=11000&&oText!=null&&oText!=""){
			$(oText).innerHTML	= pCTRL;
		}else if((pCTRL==10000||pCTRL==11000)&&oText!=null&&oText!=""){
			bFlag	= 1;
		}else{
			bFlag	= 0;
		}
		strURL	= strURL + "?flag=" + pFlag + "&paramchannel="+ nwindow +"&paramcmd="+ pCMD +"&paramctrl="+ pCTRL +"&paramstep="+ pSTEP +"&paramreserved="+ PRES +"&UserID="+ nRanstr +"";
		strURL = strURL + "&UserID="+ nRanstr +"";
		var xmlText 	= "<Message><flag>"+pFlag+"</flag></Message>";
		//window.status = strURL;
		//window.document.title = strURL;
		oSend.onreadystatechange = function (){CBK_BTNSettingEx(pFlag, pCMD, bFlag, oSlider, oText);}
		oSend.open("get", strURL, true);
		oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
		oSend.send(xmlText);
	 }catch(e){
		window.status = SENDXMLHTTPERROR;
		return false;
	}
}
function CBK_BTNSettingEx(pFlag, pCMD, bFlag, oSlider, oText) {
   if (oSend.readyState == 4) {
        if (oSend.status == 200){
			try{
				LoadXMLDocument(xmlResult,oSend);	//兼容其他浏览器
			}catch(e){
				window.status = CREATEDOMDOCERROR;
				return false;
			}
			try{
				try{
					returnTitle = selectSingleNodeValue(xmlResult,"html/title").toLowerCase();
				}catch(e){
				  try{
					returnTitle = selectSingleNodeValue(xmlResult,"html/head/title").toLowerCase(); 
				  }catch(e){
					returnTitle = oSend.responseText;
				  }
				  window.status = "~ " + returnTitle;
				  return false;
				}
				var returnTitle, nChan, nCmd, nCtrl;
				switch(pFlag){
				case 1000:		//SENSOR、镜头参数配置
					if(bFlag){
						nChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						nCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						nCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
						if(isNaN(nCtrl))return false;
						if(oSlider!=null&&oSlider!="")oSlider.set(nCtrl);
						if(oText!=null&&oText!="")$(oText).innerHTML = nCtrl;
					}else{
						switch(returnTitle){
						case "setting succeed":	
							window.status = "succeed";
							break;
						case "setting failure":	
							window.status = "failure";
							break;
						 default:
							window.status = "succeed~" + returnTitle;
							break;
						}
					}
				break;
				case 2000:		//字符叠加OSD设置
					window.status = "succeed";
				break;
				case 3000:		//存储设备管理
						nChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						nCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						nCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
					storageTake(pFlag, pCMD, nChan, nCtrl);
				break;
				case 5000:		//高清球
					if(bFlag==1){
						nChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						nCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						nCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
						if(isNaN(nCtrl))return false;
						if(oSlider!=null&&oSlider!="")oSlider.set(nCtrl);
						if(oText!=null&&oText!="")$(oText).innerHTML = nCtrl;
					}else{
						window.status = "succeed";
					}
				break;
				default:
					window.status = returnTitle;
				break;
				}
			}catch(e){
				window.status = RETURNXMLERROR;
			}
			return false;
		}else if(oSend.status == 404){
			window.status = URLERROR;
			return false;
		}
   }
}


var filelist	= new Array();		//文件列表
var currentpage	= 0;				//当前页
var searchparam	= new Array();		//搜索条件
var tmppflag, getPercent, tmpphotoNum;

/*
btnSettingEx(1000,1001,11000, 0, 0,'mybri','strbri');	//镜头控制
btnSettingEx(2000, 2001, 0, 0, 0, '', '');				//OSD控制
*/
function btnSettingEx(paramflag, paramcmd, paramctrl, paramstep, paramreserved, Gobj, Aobj){
try{
	window.status = "";
	nwindow = parseInt(getCookies("intChannel"));
	if(isNaN(nwindow) || nwindow < 1 || nwindow > 4){nwindow = $p("nwindows").value;}
	nwindow	= nwindow - 1;
	if(paramflag==2000){nwindow	= paramctrl;}	//OSD控制
	var strurl = "/webs/btnSettingEx";
	var nRanstr	= ranString(8);
	var tmpparamflag	= paramflag;
	var objflag;
	var xmlText 	= "<Message><flag>"+tmpparamflag+"</flag>";
	xmlText 		= xmlText + "<paramchannel>"+ nwindow +"</paramchannel>";
	xmlText 		= xmlText + "<paramcmd>"+ paramcmd +"</paramcmd>";
	xmlText 		= xmlText + "<paramctrl>"+ paramctrl +"</paramctrl>";
	xmlText 		= xmlText + "<paramstep>"+ paramstep +"</paramstep>";
	xmlText 		= xmlText + "<paramreserved>"+ paramreserved +"</paramreserved>";
	xmlText			= xmlText + "</Message>";

	CreateAjax();
	if(!oSend){
		window.status = CREATEXMLHTTPERROR;
		return false;
	}
	if(paramctrl!=10000&&paramctrl!=11000&&Aobj!=null&&Aobj!=""){
		$(Aobj).innerHTML	= paramctrl;
	}else if((paramctrl==10000||paramctrl==11000)&&Aobj!=null&&Aobj!=""){
		objflag	= 1;
	}else{
		objflag	= 0;
	}
	strurl	= strurl + "?flag=" + tmpparamflag + "&paramchannel="+ nwindow +"&paramcmd="+ paramcmd +"&paramctrl="+ paramctrl +"&paramstep="+ paramstep +"&paramreserved="+ paramreserved +"&UserID="+ nRanstr +"";
//	window.status = strurl;
	oSend.onreadystatechange = function (){alertSettingEx(paramflag, paramcmd, objflag, Gobj, Aobj);}
	oSend.open("POST",strurl,true);
	oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
	oSend.send(xmlText);
 }catch(e){
	window.status = SENDXMLHTTPERROR;
	return false;
}
}

function alertSettingEx(paramflag, paramcmd, objflag, Gobj, Aobj) {
   if (oSend.readyState == 4) {
        if (oSend.status == 200){
			var Strreturn;
			var vChan, vCmd, vCtrl;
			try{
				LoadXMLDocument(xmlResult,oSend);	//兼容其他浏览器
			}catch(e){
				window.status = CREATEDOMDOCERROR;
				return false;
			}
			try{
				try{
					Strreturn = selectSingleNodeValue(xmlResult,"html/title").toLowerCase();
				}catch(e){
				  try{
					Strreturn = selectSingleNodeValue(xmlResult,"html/head/title").toLowerCase();
				  }catch(e){
					Strreturn = oSend.responseText;
				  }
				  window.status = Strreturn;
				  return false;
				}
				switch(paramflag){
				case 1000:		//SENSOR、镜头参数配置
					if(objflag==1){
						vChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						vCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						vCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
						if(Gobj!=null&&Gobj!=""){eval(Gobj).setSldPoint(vCtrl);}
						if(Aobj!=null&&Aobj!=""){$(Aobj).innerHTML = vCtrl;}
					}else{
						switch(Strreturn){
						case "setting succeed":	
							window.status = "succeed"; break;
						case "setting failure":	
							window.status = "failure"; break;
						 default:
							window.status = "succeed~" + Strreturn; break;
						}
					}
				break;
				case 2000:		//字符叠加OSD设置
					window.status = "succeed"; break;
				case 3000:		//存储设备管理
						vChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						vCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						vCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
					storageTake(paramflag, paramcmd, vChan, vCtrl);
				break;
				case 5000:		//高清球
					if(objflag==1){
						vChan 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/chan"));
						vCmd 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/cmd"));
						vCtrl 	= parseInt(selectSingleNodeValue(xmlResult,"html/body/ctrl"));
						if(Gobj!=null&&Gobj!=""){
							//$(Gobj).value	= vCtrl;
							eval(Gobj).setSldPoint(vCtrl);
						}
						if(Aobj!=null&&Aobj!=""){$(Aobj).innerHTML = vCtrl;}
					}else{window.status = "succeed";}
					break;
				default:
					window.status = Strreturn; break;
				}
			}catch(e){
				window.status = RETURNXMLERROR;
			}
			return false;
		}else if(oSend.status == 404){
			window.status = URLERROR; return false;
		}
   }
}
function storageTake(paramflag, paramcmd, vChan, vCtrl){
	if(paramcmd==3001){	//格式化存储设备命令提交返回
		if(vCtrl==-1){
			getPercent = setTimeout("CloseUpdatePer()",2000);
		}else{
			FunPercentEx("/webs/btnPercentEx",3001,0,"&percent=0");
			UpdatePer(0, 0, HTMLFORMATALERT);
		}
	}else if(paramcmd==3002){	//检查存储设备命令提交返回
		if(vCtrl==-1){
		getPercent = setTimeout("CloseUpdatePer()",2000);
		}else{
			FunPercentEx("/webs/btnPercentEx",3002,0,"&percent=0");	
			UpdatePer(0, 0, HTMLCHECKALERT);
		}					
	}
}

function FunControlHitEx(paramflag, paramcmd, paramctrl, parameter){
  try{
	var strurl = "/webs/btnSettingEx";

	if(3001==paramcmd||3002==paramcmd){
		UpdatePer(0, 0, HTMLCHECKALERT);
	}
	oSend = false;
	var xmlText 	= "<Message><flag>"+paramflag+"</flag>";
	xmlText 		= xmlText + "<paramchannel>0</paramchannel>";
	xmlText 		= xmlText + "<paramcmd>"+ paramcmd +"</paramcmd>";
	xmlText 		= xmlText + "<paramctrl>"+ paramctrl +"</paramctrl>";
	xmlText 		= xmlText + "<paramstep>0</paramstep>";
	xmlText 		= xmlText + "<paramreserved>0</paramreserved>";
	xmlText			= xmlText + "</Message>";
	
	CreateAjax();
	if(!oSend){alert(CREATEXMLHTTPERROR); return false;}
	strurl	= strurl + "?flag=" + paramflag + "&paramchannel=0&paramcmd="+ paramcmd +"&paramctrl="+ paramctrl +"&paramstep=0&paramreserved=0";
	//alert(strurl);
	oSend.onreadystatechange = function (){alertSettingEx(paramflag, paramcmd, 0);}
	oSend.open("POST",strurl,true);
	oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
	oSend.send(xmlText);
  }catch(e){
	if(3001==paramcmd||3002==paramcmd){UpdatePer(101, 0, HTMLCHECKALERT);}
	alert(SENDXMLHTTPERROR);
	return false;
  }
}

function FunPercentEx(paramurl,paramflag,paramcmd,parameter){
  try{
	var returnflag	= paramflag;
	var strurl;
	oSend = false;
	var xmlText 	= "<Message><paramipcam>1</paramipcam>";
	xmlText 		= xmlText + "<paramflag>"+(paramflag) +"</paramflag>";
	xmlText 		= xmlText + "<paramcmd>"+(paramcmd) +"</paramcmd>";
	xmlText 		= xmlText + "<parameter>"+(parameter) +"</parameter>";
	xmlText			= xmlText + "</Message>";

	CreateAjax();
	if(!oSend){alert(CREATEXMLHTTPERROR); return false;}
	if(paramflag==9999){	//设置获取通道参数
		strurl	= paramurl + "?nchannel="+(paramcmd-1)+"";
	}else{
		strurl	= paramurl + "?flag="+paramflag+"&audioflag="+paramcmd+"";
		if(parameter!=""&&parameter!="0"){strurl = strurl + parameter;}
	}
//	alert(strurl);
	oSend.onreadystatechange = function (){alertControlEx(paramflag, paramcmd, 0, parameter);}
	oSend.open("POST",strurl,true);
	oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
	oSend.send(xmlText);
  }catch(e){
	if(paramflag!=9999){UpdatePer(101, 0, HTMLCHECKALERT);}
	alert(SENDXMLHTTPERROR); return false;
  }
}

function alertControlEx(paramflag, paramcmd, paramctrl, parameter) {
   if (oSend.readyState == 4) {
        if (oSend.status == 200){
			try{
				if(paramflag==9999){	//设置获取通道参数
					setTimeout("ThreadedChannel("+paramcmd+",'"+parameter+"');",500); return true;
				}
			}catch(e){alert("Call ThreadedChannel Error!"); return false;}
			var Strreturn;
			try{
				LoadXMLDocument(xmlResult,oSend);	//兼容其他浏览器
			}catch(e){alert(CREATEDOMDOCERROR); return false;}
			try{
				Strreturn = selectSingleNodeValue(xmlResult,"html/title");
				switch(Strreturn){
				case "return format":		//格式化存储设备命令提交返回
					var percent 	= selectSingleNodeValue(xmlResult,"html/body/percent");
					if(!isBlank(percent)&&isNum(percent)){
						if(percent<100){
							window.clearTimeout(getPercent);
							getPercent = setTimeout("FunPercentEx('/webs/btnPercentEx',3001,0,'&percent="+percent+"')",1000);
						}
						UpdatePer(percent, 3001, HTMLFORMATALERT);
					}else{UpdatePer(101, 3001, HTMLFORMATALERT);}					
					break;
				case "return check":		//检查存储设备命令提交返回
					var percent 	= selectSingleNodeValue(xmlResult,"html/body/percent");
					if(!isBlank(percent)&&isNum(percent)){
						if(percent<100){
							window.clearTimeout(getPercent);
							getPercent = setTimeout("FunPercentEx('/webs/btnPercentEx',3002,0,'&percent="+percent+"')",1000);
						}
						UpdatePer(percent, 3002, HTMLCHECKALERT);
					}else{UpdatePer(101, 3002, HTMLCHECKALERT);}					
					break;
				default: break;
				}
			}catch(e){
				window.status = RETURNXMLERROR;
			}
		}else if(oSend.status == 404){
			if(3001==returnflag||3002==returnflag){
				alert(HTMLCOMPLETEALERT);
				UpdatePer(101, 3001, HTMLCOMPLETEOK);
			}
			return false;
		}
   }
}	

//高清高速球控制
//球机控制
function btnsettinghsEx(paramflag,paramcmd,paramctrl,paramtitle){
  try{
	window.status = "";
	nwindow = 0;
	var strurl = "/webs/btnSettingEx";
	var xmlText 	= "<Message><flag>"+paramflag+"</flag>";
	xmlText 		= xmlText + "<paramchannel>"+ nwindow +"</paramchannel>";
	xmlText 		= xmlText + "<paramcmd>"+ paramcmd +"</paramcmd>";
	xmlText 		= xmlText + "<paramctrl>"+ paramctrl +"</paramctrl>";
	xmlText 		= xmlText + "<paramtitle>"+ paramtitle +"</paramtitle>";
	xmlText			= xmlText + "</Message>";
	CreateAjax();
	if(!oSend){
		window.status = CREATEXMLHTTPERROR; return false;
	}
	strurl	= strurl + "?flag=" + paramflag + "&paramchannel="+ nwindow +"&paramcmd="+ paramcmd +"&paramctrl="+ paramctrl +"&paramtitle="+ paramtitle +"";
	oSend.onreadystatechange = function (){alertLensSetting(paramcmd);}
	oSend.open("POST",strurl,true);
	oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
	oSend.send(xmlText);
 }catch(e){
	window.status = SENDXMLHTTPERROR; return false;
  }
}
function alertLensSetting(paramcmd){
   if (oSend.readyState == 4) {
        if (oSend.status == 200){
			var Strreturn,tmpflag,tmpcmd;
			try{
				LoadXMLDocument(xmlResult,oSend);	//兼容其他浏览器
			}catch(e){
				window.status = CREATEDOMDOCERROR; return false;
			}
			try{
				Strreturn = selectSingleNodeValue(xmlResult,"html/title").toLowerCase();
				tmpflag	= parseInt(Strreturn);
				switch(tmpflag){
				case 5000:	
					Strreturn = selectSingleNodeValue(xmlResult,"html/body/cmd");
					window.status = "cmd:" + Strreturn;

//window.status = "cmd:" + tmpcmd;
					break;
				case 6000:
					Strreturn = selectSingleNodeValue(xmlResult,"html/body/cmd");
					tmpcmd	= parseInt(Strreturn);
					if(tmpcmd==6104){
						try{
							var tmpctrl,tmpreserved;
							tmpctrl 	= selectSingleNodeValue(xmlResult,"html/body/ctrl");
							tmpreserved = selectSingleNodeValue(xmlResult,"html/body/reserved");
							$("presetstatus").value	= tmpctrl;
							$("presettitle").value	= tmpreserved;
						}catch(e){
							window.status = RETURNXMLERROR;
						}
					}
					window.status = "cmd:" + Strreturn;
				break;
				 default:
					window.status = "T:" + Strreturn;
					break;
				}
				
			}catch(e){
				window.status = RETURNXMLERROR;
			}
			return false;
		}else if(oSend.status == 404){
			window.status = URLERROR; return false;
		}
   }
}

//搜索日志
function funSearchLog(pflag,pPageNo,pPageSize,pBeginTime,pEndTime,pSelType,pSearchType,purl){
  try{
	window.status = "";
	var nRanstr	= ranString(8);
	var neworold = 0;
	
	if(!window.ActiveXObject){
		neworold = 1;
	}
	
	UserId	= getCookies("SearchUserId");
	if(UserId==null||UserId.length!=8){
		var Ldate=new Date(), expireDays=7;
		UserId	= ranString(8);
		Ldate.setTime(Ldate.getTime()+expireDays*24*3600*1000);
		document.cookie="SearchUserId=" + UserId + "; expires="+Ldate.toGMTString();
		delete Ldate; Ldate = null;
	}
	tmppflag = pflag; tmpphotoNum = pPageSize;
	
	$("popupLoad").style.visibility='visible';
	$("btnSearchLog").title = ALERTSEARCHSTOP;
	$("btnSearchLog").value = ALERTSTOP;
	$("searchFlag").value = tmppflag + 1;
	
	oSend = false;
	var xmlText 	= "<Message><flag>"+pflag+"</flag>";
	xmlText 		= xmlText + "<PageNo>"+ pPageNo +"</PageNo>";
	xmlText 		= xmlText + "<PageSize>"+ pPageSize +"</PageSize>";
	xmlText 		= xmlText + "<BeginTime>"+ pBeginTime +"</BeginTime>";
	xmlText 		= xmlText + "<EndTime>"+ pEndTime +"</EndTime>";
	xmlText 		= xmlText + "<SelType>"+ pSelType +"</SelType>";
	xmlText 		= xmlText + "<SearchType>"+ pSearchType +"</SearchType>";
	xmlText 		= xmlText + "<FileName>"+neworold+"</FileName>";
	xmlText 		= xmlText + "<UserName>"+ pageUNAME +"</UserName>";
	xmlText 		= xmlText + "<UserPass>"+ pagePASSWORD +"</UserPass>";
	xmlText 		= xmlText + "<UserId>"+ UserId +"</UserId>";
	xmlText			= xmlText + "</Message>";
	
	CreateAjax();
	if(!oSend){window.status = CREATEXMLHTTPERROR; return false;}
	var strurl	= purl + "?flag="+pflag+"&PageNo="+pPageNo+"&PageSize="+pPageSize+"&BeginTime="+pBeginTime+"&EndTime="+pEndTime+"&SelType="+pSelType+"&SearchType="+pSearchType+"&FileName="+neworold+"&UserName="+pageUNAME+"&UserPass="+pagePASSWORD+"&UserId="+UserId+"&RanId="+nRanstr+"";
	
	searchparam[0]	= pflag;
	searchparam[1]	= pPageNo;
	searchparam[2]	= pPageSize;
	searchparam[3]	= pBeginTime;
	searchparam[4]	= pEndTime;
	searchparam[5]	= pSelType;
	searchparam[6]	= pSearchType;
	searchparam[7]	= purl;
		
	//strurl = URLEncoding(strurl);
	oSend.onreadystatechange = function (){alertSearchLog(pflag);}
		
	oSend.open("get", strurl, true);
	oSend.setRequestHeader("CONTENT-TYPE", "text/xml")
	oSend.setRequestHeader("CONTENT-TYPE","gb2312");
	oSend.send(xmlText);
 }catch(e){
		$("popupLoad").style.visibility='hidden';
		$("btnSearchLog").title = ALERTSEARCHSTART;
		$("btnSearchLog").value = ALERTSEARCH;
		$("searchFlag").value = tmppflag;
	alert(SENDXMLHTTPERROR);
	return false;
  }
}

function alertSearchLog(pflag) {
   if (oSend.readyState == 4) {
        if (oSend.status == 200){
			var TmpStrbody, Strreturn, TmpStrreturn;
			var i;
			if(pflag==1001){
				$("popupLoad").style.visibility='hidden';
				$("btnSearchLog").title = ALERTSEARCHSTART;
				$("btnSearchLog").value = ALERTSEARCH;
				$("searchFlag").value = 1000;
				return false;
			}
			//try{
				       //LoadXMLDocument(xmlResult,oSend);	//兼容其他浏览器
			    //xmlResult	= createDocumentIE();
				//xmlResult.async				= false;
				//xmlResult.resolveExternals	= false;
				//TmpStrreturn = bytes2BSTR(oSend.responseBody);
				//xmlResult.loadXML(TmpStrreturn);
			//}catch(e){
				//alert(CREATEDOMDOCERROR);
				//$("popupLoad").style.visibility='hidden';
				//$("btnSearchLog").title = ALERTSEARCHSTART;
				//$("btnSearchLog").value = ALERTSEARCH;
				//$("searchFlag").value = tmppflag;
				//return false;
			//}
			try{
				var request;
				if (window.ActiveXObject) {
					//request = bytes2BSTR(oSend.responseBody);
request = oSend.responseText;
				}else{
					request = oSend.responseText;
				}
				Strreturn = getnodebyelementpath(request,"html/title").toLowerCase();
				switch(Strreturn){
				case "search failure":		//搜索失败返回
					alert(ALERTSEARCHERROR);
					$("popupLoad").style.visibility='hidden';					
				break;
				case "search succeed":		//搜索返回文件
					TmpStrbody = request.split("<body")[1].split(" >")[0];
					try{
						var photoSize	=  parseInt(TmpStrbody.split("FileNum='")[1].split("'")[0]);
						var pageSize 	=  parseInt(TmpStrbody.split("PageNum='")[1].split("'")[0]);
						var pageNum 	=  parseInt(TmpStrbody.split("PageNo='")[1].split("'")[0]);
						var count 		=  parseInt(TmpStrbody.split("Count='")[1].split("'")[0]);
						//alert(Strreturn+"-"+photoSize+"-"+pageSize+"-"+pageNum+"-"+count);
					}catch(e){
						var photoSize	=  0;
						var pageSize 	=  0;
						var pageNum 	=  0;
						var count 		=  0;
					}
					var Strpagination;
					Strpagination = "<div class='clspagination'><select style='width:62px;padding-top:3px;' name='pageturn' id='pageturn' onchange='funPagination(this.value)' >"+HTMLPAGEUNIT+"</select></div>";
					Strpagination = Strpagination + " <div class='clspagination2' style='padding-top:5px;'> GoTo:</div>"
					if(pageSize!=null&&pageSize>0){
						Strpagination = Strpagination + 
						"<div class='clspagination'> "+pageNum+"/"+pageSize+" "+HTMLPAGEUNIT+" "+photoSize+" "+HTMLPAGEITEM+" "+tmpphotoNum+" "+HTMLPAGEITEM+"/"+HTMLPAGEUNIT+" "+HTMLPAGECURRENT+":"+count+" "+HTMLPAGEITEM+"</div>";						
						if(pageSize>pageNum){
							Strpagination = Strpagination + 
							"<div style='cursor:pointer;' onclick='funPagination("+(pageSize)+")' class='clspagination'>"+HTMLPAGELAST+"</div><div style='cursor:pointer;' onclick='funPagination("+(pageNum+1)+")' class='clspagination'>"+HTMLPAGENEXT+"</div>";
						}else{
							Strpagination = Strpagination + 
							"<div  class='clspagination'>"+HTMLPAGENEXT+" "+HTMLPAGELAST+"</div> ";
						}
						if(pageNum>1){
							Strpagination = Strpagination + 
							"<div style='cursor:pointer;' onclick='funPagination("+(pageNum-1)+")' class='clspagination'>"+HTMLPAGEPREVIOUS+"</div><div style='cursor:pointer;' onclick='funPagination(1)' class='clspagination'>"+HTMLPAGEHOME+"</div>";
						}else{
							Strpagination = Strpagination + 
							"<div  class='clspagination'>"+HTMLPAGEHOME+" "+HTMLPAGEPREVIOUS+"</div>";
						}							
					}else{
						Strpagination = Strpagination +  "<div class='clspagination'>"+HTMLPAGEHOME+" "+HTMLPAGEPREVIOUS+" "+HTMLPAGENEXT+" "+HTMLPAGELAST+" 0/0"+HTMLPAGEUNIT+" "+HTMLPAGEITEM+" "+tmpphotoNum+" "+HTMLPAGEITEM+"/"+HTMLPAGEUNIT+" "+HTMLPAGECURRENT+":"+HTMLPAGEITEM+"</div>";
					}
					$("strpagination").innerHTML	= Strpagination;
					if(pageSize>0){
						$("pageturn").length=0
						for(i=1; i<=pageSize;i++){
							$("pageturn").options[i-1]	= new Option(i,i);
						}
						$("pageturn").options[pageNum-1].selected=true;
					}
					var table = $("strreturntable");
					var Rows	  = table.rows;			
					var tmpRowsi = Rows.length;	
					for(var i = 1; i < tmpRowsi; i++){ 
						table.deleteRow(1); 
					}
					
					if(count>0){		
					//sunchaoalarm
						var date 	= getselectnodes(request,"date");
						var time 	= getselectnodes(request,"time");
						var name 	= getselectnodes(request,"name");
						var info 	= getselectnodes(request,"info");		
						var url 	= getselectnodes(request,"url");
						var ispic 	= getselectnodes(request,"ispic");
						
						var a = url.length;
						for(i=0;i<a-1;i++){
							
						  	funPageShow("strreturnbody",date[i],time[i],getnamebyname(name[i]),info[i],url[i],ispic[i]);
						}
						var b = a*26 + 32; if(b<320){b=320;}
						$("laMain2").style.height = b + 'px';
					}
				break;
				default:		
				break;
				}
				$("popupLoad").style.visibility='hidden';
				$("btnSearchLog").title = ALERTSEARCHSTART;
				$("btnSearchLog").value = ALERTSEARCH;
				$("searchFlag").value = tmppflag;
			}catch(e){
				alert(RETURNXMLERROR);
				$("popupLoad").style.visibility='hidden';
				$("btnSearchLog").title = ALERTSEARCHSTART;
				$("btnSearchLog").value = ALERTSEARCH;
				$("searchFlag").value = tmppflag;
				return false;
			}
		}else if(oSend.status == 404){
			alert(URLERROR);
			$("popupLoad").style.visibility='hidden';
			$("btnSearchLog").title = ALERTSEARCHSTART;
			$("btnSearchLog").value = ALERTSEARCH;
			$("searchFlag").value = pflag -1;
			return false;
		}
   }
}

function getnamebyname(name)
{
	if(name.split(".")[0] == "No")
	{
		if(name.split(" ")[1] == "探头报警")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[1];
		}
		else if(name.split(" ")[1] == "探头报警消失")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[2];
		}
		else if(name.split(" ")[1] == "视频移动报警")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[3];
		}
		else if(name.split(" ")[1] == "视频移动报警消失")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[4];
		}
		else if(name.split(" ")[1] == "视频遮挡报警")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[5];
		}
		else if(name.split(" ")[1] == "视频遮挡报警消失")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[6];
		}
		else if(name.split(" ")[1] == "视频丢失报警")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[7];
		}
		else if(name.split(" ")[1] == "视频丢失报警消失")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[8];
		}
		else if(name.split(" ")[1] == "无线探头报警")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[9];
		}
		else if(name.split(" ")[1] == "无线探头报警消失")
		{
			return name.split(" ")[0] +" "+ ALLALARMDATA[10];
		}
		var aralmstype = "Sensor_Motion_Shelter_Video_RF".split("_");
		for( i = 0;i<5;i++)
		{
			if(name.split(" ")[1] == aralmstype[i])
			{
				if(name.split(" ")[name.split(" ").length-1] == "Finish")
					return name.split(" ")[0] +" "+ ALLALARMDATA[(i+1)*2];
				else
					return name.split(" ")[0] +" "+ ALLALARMDATA[(i+1)*2-1];
			}
		}
	}
	else
	{
		if(name == "网络故障报警" || name == "Net Err Alarm")
			return ALLALARMDATA[11];
		else if(name == "网络故障报警消失" || name == "Net Err Alarm Finish")
			return ALLALARMDATA[12];
		else if(name == "设备启动" || name == "Power On")
			return ALLALARMDATA[13];
		else if(name == "软件复位设备" || name == "Reset Camera By Software")
			return ALLALARMDATA[14];
		else if(name == "运行中硬件复位设备" || name == "Reset Camera By HardWare")
			return ALLALARMDATA[15];
		else if(name == "运行中通过云台硬件复位设备" || name == "Reset Camera By PTZ HardWare")
			return ALLALARMDATA[16];
		else if(name == "上电硬件复位设备" || name == "Reset Camera When PowerOn")
			return ALLALARMDATA[17];
		else if(name == "参数文件异常复位设备" || name == "Parameter File Error Auto Reset")
			return ALLALARMDATA[18];
		else if(name == "设备关机" || name == "Power off")
			return ALLALARMDATA[19];
		else if(name == "Venc 编码错误" || name == "Venc Error")
			return ALLALARMDATA[20];
		else if(name =="PIR")
			return ALLALARMDATA[21];
		else if(name =="PIRFinish")
			return ALLALARMDATA[22];
		
		else if(name == "亮度异常报警" || name == "Luma Abnormal Alarm")
			return ALLALARMDATA[31];
		else if(name == "亮度异常报警消失" || name == "Luma Abnormal Alarm Finish")
			return ALLALARMDATA[32];
		else if(name == "视频异常报警" || name == "Video Abnormal Alarm")
			return ALLALARMDATA[33];
		else if(name == "视频异常报警消失" || name == "Video Abnormal Alarm Finish")
			return ALLALARMDATA[34];
		else if(name == "越界报警" || name == "CrossLine Alarm")
			return ALLALARMDATA[35];
		else if(name == "越界报警消失" || name == "CrossLine Alarm Finish")
			return ALLALARMDATA[36];
		else if(name == "区域入侵报警" || name == "CrossArea Alarm")
			return ALLALARMDATA[37];
		else if(name == "区域入侵报警消失" || name == "CrossArea Alarm Finish")
			return ALLALARMDATA[38];
		else if(name == "颜色异常报警" || name == "Color Abnormal Alarm")
			return ALLALARMDATA[39];
		else if(name == "颜色异常报警消失" || name == "Color Abnormal Alarm Finish")
			return ALLALARMDATA[40];
		else if(name == "声音异常报警" || name == "Sound Abnormal Alarm")
			return ALLALARMDATA[41];
		else if(name == "声音异常报警消失" || name == "Sound Abnormal Alarm Finish")
			return ALLALARMDATA[42];
		else if(name == "遗留物体报警" || name == "LoseObj Alarm")
			return ALLALARMDATA[43];
		else if(name == "遗留物体报警消失" || name == "LoseObj Alarm Finish")
			return ALLALARMDATA[44];
		else if(name == "黑名单报警" || name == "BlackList Alarm")
			return ALLALARMDATA[45];
		else if(name == "白名单报警" || name == "WhiteList Alarm")
			return ALLALARMDATA[46];
        else if(name == "VIP名单报警" || name == "VipList Alarm")
            return ALLALARMDATA[47];
        else if(name == "非白名单报警" || name == "NonWhiteList Alarm")
            return ALLALARMDATA[48];
	}
	
}

function funPageShow(paramobj,pdate,ptime,pname,pinfo,purl,pispic){ //搜索文件返回显示
	var table = $("strreturntable");
	var Rows	  = table.rows;
	var tmpRowsi = Rows.length;
	var headerrow,tmp,tmp3,tmp4,tmpinput;
	if(purl!=""){
		switch(pispic){
		case 0:
			tmp	= "&nbsp;&nbsp;<a href='"+purl+"' target='_blank' title='("+HTMLRECORDTXT+")"+pname+"'>"+pname+"</a>";
			break;
		case 1:
			tmp	= "&nbsp;&nbsp;<a href='"+purl+"' target='_blank' title='("+HTMLPICTURETXT+")"+pname+"'>"+pname+"</a>";
			break;
		default :
			tmp	= pname;
			break;
		}
	}else{
		tmp		= pname;
	}
		tmp3	= "<div class='w320' title='"+pname+"' >" + tmp + "</div>";
		tmp4	= "<div class='w160' title='"+pinfo+"' >" + pinfo + "</div>";
		headerrow 		= table.insertRow(tmpRowsi);
		if(1100==tmppflag){
			tmpinput	= "<input type='checkbox' name='checkbox' id='checkbox' value='"+purl+"'>";
			tmp4		= "<div class='w160' title='"+pinfo+"' >" + pinfo + "</div>";
			cell0 		= headerrow.insertCell();
			cell0.align	= "center";
			cell0.innerHTML = tmpinput;
		}
		if("webkit" == getwebtype()){ //兼容谷歌的逆向填写
			//alert("1");
			cell1 			= headerrow.insertCell();
			cell1.align		= "center";
			cell1.innerHTML = tmp4;
			cell2 			= headerrow.insertCell();
			cell2.align		= "center";
			cell2.innerHTML = tmp3;
			cell3 			= headerrow.insertCell();
			cell3.align		= "left";
	//		cell3.title		= pname;
			cell3.innerHTML = ptime;
			cell4 			= headerrow.insertCell();
			cell4.align		= "left";
	//		cell4.title		= pinfo;
			cell4.innerHTML = pdate;
		}else{//火狐和IE 的数据填写
			//alert("2");
			cell1 			= headerrow.insertCell();
			cell1.align		= "center";
			cell1.innerHTML = pdate;
			cell2 			= headerrow.insertCell();
			cell2.align		= "center";
			cell2.innerHTML = ptime;
			cell3 			= headerrow.insertCell();
			cell3.align		= "left";
	//		cell3.title		= pname;
			cell3.innerHTML = tmp3;
			cell4 			= headerrow.insertCell();
			cell4.align		= "left";
	//		cell4.title		= pinfo;
			cell4.innerHTML = tmp4;
		}
		
}
function funPagination(parampageNum){
	funSearchLog(searchparam[0],parampageNum,searchparam[2],searchparam[3],searchparam[4],searchparam[5],searchparam[6],searchparam[7]);
}