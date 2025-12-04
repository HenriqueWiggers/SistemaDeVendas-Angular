import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  @ViewChild('formCliente', {static:true}) formProduto: NgForm;
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

}
