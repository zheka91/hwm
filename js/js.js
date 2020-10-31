document.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById("video"),
		btn = document.getElementById("video-btn");

	if ( btn != null ) {
		btn.addEventListener("click", function() {
			document.getElementsByClassName('main-video-center')[0].classList.add('displayNone')
			video.play();
			video.setAttribute("controls","controls");
		}, false);
	}
});