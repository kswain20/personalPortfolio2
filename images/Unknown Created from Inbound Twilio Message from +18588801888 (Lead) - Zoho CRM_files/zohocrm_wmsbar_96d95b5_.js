var crmNTCWms={handleMessage:function(t){if(SalesSignalsWrapper.isSignalIFrameOpen)SalesSignals.handleMessage(t);else{var i=t.notification;crmNTCGlobal.incrNotificationsCount(),crmNTCGlobal.updateNotificationCount(),crmNTCWms.prependGlobalNotification(i)}},prependGlobalNotification:function(t){var i=crmNTCGlobal.convert(t);if(0!=$("#notifications #notificationGroupList").length){var o=Handlebars.templates.notificationGroups(i);$(o).hide().prependTo("#notifications #notificationGroupList").slideDown("slow"),thirdPartyUtils.bindPerfectScrollUpdate("#notificationGrpList")}else $("#notificationList").html(Handlebars.templates.globalSignal(i)).removeClass("pR oH")},updateEntityStatus:function(){var t=$(".ntc-detail-foot-chat");if("object"==typeof CrmTracking&&CrmTracking.isSalesiqUser&&$("#notificationList #notificationGroupList").length>0)for(var i=$(".ntc-entity-group"),o=i.length,n=0;n<o;n++){var e,a=i.eq(n),s=a.data("ntc-entityid");if(crmNTCGlobal.isEntityOnline(s))a.find(".ntc-pic").addClass("ntc-online"),a.find(".ntc-chat-now").removeClass("dN"),void 0!==(e=$("#ntcBusinessCard"+s))&&e.is(":visible")&&(e.find(".ntc-pic").addClass("ntc-online"),e.find(".ntc-bc-chat").addClass("active"),t.show());else a.find(".ntc-pic").removeClass("ntc-online"),a.find(".ntc-chat-now").addClass("dN"),void 0!==(e=$("#ntcBusinessCard"+s))&&e.is(":visible")&&(e.find(".ntc-pic").removeClass("ntc-online"),e.find(".ntc-bc-chat").removeClass("active"),t.hide())}},resetBellCount:function(){crmNTCGlobal.live_global_notifications_count=0,crmNTCGlobal.updateNotificationCount()},updateSignalsCount:function(t){t.signals_count?crmNTCGlobal.signals_count=t.signals_count:crmNTCGlobal.signals_count=0,t.feeds_count&&(t.feeds_count<0&&(t.feeds_count=0),crmNTCGlobal.feeds_count=t.feeds_count),crmNTCGlobal.live_global_notifications_count=t.live_ntc_count,crmNTCGlobal.updateNotificationCount()},markAsRead:function(t){var i=t.entityId,o=t.ntc_ids.length;$("[data-ntc-entityId="+i+"]").find(".notificationgrpListRow").addClass("ntc-visited"),t.signals_count=crmNTCGlobal.signals_count-o,crmNTCWms.updateSignalsCount(t)},markAllAsRead:function(){$(".notificationgrpListRow").addClass("ntc-visited")}};!wmsBarInfo||Crm.isHeadless&&!wmsBarInfo.fromGameScope||wmsBarInfo.fromOutlook||wmsBarInfo.fromSalesSignal?wmsBarInfo&&(wmsBarInfo.fromOutlook||wmsBarInfo.fromSalesSignal)&&networkUtils.loadFeatureScripts([wmsBarInfo.wmsJSUrl],(function(){if(networkUtils.loadFeatureScripts(["zohocrm_chat.js","zohocrm_callReminder.js"],(function(){initiateWMS()}),!0),wmsLoaded=!0,wmsBarInfo.isAccountNotNull){var t=$("#subvalue_ACCOUNTID");t.html(wmsBarInfo.accName),t.attr("data-params",'{"lookback":"","module":"","id":""}'),t.data("params").id=wmsBarInfo.accId}var i={};i.entityId=wmsBarInfo.entityId,i.module=wmsBarInfo.module,i.fromAddr=wmsBarInfo.email,i.toAddr=wmsBarInfo.userEmail,i.rightPanelSource="outlook",wmsBarInfo.fromOutlook&&$$rightPanel.getRightPanel(i)}),!0):(wmsBarInfo.fromFooter&&networkUtils.loadFeatureScripts(wmsBarInfo.featureScript,void 0,!0),Lyte.injectResources([wmsBarInfo.wmsJSUrl,wmsBarInfo.wmsCSSUrl],void 0,(function(){networkUtils.loadFeatureScripts(["zohocrm_chat.js","zohocrm_callReminder.js"],(function(){initiateWMS()}),!0),wmsBarInfo.fromGameScope&&$(".remainder-notifi").hide(),wmsLoaded=!0;var t=$L("#gamenotification").is(":visible");WmsUIImpl.UIReady=function(){if(thirdPartyUtils.bindSelect2("#ldChatMultiplePortalSel"),wmsBarInfo.isLiveDeskEnabled&&Object.keys(wmsBarInfo.userScreenVsPortalJson).length>0)try{CrmTracking.setServerTimeDiff(wmsBarInfo.setServerTimeDiff),CrmTracking.userPortalsInfo=wmsBarInfo.userScreenVsPortalJson,CrmTracking.populateUserPortalsDD(),CrmTracking.initNotification()}catch(t){murphy.error(t)}if(wmsBarInfo.fromFooter){if(Crm.userDetails.isChatbotEnabled=wmsBarInfo.isChatbotEnabled,showRecentIteminChatBar(),CTIAPI.chatBarCheck(),wmsBarInfo.diNotificationEnabled&&wmsBarInfo.isSkyDeskDepLoc&&($("#di-notification-icon").css("display","block"),CrmIntelligence.checkAlertStatus()),wmsBarInfo.isTwilioTelephonyUser&&wmsBarInfo.isTelephonyConfigured){var i=twilioConfigDetails.currentStatus||wmsBarInfo.telephonyUserStatus;TwilioConf.changeStatusIcon(i)}else wmsBarInfo.isAWSTelephonyUser&&wmsBarInfo.lilyUINotify&&wmsBarInfo.lilyUINotify.lilyLogin&&($("#lily_status_img").attr("onclick","lilyUINotify.showOrHideAllStatuses(true)"),lilyUINotify.setCurrentStatus());wmsBarInfo.isNotClientPortalUser&&Crm.userDetails.stickiesRemainderCount>0&&($("#sticky-notification-count").text(Crm.userDetails.stickiesRemainderCount).show(),isLoadedInCRMPlusIFrame()&&CrmPlusImpl.trigger("setNotificationCount",["stickynotes",Crm.userDetails.stickiesRemainderCount]));try{"undefined"!=typeof WidgetHandler&&(WidgetHandler.Telephony.render(),WidgetHandler.StandAlone.render())}catch(t){var o=console;o.log("Widget initialization failed, Error log printed below"),o.error(t)}!Crm.userDetails.DONT_SHOW_MOTIVATOR_TRYNOW&&"true"===Crm.userDetails.isMotivatorEarlyAccessGiven&&t&&Lyte.Component.render("gamescope-trynow-callout",{showCallout:!0},"body")}}})));