$(function() {
	// Custom JS
	// animate header menu
	var scrollTest = $(window).scrollTop()
	if(scrollTest > 10){
		$('.nav').css({
				'height': '100px',
				'line-height': '100px',
				'background-color': 'white',
				'box-shadow': '0 3px 5px rgba(150, 150, 150, .3)'
		});
	}
	$(window).on('scroll', function(){
		var s = $(this).scrollTop();
		if(s > 10){
			$('.nav').css({
				'height': '100px',
				'line-height': '100px',
				'background-color': 'white',
				'box-shadow': '0 3px 5px rgba(150, 150, 150, .3)'
		});
		}
		else{
			$('.nav').css({
				'height': '130px',
				'line-height': '130px',
				'background-color': 'transparent',
				'box-shadow': 'none'
		});
		}
	});
	//////////////////////
	// toggle side menu //
	//////////////////////
	$('.fa-bars').on('click', function(){
		$('.sidebar').css('transform', 'translateX(0)');
	});
	$('.close').on('click', function(){
		$('.sidebar').css('transform', 'translateX(-400px)');
	});
	//////////////
	// каруселя //
	//////////////
	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		center: true
	});
});
