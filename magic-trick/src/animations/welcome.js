import gsap from "gsap";

export const welcomeFade = () => {
  gsap.to(".welcome", { opacity: 1, duration: 1 });
  gsap.to(".welcome-text", { duration: 0.5 });
  gsap.to(".welcome", { scale: 1.5, marginTop: "15%", duration: 0.5 });
};
export const fadeOut = () => {
  gsap.to(".welcome", {
    marginTop: 0,
    opacity: 0,
    display: "none",
    scale: 0.2,
    duration: 2,
  });
  gsap.to(".start-btn", {
    opacity: 0,
    display: "none",
    scale: 0.2,
    duration: 0.3,
  });
  setTimeout(function () {
    gsap.to(".content", { justifyContent: "left" });
  }, 2000);
};
