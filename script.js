function toggledown() {
	const navbar = document.getElementById('nav_barm');
	const button_nav = document.getElementById('btn_bar');

	if (navbar.style.transform == 'translateY(-40%)') {
		navbar.style.transform = 'translateY(0%)';
		button_nav.style.transform = 'scaleY(-1)';
	} else {
		navbar.style.transform = 'translateY(-40%)';
		button_nav.style.transform = 'scaleY(1)';
	}


}
