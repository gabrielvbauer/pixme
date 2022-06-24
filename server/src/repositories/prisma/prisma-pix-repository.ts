import { prisma } from "../../prisma";
import { PixCreateData, PixRepository } from "../pix-repository";

export class PrismaPixRespository implements PixRepository {
    async create({name, value, message}: PixCreateData) {
        await prisma.pix.create({
            data: {
                name,
                value,
                message
            }
        })
    }

    async getAll() {
        return await prisma.pix.findMany();
    }

    async retrieveApproved() {
        return await prisma.pix.findMany({
            where: {
                approved: true
            }
        })
    }
}