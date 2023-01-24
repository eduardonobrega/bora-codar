const themeButtons = document.querySelectorAll('header button');
const themeButton1 = themeButtons[0];
const themeButton2 = themeButtons[1];
const themeButton3 = themeButtons[2];

const player = document.querySelector('main');
const progress = document.querySelector('#progress');
console.log(progress);

themeButton1.addEventListener('click', () => {
  player.classList = 'theme1';

  progress.style.display = 'block';
});
themeButton2.addEventListener('click', () => {
  player.classList = 'theme2';
  progress.style.display = 'block';
});
themeButton3.addEventListener('click', () => {
  player.classList = 'theme2';

  progress.style.display = 'none';
});
