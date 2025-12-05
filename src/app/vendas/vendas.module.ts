import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroVendaComponent } from './cadastro';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CadastroVendaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CadastroVendaComponent
  ]
})
export class VendasModule { }
