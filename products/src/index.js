const main = document.getElementById("root");

const article = document.createElement("article");
const h3Primary = document.createElement("h3");
const h3Secondary = document.createElement("h3");
const h3Tertiary = document.createElement("h3");
const h3Four = document.createElement("h3");

main.appendChild(article);

article.appendChild(h3Primary);
article.appendChild(h3Secondary);
article.appendChild(h3Tertiary);
article.appendChild(h3Four);

h3Primary.innerText = "Qualidade e nosso selo";
h3Secondary.innerText = "Vendemos apenas produtos de qualidade";
h3Tertiary.innerText = "Confie em nos para ajudar fazer a vida mais felizs";
h3Four.innerText = "Nossa missão é oferecer produtos de qualidade";
