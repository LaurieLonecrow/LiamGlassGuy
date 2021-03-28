'use strict';

const glass = document.querySelectorAll('.col img');
const pipes = document.getElementById('slide-show').alt = "pipes";
const bongs = document.getElementById('slide-show').alt = "bongs";
const newSlide = document.createElement('img');
newSlide.className = 'slide-image';
newSlide.src =
  `images/glass/pipes/${"liamglass" + Math.floor(
  (Math.random() * pipes.length) + 1)}.jpg`;


function openLightbox() {
  document.getElementById('lightbox').style.width = "100%"

  if (document.getElementById('slide-show').alt = "pipes") {
    const slides = document.querySelectorAll('new-slide')
    slides.forEach(slide => {
      slide.appendChild(newSlide)
    });
  }

};

function closeLightbox() {
  document.getElementById('lightbox').style.width = "0%";
};