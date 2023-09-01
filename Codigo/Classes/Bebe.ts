import Mae from "./Mae";
import Medico from "./Medico";

export default class Bebe{

    private nome: String;
    private dataNasc: Date;
    private pesoNasc: number;
    private altura: number;
    private medico: Medico;
    private mae: Mae;

    //construtor da classe
    constructor(nome: String, dataNasc: Date, pesoNasc: number, alt: number, medico: Medico, mae: Mae){
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

    public setBebedataNasc(dataNasc: Date){
        this.dataNasc = dataNasc;
    }

    public getBebeNome(){
        return this.nome;
    }

    public setBebeNome(nome: String){
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
        return this.medico;
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


