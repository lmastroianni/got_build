(() => {
	// stub
	console.log('fired');

	const sigils   = document.querySelectorAll('.sigil-container');
	      lightbox = document.querySelector('.lightbox');
	      video    = document.querySelector('video');
	      lbClose = document.querySelector(".lightbox-close");

	function showLightbox() {
		//debugger;

		let targetHouse = this.className.split(" ")[1];
		// this gives us back a lowercase house name
		// flip this to uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);


		video.src = `video/House-${targetVid}.mp4`;
		lightBox.classlist.add('show-lightbox');

		video.load();
		video.play();

	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');

	
//rewind current video
	video.currentTime = 0;
	video.pause();

    }

	sigils.forEach(sigil => sigil.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
    lbClose.addEventListener('click', hideLightbox);

})();
