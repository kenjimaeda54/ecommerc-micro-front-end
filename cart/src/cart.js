const products = 3;

const mount = (element) => {
  const card = `
  <article>
    <h1>Voce tem ${products} produtos </h1>
  </article>
`;
  element.innerHTML += card;
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("root");
  if (element) {
    mount(element);
  }
}

export { mount };
