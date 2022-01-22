# Simples Micro Front End
Aplicação front end com javascript puro e module federation


# Motivação
Ennteder a fundo o webpack e o plugin module federation


# Feature
- Plugin module federation trabalha com conceito de build time
- As aplicações menores precisam estar copiladas no navegador para serem baixadas
- Para funcionar precisa de uma aplicação empacotar todas, essa aplicação normalmente recebe nome de container
- ELe vai consumir as rotas expostas, a composição da url e `{nome do (app) que esta sendo consumido}@http://localhost:8080/{filename do arquivo que esta sendo consumido}`
- Existe um bug ,as divs que irão se referenciar não pode estar mesmo nome que arquivo que esta sendo exposto, exemplo abaixo não posso possuir uma div no container com nome de products
- Para navegador ele ira se referenciar no html, já que usamos o modelo Http e Https, que nada menos nada mais que transferência de hipertexto
- Para inibir esse problema eu coloquei tipo um hash no html principal

``` javascript


// products
 new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductPage": "./src/products",
      },
    }),

//=============================================//

// container 

 new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8080/remoteEntry.js",
        carts: "cart@http://localhost:9000/remoteEntry.js",
      },
    }),



```

``` html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
  </head>
  <body>
    <main id="root212344332">
      <div id="products123901"></div>
      <div id="carts3432"></div>
    </main>
  </body>
</html>


```




