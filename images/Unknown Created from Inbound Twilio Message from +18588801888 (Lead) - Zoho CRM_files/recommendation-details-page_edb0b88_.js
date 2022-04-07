Lyte.Component.register("crm-recommendation-details-view",{_template:'<template tag-name="crm-recommendation-details-view"> <template is="for" items="{{recommendationArry}}" item="res" index="indexval"> <div class="recommended-products dIB vtop slides pR "> <template is="for" items="{{res.data}}" item="prodata" index="indexvalproduct"> <template is="if" value="{{expHandlers(indexvalproduct,\'===\',0)}}"><template case="true"> <div class="next-prod dIB w100p recommendHidepro"> <div class="proximas col000 mB15 dIB" style="font-size: 16px;"><div class="dIB mR5 vam">{{getI18n(\'crm.zia.config.org.category.recomendation\')}}</div><div class="recommendationTitleSection hide">{{prodata.displayType}}<template is="if" value="{{expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;)}}"><template case="true"> within {{prodata.diffDays}} days </template></template></div></div> <div class="recommended-list pR"> <template is="for" items="{{prodata.products}}" item="prosdata" index="indexvalproducts" unbound="true"> <template is="if" value="{{expHandlers(indexvalproducts,\'===\',0)}}"><template case="true"> <div class="dB"> <div class="dIB vam imageParentRec"> <template is="if" value="{{expHandlers(indexvalproducts,\'!=\',0)}}"><template case="true"> <div class="mT5 aligncenter mB5 "> <span class="ico-plus-small-bold svgIcons dIB" style="text-align: center;"></span> </div> </template></template> <div class="dIB ImgContRecommend vam"> <template is="if" value="{{expHandlers(prosdata.Record_Image,\'!=\',null)}}"><template case="true"> <img alt="image" class=" dIB vtop cD recommend-listImg opNone" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{res.what_to.api_name}}&amp;entityId={{prosdata.id}}&amp;actionName=readImage&amp;fileId={{prosdata.Record_Image}}"> </template><template case="false"> <img alt="image" class=" dIB vtop cD recommend-listImg" src="{{getCrmImageUrl(\'image_profile_canvas_1d7b1e9_.svg\')}}"> </template></template> </div> </div> <div class="dIB pL10 vam mT0" style="width: calc(100% - 130px) !important;"> <div class="dIB vam w100p"> <div class="recommend_prod_type proxima mB5">{{prodata.displayType}}<template is="if" value="{{expHandlers(expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;),\'&amp;&amp;\',expHandlers(isClientPortal,\'===\',false))}}"><template case="true"> {{prodata.displayDiffDays}} </template></template></div> <template is="if" value="{{expHandlers(expHandlers(expHandlers(prodata.count,\'===\',0),\'||\',expHandlers(prodata.type,\'===\',&quot;Already bought&quot;)),\'||\',expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;))}}"><template case="true"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prosdata.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas pB0 lh14 dIB mB0 w100p pR40 col333" style="font-size: 15px;"><div class="dIB w100p recPrdLink">{{prosdata.name}}</div></div> </link-to> {{unescape(getRecommendationBusinessCardJson(prosdata.businessCardJson))}} <template is="if" value="{{expHandlers(expHandlers(prodata.type,\'===\',&quot;Already bought&quot;),\'||\',expHandlers(prodata.type,\'===\',&quot;Bought Together&quot;))}}"><template case="true"> <div class="proxima pB0 dIB w100p lh18 col333 vam pR40" style="font-size: 15px;"> <div class="dIB proxima w100p lh18 vam" style="font-size:12px;"><div class="dIB mR5 vam">{{getI18n(\'crm.recommendation.last.buy\')}}</div> <link-to style="display:inline-block;width:calc(100% - 60px);vertical-align:middle" lt-prop-class="dIB w100p vam" lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prodata.source.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas recPrdLink w100p lh18 color333 pB0 vam dIB " style="font-size: 12px"><div class="dIB w100p recPrdLink proximas vam">{{prodata.source.name}}</div></div> </link-to> </div> </div> </template></template> </template><template case="false"> <template is="for" items="{{prodata.products}}" item="item" index="index"> <template is="if" value="{{expHandlers(expHandlers(expHandlers(index,\'===\',0),\'||\',expHandlers(index,\'===\',1)),\'||\',expHandlers(index,\'===\',2))}}"><template case="true"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{item.id}}&quot;]" lt-prop-target="_blank"> <div class="robotoMedium col333 pB0 dIB mB0 w100p pR40" style="font-size: 16px;"><div class="dIB w100p col333 robotoMedium recPrdLink">{{arithResult(index,\'-\',expHandlers(1,\'-\'))}}.{{item.name}}</div></div> </link-to> </template></template> </template> </template></template> </div> </div> </div> </template></template> </template> </div> </div> </template></template> </template> <template is="if" value="{{expHandlers(isBoughtTogether,\'===\',true)}}"><template case="true"> <div class="link proxima dB cP mT10 recLinkColor" style="font-size: 14px;"><span id="rec-option{{indexval}}" data-zcqa="viewMore" onclick="{{action(\'showPopover\',this,indexval)}}">View More</span></div> </template></template> </div> </template> <lyte-popover id="lytePopoverrecommendation" lt-prop-close-on-body-click="true" lt-prop-max-height="500px"> <template is="registerYield" yield-name="popover"> <lyte-popover-content> <template is="for" items="{{recommendationArry}}" item="res" index="indexval" unbound="true"> <div class="recommendHide" id="recommendationdetails{{indexval}}" style="display: block;max-width: 600px;min-width: 350px;"> <template is="for" items="{{res.data}}" item="prodata" index="indexvalproduct" unbound="true"> <template is="if" value="{{expHandlers(indexvalproduct,\'>\',diplayIndex)}}"><template case="true"> <template is="if" value="{{expHandlers(indexvalproduct,\'>\',expHandlers(diplayIndex,\'+\',1))}}"><template case="true"> <div class="alignleft mT15 mB15 mL0"> <div class="recommendHidepro" style="border-top: 1px solid rgb(229, 229, 229);"></div> </div> </template></template> <div class="next-prod dIB w100p recommendHidepro"> <div class="recommended-list pR"> <template is="for" items="{{prodata.products}}" item="prosdata" index="indexvalproducts" unbound="true"> <div class="dB"> <div class="dIB imageParentRec vam"> <template is="if" value="{{expHandlers(indexvalproducts,\'!=\',0)}}"><template case="true"> <div class="mT5 aligncenter mB10 "> <span class="ico-plus-small-bold svgIcons dIB" style="text-align: center;"></span> </div> </template></template> <div class="dIB ImgContRecommend vam"> <template is="if" value="{{expHandlers(prosdata.Record_Image,\'!=\',null)}}"><template case="true"> <img alt="image" class=" dIB vtop cD recommend-listImg opNone" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{res.what_to.api_name}}&amp;entityId={{prosdata.id}}&amp;actionName=readImage&amp;fileId={{prosdata.Record_Image}}"> </template><template case="false"> <img class=" dIB vtop cD recommend-listImg" alt="image" src="{{getCrmImageUrl(\'image_profile_canvas_1d7b1e9_.svg\')}}"> </template></template> </div> </div> <template is="if" value="{{expHandlers(indexvalproducts,\'!=\',0)}}"><template case="true"> <div class="dIB pL10 vam mT30" style="width: calc(100% - 130px) !important;"> <div class="dIB vam w100p"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prosdata.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas pB0 w100p mB0 pR40 dIB lh14 col333" style="font-size: 15px;"><div class="dIB w100p recPrdLink">{{prosdata.name}}</div></div> </link-to> {{unescape(getRecommendationBusinessCardJson(prosdata.businessCardJson))}} <div class="proxima color333 pB0 dIB w100p lh18 vam pR40" style="font-size: 15px;"> <div class="dIB proxima w100p lh18 vam" style="font-size:12px;"><div class="dIB mR5 vam">Last buy</div> <link-to style="display:inline-block;width:calc(100% - 60px);vertical-align:middle" lt-prop-class="dIB w100p vam" lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prodata.source.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas recPrdLink w100p lh18 col333 pB0 vam dIB " style="font-size: 12px;"><div class="dIB w100p recPrdLink vam">{{prodata.source.name}}</div></div> </link-to> </div> </div> </div> </div> </template><template case="false"> <div class="dIB pL10 vam mT0" style="width: calc(100% - 130px) !important;"> <div class="dIB vam w100p"> <div class="recommend_prod_type proxima mB5">{{prodata.displayType}}<template is="if" value="{{expHandlers(expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;),\'&amp;&amp;\',expHandlers(isClientPortal,\'===\',false))}}"><template case="true"> {{prodata.displayDiffDays}} </template></template></div> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prosdata.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas col333 pB0 w100p dIB lh14 mB0 pR40" style="font-size: 15px;"><div class="dIB w100p recPrdLink">{{prosdata.name}}</div></div> </link-to> {{unescape(getRecommendationBusinessCardJson(prosdata.businessCardJson))}} <template is="if" value="{{expHandlers(prodata.dateString,\'!==\',undefined)}}"><template case="true"> <div class="proximas color1 pB0 pR40 hide"> <div class="dIB col666 proxima" style="font-size:13px;">Last buy {{prodata.dateString}}</div> </div> </template></template> <template is="if" value="{{expHandlers(expHandlers(prodata.type,\'===\',&quot;Already bought&quot;),\'||\',expHandlers(prodata.type,\'===\',&quot;Bought Together&quot;))}}"><template case="true"> <div class="proxima col333 pB0 lastBuyellipsisParent dIB w100p lh18 vam pR40" style="font-size: 15px;"> <div class="dIB proxima w100p lh18 vam" style="font-size:12px;"><div class="dIB mR5 vam">{{getI18n(\'crm.recommendation.last.buy\')}}</div> <link-to style="display:inline-block;width:calc(100% - 60px);vertical-align:middle" lt-prop-class="dIB w100p vam" lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{res.what_to.api_name}}&quot;,&quot;{{prodata.source.id}}&quot;]" lt-prop-target="_blank"> <div class="proximas recPrdLink w100p lh18 col333 pB0 vam dIB " style="font-size: 12px;"><div class="dIB recPrdLink w100p vam"> {{prodata.source.name}} </div></div> </link-to> </div> </div> </template></template> <template is="if" value="{{expHandlers(prodata.type,\'===\',&quot;Next Buy&quot;)}}"><template case="true"> <div class="col666 mT10 proxima hide" style="font-size:13px"><div class="dIB vam mR5 proxima">Product Timeline</div><div class="dIB pR vam"><div class="timeLineVal vam dIB">1</div><div class="timeLineVal vam dIB">2</div><div class="timeLineVal vam dIB">3</div><div class="timeLineVal vam timelineValLast dIB">4</div></div></div> </template></template> </div> </div> </template></template> </div> </template> </div> </div> </template></template> </template> </div> </template> </lyte-popover-content> </template> </lyte-popover> </template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,0,0]},{type:"text",position:[1,1,1,0]},{type:"attr",position:[1,1,1,2]},{type:"if",position:[1,1,1,2],cases:{true:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}},{type:"attr",position:[1,3,1]},{type:"for",position:[1,3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[1,1,3,1]},{type:"if",position:[1,1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"text",position:[1,3,1,1,0]},{type:"attr",position:[1,3,1,1,2]},{type:"if",position:[1,3,1,1,2],cases:{true:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}},{type:"attr",position:[1,3,1,3]},{type:"if",position:[1,3,1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0,0]},{type:"componentDynamic",position:[1]},{type:"text",position:[3]},{type:"attr",position:[5]},{type:"if",position:[5],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,0,0]},{type:"attr",position:[1,1,2]},{type:"text",position:[1,1,2,1,0,0]},{type:"componentDynamic",position:[1,1,2]}]}},default:{}}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0,0]},{type:"text",position:[1,1,0,2]},{type:"componentDynamic",position:[1]}]}},default:{}}]}]}},default:{}}]}},default:{}}]}]}},default:{}}]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1,0]}]}},default:{}}]},{type:"registerYield",position:[3,1],dynamicNodes:[{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[3,1,1]},{type:"for",position:[3,1,1],dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[1,1,3,1]},{type:"if",position:[1,1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"text",position:[1,1,1,1,0,0]},{type:"componentDynamic",position:[1,1,1]},{type:"text",position:[1,1,3]},{type:"attr",position:[1,1,5,1,2]},{type:"text",position:[1,1,5,1,2,1,0,0]},{type:"componentDynamic",position:[1,1,5,1,2]}]},false:{dynamicNodes:[{type:"text",position:[1,1,1,0]},{type:"attr",position:[1,1,1,2]},{type:"if",position:[1,1,1,2],cases:{true:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}},{type:"attr",position:[1,1,3]},{type:"text",position:[1,1,3,1,0,0]},{type:"componentDynamic",position:[1,1,3]},{type:"text",position:[1,1,5]},{type:"attr",position:[1,1,7]},{type:"if",position:[1,1,7],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,1]}]}},default:{}},{type:"attr",position:[1,1,9]},{type:"if",position:[1,1,9],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,0,0]},{type:"attr",position:[1,1,2]},{type:"text",position:[1,1,2,1,0,1]},{type:"componentDynamic",position:[1,1,2]}]}},default:{}},{type:"attr",position:[1,1,11]},{type:"if",position:[1,1,11],cases:{true:{dynamicNodes:[]}},default:{}}]}},default:{}}]}]}},default:{}}]}]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[3]}],_observedAttributes:["whatName","recommendationArry","entity_id","entity_module","rebuy_check","rebuy_check_today","newLink","isBoughtTogether","isClientPortal","recommendationsDetails","diplayIndex"],data:function(){return{whatName:Lyte.attr("string"),recommendationArry:Lyte.attr("array",{default:[]}),entity_id:Lyte.attr("string"),entity_module:Lyte.attr("string"),rebuy_check:Lyte.attr("boolean",{default:!0}),rebuy_check_today:Lyte.attr("boolean",{default:!1}),newLink:Lyte.attr("boolean",{default:!1}),isBoughtTogether:Lyte.attr("boolean",{default:!1}),isClientPortal:Lyte.attr("boolean",{default:!1}),recommendationsDetails:Lyte.attr("object"),diplayIndex:Lyte.attr("number",{default:0})}},didDestroy:function(){store.unloadAll("recommendations-details")},init:function(){this.setData("isClientPortal",void 0!==clientPortalName)},renderAfterProcess:function(t){var e=void 0===this.getData("recommendationArry")?[]:this.getData("recommendationArry");e.push(t),this.setData("recommendationArry",[]),this.setData("recommendationArry",e);var a=$L("#newRelDetails");a.removeClass("vH"),0!==t.data.length?((t.data.length>1||t.data[0].products.length>1)&&(t.data[0].products&&t.data[0].products.length&&this.setData("diplayIndex",-1),this.setData("isBoughtTogether",!0)),$(".slider").show(),detailView.setWidthRecommendation($(".slider-list"))):1===$L(this.$node).parents(".slider-list").find(".newRelDetailsTd").length?a.hide():a.show()},didConnect:function(){this.setData("whatName",$("#entityName").val())},actions:{showPopover:function(t,e){var a=$L(t).attr("id"),i=$L("#lytePopoverrecommendation").eq(0)[0];i.ltProp("originElem","#"+a),i.ltProp("show",!0),$L(".recommendHide").css("display","none"),$L("#recommendationdetails"+e).css("display","block"),$L(".recommendHidepro").css("display","block")}}},{mixins:["recommendation-util"]});
