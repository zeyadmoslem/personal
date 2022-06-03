</div>

</div>
</div>
<!-- end App-->


<script src="dist/vendors/jquery/jquery3.4.1.min.js" data-no-reload charset="utf-8"></script>
<script src="dist/vendors/bootstrap/js/bootstrap.bundle.min.js" data-no-reload charset="utf-8"></script>
<script src="dist/vendors/jquery-nicescroll/jquery.nicescroll.min.js" data-no-reload charset="utf-8"></script>
<script src="dist/vendors/jquery-progressbar/progressbar.js" data-no-reload charset="utf-8"></script>
<script src="dist/highway.js" data-no-reload charset="utf-8"></script>

<script src="dist/js/app.min.js" charset="utf-8"></script>

<div id="main-script"></div>


<script type="text/javascript" data-no-reload>
  $(window).on('load', function() {
    $("#preloader").addClass('preloaded');
    setInterval(function() {
      $("#preloader").remove()
    }, 1000);
  });

  $(document).ready(function() {
    $(".menu-bar-btn").click(function(e) {
      e.preventDefault();
      $(".menu-bar").toggleClass("art-active");
      $(".menu-bar-btn").toggleClass("art-active");
      $(".content").toggleClass("art-active");
      $(".info-bar-btn").toggleClass("art-disabled");
    });
    $(".info-bar-btn").click(function(e) {
      e.preventDefault();
      $(".info-bar").toggleClass("art-active");
      $(".content").toggleClass("art-active");
      $(".menu-bar-btn").toggleClass("art-disabled");

    });

    $(".menu-item").click(function(e) {
      $(".menu-bar").removeClass("art-active");
      $(".menu-bar-btn").removeClass("art-active");
      $(".info-bar-btn").removeClass("art-disabled");
      $(".content").removeClass("art-active");
    });
    $("#scrollbar2").niceScroll({
      autohidemode: "hidden",
      cursorcolor: "transparent",
      cursorborder: "0px",
      smoothscroll: true,
      scrollspeed: 40, // scrolling speed
      mousescrollstep: 20, // scrolling speed with mouse wheel (pixel)
    });
    $(".progress-bar").loading();

    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 2000);
    });

    $('.counter-number span').each(function(val) {
      var $this = $(this);
      var interval = 2000;
      var startValue = 0;
      var endValue = $this.text();
      var duration = Math.floor(interval / endValue);
      var counter = setInterval(function () {
        startValue +=1;
        $this.text(startValue);
        if(startValue == endValue){
          clearInterval(counter);
        }
      }, duration);
    });


  });
</script>

</body>

</html>