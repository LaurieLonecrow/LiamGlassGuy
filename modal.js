'use strict';

const images = document.querySelectorAll('img')

const glass = document.querySelectorAll('.col img');
const pipes = document.querySelectorAll('.pipes');
const bongs = document.getElementById('slide-show').alt = "bong";
const slides = document.querySelectorAll('.new-slide');
// document.createElement('img');
// newSlide.className = ('slide-image')
// newSlide.src =
//   `images/glass/pipes/${"liamglass" + Math.floor(
//   (Math.random() * pipes.length) + 1)}.jpg`;

const appendSlide = function(slides) {
  slides.forEach(function(slide, i) {
    const newSlide = `<img class="slide-image" src="${src}" alt="pipes-are-tight">`
    slides[i].insertAdjacentHTML('afterbegin', newSlide)
  });
}

function openLightbox() {
  document.getElementById('lightbox').style.width = "100%"
  if (pipes) {
    appendSlide(slides, pipes)
  };
};


function closeLightbox() {
  document.getElementById('lightbox').style.width = "0%";
};