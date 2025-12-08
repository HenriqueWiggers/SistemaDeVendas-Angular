import { Produto } from "src/app/produtos";
import { itemVenda } from "./itemVenda.model";

export class Venda {
    
    constructor(
        public num_venda?:number,
        public itemVenda?: itemVenda[]
    ){


    }

}