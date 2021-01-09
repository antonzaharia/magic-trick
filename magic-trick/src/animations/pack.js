import gsap from "gsap";

export const appear = () => {
  gsap.to(".pack", { margin: "16%", duration: 1.5 });
  setTimeout(function () {
    gsap.to(".pack", { width: 1080, duration: 1 });
  }, 1500);
};
export const shuffle = () => {
  gsap.to(".flip-card-inner", { rotateY: 360, duration: 0.5 });
  setTimeout(function () {
    gsap.to(".pack", { width: 60, duration: 1 });
  }, 500);
  setTimeout(function () {
    gsap.to(".take-card", { rotateX: 1080, duration: 1 });
  }, 1600);
};
