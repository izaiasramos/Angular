import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  submitFormtoBackend(formData: any): void {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Por exemplo, enviar para um servidor ou processar os dados de alguma forma
    console.log('Dados do formulário enviados:', formData);
  }
}
