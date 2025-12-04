import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoServiceService } from './shared/produto-service.service';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';



@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListarProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    ProdutoServiceService
  ]
})
export class ProdutosModule { }
