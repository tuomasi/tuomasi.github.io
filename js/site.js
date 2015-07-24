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


  $(".nav-toggle").on("click", function(){
    $(".header__toggle").toggle();
    $(this).toggleClass("icon-menu");
    $(this).toggleClass("icon-cancel");
  });


  // $(".hideHeader").on("click", function(){
  //   $(".headerToggle").toggle();
  // });


  $(".customise__controls--theme").on("click", function(){
    $(".header__customise__theme").toggle();
  });


  $("#apply-theme").on("click", function(){
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
    $(".header").css(theme);
    $(".header__top__title").css("color", theme.color);
    $(".nav__item a:not(.active)").css("color", theme.color);
    $(".footer").css(theme);
  };
});
