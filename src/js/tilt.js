/* tilt */
export function tilt() {
  VanillaTilt.init(document.querySelector(".js-tilt"), {
    max: 10,
    glare: true,
    "max-glare": 0.4,
    scale: 1.05
  });
}