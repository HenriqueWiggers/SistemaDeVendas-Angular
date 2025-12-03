import { Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./cadastro";

export const ProdutoRoutes: Routes = [
    {
        path: 'produtos/cadastro',
        component: CadastroProdutoComponent
    }

];