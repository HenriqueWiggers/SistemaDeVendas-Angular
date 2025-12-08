import { Injectable } from '@angular/core';
import { itemVenda } from './itemVenda.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  
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
