!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).ProjectDetailsList=a({1:function(a,e,l,t,n){var r=a.escapeExpression;return' <div id="'+r(a.lambda(null!=e?e.listrelationid:e,e))+'"> <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center" class="norec"> <tr> <td valign="center"> <div class="pR30 italic fontsmooth"> '+r(l.getI18n.call(null!=e?e:{},"crm.project.error.nopermission",{name:"getI18n",hash:{},data:n}))+" </div> </td> </tr> </table> </div> "},3:function(a,e,l,t,n,r,s){var i,o=a.lambda,d=a.escapeExpression;return' <input type="hidden" id="fromCount" value="'+d(o(null!=e?e.fromindex:e,e))+'"></input> <input type="hidden" id="toCount" value="'+d(o(null!=e?e.toindex:e,e))+'"></input> <input type="hidden" id="totalCount" value="'+d(o(null!=e?e.totalCount:e,e))+'"></input> <input type="hidden" id="projFilterCount" value="'+d(o(null!=e?e.current_filter_count:e,e))+'"></input> <input type="hidden" id="permission" value="'+d(o(null!=e?e.authenticatemsg:e,e))+'"></input> '+(null!=(i=l.if.call(null!=e?e:{},null!=e?e.projectList:e,{name:"if",hash:{},fn:a.program(4,n,0,r,s),inverse:a.program(26,n,0,r,s),data:n}))?i:"")+" "},4:function(a,e,l,t,n,r,s){var i,o=null!=e?e:{},d=a.escapeExpression,c=a.lambda;return' <div id=\'RelatedListDataScrollInteg\'> <table cellspacing="0" cellpadding="0" border="0" width="100%" align="center"> <tr> <td colspan="2"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="rellist"> <tbody> <tr class="tableHeadBg"> <td class=\'dv_first_td\'></td> <td>'+d(l.getI18n.call(o,"crm.project.label.projname",{name:"getI18n",hash:{},data:n}))+'</td> <td>Project Status</td> <td style="text-align:center !important;">'+d(l.getI18n.call(o,"crm.project.label.projcomplition",{name:"getI18n",hash:{},data:n}))+'</td> <td style="text-align:center !important;">'+d(c(null!=(i=null!=e?e.tab_names:e)?i.milestone:i,e))+'</td> <td style="text-align:center !important;">'+d(c(null!=(i=null!=e?e.tab_names:e)?i.task:i,e))+'</td> <td style="text-align:center !important;">'+d(c(null!=(i=null!=e?e.tab_names:e)?i.issue:i,e))+"</td> </tr> "+(null!=(i=l.each.call(o,null!=e?e.projectList:e,{name:"each",hash:{},fn:a.program(5,n,0,r,s),inverse:a.noop,data:n}))?i:"")+' </tbody> </table> </td> </tr> </table> </div> <table  border="0" width="100%" cellspacing="0" cellpadding="0" > <tr class="rellistbL"> <td class="alignleft"> <div id="ra_'+d(c(null!=e?e.listrelationid:e,e))+'"></div> </td> <td class="alignright listNav"> <table cellspacing="0" cellpadding="0" border="0" class="floatR mT15 mB15 mR20"> <tbody> <tr> <td class="pR5"> '+(null!=(i=l.lessThan.call(o,10,null!=e?e.totalCount:e,{name:"lessThan",hash:{},fn:a.program(17,n,0,r,s),inverse:a.noop,data:n}))?i:"")+" </td> </tr> </tbody> </table> </td> </tr> </table> "},5:function(a,e,l,t,n,r,s){var i,o=null!=e?e:{},d=a.lambda,c=a.escapeExpression;return' <tr class="topband_dv_row projRelTr"> <td nowrap="" width="0" class="tableData pL0 vat w20"> '+(null!=(i=l.if_eq.call(o,null!=e?e.ProjectStatus:e,"active",{name:"if_eq",hash:{},fn:a.program(6,n,0,r,s),inverse:a.program(8,n,0,r,s),data:n}))?i:"")+" </td> <td> "+(null!=(i=l.if_eq.call(o,null!=e?e.ProjectStatus:e,"active",{name:"if_eq",hash:{},fn:a.program(10,n,0,r,s),inverse:a.program(15,n,0,r,s),data:n}))?i:"")+' </td> <td> <div id="projNameGet"><span class="projcustomst mR2" style="background:'+c(d(null!=e?e.status_color:e,e))+';"></span> <span class="vam">'+c(d(null!=e?e.custom_status:e,e))+"</span></div> </td> <td>  <a href=\"javascript:ZProjects.loadProgressFrame('"+c(d(null!=e?e.ProjectId:e,e))+"', 'progress', '"+c(l.encodeJS.call(o,null!=e?e.ProjectName:e,{name:"encodeJS",hash:{},data:n}))+'\');javascript:ZProjects.showProgressFrame();"> <div class="w100 mAuto pR"><span class="pA f9 color_3" style="left: 50%;transform: translateX(-50%);top: 1px;">'+c(d(null!=e?e.Project_completion:e,e))+'%</span><div style="width:'+c(d(null!=e?e.Project_completion:e,e))+'px;" class="greenbar fl pointer"></div><div style="width:'+c(l.arithResult.call(o,100,"-",null!=e?e.Project_completion:e,{name:"arithResult",hash:{},data:n}))+'px;" class="graybar fl pointer"></div></div> </div> </a> </td> <td> <div class="w170 mAuto"> <div style="text-align:right" class="fl w30 pr3 txt10">'+c(d(null!=e?e.CloseMilestoneCNT:e,e))+"</div> <a href=\"javascript:ZProjects.loadIframe('"+c(d(null!=e?e.ProjectId:e,e))+"', 'mile', '"+c(l.encodeJS.call(o,null!=e?e.ProjectName:e,{name:"encodeJS",hash:{},data:n}))+'\');javascript:ZProjects.showIframe(\'milestonediv\');"> <div class="fl w100" id="milestonePlaceHolder'+c(d(null!=e?e.Index:e,e))+'" > <div class="w100"><div style="width:'+c(d(null!=e?e.MilestoneCompletionPercentage:e,e))+'px;" class="greenbar fl pointer"></div><div style="width:'+c(l.arithResult.call(o,100,"-",null!=e?e.MilestoneCompletionPercentage:e,{name:"arithResult",hash:{},data:n}))+'px;" class="graybar fl pointer"></div></div> </div> </a> <div class="fl w30 tal pl3 txt10">'+c(d(null!=e?e.OpenMilestoneCNT:e,e))+'</div> </div> </td> <td> <div class="mAuto w170"> <div style="text-align:right" class="fl w30 pr3 txt10">'+c(d(null!=e?e.CloseTask:e,e))+"</div> <a href=\"javascript:ZProjects.loadIframe('"+c(d(null!=e?e.ProjectId:e,e))+"', 'task', '"+c(l.encodeJS.call(o,null!=e?e.ProjectName:e,{name:"encodeJS",hash:{},data:n}))+'\'); javascript:ZProjects.showIframe(\'taskdiv\');"> <div class="fl w100" id="taskPlaceHolder'+c(d(null!=e?e.Index:e,e))+'"> <div class="w100"><div style="width:'+c(d(null!=e?e.TaskCompletion:e,e))+'px;" class="greenbar fl pointer"></div><div style="width:'+c(l.arithResult.call(o,100,"-",null!=e?e.TaskCompletion:e,{name:"arithResult",hash:{},data:n}))+'px;" class="graybar fl pointer"></div></div> </div> </a> <div class="fl w30 tal pl3 txt10">'+c(d(null!=e?e.OpenTask:e,e))+'</div> </div> </td> <td> <div class="mAuto w170"> <div style="text-align:right" class="fl w30 pr3 txt10">'+c(d(null!=e?e.CloseBugCNT:e,e))+"</div> <a href=\"javascript:ZProjects.loadIframe('"+c(d(null!=e?e.ProjectId:e,e))+"', 'bug', '"+c(l.encodeJS.call(o,null!=e?e.ProjectName:e,{name:"encodeJS",hash:{},data:n}))+'\');javascript:ZProjects.showIframe(\'bugsdiv\');"> <div class="fl w100" id="bugsPlaceHolder'+c(d(null!=e?e.Index:e,e))+'"> <div class="w100"><div style="width:'+c(d(null!=e?e.BugCompletionPercentage:e,e))+'px;" class="greenbar fl pointer"></div><div style="width:'+c(l.arithResult.call(o,100,"-",null!=e?e.BugCompletionPercentage:e,{name:"arithResult",hash:{},data:n}))+'px;" class="graybar fl pointer"></div></div> </div> </a> <div class="fl w30 tal pl3 txt10">'+c(d(null!=e?e.OpenBugCNT:e,e))+"</div> </div> </td> </tr> "},6:function(a,e,l,t,n,r,s){var i=a.lambda,o=a.escapeExpression,d=null!=e?e:{};return' <div class="pR"> <div class="alignright pA w40 mainRLActionIcon tableDataAction"> <div align="center" class="indIcon"> <a href="javascript:ZProjects.editProject(\''+o(i(null!=s[1]?s[1].accountid:s[1],e))+"','"+o(i(null!=e?e.ProjectId:e,e))+"','"+o(l.encodeJS.call(d,null!=s[1]?s[1].returnanchor:s[1],{name:"encodeJS",hash:{},data:n}))+"','"+o(i(null!=s[1]?s[1].module:s[1],e))+"','"+o(l.encodeJS.call(d,null!=s[1]?s[1].cvid:s[1],{name:"encodeJS",hash:{},data:n}))+'\')" id="relatedListEdit_2000000016941" class="link neweditIcon dIB" data-zcqa="editProject"></a> <span class="sep">&nbsp;&nbsp;</span> <a id="proj_del_icon_'+o(i(null!=e?e.ProjectId:e,e))+'" onclick="ZProjects.showDeleteProjPopup(\''+o(i(null!=e?e.ProjectId:e,e))+'\')" href="javascript:;" data-onclick="javascript:ZProjects.delProject(\''+o(i(null!=s[1]?s[1].accountid:s[1],e))+"','"+o(i(null!=e?e.ProjectId:e,e))+"','"+o(l.encodeJS.call(d,null!=s[1]?s[1].returnanchor:s[1],{name:"encodeJS",hash:{},data:n}))+"','"+o(i(null!=s[1]?s[1].module:s[1],e))+"','"+o(l.encodeJS.call(d,null!=s[1]?s[1].cvid:s[1],{name:"encodeJS",hash:{},data:n}))+'\')" class="link deleteIcon  dIB"></a> </div> </div> </div> '},8:function(a,e,l,t,n){return" "},10:function(a,e,l,t,n,r,s){var i,o=a.lambda,d=a.escapeExpression;return' <link-to lt-prop-route="crm.tab.projects" lt-prop-qp=\'{"projectId":"'+d(o(null!=e?e.ProjectId:e,e))+'"}\'> <a> <span id="projNameGet">'+d(o(null!=e?e.ProjectName:e,e))+'</span> </a> </link-to> <span id="projError_'+d(o(null!=e?e.ProjectId:e,e))+'" class="svgIcons ico-warning-small-red-Filled vam mL10 cP '+(null!=(i=l.if_eq.call(null!=e?e:{},null!=e?e.ProjectId:e,null!=s[1]?s[1].errorProject:s[1],{name:"if_eq",hash:{},fn:a.program(11,n,0,r,s),inverse:a.program(13,n,0,r,s),data:n}))?i:"")+'" onclick="ZProjects.showUsrErrPopUp();"></span> '},11:function(a,e,l,t,n){return"dIB"},13:function(a,e,l,t,n){return"dN"},15:function(a,e,l,t,n){return' <div id="projNameGet">'+a.escapeExpression(a.lambda(null!=e?e.ProjectName:e,e))+"</div> "},17:function(a,e,l,t,n){var r,s=null!=e?e:{},i=a.lambda,o=a.escapeExpression;return" "+(null!=(r=l.lessThan.call(s,1,null!=e?e.pageNoForJsp:e,{name:"lessThan",hash:{},fn:a.program(18,n,0),inverse:a.program(20,n,0),data:n}))?r:"")+' </td> <td class="pR top1">'+o(i(null!=e?e.fromindex:e,e))+' <span class="dim mLR5">'+o(l.getI18n.call(s,"crm.label.lowercase.to",{name:"getI18n",hash:{},data:n}))+"</span>"+o(i(null!=e?e.toindex:e,e))+'</td> <td class="pL5"> '+(null!=(r=l.if.call(s,null!=e?e.next_page:e,{name:"if",hash:{},fn:a.program(22,n,0),inverse:a.program(24,n,0),data:n}))?r:"")+" "},18:function(a,e,l,t,n){var r=null!=e?e:{},s=a.escapeExpression,i=a.lambda;return' <a data-zcqa="navigateProjectPersonallity" href="javascript:navigateProjectPersonallity(\''+s(l.getCrmBasePath.call(r,{name:"getCrmBasePath",hash:{},data:n}))+"/NewRelatedList.do?action=getAllData&amp;module="+s(i(null!=e?e.module:e,e))+"&amp;id="+s(i(null!=e?e.accountid:e,e))+"&amp;mod_PROJECTPERSONALITY=true&amp;pageno="+s(l.arithResult.call(r,null!=e?e.pageNoForJsp:e,"-",1,{name:"arithResult",hash:{},data:n}))+'&amp;currentOption=10&amp;next.x=x\')" class="link vam"><img hspace="2" border="0" align="middle" class="previous vam" src="'+s(i(null!=e?e.imagepath:e,e))+'/spacer_e17b417_.gif"/></a> '},20:function(a,e,l,t,n){return' <img hspace="2" align="middle" class="previous_disabled vam" src="'+a.escapeExpression(a.lambda(null!=e?e.imagepath:e,e))+'/spacer_e17b417_.gif"/> '},22:function(a,e,l,t,n){var r=null!=e?e:{},s=a.escapeExpression,i=a.lambda;return' <a data-zcqa="navigateProjectPersonallity" href="javascript:navigateProjectPersonallity(\''+s(l.getCrmBasePath.call(r,{name:"getCrmBasePath",hash:{},data:n}))+"/NewRelatedList.do?action=getAllData&amp;module="+s(i(null!=e?e.module:e,e))+"&amp;id="+s(i(null!=e?e.accountid:e,e))+"&amp;mod_PROJECTSPERSONALITY=true&amp;pageno="+s(l.arithResult.call(r,null!=e?e.pageno:e,"+",1,{name:"arithResult",hash:{},data:n}))+'\');" class="link vam"><img hspace="2" border="0" align="middle" class="next vam" src="'+s(i(null!=e?e.imagepath:e,e))+'/spacer_e17b417_.gif"/></a> '},24:function(a,e,l,t,n){return' <img hspace="2" align="middle" class="nextDisabled vam" src="'+a.escapeExpression(a.lambda(null!=e?e.imagepath:e,e))+'/spacer_e17b417_.gif"/> '},26:function(a,e,l,t,n){var r,s=null!=e?e:{};return' <div id="'+a.escapeExpression(a.lambda(null!=e?e.listrelationid:e,e))+'"> <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center" class="norec"> <tr> <td valign="top"> '+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"NO_PERMISSION_IN_PORTAL",{name:"if_eq",hash:{},fn:a.program(27,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"NOT_PORTAL_USER",{name:"if_eq",hash:{},fn:a.program(29,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"6504",{name:"if_eq",hash:{},fn:a.program(31,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"6401",{name:"if_eq",hash:{},fn:a.program(33,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"6000",{name:"if_eq",hash:{},fn:a.program(35,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_eq.call(s,null!=e?e.authenticatemsg:e,"6001",{name:"if_eq",hash:{},fn:a.program(37,n,0),inverse:a.noop,data:n}))?r:"")+" "+(null!=(r=l.if_nq.call(s,null!=e?e.authenticatemsg:e,"6401",{name:"if_nq",hash:{},fn:a.program(39,n,0),inverse:a.noop,data:n}))?r:"")+" <br></br> </td> </tr> </table> </div> "},27:function(a,e,l,t,n){return' <div class="pL25">&lt;'+a.escapeExpression(l.getI18n.call(null!=e?e:{},"crm.projects.permissions.user.projects.unauthorized",{name:"getI18n",hash:{},data:n}))+"&gt;</div> "},29:function(a,e,l,t,n){return' <div class="pL25">&lt;'+a.escapeExpression(l.getI18n.call(null!=e?e:{},"crm.projects.permissions.user.no.portalpermission",{name:"getI18n",hash:{},data:n}))+"&gt;</div> "},31:function(a,e,l,t,n){return' <div class="pL25">&lt;'+a.escapeExpression(l.getI18n.call(null!=e?e:{},"crm.project.error.portalchanged",{name:"getI18n",hash:{},data:n}))+"&gt;</div> "},33:function(a,e,l,t,n){return' <div class="pL25">&lt;'+a.escapeExpression(l.getI18n.call(null!=e?e:{},"crm.project.error.portalownerchanged",{name:"getI18n",hash:{},data:n}))+"&gt;</div> "},35:function(a,e,l,t,n){return' <div class="pL25">'+a.escapeExpression(l.getI18n.call(null!=e?e:{},"crm.project.portal.zsckeyisregenerated.normal",null!=e?e.brand:e,{name:"getI18n",hash:{},data:n}))+"</div> "},37:function(a,e,l,t,n){var r=null!=e?e:{},s=a.escapeExpression;return' <div class="zsckeyPatern w100p"><p class="f13 lh20 color_7 p20 crm-font-regular">'+s(l.getI18n.call(r,"crm.project.portal.zsckeyisregenerated.admin1",null!=e?e.brand:e,{name:"getI18n",hash:{},data:n}))+"<br></br>"+s(l.getI18n.call(r,"crm.project.portal.toresumeintegration",{name:"getI18n",hash:{},data:n}))+'&nbsp;<a href="javascript:ProjectsHome.redirectToProjUpd();" class="link1">'+s(l.getI18n.call(r,"crm.project.portal.updatezsckey",{name:"getI18n",hash:{},data:n}))+"</a>&nbsp;"+s(l.getI18n.call(r,"crm.project.message.andproceed",{name:"getI18n",hash:{},data:n}))+"</p></div> "},39:function(a,e,l,t,n){var r;return" "+(null!=(r=l.if_nq.call(null!=e?e:{},null!=e?e.authenticatemsg:e,"6504",{name:"if_nq",hash:{},fn:a.program(40,n,0),inverse:a.noop,data:n}))?r:"")+" "},40:function(a,e,l,t,n){var r;return" "+(null!=(r=l.if_nq.call(null!=e?e:{},null!=e?e.authenticatemsg:e,"6000",{name:"if_nq",hash:{},fn:a.program(41,n,0),inverse:a.noop,data:n}))?r:"")+" "},41:function(a,e,l,t,n){var r;return" "+(null!=(r=l.if_nq.call(null!=e?e:{},null!=e?e.authenticatemsg:e,"6001",{name:"if_nq",hash:{},fn:a.program(42,n,0),inverse:a.noop,data:n}))?r:"")+" "},42:function(a,e,l,t,n){var r;return" "+(null!=(r=l.if_nq.call(null!=e?e:{},null!=e?e.authenticatemsg:e,"NOT_PORTAL_USER",{name:"if_nq",hash:{},fn:a.program(43,n,0),inverse:a.noop,data:n}))?r:"")+" "},43:function(a,e,l,t,n){var r;return" "+(null!=(r=l.if_nq.call(null!=e?e:{},null!=e?e.authenticatemsg:e,"NO_PERMISSION_IN_PORTAL",{name:"if_nq",hash:{},fn:a.program(44,n,0),inverse:a.noop,data:n}))?r:"")+" "},44:function(a,e,l,t,n){var r=a.escapeExpression;return' <div class="pR30 italic fontsmooth"> '+r(l.getI18n.call(null!=e?e:{},"crm.new.label.no.records",{name:"getI18n",hash:{},data:n}))+' </div> <div id="norec_'+r(a.lambda(null!=e?e.listrelationid:e,e))+'"></div> '},compiler:[7,">= 4.0.0"],main:function(a,e,l,t,n,r,s){var i,o=null!=e?e:{},d=a.escapeExpression,c=a.lambda;return' <div id="zProjFreezeLayer" class="zProjFreezeLayer dN"></div> <div id="progressIframe" style="display:none;"> <span class="zProjCloseframeOuter dN" onclick="ZProjects.closeProgressframe()"> <span class="zProjCloseIcon svgIcons ico-close-small2"></span> </span> <iframe id="iframeprogress" frameBorder="0" src="" width="100%" height="100%"></iframe> </div> <div id="freezeIframe" style="z-index:1000; height:100%; display:none;" > <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td> <div class="tasklistTitle1" style="padding:15px 0 15px 36px; height: 15px; border-radius: 10px 10px 0px 0px; -webkit-border-radius: 10px 10px 0px 0px; background-color:#F4F4F4; border-bottom:1px solid #e4e4e4;"> <a href="javascript:ZProjects.closeIframePopUp()"><div class="fl projname_pop" id="projNameSet" title="'+d(l.getI18n.call(o,"crm.project.backtolist",{name:"getI18n",hash:{},data:n}))+'"></div></a> <div class="fl pL35"> <div class="fl" style="padding:0px 15px 5px 10px;"><a class="qulbl2" id="taskdiv"  href="javascript:ZProjects.changeUrl(\'task\', \'taskdiv\');" style="color:#999;" >'+d(c(null!=(i=null!=e?e.tab_names:e)?i.task:i,e))+'</a></div> <div class="fl" style="padding:0px 15px 4px;"><a class="qulbl2" id="bugsdiv" href="javascript:ZProjects.changeUrl(\'bug\', \'bugsdiv\'); " style="color:#999;" >'+d(c(null!=(i=null!=e?e.tab_names:e)?i.issue:i,e))+'</a></div> <div class="fl" style="padding:0px 15px 4px;"><a class="qulbl2" id="milestonediv" href="javascript:ZProjects.changeUrl(\'mile\', \'milestonediv\'); " style="color:#999;" >'+d(c(null!=(i=null!=e?e.tab_names:e)?i.milestone:i,e))+'</a></div> </div> <div id="proj_close" style="float:right;"><div class="fr pR15 pointer" style="font-size:1.5rem; margin-top:-2px; color:#777;" title="Close" onclick="javascript:ZProjects.closeIframePopUp()">X</div></div> </div> </td> </tr> <tr> <td> <iframe id="Iframe" frameBorder="0" src="" width="100%"></iframe> </td> <tr> </table> </div> <div style="display:block" id="projectListDiv"> '+(null!=(i=l.if_eq.call(o,null!=e?e.nopermission:e,"S",{name:"if_eq",hash:{},fn:a.program(1,n,0,r,s),inverse:a.program(3,n,0,r,s),data:n}))?i:"")+" "},useData:!0,useDepths:!0})}();