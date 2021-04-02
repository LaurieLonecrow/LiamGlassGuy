'use strict';

const glass = document.querySelectorAll('.col img');
const pipes = document.getElementById('slide-show').alt = "pipes";
const bongs = document.getElementById('slide-show').alt = "bong";
const slides = document.getElementById('slides');
const imgs = document.querySelectorAll('#slide-show');


function appendSlide() {
  slides.innerHTML = "";
  imgs.forEach(function(img, i) {
    const imgSrc = imgs[i].currentSrc;
    const imgAlt = imgs[i].alt;
    const newSlide = `<div id="" class="slide new-slide">
      <img id="slideImage" class="slide-image" src=${imgSrc} alt=${imgAlt}>
    </div>`;
    slides.insertAdjacentHTML('afterbegin', newSlide)
  });
};



function openLightbox() {
  document.getElementById('lightbox').style.width = "100%";
  appendSlide();

};


function closeLightbox() {
  document.getElementById('lightbox').style.width = "0%";
};