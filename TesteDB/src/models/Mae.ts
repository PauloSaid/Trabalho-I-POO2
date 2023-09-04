import populaMae from "../services/MaeService";

export default class Mae 
{
    private cpf: number;
    private nome: string;
    private endereco: string;
    private telefone: number;
    private nascimento: Date;

    constructor(cpf: number, nome: string, endereco: string, telefone: number, nascimento: Date)
    {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.nascimento = nascimento;
    }

    public setCPF(cpf: number)
    {
        this.cpf = cpf;
    }

    public getCPF()
    {
        return this.cpf;
    }

    public setNome(nome: string)
    {
        this.nome = nome;
    }

    public getNome()
    {
        return this.nome;
    }

    public setEndereco(endereco: string)
    {
        this.endereco = endereco;
    }

    public getEndereco()
    {
        return this.endereco;
    }

    public setTelefone(telefone: number)
    {
        this.telefone = telefone;
    }

    public getTelefone()
    {
        return this.telefone;
    }

    public setNascimento(nascimento: Date)
    {
        this.nascimento = nascimento;
    }

    public getNascimento()
    {
        return this.nascimento;
    }

    public getInfoMae()
    {
        return console.log(`Nome: ${this.nome}, Endereco: ${this.endereco}, Telefone: ${this.telefone}, Nascimento: ${this.nascimento}`);
    }

}

let mae1 = new Mae( 123, "Renata Mucuruco", "Iguaçuí", 21, new Date("1986-02-23"));
let mae2 = new Mae( 412, "Renata Mucuruco", "Iguaçuí", 53, new Date("1986-02-23"));
let mae3 = new Mae( 51231, "Renata Mucumongo", "Iguaçuí 3", 45633, new Date("2004-01-02"));
let mae4 = new Mae( 521, "Renata Mucumongo", "Iguaçuí 3", 4553, new Date("2004-01-02"));

populaMae(mae4);

