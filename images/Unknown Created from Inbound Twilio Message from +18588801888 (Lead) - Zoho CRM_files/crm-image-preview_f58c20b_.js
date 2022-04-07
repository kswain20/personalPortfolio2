Lyte.Component.register("crm-image-preview",{_template:'<template tag-name="crm-image-preview"> <lyte-messagebox id="tempraryError" lt-prop-yield="true" lt-prop-show="{{lbind(globalData.error)}}" lt-prop-duration="3000" lt-prop-type="error"> <template is="registerYield" yield-name="messageboxYield"> <span> {{customMessages}} </span> </template> </lyte-messagebox> <template is="if" value="{{expHandlers(expHandlers(expHandlers(previewConfiguration.crop,\'===\',true),\'&amp;&amp;\',expHandlers(showCropper,\'===\',true)),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <crm-image-cropper image-url="{{imageConfiguration.previewurl}}" show-cropper="{{lbind(showCropper)}}" on-save="{{method(&quot;saveCropCallback&quot;)}}" on-cancel="{{method(&quot;cancelCropCallback&quot;)}}"></crm-image-cropper> </template></template> <lyte-colorbox lt-prop-id="imageColorBox" class="imagePreviewTest" lt-prop-class="imageFieldPreviewGallery" lt-prop-add-orientation="true" lt-prop="{&quot;selectors&quot;:[&quot;.{{previewConfiguration.selector}}&quot;],&quot;yield&quot;:true}" lt-prop-esc-key="true" lt-prop-wheel-zoom="false" lt-prop-animation="slide" lt-prop-overlay-close="false" lt-prop-width="80%" lt-prop-height="{{imageConfiguration.contenthgt}}px;" lt-prop-type="image" on-load="{{method(&quot;currentImageLoadCallback&quot;)}}" on-failure="{{method(&quot;currentImageFailCallback&quot;)}}" on-navigate="{{method(&quot;navigateCallback&quot;)}}" on-before-close="{{method(&quot;colorboxBeforeClose&quot;)}}"> <template is="registerYield" yield-name="colorBoxYield"> <div class="{{concat(\'imagePreviewParent lyteCBox \',if(zoomConfiguration.imageZoomState,\'\',\'notInZommState \'),if(previewConfiguration.inCropState,\'inCropState \',\'\'),if(isCrmPlus,\'previewFromCrmPlus \',\'\'))}}" tabindex="0"> <lyte-colorbox-header> <div class="imagePreviewHeaderWrap"> <template is="if" value="{{expHandlers(previewConfiguration.fileName,\'===\',true)}}"><template case="true"> <div class="imageNameWrap fL"> <template is="if" value="{{expHandlers(expHandlers(globalData.imageName,\'===\',true),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <lyte-input lt-prop-class="imageNameInput" class="{{concat(\'imageNameInputWrap dIB crm-font-bold \',if(isEditable,\'\',\'eventNone \'))}}" lt-prop-placeholder="{{getI18n(\'crm.image.empty.name.placeholder\')}}" lt-prop-value="{{lbind(imageConfiguration.newName)}}" lt-prop-maxlength="100" lt-prop-appearance="box" lt-prop-type="text" on-blur="{{method(\'savethisName\',imageConfiguration.name,imageConfiguration.uploadid)}}" onkeyup="{{action(\'closeNameEditArea\',imageConfiguration.name,imageConfiguration.uploadid,event)}}" data-zcqa="imageName_input"></lyte-input> </template></template> <template is="if" value="{{expHandlers(globalData.imageName,\'===\',false)}}"><template case="true"> <template is="if" value="{{expHandlers(isEditable,\'!\')}}"><template case="true"> <div> <div class="crm-font-bold savedImageNameReadOnly f14 dIB" data-zcqa="imageName_Parent_Div"> <div class="dIB" lt-prop-title="{{renderNameToolTip(concat(imageConfiguration.name,imageConfiguration.extn))}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;bottom&quot;}"> <p class="{{concat(\'imageFileName \',if(globalData.imagePara,\'dIB vam\',\' \'))}}">{{imageConfiguration.name}}</p> <span class="dIB vam imageType">{{imageConfiguration.extn}}</span> </div> </div> </div> </template><template case="false"> <div> <div class="{{concat(\'crm-font-bold savedImageName f14 dIB \',if(isEditable,\' \',\'eventNone \'))}}" onclick="{{action(\'openNameEditArea\',imageConfiguration.name)}}" data-zcqa="imageName_Parent_Div"> <div class="dIB" lt-prop-title="{{renderNameToolTip(concat(imageConfiguration.name,imageConfiguration.extn))}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;bottom&quot;}"> <p class="{{concat(\'imageFileName \',if(globalData.imagePara,\'dIB vam\',\' \'))}}">{{imageConfiguration.name}}</p> <span class="dIB vam imageType">{{imageConfiguration.extn}}</span> <span class="savedImageNameEditIcon" lt-prop-title="{{getI18n(\'crm.button.edit\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> <div class="clearB"></div> </div> </div> </div> </template></template> </template></template> </div> </template></template> <div class="imagePreviewActionsWrap"> <template is="if" value="{{expHandlers(expHandlers(previewConfiguration.crop,\'===\',true),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <template is="if" value="{{expHandlers(imageConfiguration.cropErrorType,\'===\',\'loading\')}}"><template case="true"> <span class="imageCropIcon imagePrevieActions imageActionDisabled" data-zcqa="wayToEditPage_preview_loading"></span> </template><template case="false"><template is="if" value="{{expHandlers(imageConfiguration.cropErrorType,\'===\',\'best_fit\')}}"><template case="true"> <span class="imageCropIcon imagePrevieActions imageActionDisabled" data-zcqa="wayToEditPage_preview_readonly_bestfit" lt-prop-title="{{getI18n(\'crm.image.error.best.fit\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> </template><template case="false"><template is="if" value="{{expHandlers(imageConfiguration.cropErrorType,\'===\',\'type_gif\')}}"><template case="true"> <span class="imageCropIcon imagePrevieActions imageActionDisabled" data-zcqa="wayToEditPage_preview_readonly_gif" lt-prop-title="{{getI18n(\'crm.image.error.gif\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> </template><template case="false"> <span class="imageCropIcon imagePrevieActions" data-zcqa="wayToEditPage_preview" onclick="{{action(\'wayToEditPage\')}}" lt-prop-title="{{getI18n(\'crm.image.crop.and.rotate\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> </template></template></template></template></template></template> </template></template> <template is="if" value="{{expHandlers(previewConfiguration.downloadImage,\'===\',true)}}"><template case="true"> <lyte-colorbox-download> <a href="javascript:;" class="imageDownloadIcon imagePrevieActions" data-zcqa="image_download" lt-prop-title="{{getI18n(\'crm.view.attachment.download\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></a> </lyte-colorbox-download> </template></template> <template is="if" value="{{expHandlers(previewConfiguration.infoIcon,\'===\',true)}}"><template case="true"> <div class="extraImageInfoIcon imagePrevieActions" onmouseenter="{{action(\'showImgDetailsPop\',true)}}" onmouseleave="{{action(\'showImgDetailsPop\',false)}}" data-zcqa="infoIcon_hover_action"> <lyte-popover class="imageExtraInfoDetails" lt-prop-wrapper-class="imageExtraInfoDetailsWrap" lt-prop-show="{{previewConfiguration.imageExtraInfo}}" lt-prop-placement="bottom" lt-prop-freeze="false" lt-prop-show-close-button="false" lt-prop-origin-elem=".extraImageInfoIcon"> <template is="registerYield" yield-name="popover"> <div class="exDetailsRow"> <span class="exDetailKey f12">{{getI18n(\'crm.image.resolution\')}}</span> <span class="exDetailsValue f12">{{imageConfiguration.resolution}}</span> </div> <div class="exDetailsRow"> <span class="exDetailKey f12">{{getI18n(\'crm.attachment.size\')}}</span> <span class="exDetailsValue f12">{{imageConfiguration.size}}</span> </div> </template> </lyte-popover> </div> </template></template> <template is="if" value="{{expHandlers(expHandlers(previewConfiguration.deleteIcon,\'===\',true),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <span class="imageDeleteIcon imagePrevieActions" data-zcqa="wayToEditPage_preview_delete" onclick="{{action(\'deleteCurrentImage\',imageConfiguration.uploadid)}}" lt-prop-title="{{getI18n(\'crm.label.delete\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> </template></template> </div> <lyte-colorbox-close class="imagePreviewClose" data-zcqa="image_colourbox_close" lt-prop-title="{{getI18n(\'crm.label.close\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></lyte-colorbox-close> <div class="clearB"></div> </div> </lyte-colorbox-header> <lyte-colorbox-content> <lyte-colorbox-loading-icon> <template is="if" value="{{expHandlers(globalData.imageLoaded,\'===\',true)}}"><template case="true"> <div class="imageLoadWrap"> <div class="loadRotateElem"></div> </div> </template></template> </lyte-colorbox-loading-icon> <span class="lyteColorboxLoadingImg"></span> </lyte-colorbox-content> <template is="if" value="{{expHandlers(imageData.length,\'>\',1)}}"><template case="true"> <lyte-colorbox-previous lt-prop-title="{{getI18n(\'crm.label.previous\')}}" lt-prop-tooltip-style="font-size: 12px;" data-zcqa="image_navigation_previous" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"> <div class="lyteColorboxPreviousIcon"></div> </lyte-colorbox-previous> <lyte-colorbox-next lt-prop-title="{{getI18n(\'crm.label.next\')}}" lt-prop-tooltip-style="font-size: 12px;" data-zcqa="image_navigation_next" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"> <div class="lyteColorboxNextIcon"></div> </lyte-colorbox-next> </template></template> <div class="imagePreviewFooterWrap"> <lyte-colorbox-description> <div class="imageDescWrapContainer"> <template is="if" value="{{expHandlers(previewConfiguration.description,\'===\',true)}}"><template case="true"> <div class="imageDescriptionWrap {{if(isEditable,\' \',\'eventNone \')}} {{if(previewConfiguration.newDescHover,\'newDescHoverState \',\'\')}}"> <template is="if" value="{{expHandlers(globalData.imageDesc,\'===\',true)}}"><template case="true"> <p class="descSaveValue " data-zcqa="editThisDescription_preview" onclick="{{action(\'editThisDescription\',this)}}">{{imageConfiguration.newDesc}}</p> </template></template> <template is="if" value="{{expHandlers(expHandlers(globalData.imageDescHeader,\'===\',true),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <a href="javascript:;" class="f12 cP dIB openAddDescriptionInit" data-zcqa="openAddDescription_preview" onclick="{{action(\'openAddDescription\')}}">{{getI18n(\'crm.image.description\')}}</a> </template></template> <template is="if" value="{{expHandlers(expHandlers(globalData.imageDescInput,\'===\',true),\'&amp;&amp;\',expHandlers(isEditable,\'===\',true))}}"><template case="true"> <lyte-input class="imageDescInputWrap" lt-prop-placeholder="{{getI18n(\'crm.image.description\')}}" lt-prop-class="imageDescInput" lt-prop-type="textarea" lt-prop-update-delay="0" lt-prop-value="{{lbind(imageConfiguration.newDesc)}}" lt-prop-maxlength="255" lt-prop-text-area-resize=" { &quot;vertical&quot; : false , &quot;horizontal&quot; : false } " on-blur="{{method(\'savethisDesc\',imageConfiguration.desc,imageConfiguration.uploadid)}}" onkeydown="{{action(\'closeDescriptionArea\',imageConfiguration.desc,imageConfiguration.uploadid,event)}}" data-zcqa="imageDescInputWrap_input"> </lyte-input> </template></template> </div> </template></template> <div class="clearB"></div> </div> </lyte-colorbox-description> <template is="if" value="{{expHandlers(previewConfiguration.zoom,\'===\',true)}}"><template case="true"> <div class="lyteColorboxUtilDiv zoomingContainerWrap"> <span class="{{concat(\'imageZoomAction \',\'imageZoomInAction \',if(zoomConfiguration.plusDisabled,\'lyteColorboxDisabled \',\' \'))}}" data-zcqa="image_zoomin" onclick="{{action(\'imageZoomIn\')}}" lt-prop-title="{{getI18n(\'crm.image.zoom.in\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> <div class="imageZoomRatio"> <lyte-dropdown lt-prop-position="up" on-option-selected="{{method(&quot;zoomByPerspective&quot;)}}" class="scaleDropDownValue" lt-prop-disabled-list="{{zoomConfiguration.zoomDisabledList}}" lt-prop-hover="true" lt-prop-placeholder="dropDown" data-zcqa="image_ratio_container"> <template is="registerYield" yield-name="yield"> <lyte-drop-button style="border:none;"> <span class="imageZoomRatioPercent"> {{zoomRatio}}% </span> <lyte-icon class="dropdown"> </lyte-icon> </lyte-drop-button> <lyte-drop-box class="scaleDropDownWrap"> <lyte-drop-body> <lyte-drop-item data-value="actual" data-zcqa="image_zoom_actual">{{getI18n(\'crm.image.actual.size\')}}</lyte-drop-item> <lyte-drop-item data-value="reset" data-zcqa="image_zoom_reset">{{getI18n(\'crm.image.reset\')}}</lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> </div> <span class="{{concat(\'imageZoomAction \',\'imageZoomOutAction \',if(zoomConfiguration.minusDisabled,\'lyteColorboxDisabled \',\' \'))}}" data-zcqa="image_zoomout" onclick="{{action(\'imageZoomOut\')}}" lt-prop-title="{{getI18n(\'crm.image.zoom.out\')}}" lt-prop-tooltip-style="font-size:1.2rem;" lt-prop-tooltip-config="{&quot;position&quot; : &quot;default&quot;}"></span> </div> </template></template> <div class="imageListViewWrap"> <ul class="p0 m0 imageListWrap"> <template is="for" items="{{imageDataThumbnails}}" item="image" index="index"> <li class="{{concat(\'imageFieldImageWrap \',if(image.selected,\'sel \',\' \'))}}" data-pos="{{arithResult(index,1,\'+\')}}" data-thumb-val="{{arithResult(index,1,\'+\')}} {{getI18n(\'crm.label.lowercase.of\')}} {{imageDataThumbnails.length}}" onclick="{{action(\'previewThisImage\',image.uploadid,index)}}" data-zcqa="imagePreview_{{index}}"> <img class="imageFieldImage" src="{{image.src}}" id="{{image.uploadid}}_preview"> </li> </template> <li class="clearB p0"></li> </ul> </div> </div> </div> </template> </lyte-colorbox> </template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"text",position:[1,1]}]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3]},{type:"if",position:[3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[5]},{type:"registerYield",position:[5,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1,1]},{type:"if",position:[1,1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"attr",position:[1,1,1,1]},{type:"text",position:[1,1,1,1,0]},{type:"text",position:[1,1,1,3,0]}]},false:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"attr",position:[1,1,1]},{type:"attr",position:[1,1,1,1]},{type:"text",position:[1,1,1,1,0]},{type:"text",position:[1,1,1,3,0]},{type:"attr",position:[1,1,1,5]}]}},default:{}}]}},default:{}}]}},default:{}},{type:"attr",position:[1,1,1,3,1]},{type:"if",position:[1,1,1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}}]}},default:{}}]}},default:{}}]}},default:{}},{type:"attr",position:[1,1,1,3,3]},{type:"if",position:[1,1,1,3,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[1,1,1,3,5]},{type:"if",position:[1,1,1,3,5],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"registerYield",position:[1,1,1],dynamicNodes:[{type:"text",position:[1,1,0]},{type:"text",position:[1,3,0]},{type:"text",position:[3,1,0]},{type:"text",position:[3,3,0]}]},{type:"componentDynamic",position:[1,1]}]}},default:{}},{type:"attr",position:[1,1,1,3,7]},{type:"if",position:[1,1,1,3,7],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,1,1,5]},{type:"componentDynamic",position:[1,1,1,5]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3,1,1]},{type:"if",position:[1,3,1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"componentDynamic",position:[1,3,1]},{type:"componentDynamic",position:[1,3]},{type:"attr",position:[1,5]},{type:"if",position:[1,5],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3]},{type:"componentDynamic",position:[3]}]}},default:{}},{type:"attr",position:[1,7,1,1,1]},{type:"if",position:[1,7,1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]}]}},default:{}},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]}]}},default:{}},{type:"attr",position:[1,5]},{type:"if",position:[1,5],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]}]}},default:{}}]}},default:{}},{type:"componentDynamic",position:[1,7,1]},{type:"attr",position:[1,7,3]},{type:"if",position:[1,7,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"attr",position:[1,3,1]},{type:"registerYield",position:[1,3,1,1],dynamicNodes:[{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,3]},{type:"componentDynamic",position:[1]},{type:"text",position:[3,1,1,0]},{type:"componentDynamic",position:[3,1,1]},{type:"text",position:[3,1,3,0]},{type:"componentDynamic",position:[3,1,3]},{type:"componentDynamic",position:[3,1]},{type:"componentDynamic",position:[3]}]},{type:"componentDynamic",position:[1,3,1]},{type:"attr",position:[1,5]}]}},default:{}},{type:"attr",position:[1,7,5,1,1]},{type:"for",position:[1,7,5,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]}]}]},{type:"componentDynamic",position:[5]}],_observedAttributes:["imageData","imageDataPreview","imageDataThumbnails","showPreview","showCropper","constants","customMessages","processFuther","readonly","isCrmPlus","entityId","usedNames","globalData","isEditable","fieldid","module","zoomConfiguration","zoomRatio","previewConfiguration","imageConfiguration"],data:function(){return{imageData:Lyte.attr("array",{default:[],hideAttr:!0}),imageDataPreview:Lyte.attr("array",{default:[],hideAttr:!0}),imageDataThumbnails:Lyte.attr("array",{default:[],hideAttr:!0}),showPreview:Lyte.attr("boolean",{default:!1,hideAttr:!0}),showCropper:Lyte.attr("boolean",{default:!1,hideAttr:!0}),constants:Lyte.attr("object",{default:{nameLength:104,descriptionLength:255}}),customMessages:Lyte.attr("string",{default:"Error",hideAttr:!0}),processFuther:Lyte.attr("string",{default:"allow",hideAttr:!0}),readonly:Lyte.attr("boolean",{default:!1,hideAttr:!0}),isCrmPlus:Lyte.attr("boolean",{default:!1,hideAttr:!0}),entityId:Lyte.attr("string",{default:void 0,hideAttr:!0}),usedNames:Lyte.attr("array",{default:[],hideAttr:!0}),globalData:Lyte.attr("object",{default:{error:!1,imageLoaded:!1}}),isEditable:Lyte.attr("boolean",{default:!1,hideAttr:!0}),fieldid:Lyte.attr("string",{default:void 0,hideAttr:!0}),module:Lyte.attr("string",{default:void 0,hideAttr:!0}),zoomConfiguration:Lyte.attr("object",{default:{zoomRatioArray:[8.33,12.5,16.67,25,33.33,50,66.67,100,200,300],plusDisabled:!1,minuDisabled:!1}}),zoomRatio:Lyte.attr("number",{default:0,hideAttr:!0}),previewConfiguration:Lyte.attr("object",{default:{},hideAttr:!0}),imageConfiguration:Lyte.attr("object",{default:{},hideAttr:!0})}},didConnect:function(){for(var t=this.getData("previewConfiguration").currentId,e=this.getData("imageData"),a=e.length,i=[],o=0;o<a;o++){var s={};s.src=e[o].src,s.uploadid=e[o].uploadid,e[o].state&&null!==e[o].state||(Lyte.arrayUtils(this.getData("imageDataThumbnails"),"push",s),Lyte.arrayUtils(this.getData("imageDataPreview"),"push",JSON.parse(JSON.stringify(e[o]))),i.push(e[o].filename))}!0===this.getData("previewConfiguration").fileName&&this.setData("usedNames",i),"undefined"!=typeof CrmPlusImpl&&CrmPlusImpl.isLoadedInCrmplus()&&this.setData("isCrmPlus",!0),this.previewThisImageComplete(t,void 0,!1),LyteColorbox._box.classList.add("imageField")},methods:{zoomByPerspective:function(t,e){!0===this.getData("previewConfiguration.zoom")&&("actual"===e?(document.querySelector("lyte-colorbox").zoomBy(100),this.setData("zoomRatio",100)):(document.querySelector("lyte-colorbox").zoomBy("reset"),this.setData("zoomRatio",this.getData("zoomConfiguration.resetRatio"))))},currentImageLoadCallback:function(t){Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!0);this.getData("imageConfiguration").contenthgt;t.classList.add("previewImage"),t.classList.add("vH"),Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!1),$L(".lyteColorboxDisplay").addClass("imagePreviewColorbox"),setTimeout(function(){this.calculateInitialImageSize()}.bind(this),50)},currentImageFailCallback:function(t){t.classList.remove("previewImage"),t.classList.remove("vH"),Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!1),$L(".lyteColorboxDisplay").removeClass("imagePreviewColorbox")},saveCropCallback:function(t){if(!0===this.getData("previewConfiguration").crop&&!0===this.getData("previewConfiguration").fileName&&!0===this.getData("previewConfiguration").description){var e=this.getData("imageConfiguration");Lyte.objectUtils(e,"add","cropErrorType","loading");var a=e.name+e.extn,i=this.getCroppedBlob(t,e.extn.toLowerCase()),o=URL.createObjectURL(i),s=new FormData;s.append("file",i,encodeURIComponent(a)),LyteColorbox._domEle.style.display="none",Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!0);var r=Crm.getCrmBasePath()+"/fileattach.do?action=imageUFBlobAttach&fieldId="+this.getData("fieldid")+"&module="+this.getData("module")+"&type=image";r=Crm.getPortalURL(r);var l=this;$L.ajax({url:r,type:"POST",data:s,enctype:"multipart/form-data",processData:!1,currentUploadid:e.uploadid,contentType:!1,headers:{"X-ZCSRF-TOKEN":csrfParamName+"="+csrfToken},success:function(t){try{if(void 0===t.uploadedImages)return l.setData("customMessages",I18n.getMsg("crm.image.crop.error")),Lyte.objectUtils(l.getData("globalData"),"add","error",!0),LyteColorbox._domEle.style.display="",Lyte.objectUtils(l.getData("globalData"),"add","imageLoaded",!1),void l.calculateInitialImageSize();var e=this.currentUploadid,a=l.getData("imageDataPreview"),i=a.length,s=l.getData("imageDataThumbnails"),r={};l.constructSizeMinimizedImage(o).then((function(n){for(var p=document.querySelector("lyte-colorbox"),d=0;d<i;d++)if(a[d].uploadid===e){r.oldStream=a[d].stream,void 0!==a[d].uploadedValues?(a[d]=t.uploadedImages[0],a[d].uploadid=e):(a[d].stream=t.uploadedImages[0].stream,a[d].fileId=t.uploadedImages[0].fileId),a[d].size=l.convertStreamToActualSize(t.uploadedImages[0].stream),a[d].encryptedUploadId=t.uploadedImages[0].encryptedUploadId,a[d].completed=!0,a[d].src=n.url,a[d].original_src=o,r=JSON.parse(JSON.stringify(a[d])),s[d].uploadid=e,s[d].src=n.url,Lyte.arrayUtils(s,"replaceAt",d,s[d]),Lyte.arrayUtils(a,"replaceAt",d,a[d]),p.replace(d+1,{lytecboxHref:o,lytecboxDlink:o}),l.previewThisImageComplete(e,d,!0);break}LyteColorbox._domEle.style.display="",Lyte.objectUtils(l.getData("globalData"),"add","imageLoaded",!1),l.calculateInitialImageSize(),l.getMethods("onCrop")&&l.executeMethod("onCrop",l.getData("previewConfiguration").currentId,r)}))}catch(t){LyteColorbox._domEle.style.display="",Lyte.objectUtils(l.getData("globalData"),"add","imageLoaded",!1),murphy.error(t)}},error:function(){l.setData("customMessages",I18n.getMsg("crm.image.crop.error")),Lyte.objectUtils(l.getData("globalData"),"add","error",!0),LyteColorbox._domEle.style.display="",Lyte.objectUtils(l.getData("globalData"),"add","imageLoaded",!1),l.calculateInitialImageSize()}})}Lyte.objectUtils(this.getData("previewConfiguration"),"add","inCropState",!1)},cancelCropCallback:function(){Lyte.objectUtils(this.getData("previewConfiguration"),"add","inCropState",!1)},navigateCallback:function(t,e,a){if(!$L(".imageEditParent").is(":visible"))if("allow"===this.getData("processFuther")){var i=this.getData("imageDataPreview");this.previewThisImageComplete(i[a-1].uploadid,a-1,!1)}else Lyte.objectUtils(this.getData("globalData"),"add","error",!0)},colorboxBeforeClose:function(){return this.closePreview()},savethisDesc:function(t,e){!0===this.getData("previewConfiguration").description&&this.savethisDescComplete(t,e)},savethisName:function(t,e){!0===this.getData("previewConfiguration").fileName&&this.saveNameComplete(t,e)}},actions:{deleteCurrentImage:function(t){if(!0===this.getData("previewConfiguration.deleteIcon")&&!0===this.getData("isEditable"))for(var e=this.getData("imageDataPreview"),a=e.length,i=document.querySelector("lyte-colorbox"),o=0;o<a;o++)if(e[o].uploadid===t){Lyte.arrayUtils(this.getData("imageDataThumbnails"),"removeAt",o,1),Lyte.arrayUtils(this.getData("imageDataPreview"),"removeAt",o,1),i.delete(o+1);var s=o===a-1?0:o;if(void 0!==e[s]&&this.previewThisImageComplete(e[s].uploadid,o,!0),this.getMethods("onDelete")&&this.executeMethod("onDelete",t),0===e.length)return this.closePreview();break}},imageZoomOut:function(){var t=this.getData("zoomConfiguration");if(!0===this.getData("previewConfiguration.zoom")&&!1===t.minusDisabled){for(var e,a=t.zoomRatioArray,i=this.getData("zoomRatio"),o=a.length-1;o>=0;o--)if(i>a[o]){e=a[o];break}void 0!==e&&(document.querySelector("lyte-colorbox").zoomBy(e),this.setData("zoomRatio",e))}},imageZoomIn:function(){if(!0===this.getData("previewConfiguration.zoom")&&!1===this.getData("zoomConfiguration.plusDisabled")){for(var t,e=this.getData("zoomConfiguration.zoomRatioArray"),a=this.getData("zoomRatio"),i=e.length,o=0;o<i;o++)if(a<e[o]){t=e[o];break}void 0!==t&&(document.querySelector("lyte-colorbox").zoomBy(t),this.setData("zoomRatio",t))}},showImgDetailsPop:function(t){t?Lyte.objectUtils(this.getData("previewConfiguration"),"add","imageExtraInfo",!0):Lyte.objectUtils(this.getData("previewConfiguration"),"add","imageExtraInfo",!1)},openAddDescription:function(){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration").description){if("allow"!==this.getData("processFuther"))return void Lyte.objectUtils(this.getData("globalData"),"add","error",!0);this.constructDescStructure(!1,!0,void 0),Lyte.objectUtils(this.getData("imageConfiguration"),"add","newDesc",""),Lyte.objectUtils(this.getData("imageConfiguration"),"add","desc",""),$L(".imageDescInputWrap").focus()}},wayToEditPage:function(){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration").crop){if("allow"!==this.getData("processFuther"))return void Lyte.objectUtils(this.getData("globalData"),"add","error",!0);document.querySelector("lyte-colorbox").zoomBy("reset"),this.setData("zoomRatio",this.getData("zoomConfiguration.resetRatio")),Lyte.objectUtils(this.getData("zoomConfiguration"),"add","imageZoomState",!1),this.setData("showCropper",!0),setTimeout(function(){Lyte.objectUtils(this.getData("previewConfiguration"),"add","inCropState",!0)}.bind(this),100)}},editThisDescription:function(){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration").description){if("desc"!==this.getData("processFuther")&&"allow"!==this.getData("processFuther"))return void Lyte.objectUtils(this.getData("globalData"),"add","error",!0);var t=this.getData("imageConfiguration").desc;Lyte.objectUtils(this.getData("imageConfiguration"),"add","desc",t),Lyte.objectUtils(this.getData("imageConfiguration"),"add","newDesc",t),this.constructDescStructure(!1,!0,!1),this.calculateInitialImageSize(),$L(".imageDescInputWrap").focus()}},openNameEditArea:function(t){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration").fileName){if("name"!==this.getData("processFuther")&&"allow"!==this.getData("processFuther"))return void Lyte.objectUtils(this.getData("globalData"),"add","error",!0);Lyte.objectUtils(this.getData("globalData"),"add","imageName",!0),Lyte.objectUtils(this.getData("imageConfiguration"),"add","newName",""),Lyte.objectUtils(this.getData("imageConfiguration"),"add","name",t),Lyte.objectUtils(this.getData("imageConfiguration"),"add","newName",t),$L(".imageNameInputWrap").focus()}},closeNameEditArea:function(t,e,a){!0===this.getData("previewConfiguration").fileName&&13===a.which&&this.saveNameComplete(t,e)},closeDescriptionArea:function(t,e,a){!0===this.getData("previewConfiguration").description&&13===a.which&&(a.preventDefault(),this.savethisDescComplete(t,e))},previewThisImage:function(t,e){this.previewThisImageComplete(t,e,!0)}},disableZoomButtons:function(t){var e=this.getData("zoomConfiguration"),a=e.zoomRatioArray,i=a.length,o=[];t.newValue===e.resetRatio&&o.push("reset"),100===t.newValue&&o.push("actual"),Lyte.objectUtils(e,"add","zoomDisabledList",o),t.newValue<=e.resetRatio?Lyte.objectUtils(e,"add","imageZoomState",!1):Lyte.objectUtils(e,"add","imageZoomState",!0),t.newValue<=a[0]?Lyte.objectUtils(e,"add","minusDisabled",!0):Lyte.objectUtils(e,"add","minusDisabled",!1),t.newValue>=a[i-1]?Lyte.objectUtils(e,"add","plusDisabled",!0):Lyte.objectUtils(e,"add","plusDisabled",!1),setTimeout((function(){var t=$(LyteColorbox._domEle);t.height()>renderingUtils.windowHeight&&t.width()>renderingUtils.windowWidth?t.removeClass("previewImage"):t.hasClass("previewImage")||t.addClass("previewImage")}),301)}.observes("zoomRatio"),calculateInitialImageSize:function(){var t=renderingUtils.windowHeight,e=renderingUtils.windowWidth,a=$L(".imagePreviewHeaderWrap").outerHeight(),i=$L(".imagePreviewFooterWrap").outerHeight(),o=LyteColorbox._domEle,s=t-(a+i),r=s-50,l=e/100*80,n=this.getData("imageConfiguration");if(Lyte.objectUtils(n,"add","cropErrorType","loading"),o){var p=o.naturalHeight;if(void 0!==o.getAttribute("data-orientation")){var d=parseInt(o.getAttribute("data-orientation"));6!==d&&8!==d||(p=o.naturalWidth)}if(p&&p>0){n=this.getData("imageConfiguration");if(Lyte.objectUtils(n,"add","cropErrorType","none"),o.width<=15||o.height<=15?Lyte.objectUtils(n,"add","cropErrorType","best_fit"):".gif"===n.extn&&Lyte.objectUtils(n,"add","cropErrorType","type_gif"),Lyte.objectUtils(n,"add","containerHgt",s),Lyte.objectUtils(n,"add","contenthgt",r),Lyte.objectUtils(n,"add","contentwidth",l),!0===this.getData("previewConfiguration.zoom")){var c=$(o).data("lytecbSize");Lyte.objectUtils(this.getData("zoomConfiguration"),"add","resetRatio",c),this.setData("zoomRatio",c)}!0===this.getData("previewConfiguration.infoIcon")&&(Lyte.objectUtils(n,"add","resolution",o.naturalWidth+" x "+o.naturalHeight+" "+I18n.getMsg("crm.image.width.px")),Lyte.objectUtils(n,"add","size",n.size)),Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!1),o.classList.remove("vH")}}},previewThisImageComplete:function(t,e,a){if("allow"===this.getData("processFuther")){for(var i=this.getData("imageDataPreview"),o=i.length,s={},r=0;r<o;r++)if(t===i[r].uploadid){s=i[r];break}var l=this.getData("imageDataThumbnails");for(r=0;r<o;r++)t===l[r].uploadid?l[r].selected=!0:delete l[r].selected,Lyte.arrayUtils(l,"replaceAt",r,l[r]);var n=this.getData("imageConfiguration");Lyte.objectUtils(n,"add","cropErrorType","loading");var p=this.getData("previewConfiguration").currentId;if(void 0===e||p!==s.uploadid||!0!==this.getData("zoomConfiguration").imageZoomState){if(Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!0),Lyte.objectUtils(n,"add","uploadid",s.uploadid),Lyte.objectUtils(n,"add","previewurl",""),Lyte.objectUtils(this.getData("previewConfiguration"),"add","currentId",t),Lyte.objectUtils(n,"add","currentId",s.uploadid),Lyte.objectUtils(n,"add","previewurl",s.original_src),Lyte.objectUtils(n,"add","size",this.convertStreamToActualSize(s.stream)),!0===this.getData("previewConfiguration.fileName")){Lyte.objectUtils(n,"add","name",s.filename),Lyte.objectUtils(n,"add","newName",s.filename),Lyte.objectUtils(n,"add","extn",s.extn);var d,c=s.filename;d=-1!==c.lastIndexOf(".")?c.lastIndexOf("."):c.length-1;var m=c.substring(0,d);Lyte.objectUtils(n,"add","name",m),Lyte.objectUtils(this.getData("globalData"),"add","imageName",!1),Lyte.objectUtils(this.getData("globalData"),"add","imagePara",!0)}!0===this.getData("previewConfiguration.description")&&(""!==s.description&&s.description?(Lyte.objectUtils(n,"add","desc",s.description),Lyte.objectUtils(n,"add","newDesc",s.description),this.constructDescStructure(!1,!1,!0)):(Lyte.objectUtils(n,"add","desc",""),Lyte.objectUtils(n,"add","newDesc",""),this.constructDescStructure(!0,!1,!1))),Lyte.objectUtils(this.getData("globalData"),"add","imageLoaded",!0),void 0!==e&&!0===a&&LyteColorbox.open(Number(e)+1),this.calculateInitialImageSize()}}else Lyte.objectUtils(this.getData("globalData"),"add","error",!0)},closePreview:function(){if(this.getData("showCropper"))return!1;if("allow"===this.getData("processFuther")){var t=LyteColorbox._box,e=this,a=function(){t.classList.remove("transitionColorbox"),LyteColorbox.close(),e.setData("showPreview",!1),e.getMethods("onClose")&&e.executeMethod("onClose"),t.removeEventListener("transitionend",a)};return t.classList.add("transitionColorbox"),t.addEventListener("transitionend",a),!1}Lyte.objectUtils(this.getData("globalData"),"add","error",!0)},constructDescStructure:function(t,e,a){if(!0===this.getData("previewConfiguration.description")){var i=this.getData("globalData");void 0!==t&&Lyte.objectUtils(i,"add","imageDescHeader",t),void 0!==e&&Lyte.objectUtils(i,"add","imageDescInput",e),void 0!==a&&Lyte.objectUtils(i,"add","imageDesc",a)}},saveNameComplete:function(t,e){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration.fileName")){var a=this.getData("imageConfiguration").newName;if(a.length>this.getData("constants").nameLength)return this.setData("customMessages",I18n.getMsg("crm.image.name.maxsize")),Lyte.objectUtils(this.getData("globalData"),"add","error",!0),void this.setData("processFuther","name");if(0===a.length&&(a=t),t!==a){var i,o=[].concat(this.getData("imageDataPreview")),s=this.getData("imageConfiguration");for(var r in o)if(o[r].uploadid===e){var l=a+o[r].extn;for(i=o[r].extn;!0===this.checkNameAvailability(l);)l=this.changeUsedName(l,o[r].extn);this.addUsedImageNames(l,t+i),o[r].filename=l,Lyte.arrayUtils(o,"replaceAt",r,o[r]);var n=l.substring(0,l.lastIndexOf(i));Lyte.objectUtils(s,"add","name",n),Lyte.objectUtils(s,"add","newName",n),this.getMethods("onNameChange")&&this.executeMethod("onNameChange",this.getData("previewConfiguration").currentId,l);break}}Lyte.objectUtils(this.getData("globalData"),"add","imageName",!1),Lyte.objectUtils(this.getData("globalData"),"add","imagePara",!0),this.setData("processFuther","allow")}},savethisDescComplete:function(t,e){if(!1===this.getData("readonly")&&!0===this.getData("isEditable")&&!0===this.getData("previewConfiguration").description){var a=this.getData("imageConfiguration").newDesc;if(a.length>this.getData("constants").descriptionLength)return this.setData("customMessages",I18n.getMsg("crm.image.desc.maxsize")),Lyte.objectUtils(this.getData("globalData"),"add","error",!0),void this.setData("processFuther","desc");if(a!==t){var i=[].concat(this.data.imageDataPreview);for(var o in i)if(i[o].uploadid===e){i[o].description=a,Lyte.arrayUtils(i,"replaceAt",o,i[o]);break}Lyte.objectUtils(this.getData("imageConfiguration"),"add","desc",a),Lyte.objectUtils(this.getData("imageConfiguration"),"add","newDesc",a),this.getMethods("onDescChange")&&this.executeMethod("onDescChange",this.getData("previewConfiguration").currentId,a)}""===a?this.constructDescStructure(!0,!1,!1):this.constructDescStructure(!1,!1,!0),this.setData("processFuther","allow")}},getCroppedBlob:function(t,e){var a=t.height,i=t.width,o=this.getMimeTypeFromExtn(e);return a<4e3&&i<4e3?dataURItoBlob(t.toDataURL(o,.85)):a<8e3&&i<8e3?dataURItoBlob(t.toDataURL(o,.5)):dataURItoBlob(t.toDataURL(o,.2))}},{mixins:["crm-image-mixin"]});
