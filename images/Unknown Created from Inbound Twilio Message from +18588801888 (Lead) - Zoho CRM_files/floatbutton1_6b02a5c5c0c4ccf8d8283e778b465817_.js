var $ZSIQChatWindow=$ZSIQChatWindow||function(){var I,l,a,d=0,s=document.documentElement.scrollTop||document.body.scrollTop,c={1:"siq_rht",2:"siq_rht",3:"siq_lft",4:"siq_lft",5:"siq_lft",6:"siq_lft",7:"siq_lft",8:"siq_rht",9:"siq_rht",10:"siq_rht",11:"siq_rht",12:"siq_rht"},g=function(e){I.className=I.className.replace(/(?:^|\s)siqhide(?!\S)/,"").replace(/(?:^|\s)siqanim(?!\S)/,""),e&&($ZSIQWidget.handleCallBacks({"chat.open":""}),I.className+=" siqanim",$ZSIQChatWindow.setLoadContentClass()),function(e){if($ZSIQWidgetUI.isHandHeldDevice()&&$ZSIQWidgetUI.isAppleDevice()){var t=document.body,i=document.documentElement;if(t.className=(t.className||"").replace(/(?:^|\s)zsiq_fixedlayout(?!\S)/,""),!e)return i.scrollTop=s,t.scrollTop=s;s=i.scrollTop||t.scrollTop,t.className+=" zsiq_fixedlayout"}}(e)},m=function(){I.style.top="-10000px",I.style.display="block"},n=function(e,t,i){void 0===a&&(a=0),clearTimeout(a),$ZSIQUtil.storeCookieVal(e,t,i),a=setTimeout(function(){n(e,t,i)},12e4)},o=function(){$ZSIQWidgetUI.addClass($ZSIQChatWindow.getChatWindowDiv(),"siq_showload"),$ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(),"zsiqfanim")};return{getChatWindowDiv:function(){return I},isTrackingOnly:function(){var e=$ZSIQChat.getWidgetData().widgetobj;return 1==e.istracking&&(0==e.islivechat||1==e.hideembed)},showIframeLoading:o,constructIframe:function(e,t){if($ZSIQCookie.get("isiframeenabled")&&!$ZSIQChatWindow.getChatWindowDiv()||!$ZSIQChatWindow.isTrackingOnly()||$ZSIQChat.isPreview()){var i,a,s,n,o=$ZSIQWidget.getEmbedObject(),r=!1;if(I&&!_WINDOW_REPOPULATE&&($ZSIQChat.isPreview()?r=!0:(I.remove(),_WINDOW_REPOPULATE=!1)),r||(I&&I.remove(),(I=document.createElement("DIV")).innerHTML='<div id="siqcht" class="zls-prelative" ><iframe id="siqiframe" title="SalesIQ Chatwindow" seamless="seamless" height="460" width="100%" scrolling="no"></iframe></div>',I.style.visibility="hidden"),I.className=function(){$ZSIQWidget.getWidgetObject();var e="";$ZSIQWidget.getWidgetObject().isshowcallbubble&&(e="theme5"===$ZSIQWidget.getWidgetObject().calltheme?" siq-calthemesign":"siq-caltheme");var t=$ZSIQWidgetUI.isCSSTransformSupported()?"zls-sptwndw "+e+" siqembed siqtrans siqhide ":"zls-sptwndw "+e+" siqembed ";t+=$ZSIQChat.isPreview()?"":"zsiq-mobhgt ",t+=$ZSIQChatWindow.isNewHeader()?"zsiq-newtheme ":"";var i=" zsiq_size"+$ZSIQWidget.getEmbedSize();return $ZSIQChat.isSignatureChat()?t+i:($ZSIQChat.isSeasonalTheme()&&(t+=" zsiqseasonal "),t+c[$ZSIQWidgetUI.getWidgetPosition()]+i)}(),I.setAttribute("embedtheme",o.theme),I.setAttribute("data-id","zsiqembed"),r)$ZSIQUtil.getIframe().$Support.init($ZSIQWidget.getEmbedObject());else if(i=$ZSIQChat.getWidgetData().embedobj.einfo.embedid,a=($ZSIQLSDB.get("ZLD"+i)||{}).ongoingchats||{},s=0!==Object.keys(a).length,$ZSIQLSDB.get("ZLDTRIGGER"+i)||$ZSIQLSDB.get("ZLD"+i+"WAITING")||s||$ZSIQChat.isPreview()||t||0==$zohosq.fileloadtime)$ZSIQChatWindow.populateIframe(t);else{var l=o.widget_performance_optimised?15e3:$zohosq.postloadtime||1e4;d=setTimeout(function(){$ZSIQChatWindow.populateIframe(t)},l)}!function(e){$ZSIQChat.getWidgetData().widgettype;var t=$ZSIQUtil.getAPIValues(),i=t.floatwindowvisible||t.chatwindowvisible;i?$ZSIQChatWindow.handleChatWindowVisible(i,e):$ZSIQWidgetUI.getWidgetState()!=$ZSIQWidgetUI.F_WINDOW?m():($ZSIQChatWindow.populateIframe(),g(!0))}(e),$ZSIQUtil.getIframe().$Support&&$ZSIQUtil.getIframe().$Support.Util.handleResize(),(n=$ZSIQUtil.getCookieValue("dragpos"))&&(n=JSON.parse(n),I.setAttribute("style","left:"+n.left+";top:"+n.top)),this.handleESCEvent()}},populateIframe:function(t,i){if(!document.getElementById("siqiframe")){!function(){var e=$ZSIQChat.getWidgetData();if(iscdnenabled&&!$ZSIQChat.isPreview()){var t=$zohosq.nonce,i={};i[SIQ_FLOAT]="/salesiq/styles/floatbuttonpostload_59bdcbddaf0583afd64194e8d6e0dcd8_.css",i[SIQ_BUTTON]="/salesiq/styles/buttonthemepostload_6c8709877a7092a17f79be8b9df43255_.css",i[SIQ_PERSONALIZE]="/salesiq/styles/personalizethemepostload_6c8709877a7092a17f79be8b9df43255_.css";var a=e.widgetobj,s=JSON.parse(a.sticker)[1].default,n=i[e.widgettype],o=a.cssstaticserver,r=a.csscdnstaticserver,l=o+n,d=n.split("WIDGTHEME"),c=d.join(s);l=void 0!==cssjslist[c]?r+(n="/salesiq"+d[0]+s+"_"+cssjslist[c]+"_"+d[1]):r+n;var I=document.createElement("link");I.rel="stylesheet",I.href=l;var g=document.getElementsByTagName("head");$ZSIQChat.notifyOnCDNFailure(I,g,(o+i[e.widgettype]).replace(/WIDGTHEME/g,s),"css"),t&&I.setAttribute("nonce",t),g[0].appendChild(I)}}(),clearTimeout(d),document.body.appendChild(I),(0==$zohosq.fileloadtime||i)&&o();var e=document.getElementById("siqiframe");e.onload=function(){$ZSIQWidgetUI.checkWidgetVisibility($ZSIQUtil.isChatExist());var e=$ZSIQUtil.getIframe().$Support;e.handleStatusCallback(),e.handleAudioCallback(),function(){if($ZSIQChat.getWidgetData().widgettype==SIQ_PERSONALIZE){var e=$ZSIQLSDB.get("ZLDPERSONALIZE");e&&$zoho.salesiq.chat.department($ZSIQWidgetUI.getUserDeptMapping()[e])}}(),t&&t(),I.className=I.className.replace(/(?:^|\s)siq_showload(?!\S)/,""),i&&i(),$ZSIQUtil.startOnLoad(),e.Util&&e.Util.loadExternalFiles()};var a=(e.contentWindow||e.contentDocument.document||e.contentDocument).document;a.open(),a.write($ZSIQChatWindow.getFiles()),a.close()}},handleIframeLoading:function(e){!$ZSIQChatWindow.getChatWindowDiv()&&$ZSIQChatWindow.isTrackingOnly()?($ZSIQCookie.set("isiframeenabled",!0,864e5,!0),$ZSIQChatWindow.constructIframe(!1,e)):e&&e()},handleESCEvent:function(e){var t=e?e.parent:window;(e=e||window).document.addEventListener("keydown",function(e){27==e.keyCode&&t.$ZSIQChatWindow.closeImagePreview(e,!0)})},RemoveLoadingForTrigger:function(){$ZSIQChatWindow.getChatWindowDiv()&&$ZSIQChatWindow.getChatWindowDiv().classList.remove("siq_showload"),delete $ZSIQUTSAction.widget_interaction,clearTimeout($ZSIQChatWindow.triggerloader)},openChatWindow:function(e,t){if(!e)try{$UTSHandler.updateAction({type:"1"})}catch(e){}I.hasAttribute("drag")||(I.style.top=""),$ZSIQWidgetUI.isCSSTransformSupported()?(g(!0),$ZSIQUTSAction.widget_interaction&&(o(),$ZSIQChatWindow.triggerloader=setTimeout(function(){$ZSIQChatWindow.RemoveLoadingForTrigger()},2e3))):I.style.display="block";var i=$ZSIQWidgetUI.getWidgetDiv();try{var a=$ZSIQWidgetUI.getMinWidgetDiv();$ZSIQWidgetUI.addClass(a,"zsiqfanim")}catch(e){$ZSIQWidgetUI.addClass(i,"zsiqfanim")}if($ZSIQWidget.handleCallBacks({"floatbutton.click":"","chatbutton.click":""}),$ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_WINDOW),$ZSIQUtil.getIframe().$Support){"true"==i.getAttribute("data-autochat")&&$ZSIQUtil.getIframe().$Support.handleAPIFunctionalities("chatstart");var s=$ZSIQUtil.getIframe().$Support;s.getUnreadCount()&&!s.isConversationUIFocussed()&&(s.removeUnreadCookie(),$ZSIQWidgetUI.removeUnreadCount()),$ZSIQUtil.getIframe().$UI&&!$ZSIQChat.isPreview()&&setTimeout(function(){$ZSIQUtil.getIframe().$UI.focusComposer()},500)}},forceOpenChatWindow:function(){$ZSIQUtil.getIframe().$Support.getParent().$ZSIQWidgetUI.removeCallClass(),$ZSIQUtil.getIframe().$Support.contentdiv=null,$ZSIQUtil.getIframe().$Support.EmbedObj.lchid=-1,$ZSIQUtil.getIframe().$Support.checkAndShowUI(-1),$ZSIQUtil.getIframe().CallImpl.isCallWithChat=!1,$ZSIQUtil.getIframe().$EmbedManger.setQuitStatus(!1)},expandChatWindow:function(){var e=$ZSIQChat.getWidgetData().widgettype;e!=SIQ_FLOAT&&e!=SIQ_PERSONALIZE||($ZSIQWidgetUI.getWidgetDiv().style.display="none");"-10000px"==I.style.top&&(I.style.top=""),$ZSIQWidgetUI.isCSSTransformSupported()?g(!0):I.style.display="block",$ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_WINDOW)},closeChatWindow:function(e){$ZSIQUtil.stopBlinking(),e||$ZSIQWidget.handleCallBacks({"chat.close":""}),g(),I.className=I.className.replace(/(?:^|\s)remtrans(?!\S)/,"");try{var t=$ZSIQUtil.getAPIValues(),i=$ZSIQUtil.getIframe().$Support,a=i.isChatExist()?i.getRecentLiveChatid():-1;if("hide"==t.floatvisible&&(t.customhtml||-1==a))return void $ZSIQWidgetUI.setWidgetState(-1!=a&&null!=a?$ZSIQWidgetUI.F_BUTTON:$ZSIQWidgetUI.F_STICKER)}catch(e){}var s=$ZSIQWidgetUI.getWidgetDiv();s.className=s.className.replace(/(?:^|\s)zsiqfanim(?!\S)/,"");var n=!1;try{if(a&&-1!=a){var o=$ZSIQWidgetUI.getMinWidgetDiv();o.className=o.className.replace(/(?:^|\s)zsiqfanim(?!\S)/,"")}n=$ZSIQWidgetUI.isStickerMinimized()}catch(e){}$ZSIQWidgetUI.setWidgetState(-1!=a&&null!=a||n?$ZSIQWidgetUI.F_BUTTON:$ZSIQWidgetUI.F_STICKER);var r=$ZSIQWidget.getWidgetObject();if($ZSIQChat.getWidgetData().widgettype==SIQ_FLOAT&&"8"==r.sticker[1].default){try{var l=$ZSIQUtil.getIframe().$Support.EmbedObj,d=$ZSIQUtil.getIframe().$Support.getCookieValue("ZLD"+l.livelsid)["attname_"+l.visitorID]}catch(e){}d&&(document.getElementById("zsiq_maintitle").innerText=d);var c=document.getElementById("zsiq_chatbtn");c&&(c.style.display=1==$ZSIQUtil.getCookieValue("state")?"none":"block")}$ZSIQWidgetUI.checkWidgetVisibility(a)},minimizeChatWindow:function(){if(!$ZSIQChat.isPreview()){if(!$ZSIQUtil.getIframe().$Support.isChatExist()){var e=document.getElementById("zsiq_maintitle");if(e){var t=$ZSIQWidget.getWidgetObject(),i=t.title[1].online?t.title[1].online:t.i18nkeys["float.online.maintitle"];t.status||(i=t.title[1].offline?t.title[1].offline:t.i18nkeys["float.offline.maintitle"]);var a=$ZSIQUtil.getAPIValues().buttontexts;a&&(t.status&&a[0]?i=a[0][0]||i:!t.status&&a[1]&&(i=a[1][0]||i)),e.innerHTML=i}}$ZSIQChat.getWidgetData().widgettype==SIQ_PERSONALIZE&&$ZSIQLSDB.remove("ZLDPERSONALIZE"),$ZSIQChatWindow.closeChatWindow(!0);var s=$ZSIQUtil.getIframe().$Support,n=(s.EmbedObj.chatID,s.getTriggerCookie());if(s.isChatExist()||n)$ZSIQWidgetUI.minimizeSticker();else{var o=$ZSIQWidget.getWidgetObject();if("1"==o.sticker[1].default){var r=document.getElementById("titlediv");$ZSIQUtil.containsClass(r,"zsiq_min")&&(r.className=r.className.replace(/(?:^|\s)zsiq_min(?!\S)/,""))}else if("2"==o.sticker[1].default){var l=document.getElementById("zsiq_float");$ZSIQUtil.containsClass(l,"zsiq_min")&&(l.className=l.className.replace(/(?:^|\s)zsiq_min(?!\S)/,""))}}$ZSIQWidget.handleCallBacks({"floatwindow.minimize":""}),$ZSIQUtil.getIframe().avUIhandler&&$ZSIQUtil.getIframe().avUIhandler.handleMinimizeState()}},handleChatWindowVisible:function(e,t,i,a){!0!==$ZSIQWidget.getWidgetObject().hideembed&&!0!==t?(e=e||$ZSIQUtil.getAPIValues().floatwindowvisible)&&("hide"!=e||$ZSIQWidgetUI.getWidgetState()!=$ZSIQWidgetUI.F_WINDOW&&!$ZSIQChat.isPreview()?"show"==e?($ZSIQChatWindow.openChatWindow(!1,a),i&&!$ZSIQUtil.getIframe().$Support.isChatExist()&&$ZSIQUtil.getIframe().$Support.openClassicUI()):!isNaN(e)&&0<e&&"block"!=I.style.display&&setTimeout($ZSIQChatWindow.openChatWindow,1e3*e):$ZSIQChatWindow.closeChatWindow(!0)):I.style.display="none"},handleDrag:function(e){var t=I,i=e.split("#"),a=l||(l={chtX:I.offsetWidth,chtY:I.offsetHeight}),s=a.chtX,n=a.chtY,o=window.innerWidth,r=window.innerHeight;return cx=t.offsetLeft-parseInt(i[0]),cy=t.offsetTop-parseInt(i[1]),cx=cx<0?0:cx,cy=cy<0?0:cy,cx=cx+s>o?o-s:cx,cy=cy+n>r?r-n:cy,t.style.left=cx+"px",t.style.top=cy+"px",t.style.right="auto",!(t.style.bottom="auto")},cacheChatDivPosition:function(){var e=I.style;""===e.left||$ZSIQWidgetUI.isHandHeldDevice()||(I.setAttribute("drag","true"),n("dragpos",'{"left":"'+e.left+'", "top":"'+e.top+'" }',!0))},isOfflineByEngaged:function(){for(var e=$ZSIQWidget.getEmbedObject().einfo.embedstatus.DEPTLIST,t=0;t<e.length;t++){var i=e[t];if(!i.STATUS&&i.ENGAGED)return!0}return!1},isNewHeader:function(){return-1!=[4,8,9,10].indexOf(parseInt($ZSIQWidget.getEmbedObject().theme))},getFiles:function(){var e,t=$ZSIQWidget.getEmbedObject(),i=$ZSIQWidget.getWidgetObject(),a=$ZSIQChat.getWidgetData().commondata,s="";($ZSIQChat.isPreview()||$ZSIQChat.isSignatureChat())&&(s="skipdrag");var n=a.schema+"://"+t.embedserverurl,o="",r="";try{window.parent.$ZSIQWidget?r="window.parent.$ZSIQUtil.onCDNFailure(this)":window.opener&&opener.$ZSIQWidget&&(r="window.opener.$ZSIQUtil.onCDNFailure(this)")}catch(e){r=""}i.cssstaticfile="/styles/embedtheme"+t.theme+".css",i.jsstaticfile="/js/siqchatwindow"+t.theme+".js";var l=i.resourcefile,d=!1;try{parent.WixPopUp&&(d=!0)}catch(e){}if(iscdnenabled&&(i.cssstaticfile="/salesiq/styles/embedtheme"+t.theme+"_"+cssjslist[i.cssstaticfile]+"_.css",i.jsstaticfile="/salesiq/js/siqchatwindow"+t.theme+"_"+cssjslist[i.jsstaticfile]+"_.js"),$ZSIQChatWindow.isNewHeader()){var c=t.jquery_version_updated;i.cssstaticfile="/salesiq/styles/newembedtheme_ec8add7acdc3e51352b2ce08fe85ba68_.css",i.jsstaticfile=c?"/salesiq/js/siqnewchatwindow1_0accc640fc4ff1c63dffb6130019a127_.js":"/salesiq/js/siqnewchatwindow_c597ded6db257f12272e9bca489124e6_.js"}if($ZSIQChat.isPreview()&&!d){var I=/(?:settings\/)(?:apps|brands|triggers)/.test(parent.window.location.href),g=t.ucomp?a.jscdnstaticserver+"/salesiq/js/chatwindowpreview_a1037a09740a429e4c59ed5bbe1c197a_.js":n+"/js/embed/new/chatwindow/chatwindowpreview.js",m=I?"":t.ucomp?i.csscdnstaticserver+"/salesiq/styles/chatwindowpreview_46eaf2430cc94e4578f095a688287005_.css":n+"/styles/embed/new/chatwindow/chatwindowpreview.css";o=I?"":'<link href="'+m+'" rel="stylesheet" type="text/css" />',o+='<script src="'+g+'"><\/script>'}if(t.ucomp){var S=$zohosq.nonce?'nonce ="'+$zohosq.nonce+'"':"",h=a.jscdnstaticserver+"/salesiq/js/embedmedia-rtc_2ff4bd1a75455d9911cbcbbf84b53062_.js";e='<html><head><link href="'+i.csscdnstaticserver+i.cssstaticfile+'" rel="stylesheet" '+S+' type="text/css" onerror="'+r+'" />',a.isrtlsupported&&(e+='<link href="'+i.csscdnstaticserver+'/salesiq/styles/embedrtl_d41d8cd98f00b204e9800998ecf8427e_.css" rel="stylesheet" '+S+' type="text/css" />'),e+='<script src="'+i.wmsjsstaticserver+'" '+S+' ><\/script><script src="'+a.jscdnstaticserver+i.jsstaticfile+'" '+S+' ><\/script><script src="'+l+'"  onerror="'+r+'" '+S+" ><\/script>"+o+"</head><body></body></html>",t.einfo.embedstatus.staticfiles_delayloading_enabled||(e+='<script src="'+h+'" '+S+" ><\/script>")}else{t.theme,t.theme,t.theme;$ZSIQChatWindow.isNewHeader()&&("themeui.js","themetemplate.js","theme.css","themecommon.css"),e=Filedatagetter.getIframeFileData({iframecls:s,preview_files:o})}try{var p=JSON.parse(t.einfo.props.iscustomcss);if(1==p[0]&&p[1].fpath){var f=p[1].fpath;if("undefined"!=typeof $ZSIQChat&&$ZSIQChat.getWidgetData().usedownloadserver){var u=f.split("/")[1],$=$ZSIQWidget.getEmbedObject().pinfo.soid,Q=p[1].fname?p[1].fname:p[1].pfname;Q=Q||"customcss.css";var Z={"x-siq-filetype":f.split("/")[0],"x-siq-lsid":u.split("_")[1],"x-siq-soid":$,"x-siq-ispreview":!1,"x-siq-pfname":Q};e+='<link href="'+UDHandler.getDownLoadLink(u,"default",Z)+'" rel="stylesheet" type="text/css" />'}else e+='<link href="'+n+"/"+t.screenname+"/"+f+'/stylesheet.ls" rel="stylesheet" type="text/css" />'}}catch(e){}return e},drawCustomHTML:function(){var e=$ZSIQUtil.getAPIValues().customhtml;if(e){var t=document.getElementById(e[0]);if(t){var i=$ZSIQWidget.getWidgetObject(),a=i.status?"online":"offline",s=e[1];s[a+".html"]&&(t.innerHTML=s[a+".html"]),$ZSIQUtil.bindClickEvent(t,function(){$zoho.ld.handle.customClick(a)},!0),i.hideembed&&(t.style.display="none")}}},closeImagePreview:function(e,t){if(e.target.getAttribute("zsiqclose")||t){var i=document.getElementById("zsiqimagepreview")||document.getElementById("datepicker_body");i&&i.parentNode.removeChild(i)}},startChat:function(e){if($ZSIQChatWindow.closeImagePreview(e,!0),$ZSIQUtil.getIframe().$Support){var t=e.target,i=t?t.getAttribute("proptype"):e;$ZSIQUtil.getIframe().$Support.Util.showMessageAreaUI(i),$ZSIQUtil.getIframe().$("#conv-tab").addClass("sel"),$ZSIQUtil.getIframe().$("#faqtab").removeClass("sel")}},updateVote:function(e,t){var i=document.getElementById("zsiqfaqpreview");if(i){var a=i.getAttribute("articleid");$ZSIQUtil.storeCookieVal("Article_"+a,!0,!1)}$ZSIQUtil.getIframe().$FAQ&&$ZSIQUtil.getIframe().$FAQ.updateVote(e,t)},toggleTocChildView:function(e){var t=e.parentElement&&e.parentElement.parentElement;t&&t.classList&&t.classList.toggle&&t.classList.toggle("zsiq-arrow-open");for(var i=t&&t.querySelectorAll('[data-id="tocchild"]'),a=i&&i.length,s=0;s<a;s++){var n=i[s];n&&n.classList&&n.classList.toggle&&n.classList.toggle("zsiq-hide")}},toggleTocContainer:function(){var e=document.getElementById("zsiqimagepreview");(e=e&&e.querySelector('[data-id="toccontainer"]'))&&e.classList&&e.classList.toggle&&e.classList.toggle("zsiq-toc-open")},articleScrollToView:function(e){var t=e.getAttribute("data-id"),i=document.getElementById("zsiqimagepreview");(i=i&&i.querySelector('[id="'+t+'"]'))&&i.scrollIntoView&&i.scrollIntoView()},isChatExist:function(){try{var e=$ZSIQUtil.getIframe().$Support;if(e&&(e.getTriggerCookie()||e.isChatExist()))return!0}catch(e){}return!1},clearIframeLoader:function(){clearTimeout(d)},getIframeLoader:function(){return d},setLoadContentClass:function(){try{var e=$ZSIQUtil.getIframe().$Support,t=e.container[0].parentNode;-1!=t.className.indexOf("loadframe")||!$ZSIQChat.isPreview()&&-1==I.className.indexOf("siqanim")||(t.className+=" loadframe",e.handlePostLoadScript(),e.enableHeaderImage())}catch(e){}}}}();function zsiqdrag(e){var o=0,r=0,l=this,d=!1;function c(e){var t=getComputedStyle(l),i=parseInt(t.getPropertyValue("left"))||0,a=parseInt(t.getPropertyValue("top"))||0;if(i<0||a<0)return i<0&&(l.style.left="0px"),a<0&&(l.style.top="0px"),d=!1,void window.removeEventListener("mousemove",c);var s=parseInt(t.getPropertyValue("right"))||0,n=parseInt(t.getPropertyValue("bottom"))||0;if(s<0||n<0)return s<0&&(l.style.left=i+s+"px"),n<0&&(l.style.top=a+n+"px"),d=!1,void window.removeEventListener("mousemove",c);l.style.left=e.pageX-o+"px",l.style.top=e.pageY-r+"px"}this.addEventListener("mousedown",function(e){d=!0;var t=getComputedStyle(l),i=parseInt(t.getPropertyValue("left"))||0,a=parseInt(t.getPropertyValue("top"))||0;o=e.pageX-i,r=e.pageY-a,window.addEventListener("mousemove",c)}),this.addEventListener("mouseup",function(e){!0===d&&(d=!1,window.removeEventListener("mousemove",c))})}Element.prototype.zsiqdrag=zsiqdrag;var $ZSIQTemplate={getFontFamily:function(){return' style="font-family:inherit"'},getGravatar:function(t){return t.gravatar[0]==$ZSIQUtil.STATUS_ENABLE&&t.gravatar[1]&&t.gravatar[1].fpath?$ZSIQUtil.getImageURL(t,t.gravatar[1]):""},lightenDarkenColor:function(t,r){var e=parseInt(t.slice(1),16),a=Math.round(2.55*r),n=(e>>16)+a,i=(e>>8&255)+a,o=(255&e)+a;return"#"+(16777216+65536*(n<255?n<1?0:n:255)+256*(i<255?i<1?0:i:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},getCustomColor:function(t){return $zv.embedtheme||$ZSIQWidget.getWidgetObject().color[1].code}};$ZSIQTemplate.theme1={getFloatStickerHTML:function(c){var s=$ZSIQTemplate.getGravatar(c),t=!0===c.status?"":"zsiq_off",a=c.i18nkeys&&c.i18nkeys["gravatar.alt.text"]||"",l=$ZSIQChat.isSeasonalTheme();return l&&$ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(),"zsiq_seasonal"),'<div id="zsiq_float" class="zsiq_float '+t+'"'+$ZSIQTemplate.getFontFamily()+'><div class="zsiq_flt_rel"><em id="zsiq_agtpic" class="zsiq_user '+(s?"":"siqico-chat")+'">'+(s?'<img src="'+s+'" alt="'+a+'" />':"")+"</em>"+(l?'<em class="santacap"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 331.9 209.8" style="enable-background:new 0 0 331.9 209.8;" xml:space="preserve"><path class="st0" d="M330.9,145.6c-0.4,0.2-0.8,0.3-1.2,0.3l-11.3,0.2l-5.9,9.6c-0.5,0.9-1.5,1.3-2.5,1.2c-1-0.1-1.9-0.8-2.2-1.8l-4-10.9l-11-3.1c-1-0.3-1.7-1.1-2-2.1c-0.2-1,0.1-2,0.9-2.7l8.8-6.9l-0.9-11.5c-0.1-1,0.4-2,1.3-2.5l0,0c0.9-0.5,1.9-0.4,2.8,0.2l9.5,6.6l10.5-4c0.9-0.4,2-0.1,2.8,0.6s1.1,1.8,0.8,2.8l-2.9,11l7.3,9c0.6,0.8,0.8,1.9,0.4,2.8C331.7,144.9,331.3,145.3,330.9,145.6z"/><path class="st1" d="M260.7,66.3c0,0-7,2.9-12.3,13.5c-3.6,7.3-7.9,18.4-4.6,26.7c3.6,9,10.9,24.5,36.8,25.4c22.9,0.7,40.2-25.1,40.6-34.8c0.4-9.6-4.5-21.2-8.8-26.2c-5.8-6.8-6.1-10-12.9-11.4c-9.7-1.9-19.6-2.4-28.7,1.7C267,63,263,64.9,260.7,66.3z"/><g><path class="st2" d="M305,61.9c15.7,57.1-54,57.8-52.7,59c31.1,30,64.2-6.7,64.1-6.7C332.9,89.2,305,61.9,305,61.9z"/><path class="st2" d="M216.9,52.9c10.1,0.3,24.1,18.1,32.9,24.4c5.1-8.6,10.9-11,10.9-11c2.3-1.4,6.3-3.3,10.1-5.1c0.9-0.4,1.9-0.8,2.8-1.1c0.4-1.6,0.9-3.2,1.3-5C287.8,4.7,204.7-1.1,172.4,0.4c-32.3,1.4-84.5,49.9-97.6,58.5c-13.1,8.6-20.3,28.4-28.2,43.6c-8,15.2-6.9,22.6-20.4,37.4c-8.7,9.6-19,27-25.2,38.1c-2.7,4.9,0.4,11,6,11.6c48.3,5.4,217.2,24.2,216.4,19.5c-0.7-5.2-3.4-6.5-3-12.1c0.5-5.6,0.4-11.8-6.6-23.6s-2.7-16-2.1-31.2c0.6-15.2-6-10.1-10.5-17.2c-4.6-7.1,5.7-8.6,7.7-19.7c2-11.1,1.3-24.7-1.5-31.7S205.1,52.6,216.9,52.9z"/></g><g class="st3"><path class="st4" d="M271.8,30c-9.2-13.5-18.6-15.5-24.8-18.5c-6.2-3-22.4-8.1-27.5-8.5c-5.1-0.4-24.8-1.9-28-2.1s-2.3,5.6,2.1,6.5c4.4,1,44.9,6.6,53.3,13c8.5,6.4,17.5,13.5,20.1,21.4c2.6,7.8,3.4,22.5,4.8,21.4C271.8,63.2,281,43.5,271.8,30z"/><path class="st4" d="M51.2,114.2c3.8-7.4,14.4-20.7,16-25c1.6-4.4,8.7-13.4,12.9-18.2s12.5-13.7,20.2-22.1c7.7-8.4,14.5-14.2,23.1-17.4c8.5-3.2,6.3-7.8-0.1-7.7c-6.4,0.1-22.2,15.5-26.4,19.7S82.3,58.4,74.3,62.9s-9.6,15.9-13.9,22.6C56,92.2,42.5,118.6,40,126.1c-2.5,7.4-10.6,13.2-10.6,13.2C32.6,139.6,47.4,121.5,51.2,114.2z"/><path class="st4" d="M202.8,188.6c-2.4-2.3,14.8,6.9,3.4-2.9c-0.3-0.3-0.7-0.5-1.1-0.8c0.8,0.1,12.7,1,10.9-4.6c-2-6.2-12.1-12.8-11.7-20.4c0.4-7.6,6.2-20.1,0.1-25.5c-6.1-5.4-9.3-4.3-9.6-10.7s6.9-9.8,8.3-13c1.4-3.1,3.2-24.7,1.1-36.4c-1.2-6.5-2.1-9.1-5-10.4c-5-2.2-10.8-1.2-13.5,1.2c-2.7,2.4-33.1,10.4-44.4,7.9c-11.4-2.5-5-8.4-8.7-10.5c-3.7-2.1-23.2,22.9-15,24.6s29.2,2.8,40.4,9.1c5.4,3,9.3,7.5,11.9,12.6c-6.1-0.5-13.5-1-22.7-1.8c-14-1.1-16.8-5.8-26.2-8.4c-9.4-2.6-23.8-6.3-27.1-5.3c-11.2,3.5,23.7,16.5,45.9,18.2c20.8,1.6,25.4,2,32.2,2.5c1.3,4,1.8,8.3,1.6,12.4c-0.6,11.5,4.1,18.7,7.4,29.7c3.2,11,3.6,16.8,2.8,19.9c-0.1,1.9,1.3,3.3,3.9,4.6c-6.7-0.8-14.3-1.2-22-1.4c0.1-3.5-0.4-12.5-8.8-19.3c-4.6-3.7-9.8-6.6-15-9c-0.3-1.4-1.4-4-4.3-6.5c-4.2-3.5-15.1-3.7-24.6-4.4c-9.5-0.8-22.8-1.8-35.5-3.4C64.9,135,33,142.1,33,142.1c-5.7,0.2-9,8.9-3,6.3c0,0,0,0,0,0c0.5,5.1,25.1,15.2,38.1,20.1c10.5,3.9,33.5,4.6,57.6,11.3c-1.3,0.1-2.1,0.1-2.1,0.1c1.4,0.1,2.9,0.3,4.6,0.6c4.9,1.4,9.8,3.1,14.6,5.2c8.6,3.6,14.1,4.9,17.7,4.7c23.9,8.7,49.4,18.9,55.7,14.5C226.4,197.8,205.2,190.9,202.8,188.6z M49.1,144.5c5.1-0.4,11.8-2.2,18-2.9C61.9,142.5,57.2,144.4,49.1,144.5z"/></g><g><path class="st5" d="M220.5,197c0.5-5.6,0.4-11.8-6.6-23.6c-7-11.8-2.7-16-2.1-31.2c0.6-15.2-6-10.1-10.5-17.2c-4.6-7.1,5.7-8.6,7.7-19.7c2-11.1,1.3-24.7-1.5-31.7s-2.3-21,9.5-20.7s29.1,24.8,36.9,26.5c7.8,1.8,8.2,26.1,21.1-24.3C287.9,4.7,204.8-1.1,172.5,0.4C140.2,1.8,88,50.3,74.9,58.9c-13.1,8.6-20.3,28.4-28.2,43.6c-8,15.2-6.9,22.6-20.4,37.4c-8.8,9.6-19.2,27.3-25.4,38.4c-2.7,4.8,0.4,10.7,5.8,11.3c47.9,5.3,217.5,24.2,216.8,19.5C222.8,203.9,220.1,202.6,220.5,197z"/><path class="st5" d="M305,61.9c15.7,57.1-54,57.8-52.7,59c31.1,30,64.2-6.7,64.1-6.7C332.9,89.2,305,61.9,305,61.9z"/></g></svg><em class="santacapbg"></em></em>':"")+'<div id="titlediv" class="zsiq_cnt"><div id="zsiq_maintitle" class="zsiq_ellips" title="{MAINTITLE}">{MAINTITLE}</div><p id="zsiq_byline" class="zsiq_ellips" title="{BYLINETEXT}">{BYLINETEXT}</p><em class="siqico-close"></em></div><em id="zsiq_unreadcnt" class="zsiq_unrdcnt" style="display: none;"></em><em id="zsiq_avcall" class="zsiqmin_unrdcnt zsiq_unrdcnt siqico-mincall" style="display: none;"></em></div></div>'},getCustomCSS:function(c){var s=$ZSIQTemplate.getCustomColor();return".zsiq_flt_rel{ background-color:"+s+" !important;} .zsiq_seasonal .st2 { fill: "+s+" !important;}"}};var $ZSIQWidgetUI=$ZSIQWidgetUI||function(){var I,t,g,n,r,m={1:"siq_bR",2:"siq_bM",3:"siq_bL",4:"siq_bL",5:"siq_lM",6:"siq_tL",7:"siq_tL",8:"siq_tM",9:"siq_tR",10:"siq_tR",11:"siq_rM",12:"siq_bR"},i={bottomright:"1",bottomleft:"3",topleft:"6",topright:"9",left:"5",right:"11"},u=["1","2","3","4","5","6","7","9","10"],a=function(e){var t=$ZSIQUtil.getAPIValues(),i=$ZSIQWidget.getWidgetObject(),n=!0===i.status?"online":"offline",a=("maintitle"==e?i.title[1][n]:i.title[1][n+"_byline"])||i.i18nkeys["float."+n+"."+e],l="maintitle"==e?0:1,s=t.buttontexts;return s&&(i.status&&s[0]?a=s[0][l]||a:!i.status&&s[1]&&(a=s[1][l]||a)),$ZSIQUtil.getEncodedText(a)},S=function(e){return e=(e=e.replace(/{MAINTITLE}/g,a("maintitle"))).replace(/{BYLINETEXT}/g,a("byline"))},f=function(e){return e.sticker[0]==$ZSIQUtil.STATUS_ENABLE?"zsiq_floatmain zsiq_theme"+e.sticker[1].default+" ":"zsiq_custommain "},c=function(e,t){var i="",n="",a=e.i18nkeys&&e.i18nkeys["customsticker.alt.text"]||"";"offline"==t&&$ZSIQUtil.isEmpty(e.sticker[1][t])?(i=e.sticker[1].online,n="grayscl"):i=e.sticker[1][t];var l='<div id="zsiq_float"><img onload="$ZSIQWidgetUI.onLoadCustomSticker(this)" src="'+$ZSIQUtil.getImageURL(e,i)+'" class="'+n+'" alt="'+a+'" height="400" width="400"/><em id="zsiq_unreadcnt" class="zsiq_unrdcnt" style="display: none;"></em><em id="zsiq_avcall" class="zsiqmin_unrdcnt zsiq_unrdcnt siqico-mincall" style="display: none;"></em></div>';return g.style.display="none",l};return{F_STICKER:"0",F_BUTTON:"1",F_WINDOW:"2",getWidgetDiv:function(){return g},getWidgetState:function(){return n},initWidgetState:function(){t=$ZSIQUtil.isCSSTransformSupport();var e=$ZSIQUtil.getCookieValue("state");$ZSIQWidgetUI.F_WINDOW==e&&"hide"==$zohosq.values.floatwindowvisible&&($ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_BUTTON),e=$ZSIQWidgetUI.F_BUTTON),n=e||$ZSIQWidgetUI.F_STICKER},isCSSTransformSupported:function(){return t},drawWidget:function(){var e=$ZSIQWidget.getWidgetObject(),t=$ZSIQWidget.getEmbedObject(),i=m[$ZSIQWidgetUI.getWidgetPosition()],n=!!g;if(n||(g=document.createElement("DIV")),g.className=f(e)+i,g.innerHTML=S(function(e){if(e.sticker[0]!=$ZSIQUtil.STATUS_DISABLE)return g.style.height="",g.style.width="",I=$ZSIQTemplate["theme"+e.sticker[1].default],e.clogo_src=$ZSIQUtil.getCompanyLogo(e.clogo_src),I.getFloatStickerHTML(e);var t=e.status?"online":"offline";return e.sticker[1]&&e.sticker[1].online?c(e,t):'<div id="zsiq_float" class="zsiq_float zsiq_empty"><div class="zsiq_flt_rel"></div></div>'}(e)),g.setAttribute&&g.setAttribute("data-id","zsalesiq"),n||(g.style.visibility="hidden",document.body.appendChild(g)),!$ZSIQChat.isPreview()){var a=t.pinfo.pinfo,l=document.getElementById("gdprbanner");if(null!=l&&l.remove(),1==JSON.parse(a.isgdprenabled)&&0!=JSON.parse(a.trackingprivacyconfig)&&1==e.isgdprenabled&&!$ZSIQUtil.checkGDPRBannerStatus(0,null,t)){(r=document.createElement("DIV")).innerHTML=$ZSIQUtil.getGDPRBanner(e,a);var s=r.querySelector("#gdprbannerurl");if(s){var d=-1==a.cookiepolicyurl.indexOf("http")?"http://"+a.cookiepolicyurl:a.cookiepolicyurl;s.setAttribute("href",d)}document.body.appendChild(r),$ZSIQUtil.bindEventsCookieBanner()}}if(e.onlysticker)try{var o=$ZSIQWidgetUI.getMinWidgetDiv();$ZSIQWidgetUI.addClass(o,"zsiqfanim")}catch(e){$ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(),"zsiqfanim")}else $ZSIQWidgetUI.checkWidgetVisibility(),$ZSIQWidgetUI.bindCustomCSS(e),$ZSIQUtil.bindClickEvent(g,$ZSIQWidgetUI.handleFloatEvents),n||$ZSIQUtil.bindClickEvent(document,$ZSIQUtil.stopBlinking),$ZSIQChatWindow.constructIframe(),$ZSIQWidget.handleAPIValues(),$ZSIQChatWindow.drawCustomHTML(),$ZSIQUtil.bindFocusEvent(window,$ZSIQWidgetUI.updateCountUI),$ZSIQUtil.bindResizeEvent($ZSIQWidgetUI.handleResizeEvents)},minimizeSticker:function(e,t){if(!$ZSIQChat.isPreview()){var i=$ZSIQWidget.getWidgetObject();try{var n=$ZSIQUtil.getIframe().$Support.EmbedObj,a=$ZSIQUtil.getIframe().$Support.getCookieValue("ZLD"+n.livelsid)["attname_"+n.visitorID];if($ZSIQUtil.getIframe().$Support.getTriggerCookie()){var l=$ZSIQUtil.getIframe().$Support.getTriggerCookie();l&&(a=l.sendername)}}catch(e){}var s=i.sticker[1].default;if(i.sticker[0]!=$ZSIQUtil.STATUS_DISABLE&&(d=s,-1<u.indexOf(""+d))){var d;if("1"==s){var o=document.getElementById("titlediv");if(a&&$ZSIQUtil.containsClass(o,"zsiq_min"))return void(document.getElementById("zsiq_maintitle").innerText=a);o.className=o.className+" zsiq_min"}else{var r=document.getElementById("zsiq_float");if(a&&$ZSIQUtil.containsClass(r,"zsiq_min"))return void(document.getElementById("zsiq_maintitle").innerText=a);g.innerHTML=S(I.getFloatButtonHTML($ZSIQWidget.getWidgetObject())),g.className=f(i)+m[$ZSIQWidgetUI.getWidgetPosition()],$ZSIQUtil.bindClickEvent(g,$ZSIQChatWindow.openChatWindow),e&&$ZSIQWidgetUI.addClass(g,"zsiqfanim"),function(){var e=$ZSIQWidgetUI.getWidgetPosition();if(5==e||11==e){var t=document.getElementById("zsiq_float"),i=-(t.offsetWidth-t.offsetHeight)/2+"px";$ZSIQWidgetUI.addClass(g,"zsiq_rotate90"),5!=e?g.style.right=i:g.style.left=i}}()}var c=document.getElementById("zsiq_float");c&&(c.parentElement.style.height=$ZSIQUtil.getElementHeight(c)+"px",c.parentElement.className+=" siq_noanim"),t||$ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_BUTTON)}}},isStickerMinimized:function(){if("1"!=$ZSIQWidget.getWidgetObject().sticker[1].default)return $ZSIQUtil.containsClass(document.getElementById("zsiq_float"),"zsiq_min");var e=document.getElementById("titlediv");return $ZSIQUtil.containsClass(e,"zsiq_min")},handleWidgetVisible:function(e,t){try{if(e)if("hide"!=e||t&&-1!=t){if("show"==e){var i=$ZSIQChatWindow.getChatWindowDiv();i&&("block"!==i.style.display||i.style.top.replace("px","")<0||-1==i.className.indexOf("siqanim"))&&(g.style.display="block",g.className=g.className.replace(/(?:^|\s)zsiqfanim(?!\S)/,""))}else if(!isNaN(e)&&0<e){if(-1==e)return;g.style.display="none",setTimeout(function(){g.style.display="block"},1e3*e),$zohosq.values.floatvisible=-1}}else g.style.display="none"}catch(e){}},updateCallUI:function(e){document.getElementById("zsiq_avcall")&&(document.getElementById("zsiq_avcall").style.display="")},removeCallUI:function(e){document.getElementById("zsiq_avcall")&&(document.getElementById("zsiq_avcall").style.display="none")},updateIncomingCallUI:function(){document.getElementById("zsiq_avcall")&&(document.getElementById("zsiq_avcall").className+=" cal-anim")},handleMinimizeCall:function(){this.removeCallClass(),$ZSIQChatWindow.getChatWindowDiv().className+="theme5"===$ZSIQUtil.getIframe().CallImpl.getTheme()?" siq-calthemesign":" siq-calthememin"},handleMinCall:function(){this.removeCallClass(),$ZSIQChatWindow.getChatWindowDiv().className+="theme5"===$ZSIQUtil.getIframe().CallImpl.getTheme()?" siq-calthemesign":" siq-caltheme"},handlefbCall:function(){this.removeCallClass(),$ZSIQChatWindow.getChatWindowDiv().className+="theme5"===$ZSIQUtil.getIframe().CallImpl.getTheme()?" siq-calthemesign":" siq-calthemefb"},removeCallClass:function(){var e=$ZSIQChatWindow.getChatWindowDiv();e.className=e.className.replace(/(?:^|\s)siq-calthememin(?!\S)/,"").replace(/(?:^|\s)siq-caltheme(?!\S)/,"").replace(/(?:^|\s)siq-calthemefb(?!\S)/,"")},removeIncomingCallUI:function(){document.getElementById("zsiq_avcall")&&document.querySelector("#zsiq_avcall").classList.remove("cal-anim")},updateCount:function(e){var t=$ZSIQWidget.getWidgetObject().sticker;1==t[0]&&"8"==t[1].default&&(document.getElementById("zsiq_chatbtn").style.display="none"),document.getElementById("zsiq_unreadcnt")&&(document.getElementById("zsiq_unreadcnt").style.display="",$ZSIQUtil.setText("zsiq_unreadcnt",e))},updateCountUI:function(){var e=$ZSIQUtil.getIframe();if(e&&e.$Support){var t=e.$Support;t.setTabOwner();var i=t.getUnreadCount();i?n==$ZSIQWidgetUI.F_BUTTON?$ZSIQWidgetUI.updateCount(i):n!=$ZSIQWidgetUI.F_WINDOW||t.isConversationUIFocussed()||($ZSIQWidgetUI.removeUnreadCount(),t.removeUnreadCookie()):$ZSIQWidgetUI.removeUnreadCount()}},handleFloatEvents:function(e){if("siqico-close"!=e.target.getAttribute("class"))if("minsticker"!=e.target.getAttribute("data-click")){var t=$ZSIQUtil.getIframe();if(t){if(!$ZSIQChat.isPreview()&&t.$Support&&(n==$ZSIQWidgetUI.F_BUTTON||n==$ZSIQWidgetUI.F_STICKER)){var i=t.$Support.Util;i.ispostloaddone||(clearTimeout(i.jsdownloadtimer),i.downloadAdditionalFiles()),$ZSIQChatWindow.openChatWindow()}}else $ZSIQChatWindow.populateIframe(null,function(){$ZSIQWidgetUI.handleFloatEvents(e)})}else $ZSIQWidgetUI.minimizeSticker();else $zoho.salesiq.floatbutton.coin.hidetooltip()},handleResizeEvents:function(){$ZSIQChat.isPreview()||handleIframeFunction(function(e){e.$Support.Util.checkWindowVisibility()})},onLoadCustomSticker:function(e){var t={},i=e.naturalWidth,n=e.naturalHeight,a=[400/i,400/n];t=1<(a=Math.min(a[0],a[1]))?{WIDTH:i,HEIGHT:n}:{WIDTH:i*a,HEIGHT:n*a},g.style.width=t.WIDTH+"px",g.style.height=t.HEIGHT+"px"},getWidgetPosition:function(){var e=$ZSIQUtil.getAPIValues();return e.floatposition?""+i[e.floatposition]:""+$ZSIQWidget.getWidgetObject().position[1].no},isHandHeldDevice:function(){return!(!$ZSIQChat.isPreview()||"mobile"!=_WIDGETPREV_MODE)||!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent)},isAppleDevice:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},addClass:function(e,t){-1==e.className.indexOf(t)&&(e.className+=" "+t)},setWidgetState:function(e){n=e,$ZSIQWidget.setWidgetCookie(e)},removeUnreadCount:function(){var e=document.getElementById("zsiq_unreadcnt");e&&(e.style.display="none")},checkWidgetVisibility:function(e){var t=$ZSIQWidget.getWidgetObject();$ZSIQWidgetUI.checkAndHideCoinToolTip(t.hide_tooltip);var i=$zohosq.values.floatvisible;if(!i||$ZSIQChat.isPreview()||"hide"!=i&&"show"!=i&&isNaN(i))if("1"==t.mdevice_hide[0]&&$ZSIQWidgetUI.isHandHeldDevice())g.style.display="none";else{if("1"==t.hideoffline[0]&&!t.status||0==t.islivechat||t.hideembed){if(!e&&!$ZSIQChatWindow.isChatExist())return $ZSIQWidgetUI.setWidgetState("0"),void(g.style.display="none");g.style.display="block"}else g.style.display="block";n==$ZSIQWidgetUI.F_WINDOW?($ZSIQWidgetUI.minimizeSticker(null,!0),$ZSIQWidgetUI.addClass(g,"zsiqfanim")):n==$ZSIQWidgetUI.F_BUTTON&&$ZSIQWidgetUI.minimizeSticker()}else $ZSIQWidgetUI.handleWidgetVisible(i)},bindCustomCSS:function(e){var t=e.sticker[1].default,i=$ZSIQTemplate["theme"+t],n=document.getElementById("zsiqcustomcss");n&&n.parentElement.removeChild(n);var a=document.createElement("style");a.id="zsiqcustomcss",a.setAttribute&&a.setAttribute("data-id","zsalesiq"),a.appendChild(document.createTextNode(i.getCustomCSS(e))),document.body.appendChild(a)},getGDPRBannerDiv:function(){return r},checkAndHideCoinToolTip:function(e){if(1==$ZSIQWidget.getWidgetObject().sticker[1].default){var t=document.querySelector("#zsiq_float #titlediv"),i="zsiqhide_tip";t&&($zohosq.values.ishidetooltip||e?$ZSIQWidgetUI.addClass(t,i):t.classList.remove(i))}}}}();var $ZSIQWidget=$ZSIQWidget||function(){var e,i={},n={},o=function(t){var e=$ZSIQUtil.parseToJSON(t);return"object"==typeof e||"boolean"==typeof e?e:t};return{init:function(t){var e=$ZSIQChat.getWidgetData();!function(t){for(var e in t)i[e]=o(t[e]);$ZSIQAnalytics=i.analytics,$ZSIQAutopick=i.autopick,_ZSIQ.brandname=i.brandname}(e.widgetobj),function(t){for(var e in t)n[e]=o(t[e])}(e.embedobj),$ZSIQChat.server_avuid=$ZSIQUtil.getAvuid(),$ZSIQWidgetUI.initWidgetState(),$ZSIQWidgetUI.drawWidget(),!$ZSIQChat.isPreview()&&$zohosq.init&&$zohosq.init(),t||$ZSIQUtil.storeDetails(e)},getWidgetObject:function(){return i},getEmbedObject:function(){return n},setWidgetCookie:function(t){clearTimeout(e),$ZSIQUtil.storeCookieVal("state",t,!0),e=setTimeout(function(){$ZSIQWidget.setWidgetCookie(t)},18e4)},handleAPIValues:function(){if("click"==$ZSIQUtil.getAPIValues().chatmode){var t=$ZSIQWidgetUI.getWidgetDiv();t.setAttribute("data-autochat",!0);$ZSIQWidgetUI.getWidgetState()==$ZSIQWidgetUI.F_STICKER&&$ZSIQUtil.bindClickEvent(t,function(t){"zsiq_minimize"!=t.target.id&&0!=+[t.clientX]&&$ZSIQChatWindow.openChatWindow()})}},handleCallBacks:function(t){try{if($zoho&&t)for(var e in t)$zohosq._invoke(e,t[e])}catch(t){}},getWidgetStatus:function(){return i.status},getEmbedSize:function(){var t=JSON.parse($ZSIQWidget.getEmbedObject().einfo.props.size)[1].val;return 1==t?2:t}}}();$ZSIQWidget.init();