Lyte.Component.register("crm-workflow-fields-update-popup",{_template:'<template tag-name="crm-workflow-fields-update-popup"> <lyte-popover id="fieldHighlightId" lt-prop-show="{{show}}" lt-prop-wrapper-class="fieldHighlightId" lt-prop-duration="10" lt-prop-height="auto" lt-prop-header-padding="15px 20px" lt-prop-content-padding="15px 20px" lt-prop-footer-padding="0 20px 15px" lt-prop-close-on-body-click="false" lt-prop-origin-elem="#{{orginElem}}" lt-prop-freeze="false" lt-prop-scrollable="true" lt-prop-placement="" lt-prop-show-close-button="false" on-before-close="{{method(&quot;setpopover&quot;)}}"> <template is="registerYield" yield-name="popover"><lyte-popover-content class="minw350"> <p class="">{{getI18n("crm.workflow.field.highlight.message")}}</p></lyte-popover-content> <lyte-popover-footer> <lyte-button onclick="{{action(\'closeModal\')}}" lt-prop-appearance="primary"> <template is="registerYield" yield-name="text">{{getI18n("crm.campaigninteg.setup.error.acknowledge")}}</template> </lyte-button> </lyte-popover-footer> </template> </lyte-popover> </template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[0,1,0]},{type:"componentDynamic",position:[0]},{type:"attr",position:[2,1]},{type:"registerYield",position:[2,1,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[2,1]},{type:"componentDynamic",position:[2]}]},{type:"componentDynamic",position:[1]}],_observedAttributes:["show","orginElem","scrolTop"],data:function(){return{show:Lyte.attr("boolean",{default:!1}),orginElem:Lyte.attr("string"),scrolTop:Lyte.attr("boolean",{default:!1})}},actions:{closeModal:function(){var e={params:{step:"fieldUpdateHighlight"}};this.setData("show",!1);var t=$("#fieldHighlightId");return void 0!==t&&(t=t.eq(0)).remove(),setTimeout((function(){detailView.updateTimerValue()}),3e3),detailView.popUpPresent=!1,detailView.popupclosed=!1,$("#basic").removeClass("pointerEveNone"),$("#dvinner").children().removeClass("pointerEveNone"),networkUtils.lyteInitiateRequest(Crm.getCrmBasePath()+"/WorkFlowRule.do","POST",e)}},methods:{setpopover:function(){detailView.highligthaddd=!1,this.setData("show",!1)}}});