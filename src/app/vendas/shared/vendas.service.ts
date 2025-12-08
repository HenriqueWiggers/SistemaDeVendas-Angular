import { Injectable } from '@angular/core';
import { itemVenda } from './itemVenda.model';
import { Venda } from './vendas.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  registraVenda(venda:Venda, itemVenda: itemVenda[]){
    const vendas = this.listarVendas();
    const id =  Math.floor(Math.random() * 1000000);
    const total = itemVenda.reduce((sum, item) => sum + item.vlr_subtotal, 0);
    
  }

  listarVendas():Venda[]{
    const vendas = localStorage['vendas']
    return vendas ? JSON.parse(vendas) : [];
  }
  
  registraItemVenda(itemVenda:itemVenda){
    const itens = this.listaTodosItemVenda();
    itens.push(itemVenda);
    localStorage['itens'] = JSON.stringify(itens)
  }

  listaTodosItemVenda():itemVenda[]{
    const itensVenda = localStorage['itens']
    return itensVenda ? JSON.parse(itensVenda) : [];
  }

  constructor() { }


}
