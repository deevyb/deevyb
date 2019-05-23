$(document).ready(function(){

	// Typing Animation
	new TypeIt('#whatIAm', {
		strings: [' a data enthusiast.', ' an aspiring product manager.', ' a minimalist.', ' a motorcycle enthusiast.', ' driven.'],
		speed: 100,
		deleteSpeed: 60,
		breakLines: false,
		nextStringDelay: 2000,
		startDelay: 550
	});
});