gsap.registerPlugin(ScrollTrigger);

// Create the animation
gsap.to("#img", {
  scrollTrigger: {
    trigger: "#myElement",
    start: "30% center",
    // end: "bottom center",
    scrub: true,
    markers: true,
    duration: 1,
  },
  y: -180,
});

gsap.to("#img2", {
  scrollTrigger: {
    trigger: ".img-div",
    // start: "70% center",
    // end: "bottom center",
    scrub: true,
    markers: true,
    duration: 1,
  },
  y: -180,
});
