$(function() {

	$(".header-top__nav-btn").click( function() {
		$(this).toggleClass("on");
		$(".header-top__nav").slideToggle();
	});

	$(".header-top__currency").click( function() {
		$(".currency-select").slideToggle();
	});

	$(".lang").click( function() {
		$(".lang-select").slideToggle();
	});





	$('.menu-main').find('.menu-main__item > a').click(function( event ){
		event.preventDefault();
		
      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".menu-sub-1").not($(this).next()).slideUp('fast');

  });



	$('.gallery').slick({
		dots: false
	});

	$('.slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
    ]
});






// 	var click = (function () {$(".accordion > li > a").click(function(){

// 		if(false == $(this).next().is(':visible')) {
// 			$('.accordion div').slideUp(100);
// 		}
// 		$(this).next().slideToggle(300);
// 	});
// });
// 	var hover = (function () {$(".accordion > li > a").hover(function(){

// 		if(false == $(this).next().is(':visible')) {
// 			$('.accordion div').slideUp(100);
// 		}
// 		$(this).next().slideToggle(300);
// 	});
// });


// 		if($(window).width() >= 768){
// 			hover();
// 		} else
// 		click();
	
	// $(window).resize(function () {
	// 	if($(window).width() >= 768){
	// 		hover();
	// 	} else
	// 	click();
	// });



	




});
