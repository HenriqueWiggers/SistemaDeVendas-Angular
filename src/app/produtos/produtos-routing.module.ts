import { Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./cadastro";
import { ListarProdutosComponent } from "./listar";

export const ProdutoRoutes: Routes = [
    {
        path: 'produtos/cadastro',
        component: CadastroProdutoComponent
    },
    {
        path: 'produtos',
        component: ListarProdutosComponent
    }

];