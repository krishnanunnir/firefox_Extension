chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(null, {file: "./scripts/content_script.js"});
	
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);

