const mobile = matchMedia("(max-width: 700px)");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const menu = document.querySelector("#menu");
const menuButton = document.querySelector(".menu-toggle");
const options = document.querySelector(".access-tools");
const topLink = document.querySelector(".top-link");
const bubbleButton = document.querySelector("#pause-bubbles");
const root = document.documentElement;

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menu.hidden = mobile.matches && !open;
}
function syncMenu() {
  menuButton.hidden = !mobile.matches;
  setMenu(false);
}
menuButton.addEventListener("click", () => setMenu(menu.hidden));
menu.addEventListener("click", (event) => {
  if (mobile.matches && event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});
mobile.addEventListener("change", syncMenu);
syncMenu();

options.hidden = false;
let size = 100;
options.addEventListener("click", (event) => {
  const control = event.target.closest("[data-size]");
  if (!control) return;
  const direction = Number(control.dataset.size);
  size = direction ? Math.min(130, Math.max(90, size + direction * 10)) : 100;
  root.style.fontSize = size + "%";
});
function togglePreference(button, key) {
  button.addEventListener("click", () => {
    button.setAttribute("aria-pressed", String(root.classList.toggle(key)));
  });
}
togglePreference(document.querySelector("#contrast"), "high-contrast");
togglePreference(bubbleButton, "pause-bubbles");
function syncMotion() { bubbleButton.hidden = reduced.matches; }
reduced.addEventListener("change", syncMotion);
syncMotion();

const progress = document.createElement("div");
progress.className = "reading-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);
let frame = 0;
function updateScroll() {
  frame = 0;
  const distance = root.scrollHeight - innerHeight;
  progress.style.transform = "scaleX(" + (distance > 0 ? scrollY / distance : 0) + ")";
  topLink.hidden = !mobile.matches || scrollY < innerHeight;
}
function scheduleScroll() { if (!frame) frame = requestAnimationFrame(updateScroll); }
addEventListener("scroll", scheduleScroll, { passive: true });
addEventListener("resize", scheduleScroll);
scheduleScroll();

const phoneToggle = document.querySelector(".phone-toggle");
if (phoneToggle) {
  const stage = document.querySelector("#phone-stage");
  const [front, back] = stage.querySelectorAll(".phone-face");
  phoneToggle.hidden = false;
  phoneToggle.addEventListener("click", () => {
    const showsBack = stage.classList.toggle("is-back");
    phoneToggle.setAttribute("aria-pressed", String(showsBack));
    phoneToggle.textContent = showsBack ? "Ver frente" : "Ver traseira";
    front.setAttribute("aria-hidden", String(showsBack));
    back.setAttribute("aria-hidden", String(!showsBack));
  });
}

const videoPlay = document.querySelector(".video-play");
if (videoPlay && location.protocol !== "file:") {
  videoPlay.addEventListener("click", (event) => {
    if (matchMedia("(pointer: coarse), (max-width: 700px)").matches || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const player = document.createElement("iframe");
    player.title = "Apresentação oficial do iPhone 18 Pro";
    player.src = "https://www.youtube-nocookie.com/embed/5yD7pcI6HmI?autoplay=1&playsinline=1";
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    videoPlay.parentElement.replaceChildren(player);
    player.focus();
  });
}
