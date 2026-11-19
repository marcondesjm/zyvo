const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");

if (!motionPreference.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);
      if (!motionPreference.matches) target.classList.add("enter-section");
    }
  }, { threshold: 0.08 });

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

const delivery = document.querySelector(".shipping");
if (delivery) {
  let frame = 0;
  const updateDelivery = () => {
    frame = 0;
    if (motionPreference.matches) return;
    const { top, height } = delivery.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight - top) / (innerHeight + height)));
    delivery.style.setProperty("--delivery-x", `${(progress - 0.5) * 12}%`);
    delivery.style.setProperty("--delivery-y", `${-(Math.sin(progress * Math.PI * 5) ** 2) * 0.7}%`);
  };
  const scheduleDelivery = () => {
    if (!frame && !motionPreference.matches) frame = requestAnimationFrame(updateDelivery);
  };
  addEventListener("scroll", scheduleDelivery, { passive: true });
  addEventListener("resize", scheduleDelivery);
  motionPreference.addEventListener("change", scheduleDelivery);
  scheduleDelivery();
}

const cursorMedia = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
const cursor = document.createElement("div");
cursor.className = "pointer-ring";
cursor.setAttribute("aria-hidden", "true");
document.body.append(cursor);
let cursorFrame = 0;
let pointerX = 0, pointerY = 0, ringX = 0, ringY = 0;
function positionRing() {
  ringX += (pointerX - ringX) * .24;
  ringY += (pointerY - ringY) * .24;
  cursor.style.translate = ringX + "px " + ringY + "px";
  const moving = Math.hypot(pointerX - ringX, pointerY - ringY) > .2;
  cursorFrame = moving ? requestAnimationFrame(positionRing) : 0;
}
function hideRing() {
  cursor.classList.remove("is-active");
  cancelAnimationFrame(cursorFrame);
  cursorFrame = 0;
}
document.addEventListener("pointermove", (event) => {
  if (!cursorMedia.matches || event.pointerType !== "mouse") return;
  pointerX = event.clientX;
  pointerY = event.clientY;
  if (!cursor.classList.contains("is-active")) {
    ringX = pointerX;
    ringY = pointerY;
  }
  cursor.classList.add("is-active");
  cursor.classList.toggle("on-control", Boolean(event.target.closest("a, button")));
  if (!cursorFrame) cursorFrame = requestAnimationFrame(positionRing);
}, { passive: true });
document.documentElement.addEventListener("pointerleave", hideRing);
window.addEventListener("blur", hideRing);
cursorMedia.addEventListener("change", hideRing);
