import { Injectable } from '@angular/core';
import { itemVenda } from './itemVenda.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  
  registraItemVenda(itemVenda:itemVenda){

  }

  listaTodosItemVenda():itemVenda[]{
    return null
  }

  constructor() { }
}
