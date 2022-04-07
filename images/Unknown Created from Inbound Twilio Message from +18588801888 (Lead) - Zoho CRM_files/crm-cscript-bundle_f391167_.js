Lyte.Component.register("crm-cscript-record-view",{_template:'<template tag-name="crm-cscript-record-view" class="cscriptRecordWrapper"> <template is="if" value="{{expHandlers(is_setup,\'&amp;&amp;\',expHandlers(selected_index,\'===\',undefined))}}"><template case="true"> <div class="aligncenter greyText f13 selectPageLabel_cs"> {{getI18n(\'crm.cscript.plsselectpage\')}} </div> </template><template case="false"><template is="if" value="{{expHandlers(expHandlers(snippets,\'&amp;&amp;\',expHandlers(snippets.length,\'>\',0)),\'||\',expHandlers(expHandlers(is_loading,\'===\',true),\'&amp;&amp;\',page_uuid))}}"><template case="true"> <div class="pageEventSBox clearFix"> <lyte-search id="cscript-search-element" lt-prop-disabled="{{is_reorder_mode}}" data-zcqa="snippetSearch" class="crmBoxSearchInput" lt-prop-class="scriptSearchBox_cs" lt-prop-maxlength="30" lt-prop-query-selector="{&quot;scope&quot;:&quot;.snipParentScope&quot;,&quot;search&quot;:&quot;.csriptName_cs&quot;,&quot;target&quot;:&quot;.reorderBlock1&quot;, &quot;related&quot;:&quot;.snippetContainer&quot;}" lt-prop-width="240px" lt-prop-placeholder="{{getI18n(\'com.cscript.searchevent\')}}" lt-prop-appearance="box" on-search="{{method(\'onSearch\')}}" lt-prop-close-icon="true"></lyte-search> <template is="if" value="{{expHandlers(expHandlers(is_ro_mode,\'!\'),\'&amp;&amp;\',expHandlers(expHandlers(is_proxy,\'&amp;&amp;\',expHandlers(is_setup,\'!\')),\'!\'))}}"><template case="true"> <template is="if" value="{{expHandlers(is_reorder_mode,\'!\')}}"><template case="true"> <lyte-button data-zcqa="snippetAddScriptBtn" class="fR mR0" lt-prop-style="border-radius:5px;" onclick="{{action(\'choose_event\')}}" lt-prop-disabled="{{expHandlers(is_add_enabled,\'!\')}}" lt-prop-tooltip-config="{ &quot;position&quot;: &quot;bottomleft&quot; }" lt-prop-title="{{expHandlers(expHandlers(expHandlers(is_add_enabled,\'!\'),\'&amp;&amp;\',expHandlers(is_loading,\'!\')),\'?:\',\'You can add a maximum of 30 snippets in a page\',\'\')}}"> <template is="registerYield" yield-name="text">{{getI18n(\'com.cscript.addscript\')}}</template> </lyte-button> <template is="if" value="{{is_reorder_enabled}}"><template case="true"> <lyte-button data-zcqa="snippetReorderBtn" class="fR" lt-prop-style="border-radius:5px;" onclick="{{action(\'reorder_event\')}}"> <template is="registerYield" yield-name="text"><div class="dB">{{getI18n(\'crm.button.new.reorder\')}}</div></template> </lyte-button> </template></template> </template><template case="false"> <lyte-button data-zcqa="snippetReorderCancelBtn" class="fR" lt-prop-style="border-radius:5px;" onclick="{{action(\'reorder_event_cancel\')}}"> <template is="registerYield" yield-name="text">{{getI18n(\'crm.button.cancel\')}}</template> </lyte-button> <lyte-button data-zcqa="snippetReorderSaveBtn" class="fR mR10" lt-prop-appearance="primary" lt-prop-disabled="{{expHandlers(is_reordered,\'!\')}}" lt-prop-style="border-radius:5px;" onclick="{{action(\'reorder_event_save\')}}"> <template is="registerYield" yield-name="text">{{getI18n(\'crm.setup.editor.btn.save\')}}</template> </lyte-button> </template></template> </template></template> </div> <div class="w100per recordTable_cs pR"> <div class="recordTableHeader_cs clearFix"> <div class="w40per dIB fL">{{getI18n(\'Name\')}}</div> <div class="w20per dIB fL">{{getI18n(\'Size\')}}</div> <div class="w33per dIB fL">{{getI18n(\'com.cscript.lastmodified\')}}</div> <div class="w5per dIB fL">{{getI18n(\'Status\')}}</div> </div> <template is="if" value="{{expHandlers(is_loading,\'===\',true)}}"><template case="true"> <div class="snipParentScope h300"> <div class="ks_loading_new pA zI1"></div> </div> </template><template case="false"> <div class="snipParentScope"> <template is="for" items="{{snippets}}" item="item" index="index"> <div class="snippetContainer mB20 {{if(expHandlers(expHandlers(currentSortSection,\'>=\',0),\'&amp;&amp;\',expHandlers(currentSortSection,\'!=\',index)),\'op3 eventNone\',\'\')}}"> <div class="eventInfo_cs"> <template is="for" items="{{item.key}}" item="it" index="i"> <span class="crm-font-bold">{{it}}</span> <template is="if" value="{{expHandlers(expHandlers(i,\'+\',1),\'!==\',item.key.length)}}"><template case="true"> <span class="dotLabel vam"></span> </template></template></template> </div> <ul class="recordViewSorter recordViewSorter_{{index}}"> <template is="for" items="{{item.value}}" item="i" index="index2"> <li class="reorderBlock1 pR {{expHandlers(is_reorder_mode,\'?:\',\'cMove\',\'\')}}" data-uuid="{{i.uuid}}" data-sort-section="{{index}}"> <div class="cscriptRecord_cs clearFix {{if(ifEquals(highlight_uuid,i.uuid),\'cscriptAuditHighlight\',\'\')}}"> <span class="csriptName_cs"> <template is="if" value="{{i.script_event.child}}"><template case="true"> <span class="dNImp">{{i.script_event.child.label}}</span> </template></template> <span class="dNImp">{{item.key[0]}}</span> <template is="if" value="{{is_reorder_mode}}"><template case="true"> <span class="dragHoldIcon_cs_new zcrm_svgIcons"></span> </template></template> <span class="dIB csNamelabel">{{i.name}}</span> <span data-zcqa="snippetShowMoreOptionsBtn{{i.uuid}}" id="showButton" class="{{expHandlers(expHandlers(is_saving,\'||\',is_reorder_mode),\'?:\',\'cscriptVisibilityHidden\',\'\')}} csriptMoreOptions svgIcons" data-params="{&quot;uuid&quot;:&quot;{{i.uuid}}&quot;}"></span> </span> <span class="csriptSize_cs">{{formatBytesCeil(i.size)}}</span> <span class="csriptModifier_cs w33per"> <span class="userName_cs vam"> <template is="if" value="{{expHandlers(is_csez,\'!\')}}"><template case="true"><template is="if" value="{{i.modified_by}}"><template case="true"> <img src="{{getUserImageUrl(i.modified_by.id)}}" class="dIB vam cscriptLMImg" alt="-"> </template><template case="false"> <img src="{{getUserImageUrl(i.created_by.id)}}" class="dIB vam cscriptLMImg" alt="-"> </template></template></template></template> <div class="dIB mL8 vam"> <template is="if" value="{{i.modified_time}}"><template case="true"> <span class="defaultcursor dIB ellipsistext userNameTxt_cs" lt-prop-tooltip-config=" { &quot;position&quot; : &quot;top&quot; } " lt-prop-title="{{dateTimeUserFormatFromISOFormat(i.modified_time)}}">{{i.modified_by.name}}</span> </template><template case="false"> <span class="defaultcursor dIB ellipsistext userNameTxt_cs" lt-prop-tooltip-config=" { &quot;position&quot; : &quot;top&quot; } " lt-prop-title="{{dateTimeUserFormatFromISOFormat(i.created_time)}}">{{i.created_by.name}}</span> </template></template> </div> </span> </span> <span class="cscriptStatus_cs"> <lyte-checkbox lt-prop-disabled="{{if(or(ifEquals(is_ro_mode,true),ifEquals(is_saving,true),ifEquals(is_reorder_mode,true)),&quot;true&quot;,&quot;false&quot;)}}" data-zcqa="snippetToggleBtn{{i.uuid}}" lt-prop-type="switch" lt-prop-checked="{{unbound(i.active)}}" on-changed="{{method(\'toggleStatus\',this,i.uuid)}}"></lyte-checkbox> </span> </div> </li> </template> </ul> </div> </template> <template is="if" value="{{no_result}}"><template case="true"> <div class="aligncenter greyText f13 noFoundLabel_cs"> {{getI18n(\'crm.skyeye.search.no.results.found\')}} </div> </template></template> </div> </template></template> </div> <lyte-menu id="editDel_menu" lt-prop-yield="true" lt-prop-event="click" on-open="{{method(\'set_uuid\')}}" lt-prop-query="#showButton" lt-prop-tab-index="0" lt-prop-width="auto" lt-prop-height="auto" lt-prop-query-class="lyteMenuSelected" lt-prop-freeze="false" lt-prop-boundary="{&quot;top&quot;:&quot;300&quot;}"> <template is="registerYield" yield-name="yield"> <lyte-menu-body> <lyte-menu-item data-value="edit" data-zcqa="snippetEditBtn" onclick="{{action(\'edit_option\')}}"><lyte-menu-label>{{getI18n(\'Edit\')}}</lyte-menu-label></lyte-menu-item> <lyte-menu-item data-value="delete" data-zcqa="snippetDeleteBtn" onclick="{{action(\'delete_option\')}}"><lyte-menu-label>{{getI18n(\'Delete\')}}</lyte-menu-label></lyte-menu-item> </lyte-menu-body> </template> </lyte-menu> <lyte-alert id="delete_alert" lt-prop-show="{{delete_alert_show}}" lt-prop-wrapper-class="scriptAlert" lt-prop-yield="true" lt-prop-top="0" lt-prop-show-close-button="false" on-accept="{{method(&quot;delete_script&quot;)}}" on-close="{{method(&quot;close_delete_alert&quot;)}}" lt-prop-buttons="[{&quot;type&quot;:&quot;reject&quot;,&quot;text&quot;:&quot;{{getI18n(&quot;crm.button.cancel&quot;)}}&quot;,&quot;appearance&quot;:&quot;default&quot;},{&quot;type&quot;:&quot;accept&quot;,&quot;text&quot;:&quot;{{getI18n(&quot;crm.button.yes.delete.it&quot;)}}&quot;,&quot;appearance&quot;:&quot;failure&quot; }]"> <template is="registerYield" yield-name="alert"> <lyte-alert-header>{{getI18n(\'com.cscript.delete.header\')}}</lyte-alert-header> <lyte-alert-content>{{getI18n(\'com.cscript.delete.confirm\')}}</lyte-alert-content> </template> </lyte-alert> </template><template case="false"><template is="if" value="{{expHandlers(expHandlers(snippets,\'&amp;&amp;\',expHandlers(snippets.length,\'===\',0)),\'&amp;&amp;\',expHandlers(is_loading,\'===\',false))}}"><template case="true"> <div class="aligncenter cScriptBtnLayer pA w100per"> <div class="noScriptTag">{{getI18n(\'com.cscript.noscript\')}}</div> <template is="if" value="{{expHandlers(is_proxy,\'!\')}}"><template case="true"> <lyte-button data-zcqa="snippetNewScriptBtn2" lt-prop-appearance="primary" class="mT15" onclick="{{action(\'choose_event\')}}"> <template is="registerYield" yield-name="text">{{getI18n(\'com.cscript.newscript\')}}</template> </lyte-button> </template></template> </div> </template></template></template></template></template></template> </template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"text",position:[1,1]}]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3]},{type:"if",position:[3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[0,0]}]},{type:"componentDynamic",position:[1]}]}},default:{}}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3]},{type:"registerYield",position:[3,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[3]}]}},default:{}}]}},default:{}},{type:"text",position:[3,1,1,0]},{type:"text",position:[3,1,3,0]},{type:"text",position:[3,1,5,0]},{type:"text",position:[3,1,7,0]},{type:"attr",position:[3,3]},{type:"if",position:[3,3],cases:{true:{dynamicNodes:[]},false:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"text",position:[1,0]},{type:"attr",position:[3]},{type:"if",position:[3],cases:{true:{dynamicNodes:[]}},default:{}}]},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1]},{type:"for",position:[1,3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,1,1,1]},{type:"if",position:[1,1,1,1],cases:{true:{dynamicNodes:[{type:"text",position:[1,0]}]}},default:{}},{type:"text",position:[1,1,1,3,0]},{type:"attr",position:[1,1,1,5]},{type:"if",position:[1,1,1,5],cases:{true:{dynamicNodes:[]}},default:{}},{type:"text",position:[1,1,1,7,0]},{type:"attr",position:[1,1,1,9]},{type:"text",position:[1,1,3,0]},{type:"attr",position:[1,1,5,1,1]},{type:"if",position:[1,1,5,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,1,5,1,3,1]},{type:"if",position:[1,1,5,1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]}]}},default:{}},{type:"attr",position:[1,1,7,1]},{type:"componentDynamic",position:[1,1,7,1]}]}]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"text",position:[1,1]}]}},default:{}}]}},default:{}},{type:"attr",position:[5]},{type:"registerYield",position:[5,1],dynamicNodes:[{type:"attr",position:[1,1]},{type:"text",position:[1,1,0,0]},{type:"componentDynamic",position:[1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3]},{type:"text",position:[1,3,0,0]},{type:"componentDynamic",position:[1,3,0]},{type:"componentDynamic",position:[1,3]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[5]},{type:"attr",position:[7]},{type:"registerYield",position:[7,1],dynamicNodes:[{type:"text",position:[1,0]},{type:"componentDynamic",position:[1]},{type:"text",position:[3,0]},{type:"componentDynamic",position:[3]}]},{type:"componentDynamic",position:[7]}]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,0]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[1]}]}},default:{}}]}},default:{}}]}},default:{}}]}},default:{}}],_observedAttributes:["is_csez","no_result","is_proxy","is_force_reload","snippets","page_uuid","cached_page_uuids","delete_alert_show","is_ro_mode","snippet_uuid","highlight_uuid","is_loading","is_saving","is_setup","is_reordered","is_reorder_enabled","is_add_enabled","currentSortSection"],data:function(){return{is_csez:Lyte.attr("boolean",{default:document.domain.indexOf("csez.zohocorpin.com")>-1}),no_result:Lyte.attr("boolean",{default:!1}),is_proxy:Lyte.attr("boolean",{default:!1}),is_force_reload:Lyte.attr("boolean",{default:!1}),snippets:Lyte.attr("array"),page_uuid:Lyte.attr("string"),cached_page_uuids:Lyte.attr("object",{default:new Set}),delete_alert_show:Lyte.attr("boolean"),is_ro_mode:Lyte.attr("boolean",{default:Crm.userDetails.ISROMODE}),snippet_uuid:Lyte.attr("string"),highlight_uuid:Lyte.attr("string"),is_loading:Lyte.attr("boolean",{default:!0}),is_saving:Lyte.attr("boolean"),is_setup:Lyte.attr("boolean",{default:!1}),is_reordered:Lyte.attr("boolean",{default:!1}),is_reorder_enabled:Lyte.attr("boolean",{default:!1}),is_add_enabled:Lyte.attr("boolean",{default:!1}),currentSortSection:Lyte.attr("number",{default:-1})}},didConnect:function(){const e=this;window.addEventListener("resize",this.update_height),e.setData("cscript_save_listener",Lyte.addEventListener("cscript_save",(t=>{t.page_uuid!==e.getData("page_uuid")?e.setData({page_uuid:t.page_uuid,selected_index:store.peekAll("cscript").findIndex((e=>e.uuid===t.page_uuid))}):e.modify_listview(t.snippet_uuid,t.is_edit?"update":"add"),!e.getData("is_setup")&&CScript.Engine.Restart(),e.setData("highlight_uuid",t.snippet_uuid)}))),e.setData("cscript_not_found_listener",Lyte.addEventListener("cscript_not_found",(t=>{e.delete_script(!0,t.snippet_uuid)})))},didDestroy:function(){window.removeEventListener("resize",this.update_height),Lyte.removeEventListener(this.getData("cscript_save_listener")),Lyte.removeEventListener(this.getData("cscript_not_found_listener"))},observe_page_uuid:async function(){this.populate_list_view()}.observes("page_uuid").on("init"),observe_highlight_uuid:function(){const e=this;e.getData("highlight_uuid")&&($(".snipParentScope").scrollTo(".cscriptRecord_cs.cscriptAuditHighlight",{duration:500}),setTimeout((function(){e.setData("highlight_uuid",void 0)}),4e3))}.observes("highlight_uuid").on("init"),observe_reorder:function(){const e=this,t=e.getData("snippets").length;e.getData("is_reorder_mode")&&(e.update_height(),e.reset_search());for(let i=0;i<t;i++)e.getData("is_reorder_mode")?$L(".recordViewSorter_"+i).sortable({containment:"parent",tolerance:"pointer",onDrag:function(t){e.setData("currentSortSection",t.dataset.sortSection)},onDrop:function(t,i,s,a,o){a!==o&&e.setData("is_reordered",!0),e.setData("currentSortSection",-1)}}):$L(".recordViewSorter_"+i).sortable("destroy")}.observes("is_reorder_mode"),get_sorted_snippets:function(e){const t=this,i=[],s=e.length>0&&CScript.Utils.get_config_by_apiname(e[0].cscript_page.definition_name);return e.sort(((e,t)=>e.precedence-t.precedence)).forEach((e=>{const a=t.get_event_info(e,s),o=i.findIndex((e=>e.event===a));-1===o?i.push({event:a,value:[e],key:a.split(",")}):(i[o].value.push(e),!t.getData("is_reorder_enabled")&&t.setData("is_reorder_enabled",i[o].value.length>1))})),i.sort(((e,t)=>e.event.localeCompare(t.event)))},delete_script:async function(e,t){const i=this;commonUtils.showHideLoadingDiv(!0);const s=store.peekRecord("cscript_snippets",t),a=i.get_event_info(s,CScript.Utils.get_config_by_apiname(s.cscript_page.definition_name));let o;try{o=e?s.$.deleteRecord():await s.$.destroyRecord("cscript_snippets")}catch(e){o=e}const n=store.peekRecord("cscript",i.getData("page_uuid")).consolidated_code_url,r=(await store.findRecord("cscript",i.getData("page_uuid"),{include_extra_details:!0}))[0],c=r&&r.snippet_count||0;r?i.modify_listview(t,"delete",a):store.deleteRecord("cscript",i.getData("page_uuid")),commonUtils.showHideLoadingDiv(!1),e||(o&&o.cscript_snippets?crmui.showMsgBand("success",I18n.getMsg("crm.auditlog.cscript.msg.delete"),4e3):crmui.showMsgBand("error",I18n.getMsg("crm.record.not.accessible.message.heading",I18n.getMsg("crm.setup.system.cscript")),2e3)),i.getData("is_setup")?Lyte.triggerEvent("cscript_delete",{snippet_uuid:t,snippet_count:c,page_uuid:i.getData("page_uuid")}):0===c?i.setData("page_uuid",void 0)||CScript.Engine.Restart():n!==r.consolidated_code_url&&CScript.Engine.Restart(),i.reset_search(),i.executeMethod("unset_uuid")},populate_list_view:async function(){const e=this;if(e.getData("page_uuid")){let t;e.setData({is_loading:!0,is_reorder_enabled:!1,is_add_enabled:!1});const i=store.peekRecord("cscript",e.getData("page_uuid"))||{};e.getData("cached_page_uuids").has(i.uuid)&&!e.getData("is_force_reload")?t=store.peekAll("cscript_snippets").filter((t=>t.cscript_page.uuid===e.getData("page_uuid"))):(t=await store.findAll("cscript_snippets",{page_uuid:e.getData("page_uuid")}),e.getData("cached_page_uuids").add(e.getData("page_uuid")),e.getData("is_force_reload")&&e.setData("is_force_reload",!1)),e.setData({is_add_enabled:t.length<30,is_proxy:!_cscript._definition,snippets:e.get_sorted_snippets(t),is_loading:!1}),e.update_height(),e.reset_search()}else e.setData({snippets:[],is_loading:!1,is_proxy:!_cscript._definition})},get_event_info:function(e,t){return[t.events[e.script_event.type].label,...e.script_event.child?[e.script_event.child.label]:[],e.script_event.event].join(",")},modify_listview:function(e,t,i){const s=this,a=store.peekRecord("cscript_snippets",e),o=i||s.get_event_info(a,CScript.Utils.get_config_by_apiname(a.cscript_page.definition_name));let n,r,c=0,p=!1,l=0;for(const[e,t]of this.getData("snippets").entries()){const i=t.value.length;t.event===o?(r=e,n=t):(p=i>1,r||(c=t.event.localeCompare(o)<0?e+1:c)),l+=i}switch(t){case"add":(n&&n.value||(n={event:o,key:o.split(",")})&&(n.value=[])).push(a),void 0!==r?Lyte.arrayUtils(this.getData("snippets"),"replaceAt",r,n):Lyte.arrayUtils(this.getData("snippets"),"insertAt",c,n),!this.getData("is_reorder_enabled")&&this.setData("is_reorder_enabled",n.value.length>1),this.getData("is_add_enabled")&&this.setData("is_add_enabled",l<29),s.update_height(),s.reset_search();break;case"update":n.value[n.value.findIndex((t=>e===t.uuid))]=a,Lyte.arrayUtils(this.getData("snippets"),"replaceAt",r,n),s.reset_search();break;case"delete":this.getData("is_reorder_enabled")&&!p&&this.setData("is_reorder_enabled",n.value.length>2),1===n.value.length?Lyte.arrayUtils(this.getData("snippets"),"removeAt",r,1):(n.value.splice(n.value.findIndex((t=>e===t.uuid)),1),Lyte.arrayUtils(this.getData("snippets"),"replaceAt",r,n)),!this.getData("is_add_enabled")&&this.setData("is_add_enabled",!0)}},update_record:async function(e,t){const i=this;e.$.set("active",!e.active);let s=await e.$.save();s&&s.uuid?(await store.findRecord("cscript",e.cscript_page.uuid),!i.getData("is_setup")&&CScript.Engine.Restart(),e.active&&await store.findRecord("cscript_snippets",t),crmui.showMsgBand("success",I18n.getMsg("crm.auditlog.cscript.msg."+(e.active?"enable":"disable")),2e3)):store.deleteRecord("cscript_snippets",t),i.setData("is_saving",!1),commonUtils.showHideLoadingDiv(!1)},update_height:function(){const e=document.querySelector("crm-cscript-record-view");if(e){const t=window.innerHeight;if(!0===e.getData("is_setup")){const e=$L(".csPageBlock").offset().top;$L(".snipParentScope").height(t-(e+165)),$L(".recordTable_cs").height(t-(e+127))}else $L(".snipParentScope").height(t-181),$L(".recordTable_cs").height(t-133)}},reset_search:function(){const e=$L("#cscript-search-element")[0];e&&e.setValue("")},methods:{toggleStatus:function(e,t){this.setData("is_saving",!0),commonUtils.showHideLoadingDiv(!0);const i=this;var s=store.peekRecord("cscript_snippets",t);s.active?i.update_record(s,t):fetch(s.content.source_code_url).then((function(e){const t=e.headers.get("content-type");if(!t||!t.includes("application/javascript"))throw new TypeError("Invalid Content Type");return e.text()})).then((function(e){try{const a=AsyncAwait.compile(e+"\n",{functionScope:!0,minify:!1,sourceFileName:`${Math.random().toString(36).substring(2,15)}-client-script.js`,prefix:"'use strict';",excludeList:_cscript._exclude_list.concat(store.peekRecord("cscript_snippets",t).script_event.arguments||[])});s.$.set("content",{async_code:a.code,source_map:a.map}),i.update_record(s,t)}catch(e){murphy.error(e),crmui.showMsgBand("error",I18n.getMsg("crm.cscript.codeerror"),4e3)}})).catch((function(){crmui.showMsgBand("error",I18n.getMsg("crm.record.not.accessible.message.heading",I18n.getMsg("crm.setup.system.cscript")),2e3)}))},delete_script:async function(){this.delete_script(!1,this.getData("snippet_uuid"))},render_create_popup:function(e,t,i,s,a){let o=document.querySelector("crm-cscript-create");Lyte.injectResources([networkUtils.returnDependencyFiles(["cscript/crm-cscript-create.css"],crmConstants.cssStaticPathForLyte)[0],networkUtils.returnDependencyFiles(["cscript/crm-cscript-create.js"],crmConstants.jsStaticPathForLyte)[0],networkUtils.returnDependencyFiles(["lytecombobox.js"],crmConstants.jsStaticPathForLyte)[0]],void 0,function(){o||(Lyte.Component.render("crm-cscript-create",{},"body"),o=document.querySelector("crm-cscript-create")),o.component.flush_all(),o.setData({is_addscript_mode:!0,selectors:e,selector_labels:t,category:i.category,selectors_list:s,page:i.unique_name,is_setup:a.getData("is_setup"),page_config:i,event_type_list:Object.keys(i.events).map((e=>({value:e,name:i.events[e].name}))),show_create_popup:!0})}.bind(this))},set_uuid:function(e){this.setData("snippet_uuid",JSON.parse(e.element.dataset.params).uuid)},unset_uuid:function(){this.setData("snippet_uuid",void 0)},onSearch:function(e){this.setData("no_result",0===e.length),this.getData("no_result")&&this.update_height()},close_delete_alert:function(){this.setData("delete_alert_show",!1)}},actions:{panel:function(e){$L("crm-cscript")[0].component.setData("cscriptPaneShow",e)},edit_option:async function(){const e=this,t=e.getData("snippet_uuid"),{definition_name:i,uuid:s,selectors:a}=store.peekRecord("cscript",e.getData("page_uuid")),{script_event:o,name:n,description:r}=store.peekRecord("cscript_snippets",t),c={};Object.keys(a).forEach((e=>{c[e]=a[e].id}));try{await Lyte.registeredMixins["crm-cscript-global-mixin"].addScript({page_unique_name:i,page_uuid:s,selector_info:c,event_info:o,snippet_info:{name:n,description:r,uuid:t}})}catch(e){return}finally{e.executeMethod("unset_uuid")}},delete_option:function(){this.setData("delete_alert_show",!0)},choose_event:async function(){let e;var t={},i={},s={},a=[];if(this.getData("page_uuid")){const n=store.peekRecord("cscript",this.getData("page_uuid"));e=CScript.Utils.get_config_by_apiname(n.definition_name),t=n.selectors;var o={};e.selectors.forEach((e=>{o[e.name]=e.label})),Object.keys(o).forEach((e=>{i[e]=t[e].id,s[e]=t[e].value,a.push({name:e,label:o[e]})}))}else{for(sel of(e=_cscript._definition,e.selectors)){var n,r=sel.key.split(":"),c=r[0],p=r[1],l=r[2];if("$dynamicParam"===c?n=Lyte.Router.getRouteInstance(p).transition.info.dynamicParams[l]:"$queryParam"===c?n=Lyte.Router.getRouteInstance().transition.info.queryParams[p]:"$transitionData"===c&&(n=Lyte.Router.getRouteInstance().transition.data[p]),!n)break;t[sel.name]={value:"",id:n,label:sel.label},i[sel.name]=n}let o=await Promise.all(Object.keys(i).map((t=>e.selectors.find((e=>e.name===t)).definition(i))));Object.keys(t).forEach(((e,i)=>{var n=t[e].id;s[e]=o[i].find((e=>e.value===n)).name,a.push({name:e,label:t[e].label})}))}this.executeMethod("render_create_popup",i,s,e,a,this)},reorder_event:function(){this.setData("is_reorder_mode",!0)},reorder_event_cancel:function(){this.setData({is_reorder_mode:!1,is_reordered:!1,snippets:this.get_sorted_snippets(store.peekAll("cscript_snippets").filter((e=>e.cscript_page.uuid===this.getData("page_uuid"))))})},reorder_event_save:async function(){commonUtils.showHideLoadingDiv(!0);let e={};document.getElementsByClassName("recordViewSorter").forEach((t=>{let i=1;t.children.forEach((t=>{e[t.dataset.uuid]=i++}))})),store.peekAll("cscript_snippets").filter((e=>e.cscript_page.uuid===this.getData("page_uuid"))).forEach((t=>t.$.set("precedence",e[t.uuid]))),await store.update("cscript_snippets","precedence",{page_uuid:this.getData("page_uuid")})&&(await store.findRecord("cscript",this.getData("page_uuid")),!this.getData("is_setup")&&CScript.Engine.Restart()),crmui.showMsgBand("success",I18n.getMsg("crm.label.changes.success"),2e3,""),this.setData({is_reorder_mode:!1,is_reordered:!1}),commonUtils.showHideLoadingDiv(!1)}}}),Lyte.Mixin.register("crm-cscript-global-mixin",{viewSnippets:function(e,t,i){if(CScriptComp){const s=CScript.Utils.get_config_by_apiname(e);_cscript._info=store.peekAll("cscript").filterBy(this.validate_selectors(s,t))[0],document.querySelector("crm-cscript").component.setData({cscriptTagShow:!1,available:Crm.userDetails.IS_CONFIRMED_IN_IAM&&Crm.userDetails.permissions.Crm_Implied_Advanced_Dev_Access,cscriptPaneShow:!0,page_uuid:_cscript._info?_cscript._info.uuid:_cscript._info,is_proxy:Lyte.Router.getRouteInstance().transition.target!==s.route_name}),document.querySelector("crm-cscript-record-view").component.setData({is_force_reload:i})}},getDxStaticPath:function(e){return`/crm/CRMClient/css/compiled-css/${"vs"===e?"default":"feature-black"}/${Crm.userDetails.RTL_ENABLED?"rtl":"ltr"}/`},renderEditor:function(e,t,i,s,a,o,n){if(!_cscript._is_preview_frame){let r=document.querySelector("crm-cscript-editor");const c=Crm.userDetails.CUSTOMIZE_INFO.cscript_editor&&JSON.parse(Crm.userDetails.CUSTOMIZE_INFO.cscript_editor);Lyte.injectResources([...networkUtils.returnDependencyFiles(["dx-editor/dx-editor.js","cscript/crm-cscript-editor.js"],crmConstants.jsStaticPathForLyte),networkUtils.returnDependencyFiles(["dx-editor/dx-editor-themeing.css"],this.getDxStaticPath(c&&c.theme))[0],networkUtils.returnDependencyFiles(["cscript/dx-editor-dep.css"],crmConstants.cssStaticPathForLyte)[0],...networkUtils.returnDependencyFiles([networkUtils.getI18nJSUrl("dxeditor"),networkUtils.getI18nJSUrl("cscript")],null)],void 0,async function(){let c;if(r||(Lyte.Component.render("crm-cscript-editor",{},"body"),r=document.querySelector("crm-cscript-editor")),r.setData({page_config:e,add_script_promise:n,is_dynamic_save:o,script_arguments:e.events[i.type].list.find((e=>e.event===i.event)).args,snippet_info:a,page_info:{uuid:s&&s.uuid,category:e.category,page:e.name,unique_name:e.unique_name,selectors:t},event_info:{event:i.event,child_label:e.events[i.type].child_label,type:{name:i.type,label:e.events[i.type].name},...i.child&&{child:{...i.child}}}}),r.setData("show",!0),a.temp_id&&o)c=_cscript._snippet_records[a.temp_id].content.source_code;else{let e;e=a.uuid?(await store.findRecord("cscript_snippets",a.uuid))[0].content.source_code_url:networkUtils.returnDependencyFiles(["devex/cscript-sample.raw.js"],crmConstants.jsStaticPathForLyte)[0];const t=await fetch(e),i=t.headers.get("content-type");i&&i.includes("application/javascript")?c=(await t.text()).replace("//$Id$",""):r.setData("deleted_alert_show",!0)}c&&r.setData({source_code:c,source_code_is_loaded:!0,original_source_code:c})}.bind(this))}},validate_selectors:function(e,t){const i={$route:e.route_name,definition_name:e.unique_name};for(const s of e.selectors){if(!t[s.name])throw new Error("Selectors mismatch for the page");i["$"+s.name]=t[s.name]}return i},validate_event_info:async function(e,t,i){if(!Object.keys(e.events).includes(t.type))throw new Error("Invalid event type: "+t.type);if(!e.events[t.type].list.map((e=>e.event)).includes(t.event))throw new Error("Invalid event : "+t.event);if(!t.child!=!e.events[t.type].child)throw new Error("Invalid event child : "+t.child);if(t.child&&t.child.id&&"function"==typeof e.events[t.type].child){let s=(await e.events[t.type].child(i)).find((e=>e.value===t.child.id));if(!s||!s.value)throw new Error("Invalid event child : "+t.child);t.child.label=s.name}},validate_snippet_record:function(e){if(!e||!e.temp_id||!_cscript._snippet_records[e.temp_id])throw new Error("Invalid snippet record");return _cscript._snippet_records[e.temp_id]},saveScript:async function(e,t){const i=this.validate_snippet_record(e),{rsc_delta:s,commit_message:a}=i,o=CScript.Utils.get_config_by_apiname(i.cscript_page.definition_name),n={};Object.keys(i.cscript_page.selectors).forEach((e=>n[e]=i.cscript_page.selectors[e].id)),t&&(i.script_event.child={id:t}),await this.validate_event_info(o,i.script_event,n),delete i.rsc_delta,delete i.commit_message;try{const t=(await store.create("cscript_snippets",i,{commit_message:a})).cscript_snippets[0].uuid,o=(await store.findRecord("cscript_snippets",t))[0].cscript_page.uuid,n=(await store.findRecord("cscript",o,{include_extra_details:"crm-cscript"===Lyte.Router.getRouteInstance().routeName&&0===s.length}))[0];return s.length>0&&(n.$.set("static_resources",s),await n.$.save(),await store.findRecord("cscript",o,{include_extra_details:"crm-cscript"===Lyte.Router.getRouteInstance().routeName})),delete _cscript._snippet_records[e.temp_id],{snippet_uuid:t,page_uuid:o}}catch(e){throw t}},addScript:async function(e,t){const i=this,{selector_info:s={},event_info:a={},snippet_info:o={},page_unique_name:n,page_uuid:r}=e,c=CScript.Utils.get_config_by_apiname(n);!t&&!o.uuid&&await i.validate_event_info(c,a,s);const p=r?store.peekRecord("cscript",r):store.peekAll("cscript").filterBy(i.validate_selectors(c,s))[0],l=p?null:await Promise.all(Object.keys(s).map((e=>c.selectors.find((t=>t.name===e)).definition(s))));return new Promise(((e,n)=>{i.renderEditor(c,c.selectors.map(((e,t)=>({...e,value:{id:s[e.name],label:p?p.selectors[e.name].value:l[t].find((t=>t.value===s[e.name])).name}}))),a,p,o,t,{resolve:e,reject:n})}))},momentFromNow:function(e){const t={seconds:{singular:I18n.getMsg("crm.schedules.justnow"),plural:()=>I18n.getMsg("crm.schedules.justnow")},minutes:{singular:I18n.getMsg("crm.schedules.minute.ago"),plural:e=>`${e} ${I18n.getMsg("crm.schedules.minutes.ago")}`},hours:{singular:I18n.getMsg("crm.schedules.hour.ago"),plural:e=>`${e} ${I18n.getMsg("crm.schedules.hours.ago")}`},days:{singular:I18n.getMsg("Yesterday"),plural:e=>`${e} ${I18n.getMsg("crm.label.days.ago")}`},months:{singular:I18n.getMsg("crm.label.checkintime.amonthago"),plural:e=>I18n.getMsg("crm.label.checkintime.monthsago",e)},years:{singular:I18n.getMsg("crm.label.checkintime.yearago"),plural:e=>I18n.getMsg("crm.label.checkintime.yearsago",e)}},i=$L.moment(e).fromNow();return 1===i.value?t[i.property].singular.toLowerCase():t[i.property].plural(i.value).toLowerCase()},build_json_tree:function(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};let i=Math.floor(9e4*Math.random())+1e4;const s=()=>"jsTree_"+i,a=e=>e.replace(/[&<>'"]/g,(function(e){return t[e]})),o=function(e){switch(typeof e){case"boolean":return m(e);case"number":return u(e);case"string":return d(e);default:return null===e?_():e instanceof Array?l(e):n(e)}},n=function(e){var t=s(),i=Object.keys(e).length;return p(h("{",t),Object.keys(e).map(((t,s)=>{var a=[];return a.push('<li class="dxConsoleTreeItem">'),c(e)&&a.push(r()),a.push(g(t,e[t])),s!==i-1&&a.push(y()),a.push("</li>"),a.join("")})).join(""),v("}",t))},r=function(){return'<span class="dxConsoleTreeCollapse" onclick="this.click(this); return false;"></span>'},c=function(e){return!["boolean","number","string"].includes(typeof e)&&(null!==e&&(e instanceof Array?e.length>0:Object.keys(e).length>0))},p=(e,t,i)=>t.length>0?[e,'<ul class="dxConsoleTreeList">',t,"</ul>",i].join(""):e+i,l=function(e){var t=s(),i=[];e.forEach((function(t,s){var a=['<li class="dxConsoleTreeItem">'];c(t)&&a.push(r()),a.push(o(t)),s!==e.length-1&&a.push(y()),a.push("</li>"),i.push(a.join(""))}));var a=i.join("");return p(h("[",t),a,v("]",t))},d=e=>f(a(JSON.stringify(e)),{class:"dxConsoleTreeStr"}),u=e=>f(e,{class:"dxConsoleTreeNum"}),m=e=>f(e,{class:"dxConsoleTreeBool"}),_=()=>f("null",{class:"dxConsoleTreeNull"}),y=()=>f(",",{class:"dxConsoleTreeComma"}),g=(e,t)=>[f(a(JSON.stringify(e)),{class:"dxConsoleTreeProperty"})+f(": ",{class:"dxConsoleTreeColon"}),o(t)].join(""),f=(e,t)=>"<span"+Object.keys(t).map((e=>" "+e+'="'+t[e]+'"')).join("")+">"+e+"</span>",h=(e,t)=>f(e,{id:"opening_"+t,class:"dxConsoleTreeBracket"}),v=(e,t)=>f(e,{id:"opening_"+t+"_end",class:"dxConsoleTreeBracket"});return'<div class="dxConsoleTreeTree">'+o(e)+"</div>"},get_delta_resource:function(){const{page_info:e,page_resources:t,page_zdk_version:i}=this.data;if(e.uuid){const s=[],a=store.peekRecord("cscript",e.uuid).static_resources.map((e=>store.peekRecord("static_resources",e.id))),o=new Set(a.map((e=>e.id))),n=new Set(t.map((e=>e.id))),r=a.find((e=>"crm"===e.source)).id;return i.id!==r&&(s.push({id:i.id}),s.push({id:r,_delete:null})),s.push(...t.filter((e=>!o.has(e.id))).map((e=>({id:e.id})))),s.push(...a.filter((e=>!n.has(e.id))).map((e=>({id:e.id,_delete:null})))),s}return t.map((e=>({id:e.id})))},get_fields:async function(e){const t=store.peekAll("module").find((t=>t.module_name===e.Module)).api_name,i=store.peekAll("layout").filter((e=>e.module.api_name===t));return(i.length&&i[0].sections?i:await store.findAll("layout",{module:t})).find((i=>i.module.api_name===t&&i.id===e.Layout)).sections.map((e=>e.fields.filter((e=>["text","picklist","ownerlookup","email","phone","website","integer","currency","textarea","lookup","date","bigint","double","boolean"].includes(e.data_type)&&![51,208,207].includes(e.ui_type)&&!["Salutation","Adjustment","Discount","Product_Details"].includes(e.api_name)&&null===e.refer_from_field&&e.view_type.edit&&e.visible&&!e.read_only)).map((e=>({name:e.field_label,value:e.id}))))).flat()},get_module_definitions:function(){return store.peekAll("module").filter((e=>e.api_supported&&e.visible&&e.show_as_tab&&e.presence_sub_menu&&!_cscript._unsupported_modules.includes(e.api_name)&&!crmTab.isZBCustomModule(e.api_name)&&!crmTab.isZECustomModule(e.api_name)&&!crmTab.isZSCustomModule(e.api_name))).map((e=>({name:e.plural_label,value:e.module_name})))},get_layout_definitions:async function(e){const t=store.peekAll("module").find((t=>t.module_name===e.Module)).api_name,i=store.peekAll("layout").filter((e=>e.module.api_name===t));return(i.length?i:await store.findAll("layout",{module:t})).map((e=>({name:"Standard"===e.name?I18n.getMsg("Standard"):e.name,value:e.id})))}});