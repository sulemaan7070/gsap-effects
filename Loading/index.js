const fontDefault = "Bebas Neue";
const fontChanging = "Erbar-Initialen-Regular";
var tl = gsap.timeline();
// gsap.to("h1 > #i", {
//   fontFamily: fontChanging,
// });
tl.to("h1 #l", { fontFamily: fontChanging, duration: 0.5, delay: 1 });
tl.to("h1 #a", { fontFamily: fontChanging, duration: 0.3 });
tl.to("h1 #i", { fontFamily: fontChanging, duration: 0.3 });

// tl.reverse();
tl.to("h1 #a", { fontFamily: fontDefault, duration: 0.3 });
tl.to("h1 #l", { fontFamily: fontDefault, duration: 0.3 });
tl.to("h1 #i", { fontFamily: fontDefault, duration: 0.3 });
