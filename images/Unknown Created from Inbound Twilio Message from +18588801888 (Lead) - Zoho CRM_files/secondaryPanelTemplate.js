//$Id$

Vue.component("panel-template-secondary",{
   	template:" <div id=\"app\"> "+
                "<v-app v-if=\"tabs==='items'\" >"+
                "<v-toolbar v-bind:style='{\"background-color\":styleObject.home.topband.backgroundColor,\"color\":styleObject.home.topband.color,\"font-size\":styleObject.home.topband.fontSize+\" !important\", \"font-family\":styleObject.home.topband.fontFamily, \"font-weight\":styleObject.home.topband.fontWeight, \"z-index\":styleObject.home.topband.zIndex, \"box-shadow\":styleObject.home.topband.boxShadow, \"border-left\":styleObject.home.topband.borderLeft, \"border-right\":styleObject.home.topband.borderRight, \"border-top\":styleObject.home.topband.borderTop, \"border-bottom\":styleObject.home.topband.borderBottom}' class=\"title\" app>{{styleObject.home.topband.text}} <v-spacer></v-spacer>  <v-toolbar-items> <v-btn @click=\"closeWin\"  icon><v-icon v-bind:style='{\"color\":styleObject.home.closeButton.iconColor}'>{{styleObject.home.closeButton.icon}}</v-icon></v-btn>  </v-toolbar-items></v-toolbar>"+
                "<v-content v-bind:style='{\"background-color\":styleObject.home.background.color,\"position\":filteredItems.length !=0?\"absolute\" : \"\"}' :class='filteredItems.length==0?\"align-center\":\"\"' style=\"height:100%;overflow:auto\">"+
                "<div v-if=\"filteredItems.length!==0\"  style=\"height:100%;\">"+
                        "<component v-if=\"componentExists(item.component.component)\" @clicked=\"openWin\" v-for=\"(item, index) in filteredItems\"  :is=\"item.component.component\" :data='item' :styles='styleObject.messageStyles[item.component.component+\"-styles\"]' :key=\"index\" ></component>"+
                        "<div class=\"text-xs-right\"><v-btn style=\"text-transform:none;\"  flat v-bind:style='{\"color\":styleObject.home.historyButton.withNotification.color,\"font-size\":styleObject.home.historyButton.withNotification.fontSize+\" !important\", \"font-family\":styleObject.home.historyButton.withNotification.fontFamily, \"font-weight\":styleObject.home.historyButton.withNotification.fontWeight}' @click=\"tabs='history'\">{{styleObject.home.historyButton.withNotification.text}} <v-icon v-bind:style='{\"color\":styleObject.home.historyButton.withNotification.iconColor}'>{{styleObject.home.historyButton.withNotification.icon}}</v-icon>  </v-btn></div>"+
                "</div>"+
                        "<v-layout column justify-center align-center fill-height class=\"subheading  blue-grey--text text--lighten-1 text-xs-center\"  v-else>"+
                        "<div> <v-icon size=\"60\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.iconColor+\" !important\"}' class=\"blue-grey--text text--lighten-1 \"> {{styleObject.home.descriptionText.noDataDescription.icon}} </v-icon> </div>"+
                        "<div class=\"py-1\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.heading.color,\"font-size\":styleObject.home.descriptionText.noDataDescription.heading.fontSize+\" !important\", \"font-family\":styleObject.home.descriptionText.noDataDescription.heading.fontFamily, \"font-weight\":styleObject.home.historyButton.withNotification.fontWeight}'>{{styleObject.home.descriptionText.noDataDescription.heading.text}}</div>"+
                        "<div class=\"pa-2 caption\" v-bind:style='{\"color\":styleObject.home.descriptionText.noDataDescription.description.color,\"font-size\":styleObject.home.descriptionText.noDataDescription.description.fontSize+\" !important\", \"font-family\":styleObject.home.descriptionText.noDataDescription.description.fontFamily, \"font-weight\":styleObject.home.descriptionText.noDataDescription.description.fontWeight}'>{{styleObject.home.descriptionText.noDataDescription.description.text}}</div>"+
                        "<div> <v-btn @click=\"tabs='history'\"  rounded v-bind:style='{\"background-color\":styleObject.home.historyButton.withNoNotification.buttonColor,\"color\":styleObject.home.historyButton.withNoNotification.color,\"font-size\":styleObject.home.historyButton.withNoNotification.fontSize+\" !important\", \"font-family\":styleObject.home.historyButton.withNoNotification.fontFamily, \"font-weight\":styleObject.home.historyButton.withNoNotification.fontWeight}'>{{styleObject.home.historyButton.withNoNotification.text}}</v-btn>  </div>"+
                        "</v-layout>"+
                "</v-content>"+
                "</v-app>"+
                "<v-app v-else>"+
                "<v-toolbar v-bind:style='{\"background-color\":styleObject.history.topband.backgroundColor,\"color\":styleObject.history.topband.color,\"font-size\":styleObject.history.topband.fontSize+\" !important\", \"font-family\":styleObject.history.topband.fontFamily, \"font-weight\":styleObject.history.topband.fontWeight, \"box-shadow\":styleObject.history.topband.boxShadow, \"border-left\":styleObject.history.topband.borderLeft, \"border-right\":styleObject.history.topband.borderRight, \"border-top\":styleObject.history.topband.borderTop, \"border-bottom\":styleObject.history.topband.borderBottom}' dark class=\"title\" app> <v-btn @click=\"tabs='items'\"  icon><v-icon v-bind:style='{\"color\":styleObject.history.backButton.iconColor}'>{{styleObject.history.backButton.icon}}</v-icon> </v-btn>{{styleObject.history.topband.text}}<v-spacer></v-spacer>  <v-toolbar-items> <v-btn @click=\"closeWin\" icon><v-icon v-bind:style='{\"color\":styleObject.history.closeButton.iconColor}'>{{styleObject.history.closeButton.icon}}</v-icon></v-btn>  </v-toolbar-items></v-toolbar>"+
		"<v-content v-bind:style='{\"background-color\":styleObject.history.background.color,\"position\":filteredOldItems.length !=0?\"absolute\" : \"\"}' style=\"height:100%;overflow:auto\">"+
                "<div v-if=\"filteredOldItems.length!==0\"  style=\"height:100%;overflow:auto;\">"+
                       " <component v-if=\"componentExists(item.component.component)\" @clicked=\"openWin\" v-for=\"(item, index) in filteredOldItems\"  :is=\"item.component.component\" :data='item' :styles='styleObject.messageStyles[item.component.component+\"-styles\"]' :key=\"index\" ></component>"+
                "</div>"+
                "<v-layout  justify-center v-bind:style='{\"color\":styleObject.history.descriptionText.noDataDescription.color + \" !important\",\"font-size\":styleObject.history.descriptionText.noDataDescription.fontSize+\" !important\", \"font-family\":styleObject.history.descriptionText.noDataDescription.fontFamily, \"font-weight\":styleObject.history.descriptionText.noDataDescription.fontWeight}' fill-height class=\"subheading  blue-grey--text text--lighten-1 text-xs-centeri pt-3\"  v-else>"+
                        "{{styleObject.history.descriptionText.noDataDescription.text}}"+
                "</v-layout>"+
                "</v-content>"+
                "</v-app>"+
                "</div>",
	props:["items","old-items","reset","styles","newpids","stylereset"],
	data:function(){
		return{ 
			tabs : "items",
			filters:["All Messages"],
			filterItems:[],
      			selectedFilter:"All Messages",
			validItems:[],
			validOldItems:[],
			styleObject: this.styleInit()
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
			var handle = this;
			var pidsValid = [];
			newPids.forEach(function(d){
				var messageTemplateName = "";
				handle.validItems.forEach(function(e)
				{
					if(e.PID == d)
					{
						messageTemplateName = e.component.component;
					}
				});
				if(messageTemplateName != ""){
					pidsValid.push(d);
				}
			});
			this.$emit('pids-valid',pidsValid);
		}
	},
	mounted:function(){
		this.styleObject = this.getStyles();
	},
	computed:{
		filteredOldItems:function(){
			var handle = this;
			var finalItems = [];
			
			handle.oldItems.forEach(function(d)
			{
				if(handle.isMessageValid(d.component.component))	
				{
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
				if(handle.isMessageValid(d.component.component))
				{
					handle.filterItems.push(d);	
				}
			});

			if(handle.selectedFilter==="All Messages"){
                                finalItems = handle.filterItems;
                        }
                        else{
                                finalItems =  handle.filterItems.filter(function(d){return d.category===handle.selectedFilter;});
                        }

			this.validItems = finalItems;
			return this.validItems;
        	},
		compFilters:function(){
                	return this.filters.concat(this.filterItems.map(function(d){ return d.category;  }) );
        	}
	},
	methods:{
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
			if(this.validItems.length!==0&&this.filteredItems.length===0){
                        	this.selectedFilter="All Messages";
                	}
		},
		closeWin:function(){
			this.tabs="items";
			this.$emit('close-clicked');
		},
		getStyles:function(){
			this.styleObject = this.stylesFromSdk(this.styleObject,this.styles);
			return this.styleObject;
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
		stylesFromSdk:function(defaultStyles,sdkStyles)
		{
			var updatedStyles = defaultStyles;
			for(var key in sdkStyles){
				if(defaultStyles[key] != null && sdkStyles[key] != null)
				{
					if(typeof defaultStyles[key] == "object" && typeof sdkStyles[key] == "object")
					{
						updatedStyles[key] = this.stylesFromSdk(defaultStyles[key],sdkStyles[key]);
					}
					else
					{
						updatedStyles[key] = sdkStyles[key];
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
                                	"icon": "close",			//MaterialIcon
                                	"iconColor": "#ffffff"
                        	},
				"historyButton":{
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
					"fontWeight" : ""
				},
				"background":{
                                        "backgroundColor":"#ffffff",
					"border":"1px solid #dadada"
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
                                }
                            }
			}
                   };
		   return styleObject;
		}
	}
});
