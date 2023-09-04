import { PrismaClient } from "@prisma/client";
import Mae from "../models/Mae";

const prisma = new PrismaClient();

export default async function populaMae(Mae: Mae)  {
    const mae = await prisma.mae.create({
        data: {
            cpf: Mae.getCPF(),
            nome: Mae.getNome(),
            endereco: Mae.getEndereco(),
            telefone: Mae.getTelefone(),
            dataNasc: Mae.getNascimento()
        }
    })
}
