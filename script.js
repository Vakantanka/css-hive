function loadEvent() {
	console.log("Load completed.");
	const catchMe = document.getElementById("catchMe");
	let counter = 1;
	catchMe.addEventListener("click", function() {
		alert("Nice! " + counter + " click(s)");
		counter++;
	})
}

window.addEventListener("load", loadEvent);