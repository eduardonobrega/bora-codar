const themeButtons = document.querySelectorAll('header button');
const themeButton1 = themeButtons[0];
const themeButton2 = themeButtons[1];
const themeButton3 = themeButtons[2];

const player = document.querySelector('main');
const progress = document.querySelector('#progress');

const buttonDecrement = document.querySelector('#decrement');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonIncrement = document.querySelector('#increment');

const music = new Audio('./assets/me-leva-pra-casa.m4a');

const minutesDisplay = document.querySelector('#currentTime .minutes');
const secondsDisplay = document.querySelector('#currentTime .seconds');
let totalMinutes;
let totalSeconds;

const input = document.querySelector('input');

input.addEventListener('input', () => {
  music.currentTime = input.value;
  updateMusicTime();
});

let minutes = '00';
let seconds = '00';
const step = 5;
let interval;

function setMusicDuration() {
console.log(music.duration)

  totalMinutes = Math.floor(music.duration / 60);
  totalSeconds = Math.floor(music.duration - totalMinutes * 60);
  document.querySelector('#totalTime .minutes').textContent = String(
    totalMinutes
  ).padStart(2, '0');
  document.querySelector('#totalTime .seconds').textContent = String(
    totalSeconds
  ).padStart(2, '0');

  input.setAttribute('max', music.duration);
}

function changeButtons() {
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
}

function updateMusicTime(m, s) {
  minutes = m || Math.trunc(music.currentTime / 60);
  seconds = s || Math.floor(music.currentTime - minutes * 60);

  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  input.value = music.currentTime;
  if (music.currentTime == music.duration) {
    resetTimer();
    pause();
  }
}

function resetTimer() {
  clearInterval(interval);
  music.currentTime = 0;
  updateMusicTime(0, 0);
}


buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);

buttonDecrement.addEventListener('click', () => {
  music.currentTime -= step;
  updateMusicTime();
  buttonIncrement.disabled = false;
});

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();

  interval = setInterval(updateMusicTime, 1000);
}

function pause() {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  music.pause();
  clearTimeout(interval);
}

buttonIncrement.addEventListener('click', () => {
  if (music.currentTime + step > music.duration) {
    resetTimer();
    pause();
  } else {
    music.currentTime += step;
    updateMusicTime();
  }

  // if (music.currentTime + step <= music.duration) {
  //   music.currentTime += step;
  //   updateMusicTime();
  // } else {
  //   if ((music.currentTime + totalSeconds) <= music.duration) {
  //     music.currentTime += totalSeconds;
  //     updateMusicTime();
  //     buttonIncrement.disabled = true
  //   }
  // }
});

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
