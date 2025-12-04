import { Routes } from "@angular/router"
import { CadastroClientesComponent } from "./cadastro"

export const ClienteRoutes: Routes = [
    {
        path: 'clientes/cadastro',
        component: CadastroClientesComponent

    }
]