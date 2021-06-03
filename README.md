## Projeto: Criação de paginas web (Ecommerce) utilizando Angular 

- O intuito do projeto foi criar um Ecommerce, utilizando Angular + Json-Server + BootStrap + MaterializeCss.

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

- Segregrado aplicação em modulos: Utilizado o forChild: O forChild é utilizado em modulos filhos. Isso diferencia do modulo Pai, que no projeto, o arquivo pai, é o arquivo 'app.module.ts'


## Uso do projeto com download feito no github

#### Instalar dependências.

- Acesse o github e faça o download do projeto. 
- Na pasta raiz execute `npm install` ou `yarn install` para instalar as dependências.

#### BackEnd - Para rodar api db.json

- Na pasta app/server execute o comando `json-server --watch db.json` 
- Acesse localhost:3000 para ver api rodando. 
- Em 'Resources' constará as rotas que estão sendo executadas:

````
Resources

/products
/categories
/contact
/comments
/profile 

````

#### Front-end - Para rodar a aplicação

- Na pasta raiz execute `ng serve` para iniciar servidor do angular.

## Paginas Web

- Rota:   ```` { path: 'about', component: AboutComponent } ````

<img src="C:\2PR\25.FRONT-BACK\14---\projeto-angular-ecommerce\docs\img\img-about" alt="" width="388" height="108" itemprop="logo">

