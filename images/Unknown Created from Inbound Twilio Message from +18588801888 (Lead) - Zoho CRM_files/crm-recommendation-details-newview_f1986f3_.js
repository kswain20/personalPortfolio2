Lyte.Component.register("crm-recommendation-details-newview",{_template:'<template tag-name="crm-recommendation-details-newview"> <template is="for" items="{{recommendationArry}}" item="res" index="indexval"> <div class="recommended-products dIB vtop slides pR "> <div class="crm-font-bold col333 w100p mB25 pB3 dIB f16"> <template is="if" value="{{expHandlers(isCanvasView,\'===\',false)}}"><template case="true"> <div class="dIB mR5 col333 crm-font-bold vam titleForshrinkwidth zcanvas_rl_hide"><template is="if" value="{{expHandlers(isClientPortal,\'===\',true)}}"><template case="true">{{currentRecommendation.displayType}}&nbsp;</template></template>{{getI18n(expHandlers(isClientPortal,\'?:\',\'crm.recommendation.for.you\',\'crm.zia.config.org.category.recomendation\'))}}</div> </template></template> <template is="if" value="{{expHandlers(noOfKeys(res.data),\'>\',1)}}"><template case="true"> <div class="fR mT5"><div class="ico-arrow-left2 AddDisabledBgClass cP svgIcons dIB mR10" onclick="{{action(\'clickToGoPrev\',this)}}"></div><div class="ico-arrow-right2 cP dIB svgIcons" onclick="{{action(\'clickToGoNext\',this)}}"></div></div><div class="recommendationTitleSection hide">{{prodata.displayType}}<template is="if" value="{{expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;)}}"><template case="true"> within {{prodata.diffDays}} days </template></template></div> </template></template> </div> <div class="recommendedDivEleCnt"> <ul class="recommendedUL pR" style="width:calc( 375px * {{noOfKeys(res.data)}});{{navStyle}}"> <template is="for" items="{{res.data}}" item="prodata" index="indexvalproduct"> <li class="p0 m0"> <div class="next-prod dIB w100p recommendHidepro"> <div class="recommended-list pR"> <template is="for" items="{{prodata.products}}" item="prosdata" index="indexvalproducts"> <template is="if" value="{{expHandlers(indexvalproducts,\'===\',0)}}"><template case="true"> <div class="w100p dIB"> <template is="if" value="{{expHandlers(recommendationsDetails.what_to.photo_enabled,\'==\',true)}}"><template case="true"> <div class="dIB vat imageParentRec"> <template is="if" value="{{expHandlers(indexvalproducts,\'!=\',0)}}"><template case="true"> <div class="mT5 aligncenter mB5 "> <span class="ico-plus-small-bold svgIcons aligncenter dIB"></span> </div> </template></template> <div class="dIB ImgContRecommend p0 vat {{if(prosdata.Record_Image,\'ziaTransBg\',\'\')}} "> <template is="if" value="{{prosdata.Record_Image}}"><template case="true"> <img alt="{{prosdata.name}}" class=" dIB vtop cD recommend-listImg zFInh" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{whatModule.module_name}}&amp;entityId={{prosdata.id}}&amp;actionName=readImage&amp;fileId={{prosdata.Record_Image}}"> </template><template case="false"> <div class="ico-product-white svgIcons iconProductImage"></div> </template></template> </div> </div> </template></template> <div class="dIB {{if(recommendationsDetails.what_to.photo_enabled,\'pL15 ziaRecSmalWid\',\'w100p\')}} vat"> <div class="dIB vat w100p"> <div class="recommend_prod_type crm-font-regular mB5 {{if(isClientPortal,\'hide\',\'\')}}">{{prodata.displayType}}<template is="if" value="{{expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;)}}"><template case="true"> {{prodata.displayDiffDays}} </template></template></div> <template is="if" value="{{expHandlers(expHandlers(expHandlers(prodata.count,\'===\',0),\'||\',expHandlers(prodata.type,\'===\',&quot;Already bought&quot;)),\'||\',expHandlers(prodata.type,\'===\',&quot;Rebuy&quot;))}}"><template case="true"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{whatModule.module_name}}&quot;,&quot;{{prosdata.id}}&quot;]" lt-prop-target="_blank"> <div class="crm-font-bold pB0 dIB mB0 fL w100p mB2 pR40"><div class="dIB w100p crm-font-bold recPrdLink ellipsisProd">{{prosdata.name}}</div></div> </link-to> {{unescape(getRecommendationBusinessCardJson(prosdata.businessCardJson))}} <template is="if" value="{{expHandlers(prodata.type,\'===\',&quot;Already bought&quot;)}}"><template case="true"> <div class="crm-font-regular color1 pB0 dIB w100p lh18 vam mT5 col333 f15 pR40"> <div class="dIB crm-font-regular col666 w100p lh18 vam f14"><div class="dIB mT2 mR5 vam">{{getI18n(\'crm.recommendation.last.buy\')}}</div> <link-to lt-prop-class="dIB w100p vam" lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{whatModule.module_name}}&quot;,&quot;{{prodata.source.id}}&quot;]" lt-prop-target="_blank"> <div class="dIB recPrdLink w100p lh18 pB0 vam f14"><div class="dIB w100p crm-font-bold col333 recPrdLink vam">{{prodata.source.name}}</div></div> </link-to> </div> </div> </template></template> </template><template case="false"> <template is="for" items="{{prodata.products}}" item="item" index="index"> <template is="if" value="{{expHandlers(expHandlers(expHandlers(index,\'===\',0),\'||\',expHandlers(index,\'===\',1)),\'||\',expHandlers(index,\'===\',2))}}"><template case="true"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{whatModule.module_name}}&quot;,&quot;{{item.id}}&quot;]" lt-prop-target="_blank"> <div class="crm-font-bold col333 pB0 dIB mB0 w100p mB5 pR40 f16"><div class="dIB w100p col333 crm-font-bold recPrdLink">{{arithResult(index,\'-\',expHandlers(1,\'-\'))}}.{{item.name}}</div></div> </link-to> </template></template> </template> </template></template> <template is="if" value="{{expHandlers(prodata.type,\'!==\',&quot;Already bought&quot;)}}"><template case="true"> <template is="if" value="{{expHandlers(prodata.count,\'!==\',0)}}"><template case="true"> <div class="link crm-font-regular dB cP mT10 fR recLinkCol f14"><span id="rec-option{{indexvalproduct}}" data-zcqa="viewMore" onclick="{{action(\'showPopover\',this,prodata)}}">{{getI18n(\'crm.label.view.details\')}}</span></div> </template></template> </template></template> <template is="if" value="{{expHandlers(expHandlers(expHandlers(prodata.reasons,\'!==\',undefined),\'&amp;&amp;\',expHandlers(prodata.reasons,\'!==\',null)),\'&amp;&amp;\',expHandlers(prodata.reasons.length,\'!==\',0))}}"><template case="true"> <span class="f14 zia-link-color cP mT15 fL cB" data-zcqa="reasonKnowMore" id="reasoningKnowMore{{indexvalproduct}}" onclick="{{action(\'showPopoverKnowMore\',this)}}">{{getI18n(\'crm.label.setup.banner.label\')}}</span> </template></template> </div> </div> </div> </template></template> </template> </div> </div> </li> </template> </ul> </div> <template is="if" value="{{expHandlers(currentRecommendation.reference_records,\'&amp;&amp;\',expHandlers(currentRecommendation.reference_records.length,\'!=\',0))}}"><template case="true"> <div class="dIB"> <div class="col666 crm-font-regular mT10 f13"> <div class="dIB vam mR10 refcusdefaultcolor f14 crm-font-regular">{{getI18n(\'crm.workflow.createrecord.reference.value\')}} {{whomModule.plural_label}}</div> <div class="dIB pR vam"> <template is="for" items="{{currentRecommendation.reference_records}}" item="item" index="index"> <div id="referenceCustomerEl{{expHandlers(expHandlers(expHandlers(expHandlers(entity_id,\'+\',\'_\'),\'+\',item.record.id),\'+\',\'_\'),\'+\',index)}}" class="referencecustomerImg vam dIB {{if(expHandlers(referenceCustomerPopoverElem,\'===\',expHandlers(expHandlers(expHandlers(expHandlers(expHandlers(\'#referenceCustomerEl\',\'+\',entity_id),\'+\',\'_\'),\'+\',item.record.id),\'+\',\'_\'),\'+\',index)),\'selRecUser\',\'\')}}" onclick="{{action(\'showPopoverReferenceCustomer\',expHandlers(expHandlers(entity_id,\'+\',\'_\'),\'+\',item.record.id),index,item)}}"> <template is="if" value="{{expHandlers(item.record.Record_Image,\'===\',null)}}"><template case="true"> <img alt="{{item.record.name}}" class=" dIB vtop recommend-listImg opNone zFInh cP" src="{{getCrmImageUrl(\'nophoto_80ea3af_.png\')}}"> </template><template case="false"> <img alt="{{item.record.name}}" class=" dIB vtop recommend-listImg opNone zFInh cP" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{whomModule.module_name}}&amp;entityId={{item.record.id}}&amp;actionName=readImage&amp;fileId={{item.record.Record_Image}}"> </template></template> </div> </template> </div> </div> </div> </template></template> </div> </template> <lyte-popover lt-prop-footer-padding="15px 30px" lt-prop-type="callout" lt-prop-freeze="false" lt-prop-show-close-button="false" lt-prop-origin-elem="{{referenceCustomerPopoverElem}}" lt-prop-show="{{referenceCustomerPopoverShow}}" on-close="{{method(\'leavePopoverReferenceCustomer\')}}" id="lytePopoverrecommendationKnowMore" lt-prop-wrapper-class="lytePopoverRecommendElement" lt-prop-content-padding="30px" lt-prop-close-on-body-click="true" lt-prop-width="500px" lt-prop-scrollable="true" data-zcqa="reasonKnowMorePopUp"> <template is="registerYield" yield-name="popover"> <lyte-popover-content onmouseleave="{{action(\'leavePopoverReferenceCustomer\')}}"> <div id="referenceCustomerMainPopOverDiv"> <div class="w100p dIB"> <template is="if" value="{{expHandlers(recommendationsDetails.whom_to.photo_enabled,\'===\',true)}}"><template case="true"> <div class="dIB vat imageParentRec referencecustomerImg forPopOver"> <template is="if" value="{{expHandlers(currentReferenceCustomer.record.Record_Image,\'===\',null)}}"><template case="true"> <img alt="{{currentReferenceCustomer.record.name}}" class=" dIB vtop recommend-listImg opNone zFInh cP" src="{{getCrmImageUrl(\'nophoto_80ea3af_.png\')}}"> </template><template case="false"> <img alt="{{currentReferenceCustomer.record.name}}" class=" dIB vtop recommend-listImg opNone zFInh cP" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{whomModule.module_name}}&amp;entityId={{currentReferenceCustomer.record.id}}&amp;actionName=readImage&amp;fileId={{currentReferenceCustomer.record.Record_Image}}"> </template></template> </div> </template></template> <div class="dIB pL10 ziaRecSmalWid forRecReferencePop vat"> <div class="dIB vat w100p"> <div class="crm-font-bold refcusnamecolor f16 pB0 dIB mB0 w100p cP"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{whomModule.module_name}}&quot;,&quot;{{currentReferenceCustomer.record.id}}&quot;]" lt-prop-target="_blank"> <div class="dIB ellipsisProd w100p refcusnamecolor crm-font-bold">{{currentReferenceCustomer.record.name}}</div> </link-to> </div> <template is="if" value="{{expHandlers(referenceCustomerRecord.Account_Name,\'!==\',null)}}"><template case="true"> <div class="crm-font-regular refcusacccolor mT3 pB0 ellipsisProd f14">{{referenceCustomerRecord.Account_Name.name}}</div> </template></template> <div class="crm-font-regular mT5 pB0"> <span class="referenceCustomerScore f13">{{getI18n(\'zia.recommendation.reference.customer.similarity.score\',currentReferenceCustomer.score)}}</span> </div> </div> </div> </div> <template is="if" value="{{referenceCustomerTransactionInfo.first_transaction}}"><template case="true"><div class="w100p dIB mT20"> <div class="dIB vat w100p mB10"> <div class="crm-font-regular refcusdefaultcolor f14"> <div class="dIB ico-diamond vam"></div> <div class="dIB mL10">{{getI18n(\'First\')}} {{basedOnModule.singular_label}} {{getLastModified(referenceCustomerTransactionInfo.first_transaction)}}</div> </div> </div> <div class="dIB vat w100p"> <div class="crm-font-regular refcusdefaultcolor f14"> <div class="dIB ico-refclockIcon vam"></div> <div class="dIB mL10">{{getI18n(\'zia.recommendation.reference.customer.prior\',basedOnModule.singular_label,whatModule.plural_label,referenceCustomerTransactionInfo.transaction_count)}}</div> </div> </div> </div></template></template> <template is="if" value="{{expHandlers(expHandlers(currentReferenceCustomer.reason,\'!==\',undefined),\'&amp;&amp;\',expHandlers(currentReferenceCustomer.reason.length,\'!==\',0))}}"><template case="true"><div class="w100p dIB mT20"> <div class="dIB vat w100p"> <div class="pB0 dIB mB0 w100p cP"> <div class="dIB w100p f15 crm-font-semibold refcusdefaultcolor">{{getI18n(\'zia.recommendation.reference.customer.why\',whomModule.singular_label)}}</div> </div> </div> <div class="dIB vat w100p mT15"> <ul class="reasoningReferenceCustomer p0 m0"> <template is="for" items="{{currentReferenceCustomer.reason}}" item="item" index="index"> <li class="m0 refcusdefaultcolor refCustomrItemLi f15">{{item}}</li> </template> </ul> </div> </div></template></template> </div> </lyte-popover-content> </template> </lyte-popover> <lyte-popover lt-prop-footer-padding="15px 30px" lt-prop-type="callout" lt-prop-freeze="false" lt-prop-show-close-button="false" lt-prop-origin-elem="{{reasoningPopoverElem}}" lt-prop-show="{{reasoningPopoverShow}}" on-close="{{method(\'reasoningPopoverClose\')}}" id="lytePopoverrecommendationKnowMore" lt-prop-wrapper-class="lytePopoverRecommendElement" lt-prop-content-padding="30px 20px" lt-prop-close-on-body-click="true" lt-prop-max-height="500px" lt-prop-width="330px" lt-prop-scrollable="true" data-zcqa="reasonKnowMorePopUp"> <template is="registerYield" yield-name="popover"> <lyte-popover-content> <div class="f15 crm-font-bold zia-font-title-color mB15">{{getI18n(\'crm.recommendation.reason.title\')}}</div> <template is="for" items="{{currentRecommendation.reasons}}" item="reason" index="index"> <div class="f15 crm-font-regular zia-font-body-color recResBulletPoint">{{reason}}</div> </template> </lyte-popover-content> </template> </lyte-popover> <lyte-popover id="lytePopoverrecommendation" lt-prop-wrapper-class="lytePopoverRecommendElement" lt-prop-content-padding="30px" lt-prop-close-on-body-click="true" lt-prop-max-height="500px"> <template is="registerYield" yield-name="popover"> <lyte-popover-content> <div class="recommendHide recMaxandminwid" id="recommendationdetails"> <div class="next-prod dIB w100p recommendHidepro"> <div class="recommended-list pR"> <template is="for" items="{{currentRec.products}}" item="prosdata" index="indexvalproducts"> <div class="w100p dIB"> <template is="if" value="{{expHandlers(indexvalproducts,\'!=\',expHandlers(1,\'-\'))}}"><template case="true"> <div class="dIB imageParentRec vat"> <template is="if" value="{{expHandlers(indexvalproducts,\'>\',0)}}"><template case="true"> <div class="mT5 aligncenter mB5 "> <span class="ico-plus-small-bold svgIcons dIB aligncenter"></span> </div> </template></template> <template is="if" value="{{expHandlers(recommendationsDetails.what_to.photo_enabled,\'==\',true)}}"><template case="true"> <div class="dIB ImgContRecommend p0 vat" style="{{if(prosdata.Record_Image,\'background-color:transparent;\',\'\')}}"> <template is="if" value="{{prosdata.Record_Image}}"><template case="true"> <img alt="image" class=" dIB vtop cD recommend-listImg opNone" src="{{getCrmBasePath()}}/EntityImageAttach.do?action_module={{whatModule.module_name}}&amp;entityId={{prosdata.id}}&amp;actionName=readImage&amp;fileId={{prosdata.Record_Image}}"> </template><template case="false"> <div class="ico-product-white svgIcons iconProductImage"></div> </template></template> </div> </template></template> </div> <div class="dIB {{if(ifEquals(indexvalproducts,0),\'\',\'mT30\')}} {{if(recommendationsDetails.what_to.photo_enabled,\'pL10 ziaRecSmalWid\',\'mT0 w100p\')}} vat"> <div class="dIB vat w100p"> <link-to lt-prop-rel="noopener noreferrer" lt-prop-route="crm.tab.module.entity.detail" lt-prop-dp="[&quot;{{whatModule.module_name}}&quot;,&quot;{{prosdata.id}}&quot;]" lt-prop-target="_blank"> <div class="crm-font-bold col333 pB0 f18 w100p mB0 pR40 dIB "><div class="dIB crm-font-bold col333 w100p recPrdLink">{{prosdata.name}}</div></div> </link-to> {{unescape(getRecommendationBusinessCardJson(prosdata.businessCardJson))}} </div> </div> </template></template> </div> </template> </div> </div> </div> </lyte-popover-content> </template> </lyte-popover> <div class="dIB crm-font-regular w100p lh18 vam aligncenter f12" id="noResultRecommendation"> <div class="dIB mR5 vam">{{getI18n(\'crm.zia.no.record.recommendation\')}}</div> </div> </template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,0]},{type:"if",position:[1,0],cases:{true:{dynamicNodes:[{type:"text",position:[0]}]}},default:{}},{type:"text",position:[1,1]}]}},default:{}},{type:"attr",position:[1,1,3]},{type:"if",position:[1,1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1,0]},{type:"attr",position:[1,1]},{type:"text",position:[2,0]},{type:"attr",position:[2,2]},{type:"if",position:[2,2],cases:{true:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,3,1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'width:calc( 375px * '",{type:"helper",value:{name:"noOfKeys",args:["res.data"]}},"');'","navStyle"]}}}},{type:"attr",position:[1,3,1,1]},{type:"for",position:[1,3,1,1],dynamicNodes:[{type:"attr",position:[1,1,1,1]},{type:"for",position:[1,1,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1]},{type:"if",position:[1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[]}},default:{}}]}},default:{}},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1,1]},{type:"text",position:[1,3,1,1,0]},{type:"attr",position:[1,3,1,1,2]},{type:"if",position:[1,3,1,1,2],cases:{true:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}},{type:"attr",position:[1,3,1,3]},{type:"if",position:[1,3,1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0,0]},{type:"componentDynamic",position:[1]},{type:"text",position:[3]},{type:"attr",position:[5]},{type:"if",position:[5],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,0,0]},{type:"attr",position:[1,1,2]},{type:"text",position:[1,1,2,1,0,0]},{type:"componentDynamic",position:[1,1,2]}]}},default:{}}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0,0]},{type:"text",position:[1,1,0,2]},{type:"componentDynamic",position:[1]}]}},default:{}}]}]}},default:{}},{type:"attr",position:[1,3,1,5]},{type:"if",position:[1,3,1,5],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,0]},{type:"text",position:[1,0,0]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,3,1,7]},{type:"if",position:[1,3,1,7],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]}]}},default:{}}]}},default:{}}]}]},{type:"attr",position:[1,5]},{type:"if",position:[1,5],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,1,0]},{type:"text",position:[1,1,1,2]},{type:"attr",position:[1,1,3,1]},{type:"for",position:[1,1,3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}}]}]}},default:{}}]},{type:"attr",position:[3]},{type:"registerYield",position:[3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1,1]},{type:"if",position:[1,1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,1,1,3,1,1,1]},{type:"text",position:[1,1,1,3,1,1,1,1,0]},{type:"componentDynamic",position:[1,1,1,3,1,1,1]},{type:"attr",position:[1,1,1,3,1,3]},{type:"if",position:[1,1,1,3,1,3],cases:{true:{dynamicNodes:[{type:"text",position:[1,0]}]}},default:{}},{type:"text",position:[1,1,1,3,1,5,1,0]},{type:"attr",position:[1,1,3]},{type:"if",position:[1,1,3],cases:{true:{dynamicNodes:[{type:"text",position:[0,1,1,3,0]},{type:"text",position:[0,1,1,3,2]},{type:"text",position:[0,1,1,3,4]},{type:"text",position:[0,3,1,3,0]}]}},default:{}},{type:"attr",position:[1,1,5]},{type:"if",position:[1,1,5],cases:{true:{dynamicNodes:[{type:"text",position:[0,1,1,1,0]},{type:"attr",position:[0,3,1,1]},{type:"for",position:[0,3,1,1],dynamicNodes:[{type:"text",position:[1,0]}]}]}},default:{}},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[3]},{type:"attr",position:[5]},{type:"registerYield",position:[5,1],dynamicNodes:[{type:"text",position:[1,1,0]},{type:"attr",position:[1,3]},{type:"for",position:[1,3],dynamicNodes:[{type:"text",position:[1,0]}]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[5]},{type:"registerYield",position:[7,1],dynamicNodes:[{type:"attr",position:[1,1,1,1,1]},{type:"for",position:[1,1,1,1,1],dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1],attr:{style:{name:"style",helperInfo:{name:"if",args:["prosdata.Record_Image","'background-color:transparent;'","''"]}}}},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[]}},default:{}}]}},default:{}},{type:"attr",position:[3]},{type:"attr",position:[3,1,1]},{type:"text",position:[3,1,1,1,0,0]},{type:"componentDynamic",position:[3,1,1]},{type:"text",position:[3,1,3]}]}},default:{}}]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[7]},{type:"text",position:[9,1,0]}],_observedAttributes:["whatName","recommendationArry","currentRecommendation","entity_id","entity_module","rebuy_check","rebuy_check_today","newLink","isClientPortal","currentRec","isBoughtTogether","isCanvasView","diplayIndex","recommendationsDetails","arrayIndexNav","navStyle","reasoningPopoverShow","reasoningPopoverElem","whatModule","whomModule","basedOnModule","referenceCustomerDealInfo","referenceCustomerTransactionInfo","referenceCustomerRecord","currentReferenceCustomer"],data:function(){return{whatName:Lyte.attr("string"),recommendationArry:Lyte.attr("array",{default:[]}),currentRecommendation:Lyte.attr("object"),entity_id:Lyte.attr("string"),entity_module:Lyte.attr("string"),rebuy_check:Lyte.attr("boolean",{default:!0}),rebuy_check_today:Lyte.attr("boolean",{default:!1}),newLink:Lyte.attr("boolean",{default:!1}),isClientPortal:Lyte.attr("boolean",{default:!1}),currentRec:Lyte.attr("object"),isBoughtTogether:Lyte.attr("boolean",{default:!1}),isCanvasView:Lyte.attr("boolean",{default:!1}),diplayIndex:Lyte.attr("number",{default:0}),recommendationsDetails:Lyte.attr("object"),arrayIndexNav:Lyte.attr("number",{default:0}),navStyle:Lyte.attr("string",{default:""}),reasoningPopoverShow:Lyte.attr("boolean",{default:!1}),reasoningPopoverElem:Lyte.attr("string",{default:""}),whatModule:Lyte.attr("object"),whomModule:Lyte.attr("object"),basedOnModule:Lyte.attr("object"),referenceCustomerDealInfo:Lyte.attr("object",{default:{}}),referenceCustomerTransactionInfo:Lyte.attr("object"),referenceCustomerRecord:Lyte.attr("object"),currentReferenceCustomer:Lyte.attr("object")}},didDestroy:function(){store.unloadAll("recommendations-details"),store.unloadAll("recommendations_reference_customer")},referenceRecordsSorting:function(e){return e.reference_records&&0!==e.reference_records.length&&(e.reference_records=e.reference_records.sort((function(e,t){var o=e.score,a=t.score;return o<a?-1:o>a?1:0}))),e},renderAfterProcess:function(e){var t=this.getData("recommendationArry");t.push(e),this.setData("recommendationArry",[]),this.setData("recommendationArry",t);var o=this.getData("recommendationsDetails");this.setData("whatModule",store.peekRecord("module",o.what_to.id)),this.setData("whomModule",store.peekRecord("module",o.whom_to.id)),this.setData("basedOnModule",store.peekRecord("module",o.based_on.id)),e.data.length&&($L("#recommendationDetailUi").show(),t&&this.setData("currentRecommendation",this.referenceRecordsSorting(t[0].data[0])))},init:function(){if(this.setData("isClientPortal",void 0!==clientPortalName),!0===this.getData("isCanvasView")){var e="/crm/v2.2/"+moduleRecordMapping[this.getData("entity_module")].api_name+"/"+this.getData("entity_id")+"/actions/zia_insights",t={"X-ZCSRF-TOKEN":csrfParamName+"="+csrfToken,"X-ZOHO-SERVICE":"crm/lookupTooltip"};window.clientPortalName&&(t["X-CRMPORTAL"]=window.clientPortalName),(new crmRequestPool).initiate({type:"GET",url:e,dataType:"text",headers:t,success:function(e){var t=JSON.parse(e).zia_insights,o=t.recommendation_data?t.recommendation_data[0]:void 0;if(o){var a=o.output;if(a.length){var r=document.querySelector("crm-recommendation-details-newview"),i=a[0],n=o.recommendation,s=store.createRecord("recommendations-details");s.$.set("recommendation_id",n.id),s.$.set("name",n.name),s.$.set("first_buy",i.first_buy),s.$.set("next_buy",i.next_buy),s.$.set("rebuy",i.rebuy),s.$.set("frequently_bought_together",i.frequently_bought_together),s.$.set("customer_also_bought",i.customer_also_bought),s.$.set("whom_to",n.whom_to),s.$.set("what_to",n.what_to),s.$.set("based_on",n.based_on),r.component.setData("recommendationsDetails",s),r.component.dataPageInitLoader(r.component,r.component.getData("entity_module"),s)}}},error:function(){var e=$L("#noResultRecommendation");0!==e.length&&e.show()}})}},didConnect:function(){this.setData("whatName",$("#entityName").val()),$(".recommendationsuccessBandClass").hide();var e=this.getData("entity_module");if(1!=store.peekRecord("module",moduleRecordMapping[e].id).isRecommendationsEnable&&this.getData("isCanvasView")){var t=$L("#noResultRecommendation");0!==t.length&&t.show()}},actions:{showPopoverKnowMore:function(e){var t=$L(e).attr("id");this.setData("reasoningPopoverElem","#"+t),this.setData("reasoningPopoverShow",!0)},showPopover:function(e,t){var o=$L(e).attr("id"),a=$L("#lytePopoverrecommendation").eq(0)[0];a.ltProp("originElem","#"+o),a.ltProp("show",!0),this.setData("currentRec",t),$L(".recommendHidepro").css("display","block")},clickToGoPrev:function(e){var t=this.getData("arrayIndexNav");t-=1,this.setData("arrayIndexNav",t),Crm.userDetails.RTL_ENABLED?this.setData("navStyle","right:calc(-373px * "+t+" )"):this.setData("navStyle","left:calc(-373px * "+t+" )"),t<=0&&$L(e).addClass("AddDisabledBgClass"),$L(".ico-arrow-right2").removeClass("AddDisabledBgClass");var o=this.getData("recommendationArry");o&&this.setData("currentRecommendation",this.referenceRecordsSorting(o[0].data[t]))},clickToGoNext:function(e){var t=this.getData("arrayIndexNav"),o=this.data.recommendationArry[0].data.length;t+=1,this.setData("arrayIndexNav",t),Crm.userDetails.RTL_ENABLED?this.setData("navStyle","right:calc(-373px * "+t+" )"):this.setData("navStyle","left:calc(-373px * "+t+" )"),t>=o-1&&$L(e).addClass("AddDisabledBgClass"),$L(".ico-arrow-left2").removeClass("AddDisabledBgClass");var a=this.getData("recommendationArry");a&&this.setData("currentRecommendation",this.referenceRecordsSorting(a[0].data[t]))},showPopoverReferenceCustomer:function(e,t,o){var a=this;a.setData("referenceCustomerPopoverShow",!1),a.setData("currentReferenceCustomer",o);var r=a.getData("currentRecommendation"),i=a.getData("whomModule"),n=r.source.id,s=o.record.id,d={entity_module_api_name:moduleRecordMapping[a.getData("entity_module")].api_name,entity_id:a.getData("entity_id"),id:e},p={include:"recommendation_purchase_data",skip_other_data:!0,what_id:n,whom_id:s};commonUtils.showHideLoadingDiv(!0),(void 0===store.peekRecord("recommendations_reference_customer",e)?store.findAll("recommendations_reference_customer",p,!0,!0,d):Promise.resolve(store.peekRecord("recommendations_reference_customer",e))).then((function(r){a.setData("referenceCustomerTransactionInfo",r),(void 0===store.peekRecord(i.id,o.record.id)?store.findRecord(i.id,o.record.id):Promise.resolve(store.peekRecord(i.id,o.record.id))).then((function(){commonUtils.showHideLoadingDiv(!1);var r=store.peekRecord(i.id,o.record.id);a.setData("referenceCustomerRecord",r),a.setData("referenceCustomerPopoverElem","#referenceCustomerEl"+e+"_"+t),a.setData("referenceCustomerPopoverShow",!0)}),(function(){commonUtils.showHideLoadingDiv(!1)}))}),(function(){commonUtils.showHideLoadingDiv(!1)}))},leavePopoverReferenceCustomer:function(){this.setData("referenceCustomerPopoverElem",""),this.setData("referenceCustomerPopoverShow",!1)}},methods:{reasoningPopoverClose:function(){this.setData("reasoningPopoverElem",""),this.setData("reasoningPopoverShow",!1)},leavePopoverReferenceCustomer:function(){this.setData("referenceCustomerPopoverElem",""),this.setData("referenceCustomerPopoverShow",!1)}}},{mixins:["recommendation-util"]}),Lyte.Component.registerHelper("getTransTimeFromShift",(function(e,t,o){e.vbv_time.find((function(e,a){if(t===a)return e.trans_time[o]}))})),Lyte.Component.registerHelper("get12HrsFrmt",(function(e){if(-1===e.indexOf(I18n.getMsg("AM"))&&-1===e.indexOf(I18n.getMsg("PM"))){var t=e.split(":");return parseInt(t)>12?parseInt(t)-12+":"+t[1]+" "+I18n.getMsg("PM"):t[0]+":"+t[1]+" "+I18n.getMsg("PM")}})),Lyte.Component.registerHelper("getUserFullName",(function(e){return e?e.full_name:""})),Lyte.Component.registerHelper("getRoleName",(function(e){return e?I18n.getMsg(e.role.name):""})),Lyte.Component.registerHelper("getCurrentShift",(function(e){return e&&e.$current_shift&&e.$current_shift.name?e.$current_shift.name:"-"})),Lyte.Component.registerHelper("getNextShift",(function(e){return e&&e.$next_shift&&e.$next_shift.name?e.$shift_effective_from?I18n.getMsg("crm.bh.changeshiftfrom",[e.$next_shift.name,CrmDateUtils.convertDateToUserPattern(CrmDateUtils.getDateObjectFromString(e.$shift_effective_from,"YYYY-MM-DD"))]):e.$next_shift.name:"-"})),Lyte.Component.registerHelper("removeDoubleQuote",(function(e){return e?JSON.stringify(e).replace(/"/g,""):""})),Lyte.Component.registerHelper("arrToString",(function(e){return e?e.toString():""})),Lyte.Component.registerHelper("getTodayDate",(function(){var e=new Date,t=e.getDate();return[e.getMonth()+1,t,e.getFullYear()].join("/")})),Lyte.Component.registerHelper("getStartTime",(function(e,t,o,a,r,i,n){if("breakHours"===e){var s=Lyte.registeredMixins["business-hours-utils"];if(s.CrmBusinessHours.onSave)return;return void 0!==r?"from"===t?a?o.vbv_time[r].trans_time[0]:o.vbv_time[r].time[0]:s.getBreakStart(s.timeToUsrFmtFrom24Hr(s.convertDecimalToTime(s.convertTimetoDecimal(o.break_hours[n].vbv_time[r].trans_time[0])+15)),void 0,o.vbv_time[r].trans_time[0],o.vbv_time[r].trans_time[1]):"from"===t?a?o.trans_time[0]:o.time[0]:s.getBreakStart(s.timeToUsrFmtFrom24Hr(s.convertDecimalToTime(s.convertTimetoDecimal(o.break_hours[n].trans_time[0])+15)),void 0,o.trans_time[0],o.trans_time[1])}})),Lyte.Component.registerHelper("getEndTime",(function(e,t,o,a,r,i,n){if("breakHours"===e){var s=Lyte.registeredMixins["business-hours-utils"];if(s.CrmBusinessHours.onSave)return;return void 0!==r?"from"===t?a?s.convertDecimalToTime(s.convertTimetoDecimal(o.vbv_time[r].trans_time[1])-1):s.timeToUsrFmtFrom24Hr(s.convertDecimalToTime(s.convertTimetoDecimal(o.vbv_time[r].trans_time[1])-1)):s.isBreakHoursGreater(o.vbv_time[r].trans_time[0],o.vbv_time[r].trans_time[1],o.break_hours[n].vbv_time[r].trans_time[0],o.vbv_time[r].trans_time[1],!0):"from"===t?a?s.convertDecimalToTime(s.convertTimetoDecimal(o.trans_time[1])-1):s.timeToUsrFmtFrom24Hr(s.convertDecimalToTime(s.convertTimetoDecimal(o.trans_time[1])-1)):s.isBreakHoursGreater(o.trans_time[0],o.trans_time[1],o.break_hours[n].trans_time[0],o.trans_time[1],!0)}})),Lyte.Component.registerHelper("getUserDatePattern",(function(){return Crm.userDetails.DATE_PATTERN.replace(/'/g,"")})),Lyte.Component.registerHelper("getNextShiftDateFormat",(function(e,t){return e&&"-"!==e?"popup"===t?e&&e.effEhift&&e.effective_from?I18n.getMsg("crm.bh.changeshiftfrom",[e.effEhift,e.effective_from]):"":e?I18n.getMsg("crm.bh.changeshiftfrom",[e.substring(0,e.indexOf("(")-1),e.substring(e.indexOf("(")+1,e.indexOf(")"))]):"":"-"})),Lyte.Component.registerHelper("hasAllShiftCreated",(function(e,t,o){var a=t[o],r=e?e.length:0,i=0;if(a)for(var n=0;n<r;n++)if(!a.contains(e[n].id)){i=1;break}return a||(i=1),0===i})),Lyte.Component.registerHelper("hasShiftCreated",(function(e,t,o){return t[o]&&t[o].contains(e)})),Lyte.Component.registerHelper("getDay",(function(e){var t=e.split("-");return I18n.getMsg(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t[0],t[1]-1,t[2]).getDay()])}));