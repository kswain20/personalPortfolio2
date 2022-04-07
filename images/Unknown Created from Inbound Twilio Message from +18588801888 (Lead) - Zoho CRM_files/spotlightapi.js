function UTSDB(){}function $ZNotifier(){}var _utsserver=_ZSLUTSSERVERURL,UTSMODE={CORS:0,WS:1},networkevent={OFFLINE:0,ONLINE:1,INIT:-1},_utsmode=UTSMODE.WS,uts={net:{},util:{},moninterval:15e3},apivalues={},$zslisinited=!1,_zslid="",_zslcustomerdata="",_zslsid="",_zslcallbacks={},consecutivefailurecnt=0,disablebind=!1,isconnected=!1,initialized=!1,httphack="http",urlscheme=-1===window.location.protocol.indexOf("https")?httphack+"://":httphack+"s://",triggeredevent=networkevent.INIT,_MAXFAILURECOUNT=3,EMAIL_PARAM_REGEX=new RegExp("^[\\w]([\\w\\-\\.\\+\\'\\/]*)@([\\w\\-\\.]*)(\\.[a-zA-Z]{2,22}(\\.[a-zA-Z]{2}){0,2})$");uts.net={connAlive:function(){uts.lpt=new Date},connMonitor:function(){var currenttime=new Date;currenttime-uts.lpt>4*uts.moninterval&&(disablebind||isconnected?disablebind===!1&&this.triggerBind():(this.disableConnection(),uts.init())),setTimeout(function(){uts.net.connMonitor()},uts.moninterval)},handleUTSEvent:function(ev){var data=ev.d,opr=ev.o;switch(opr){case 0:if(initialized=!0,_zslsid=data.sid,$zoho.spotlight._cleanQueue(),data.notification){new $ZSNotify(data.notification)}uts.net.handleCallbacks(data);break;case 1:break;case 100:if(data){new $ZSNotify(data.message)}break;case-1:var duration=data&&data.duration||"";uts.net.disableConnection(duration);break;case 101:$zoho.spotlight._cleanQueue(),uts.net.handleCallbacks(data)}},handleCallbacks:function(data){try{if(data.status){var opr=data.opr;"track"===opr&&(opr=data.action),opr in _zslcallbacks&&_zslcallbacks[opr]()}delete _zslcallbacks[opr]}catch(e){}},handleResponse:function(data){if(isconnected=!0,data)if(data=JSON.parse(data),"[object Array]"===Object.prototype.toString.call(data))for(var i=0;i<data.length;i++)this.handleUTSEvent(data[i]);else this.handleUTSEvent(data)},triggerBind:function(){_ZSLISTRACKONDEMAND?$zslisinited&&$zoho.spotlight._cleanQueue():(disablebind=!1,uts.util.checkMode(UTSMODE.WS)?WS.bind():uts.util.checkMode(UTSMODE.CORS)&&CR.init())},scheduleRecon:function(){function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min)}var reconnectiondelay=[30,60,90,120,300],index=0,callbacktimer=-1;return function(initcountdown,callbackfn){initcountdown?(index=0,reconnectiondelay[0]=getRandomInt(5,30)):index<reconnectiondelay.length-1&&index++;var countdown=reconnectiondelay[index];clearTimeout(callbacktimer),callbacktimer=setTimeout(callbackfn,1e3*countdown)}}(),goOffline:function(){if(consecutivefailurecnt>=_MAXFAILURECOUNT||triggeredevent===networkevent.OFFLINE){if(disablebind=!0,consecutivefailurecnt>_MAXFAILURECOUNT)return void(isconnected=!1);var init=!1;(consecutivefailurecnt===_MAXFAILURECOUNT||triggeredevent===networkevent.OFFLINE)&&(init=!0),triggeredevent=networkevent.INIT,this.scheduleRecon(init,this.triggerBind)}},requestSuccess:function(){(consecutivefailurecnt>=_MAXFAILURECOUNT||triggeredevent===networkevent.ONLINE)&&(triggeredevent=networkevent.INIT,disablebind=!1)},disableConnection:function(duration){if(disablebind=!0,duration){var durationinms=60*duration*1e3,nextrecontime=(new Date).getTime()+durationinms;UTSDB.store("nextrecon",nextrecontime),setTimeout(this.triggerBind,durationinms)}uts.util.checkMode(UTSMODE.WS)?WS.disableConnection():uts.util.checkMode(UTSMODE.CORS)&&CR.disableConnection()}},uts.util={addOnOffEvent:function(evname,func){document.body.attachEvent?document.body.attachEvent("on"+evname,func):window.addEventListener&&window.addEventListener(evname,func)},checkMode:function(mode){return _utsmode===mode?!0:!1},composeUrl:function(){function checkAndPush(name,value){value&&urlarray.push(name+"="+encodeURIComponent(trim(value)))}function trim(value){return value&&isNaN(value)?"object"==typeof value?JSON.stringify(value):value.replace(/^\s+|\s+$/gm,""):value}var urlarray=[],_appid=$zoho.spotlight.app_id;if(_appid){var urlobj={"x-appid":_appid,id:_zslid};_zslcustomerdata&&(urlobj.data=_zslcustomerdata);for(var a in urlobj)urlobj.hasOwnProperty(a)&&checkAndPush(a,urlobj[a]);if(initialized)checkAndPush("recon","true");else{var status=apivalues.trackstatus;status&&checkAndPush("cstatus",JSON.stringify(status))}return urlarray.join("&")}},_encodeData:function(data){var obj=JSON.parse(JSON.stringify(data));return obj&&("object"==typeof obj&&(obj=JSON.stringify(obj)),obj=encodeURIComponent(obj)),obj},ajax:function(props){var ajaxreq,type=props.type||"GET",isasync=props.async||!0,onsuccess=props.onSuccess||function(){},onfailure=props.onFailure||function(){},onerror=props.onError||function(){},url=props.url,options=props.options||{};if(ajaxreq=new XMLHttpRequest,"withCredentials"in ajaxreq){ajaxreq=new XMLHttpRequest,ajaxreq.open(type,url,isasync),ajaxreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),options.ajaxreq=ajaxreq;try{ajaxreq.onreadystatechange=function(){4===ajaxreq.readyState&&(200===ajaxreq.status?onsuccess(options):onfailure(options))}}catch(e){onerror(e)}}else if("undefined"!=typeof XDomainRequest){ajaxreq=new XDomainRequest,ajaxreq.open("GET",url),options.ajaxreq=ajaxreq;try{ajaxreq.onprogress=function(){},ajaxreq.ontimeout=function(){},ajaxreq.onload=function(){onsuccess(options)},ajaxreq.onerror=function(){onfailure(options)}}catch(e){onerror(e)}}return setTimeout(function(){ajaxreq.send()},0),ajaxreq}},uts.util.addOnOffEvent("online",function(){uts.net.triggerBind(),triggeredevent=networkevent.ONLINE}),uts.util.addOnOffEvent("offline",function(){triggeredevent=networkevent.OFFLINE,uts.net.goOffline()}),$ZNotifier.sendReq=function(url){function onSuccess(options){uts.net.handleResponse(options.ajaxreq.responseText),$zslisinited=!0}var props={url:url,onSuccess:onSuccess};uts.util.ajax(props)},$ZNotifier.updateData=function(opr,data){if(opr&&Object.keys(data).length){var obj={opr:opr,data:data};this.notifyServer(obj)}},$ZNotifier.notifyServer=function(obj){_ZSLISTRACKONDEMAND?"track"===obj.opr?this.trackEvent(obj.data):this.updateEntity(obj.opr,obj.data):uts.util.checkMode(UTSMODE.WS)?WS._WEBSOCK.send(JSON.stringify(obj)):uts.util.checkMode(UTSMODE.CORS)&&CR.bind(obj)},$ZNotifier.handleApiChange=function(operation,val){switch(operation){case 1:"on"===val?uts.init():"off"===val&&uts.net.disableConnection();break;case 2:!isNaN(val)}},$ZNotifier.updateEntity=function(opr,data){var appid=$zoho.spotlight.app_id;if(appid&&_zslid){var url=urlscheme+_utsserver+"/entity?x-appid="+encodeURIComponent(appid)+"&id="+_zslid+"&opr="+opr;data&&(url+="&data="+uts.util._encodeData(data)),$ZNotifier.sendReq(url)}},$ZNotifier.trackEvent=function(data){var appid=$zoho.spotlight.app_id;if(appid&&_zslid){var url=urlscheme+_utsserver+"/track?x-appid="+encodeURIComponent(appid)+"&id="+_zslid+"&data="+uts.util._encodeData(data);$ZNotifier.sendReq(url)}},$ZaddEvent=function(el,evname,func){el.attachEvent?el.attachEvent("on"+evname,func):el.addEventListener(evname,func,!0)},WS={id:null,wsScheme:-1===window.location.protocol.indexOf("https")?"ws://":"wss://",wsUrl:_utsserver+"/watchws?",_WEBSOCK:{},pingTimer:{},recontimer:null,readystate:{CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3},init:function(){if(_utsmode=UTSMODE.WS,"off"!==apivalues.tracking)try{var url=WS.wsScheme+WS.wsUrl;url+=uts.util.composeUrl(),"WebSocket"in window?WS._WEBSOCK=new WebSocket(url):"MozWebSocket"in window&&(WS._WEBSOCK=new MozWebSocket(url)),WS._WEBSOCK.id=(new Date).getTime(),WS.id=WS._WEBSOCK.id,WS._WEBSOCK.onopen=function(evt){WS.onOpen(evt)},WS._WEBSOCK.onclose=function(evt){WS.id===this.id&&WS.onClose(evt)},WS._WEBSOCK.onmessage=function(evt){WS.onMessage(evt)}}catch(e){}},onMessage:function(evt){uts.net.connAlive(),consecutivefailurecnt=0,uts.net.requestSuccess();var data=evt.data;if(""!==data){if(","===data)return void WS.init();var parsed_data=JSON.parse(data);if(parsed_data[0].d.status){var opr=parsed_data[0].d.opr;"track"===opr&&(opr=parsed_data[0].d.action),opr in _zslcallbacks&&(_zslcallbacks[opr](),delete _zslcallbacks[opr])}uts.net.handleResponse(data),clearInterval(WS.pingTimer),WS.pingTimer=setInterval(function(){try{WS._WEBSOCK.readyState===WS.readystate.OPEN&&WS._WEBSOCK.send("-")}catch(e){}},3e4)}},onOpen:function(){clearTimeout(WS.recontimer),$zslisinited=!0},onError:function(){},onClose:function(){if(uts.util.checkMode(UTSMODE.WS)){consecutivefailurecnt++,uts.net.goOffline(),clearTimeout(WS.recontimer);var timeout=(new Date).getTime()%20;WS.recontimer=setTimeout(function(){WS.bind()},1e3*timeout)}},bind:function(){disablebind!==!0&&uts.util.checkMode(UTSMODE.WS)&&((WS._WEBSOCK.readyState===WS.readystate.CONNECTING||WS._WEBSOCK.readyState===WS.readystate.OPEN)&&WS._WEBSOCK.close(),clearTimeout(WS.recontimer),WS.init(),uts.net.connAlive())},disableConnection:function(){WS._WEBSOCK.close()}},CR={lastevttime:0,reqobjs:[],fullTripTimer:null,respTimer:null,sendReq:function(url){function onSuccess(options){var evtstarttime=options.evtstarttime,response=options.ajaxreq.responseText;CR.lastevttime-evtstarttime>4e4&&""===response||(uts.net.handleResponse(response),uts.net.connAlive(),uts.net.requestSuccess(),consecutivefailurecnt=0,$zslisinited=!0,""!==response&&CR.bind())}function onFailure(options){var status=options.ajaxreq.status;CR.reqobjs[0]&&CR.reqobjs[0].abort(),clearTimeout(CR.respTimer),CR.respTimer=setTimeout(function(){CR.bind()},1e4),500!==status&&304!==status&&404!==status&&400!==status&&(consecutivefailurecnt++,uts.net.goOffline())}function onError(exp){throw clearTimeout(CR.respTimer),CR.respTimer=setTimeout(function(){CR.bind()},1e4),consecutivefailurecnt++,uts.net.goOffline(),exp}var starttime=(new Date).getTime();CR.lastevttime=starttime;var ajaxprops={url:url,onSuccess:onSuccess,onFailure:onFailure,onError:onError,options:{evtstarttime:starttime}},ajaxreq=uts.util.ajax(ajaxprops);CR.reqobjs[0]=CR.reqobjs[1],CR.reqobjs[1]=ajaxreq},init:function(){if(_utsmode=UTSMODE.CORS,"off"!==apivalues.tracking){CR.disableConnection();var url=urlscheme+_utsserver+"/watch?";url+=uts.util.composeUrl()+"&nocache="+(new Date).getTime(),CR.sendReq(url)}},bind:function(data){if(disablebind!==!0&&(null!==CR.respTimer&&clearTimeout(CR.respTimer),_zslsid)){var url=urlscheme+_utsserver+"/bind?sid="+encodeURIComponent(_zslsid)+"&nocache="+(new Date).getTime();data&&(url+="&data="+uts.util._encodeData(data)),uts.net.connAlive(),CR.sendReq(url),clearTimeout(CR.fullTripTimer),CR.fullTripTimer=setTimeout(function(){CR.bind()},3e4)}},disableConnection:function(){for(var i=0;i<CR.reqobjs.length;i++)CR.reqobjs[i]&&CR.reqobjs[i].abort();clearTimeout(CR.fullTripTimer),clearTimeout(CR.respTimer)}},uts.init=function(){function scheduleFallback(){setTimeout(function(){WS._WEBSOCK.readyState!==WS.readystate.OPEN&&CR.init()},3e4)}var connectionallowed=!0;UTSDB.get("nextrecon")&&(connectionallowed=UTSDB.get("nextrecon")-(new Date).getTime()<0?!0:!1),connectionallowed&&("WebSocket"in window||"MozWebSocket"in window?(WS.init(),scheduleFallback()):("withCredentials"in new XMLHttpRequest||window.XDomainRequest)&&CR.init()),uts.net.connMonitor()},uts.checkAndInit=function(){if($zoho.spotlight.app_id){if($zslisinited)return!1;var queue=$zoho.spotlight.q;if(queue&&queue.length>0)for(var i=0;i<queue.length;i++){var currobj=queue[i];if("identify"in currobj){queue.splice(i,1),_zslid=currobj.identify[0];var data=currobj.identify[1];data&&Object.keys(data).length>0&&(data.hasOwnProperty("email")&&!EMAIL_PARAM_REGEX.test(data.email)&&delete data.email,_zslcustomerdata=data),currobj.identify[2]&&(_zslcallbacks.identify=currobj.identify[2]),_ZSLISTRACKONDEMAND?$ZNotifier.updateEntity("identify",_zslcustomerdata):uts.init();break}}}},uts.checkAndInit(),function(){var $zsltimer=0;$zoho.spotlight.q.push=function(){return $zslisinited?(clearTimeout($zsltimer),$zsltimer=setTimeout(function(){$zoho.spotlight._cleanQueue()},500)):setTimeout(function(){uts.checkAndInit()},5),Array.prototype.push.apply(this,arguments)},$zoho.spotlight._cleanQueue=function(){for(var qlength=this.q.length,i=0;qlength>i;i++)this._parseAndUpdate(this.q[i]);for(var i=this.q.length-1;i>=0;i--)this.q.splice(i,1)},$zoho.spotlight._parseAndUpdate=function(data){for(var d in data){var obj={},details=data[d];switch(d){case"identify":break;case"track":if(!details[0])return;obj.action=details[0],details[1]&&(obj.actiondata=details[1]),details[2]&&(_zslcallbacks[details[0]]=details[2]);break;case"company.increment":obj.name=details[0],details[1]&&(obj.value=details[1]),details[2]&&(_zslcallbacks[d]=details[2]);break;case"customer.increment":obj.name=details[0],details[1]&&(obj.value=details[1]),details[2]&&(_zslcallbacks[d]=details[2]);break;case"customer.delete":case"company.delete":$ZNotifier.updateEntity(d);break;case"customer.set":details[0]&&details[0].hasOwnProperty("email")&&!EMAIL_PARAM_REGEX.test(details[0].email)&&delete details[0].email;default:obj=details[0],details[1]&&(_zslcallbacks[d]=details[1])}$ZNotifier.updateData(d,obj)}},$zoho.spotlight.getTrackURL=function(action,actiondata){var appid=$zoho.spotlight.app_id;if(appid&&_zslid&&action){var data={action:action};actiondata&&Object.keys(actiondata).length&&(data.actiondata=actiondata);var url=urlscheme+_utsserver+"/track?x-appid="+encodeURIComponent(appid)+"&id="+_zslid+"&data="+uts.util._encodeData(data);return url}}}();