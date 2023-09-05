import populaMae from "../services/MaeServices";

export default class Mae 
{
    private cpf: number;
    private nome: string;
    private endereco: string;
    private telefone: number;
    private nascimento: string;

    constructor(cpf: number, nome: string, endereco: string, telefone: number, nascimento: string)
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

    public setNascimento(nascimento: string)
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
