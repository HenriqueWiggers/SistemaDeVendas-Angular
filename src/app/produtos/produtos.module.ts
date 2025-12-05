import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoServiceService } from './shared/produto-service.service';
import { ListarProdutosComponent } from './listar';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListarProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers:[
    ProdutoServiceService
  ]
})
export class ProdutosModule { }
