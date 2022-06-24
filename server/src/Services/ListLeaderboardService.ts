import { PrismaPixRespository } from "../repositories/prisma/prisma-pix-repository";

class ListLeaderboardService {
    async execute() {
        const pixRepository = new PrismaPixRespository();

        const pixs = await pixRepository.retrieveApproved();

        return pixs;
    }
}

export { ListLeaderboardService };