import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   meuBoleano = false;

   atualizarBoleano(valor: boolean) {
    this.meuBoleano = valor; 
    console.log(this.meuBoleano);
   }

   name = 'Angular';
   idButton = 'botao1';
   onClick() {
    // Aqui você pode adicionar a lógica que deseja executar quando o botão for clicado
    console.log('Botão clicado!');
   }
}
