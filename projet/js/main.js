function fixDiv() {
  var $cache = $("#getFixed");
  if ($(window).scrollTop() > 10)
    $cache.css({ position: "fixed", top: "10px" });
  else $cache.css({ position: "relative", top: "auto" });
}
$(window).scroll(fixDiv);
fixDiv();
