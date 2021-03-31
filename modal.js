'use strict';

const glass = document.querySelectorAll('.col img');
const pipes = document.getElementById('slide-show').alt = "pipes";
const bongs = document.getElementById('slide-show').alt = "bong";
const slides = document.getElementById('slides');
const images = []; //images is an array of currentSrc for slide-show imgs
const imageArr = function() {
  const imgs = document.querySelectorAll('#slide-show')
  imgs.forEach(function(img, i) {
    const x = imgs[i].currentSrc
    images.push(x)
  });
};


const appendSlide = function(slides) {
  slides.innerHTML = "";
  imageArr();
  images.forEach(function(image, i) {
    const src = images[i];
    const newSlide = `<div id="" class="slide new-slide">
      <img id="slideImage" class="slide-image" src="${src}" alt="pipes-are-tight">
    </div>`;
    slides.insertAdjacentHTML('afterbegin', newSlide)
  })
};


function openLightbox() {
  document.getElementById('lightbox').style.width = "100%";

  if (pipes) {
    appendSlide(slides, pipes)
  };
};


function closeLightbox() {
  document.getElementById('lightbox').style.width = "0%";
};