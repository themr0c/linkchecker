$(function(){function g(){return e.is(":not(:visible)")}function n(){g()?h():k()}function k(){e.hide();c.css("width",p);a.css("margin-left",q);b.css({"margin-left":"0",height:a.height()});b.find("span").text("\u00bb");b.attr("title",_("Expand sidebar"));document.cookie="sidebar=collapsed"}function h(){a.css("margin-left",r);c.css("width",f);e.show();b.css({"margin-left":f-12,height:a.height()});b.find("span").text("\u00ab");b.attr("title",_("Collapse sidebar"));document.cookie="sidebar=expanded"}
function s(){e.css({"float":"left","margin-right":"0",width:f-28});c.append('<div id="sidebarbutton"><span>&laquo;</span></div>');var d=$("#sidebarbutton");l=d.css("background-color");var b;b=window.innerHeight?window.innerHeight:$(window).height();d.find("span").css({display:"block","margin-top":(b-c.position().top-20)/2});d.click(n);d.attr("title",_("Collapse sidebar"));d.css({color:"#FFFFFF","border-left":"1px solid "+m,"font-size":"1.2em",cursor:"pointer",height:a.height(),"padding-top":"1px",
"margin-left":f-12});d.hover(function(){$(this).css("background-color",m)},function(){$(this).css("background-color",l)})}function t(){if(document.cookie)for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var a=b[c].split("=");"sidebar"==a[0]&&(a=a[1],"collapsed"==a&&!g()?k():"expanded"==a&&g()&&h())}}var a=$(".bodywrapper"),c=$(".sphinxsidebar"),e=$(".sphinxsidebarwrapper");if(c.length){var r=a.css("margin-left"),f=c.width(),q=".8em",p=".8em",m=$(".related").css("background-color"),l=$(".document").css("background-color");
s();var b=$("#sidebarbutton");t()}});