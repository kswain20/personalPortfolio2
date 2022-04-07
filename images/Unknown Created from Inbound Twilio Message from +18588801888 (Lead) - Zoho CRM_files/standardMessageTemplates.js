//$Id$

Vue.component("message-template-default",{
    template:"<v-card @click.native=\"$emit('clicked',data)\" v-ripple flat style=\"border:1px solid #e6e6e6; border-radius:5px;cursor:pointer;margin:15px; width:calc(100vw - 30px);word-wrap: break-word;\" v-bind:style='{\"background-color\":getBackgroundColor(),\"border\":styleObject.background.border + \" !important\"}' @mouseover=\"hover = true \" @mouseleave=\"hover = false \" >"+
                "<v-card-actions class=\"px-3 grey--text text--darken-1 caption\" style='max-width:100%;word-break: break-word;'><span v-bind:style='{\"color\":styleObject.heading.color,\"font-size\":styleObject.heading.fontSize+\" !important\", \"font-family\":styleObject.heading.fontFamily, \"font-weight\":styleObject.heading.fontWeight, \"max-width\":headingWidth}' v-text=\"data.heading\"></span><v-spacer></v-spacer><span v-bind:style='{\"color\":styleObject.sideHeading.color,\"font-size\":styleObject.sideHeading.fontSize+\" !important\", \"font-family\":styleObject.sideHeading.fontFamily, \"font-weight\":styleObject.sideHeading.fontWeight,\"min-width\":sideHeadingWidth}' v-text=\"data.date\"></span></v-card-actions>"+
                "<v-card-text class=\"subheading py-1\" v-bind:style='{\"color\":styleObject.description.color,\"font-size\":styleObject.description.fontSize+\" !important\", \"font-family\":styleObject.description.fontFamily, \"font-weight\":styleObject.description.fontWeight}' v-text=\"data.desc\">  </v-card-text>"+
                "<v-card-actions class=\"px-3 grey--text text--darken-1 caption\"><div class=\"genrediv\"  v-if=\"!rendergenrestyles\"><span v-bind:style='{\"color\":styleObject.category.color,\"font-size\":styleObject.category.fontSize+\" !important\", \"font-family\":styleObject.category.fontFamily,  \"font-weight\":styleObject.category.fontWeight}' v-text=\"data.categoryText\"></span> </div> <div class=\"genrediv\"  v-else-if=\"rendergenrestyles\" v-bind:style='{\"background\":genrestyles.backgroundColor,\"padding\":genrestyles.padding, \"border-radius\":genrestyles.borderRadius,  \"border\":genrestyles.border}' ><span v-bind:style='{\"color\":genrestyles.color,\"font-size\":genrestyles.fontSize+\" !important\", \"font-family\":genrestyles.fontFamily,  \"font-weight\":genrestyles.fontWeight}' v-text=\"data.categoryText\"></span> </div> </v-card-actions>"+
            "</v-card>",
            props:["data","styles","genrestyles","rendergenrestyles","showmessagehover"],
            data:function(){
                return {
                        styleObject:this.styleInit(),
			headingWidth:this.getHeadingWidth(),
			sideHeadingWidth:this.getSideHeadingWidth(),
			hover : false
                }
            },
            methods:{
                styleInit:function(){
                        return this.styles;
                }, 
		getHeadingWidth:function(){
			if(this.data.date.length > 0)
			{
				return "80%";
			}
			else
			{
				return "100%";
			}
			return "80%";
		},
		getSideHeadingWidth:function(){	
			if(this.data.date.length > 0)
                        {
                                return "20%";
                        }
                        else
                        {
                                return "0%";
                        }
                        return "20%";
		},
		getBackgroundColor:function(){
                     	if(this.showmessagehover && this.hover )
                      	{
   				return this.styleObject.hover.hoverColor;
   			}
                        else
                        {
                              	return this.styleObject.background.backgroundColor;
                        }
                }
            } 
});
