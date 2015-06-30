$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("form.wufoo header.info").remove();

  $(".navToggle").on("click", function(){
    $(".headerToggle").toggle();
    $(this).toggleClass("fa-chevron-circle-down");
    $(this).toggleClass("fa-chevron-circle-up");
  });
  $(".hideHeader").on("click", function(){
    $(".brand-tagline, .navWrapper").toggle();
  });
  $(".theme").on("click", function(){
    $(".themeContainer").toggle();
  });
  $("#applyTheme").on("click", function(){
    var theme = $("#theme").find("option:selected").data();
    console.log(theme);
    localStorage.setItem("background-color", theme["backgroundColor"]);
    localStorage.setItem("color", theme.color);
    applyTheme();
  });

  if(localStorage.color){
    applyTheme();
  };
  function applyTheme(){
    var theme = {
      "color": localStorage.color,
      "background-color": localStorage["background-color"]
    };
    console.log(theme);
    $(".headerWrapper").css(theme);
    $(".brand-title").css("color", theme.color);
    $(".nav-item a:not(.active)").css("color", theme.color);
    $(".footer").css(theme);
  };
});
