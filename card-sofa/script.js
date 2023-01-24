const button360 = document.querySelector('.card button:first-child');
const buttonClose = document.querySelector('.card button:last-of-type');
const buttonAdd = document.querySelector('.text button');
const image = document.querySelector('.card img');

function changeButtons() {
  button360.classList.toggle('hide');
  buttonClose.classList.toggle('hide');
}

buttonAdd.addEventListener('click', () => alert('Item adicionado à cesta'))

button360.addEventListener('click', () => {
  changeButtons();
  image.src = './assets/sofa-360.gif';
});

buttonClose.addEventListener('click', () => {
  changeButtons();
  image.src = './assets/sofa-static.png';
});
