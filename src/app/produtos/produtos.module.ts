import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoServiceService } from './shared/produto-service.service';



@NgModule({
  declarations: [
    CadastroProdutoComponent
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
