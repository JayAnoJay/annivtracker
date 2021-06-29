'use strict';

const years = document.querySelector('.years');
const months = document.querySelector('.months');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const titleCon = document.querySelector('.title-container');
const msg = document.querySelector('.msg-container');
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const mo = d * 30.436;
const y = mo * 12;

const setTimer = setInterval(function () {
  together();
}, 1000);

function together() {
  const dateMet = new Date('Oct 24, 2008 00:00:00').getTime();
  const dateToday = new Date().getTime();
  const gap = dateToday - dateMet;

  const yearCount = Math.floor(gap / y);
  const mosCount = Math.floor((gap % y) / mo);
  const daysCount = Math.floor((gap % mo) / d);
  const hoursCount = Math.floor((gap % d) / h);
  const minutesCount = Math.floor((gap % h) / m);
  const secondsCount = Math.floor((gap % m) / s);

  years.textContent = yearCount;
  months.textContent = mosCount;
  days.textContent = daysCount;
  hours.textContent = hoursCount;
  minutes.textContent = minutesCount;
  seconds.textContent = secondsCount;
  titleCon.textContent = yearCount + ' ' + 'Years' + ' and Counting...';
}

// Modal
const titleBtn = document.querySelector('.title-container');
const modalBtn = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

titleBtn.addEventListener('click', () => {
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});
function openModal() {
  modalBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modalBtn.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalBtn.classList.contains('hidden')) {
    closeModal();
  }
});
