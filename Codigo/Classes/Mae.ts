export default class Mae 
{
    private nome: string;
    private endereco: string;
    private telefone: number;
    private nascimento: Date;

    constructor(nome: string, endereco: string, telefone: number, nascimento: Date)
    {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.nascimento = nascimento;
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

let mae = new Mae("Renata", "Iguaçuí", 28333255421, new Date("1986-02-23"));

mae.getInfoMae();
