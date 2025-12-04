import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClientesComponent } from './cadastro';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './shared/cliente.service';
import { ListarClientesComponent } from './listar';



@NgModule({
  declarations: [
    CadastroClientesComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]

})
export class ClientesModule { }
