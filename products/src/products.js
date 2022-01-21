const mount = (element) => {
  const products = `
  <article>
    <div>  
    <span>Camisa longa preta</span> 
    <span>R$ 100,00</span> 
    </div>
    <div>
    <span>Camisa longa branca</span>
    <span>R$ 100,00</span>
    </div>
    <div>
    <span>Camisa longa vermelha</span>
    <span>R$ 100,00</span>
    </div>
   </article>

`;
  element.innerHTML = products;
};
if (process.env.NODE_ENV === "development") {
  const products = document.getElementById("root");
  mount(products);
}
