

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".layer",
{transform: "scale(.1)", opacity:0},
{transform: "scale(1.2)", opacity:1, duration: 2, ease: "bounce"});
gsap.fromTo(".baselayer",
{opacity:0, transform: "scale(.1)"},
{opacity:1, transform: "scale(1.2)", duration: 2, ease: "bounce"});

gsap.fromTo(".bright",
  {webkitFilter: "brightness(1)", filter: "brightness(1)" },
  {
    duration: .25,
    webkitFilter: "brightness(2)",
    filter: "brightness(2)",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.5,
    ease: "none",
    stagger: .1,
  }
);

gsap.fromTo(".hue",
{webkitFilter: "hue-rotate(0deg)", filter: "hue-rotate(0deg)"},
{
duration: .5,
webkitFilter: "hue-rotate(90deg)",
filter: "hue-rotate(90deg)",
yoyo: true,
repeat: -1,
ease: "none",
stagger: .5,
});

var tl = gsap.timeline({
  scrollTrigger:{
  trigger: ".panel",
  start: "top top",
  scrub: true,
  pin: true,
  pinSpacing: false,
}});

//const layers = gsap.utils.toArray(".layer");
//layers.forEach(layer => {
//tl.fromTo(layer, {opacity: 1.0, transform: "scale(1)"},
//{opacity: 0, transform: "scale(5)"},0)});
//tl.fromTo(".baselayer", {opacity: 1.0, transform: "scale(1)"},
//{opacity: 0, transform: "scale(5)"},0);

tl.fromTo(".pContent", {yPercent: 0},{
  yPercent: -60});
