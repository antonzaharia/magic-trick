import gsap from "gsap";

export const appear = () => {
  gsap.to(".pack", { margin: "16%", duration: 1.5 });
  setTimeout(function () {
    gsap.to(".pack", { width: 1080, duration: 1 });
  }, 1500);
};
