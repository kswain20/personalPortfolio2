var CrmPlusImpl={moduleData:" ",searchFilterModules:"",search:{showAutoSuggestView:function(e){$("#gsearchTextBox")[0]?CrmPlusImpl.performSearchAction(e):(renderingUtils.triggerEvent("click",$("#topbandSearchIcon")),setTimeout((function(){CrmPlusImpl.performSearchAction(e)}),0))},hideAutoSuggestView:function(){$(".primarySearchList").hide()}},performSearchAction:function(e){$("#gsearchTextBox").val(e);var t=$("input#gsearchTextBox");null!=t.data("ui-autocomplete")&&(t.autocomplete("enable"),t.autocomplete("search",e),t.autocomplete("widget").addClass("crmplusMainSearch"))},setup:{show:function(){"undefined"==typeof crmSetup?networkUtils.loadFeatureScripts(["zohocrm_setup.js"],(function(){Lyte.Router.getRouteInstance().transitionTo("crm.settings.index")})):Lyte.Router.getRouteInstance().transitionTo("crm.settings.index")},hide:function(e){" "!=e&&null!=e||(e="Home"),Lyte.Router.getRouteInstance().transitionTo("crm.tab.module",e)}},handleUIChange:function(){$("#mainMenuTabDiv").addClass("mainMenuTabDiv"),$("#ThemesContainer").hide(),$("body").addClass("zcrmInsideCRMPlus")},selectModule:function(e){$("#crmAddEmailPop").length||($L("crm-tab .lyteItem[data-zcqa='tab_"+e+"']").e[0].click(),crmplusImplTriggerActions("selectEntity",["module",e]))},handleDraftMailIcon:function(e){CrmPlusImpl.trigger("sendCommonUIElements",["chatBarNotification",{zia:!0,reminder:!0,recent_items:!0,stickynotes:!0,visitors_online:!0,ziachatbot:!0,mailIcon:e}])},selectDepartment:function(e){e="alltabgroups"===e?"0":e;var t=Crm.getCrmBasePath()+"/CustomizeTabGroup.do",i="action=updateMyTabGroup&tabGroupId="+e+"&"+csrfParamName+"="+encodeURIComponent(csrfToken);(new crmRequestPool).initiate({action:t,type:"POST",data:i,success:function(){Utils.windowLocationReload()}})},showCreateDepartmentView:function(e){e?showCustomizePopup("tabGroupList","popup"):showCustomizePopup("createTabGroup","create")},showCreateCustomModuleView:function(){"undefined"==typeof crmSetup?networkUtils.loadFeatureScripts(["zohocrm_setup.js"],(function(){Lyte.Router.getRouteInstance().transitionTo("crm.settings.section.modules.index-modules.create-module")})):Lyte.Router.getRouteInstance().transitionTo("crm.settings.section.modules.index-modules.create-module")},selectOption:function(e){if("whatsNew"==e){var t=RebrandLinkUtil.getProperty("COB_WTASNEWLINK");networkUtils.openUrl(t,null,null)}else"setup"==e?"undefined"==typeof crmSetup?networkUtils.loadFeatureScripts(["zohocrm_setup.js"],(function(){Lyte.Router.getRouteInstance().transitionTo("crm.settings.index")})):Lyte.Router.getRouteInstance().transitionTo("crm.settings.index"):"OtherCRMOrganizationsLink"==e&&Crm.openOrganizationsPageInNewTab("crmplus_profile_menu")},showNotificationDialog:function(e,t){if(!$("#crmAddEmailPop").length)switch(LytePopup.components.length>0&&LytePopup.closePopup(),t){case"general":crmNTCGlobal.renderGlobalNotification();break;case"calendar":crmCalendar.crmCalposition=e,document.getElementById("leftPanelCalendarP").ltProp({show:!0,wrapperClass:"popCal crmTopMenuCalender"}),hideMenu(event);break;case"gamescope":crmplusImplTriggerActions("hideTopBar"),GameLoad.loadMainPage();break;case"salesmotivator":networkUtils.openUrl(Crm.getCrmBasePath()+"/gamification/home");break;case"ziachatbot":constructChatbotDiv();break;case"mailbox":showRecentMails();break;case"zia":CrmIntelligence.getZiaNotificationSummary(event,this);break;case"stickynotes":crmStickies.viewStickyNewNote(this);break;case"telephonyWidget":WidgetHandler.Telephony.toggle();break;case"mailIcon":EmailComposeUtil.restoreComposePopup(),CrmPlusImpl.handleDraftMailIcon(!1);break;case"recent_items":refreshRecentItem1(),slidelt();break;case"reminder":Activities.showHideRemainder();break;case"visitors_online":CrmTracking.maximizePop()}},hideNotificationDialog:function(e){if(!$("#crmAddEmailPop").length)switch(e){case"general":crmNTCGlobal.closeGlobalNotifications();break;case"mailbox":var t=$("#recentMailsDiv");t.is(":visible")&&t.hide();break;case"calendar":LytePopup.components.length>0&&LytePopup.closePopup(),document.getElementById("leftPanelCalendarP").ltProp("show",!1);var i=$("#leftPanelCalendarP");i.is(":visible")&&i.hide();break;case"zia":CrmIntelligence.hideDiNotification();break;case"ziachatbot":constructChatbotDiv();break;case"stickynotes":crmStickies.hideStickiesLayer();break;case"recent_items":refreshRecentItem1(),slidelt();break;case"reminder":Activities.showHideRemainder();break;case"visitors_online":CrmTracking.maximizePop()}},showAddRecordView:function(e){$("#crmAddEmailPop").length||("Events"==e?Events.globalCreate(event,"quickcreate"):"Calls"==e?qCreateCall.createQCForm(event,"crmplus-qc"):"CustomModule5006"==e||"CustomModule5007"==e?Lyte.Router.getRouteInstance().transitionTo("crm.tab.module.create",e):"Appointments"==e?Events.globalCreate(event,"listview","Appointments"):Lyte.Router.getRouteInstance().transitionTo("crm.tab.module.create",e))},getDepartmentList:function(){var e=[],t=Crm.getCrmBasePath()+"/CustomizeTabGroup.do?action=showTabList";(new crmRequestPool).initiate({action:t,type:"GET",success:function(t){for(var i=t.length,n=0;n<i;n++){(o={}).key=t[n].tabGroupId,o.label=t[n].tabGroupName,e.push(o)}var o;(o={key:"alltabgroups"}).label=I18n.getMsg("crm.tabgroup.label.AllAccessibleTabs"),e.push(o),crmplusImplTriggerActions("modifyUI",["department",{list:e}])}})},getSearchFilters:function(){var e=Crm.getCrmBasePath()+"/CustomizeTabGroup.do?action=getSearchModulelist&setDefaultFilter=false";(new crmRequestPool).initiate({action:e,type:"GET",success:function(e){crmplusImplTriggerActions("setSearchFilters",[e])}})},getCurrentDefaultFilters:function(){var e=Crm.getCrmBasePath()+"/CustomizeTabGroup.do?action=getSearchModulelist&setDefaultFilter=true";(new crmRequestPool).initiate({action:e,type:"GET",success:function(e){crmplusImplTriggerActions("setDefaultFilters",[e])}})},triggerSearch:function(e){var t=e.searchString;if("global-search"!==Lyte.Router.getRouteInstance().routeName||200===Lyte.Router.getRouteInstance().transition.state||void 0===Lyte.Router.getRouteInstance().getQueryParams().searchword||Lyte.Router.getRouteInstance().getQueryParams().searchword!==t){var i=e.filter,n=i&&i.module;null!=n&&" "!=n||(n="AllEntities");for(var o="",a=n.length,r=0;r<a;r++)o=0==r?n[r]:o+","+n[r];CrmPlusImpl.searchFilterModules=n,crmNavig.removeFeaturCacheObj("gsearch"),Lyte.Router.getRouteInstance().transitionTo("crm.global-search","",{searchword:t,sModules:o})}},closeSearchView:function(){adSearchClose(),null!=$("input#gsearchTextBox").data("ui-autocomplete")&&$(".primarySearchList").hide()},showDialog:function(e){"phonelogin"==e?"AWSlily"==CTIAPI.CTI.ctiname&&lilyUINotify.lily_config_show_login():"phonepreferences"==e&&("AWSlily"==CTIAPI.CTI.ctiname?lilyUINotify.showPreferences():"twilio"==CTIAPI.CTI.ctiname&&TwilioConf.showPreferences())},updatePhoneAgentStatus:function(e){if(lilyAgentBasicDetails.statusKeyFnsMap.hasOwnProperty(e)){var t=lilyAgentBasicDetails.statusKeyFnsMap[e];lilyActions.setCurrentState(t)}},showUsersTab:function(e){"setup"===e&&Lyte.Router.getRouteInstance("crm.settings.section.users").refresh({refreshTemplate:!0})},profilepanel:{select_appsAddonsLink:function(e){var t;"android"===e?t="CRM_ANDROID_APP":"ios"===e&&(t="CRM_IOS_APP");var i=RebrandLinkUtil.getProperty(t);""!==i&&networkUtils.openUrl(i,"_blank","")}},showIntegConfiguration:function(e){Lyte.Router.getRouteInstance().refresh()},isLoadedInCrmplus:function(){return!("undefined"==typeof CrmPlusLib||!CrmPlusLib.isLoadedInCrmplusFrame)},trigger:function(e,t){if("undefined"!=typeof CrmPlusLib)if(void 0!==(n=CrmPlusLib[e])&&"function"==typeof n)n.apply(CrmPlusLib,t);else if("undefined"!=typeof CrmPlusLibUtil){var i="CrmPlusLib."+e;if(CrmPlusLibUtil.callByMethodName)CrmPlusLibUtil.callByMethodName(i,t);else if(CrmPlusLibUtil.stringToFunctionReference){var n;(n=CrmPlusLibUtil.stringToFunctionReference(i))&&"function"==typeof n&&n.apply(null,t)}}}};CrmPlusImpl.serviceView={show:function(e,t){if("extensionView"==e)"undefined"==typeof crmSetup?networkUtils.loadFeatureScripts(["zohocrm_setup.js"],(function(){Lyte.Router.getRouteInstance().transitionTo("crm.settings.section.extensions.zoho-extensions.finance-suite").data={isCrmPlusFrame:!0,dKey:e,dParams:t}})):Lyte.Router.getRouteInstance().transitionTo("crm.settings.section.extensions.zoho-extensions.finance-suite").data={isCrmPlusFrame:!0,dKey:e,dParams:t};else if("analytic_dashboard"==e)if("undefined"==typeof CrmAnalytics&&networkUtils.loadFeatureScripts(["zohocrm_analytics.js",networkUtils.getI18nJSUrl("dashboard")],(function(){CrmAnalytics.init()})),0===$("#homePageHeader").length){var i=Lyte.Router.getRouteInstance();if(!(i&&i.transition&&"crm.tab.dashboards.view"===i.transition.info.route&&i.transition.info.dynamicParams&&i.transition.info.dynamicParams[0]===t.key))return Lyte.Router.transitionTo({route:"crm.tab.dashboards.view",dynamicParams:[t.key]});i.refresh()}else CrmAnalytics.loadComponents(event,this,{id:t.key});else"dashboard_creation"==e&&("undefined"==typeof CrmAnalytics?networkUtils.loadFeatureScripts(["zohocrm_analytics.js",networkUtils.getI18nJSUrl("dashboard")],(function(){CrmAnalytics.init(),CrmAnalytics.createNewDashboard()})):(CrmAnalytics.init(),CrmAnalytics.createNewDashboard()))}};