import { Injectable } from '@angular/core';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor() { }

  listarTodos(): Produto[]{
    const produtos = localStorage['produtos'];
    return produtos ? JSON.parse(produtos) : [];
  }

  cadastrar(produto:Produto){
    const produtos = this.listarTodos();
    produtos.push(produto)
    localStorage['produtos'] = JSON.stringify(produtos);
  }

}
