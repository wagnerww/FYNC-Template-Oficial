$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 75) {
        $("#menu").addClass("fync-bg-header");
      } else {
        $("#menu").removeClass("fync-bg-header");
      }
    });
  });
  