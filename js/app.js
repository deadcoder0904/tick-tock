document.addEventListener('DOMContentLoaded',function() {


	const hourHand = document.getElementById('hour-hand');
	const minHand = document.getElementById('min-hand');
	const secHand = document.getElementById('sec-hand');

	function currentTime() {
		const now = new Date();
		const hours = now.getHours();
		const mins = now.getMinutes();
		const secs = now.getSeconds();

		const hoursDeg = (hours / 12) * 360 + 90;
		const minsDeg = (mins / 60) * 360 + 90;
		const secsDeg = (secs / 60) * 360 + 90;

		hourHand.style.transform = `rotate(${hoursDeg}deg)`;
		minHand.style.transform = `rotate(${minsDeg}deg)`;
		secHand.style.transform = `rotate(${secsDeg}deg)`;

	}

	currentTime(); //Call as soon as DOMContentLoaded

	setInterval(currentTime,1000);

});
