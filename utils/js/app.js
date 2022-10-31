const navIcon = document.querySelector('.fa-bars');
const navElements = document.querySelector('#nav-elements');
const navBar = document.querySelector('nav');
const projects = document.querySelectorAll('.projects');
const profile = document.querySelector('.fa-user');
const profileContainer = document.getElementById('profile-card-container');

navIcon.addEventListener('click', () => {
	if (navIcon.classList[3] !== 'nav-transform') {
		navIcon.classList.add('nav-transform');
		navElements.classList.remove('hide');
		navElements.classList.add('nav-elements');
		navBar.classList.remove('nav-bar');
		navBar.classList.add('nav-expand');
	}
	else {
		navIcon.classList.remove('nav-transform');
		navElements.classList.add('hide');
		navElements.classList.remove('nav-elements');
		navBar.classList.remove('nav-expand');
		navBar.classList.add('nav-bar');
	}
});

navElements.addEventListener('click', () => {
	navIcon.classList.remove('nav-transform');
	navElements.classList.add('hide');
	navElements.classList.remove('nav-elements');
	navBar.classList.remove('nav-expand');
	navBar.classList.add('nav-bar');
});

profile.addEventListener('click', () => {
	let i = 0;
	while (true) {
		if (profileContainer.classList[i] == 'hide') {
			profileContainer.classList.add('profile-card-container');
			profileContainer.classList.remove('hide');
			break;
		}
		else {
			profileContainer.classList.remove('profile-card-container');
			profileContainer.classList.add('hide');
			break;
		}
	}
});
