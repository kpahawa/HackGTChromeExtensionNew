var list = [];
var changeMethod = _.debounce(function() {
	while (list.length > 0) {
		list.pop();
	}
	var query = $("input[name=q]").val();
  $(".rc").each(function(index, resultContainer) {
  		var $link = $(resultContainer).find(".r a").first();
		var href = $(resultContainer).find(".r a").first().attr("href");
		var title = $link.text();
		var st = $(resultContainer).find(".st").first().text(); //changed

		list.push({href: href, title: title, st: st}); //changed
	});
	
	console.log(list);

	var search = {
		query: query,
		list: list
	}

	chrome.runtime.sendMessage(search, function(response) {
		console.log(response);
	});
}, 250);
	
    // once you get the link and the title, you need to send it to a background page
    // the background page saves it into memory and has the ability to give it
    // to a app script that displays it.

var observer = new window.MutationObserver(changeMethod);
observer.observe($("#main").get(0), { childList: true, subtree: true });
