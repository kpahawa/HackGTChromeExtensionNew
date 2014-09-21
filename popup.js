
chrome.runtime.getBackgroundPage(function (backgroundPage) { 
  list =  backgroundPage.backgroundPageListofLinks;
  query = backgroundPage.backgroundPageQuery;

  $("#query-name").text(query);

  var listContainer = $("<div>");
  $("#searchlinks1").append(listContainer);

  var ul = $("<ul>");

  listContainer.append(ul);

  for(var key in list) {
    u = list[key].href;
    t = list[key].title;
    st = list[key].st; //changed
    console.log(st);  
  
    var li = $("<li>").append(
        $('<span>').data("url", u).text(t)).addClass('item');

    var id = "hide";
    li.append($('<br>'));
    li.append($('<span>').text(st).addClass('desc').hide());

    li.click(function() 
    {
      console.log(key);
      chrome.tabs.update(updateProperties = {url: $(this.children[0]).data("url")});
    });

    li.hover(
        function() {
          $(this).find('.desc').show();
        }, 
        function() {
          $(this).find('.desc').hide();
        }
      );

    ul.append(li);
  }
  
  console.log(list);
});