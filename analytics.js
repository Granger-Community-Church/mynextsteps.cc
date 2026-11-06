// Google Analytics 4 for mynextsteps.cc (property "mynextsteps.cc", stream G-WCEFF0R14N).
// Loaded in the <head> of every page. Data is only sent from the live site; on any other
// host (local preview on :3010) gtag() logs to the console instead, so tests don't pollute
// the reports.
(function () {
  var MEASUREMENT_ID = "G-WCEFF0R14N";
  var live = location.hostname === "mynextsteps.cc";

  window.dataLayer = window.dataLayer || [];
  window.gtag = live
    ? function () { window.dataLayer.push(arguments); }
    : function () { console.log("[analytics] " + JSON.stringify(Array.prototype.slice.call(arguments))); };

  // The sign-up verification link lands on /?mpp-verify-id=<token>, and that token encodes
  // the person's name and email. Strip it from every URL GA sees, including the referrer
  // on the next page they open.
  function clean(href) {
    if (!href) return href;
    try {
      var url = new URL(href);
      url.searchParams.delete("mpp-verify-id");
      return url.href;
    } catch (e) {
      return href;
    }
  }

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, {
    page_location: clean(location.href),
    page_referrer: clean(document.referrer)
  });

  if (live) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(s);
  }
})();
