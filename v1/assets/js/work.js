$(document).ready(function(){

	// NAVBAR
	$('.pages').hide();

	// Scroll to top
	$('#home, #img-logo').click(function() {
		window.location='index.html';
	});

	// Remove name, rotate squares on scroll
	$(window).bind('scroll', function() {
		let scrolled = $(window).scrollTop();

		if (scrolled > 50) {
			$('.navbar .logo h1').fadeOut(200);
		}
		else {
			$('.navbar .logo h1').fadeIn(200);
		}

		$('.left-square').css('transform', 'rotate(' + (20 - (scrolled / 10)) + 'deg)');
		$('.right-square').css('transform', 'rotate(' + (-20 + (scrolled / 10)) + 'deg)');
	});

	// Menu and pages animation
	$('.menu').hover(function() {
		$('.menu').children().css('width', '40px');
	}, function() {
		if (!$('.menu').hasClass('x')) {
			$('.first').css('width', '10px');
			$('.second').css('width', '25px');
		}
	});
	
	$('.menu').click(function() {
		if ($('.menu').hasClass('x')) {
			$('.pages').removeClass('fadeIn');
			$('.pages').addClass('fadeOut');

			$('.menu').removeClass('x');
			$('.first, .third').css('transform', '');
			$('.second').css('opacity', '100');
			$('.first, .third').css('transition-duration', '0.5s');
			$('.second').css('transition-duration', '0.2s');
		} else {
			$('.pages').show();
			$('.pages').removeClass('fadeOut');
			$('.pages').addClass('fadeIn');

			$('.menu').addClass('x');
			$('.first').css('transform', 'translateY(11px) rotate(45deg)');
			$('.second').css('opacity', '0');
			$('.third').css('transform', 'translateY(-11px) rotate(-45deg)');
			$('.first, .third').css('transition-duration', '0.5s');
			$('.second').css('transition-duration', '0.2s');
		}
	});
});