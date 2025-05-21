# Streaming

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


CLI - interface de linha de comando 

para utilizar a CLI do Angular usamos a flag: ng 

ng --version - para ver a versão do Angular instalado

ng new meu-primeiro-projeto-Angular - new = novo projeto + o nome do projeto


Server-Side Rendering (SSR)

Single-Page-Application (SPA) - o Angula por padrão é SPA, oque quer dizer que por padrão o browser vê o Angular apenas como single-page apenas uma pagina, para o usuario ele troca de paginas como se tivesse varias paginas, e oque faz isso é o javascript por de baixo dos panos, mas na verdade o browser vai enchergar a aplicação Angular como apenas uma pagina.
o browser vai enchergar apenas o index.html e ele vai chamar todos os módulos e componentes, diferente do reteamento de páginas que estamos acostumados aonde quando queremos levar o usuario para outra tela inserimos um <a href="" /> apontando para outro arquivo .html, no SPA o browser vai enchergar apenas esse index.html que fica na raiz da pasta src do angular, e esse html vai chamar modulos e componentes e o js vai fazer a renderização e o roteamento entre eles dando a ideia de que há varias páginas.

o index.html puxa o componente atravez do:

<body>
  <app-root></app-root>
</body>

referenciando o seletor do componente, esse seletor é definido no arquivo:

app.components.ts :

@Component({
  selector: 'app-root',
})

quando o componente é criado tbm 4 arquivos que juntos compoem o componento eles são:

imagine um componente chamado app

então será criado uma pasta chamada 

app

que dentro dessa pasta vai ter os 4 arquivos:

app.component.css

app.component.html

app.component.spec.ts

app.component.ts  -  que é aonde é definido o seletor com o nome que será inserido no arquivo .html para exibi-lo entre outras coisas como:

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streaming';
}

@Component({ ... }) - É o decoretor que referencia/especifica que a classe/arquivo atual se trata de um componente, e so então o Angular quando for fazer a renderização vai tratar como um componente e renderiza-lo



fora esses 4 arquivos que compoem cada componente dentro da pasta app fica dois arquivos que não é sobre o componente mas sobre configurações globais do projeto Angular

app.config.ts: é um arquivo de configuração que vai dizer ao Angular como ele deve renderizer os nossos componentes, como por exemplo quais providers ele deve injetar, como o angular deve fazer a injeção das coisas, e ai o angular cuida de renderizar nossos componentes:

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

providers - 

provideZoneChangeDetection - é um provider padrão, vai detectar mudanças e então renderizar de novo

provideRouter - para prover as rotas da nossa aplicação, o Angular tem um módulo especifico para fazer as rotas que é o provideRouter, e esse provideRouter nada mais ta fazendo do que prover as rotas de acordo com o arquivo routes que é aonde defino meu componentes de acordo com a url que será acessado, e ai o provideRouter faz o roteamento entre os componentes, que no arquivo routes é definido assim: 

app.routes.ts 

export const routes: Routes = [
    path: "home",
    component: HomeComponent
];


 - Para criar um novo componente:

 ng generate component components/home

 isso vai criar uma pasta chamada components e dentro dela outra pasta chamado home que será o componente

- Roteamento do componente
 
 meu arquivo .html do componente:
 <app-home></app-home>
 <router-outlet />

aqui é meu app componente, e nele estou pedindo para renderizar meu outro componente que é o HomeComponent, mas ele só vai fazer o roteamento se tiver essa tag:

 <router-outlet /> - reflete minhas rotas


ESTADOS - Falaremos sobre dados dinâmicos, como por exemplo um nome especifico de maneira dinamica puxando a informação de alguma variável/objeto/array