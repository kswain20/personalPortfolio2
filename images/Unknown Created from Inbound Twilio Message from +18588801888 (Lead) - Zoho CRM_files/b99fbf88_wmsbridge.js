var wmsconnectorframe,isWSSupported,setWSSupport,pdomain="*",wmslasttokenrefresh=0,isConnectivityInitialized=!1,isWMSFrameLoaded=!1,tokensetbyiam=!1;function triggerbind(e,t,n){e=e||getZuid(),t=t||getRawSid(),n=n||getSid();var i={uid:e};t&&(i.rsid=t),n&&(i.sid=n),wmsconnectorframe.contentWindow.postMessage('["bind",'+JSON.stringify(i)+"]",pdomain)}function triggerRTTPing(){wmsconnectorframe.contentWindow.postMessage('["triggerRTTPing",""]',pdomain)}function abortBind(){wmsconnectorframe.contentWindow.postMessage('["abortbind",{}]',pdomain)}function clearAndRegister(){var e={config:getWmsConfig()};wmsconnectorframe.contentWindow.postMessage('["clearregister",'+JSON.stringify(e)+"]",pdomain)}function setIdleStatusInClient(e){var t={isidle:e};wmsconnectorframe.contentWindow.postMessage('["sessionidle",'+JSON.stringify(t)+"]",pdomain)}function updateOAuthCredInBridge(){wmsconnectorframe.contentWindow.postMessage('["oauthcredentials",'+JSON.stringify(getWMSOAuthCredentials())+"]",pdomain)}function assignBridgeVariables(){if(!1===isCrossOriginAllowed()){window.getWmsConfig=window.parent.getWmsConfig,window.getNickName=window.parent.getNickName,window.getZuid=window.parent.getZuid,window.getSid=window.parent.getSid,window.getRawSid=window.parent.getRawSid,window.isdisablewms=window.parent.isdisablewms,window.getWmsContacts=window.parent.getWmsContacts,window.updateWmsContacts=window.parent.updateWmsContacts,window.getAuthType=window.parent._getAuthType||function(){},window.getAuthToken=window.parent.getAuthToken||function(){},window.getAuthScope=window.parent.getAuthScope||function(){},window.getZAID=window.parent.getZAID||function(){},window.getWmsTabId=window.parent.getWmsTabId||function(){},window.isLongPollingForced=window.parent.isLongPollingForced,window.getWMSOAuthCredentials=window.parent.getWMSOAuthCredentials||function(){},window.getWmsXA=window.parent.getWmsXA||function(){},window.getNewClientPortalAuthentication=window.parent.getNewClientPortalAuthentication||function(){},window.getWMSRTCAccessToken=window.parent.getWMSRTCAccessToken||function(){},"function"==typeof window.parent.WebMessanger?(window.parent.WebMessanger.triggerbind=window.triggerbind,window.parent.WebMessanger.abortBind=window.abortBind,window.parent.WebMessanger.clearAndRegister=window.clearAndRegister,window.parent.WebMessanger.setIdleStatusInClient=window.setIdleStatusInClient,window.parent.WebMessanger.updateOAuthCredInBridge=window.updateOAuthCredInBridge,window.parent.WebMessanger.initializeConnectivity=window.initializeConnectivity,window.parent.WebMessanger.triggerRTTPing=window.triggerRTTPing):"function"==typeof window.parent.WmsLite&&(window.parent.WmsLite.triggerbind=window.triggerbind,window.parent.WmsLite.abortBind=window.abortBind,window.parent.WmsLite.clearAndRegister=window.clearAndRegister,window.parent.WmsLite.setIdleStatusInClient=window.setIdleStatusInClient,window.parent.WmsLite.updateOAuthCredInBridge=window.updateOAuthCredInBridge,window.parent.WmsLite.triggerRTTPing=window.triggerRTTPing);try{window.handlePexEvent=window.parent.PexBridge.handleEvent,window.parent.PexBridge.submitEvent=window.submitEvent}catch(e){}}}function initializeConnectivity(t){if("undefined"==typeof JSON){var e=document.createElement("script"),n=window.location.protocol,i="https:"===n?staticdetails.staticversion+"_https":staticdetails.staticversion;e.type="text/javascript",e.src=n+"//"+staticdetails.jsstaticdomain+"/ichat/"+i+"/js/0ea6dc8b_json2.min.js",document.body.appendChild(e),attachonload.call(e,o)}else o();function o(){if(!1!==isWMSFrameLoaded&&!isConnectivityInitialized){isConnectivityInitialized=!0,callParentMethod("updateDebugInfo",["Init connection"]);var e={prd:prd,sdomain:_SDOMAIN,sstservice:_SSTSERVICE,tokensetbyiam:tokensetbyiam};e.config="function"==typeof getWmsConfig&&getWmsConfig()||_SESSIONCONFIG,e.uname="function"==typeof getUserName&&getUserName(),e.zuid="function"==typeof getZuid&&getZuid()||uname,e.nname="function"==typeof getNickName&&getNickName(),e.authtype="function"==typeof getAuthType&&getAuthType(),e.authtoken="function"==typeof getAuthToken&&getAuthToken(),e.authscope="function"==typeof getAuthScope&&getAuthScope(),e.zaid="function"==typeof getZAID&&getZAID(),e.tabid="function"==typeof getWmsTabId&&getWmsTabId()||"undefined"!=typeof _tabid&&_tabid,t&&(e.dcswitch=!0,e.sid="function"==typeof getSid&&getSid(),e.xa="function"==typeof getWmsXA&&getWmsXA()),e._uselp=_uselp,"function"==typeof isLongPollingForced&&"true"===isLongPollingForced()&&(e._uselp="true"),9==e.authtype&&(e.oauthcredentials=getWMSOAuthCredentials()),13==e.authtype&&(e.rtcatoken=getWMSRTCAccessToken()),wmsconnectorframe.contentWindow.postMessage('["register",'+JSON.stringify(e)+"]",pdomain)}}}function attachonload(e){void 0!==this.readyState?this.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||e.call(this)}:this.onload=function(){e.call(this)}}function constructWMSIframe(e){var t="function"==typeof getZuid&&getZuid()||t,n="tabid="+("function"==typeof getWmsTabId&&getWmsTabId()||"undefined"!=typeof _tabid&&_tabid)+"&wmsid="+t;"undefined"!=typeof _COI&&_COI&&(n+="&coi=true"),wmslasttokenrefresh=(new Date).getTime();var i=window.location.protocol+"//"+wmsserver+"/v2/"+_HTML+".html?"+n+nocachefix();tokensetbyiam=-1!==document.cookie.split("; ").indexOf("wms.agent=true");var o=window.location.hostname;-1==o.indexOf(".manageengine.")&&-1==o.indexOf("servicedeskplus.")&&-1==o.indexOf(".localmanageengine.")||(tokensetbyiam=!1),"function"!=typeof getAuthType||10!==getAuthType()&&11!==getAuthType()?samedomain&&(i="/wmssrv/v2/"+_HTML+".html?"+n+nocachefix()):(samedomain&&(i=window.location.protocol+"//"+window.location.hostname+"/wmssrv/v2/"+_HTML+".html?"+n+nocachefix()),!1===tokensetbyiam&&(i="function"==typeof getZAID&&getZAID()&&"function"==typeof getNewClientPortalAuthentication&&getNewClientPortalAuthentication()?window.location.protocol+"//"+window.location.host+"/accounts/signin?client_auth=true&client_portal=true&servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(i)+"&portal="+getZAID():"function"==typeof getZAID&&getZAID()&&"undefined"!=typeof _IAMCLIENTSERVER?_IAMCLIENTSERVER+"/accounts/signin?client_auth=true&client_portal=true&servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(i)+"&portal="+getZAID():_IAMSERVER+"/clogin?client_auth=true&servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(i))),destroyWMSIframe(),(wmsconnectorframe=document.createElement("iframe")).name="wms",wmsconnectorframe.src=i,attachonload.call(wmsconnectorframe,function(){callParentMethod("updateDebugInfo",["HTML loaded"]),(isWMSFrameLoaded=!0)===isCrossOriginAllowed()||!window.parent.WebMessanger||!window.parent.WebMessanger.isResourceLoaded||window.parent.WebMessanger.isResourceLoaded()?initializeConnectivity(e):callParentMethod("updateDebugInfo",["Resource not loaded, so not initializing wms"])}),document.body.appendChild(wmsconnectorframe)}function destroyWMSIframe(){wmsconnectorframe&&wmsconnectorframe.parentNode&&wmsconnectorframe.parentNode.removeChild(wmsconnectorframe),wmsconnectorframe=null,isConnectivityInitialized=isWMSFrameLoaded=!1}function loadwms(){callParentMethod("updateDebugInfo",["Bridge loaded"]),assignBridgeVariables(),deactchat&&!1===isCrossOriginAllowed()&&(parent._WMSCONFIG&=-2),constructWMSIframe();try{window.parent.WebMessanger.setUserConfig(_USERCONFIG),window.parent.WebMessanger.setCSRFParamName(_CFPARAMNAME),window.parent.WebMessanger.setCSRFTokenCookieName(_CFTOKENCOOKIENAME),window.parent.WebMessanger.setChatCSRFParamName(_CHATCSRFPARAMNAME),window.parent.WebMessanger.setChatCSRFCookieName(_CHATCSRFCOOKIENAME),window.parent.WebMessanger.setChatServer(_CHATSERVERURL),window.parent.WebMessanger.setCalendarServer(_CALENDARSERVERURL),window.parent.WebMessanger.setMailServer(_MAILSERVERURL),"null"!=_MEETINGSERVERURL?window.parent.WebMessanger.setMeetingUrl(_MEETINGSERVERURL):window.parent.WebMessanger.disableMeeting(),window.parent.WebMessanger.setPhotoServer(_PHOTOSERVERURL),"undefined"!=typeof _SALESIQSERVERURL&&"function"==typeof window.parent.WebMessanger.setSalesIQServerURL&&window.parent.WebMessanger.setSalesIQServerURL(_SALESIQSERVERURL),window.parent.WebMessanger.setBarSettingsValue(_WMSSETTINGS),"undefined"!=typeof _APPACCOUNTID&&"function"==typeof window.parent.WebMessanger.setAppAccountId&&window.parent.WebMessanger.setAppAccountId(_APPACCOUNTID),window.parent.WebMessanger.documentready()}catch(e){}try{void 0!==window.parent.WmsLite&&window.parent.WmsLite.setUserConfig&&window.parent.WmsLite.setUserConfig(_USERCONFIG),void 0!==window.parent.WmsLite&&window.parent.WmsLite.setBarSettingsValue&&window.parent.WmsLite.setBarSettingsValue(_WMSSETTINGS),void 0!==window.parent.WmsLite&&window.parent.WmsLite.setChatCSRFParamName&&window.parent.WmsLite.setChatCSRFParamName(_CHATCSRFPARAMNAME),void 0!==window.parent.WmsLite&&window.parent.WmsLite.setChatCSRFCookieName&&window.parent.WmsLite.setChatCSRFCookieName(_CHATCSRFCOOKIENAME)}catch(e){}}function wmsAjax(e,t,n,i,o){var a;if(window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),a.opts=o,a.onreadystatechange=function(){if(4===this.readyState)if(200===this.status||204===this.status){if(""!==this.responseText){var e=this.responseText;try{e=JSON.parse(e)}catch(e){}}this.opts.onsuccess.call(this,e)}else this.opts.onfailure.call(this)},a.open(e,t,!0),i)for(var s in i)a.setRequestHeader(s,i[s]);a.send(n)}function submitEvent(e){if(!0===isWSSupported())wmsconnectorframe.contentWindow.postMessage('["submitEvent",'+JSON.stringify(e)+"]",pdomain);else{var t,n=e.o.split("@"),i=n[0].split(".");if("req"===i[0]){var o,a=i[1],s=n[1].split(":")[1];if(window.XMLHttpRequest?o=new XMLHttpRequest:window.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP")),o.evid=e.i,void 0!==e.d)if("string"==typeof e.d)t=e.d;else if("PUT"===a)t=JSON.stringify(e.d);else{var r=[];for(var d in e.d)r.push(d+"="+e.d[d]);t=r.join("&"),"GET"===a&&(s+="?"+t)}for(var c in o.open(a,"/"+s,!0),e.h)"Cookie"!==c&&o.setRequestHeader(c,e.h[c]);("GET"!==a||e.h&&void 0===e.h["Content-Type"])&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),o.onreadystatechange=function(){if(4===this.readyState){var e={};if(e.eid=this.evid,200===this.status){if(e.rs="4",""!==this.responseText){var t=this.responseText;try{t=JSON.parse(t)}catch(e){}}e.res={d:t,eid:this.evid}}else e.rs="-1",e.err={c:this.status,rc:this.status,rm:this.responseText};handlePexEvent(this.evid,e)}},"GET"===a?o.send():o.send(t)}}}function handleRefreshTokenFailure(e){var t={onsuccess:constructWMSIframe},n="?prd="+prd+"&uname="+e+"&nocache="+Date.now();wmsAjax("GET","/"+_WMSCONT+"/pconnect.sas"+n,null,null,t)}function pushMsg(e){for(var t=0;t<e.length;t++){var n=e[t];if("-12"!=n.mtype&&"-17"!=n.mtype||"function"!=typeof getAuthType||9===getAuthType())if("-25"==n.mtype)!samedomain&&n.domain&&(wmsserver=n.domain,destroyWMSIframe(),constructWMSIframe(!0));else{if("0"===n.mtype){var i=n.msg,o='["bind",{"uid" : "'+i.uid+'" , "rsid" : "'+i.rsid+'"  , "sid" : "'+i.sid+'" , "nname" : "'+i.nname+'", "binding":true }]';wmsconnectorframe.contentWindow.postMessage(o,pdomain)}callParentMethod("push",[n])}else{destroyWMSIframe(),callParentMethod("push",[n]);var a="-12"==n.mtype?"Empty token":"Invalid token";if(3e5<(new Date).getTime()-wmslasttokenrefresh)if(callParentMethod("updateDebugInfo",[n.mtype+" "+a+" , refetching token"]),tokensetbyiam){var s="function"==typeof getZuid&&getZuid()||uname,r="?prd="+prd+"&uname="+s+"&refreshtoken=true&nocache="+Date.now(),d={onsuccess:constructWMSIframe,onfailure:handleRefreshTokenFailure.bind(null,s)};wmsAjax("GET","/"+_WMSCONT+"/pconnect.sas"+r,null,null,d)}else constructWMSIframe();else callParentMethod("updateDebugInfo",[n.mtype+" "+a+" , refetching in 5 - 6 min"]),callParentMethod("serverdown",[300,360])}}}function isValidDomain(e){try{if(e=e.replace(/:\d*$/,""),wmssubdomain&&e){if(e===window.location.protocol+"//"+wmssubdomain)return!0;if(2<e.split(".").length)return e.substring(e.length-(wmssubdomain.length+1))==="."+wmssubdomain}return!1}catch(e){return!1}}function getDomain(e){var t="";return void 0!==e.domain?t=e.domain:void 0!==e.origin&&(t=e.origin),t}function isCrossOriginAllowed(){return!("undefined"==typeof _CROSSORIGINALLOWED||!_CROSSORIGINALLOWED||"$"!==uname.charAt(0))}function callParentMethod(e,t){if(-1!==["push","disablewms","goOffline","updatecontacts","requestsuccess","serverup","serverdown","updateDebugInfo"].indexOf(e))if(isCrossOriginAllowed()){var n={opr:e};t&&(n.params=t),window.parent.postMessage(JSON.stringify(n),"*")}else"function"==typeof window.parent[e]?window.parent[e].apply(null,t):window.parent.WmsLite?window.parent.WmsLite[e].apply(null,t):window.parent.WebMessanger[e].apply(null,t)}function nocachefix(){return"&nocache="+(new Date).getTime()}"false"===_NODOMAINCHANGE&&!1===samedomain&&(document.domain=wmssubdomain),function(){var t;setWSSupport=function(e){t=e},isWSSupported=function(){return t}}(),addEvent(window,"message",function(e){if(isValidDomain(getDomain(e))){var t=JSON.parse(e.data),n=t[0],i=t[1],o=t[2];if(o&&null!=o.wsopen&&setWSSupport(o.wsopen),"push"===n)pushMsg(i);else if("disablewms"===n)callParentMethod("disablewms");else if("goOffline"===n)callParentMethod("goOffline");else if("isdisablewms"===n)wmsconnectorframe.contentWindow.postMessage('["setdisablewms",{"value" : "'+isdisablewms()+'"}]',pdomain);else if("getcontacts"===n){var a=getWmsContacts(),s=i;try{wmsconnectorframe.contentWindow.postMessage('["updatecontacts",{"childsid" : "'+s+'" , "contacts" : '+JSON.stringify(a)+"}]",pdomain)}catch(e){}}else"updatecontacts"===n?updateWmsContacts(i):"serverup"===n?callParentMethod("serverup"):"serverdown"===n?callParentMethod("serverdown",[i.min_delay,i.max_delay]):"pexevt"===n?handlePexEvent(i.eid,i):"wssupport"===n?setWSSupport(i):"debuginfo"===n&&callParentMethod("updateDebugInfo",[i])}else if(!1===isCrossOriginAllowed())throw new Error("Invalid cross domain access in bridge")}),!0===isCrossOriginAllowed()&&addEvent(window,"message",function(e){if(e.source===parent){var t=JSON.parse(e.data),n=t.opr,i=t.params;"triggerbind"===n?triggerbind(i.zuid,i.rawsid,i.sid):"abortBind"===n?abortBind():"clearAndRegister"===n&&clearAndRegister()}});