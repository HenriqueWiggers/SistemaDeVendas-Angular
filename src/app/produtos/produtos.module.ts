import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './components/produtos.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    CadastroProdutosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProdutosComponent
  ]
})
export class ProdutosModule { }
