var req = new XMLHttpRequest();

req.open(
    "GET",
    "http://localhost/~michael/pick-dataset/");
req.onload = showDSI;
req.send(null);

function showDSI() {
	// var d = document.createElement("div");
	// d.innerHTML = req.responseText;
	// document.body.appendChild(d);
	document.body.innerHTML = req.responseText;
}