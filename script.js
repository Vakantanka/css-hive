function loadEvent() {
	let counter = 1;
	let duration = 10;
	
	const catchMe = document.getElementById("catchMe");
	catchMe.style.setProperty('animation-duration', duration +'s');
	catchMe.style.setProperty('top', 0 + "%");
	catchMe.style.setProperty('left', 0 +'%');

	catchMe.addEventListener("click", function() {
		let score = document.getElementById("score");
		let top = Math.floor(Math.random() * 100);
		let left = Math.floor(Math.random() * 100);
		
		score.innerText= counter;
		counter++;
		if (counter % 2 === 0) {
			if (duration > 0) {
				duration--;
				catchMe.style.setProperty('animation-duration', duration +'s');
			}
		}
		catchMe.style.setProperty('top', top +'%');
		catchMe.style.setProperty('left', left +'%');
	});
}

window.addEventListener("load", loadEvent);