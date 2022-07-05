'use strict';

// PURPOSE: to understand manipulation of classes

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.show-modal');

console.log(openModalBtn);

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !isModalOpen()) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function isModalOpen() {
  return (
    modal.classList.contains('hidden') && overlay.classList.contains('hidden')
  );
}
