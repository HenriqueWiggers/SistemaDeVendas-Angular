export class Cliente{

    constructor(
        public nom_cliente?:string,
        public cpf_cliente?:string,
        public dat_nascimento?:string,
        public num_cep?:number,
        public nom_endereco?:string,
        public num_endereco?:number,
        public nom_bairro?:string
    ){

    }

}