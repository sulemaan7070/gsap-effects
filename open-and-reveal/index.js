gsap.registerPlugin(ScrollTrigger);
const main = document.querySelector("#main");
let mainOffset = main.offsetWidth;
let mainWidth = main.scrollWidth;
let amounToScroll = mainOffset - window.innerWidth;

console.log(amounToScroll);
const tween = gsap.to(main, {
  scrollTrigger: {
    trigger: "#main div",
    start: "20% 50%",
    end: "bottom center",
    scrub: true,
    markers: true,
    duration: 4,
    pin: true,
  },
  marginTop: "700px",
  duration: 5,
  ease: "none",
});
