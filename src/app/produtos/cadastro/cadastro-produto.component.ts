import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoServiceService } from '../shared';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;
  produto: Produto;
  constructor(private produtoService:ProdutoServiceService,private router: Router) {}

  ngOnInit(): void {
    this.produto = new Produto;
  }

  cadastrar(): void{
    if(this.formProduto.form.valid){
      this.produtoService.cadastrar(this.produto);
    }
  }

}
