import gsap from "gsap";

export const welcomeFade = () => {
  gsap.to(".welcome", { opacity: 1, duration: 1 });
  gsap.to(".welcome", { fontSize: 70, marginTop: "20%", duration: 0.5 });
};
