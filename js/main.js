(() => {
	// stub
	console.log('fired');

	const sigils   = document.querySelectorAll('.sigil-container');
	      lightbox = document.querySelector('.lightbox');
	      video    = document.querySelector('video');

	function showLightbox() {
		//debugger;

		let targetHouse = this.className.split(" ")[1];
		// this gives us back a lowercase house name
		// flip this to uppercase
		targetHouse = targetHouse.replace(targetHouse.charAt(0).
			toUpperCase() + targetHouse.splice(1));


		let targetSource = `video/House-${targetHouse}.mp4`;
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

    shields.forEach(shield => shield.addEventListener('click, showLightbox'));

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox)

})();
