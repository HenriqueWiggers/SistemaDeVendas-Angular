import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoServiceService } from 'src/app/produtos';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { itemVenda, Venda, VendasService } from '../shared';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.css']
})
export class CadastroVendaComponent implements OnInit {

  @ViewChild('formVenda', { static: true }) formVenda: NgForm;

  venda: Venda;
  produto: Produto;
  quantidade = 1;
  total = 0;
  

  itens = [];

  constructor(
    private produtoService: ProdutoServiceService,
    private router: Router,
    private vendaService: VendasService
  ) { }

  ngOnInit(): void {
    this.produto = new Produto();
    this.venda = new Venda(null, [], 0);

    this.itens = this.vendaService.listaTodosItemVenda();
  }

  finalizaVenda(itemVenda: itemVenda[]) {
    const id = Math.floor(Math.random() * 1000000);
    

    this.venda.itemVenda = itemVenda;

    const v = new Venda(id, itemVenda, this.total);
    this.vendaService.registraVenda(v);

    localStorage.removeItem('itens');
  }

  consultarProdutoVenda() {
    const p = this.produtoService.listarPorEan(this.produto.cod_barras);

    if (p) {
      this.produto = p;
    } else {
      alert("Produto não encontrado!");
    }
  }

  somaTotal (subtotal){
    this.total = subtotal + this.total
  }

  adicionaItemGrid(quantidade: number) {

    const item = new itemVenda(
      null,
      this.produto,
      quantidade
    );

    this.vendaService.registraItemVenda(item);
    this.itens = this.vendaService.listaTodosItemVenda();
    this.somaTotal(item.vlr_subtotal);

  }
}
