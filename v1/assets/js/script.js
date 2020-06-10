$(document).ready(function(){

	// NAVBAR
	$('.pages').hide();

	// Progress bar
	window.onscroll = function() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	};

	// Scroll to top
	$('#home, #img-logo').click(function() {
		$("html, body").animate({ scrollTop: 0 }, 200);
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

	// TYPE ANIM
	new TypeIt('.main-header', {
		strings: ['DATA ENTHUSIAST.', 'MINIMALIST.', 'PROBLEM SOLVER.', 'MOTORCYCLE ENTHUSIAST.', ],
		speed: 100,
		deleteSpeed: 50,
		breakLines: false,
		nextStringDelay: 2500,
		startDelay: 550
	});

	// ABOUT ME
	$('.ab-me').paroller({
		factor: 0.1,
		type: 'foreground',
		direction: 'vertical'
	});

	// PROJECTS
	$(".cards").children().each( function() {
		var wayp = new Waypoint.Inview({
			element: this,
		  	enter: function(down) {
	    		$(this.element).addClass('animated fadeInUp faster');
		  	}
		})
	});

	// FACTS
	var sleep = -314;
	var motor = 4903;
	var coffee = 573;

	var sleepAnim = new CountUp("sleep-num", 0, sleep);
	var motorAnim = new CountUp("motor-num", 0, motor);
	var coffeeAnim = new CountUp("coffee-num", 0, coffee);

	var counting = new Waypoint({
	  	element: document.getElementById('facts'),
	  	handler: function(down) {
	    	if (!sleepAnim.error) {sleepAnim.start(); } else { console.error(sleepAnim.error); }
	    	if (!motorAnim.error) { motorAnim.start(); } else { console.error(motorAnim.error); }
	    	if (!coffeeAnim.error) { coffeeAnim.start(); } else { console.error(coffeeAnim.error); }
	  	}, offset: '60px'
	});
});