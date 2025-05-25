Este é um projeto simples em Angular (versão 19.2.12) criado para aprender conceitos básicos do framework, como componentes, roteamento, estados dinâmicos, condicionais, loops e serviços. Ele serve como um playground para desenvolvedores juniores praticarem Angular, com exemplos práticos de manipulação de dados e interação com APIs. Este README explica como rodar o projeto, entender sua estrutura e contribuir.

Funcionalidades

Exibe um título dinâmico que pode ser alternado com um botão.


Renderiza uma lista de itens usando loops.


Usa condicionais para mostrar/esconder elementos com base em estados.


Inclui um serviço para simular envio de formulários (com possibilidade de integração com uma API).



Suporta Server-Side Rendering (SSR) para aprendizado de SEO e performance.



Angular CLI (v19.2.12): Instale com npm install -g @angular/cli


VS Code (opcional): Instale a extensão REST Client para testar APIs.


Inicie o servidor de desenvolvimento:

ng serve


Acesse http://localhost:4200 no navegador. Alterações no código recarregam automaticamente.


(Opcional) Rode com SSR:

npm run dev:ssr

Estrutura do projeto



src/app/: Contém o código principal do Angular.



app.component.*: Componente raiz, define o layout principal com <router-outlet>.



components/home/: Componente HomeComponent para a página inicial, com exemplos de estados, condicionais e loops.


services/envia-formulario.service.ts: Serviço para simular envio de dados (ex.: a um backend).


app-routing.module.ts: Define rotas (ex.: / e /home → HomeComponent).


app.config.ts: Configurações globais (ex.: roteamento, detecção de mudanças).


src/assets/: Para arquivos estáticos (ex.: imagens).


angular.json: Configurações de build e CLI.


package.json: Dependências e scripts (ex.: ng serve, ng build).

Como o projeto foi criado


Iniciando o projeto:

ng new angular-learning --style=css --routing=true --ssr=true


Inclui roteamento e SSR para aprendizado.


Criando componentes:

ng generate component components/home


Criando serviços:

ng generate service services/envia-formulario


Configurando rotas:



Definidas em app-routing.module.ts para mapear URLs a componentes.

Conceitos básicos do Angular

Componentes

Componentes são blocos de construção do Angular, compostos por:


.ts: Lógica (ex.: variáveis, funções).


.html: Template para a interface.


.css: Estilos.


.spec.ts: Testes.

Exemplo no HomeComponent:

// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Angular Learning';
}

<!-- home.component.html -->
<h1>{{ title }}</h1>

Roteamento

Rotas mapeiam URLs a componentes:

// app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];



<router-outlet> no app.component.html renderiza o componente da rota.

Estados (Dados Dinâmicos)

Estados são dados que mudam na interface, como variáveis, objetos ou arrays, usados para criar interatividade.

Variável:

// home.component.ts
export class HomeComponent {
  nome = 'Angular'; // Variável simples
}

<!-- home.component.html -->
<p>Olá, {{ nome }}!</p>

Objeto:

export class HomeComponent {
  usuario = { nome: 'Luana', idade: 25 }; // Objeto
}

<p>Nome: {{ usuario.nome }} - Idade: {{ usuario.idade }}</p>

Array:

export class HomeComponent {
  itens = ['Item 1', 'Item 2', 'Item 3']; // Array
}

@for (item of itens; track item) {
  <p>{{ item }}</p>
}

Mudando estados:


Use eventos para alterar estados:

export class HomeComponent {
  deveMostrarTitulo = true;
  titulo = 'Título do Componente';
  toggleTitulo() {
    this.deveMostrarTitulo = !this.deveMostrarTitulo;
  }
}

@if (deveMostrarTitulo) {
  <h1>{{ titulo }}</h1>
} @else {
  <h1>Título escondido</h1>
}
<button (click)="toggleTitulo()">Alternar Título</button>

Condicionais e Loops

Condicional (@if): Mostra/esconde elementos com base em condições.

@if (deveMostrarTitulo) {
  <p>Título visível</p>
}


Loop (@for): Renderiza listas dinamicamente.

@for (item of itens; track item) {
  <p>{{ item }}</p>
}

Serviços

Serviços gerenciam lógica reutilizável, como chamadas a APIs:

// envia-formulario.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormularioService {
  submitFormtoBackend(formData: any): void {
    console.log('Dados enviados:', formData);
  }
}



No componente:

export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  submitForm() {
    this.enviaFormularioService.submitFormtoBackend('Dados de teste');
  }
}

<button (click)="submitForm()">Enviar</button>

Comandos úteis



Gerar componente:

ng generate component components/nome


Gerar serviço:

ng generate service services/nome
