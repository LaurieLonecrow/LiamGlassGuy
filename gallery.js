gsap.registerPlugin(ScrollTrigger);

const imgs = gsap.utils.toArray(".skewElem");

var tl = gsap.timeline({
  scrollTrigger:{
  trigger: ".pContent",
  start: "top top",
  scrub: "none",
}});

imgs.forEach(img => {
tl.to(img, {transform: "scale(1.1)",
stagger: .02,
ease: "bounce",
})
});
