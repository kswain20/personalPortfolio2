var PB=PB||{};function initPBSDK(){return new Promise(function(e,t){var n=document.createElement("script");n.src=PB.jsurl+"/pbone.js",document.head.appendChild(n),n.onload=function(){ZPB.initPlatform(PB.serviceData),e()}})}function attachZTIListner(){window.ZTI&&(ZTI.handleCrossProductMessage=function(e){var t="test".constructor;if(e.constructor===t&&(e=JSON.parse(e)),e.action&&"reloadSDK"===e.action){var n=PB.serviceData.loadPB||!0;PB.pbxhr=new XMLHttpRequest,PB.pbxhr.open("GET",PB.server+"/phonebridge/integration/integrationREST?serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&loadPB="+n,!0),PB.pbxhr.withCredentials=!0,PB.pbxhr.onreadystatechange=function(){if(this.readyState===this.DONE){var e=PB.pbxhr.response;if("true"===e||"syncuser"==e||"D_ORG"===e||"O_ORG"===e){PB.integEnabled="syncuser"!==e,PB.integRest=e;var t=document.getElementById("zpbsdk");void 0!=PB.serviceData.doNotDisturb&&!PB.serviceData.doNotDisturb&&t?(t.src=t.src,"SDPOnDemand"===PB.serviceData.serviceName&&window.callbackZPB&&callbackZPB()):initPBSDK().then(function(){window.callbackZPB&&callbackZPB()})}else PB.integRest="false","SDPOnDemand"===PB.serviceData.serviceName&&window.callbackZPB&&callbackZPB()}},PB.pbxhr.send(null)}else if(e.hasOwnProperty("CTDConfiguration"))for(var i=document.getElementsByTagName("zpb-phone"),a=0;a<i.length;a++)e.CTDConfiguration?i[a].component.setData("isCTD",!0):i[a].component.setData("isCTD",!1);e.subAction&&"alterModify"===e.subAction&&ZPB.sendMessage("zpbsetup",{action:"alterModify",providerID:e.providerID})})}function registerCustomTag(){Lyte.Component.register("zpb-phone",{_template:'<template tag-name="zpb-phone"><a class="pH2" title="Call" onclick="{{action(\'telcall\',event,number)}}"></a>\t</template>\n<style>.telIcon{ display: inline-block; width: 16px;height: 19px;background: transparent url(//img.zohostatic.com/phonebridge/V241/images/svgicons.svg) no-repeat -160px -471px;margin-right: 6px;cursor: pointer;}</style>',_dynamicNodes:[{type:"attr",position:[0]}],_observedAttributes:["number","lyteUnbound"],data:function(){return{number:Lyte.attr("string"),lyteUnbound:Lyte.attr("boolean",{default:!1})}},actions:{telcall:function(e,t){e.stopPropagation(),window.location.href="tel:"+t}}})}PB.parts=location.hostname.split("."),PB.subdomain=PB.parts.shift(),PB.uplvldom=PB.parts.join("."),PB.server=PB.uplvldom.includes("tsi")?"https://phonebridge.csez.zohocorpin.com":"https://phonebridge."+PB.uplvldom,PB.serviceData=void 0,PB.jsurl="",PB.integEnabled=!1,PB.target="splitscreen",PB.integRest="false",PB.tagNeededProducts=["ZohoCRM","ZohoRecruit"],PB.init=function(e){attachZTIListner(),PB.serviceData=e;var t=e.loadPB||!0;"CRMPlus"==e.bundleService&&e.crmplusData&&(PB.serviceData.serviceId=e.crmplusData.ZohoCRM||e.crmplusData.ZohoSupport,PB.serviceData.serviceName=e.crmplusData.ZohoCRM?"ZohoCRM":"ZohoSupport","ZohoSupport"==PB.serviceData.serviceName&&delete PB.serviceData.crmplusData),void 0!=e.pbDomain&&""!=e.pbDomain&&(PB.server=e.pbDomain),PB.pbxhr=new XMLHttpRequest,PB.pbxhr.open("GET",PB.server+"/phonebridge/integration/integrationREST?serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&loadPB="+t,!0),PB.pbxhr.withCredentials=!0,PB.pbxhr.onreadystatechange=PB.ready,PB.pbxhr.send(null)},PB.ready=function(){if(this.readyState===this.DONE){var e=PB.pbxhr.response;if(PB.integRest=e,"true"===e||"syncuser"==e||"D_ORG"===e||"O_ORG"===e){if(PB.integEnabled="syncuser"!==e,"CRMPlus"==PB.serviceData.bundleService&&PB.serviceData.crmplusData&&"O_ORG"===e)return PB.serviceData.serviceId=serviceData.crmplusData.ZohoSupport,PB.serviceData.serviceName="ZohoSupport",delete PB.serviceData.crmplusData,void PB.init(PB.serviceData);initPBSDK().then(function(){window.callbackZPB&&callbackZPB()})}else{if(PB.tagNeededProducts.includes(PB.serviceData.serviceName))if(window.Lyte)registerCustomTag();else{var t=document.createElement("script");t.src=wmsUserConfig.phonebridgejsurl.substring(0,wmsUserConfig.phonebridgejsurl.lastIndexOf("/"))+"/lyte-parent-dom.js",t.type="text/javascript",t.onload=function(){registerCustomTag()},document.head.appendChild(t)}if(window.Lyte){var n=Lyte.Router.getRouteInstance();"crm.settings.section.telephony.marketplace"!==n.transition.target||document.getElementById("zpbsetup")||n.refresh()}window.callbackZPB&&callbackZPB()}}},PB.loadSetup=function(e,t,n){if("undefined"==typeof ZPB){var i=document.createElement("script");i.src=PB.jsurl+"/pbone.js",i.onload=function(){ZPB.initPlatform(PB.serviceData)},document.head.appendChild(i)}var a=document.createElement("iframe"),r=document.location.origin,o="0";if(PB.serviceData&&PB.serviceData.serviceData&&PB.serviceData.serviceData.planId&&(o=PB.serviceData.serviceData.planId),void 0!=PB.serviceData.bundleService&&""!=PB.serviceData.bundleService){if("ZohoOne"==PB.serviceData.bundleService&&"ZohoOne"!=PB.serviceData.serviceName){var s=document.referrer;window.location!=window.parent.location&&document.referrer&&(s="https://"+(s=(s=document.referrer.split("https://"))[1].substr(0,s[1].indexOf("/")))),r=window.location!=window.parent.location?s+","+document.location.origin:document.location.origin}a.setAttribute("src",PB.server+"/phonebridge/viewcomponent/providers?frameorigin="+r+"&target="+PB.target+"&serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&bundleService="+PB.serviceData.bundleService+"&bundleOrgId="+PB.serviceData.bundleOrgId+"&planId="+o)}else a.setAttribute("src",PB.server+"/phonebridge/viewcomponent/providers?frameorigin="+r+"&target="+PB.target+"&serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&planId="+o);if(a.setAttribute("id","zpbsetup"),a.setAttribute("name","zpbsetup"),a.style.cssText="border: none;width: 100%",a.style.height=e+"px",document.location.origin.includes("bigin")){var c=document.createElement("div");c.id="loadingDivIblt",c.style=" position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 800; background: #23ae73; transform: translateX(100%); overflow: hidden; animation: shift-rightwards 1.5s ease-in-out infinite; animation-delay: .8s; ",document.getElementById(t).appendChild(c)}var d={action:"setupPageReady",serviceID:PB.serviceData.serviceId,serviceName:PB.serviceData.serviceName,serviceData:PB.serviceData.serviceData,bundleService:PB.serviceData.bundleService,bundleOrgId:PB.serviceData.bundleOrgId};if(a.onload=function(){if(document.location.origin.includes("bigin"))try{document.getElementById("phoneSetup").removeChild(document.getElementById("loadingDivIblt"))}catch(e){}if(ZPB.sendMessage("zpbsetup",d),n){var e=null!=document.getElementById("pb_response")?document.getElementById("pb_response").value:"success";n(e)}},!t)return a;document.getElementById(t).textContent="",document.getElementById(t).appendChild(a)},PB.isIntegrationEnabled=function(){return PB.integEnabled},PB.isIntegrationEnabledinCurrentOrg=function(){return"D_ORG"===PB.integRest},PB.isDefaultIntegrationEnabled=function(){return"D_ORG"===PB.integRest},PB.getPhoneBridgeContainer=function(){return void 0!==PB.serviceData&&PB.serviceData.zpbContainerId?document.getElementById(PB.serviceData.zpbContainerId):"undefined"!=typeof WebMessanger&&WebMessanger.getPhoneBridgeContainer?WebMessanger.getPhoneBridgeContainer():null},null!==PB.getPhoneBridgeContainer()&&(PB.getPhoneBridgeContainer().style.visibility="hidden"),PB.enableSMS=function(e){PB.target="inbuiltSMS",PB.loadSetup(500,"pbSmsSetup",e)};