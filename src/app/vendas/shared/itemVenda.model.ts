import { Venda } from "./vendas.model";
import { Produto } from "src/app/produtos";

export class itemVenda{



    public vlr_subtotal: number

    constructor(
        public venda?: Venda,
        public produto?:Produto,
        public qtd_produto?:number,
        
    ){
        this.vlr_subtotal = this.qtd_produto * this.produto.vlr_unitario;
    }

}