import Bebe from "./Bebe";
import Mae from "./Mae";

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

    public setMedicoCRM(crm: String){
        this.crm = crm;
    }

    public getMedicoNome(){
        return this.nome;
    }

    public setMedicoNome(nome: String){
        this.nome = nome;
    }

    public getMedicoTel(){
        return this.telefone;
    }

    public setMedicoTel(tel: number){
        this.telefone = tel;
    }

    public getMedicoEsp(){
        return this.especialidade;
    }

    public setMedicoEsp(esp: String){
        this.especialidade = esp;
    }
    
    public getInfoMed(){
        return console.log(`Nome: ${this.nome}, CRM: ${this.crm}, telefone: ${this.telefone}, especialidade: ${this.especialidade}`);
    }


    //exemplo de funcao qualquer
    public chamarMedico(crm: String): void{
    } 
}

let med1 = new Medico("12345SP", "zezim", 98898989, "cardiaco");

med1.setMedicoCRM("98765SP");
console.log(med1.getMedicoCRM());
med1.getInfoMed();

let bebe1 = new Bebe("Paulo", new Date("2010-01-01"), 10, 40, new Medico("765435SP", "Matheus", 28955242, "Obstetra"), new Mae(1234567, "Alba", "Pdc", 9876543, new Date("1980-04-07")));

let bebe2 = new Bebe("Paulo", new Date("2010-01-01"), 10, 40, med1, new Mae(1234567, "Alba", "Pdc", 9876543, new Date("1980-04-07")));
console.log(bebe2);

//Jeito sem private
//console.log(`Nome: ${med1.nome}, CRM: ${med1.crm}, tel: ${med1.telefone}, esp: ${med1.especialidade}`);