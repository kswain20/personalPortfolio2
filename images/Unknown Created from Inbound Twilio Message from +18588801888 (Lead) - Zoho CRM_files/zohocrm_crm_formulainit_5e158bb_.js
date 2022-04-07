var crmFormulaInit=function(){this.fixedElemsVsIds={"Sub Total":"subTotal",Discount:"txtDiscount",Tax:"txtTax",Adjustment:"txtAdjustment","Grand Total":"grandTotal"},this.fixedIdVsElems={subTotal:"Sub Total",txtDiscount:"Discount",txtTax:"Tax",txtAdjustment:"Adjustment",grandTotal:"Grand Total"},this.formulaArr=[],this.formulaVsFormulaField={},this.formulaVsField={},this.labelVsColMap={},this.fieldVsFormulaMap={},this.formulaeWithoutFields=[],this.subFormVssubFormFields={},this.moduleName,this.decimalFldUITypeArr=[32,34,36,38,39,40,52,77,143,144,145,117],this.aggrArr=[],this.aggrVsAggrField={},this.fieldVsAggrMap={}};crmFormulaInit.prototype.resetProps=function(){this.formulaArr=[],this.formulaVsFormulaField={},this.formulaVsField={},this.labelVsColMap={},this.fieldVsFormulaMap={},this.formulaeWithoutFields=[],this.moduleName=null,this.subFormVssubFormFields={},this.aggrArr=[],this.aggrVsAggrField={},this.fieldVsAggrMap={}},crmFormulaInit.prototype.setupFormulaDependencies=function(e){this.moduleName=e,this.extractFormulaInvolvedFields(e),this.bindFunction()},crmFormulaInit.prototype.executeForNewFormulaExpr=function(){for(var e in this.fieldVsFormulaMap){e=e.substring(2,e.length-1);var t=this.getDomForTag(e);if(t&&1==t.length)for(var a=t.length,r=0;r<a;r++)t[r].trigger("change",{isFormulaChange:!0})}},crmFormulaInit.prototype.handlePriceBookLineItemUpdate=function(e,t,a){var r=$(productDetails.sfFldIdSuffix+"BOOKID_"+e),l=$(productDetails.sfFldIdSuffix+"QUANTITY_"+e),i=$(productDetails.sfFldIdSuffix+"LISTPRICE_"+e),s=$(productDetails.sfFldIdSuffix+"DISCOUNT_"+e),o=r.val();t?r.attr("pricingDetails",t):a||(t=r.attr("pricingDetails"));var n=t?JSON.parse(t):{},u=objectUtils.getKeys(n).length>0;o&&o.length>0&&!u&&(s.attr({percentage:0,discType:"fromPb"}),r.removeAttr("pricingDetails"),s.val("0"),s.trigger("change"));var m=l.val(),d=i.val(),f=$(productDetails.sfFldIdSuffix+"TOTAL_"+e);if(f.length>0&&u&&null!==m&&m>0&&void 0!==o&&o.length>0){var p=r.data().subformdisplaylabel,g=f.attr("expression");g=this.replaceFldLabelToValInAmountFormulaExpr(g,e,p);var c=this.convertPricingRangeHtmlToObject(n.pricingRange),h=n.pricingModel,F={};F.pricingRange=c,F.pricingModel=h,F.expression=g,F.subformDisplayLabel=p,F.quantity=m,F.listPrice=d;var v={};v.subFormIndex=e,v.userDetails=Crm.userDetails,v.userDetails.am=I18n.getMsg("AM"),v.userDetails.pm=I18n.getMsg("PM"),v.instance=this,v.priceBookCalObj=F,v.module=productDetails.module,this.formulaWorker.postMessage(v)}},crmFormulaInit.prototype.convertPricingRangeHtmlToObject=function(e){var t=[];e&&$(e).find("tbody tr").each((function(e,a){var r={},l=$(a).find("td"),i=l[0].innerText.trim().split("-"),s=i[0].trim(),o=i[1].trim(),n=l[1].innerText.trim().replace("%","").trim();r.From=s,r.To=o,r.Discount=n,t.push(r)}));return t},crmFormulaInit.prototype.replaceFldLabelToValInAmountFormulaExpr=function(e,t,a,r){if(r){var l=$(productDetails.sfFldIdSuffix+"QUANTITY_"+t);if(l.length>0){var i=l.data("label");e=e.replace("${"+a+"."+i+"}",""+r)}}else for(var s=this.formulaVsField[e],o=s.length,n=0;n<o;n++){var u=(i=s[n]).replace("${","").replace("}","").trim(),m="Crm_"+productDetails.module+"_"+this.labelVsColMap[u]+"_"+t,d=$("#"+m).data();d&&"QUANTITY"!==d.colname&&(e=this.replaceValForFldLabel(u,t,e,this))}return e},crmFormulaInit.prototype.executeformulaeWithoutFields=function(){for(var e=this.formulaeWithoutFields.length,t=0;t<e;t++){var a={};a.formula=this.removeWhiteSpaces(this.formulaeWithoutFields[t]),a.fieldKey=this.formulaeWithoutFields[t],a.userDetails=Crm.userDetails,a.userDetails.am=I18n.getMsg("AM"),a.userDetails.pm=I18n.getMsg("PM"),a.instance=this,this.formulaWorker.postMessage(a)}},$(document).ready((function(){crmFormulaInit.prototype.formulaWorker=new Worker(window.location.protocol+"//"+window.location.host+"/crm/javascript/crmFormulaUtil.js?"+crmConstants.staticVersion),crmFormulaInit.prototype.formulaWorker.onmessage=function(e){if("logPush"!==e.data.response&&"perfEntries"!==e.data.response&&"failedFetch"!==e.data.response){var t=e.data.resFromFormulaWorker,a=e.data.instance,r=e.data.subFormIndex;if(e.data.applyPricebookDiscount){var l=$(productDetails.sfFldIdSuffix+"DISCOUNT_"+r),i=$(productDetails.sfFldIdSuffix+"TOTAL_"+r).val();i=i||0,l.val(productDetails.getRoundOff(l,parseFloat(t)));var s=i?t/(i/100):0;return l.attr({percentage:productDetails.getRoundOffValue(s,!0),discType:"fromPb"}),void l.trigger("change")}if(a.formulaVsFormulaField)for(var o=a.formulaVsFormulaField[e.data.fieldKey].length,n=0;n<o;n++){var u=a.formulaVsFormulaField[e.data.fieldKey][n],m=u.split("_")[4];if(!r||!m||m===r)for(var d=$("[id='"+u+"'],[id$='"+u+"_TimeOption']"),f=d.length,p=0;p<f;p++){var g=d.eq(p),c=g.data();if("datetime"==c.formulatype||"date"==c.formulatype){var h=e.data.resFromFormulaWorker.split(" ")[0];t=h&&!Utils.isValidDate(Crm.userDetails.DATE_PATTERN,h)?new Date(e.data.resFromFormulaWorker):new Date(Utils.convertUsrtoDefaultDatePattern(e.data.resFromFormulaWorker)),t="date"==c.formulatype?Utils.getDateInUserDatePattern(t,!1):Utils.getDateTimeInUserFormat(t,!0,"false")}else if("number"==c.formulatype||"currency"==c.formulatype)t=Crm.userDetails.lineItemFormulaCalcFlow&&objectUtils.getKeys(Crm.userDetails.lineItemFormulaCalcFlow).length>0&&Crm.isInventoryModule(productDetails.module)&&(!c.subformdisplaylabel&&Crm.userDetails.lineItemFormulaCalcFlow[productDetails.module].aggrFields[c.colname]||c.subformdisplaylabel&&Crm.userDetails.lineItemFormulaCalcFlow[productDetails.module][c.colname])?productDetails.getRoundOffValue(t,!0):parseFloat(parseFloat(t).toFixed(c.decimalLength)),isNaN(t)&&(t="");else if(e.data.fieldKey.startsWith("Datepart"))try{t=CrmDateUtils.convertDateToUserPattern(new Date(e.data.resFromFormulaWorker))}catch(e){murphy.error(e)}g.val(t).change()}}}}})),crmFormulaInit.prototype.extractFormulaInvolvedFields=function(e){var t=window[e].createEditJson?window[e].createEditJson:crmCommonModule.createEditJson;for(x in t.entityMapJson)t.entityMapJson.hasOwnProperty(x)&&(t.entityMapJson[x].subFormTabId?this.labelVsColMap[t.entityMapJson[x].subformdisplaylabel+"."+t.entityMapJson[x].label]=t.entityMapJson[x].subFormTabId+"_"+t.entityMapJson[x].colname:t.entityMapJson[x].isaggrfield&&t.entityMapJson[x].suffixIndex?this.labelVsColMap[e+"."+t.entityMapJson[x].label]=t.entityMapJson[x].suffixIndex+"_"+t.entityMapJson[x].colname:this.labelVsColMap[e+"."+t.entityMapJson[x].label]=t.entityMapJson[x].colname);for(var a=null,r=this.formulaArr.length,l=0;l<r;l++){a={},t=(a=this.formulaArr[l]).match(/\${.*?}/g);this.formulaVsField[a]=[];var i=[];if(t)for(var s=t.length,o=0;o<s;o++)i.push(t[o].substring(2,t[o].length-1)),this.fieldVsFormulaMap[t[o]]||(this.fieldVsFormulaMap[t[o]]=[]),-1==this.fieldVsFormulaMap[t[o]].indexOf(l)&&this.fieldVsFormulaMap[t[o]].push(l);else this.formulaeWithoutFields.push(a);this.formulaVsField[a]=i}a=null;var n=this.aggrArr.length;for(l=0;l<n;l++){a={},t=(a=this.aggrArr[l]).match(/\${.*?}/g);if(this.formulaVsField[a]=[],t)for(s=t.length,o=0;o<s;o++)this.fieldVsAggrMap[t[o]]||(this.fieldVsAggrMap[t[o]]=[]),-1==this.fieldVsAggrMap[t[o]].indexOf(l)&&this.fieldVsAggrMap[t[o]].push(l)}},crmFormulaInit.prototype.getDomForTag=function(e,t){var a=e.match(/\w*\d*\w*\d*\./g)?e.match(/\w*\d*\w*\d*\./g)[0]:null,r=e.split(a)[1];a&&(a=a.substring(0,a.length-1)),a=this.moduleName;var l=[],i=null;if(this.labelVsColMap[e]?i="Crm_"+a+"_"+this.labelVsColMap[e]:"Salutation"==r?i="#Crm_"+a+"_FIRSTNAME_SALUTATION":this.fixedElemsVsIds[r]&&!Crm.userDetails.isLineItemSubformMvmtDone&&(i="#"+this.fixedElemsVsIds[r]),i){var s=null,o=!1,n=[];if(t)o=!0,i+="_"+t;else for(x in this.subFormVssubFormFields)if(-1!==i.indexOf(x)){o=!0;break}if(o)for(var u=(s=$("[id^='"+i+"']").filter((function(){return this.id.match(/_\d+$/g)}))).length,m=0;m<u;m++)i=s[m].id,(n=$("#"+i+"_TimeOption")).length>0&&l.push(n);else s=$("#"+i),(n=$("#"+i+"_TimeOption")).length>0&&l.push(n);return s.length>0&&l.push(s),l}},crmFormulaInit.prototype.bindFunction=function(){for(var e in this.fieldVsFormulaMap){if(e=e.substring(2,e.length-1),(r=this.getDomForTag(e))&&r.length>0)for(var t=r.length,a=0;a<t;a++)r[a].on("change",{self:this},this.executeRespectiveFormula)}for(var e in this.fieldVsAggrMap){var r;if(e=e.substring(2,e.length-1),(r=this.getDomForTag(e))&&r.length>0)for(t=r.length,a=0;a<t;a++)r[a].on("change",{self:this},this.executeRespectiveAggr)}},crmFormulaInit.prototype.getRelatedFormulae=function(e){var t=[];if(this.fieldVsFormulaMap[e])for(var a=this.fieldVsFormulaMap[e].length,r=0;r<a;r++)t.push(this.formulaArr[this.fieldVsFormulaMap[e][r]]);return t},crmFormulaInit.prototype.getRelatedAggr=function(e){var t=[];if(this.fieldVsAggrMap[e])for(var a=this.fieldVsAggrMap[e].length,r=0;r<a;r++)t.push(this.aggrArr[this.fieldVsAggrMap[e][r]]);return t},crmFormulaInit.prototype.removeWhiteSpaces=function(e){for(var t=!1,a="",r=null,l=e.length,i=0;i<l;i++)if(0!==i&&(r=e[i-1]),"\\"!==r&&"'"==e[i])t=!t,a+=e[i];else if(t||" "==e[i]){if(t){var s=e[i];"("==s?s="\\(":")"==s&&(s="\\)"),a+=s}}else"\\"!==r&&","==e[i]?a+="#&":a+=e[i];return a},crmFormulaInit.prototype.executeRespectiveFormula=function(){var e=arguments[0],t=this,a=$(t),r=e.data.self,l=a.data().label;"SALUTATION"==a.data().colname&&(l="Salutation");var i=null,s=a.data().subformdisplaylabel;if(s){i=a.attr("id").split("_")[4];var o="${"+s+"."+l+"}"}else if(l)o="${"+t.id.split("_")[1]+"."+l+"}";else if(r.fixedIdVsElems[t.id])o="${"+a.data().module+"."+r.fixedIdVsElems[t.id]+"}";var n=r.getRelatedFormulae(o),u=[],m=[],d=0;void 0!==n&&(d=n.length);for(var f=0;f<d;f++){var p=r.formulaVsField[n[f]],g=n[f];m.push(g),g=r.removeWhiteSpaces(g);var c=0;void 0!==p&&(c=p.length);for(var h=0;h<c;h++)g=r.replaceValForFldLabel(p[h],i,g,r);void 0!==g&&g.length>0&&u.push(g)}var F=0;null!==u&&(F=u.length);for(var v=0;v<F;v++){(g={}).formula=u[v],g.fieldKey=m[v],g.userDetails=Crm.userDetails,g.userDetails.am=I18n.getMsg("AM"),g.userDetails.pm=I18n.getMsg("PM"),g.instance=r,g.subFormIndex=i,r.formulaWorker.postMessage(g)}},crmFormulaInit.prototype.replaceValForFldLabel=function(e,t,a,r){var l=r.getDomForTag(e,t);if(void 0!==l&&l.length>0){var i="",s=l[0].data().uitype,o="${"+e.replace(/\s/g,"")+"}";if(a=a.replace(o,"${"+e+"}"),2==l.length){if(void 0!==l[0].val()&&l[0].val().length>0&&void 0!==l[1].val()&&l[1].val().length>0)if(200==s||786==s||14==s||24==s||333==s){var n=CrmDateUtils.getDateObjectFromString(l[1].val());i=CrmDateUtils.getDateInPattern(n,"MMM D,YYYY")+" "+l[0].val()}else i=l[0].val()+" "+l[1].val()}else if("checkbox"==l[0].attr("type"))i=l[0].prop("checked")+"";else if("DIV"==l[0].prop("tagName"))i=l[0].find("#ownerNameLookupSpan").text();else if(200==s||786==s||14==s||24==s||333==s){n=CrmDateUtils.getDateObjectFromString(l[0].val());i=CrmDateUtils.getDateInPattern(n,"MMM D,YYYY")}else i=l[0].val();void 0!==i&&"object"==typeof i&&i.length&&(i=i.join(";")),void 0!==i&&i.length>0&&[36,143,144,145].indexOf(s)<0&&(i=i.replace(/'/g,"\\'").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/,/g,"\\,"),i="STAGE"===l[0].data("colname")&&"none"!==i?i.split(":")[1]:i),void 0!==i&&(i=""===(i=2===s&&"-None-"===i?"":i)&&$.inArray(s,r.decimalFldUITypeArr)>=0?0:i,isNaN(i)||""===i||(i=Number(i).toString())),a=a.replace("${"+e+"}",""+i)}else a="";return a},crmFormulaInit.prototype.executeRespectiveAggr=function(){var e=arguments[0],t=this,a=$(t),r=e.data.self,l=a.data(),i=l.label,s=null,o=l.subformdisplaylabel;if(o){s=(s=a.attr("id")).substring(0,s.lastIndexOf("_")+1);var n="${"+o+"."+i+"}"}else if(i)n="${"+t.id.split("_")[1]+"."+i+"}";else if(r.fixedIdVsElems[t.id])n="${"+l.module+"."+r.fixedIdVsElems[t.id]+"}";for(var u=r.getRelatedAggr(n),m=$("[id^='"+s+"']"),d=u.length,f=0;f<d;f++){var p=u[f],g=p.substring(0,p.indexOf("(")),c=0;switch(g){case"SUM":case"AVG":for(var h=m.length,F=0;F<h;F++){(D=parseFloat(m.eq(F).val()))&&(c+=D)}if("AVG"==g){var v=m.length;c/=v}break;case"MIN":for(h=m.length,F=0;F<h;F++){(D=parseFloat(m.eq(F).val()))&&(c>D||0==c)&&(c=D)}break;case"MAX":for(h=m.length,F=0;F<h;F++){var D;(D=parseFloat(m.eq(F).val()))&&c<D&&(c=D)}}var I=r.aggrVsAggrField[p],b=I.length;for(F=0;F<b;F++){var x=$("#"+I[F]),M=x.data().decimalLength,y=parseFloat(parseFloat(c).toFixed(M));Crm.userDetails.lineItemFormulaCalcFlow&&objectUtils.getKeys(Crm.userDetails.lineItemFormulaCalcFlow).length>0&&Crm.isInventoryModule(productDetails.module)&&Crm.userDetails.lineItemFormulaCalcFlow[productDetails.module]&&Crm.userDetails.lineItemFormulaCalcFlow[productDetails.module].aggrFields[x.data().colname]&&(y=productDetails.getRoundOffValue(c,!0)),isNaN(y)&&(y=""),x.val(y).change()}}},crmFormulaInit.prototype.executeAggrWithoutFields=function(){for(x in this.fieldVsAggrMap){var e=x.substring(2,x.length-1),t=this.getDomForTag(e);t&&this.executeRespectiveAggr.call(t[0],{data:{self:this}})}};