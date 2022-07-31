$(document).ready(function () {
  'use strict';
  /*
  * ----------------------------------------------------------------------------------------
  * 01. Letters Transtions
  * ----------------------------------------------------------------------------------------
  */

  //set animation timing
  var animationDelay = 2500,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect 
    revealDuration = 600,
    revealAnimationDelay = 1500;

  initHeadline();


  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
  }
  function singleLetters($words) {
    $words.each(function () {
      var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
      for (i in letters) {
        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 10
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        //assign to .cd-words-wrapper the width of its longest word
        var words = headline.find('.cd-words-wrapper b'),
          width = 0;
        words.each(function () {
          var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
      };

      //trigger animation
      setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
    });
  }
  function hideWord($word) {
    var nextWord = takeNext($word);

    if ($word.parents('.cd-headline').hasClass('type')) {
      var parentSpan = $word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(function () {
        parentSpan.removeClass('selected');
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function () { showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

    } else if ($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });

    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function () { hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
      switchWord($word, nextWord);
      setTimeout(function () { hideWord(nextWord) }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.cd-headline').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');

    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
        setTimeout(function () { hideWord($word) }, revealAnimationDelay);
      });
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () { hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else if ($bool) {
      setTimeout(function () { hideWord(takeNext($word)) }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function () { showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else {
      if ($word.parents('.cd-headline').hasClass('type')) { setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200); }
      if (!$bool) { setTimeout(function () { hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }


  /*
  * ----------------------------------------------------------------------------------------
  * 02. Counter
  * ----------------------------------------------------------------------------------------
  */
  $('.counter-number span').each(function (val) {
    var $this = $(this);
    var interval = 2000;
    var startValue = 0;
    var endValue = $this.text();
    var duration = Math.floor(interval / endValue);
    var counter = setInterval(function () {
      startValue += 1;
      $this.text(startValue);
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });


  /*
  * ----------------------------------------------------------------------------------------
  * 03. magnificPopup and swiper 
  * ----------------------------------------------------------------------------------------
  */
  $('.popup-content').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-with-zoom',
    tLoading: '',
    removalDelay: 100, //delay removal by X to allow out-animation
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 600, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
    },
    closeBtnInside: false,
    closeOnContentClick: false,
    callbacks: {
      open: function () {
        $('body').addClass('lightbox-open');
      },
      close: function () {
        $('body').removeClass('lightbox-open');
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  /*
* ----------------------------------------------------------------------------------------
* 03. Singel Portfolio functions
* ----------------------------------------------------------------------------------------
*/

  var swiper = new Swiper(".singel_portfolio_swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    cssMode: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      "@1.50": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  });

  // using d3 for convenience
  var main = d3.select(".singel-portfolio");
  var scrolly = main.select("#scrolly");
  var figure = scrolly.select("figure");
  var article = scrolly.select("article");
  var fixed_step = main.select(".fixed-step");
  var step1 = fixed_step.selectAll(".step1");
  var step = article.selectAll(".step");

  // initialize the scrollama
  var scroller = scrollama();

  // generic window resize listener event
  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 1.7;
    var figureMarginTop = (window.innerHeight - figureHeight) / 8;

    figure
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
  }

  // scrollama event handlers
  function handleStepEnter(response) {
    console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step1.classed("is-active", function (d, i) {
      return i === response.index;
    });
    step.classed("is-active", function (d, i) {
      return i === response.index;
    });


    // update graphic based on step

    // $('.figure-img').fadeOut(200, function() {
    // })
    // .fadeIn(200);
    figure.select("img").attr('src', response.element.lastElementChild.innerText);

  }

  function setupStickyfill() {
    d3.selectAll(".sticky").each(function () {
      Stickyfill.add(this);
    });
  }

  function init() {
    setupStickyfill();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.80,
        debug: false
      })
      .onStepEnter(handleStepEnter);
  }

  // kick things off
  init();

  $(".singel-portfolio #scrolly").niceScroll({
    cursorcolor: "transparent",
    autohidemode: 'scroll',
    smoothscroll: true,
    cursorborder: '1px solid transparent',
  });



});
