$(function() {
	if (window.intent)   {
		alert("ping");
		window.intent.postResult("abc");
	}
});