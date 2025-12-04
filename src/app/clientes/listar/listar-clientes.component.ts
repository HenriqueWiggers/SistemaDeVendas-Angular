import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(
    private clienteService:ClienteService
  ) { }

  
  ngOnInit(): void {
    this.clientes = this.listarTodos()
  }

  listarTodos():Cliente[]{
      return this.clienteService.listarTodos();
    }

}
