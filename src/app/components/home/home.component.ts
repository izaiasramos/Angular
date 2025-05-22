import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
meuBoleano = true;

bolean(valor:boolean) {
  this.meuBoleano = valor;
  console.log(this.meuBoleano);
}

titulo = 'Título do Componente';
deveMostrarTitulo = true;


   name = 'Angular';
   idButton = 'botao1';
   submit(event: any) {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado
    console.log(event);
   }
}
