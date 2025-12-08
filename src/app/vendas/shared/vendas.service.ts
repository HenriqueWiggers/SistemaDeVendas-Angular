import { Injectable } from '@angular/core';
import { itemVenda } from './itemVenda.model';
import { Venda } from './vendas.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  registraVenda(venda:Venda){
    const vendas = this.listarVendas();
    vendas.unshift(venda)
    localStorage['vendas'] = JSON.stringify(vendas)
  
  }

  listarVendas():Venda[]{
    const vendas = localStorage['vendas']
    return vendas ? JSON.parse(vendas) : [];
  }
  
  registraItemVenda(itemVenda:itemVenda){
    const itens = this.listaTodosItemVenda();
    itens.unshift(itemVenda);
    localStorage['itens'] = JSON.stringify(itens)
  }

  listaTodosItemVenda():itemVenda[]{
    const itensVenda = localStorage['itens']
    return itensVenda ? JSON.parse(itensVenda) : [];
  }

  constructor() { }


}
