(() => {
	// stub
	console.log('fired');

	const sigils     = document.querySelectorAll('.sigil-container'),
	      lightbox   = document.querySelector('.lightbox'),
	      video      = document.querySelector('video'),
	      lbClose    = document.querySelector('.lightbox-close'),
	      topBanners = document.querySelector('#houseImages'),
	      tagline    = document.querySelector('.house-name'),
	      houseInfo  = document.querySelector('.house-info');

	      //this is a container for some dynamic data
	const houseData = [ //STARK
	//backtciks (js template string) let you keep punctuation
	    `STARK
House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.
`

	];

	function showLightbox() {
		//debugger;

		let targetHouse = this.className.split(" ")[1];
		// this gives us back a lowercase house name
		// flip this to uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		//populate the tagline
		tagline.textContent = `House ${targetVid}`;

		//populate houe content
		houseInfo.textContent = houseData[0];





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
   function animateBanners() {
	// move banners to left so current house banner is visible
	const offSet = 600;
	let currentOffset = this.dataset.offset * offSet;

	TweenMax.to(topBanners, 0.7, {right: currentOffset});


}
	//sigils.forEach(sigil => sigil.addEventListener('click', showLightbox));

	// animate the banners at the top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	video.addEventListener('ended', hideLightbox);
    lbClose.addEventListener('click', hideLightbox);

})();
