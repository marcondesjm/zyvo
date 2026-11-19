import { copyFile, mkdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const out = new URL("dist/", root);
const files = [
  "index.html", "privacidade.html", "cookies.html", "acessibilidade.html",
  "styles.css", "motion.js", "site.js", "context-menu.js", "robots.txt",
  "assets/diferencial-1.webp", "assets/diferencial-2.webp", "assets/diferencial-3.webp",
  "assets/favicon.svg", "assets/logo.svg", "assets/hero.webp", "assets/entrega.webp", "assets/sobre.webp", "assets/avaliacao-lucas.webp",
  "assets/iphone-18-pro-lineup.jpg", "assets/iphone-18-pro-burgundy.jpg", "assets/produto-1.webp", "assets/produto-2.webp",
  "assets/produto-3.webp", "assets/produto-4.webp"
];
await mkdir(new URL("assets/", out), { recursive: true });
await Promise.all(files.map((path) => copyFile(new URL(path, root), new URL(path, out))));
console.log("Arquivos do site preparados em dist/.");
