"use strict";
var secondaryHeader = document.getElementById("secondary-header"),
  secondaryHeaderHeight = secondaryHeader.offsetHeight,
  primaryHeader = document.getElementById("primary-header"),
  primaryHeaderHeight = primaryHeader.offsetHeight,
  siteContent = document.getElementById("content");
function setHeader() {
  var e = document.documentElement.scrollTop || document.body.scrollTop;
  secondaryHeaderHeight < e
    ? ((primaryHeader.style.position = "fixed"), (siteContent.style.marginTop = primaryHeaderHeight + "px"))
    : ((primaryHeader.style.position = "static"), (siteContent.style.marginTop = 0));
}
window.addEventListener("load", setHeader), window.addEventListener("scroll", setHeader);

if($('.wt-route-Fisharebest\Webtrees\Module\IndividualListModule')){
  var pageIndex = 34;
  $(".wt-table-individual").DataTable().page(pageIndex-1).draw('page');
}
