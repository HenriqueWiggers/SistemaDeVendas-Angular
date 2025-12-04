import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  cliente:Cliente

  @ViewChild('formCliente', {static:true}) formCliente: NgForm;
  constructor(
    private router: Router,
    private clienteService:ClienteService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente;
  }

  cadastrar(){
    if(this.formCliente.form.valid){
      this.clienteService.cadastrar(this.cliente);
    }
  }

}
