import { Request, Response } from "express";
import { ListLeaderboardService } from "../Services/ListLeaderboardService";

class ListLeaderboardController {
    async handle(req: Request, res: Response) {
        const listLeaderboardService = new ListLeaderboardService();

        const pixs = await listLeaderboardService.execute();

        return res.json(pixs);
    }
}

export { ListLeaderboardController };