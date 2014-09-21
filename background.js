chrome.runtime.onMessage.addListener(
 function(search, sender, sendResponse) {

 		var query = search.query;
 		var list = search.list;

		window.backgroundPageListofLinks = list;
		window.backgroundPageQuery = query;
		
        sendResponse("List saved to background page!!!");

});