var BlueprintAttachment={appendContextMenu:function(e,t,n,a){t.addClass("attachMouseEvent");var i=document.createElement("div");(i=$(i)).attr({id:"attachDropIcon"+e,class:"dIB relatedlist_dropIcon mL2",onclick:"BlueprintAttachment.showAttachmentContextMenu(this)"}),i.css({visibility:"hidden","vertical-align":"sub"}),t.append(i);var o=document.createElement("div");(o=$(o)).attr({id:"attachDropArrow"+e,class:"attachDropMenuArrow"}),o.css("z-index","2"),t.append(o);var c=document.createElement("div");if((c=$(c)).attr({id:"attachDropContainer"+e,class:"dIB attachDropMenuContainer"}),c.css({visibility:"hidden","z-index":"1"}),void 0!==a&&void 0!==a.clickFunction){var r=document.createElement("a");r=$(r),a.isImage?r.attr({id:"attach_view",class:"dIB attachDropMenuRow cboxElement",onclick:"showImagePreview(this)",href:a.clickFunction,name:"cboxElement"}):r.attr({id:"attach_view",class:"dIB attachDropMenuRow",onclick:a.clickFunction,target:"_blank"}),r.html(I18n.getMsg("crm.label.view")),c.append(r)}if("attachLink"!==n&&"attachFromTeamDrive"!==n){var l=document.createElement("a");(l=$(l)).attr({id:"attach_download",class:"dIB attachDropMenuRow"}),l.html(I18n.getMsg("crm.view.attachment.download")),void 0!==a&&l.attr("href",a.downloadFunction),c.append(l)}var s=document.createElement("a");return(s=$(s)).attr({id:"attach_delete",class:"dIB attachDropMenuRow",onclick:'BlueprintAttachment.deleteAttachmentRecord("'+e+'","'+n+'")'}),s.html(I18n.getMsg("crm.label.delete")),c.append(s),$("#FreezeLayer,#multipleFieldsEditPop").on("click",(function(){BlueprintAttachment.removeContextMenu()})),t.append(c),t.attr({onmouseenter:'$(this).find(".relatedlist_dropIcon").css("visibility","visible")',onmouseleave:'$(this).find(".relatedlist_dropIcon").css("visibility","hidden")'}),t},removeContextMenu:function(){$(".autoAttachClose").each((function(){$(this).css("visibility","hidden"),$(this).removeClass("autoAttachClose")}));var e=document.getElementById("blueprintAttachmentContextMenu");null!==e&&(e.innerHTML=""),$(".attachMouseEvent").attr({onmouseenter:'$(this).find(".relatedlist_dropIcon").css("visibility","visible")',onmouseleave:'$(this).find(".relatedlist_dropIcon").css("visibility","hidden")'});var t=$("#fieldsContainer");t.length>0&&t.css("overflow","auto")},getMode:function(e){var t={sheet:["excel","xls","csv"],show:["ppt","pptx","pps","odp"],writer:["word","txt","doc","docx","htm","html","sxw","odt","rtf"],image:["jpeg","jpg","gif","png","webp","bmp","svg"],pdfViewPlugin:["pdf"]};for(var n in t)if(t[n].indexOf(e)>-1)return n;return"default"},appendAttachmentOptions:function(e,t,n,a,i,o,c,r,l){var s,d="";"attachLink"===t||-1===a.lastIndexOf(".")?(s="",r=!1):s=a.substring(a.lastIndexOf(".")+1);var m=BlueprintAttachment.getMode(s),p={},u=!1;"image"===m&&(m="default",u=!0);var h="";"attachLink"!==t&&"attachFromTeamDrive"!==t&&(h=u?encodeURIComponent(a):$ESAPI.encoder().encodeForJavaScript(encodeURIComponent(a)));var v="pdfViewPlugin"===m?"'"+m+"'":"";switch(t){case"attachLink":var f=n;-1===f.indexOf("://")&&(f=window.location.protocol+"//"+f),d='crmRelatedList.openLinkAndTitleChange("'+Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&module="+encodeURIComponent(i)+"&id="+n+"&name="+encodeURIComponent(a)+"&linkURL="+encodeURIComponent(f)+'","'+f+'",this)',p.clickFunction=d;break;case"fileUpload":d=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&fileId="+n+"&module="+encodeURIComponent(i)+"&name="+h+"&downLoadMode="+m,p.clickFunction=r?"openSheetForExport('"+d+"',"+v+")":void 0,p.downloadFunction=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&fileId="+n+"&module="+encodeURIComponent(i)+"&name="+encodeURIComponent(a)+"&downLoadMode=default";break;case"attachDocuments":d=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&fileId="+n+"&module="+encodeURIComponent(i)+"&name="+h+"&linkDocs=true",p.clickFunction=r?"triggerLinkDocsView('"+d+"','"+s+"')":void 0,p.downloadFunction=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&fileId="+n+"&module="+encodeURIComponent(i)+"&name="+encodeURIComponent(a)+"&downLoadMode=default&linkDocs=true";break;case"attachGDocs":case"attachZDocs":d=(d=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&module="+encodeURIComponent(i)+"&name="+h+"&moduleId="+o+"&service="+c+"&isZDocs=true&downLoadMode="+m)+("attachZDocs"===t?"&fileId=":"&gDocId=")+n,p.clickFunction=r?"openSheetForExport('"+d+"',"+v+")":void 0,p.downloadFunction=Crm.getCrmBasePath()+"/specific/ViewAttachment?featureName=blueprint&isTempAttachment=true&module="+encodeURIComponent(i)+"&name="+encodeURIComponent(a)+"&moduleId="+o+"&service="+c+"&isZDocs=true&downLoadMode=default",p.downloadFunction=p.downloadFunction+("attachZDocs"===t?"&fileId=":"&gDocId=")+n;break;case"attachFromTeamDrive":p.clickFunction="networkUtils.openUrl('"+l+"')",u=!1}if(u){var g=d;g=g.replace("specific/ViewAttachment","ViewImage"),p.clickFunction=g,p.isImage=!0}return p},showAttachmentContextMenu:function(e){if(!($(".autoAttachClose").length>0)){e=$(e);var t=$("#blueprintAttachmentContextMenu"),n=e.parent().parent(),a=n.find(".attachDropMenuContainer").clone(),i=n.find(".attachDropMenuArrow").clone(),o=e.offset();if(o.left=o.left+e.width(),o.top=o.top-3,i.css({position:"absolute",visibility:"visible",top:"2px"}),a.css({visibility:"visible",left:"9px"}),0===t.length){var c=document.createElement("div");(t=$(c)).attr("id","blueprintAttachmentContextMenu"),t.css({position:"absolute",visibility:"hidden","z-index":"10"}),$("#multipleFieldsEditPop").append(t)}$("#bp-attachment").css("display","none"),t.append(i),t.append(a),t.css("visibility","visible"),t.addClass("autoAttachClose"),t.offset(o),n.find(".relatedlist_dropIcon").addClass("autoAttachClose"),$(".attachMouseEvent").removeAttr("onmouseenter onmouseleave");var r=$("#fieldsContainer");r.length>0&&r.css("overflow","hidden")}event.stopPropagation()},deleteAttachmentRecord:function(e){var t="bp_attachitem_"+e,n=document.getElementById(t),a=$(n).parent().parent();if($("#transitionAttachDiv .labelValCreate #BP_fileDetails").length<=1){var i=$("#transitionAttachDiv .attachmentsLabel");i.removeClass("attachmentsLabel blueprintAttachment"),i.removeAttr("style");var o=i.outerHTML(),c=$("#transitionAttachDiv .labelValCreate");c.addClass("attachmentsLabel"),i.remove(),c.html(o),c.attr("isAttachmentAdded","false")}else a.remove()},getAttachIconClass:function(e,t){switch(e){case"fileUpload":case"attachZDocs":case"attachDocuments":case"attachGDocs":var n=t.substring(t.lastIndexOf(".")+1);return BlueprintAttachment.getExtensionType(n)+"-icon";case"attachLink":return"link-iconAtc";case"attachFromTeamDrive":return"svgIcons ico-teamDrive"}},getExtensionType:function(e){var t={png:["jpeg","jpg","gif","png","webp","bmp","svg"],word:["doc","docx","odt","rtf"],excel:["csv","xls","xlsx","ods","xlsm","sxc","tsv"],ppt:["odp","pps","pot","pptx","ppt"],movie:["avi","wmv","mp4","mpeg","mpg","mov","flv","mkv","webm"],mp3:["mp3","ogg","oga","wma","m4p","m4a","au","3gp"],zip:["zip","zipx","tar","gz","z","cab","rar","bz2","lzh","7z","img","iso"],txt:"txt",html:"html",pdf:"pdf",xml:"xml"};for(var n in t)if(t[n].indexOf(e)>-1)return n;return"file"},validateFilePreview:function(e){var t={};t.savedFileDetails=JSON.stringify(e),t.moduleId=$("#multipleFieldEditEntityId").val(),t.featureName="blueprint",t.action="getFileDetails",networkUtils.setCsrfParam(t);var n={};return n.params=t,networkUtils.lyteInitiateRequest(ProcessFlow.PROCESS_URL,"POST",n)},appendClickEventForDropdown:function(){var e=$(".blueprintAttachment .atch-dropdown"),t=e.attr("onclick");t=void 0!==t&&t.length>0&&";"!==t[t.length-1]?t.concat(";BlueprintAttachment.removeContextMenu()"):t.concat("BlueprintAttachment.removeContextMenu()"),e.attr("onclick",t)}};