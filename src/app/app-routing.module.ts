import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoRoutes } from "./produtos";
import { ClienteRoutes } from "./clientes/clientes-routing.module";





export const routes: Routes = [
    
    ...ProdutoRoutes,...ClienteRoutes

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}