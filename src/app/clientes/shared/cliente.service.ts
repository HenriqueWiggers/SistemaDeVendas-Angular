import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor() { }


  listarTodos():Cliente[]{
    const clientes = localStorage['clientes'];
    return clientes ? JSON.parse(clientes) : [];
  }

  cadastrar(cliente:Cliente):void{
    const clientes = this.listarTodos();
    clientes.push(cliente);
    localStorage['clientes'] = JSON.stringify(clientes)
  }

}


