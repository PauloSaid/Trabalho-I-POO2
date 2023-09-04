import { PrismaClient } from "@prisma/client";
import Bebe from "../models/Bebe";

const prisma = new PrismaClient();

export default async function populaBebe(bebe: Bebe) {
  
  const bebeData = await prisma.bebe.create({
    data: {
      nome: bebe.getBebeNome(),
      dataNasc: bebe.getBebedataNasc(),
      pesoNasc: bebe.getBebePesoNasc(),
      altura: bebe.getBebeAltura(),
      crmMedico: bebe.getBebeMedico(),
      cpfMae: bebe.getBebeMae().getCPF(),
    },
  });
}