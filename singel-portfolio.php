<?php
ob_start();
$title = 'Portfolio';

include 'includes/header.php';
include 'includes/info-bar.php';
include 'includes/menu-bar.php';


?>
<!-- start content-->
<div class="content">
  <div class="curtain"></div>
  <div class="top-bg" style="background-image: url(dist/images/wallpaper.jpg)">
    <div class="top-bg-overlay"></div>
  </div>
  <div class="" data-router-wrapper>
    <div id="scrollbar " class="scroll-frame page-content singel-portfolio" data-router-view="portfolio">
      <div class="section">
        <h4 class="title">Kassler Medical Cener</h4>
        <div class="row">
          <div class="col-12">
            <div class="header">
              <div class="swiper singel_portfolio_swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="https://bslthemes.com/arter/wp-content/uploads/2020/09/work-1.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://bslthemes.com/arter/wp-content/uploads/2020/09/work-2.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://bslthemes.com/arter/wp-content/uploads/2020/09/work-3.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://bslthemes.com/arter/wp-content/uploads/2020/09/work-3.jpg" alt=""></div>
                </div>
                <div class="swiper-bottom-bar">
                  <div class="pagination">
                    <div class="swiper-pagination"></div>
                  </div>
                  <div class="navigation">
                  <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div id="scrolly">
          <div class="container">
            <div class="row">
              <div class="col-2">
                <div class="fixed-step d-flex flex-column justify-content-center">
                  <div class="step1" data-step="1">
                    <p>Challenge</p>

                  </div>
                  <div class="step1" data-step="2">
                    <p>Solution</p>
                  </div>
                  <div class="step1" data-step="3">
                    <p>Result</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <article>
                  <div class="step d-flex flex-column justify-content-center" data-step="1">
                    <h5>Challenge</h5>
                    <ul>

                      <li>My job is simple and sophisticated</li>
                      <li>My job is simple and sophisticated</li>
                      <li>My job is simple and sophisticated</li>

                    </ul>
                    <span>https://bslthemes.com/arter/wp-content/uploads/2020/09/work-1.jpg</span>
                  </div>
                  <div class="step" data-step="2">
                    <h5>Solution</h5>
                    <ul>

                      <li>LLLLL job is simple and sophisticated</li>
                      <li>LLLLL job is simple and sophisticated</li>
                      <li>LLLLL job is simple and sophisticated</li>
                    </ul>
                    <span>https://bslthemes.com/arter/wp-content/uploads/2020/09/work-3-950x536.jpg</span>

                  </div>
                  <div class="step" data-step="3">
                    <h5>Result</h5>
                    <ul>
                      <li>ERRRRR job is simple and sophisticated</li>
                      <li>ERRRRR job is simple and sophisticated</li>
                      <li>ERRRRR job is simple and sophisticated</li>
                    </ul>
                    <span>https://bslthemes.com/arter/wp-content/uploads/2020/09/work-10.jpg</span>

                  </div>
                </article>
              </div>
              <div class="col-7">
                <figure>
                  <img class="figure-img" src="https://bslthemes.com/arter/wp-content/uploads/2020/09/work-1-950x633.jpg" alt="ggggg">
                </figure>
              </div>
            </div>
          </div>
        </div>

      </div>


      <?php include 'includes/footer-baner.php'; ?>

    </div>
  </div>
</div>
<!-- end content-->

<?php

include 'includes/footer.php';
