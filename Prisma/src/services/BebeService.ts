import { PrismaClient } from "@prisma/client";
import Bebe from "../models/Bebe";
import Mae from "../models/Mae";

const prisma = new PrismaClient();

class BebeService{

    

    async function main(Bebe: Bebe) {
        const bebe = await prisma.bebe.create({
            data: {
                nome: Bebe.getBebeNome(),
                dataNasc: Bebe.getBebedataNasc(),
                pesoNasc: Bebe.getBebePesoNasc(),
                altura: Bebe.getBebeAltura(),
            }
            });
    
    }
}

export default BebeService;
