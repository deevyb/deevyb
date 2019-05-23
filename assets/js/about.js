$(document).ready(function(){

	// FACTS
	var sleep = -314;
	var motor = 5063;
	var coffee = 573;

	var sleepAnim = new CountUp("sleep-num", 0, sleep);
	var motorAnim = new CountUp("motor-num", 0, motor);
	var coffeeAnim = new CountUp("coffee-num", 0, coffee);

	document.addEventListener('aos:in:nums', ({ detail }) => {
		if (!sleepAnim.error) {sleepAnim.start(); } else { console.error(sleepAnim.error); }
		if (!motorAnim.error) { motorAnim.start(); } else { console.error(motorAnim.error); }
		if (!coffeeAnim.error) { coffeeAnim.start(); } else { console.error(coffeeAnim.error); }
	});
});