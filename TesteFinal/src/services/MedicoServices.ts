import { PrismaClient } from "@prisma/client";
import Medico from "../models/Medico";

const prisma = new PrismaClient();

export default async function populaMedico(Medico: Medico)  {
    const medico = await prisma.medico.create({
        data: {
            crm: Medico.getMedicoCRM(),
            nome: Medico.getMedicoNome(),
            telefone: Medico.getMedicoTel(),
            especialidade: Medico.getMedicoEsp()
        }
    })
}
