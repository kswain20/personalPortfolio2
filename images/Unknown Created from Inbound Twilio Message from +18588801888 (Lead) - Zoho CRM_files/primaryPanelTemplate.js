//$Id$

Vue.component("panel-template-primary",{
   	template:" <div id=\"app\"> "+
                "<v-app v-if=\"tabs==='items'\" >"+
                "<v-toolbar v-bind:style='{\"background-color\":styleObject.home.topband.backgroundColor,\"color\":styleObject.home.topband.color,\"font-size\":styleObject.home.topband.fontSize+\" !important\", \"font-family\":styleObject.home.topband.fontFamily, \"font-weight\":styleObject.home.topband.fontWeight, \"z-index\":styleObject.home.topband.zIndex, \"box-shadow\":styleObject.home.topband.boxShadow, \"border-left\":styleObject.home.topband.borderLeft, \"border-right\":styleObject.home.topband.borderRight, \"border-top\":styleObject.home.topband.borderTop, \"border-bottom\":styleObject.home.topband.borderBottom}' class=\"title\" app>{{styleObject.home.topband.text}} <v-spacer></v-spacer>  <v-toolbar-items> <v-btn @click=\"closeWin\" v-bind:style='{\"display\":styleObject.home.closeButton.display}' icon><v-icon v-bind:style='{\"color\":styleObject.home.closeButton.iconColor}'>{{styleObject.home.closeButton.icon}}</v-icon></v-btn>  </v-toolbar-items></v-toolbar>"+
                "<v-content v-bind:style='{\"background-color\":styleObject.home.background.color,\"position\":filteredItems.length !=0?\"relative\" : \"\",\"height\":filteredItems.length !=0?\"100vh\":\"100%\"}' :class='filteredItems.length==0?\"align-center\":\"\"' style=\"height:100%;\">"+
                     "<div  v-if=\"filteredItems.length!==0\"  class=\"pl-3 pt-3\" style=\"max-width:250px; height :70px\">"+
                               " <v-select dense v-bind:background-color=\"styleObject.home.genreSelect.selection.backgroundColor\" flat  solo hide-details :items=\"compFilters\" v-model=\"selectedFilter\">"+
                                       " <template slot=\"selection\" slot-scope=\"data\">"+
                                                "<span :style='{\"color\":styleObject.home.genreSelect.selection.color,\"font-size\":styleObject.home.genreSelect.selection.fontSize+\" !important\", \"font-family\":styleObject.home.genreSelect.selection.fontFamily, \"font-weight\":styleObject.home.genreSelect.selection.fontWeight}'>{{selectedFilter}}</span>"+
                                        "</template>"+
                                        "<template slot=\"item\" slot-scope=\"data\">"+
						"<v-icon style=\"height:20px;width:20px;color:black;font-size:18px;\"> {{selectedFilter == data.item ? \"done\":\"\"}} </v-icon>"+
                                                "<span style=\"margin-left:10px\" :style='{\"color\":styleObject.home.genreSelect.item.color,\"font-size\":styleObject.home.genreSelect.item.fontSize+\" !important\", \"font-family\":styleObject.home.genreSelect.item.fontFamily, \"font-weight\":styleObject.home.genreSelect.item.fontWeight}'>{{data.item}}</span>"+
                                        "</template>"+
                                "</v-select>"+
                        "</div>"+
			 "<div v-if=\"filteredItems.length!==0\"  style=\"overflow:auto; height:calc(100% - 70px); \">"+
                        "<component v-if=\"componentExists(item.component.component)\" @clicked=\"openWin\" v-for=\"(item, index) in filteredItems\" :showmessagehover='styleObject.messageStyles[item.component.component+\"-styles\"].hover.showHover'  :is=\"item.component.component\" :data='item' :styles='styleObject.messageStyles[item.component.component+\"-styles\"]' :genrestyles=\"stylesForGenre(styleObject.genreStyles.default,styleObject.genreStyles[item.category], item.category)\" :rendergenrestyles=\"styleObject.genreStyles['renderGenreStyles']\" :key=\"index\" ></component>"+
                        "<div v-if= \"( ( styleObject.home.historyButton.showDynamicHistory && filteredOldItems.length != 0) || (!styleObject.home.historyButton.showDynamicHistory) )  \"class=\"text-xs-right\"><v-btn style=\"text-transform:none;\"  flat v-bind:style='{\"color\":styleObject.home.historyButton.withNotification.color,\"font-size\":styleObject.home.historyButton.withNotification.fontSize+\" !important\", \"font-family\":styleObject.home.historyButton.withNotification.fontFamily, \"font-weight\":styleObject.home.historyButton.withNotification.fontWeight}' @click=\"tabs='history'\">{{styleObject.home.historyButton.withNotification.text}} <v-icon v-bind:style='{\"color\":styleObject.home.historyButton.withNotification.iconColor}'>{{styleObject.home.historyButton.withNotification.icon}}</v-icon>  </v-btn></div>"+
                "</div>"+
                        "<v-layout column justify-center align-center fill-height class=\"subheading  blue-grey--text text--lighten-1 text-xs-center\" style=\"overflow:auto; \" v-else>"+
                        "<div> <v-icon size=\"60\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.iconColor+\" !important\"}' class=\"blue-grey--text text--lighten-1 \"> {{styleObject.home.descriptionText.noDataDescription.icon}} </v-icon> </div>"+
                        "<div class=\"py-1\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.heading.color,\"font-size\":styleObject.home.descriptionText.noDataDescription.heading.fontSize+\" !important\", \"font-family\":styleObject.home.descriptionText.noDataDescription.heading.fontFamily, \"font-weight\":styleObject.home.historyButton.withNotification.fontWeight}'>{{styleObject.home.descriptionText.noDataDescription.heading.text}}</div>"+
                        "<div class=\"pa-2 caption\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.description.color,\"font-size\":styleObject.home.descriptionText.noDataDescription.description.fontSize+\" !important\", \"font-family\":styleObject.home.descriptionText.noDataDescription.description.fontFamily, \"font-weight\":styleObject.home.descriptionText.noDataDescription.description.fontWeight}'>{{styleObject.home.descriptionText.noDataDescription.description.text}}</div>"+
                        "<div  v-if= \"( ( styleObject.home.historyButton.showDynamicHistory && filteredOldItems.length != 0) || (!styleObject.home.historyButton.showDynamicHistory) ) \" > <v-btn @click=\"tabs='history';\" rounded v-bind:style='{\"background-color\":styleObject.home.historyButton.withNoNotification.buttonColor,\"color\":styleObject.home.historyButton.withNoNotification.color,\"font-size\":styleObject.home.historyButton.withNoNotification.fontSize+\" !important\", \"font-family\":styleObject.home.historyButton.withNoNotification.fontFamily, \"font-weight\":styleObject.home.historyButton.withNoNotification.fontWeight}'>{{styleObject.home.historyButton.withNoNotification.text}}</v-btn>  </div>"+
                        "</v-layout>"+
                "</v-content>"+
                "</v-app>"+
                "<v-app v-else>"+
                "<v-toolbar v-bind:style='{\"background-color\":styleObject.history.topband.backgroundColor,\"color\":styleObject.history.topband.color,\"font-size\":styleObject.history.topband.fontSize+\" !important\", \"font-family\":styleObject.history.topband.fontFamily, \"font-weight\":styleObject.history.topband.fontWeight, \"box-shadow\":styleObject.history.topband.boxShadow, \"border-left\":styleObject.history.topband.borderLeft, \"border-right\":styleObject.history.topband.borderRight, \"border-top\":styleObject.history.topband.borderTop, \"border-bottom\":styleObject.history.topband.borderBottom}' dark class=\"title\" app> <v-btn @click=\"tabs='items'\"  icon><v-icon v-bind:style='{\"color\":styleObject.history.backButton.iconColor}'>{{styleObject.history.backButton.icon}}</v-icon> </v-btn>{{styleObject.history.topband.text}}<v-spacer></v-spacer>  <v-toolbar-items> <v-btn @click=\"closeWin\" v-bind:style='{\"display\":styleObject.history.closeButton.display}' icon><v-icon v-bind:style='{\"color\":styleObject.history.closeButton.iconColor}'>{{styleObject.history.closeButton.icon}}</v-icon></v-btn>  </v-toolbar-items></v-toolbar>"+
		"<v-content v-bind:style='{\"background-color\":styleObject.history.background.color,\"position\":filteredOldItems.length !=0?\"absolute\" : \"\"}' style=\"height:100%;overflow:auto\">"+
                "<div v-if=\"filteredOldItems.length!==0\"  style=\"height:100%;overflow:auto;min-height:80vh\">"+
                       " <component v-if=\"componentExists(item.component.component)\" @clicked=\"openWin\" v-for=\"(item, index) in filteredOldItems\" :showmessagehover='styleObject.messageStyles[item.component.component+\"-styles\"].hover.showHover' :is=\"item.component.component\" :data='item' :styles='styleObject.messageStyles[item.component.component+\"-styles\"]' :genrestyles=\"stylesForGenre(styleObject.genreStyles.default,styleObject.genreStyles[item.category],item.category)\"  :rendergenrestyles=\"styleObject.genreStyles['renderGenreStyles']\"  :key=\"index\" ></component>"+
                "</div>"+
                "<v-layout  justify-center v-bind:style='{\"color\":styleObject.history.descriptionText.noDataDescription.color + \" !important\",\"font-size\":styleObject.history.descriptionText.noDataDescription.fontSize+\" !important\", \"font-family\":styleObject.history.descriptionText.noDataDescription.fontFamily, \"font-weight\":styleObject.history.descriptionText.noDataDescription.fontWeight}' fill-height class=\"subheading  blue-grey--text text--lighten-1 text-xs-centeri pt-3\"  v-else>"+
                        "{{styleObject.history.descriptionText.noDataDescription.text}}"+
                "</v-layout>"+
                "</v-content>"+
                "</v-app>"+
                "</div>",
	props:["items","old-items","reset","styles","newpids","notclickedpids","stylereset"],
	data:function(){
		return{ 
			tabs : "items",
			filters:[],
			filterItems:[],
      			selectedFilter:"",
			validItems:[],
			validOldItems:[],
			styleObject: this.styleInit(),
			defaultGenreTexts: {}
		}
	},
	watch:{
		'reset': function(reset){
			if(reset){
				this.tabs = "items";
				this.$emit('reset-success');
			}
		},
		'stylereset': function(stylereset){
			if(stylereset)
			{
				this.styleObject = this.getStyles();
				this.$emit('styles-updated');
			}
		},
		'newpids':function(newPids){
			this.styleObject.home.topband.zIndex = 101;
			var pidsValid =this.validPidsCount(newPids,this.notclickedpids);
			this.$emit('pids-valid',pidsValid);
		},
		'notclickedpids':function(notclickedpids){
                        var pidsValid = this.validPidsCount(this.newpids,notclickedpids);
                        this.$emit('pids-valid',pidsValid);
		}
	},
	mounted:function(){
		this.defaultGenreTexts = this.getDefaultGenreTexts();
		this.styleObject = this.getStyles();
	},
	computed:{
		filteredOldItems:function(){
			var handle = this;
			var finalItems = [];
			
			handle.oldItems.forEach(function(d)
			{
				if(handle.isMessageValid(d.component.component) && handle.isCategoryValid(d.category))	
				{
					d.categoryText=handle.styleObject.genreTexts[d.category];
					finalItems.push(d);
				}
			});
			this.validOldItems = finalItems;
			return this.validOldItems;
		},
		filteredItems:function(){
			var handle = this;
			var finalItems = [];

			handle.filterItems = [];
			handle.items.forEach(function(d){
				if(handle.isMessageValid(d.component.component) && handle.isCategoryValid(d.category))
				{
					d.categoryText = handle.styleObject.genreTexts[d.category];
					handle.filterItems.push(d);	
				}
			});

			if(handle.selectedFilter === handle.styleObject.genreTexts["All Messages"] || handle.selectedFilter === ""){
                                finalItems = handle.filterItems;
                        }
                        else{
                                finalItems =  handle.filterItems.filter(function(d){
					var category = "";	
					for(var key in handle.styleObject.genreTexts){
						if(handle.styleObject.genreTexts[key] == handle.selectedFilter)
						{
							category = key;
						}
					}
					return d.category === category;
				});
                        }
			
			handle.validItems = finalItems;

                        if(handle.filterItems.length!==0&&handle.validItems.length===0){
                                handle.selectedFilter=handle.styleObject.genreTexts["All Messages"];
                                handle.validItems = handle.filterItems;
                        }

                        return handle.validItems;
        	},
		compFilters:function(){
			var handle = this;
			handle.filters = [];
			handle.filters.push(handle.styleObject.genreTexts["All Messages"]);
                	return this.filters.concat(this.filterItems.map(function(d){ return d.categoryText;  }) );
			
        	}
	},
	methods:{
		validPidsCount : function(notViewed, notClicked){
			var handle = this;
			var pidsValid = {"notViewed":[],"notClicked":[]};
			notViewed.forEach(function(d){
                                var messageTemplateName = "";
                                handle.validItems.forEach(function(e)
                                {
                                        if(e.PID == d)
                                        {
                                                messageTemplateName = e.component.component;
                                        }
                                });
                                if(messageTemplateName != ""){
                                        pidsValid.notViewed.push(d);
                                }
                        });
			notClicked.forEach(function(d){
                                var messageTemplateName = "";
                                handle.validItems.forEach(function(e)
                                {
                                        if(e.PID == d)
                                        {
                                                messageTemplateName = e.component.component;
                                        }
                                });
                                if(messageTemplateName != ""){
                                        pidsValid.notClicked.push(d);
                                }
                        });
			return pidsValid;
                },
		loadedComponents: function () {
  			var loaded = [];
  			var components = this.$options.components;
  			for (var key in components) {
    				loaded.push(key);
  			}
  			return loaded;
		},
		componentExists: function(component) {
  			var components = this.loadedComponents.call(this);
  			if (components.indexOf(component) !== -1) {
    				return true;
  			}
  			return false;
		},
		openWin:function(data){
			this.$emit('notification-clicked',data);
		},
		closeWin:function(){
			this.tabs="items";
			this.$emit('close-clicked');
		},
		getStyles:function(){
			if(this.styles.genreTexts)
			{
					
				this.styleObject = this.updateToDefaultGenreTexts(this.styleObject);
			}
			var styleObjectUpdated = this.stylesFromSdk(this.styleObject,this.styles);
			if((styleObjectUpdated.showMessagesWithUndefinedGenreText == false || styleObjectUpdated.showMessagesWithUndefinedGenreText == "false") && this.styles.genreTexts)
                        {
				styleObjectUpdated.genreTexts = this.styles.genreTexts;                
	                        if(styleObjectUpdated.genreTexts["All Messages"] == undefined || styleObjectUpdated.genreTexts["All Messages"].length == 0)
        	                {      
					 
                	             	styleObjectUpdated.genreTexts = this.styleObject.genreTexts;
                        	}
			}
			this.styleObject = styleObjectUpdated;
			this.selectedFilter = this.styleObject.genreTexts["All Messages"];
			return this.styleObject;
		},
		getDefaultGenreTexts:function(){
			return this.styleObject.genreTexts;
		},
		updateToDefaultGenreTexts:function(styleJSON){
			styleJSON.genreTexts = this.defaultGenreTexts;
			return styleJSON;
		},
		isMessageValid:function(messageTemplate){
			if(!this.componentExists(messageTemplate))
			{
				return false;
			}
			if(this.styleObject.messageStyles[messageTemplate+"-styles"] == undefined)
			{
				return false;
			}
			if(this.styleObject.messageStyles.renderUndefinedMessageTemplates != "true" && this.styleObject.messageStyles.renderUndefinedMessageTemplates != true)
			{
				if(this.styles.messageStyles[messageTemplate+"-styles"] == undefined)
				{
					return false;
				}
			}
			return true;
		},
		isCategoryValid:function(category){
			if(this.styleObject.genreTexts[category] != undefined && this.styleObject.genreTexts[category].length > 0)
			{
				return true;
			}
			return false;
		},
		stylesForGenre:function(defaultStyles, genreStyles, category)
		{
			if(genreStyles == undefined)
			{
				return defaultStyles;
			}
			return this.stylesFromSdk(defaultStyles, genreStyles);	
		},
		stylesFromSdk:function(defaultStyles,sdkStyles)
		{
			var updatedStyles = JSON.parse(JSON.stringify(defaultStyles));
			for(var key in sdkStyles){
				var sdkStyle_key = sdkStyles[key];
				var defaultStyle_key = defaultStyles ? defaultStyles[key] : {};
				if(sdkStyle_key != null)
				{
					
					if(typeof defaultStyle_key == "object" && typeof sdkStyle_key == "object")
					{
						updatedStyles[key] = this.stylesFromSdk(defaultStyle_key,sdkStyle_key);
					}
					else
					{
						updatedStyles[key] = sdkStyle_key;
					}
				}
			}
			return updatedStyles;
		},
		styleInit:function(){
		    var styleObject = {
                	"home":{
                       		"topband":{
                                	"backgroundColor" : "#488fef",
					"text" : "Notification",
                                	"color" : "#ffffff",
                                	"fontSize" : "20px",
                                	"fontFamily" : "Roboto,Times New Roman",
					"fontWeight" : "",
					"zIndex" : 100,
					"boxShadow" : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
					"borderLeft" : "",
					"borderRight" : "",
					"borderTop" : "",
					"borderBottom" : ""
                        	},
				"closeButton":{
					"display": "block",
                                	"icon": "close",			//MaterialIcon
                                	"iconColor": "#ffffff"
                        	},
				"historyButton":{
					"showDynamicHistory": false,
					"withNotification":{
						"text" : "See history",
						"color": "grey",
						"fontSize" : "14px",
	                                        "fontFamily" : "Roboto",
						"fontWeight" : "",
						"icon" : "arrow_forward",	//MaterialIcon
						"iconColor" : "grey"
					},
					"withNoNotification":{
						"text" : "See Notification History",
						"color" : "#ffffff",
						"fontSize" : "14px",
	                                        "fontFamily" : "Roboto",
						"fontWeight" : "",
						"buttonColor" : "#488fef"
					}
				},
				"background":{
					"color":"#fafafa"
				},
				"genreSelect":{
                                        "selection":{
                                                "backgroundColor": "#f3f3f3",
                                                "color":"black",
                                                "fontSize" : "16px",
                                                "fontFamily" : "Roboto",
						"fontWeight" : "",
						"border": "3px solid black"
                                        },
                                        "item":{
                                                "color":"black",
                                                "fontSize" : "13px",
                                                "fontFamily" : "Roboto",
						"fontWeight" : ""
                                        }
                                },
                        	"descriptionText":{
                                	"noDataDescription" : {
						"icon": "message",		//MaterialIcon
						"iconColor": "grey", 
                                        	"heading":{
                                                	"text":"You don't have any notification",
							"color":"grey",
							"fontSize" : "16px",
		                                        "fontFamily" : "Roboto",
							"fontWeight" : ""
                                        	},
						"description":{
							"text":"You will see notifications from projects you work on appear here",
                                                        "color":"grey",
							"fontSize" : "12px",
		                                        "fontFamily" : "Roboto",
							"fontWeight" : ""
						}
                                	}
                        	}	
                	},
                	"history":{
                        	"topband":{
					"backgroundColor" : "#757575",
					"text" : "History",
                                	"color" : "#ffffff",
					"fontSize" : "20px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : "",
					"boxShadow" : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                                        "borderLeft" : "",
                                        "borderRight" : "",
                                        "borderTop" : "",
                                        "borderBottom" : ""
                        	},
				"backButton":{
					"icon": "arrow_back",
					"iconColor": "#ffffff"
				},
				"closeButton":{
					"display": "block",
                                	"icon": "close",
                                	"iconColor": "#ffffff"
                        	},
				"background":{
                                        "color":"#fafafa"
                                },
                        	"descriptionText":{
                                	"noDataDescription" : {
                                        	"text":"You don't have any notification",
                                        	"color":"black",
                                        	"fontSize" : "14px",
                                        	"fontFamily" : "Roboto",
						"fontWeight" : ""
                               	 	}
                        	}
                	},
			"showMessagesWithUndefinedGenreText" : false,
			"genreTexts":{
				"All Messages" : "All Messages",
			    	"User Education" : "User Education",
				"Webinars" : "Webinars",
				"Events" : "Events",
				"Feature Releases" : "Feature Releases",
				"Announcements" : "Announcements",
				"Community" : "Community",
				"Retention" : "Retention"
			},
			"genreStyles":{
				"renderGenreStyles":false,
				"default":{
					"color" : "#ff0000",
					"fontSize" : "12px",
					"fontFamily" : "Roboto",
					"fontWeight" : "",
					"backgroundColor" : "#ffecd5",
					"padding" : "4px 8px",
					"borderRadius" : "4px",
					"border" :"none"
				}
			},
			"messageStyles":{
			   "renderUndefinedMessageTemplates":"true",
			   "message-template-default-styles":{
				"heading":{
					"color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
				},
				"sideHeading":{
					"color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
				},
				"description":{
					"color" : "#000000",
                                        "fontSize" : "16px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
				},
				"category":{
					"color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : "",
					"padding" : "0px 0px",
					"backgroundColor" : "#ffffff",	
					"borderRadius":"0px"
				},
				"background":{
                                        "backgroundColor":"#ffffff",
					"border":"1px solid #dadada"
                                },
				"hover":{	
					"showHover":false,
					"hoverColor":"#e1e4e6"
				}
			   },
			   "message-template-options-styles":{
                                "heading":{
                                        "color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
                                },
                                "sideHeading":{
                                        "color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
                                },
                                "description":{
                                        "color" : "#000000",
                                        "fontSize" : "16px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
                                },
                                "category":{
                                        "color" : "#000000",
                                        "fontSize" : "12px",
                                        "fontFamily" : "Roboto",
					"fontWeight" : ""
                                },
				"selectBox":{
					"backgroundColor":"#ffffff",
					"placeHolder":{
						"text":"Choose your option",
						"color":"#000",
                                                "fontSize" : "14px",
                                                "fontFamily" : "Roboto",
						"fontWeight" : ""
					},
					"selection":{
						"color":"#000000",
						"fontSize" : "16px",
                                        	"fontFamily" : "Roboto",
						"fontWeight" : ""
					},
					"item":{
						"color":"#000000",
                                                "fontSize" : "16px",
                                                "fontFamily" : "Roboto",
						"fontWeight" : ""
					}
				},
				"sendButton":{
					"icon":"send",
					"iconColor":"#488fef"
				},
                                "background":{
                                        "backgroundColor":"#ffffff",
                                        "border":"1px solid #dadada"
                                },
				"hover":{
                                        "showHover":false,
                                        "hoverColor":"#e1e4e6"
                                }
                            }
			}
                   };
		   return styleObject;
		}
	}
});
