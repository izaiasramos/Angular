import { Component, inject, signal } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private enviaFormularioService = inject(EnviaFormularioService);

  submitForm() {
    // Aqui você pode adicionar a lógica que deseja executar quando o formulário for enviado
    console.log('Formulário enviado:');
    // Chama o serviço para enviar os dados do formulário
    this.enviaFormularioService.submitFormtoBackend("Enviando dados do formulário");
  }

  meuBoleano = true;

  bolean(valor:boolean) {
    this.meuBoleano = valor;
    console.log(this.meuBoleano);
  }

  listItems = ['Item 1', 'Item 2', 'Item 3'];//Lista para usar com Loop @for


  titulo = 'Título do Componente está True';
  deveMostrarTitulo = true;


   name = 'Angular';
   idButton = 'botao1';

}
