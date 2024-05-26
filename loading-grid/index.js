const button = document.querySelector("button");
const loadingValue = false;
gsap.to(".parent>div", {
  opacity: 0,
  stagger: 0.1,
});
function loading() {
  if (loading) {
    gsap.to(".parent>div", {
      opacity: 1,
      stagger: 0.1,
    });
  }
  setTimeout(() => {
    console.log("timed out loading");
    gsap.to(".parent>div", {
      opacity: 0,
      stagger: 0.1,
      delay: 1,
    });
  }, "2000");
}

button.addEventListener("click", loading);
