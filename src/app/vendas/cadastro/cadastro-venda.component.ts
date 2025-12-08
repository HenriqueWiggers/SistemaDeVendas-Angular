import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoServiceService } from 'src/app/produtos';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { itemVenda, VendasService } from '../shared';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.css']
})
export class CadastroVendaComponent implements OnInit {

  @ViewChild('formVenda', { static: true }) formVenda: NgForm;
  produto:Produto;
  quantidade=1;
  
  constructor(
    private produtoService: ProdutoServiceService,
    private router: Router,
    private vendaService: VendasService
  ) { }

  itens = this.vendaService.listaTodosItemVenda();

  ngOnInit(): void {
    this.produto = new Produto;

  }

  consultarProdutoVenda(){
    const p = this.produtoService.listarPorEan(this.produto.cod_barras);

    if (p) {
      this.produto = p;
    } else {
     alert("Produto não encontrado!");
    }
  }

  adicionaItemGrid(quantidade:number){
  const item = new itemVenda(
    null,                       
    this.produto,               
    quantidade,
                      
  );
  this.vendaService.registraItemVenda(item);
  this.itens = this.vendaService.listaTodosItemVenda();
}
}

