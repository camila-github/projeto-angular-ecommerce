## Projeto: Criação de paginas web (e-commerce) utilizando Angular 

- O intuito do projeto foi criar um e-commerce, utilizando Angular + Json-Server + BootStrap + MaterializeCss.

## Ferramentas Utilizadas

- Angular
- Angular/cli
- Bootstrap
- Materialize-css
- NodeJs
- json-server (para simular o Back-End)

## Conceitos Utilizados:

- Utilizado os comandos do @angular/cli para criação de modulos, componentes, rotas, service e interface.

- Criação de Rotas para que os componentes possam ser acessados utilizado as rotas, desta forma
as paginas web serão mostradas no navegador através das rotas que foram criadas (Conceito SAP Single-Page Application)

- Padronizado a estrutura de pastas do projeto, criando componentes com seus respectivos modulos:
 
    Criado componentes que podem ser compartilhado com outras aplicações (pasta 'app/shared')

    Criado componentes comuns que serão compartilhados com outros componentes dentro da propria aplicação (pasta 'app/core/common' e pasta 'app/core/pages').

    Criado os componentes que tem a lógica de negócio da aplicação, em pasta separada (pasta 'app/components/products')

- Criado Requisições em HTTP com NodeJS + Express + Json-server

- Uso do RXJS Observable: O Observable é uma funcionalidade da biblioteca do rxjs, que é instalada quando se cria uma nova aplicação do angular. Com seu uso, é possivel lidar com transferencia de dados assincrona, algo que em muitas vezes é semelhante as Promisses do Javascript. O uso do RXJS Observable é feito dentro dos arquivos 'service.ts'

- Segregrado aplicação em modulos: Utilizado o loadChildren: O loadChildren é utilizado em modulos filhos. Isso diferencia do modulo Pai, que no projeto, o arquivo pai, é o arquivo 'app.module.ts'


## Uso do projeto com download feito no github

#### Instalar dependências.

- Acesse o github e faça o download do projeto. 
- Na pasta raiz execute `npm install` ou `yarn install` para instalar as dependências.

#### BackEnd - Para rodar api db.json

- Caso nao tiver o json-server instale usando o comando: `npm install -g json-server`
- Na pasta app/server execute o comando `json-server --watch db.json` 
- Acesse localhost:3000 para ver api rodando. 
- Em 'Resources' constará as rotas que estão sendo executadas:

````
Resources

/products
/categories
/contact 

````

#### Front-end - Para rodar a aplicação

- Na pasta raiz execute `ng serve` para iniciar servidor do angular.

## Paginas Web

- Rota: 

```` 
Pai:
Arquivo: app.routing.module.ts 
@NgModule: forRoot() 
{ path: 'home', component: HomeComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-home.png" alt="home">

- Rota:  

````
Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'about', component: AboutComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-about.png" alt="" itemprop="logo">

- Rota:  

````
Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'contact', component: ContactComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-contact1.png" alt="" itemprop="logo">

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-contact2.png" alt="" itemprop="logo">

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-contact3.png" alt="" itemprop="logo">

- Rota:  
```` 
Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Filho:
Arquivo: products.routing.module.ts
@NgModule: loadChildren()
{ path: '', component: ProductsViewAllComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualizar-todos-os-produtos1.png" alt="" itemprop="logo">

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualizar-todos-os-produtos2.png" alt="" itemprop="logo">


- Rota:
````
Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Filho:
Arquivo: products.routing.module.ts
@NgModule: loadChildren()
{ path: 'category/:id', component: ProductsViewAllByCategoryComponent}
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualizar-por-categoria-blusas.png" alt="" itemprop="logo">

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualizar-por-categoria-sandalia.png" alt="" itemprop="logo">

- Rota:
````
Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Filho: 
Arquivo: products.routing.module.ts
@NgModule: loadChildren()
{ path: 'product/:id', component: ProductViewComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualize-detalhe-do-produto1.png" alt="" itemprop="logo">

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-visualize-detalhe-do-produto2.png" alt="" itemprop="logo">


- Rota:  
```` 
Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Filho: 
Arquivo: products.routing.module.ts
@NgModule: loadChildren()
{ path: 'product-create', component: ProductCreateComponent }
````

<img src="https://github.com/camila-github/projeto-angular-ecommerce/blob/main/docs/img/img-criar-produto.png" alt="" itemprop="logo">
