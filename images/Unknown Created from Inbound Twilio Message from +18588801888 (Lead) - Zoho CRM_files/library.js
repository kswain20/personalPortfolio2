
(function() { // No I18N

















var docHead = document.head || document.getElementsByTagName("head" )[0] || document.documentElement;

function zdLibraryOnLoadHandler() {
	var cssURLs = "//css.zohostatic.com/zohoone/20220404_4903604/zo/assets/zo/styles/app-zd-launcher.css"; // No I18N
	var jsURLs = "//js.zohostatic.com/zohoone/20220404_4903604/zo/assets/zo/js/zd-launcher.js";

	// Include CSS
	if(cssURLs) {
		cssURLs = cssURLs.split(",");
		for(var i = 0, len = cssURLs.length; i < len; i++) {
			var style = document.createElement("link");
			style.href = cssURLs[i];
			style.rel = "stylesheet";
			docHead.appendChild(style);
		}
	}

	// Synchronously Include Scripts
	if(jsURLs) {
		jsURLs = jsURLs.split(",");
		var scriptIdx = 0;
		(function _jsOnLoad() {
			if (scriptIdx == jsURLs.length) { // Last script, all scripts were loaded. So, call the users handler.
				onZDLibraryScriptLoad();
			} else {
				includeScript(jsURLs[scriptIdx++], _jsOnLoad);
			}
		})();
	}
};

function includeScript(url, callback) {
	var script = document.createElement("script");
	script.src = url;
	if (callback) {
		script.onload = script.onreadystatechange = function() {
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
				callback();
				script.onload = script.onreadystatechange = null; // To avoid calling repeatedly in IE
			}
		};
	}
	docHead.appendChild(script);
};

if(document.readyState == "complete") { // Call the handler if DOM already loaded.
	zdLibraryOnLoadHandler(); 
} else { 
	// Should not use `window.onload` as it might be overridden by service team
	if (window.addEventListener) {
	  window.addEventListener('load', zdLibraryOnLoadHandler, false); 
	} else if (window.attachEvent)  { 
	  window.attachEvent('onload', zdLibraryOnLoadHandler); 
	}
}

	function onZDLibraryScriptLoad() { // No I18N
		
		var serviceData = {}; // No I18N
		serviceData.app_name = "crm"; // No I18N
		serviceData.org_id = "663703324"; // No I18N
		serviceData.zaaid = "646510457"; // No I18N
		serviceData.context = ""; // No I18N
		window.ZDLibrary.serviceData = serviceData; // No I18N
		
		
		
		window.ZDLibrary.PageLinks = { // No I18N
			home : "https://one.zoho.com/zohoone/greenridgesolarinc/home", // No I18N
			adminPanel : "https://one.zoho.com/zohoone/greenridgesolarinc/adminhome" // No I18N
		}
		
		window.ZDLibrary.I18NData = {"oz.apps.search":"Search Applications","oz.apps.group.email.collaboration":"Email and Collaboration","oz.zdlibrary.my.apps":"My Apps","oz.apps.not.found":"No applications found","oz.zdlibrary.recommended":"Recommended","oz.general.show":"Show","oz.general.try.now":"Try now","oz.apps.group.sales":"Sales","oz.apps.group.business.process":"Business Process","oz.apps.group.finance":"Finance","oz.general.app.home":"Home","oz.general.new":"New","oz.general.add":"Add","oz.apps.group.marketing":"Marketing","oz.general.added":"Added","oz.general.loading":"Loading...","oz.zdlibrary.other.apps":"Other Apps","oz.zdlibrary.added.applications.count":"{0} more application(s) added","oz.zdlibrary.link.adminpanel":"Admin Panel","oz.apps.group.helpdesk":"Help Desk and Customer Support","oz.general.open":"Open","oz.apps.group.hrms":"Human Resources"}

		
		
		
		function enableTracking() { // No I18N
			window.$zoho.salesiq.tracking.on(); // No I18N
			window.$zoho.salesiq.visitor.info(window.ZDLibrary.infoPropertiesJson); // No I18N
		} 
		
		// Service teams must define `onZDLibraryReady` function to initialize their service.	
		if(window.onZDLibraryReady) { // No I18N
			window.onZDLibraryReady(); // No I18N
	 	}
	}
})();
