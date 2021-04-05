'use strict';

const glass = document.querySelectorAll('.col img');
const pipes = document.getElementById('slide-show').alt = "pipes";
const bongs = document.getElementById('slide-show').alt = "bongs";
const slides = document.getElementById('slides');
const imgs = document.querySelectorAll('#slide-show');



function openLightbox(ele) {
  document.getElementById('lightbox').style.width = "100%";
  const alt = ele.alt;

  function appendSlide() {
    slides.innerHTML = "";
    imgs.forEach(function(img, i) {
      const imgSrc = imgs[i].attributes.src.textContent;
      const imgAlt = imgs[i].alt;
      const newSlide = `<div id="" class="slide new-slide">
        <img id="slideImage" class="slide-image" src=${imgSrc} alt=${imgAlt}>
      </div>`;
      if (alt === imgAlt) {
        slides.insertAdjacentHTML('afterbegin', newSlide)
      };
    });
  };
  appendSlide();
};


function closeLightbox() {
  document.getElementById('lightbox').style.width = "0%";
};