(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40940945-1', 'auto');
ga('send', 'pageview');

var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
     function () {
     document.location = url;
     }
   });
}

var trackSectionLink = function(section) {
  ga('send', 'event', 'section', 'click', section);
}

$( "a.track" ).click(function() {
  var linkHref = $( this ).attr("href");
  var isLocal = linkHref.startsWith("#");
  if (isLocal) {
    trackSectionLink(linkHref);
  } else {
    trackOutboundLink(linkHref);
  }
  return isLocal;
});
