gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-logo",
    start: "top top",
    scrub: 1,
    pin: false,
    pinSpacing: false,
  }
});

tl.fromTo(".wagon", {
  x: 900
}, {
  x: -50,
});

tl.fromTo(".cloud-1", {
  transform: "translate(100px, 10px)",
}, {
  transform: "translate(-100px, -5px)",
});

tl.fromTo(".cloud-2", {
  transform: "translate(500px, -10px)",
}, {
  transform: "translate(700px, -5px)",
});
// tl.fromTo(".pContent", {
//   yPercent: 0
// }, {
//   yPercent: -1,
//   ease: "circ"
// });


const clouds = gsap.utils.toArray(".cloud");
clouds.forEach(cloud => {
  gsap.to(cloud, {
    scrollTrigger: {
      scrub: 1
    },
    transform: "translate(50px, -100px)"
  }, )
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Load Image Animation

// gsap.fromTo(".layer",
// {transform: "scale(.1)", opacity:0},
// {transform: "scale(1.2)", opacity:1, duration: 8, ease: "bounce"});
// gsap.fromTo(".baselayer",
// {opacity:0, transform: "scale(.1)"},
// {opacity:1, transform: "scale(1.2)", duration: 8, ease: "bounce"});
// gsap.fromTo(".main-nav",
// {opacity:0, transform: "scale(.1)"},
// {opacity:1, transform: "scale(1.2)", delay: 2, duration: 1});


//gsap.fromTo(".bright",
//{webkitFilter: "brightness(1)", filter: "brightness(1)" },
//{
//  duration: .25,
//     webkitFilter: "brightness(2)",
//     filter: "brightness(2)",
//     yoyo: true,
//     repeat: -1,
//     repeatDelay: 0.5,
//     ease: "none",
//     stagger: .1,
//   }
// );

//gsap.fromTo(".hue",
// {webkitFilter: "hue-rotate(0deg)", filter: "hue-rotate(0deg)"},
// {
// duration: .5,
// webkitFilter: "hue-rotate(90deg)",
// filter: "hue-rotate(90deg)",
// yoyo: true,
// repeat: -1,
// ease: "none",
// stagger: .5,
// });


//const layers = gsap.utils.toArray(".layer");
//layers.forEach(layer => {
//tl.fromTo(layer, {opacity: 1.0, transform: "scale(1)"},
//{opacity: 0, transform: "scale(5)"},0)});
//tl.fromTo(".baselayer", {opacity: 1.0, transform: "scale(1)"},
//{opacity: 0, transform: "scale(5)"},0);