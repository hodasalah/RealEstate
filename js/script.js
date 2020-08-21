 /* global $ , alert , console */
 $(function(){
	'use strict';

  // links add active class
  $('.navbar-nav li a').click(function(){

    $(this).parent().addClass('active').siblings().removeClass('active');
  });

  // trigger fitText
  $(".responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '45px' });

  //adjust shuffel links

  $('.controls button').click(function () {

    $(this).addClass('selected').siblings().removeClass('selected');

  });

  //trigger owl-carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:false,
    dots:false,
    autoplay:true,
    animateOut:true,
    responsive:{
      0:{
        items:1,
        loop:true
      },
      600:{
        items:2,
        loop:true
      },
      1000:{
        items:3,
        loop:true
      }
    }
  });

  // trigger button scrollUp
  var btn = $('#button_scroll');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  //trigger Nice Scroll

	$("body").niceScroll({
		cursorcolor:'#d2b66c',
		cursorborder:'none',
	});

  //trigger mixItUp

  var mixer = mixitup('#container-mix') ;
 });
