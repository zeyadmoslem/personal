$(window).on('load', function () {
  $("#preloader").addClass('preloaded');
  setInterval(function () {
    $("#preloader").remove()
  }, 1000);
});

$(document).ready(function () {
  /*
  * ----------------------------------------------------------------------------------------
  * 01. Theme menus functions
  * ----------------------------------------------------------------------------------------
  */

  $(".menu-bar-btn").click(function (e) {
    e.preventDefault();
    $(".menu-bar").toggleClass("art-active");
    $(".menu-bar-btn").toggleClass("art-active");
    $(".content").toggleClass("art-active");
    $(".info-bar-btn").toggleClass("art-disabled");
  });
  $(".info-bar-btn").click(function (e) {
    e.preventDefault();
    $(".info-bar").toggleClass("art-active");
    $(".content").toggleClass("art-active");
    $(".menu-bar-btn").toggleClass("art-disabled");

  });

  $(".menu-item").click(function (e) {
    $(".menu-bar").removeClass("art-active");
    $(".menu-bar-btn").removeClass("art-active");
    $(".info-bar-btn").removeClass("art-disabled");
    $(".content").removeClass("art-active");
  });

  /*
  * ----------------------------------------------------------------------------------------
  * 02. Nicescroll
  * ----------------------------------------------------------------------------------------
  */
  $("#scrollbar2").niceScroll({
    autohidemode: "hidden",
    cursorcolor: "transparent",
    cursorborder: "0px",
    smoothscroll: true,
    scrollspeed: 40, // scrolling speed
    mousescrollstep: 20, // scrolling speed with mouse wheel (pixel)
  });

  /*
  * ----------------------------------------------------------------------------------------
  * 03. Info Menu progress bar
  * ----------------------------------------------------------------------------------------
  */
  $(".progress-bar").loading();

  /*
  * ----------------------------------------------------------------------------------------
  * 04. Info Menu skillbar 
  * ----------------------------------------------------------------------------------------
  */
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000);
  });

    /*
  * ----------------------------------------------------------------------------------------
  * 05. Scroll to section
  * ----------------------------------------------------------------------------------------
  */
    $("#explore_scroll").click(function (event) {
      event.preventDefault();
      var x = $(this).offset().top;
      $('html,body').animate({
        scrollTop: x - 250
      }, 1000);
    });

});