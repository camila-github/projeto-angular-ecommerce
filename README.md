## Projeto: Criação de paginas web (e-commerce) utilizando Angular 

- O intuito do projeto foi criar um e-commerce para simular o acesso as paginas web com uso de rotas (conceito SPA - Single-Page Application). Utilizado ferramentas como Angular + Json-Server + BootStrap + MaterializeCss.

## Ferramentas Utilizadas

- Angular
- Angular/cli
- Bootstrap
- Materialize-css
- NodeJs
- json-server (para simular o Back-End)

## Conceitos Utilizados:

- Utilizado os comandos do @angular/cli para criação de modulos, componentes, rotas, service e interface.

- Criação de Rotas para que os componentes possam ser acessados utilizando as rotas, desta forma
as paginas web serão mostradas no navegador através das rotas que foram criadas (Conceito SAP Single-Page Application)

- Padronizado a estrutura de pastas do projeto, criando componentes com seus respectivos modulos:
 
    Criado componentes que podem ser compartilhados com outras aplicações (pasta 'app/shared')

    Criado componentes comuns que serão compartilhados com outros componentes dentro da propria aplicação (pasta 'app/core/common' e pasta 'app/core/pages').

    Criado os componentes que tem a lógica de negócio da aplicação, em pasta separada (pasta 'app/components/products')

- Criado Requisições em HTTP com NodeJS + Express + Json-server

- Uso do RXJS Observable: O Observable é uma funcionalidade da biblioteca do rxjs, que é instalada quando se cria uma nova aplicação do angular. Com seu uso, é possivel lidar com transferencia de dados assincrona, algo que em muitas vezes é semelhante as Promisses do Javascript. O uso do RXJS Observable é feito dentro dos arquivos 'service.ts'

- Segregrado aplicação em modulos: Utilizado o forChild: O forChild é utilizado em modulos filhos. Isso diferencia do modulo Pai, que no projeto, o arquivo pai, é o arquivo 'app.module.ts'


## Uso do projeto com download feito no github

#### Instalar dependências.

- Acesse o github e faça o download do projeto. 
- Na pasta raiz execute `npm install` ou `yarn install` para instalar as dependências.

#### BackEnd - Para rodar api db.json

- Caso nao tiver o json-server instale usando o comando: `npm install -g json-server`
- Na pasta app/server execute o comando `json-server --watch db.json` 
- Acesse http://localhost:3000/ para ver api rodando. 
- Em 'Resources' constará as rotas que estão sendo executadas:

````
Resources

/products
/categories
/contact 

````

#### Front-end - Para rodar a aplicação

- Na pasta raiz execute `ng serve` para iniciar servidor do angular.

## Vídeo de demonstração do aplicativo

![Video](https://github.com/camila-github/projeto-angular-ecommerce/blob/main/video-demo/demo-angular-ecommerce.gif)

## Paginas Web (Rotas)
- Rota Home: 

```` 
Rota Pai:
Arquivo: app.routing.module.ts 
@NgModule: forRoot() 
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent }
````

- Rota About:  

````
Rota Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'about', component: AboutComponent }
````

- Rota Contact:  

````
Rota Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'contact', component: ContactComponent }
````

- Rota ProductsViewAll:  
```` 
Rota Pai:
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Rota Filho:
Arquivo: products.routing.module.ts
@NgModule: forChild()
{ path: '', component: ProductsViewAllComponent }
````

- Rota ProductsViewAllByCategory:
````
Rota Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Rota Filho:
Arquivo: products.routing.module.ts
@NgModule: forChild()
{ path: 'category/:id', component: ProductsViewAllByCategoryComponent}
````

- Rota ProductView:
````
Rota Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Rota Filho: 
Arquivo: products.routing.module.ts
@NgModule: forChild()
{ path: 'product/:id', component: ProductViewComponent }
````

- Rota ProductCreate:  
```` 
Rota Pai: 
Arquivo: app.routing.module.ts
@NgModule: forRoot()
{ path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) }

Rota Filho: 
Arquivo: products.routing.module.ts
@NgModule: forChild()
{ path: 'product-create', component: ProductCreateComponent }
````
