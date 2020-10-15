let themesNav = document.querySelector('.themes-nav');
let themeButton = document.querySelector('.themes');
let themeButtonText = themeButton.querySelector('span');
let themeItems = themesNav.querySelectorAll('li');
let articles = document.querySelectorAll('.article');
let selectedTheme = 'all';

themeButton.onclick = function() {
	themesNav.classList.toggle('hidden');
};

for (let themeItem of themeItems) {
	themeItem.onclick = function () {
		themeButtonText.textContent = themeItem.textContent;
		selectedTheme = themeItem.dataset.theme;
		themesNav.classList.toggle('hidden');
		for (let article of articles) {
			if (article.dataset.category !== selectedTheme && selectedTheme !== 'all') {
				article.classList.add('hidden');
			}
			else {
				article.classList.remove('hidden');
			}
		};
	}
};





