(function($){
    'use strict';

    $(document).ready(function(){
        var $win             =   $(window),
            $document        =   $(document),
            $body            =   $('body'),
            $header          =   $('header'),

            $productDesc     =   $("#product-description"),

            $scrollup        =    $('.scrollup'),
            // $bannerslide     =    $('.banner-slide'),
            $featuredBlog    =    $('.featured-blog-list'),
            $upcomming       =    $('.up-comming-slide'),
            $related         =    $('.related-slide'),
            $dropdown        =    $('.dropdown'),
            $dropdownMenu    =    $('.dropdown-menu'),
            $gallery         =    $('.gallery'),
            $blogBanner      =    $('.blog-banner'),
            $galleryFull     =    $('.gallery-full'),
            $grid            =    $('.grid'),
            $loginModal      =    $('.modal-login'),
            $registerModal   =    $('.modal-register'),
            $resetPass       =    $('.forget-btn');


        //////scroll function for changed css starts
        $win.scroll(function() {
            // shrink headers
            if ($(this).scrollTop() > 0) {
                $header.addClass("scrolled");
            } else {
                $header.removeClass("scrolled");
            }

            // back to top
            if ($(this).scrollTop() > 200) {
                $scrollup.fadeIn();
            } else {
                $scrollup.fadeOut();
            }
        });

        $scrollup.on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // drop down menu in mobile
        $dropdown.on('click', 'a', function(e) {
            var $this = $(this);
            var collapseThis = false;
            if ($dropdownMenu.hasClass('dropdown-open') &&
                !$this.next('.dropdown-menu').hasClass('dropdown-open')) {
                $dropdownMenu.slideUp().removeClass('dropdown-open');
                collapseThis = false;
            } else if ($(this).next('.dropdown-menu').hasClass('dropdown-open')) {
                collapseThis = true;
                $(this).next('.dropdown-menu').slideUp().removeClass('dropdown-open');
            }

            if (!collapseThis) {
                $(this).next('.dropdown-menu').slideDown().addClass('dropdown-open');
            }
        });

        // product description
        $productDesc.accordion({
            heightStyle: "content"
        });
    });


})(jQuery);


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      preloadImages: false,
      lazy: {
          loadPrevNext: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 6000,
      },
    })
  });