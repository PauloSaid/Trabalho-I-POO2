import populaBebe from "../services/BebeServices";
import Mae from "./Mae";
import Medico from "./Medico";

export default class Bebe{

    private nome: string;
    private dataNasc: string;
    private pesoNasc: number;
    private altura: number;
    private medico: Medico;
    private mae: Mae;
    
    //construtor da classe
    constructor(nome: string, dataNasc: string, pesoNasc: number, alt: number, medico: Medico, mae: Mae){
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.pesoNasc = pesoNasc;
        this.altura = alt;
        this.medico = medico;
        this.mae = mae;
    }

    public getBebedataNasc(){
        return this.dataNasc;
    }

    public setBebedataNasc(dataNasc: string){
        this.dataNasc = dataNasc;
    }

    public getBebeNome(){
        return this.nome;
    }

    public setBebeNome(nome: string){
        this.nome = nome;
    }

    public getBebePesoNasc(){
        return this.pesoNasc;
    }

    public setBebePesoNasc(pesoNasc: number){
        this.pesoNasc = pesoNasc;
    }

    public getBebeAltura(){
        return this.altura;
    }

    public setBebeAltura(alt: number){
        this.altura = alt;
    }
    
    public getBebeMedico(){
        return this.medico.getMedicoCRM();
    }

    public setBebeMedico(med: Medico){
        this.medico = med;
    }

    public getBebeMae(){
        return this.mae;
    }

    public setBebeMae(mae: Mae){
        this.mae = mae;
    }
    
    public getInfoBebe(){
        return console.log(`Nome: ${this.nome}, Data Nascimento: ${this.dataNasc}, Peso Nascimento: ${this.pesoNasc}, altura: ${this.altura}, Medico: ${this.medico}, Mae: ${this.mae}`);
    }
}



let bebe2 = new Bebe("Paulo", ("2010-01-01"), 10, 40, new Medico('123a', 'Paulin', 2435, 'bocetero'), new Mae(456000, "Alba", "PDC", 123098, ("1975-04-06")));

populaBebe(bebe2);