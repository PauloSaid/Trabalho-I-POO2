export default class Medico{

    private crm: String;
    private nome: String;
    private telefone: number;
    private especialidade: String;
    
    //construtor da classe
    constructor(crm: String, nome: String, tel: number, esp: String){
        this.crm = crm;
        this.nome = nome;
        this.telefone = tel;
        this.especialidade = esp;
    }

    //metodos get e set. Fazer para os outros atributos tbm
    //Como faz para mais de um?
    public getMedicoCRM(){
        return this.crm;
    }

    public setMedicoCRM(crm : String){
        this.crm = crm;
    }
    
    public getInfoMed(){
        console.log(`Nome: ${this.nome}, CRM: ${this.getMedicoCRM}, tel: ${this.telefone}, esp: ${this.especialidade}`);
    }


    //exemplo de funcao qualquer
    public chamarMedico(crm: String): void{
    } 
}

let med1 = new Medico("12345SP", "zezim", 98898989, "cardicao");

med1.setMedicoCRM("98765SP");
console.log(med1.getMedicoCRM());
med1.getInfoMed;

//Jeito sem private
//console.log(`Nome: ${med1.nome}, CRM: ${med1.crm}, tel: ${med1.telefone}, esp: ${med1.especialidade}`);


