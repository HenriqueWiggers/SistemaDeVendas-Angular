import { Routes } from "@angular/router"
import { CadastroClientesComponent } from "./cadastro"
import { ListarClientesComponent } from "./listar"

export const ClienteRoutes: Routes = [
    {
        path: 'clientes/cadastro',
        component: CadastroClientesComponent
    },
    {
        path:'clientes',
        component: ListarClientesComponent
    }
]