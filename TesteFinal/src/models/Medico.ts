import populaMedico from "../services/MedicoServices";
import Bebe from "./Bebe";
import Mae from "./Mae";

export default class Medico{

    private crm: string;
    private nome: string;
    private telefone: number;
    private especialidade: string;
    
    //construtor da classe
    constructor(crm: string, nome: string, tel: number, esp: string){
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

    public setMedicoCRM(crm: string){
        this.crm = crm;
    }

    public getMedicoNome(){
        return this.nome;
    }

    public setMedicoNome(nome: string){
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

    public setMedicoEsp(esp: string){
        this.especialidade = esp;
    }
    
    public getInfoMed(){
        return console.log(`Nome: ${this.nome}, CRM: ${this.crm}, telefone: ${this.telefone}, especialidade: ${this.especialidade}`);
    }


    //exemplo de funcao qualquer
    public chamarMedico(crm: string): void{
    } 
}



let med2 = new Medico("1267ES", "Joao Lucas", 53105, "bucetero");
let med3 = new Medico("9876ES", "Lugon", 987655, "bucetero");
let med4 = new Medico("4567ES", "Paulo", 987433, "assediador");
let med5 = new Medico("0000ES", "Bruno", 765098, "bucetero");



//Jeito sem private
//console.log(`Nome: ${med1.nome}, CRM: ${med1.crm}, tel: ${med1.telefone}, esp: ${med1.especialidade}`);