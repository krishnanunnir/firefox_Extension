var firstHref = $("#allsizes-photo").children('img').eq(0).attr("src");;
//var content=document.getElementById("faq-link");
//content.innerHTML=content.innerHTML+"<br><a download='custome_filename.jpeg' href='"+firstHref"'>Download Image</a>";
console.log(firstHref);
chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
