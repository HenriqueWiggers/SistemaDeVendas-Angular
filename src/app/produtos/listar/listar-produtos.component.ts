import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoServiceService } from '../shared';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[]
  constructor(private produtoService:ProdutoServiceService) { }

  ngOnInit(): void {
    this.produtos = this.listarTodos();

  }

  listarTodos():Produto[]{
    return this.produtoService.listarTodos();
  }

}
