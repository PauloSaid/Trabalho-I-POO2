export default class Medico{
    
    constructor(crm: String, nome: String, tel: number, esp: String){
        this.crm = crm;
        this.nome = nome;
        this.telefone = tel;
        this.especialidade = esp;
    }
    
    crm: String;
    nome: String;
    telefone: number;
    especialidade: String;
}

let med1 = new Medico("12345SP", "zezim", 98898989, "cardicao");

console.log(`Nome: ${med1.nome}, CRM: ${med1.crm}, tel: ${med1.telefone}, esp: ${med1.especialidade}`);
