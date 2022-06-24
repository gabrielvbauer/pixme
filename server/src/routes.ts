import { Router } from "express";

import { GenerateQRCodeController } from '../src/Controller/GenerateQRCodeController';
import { ListLeaderboardController } from "./Controller/ListLeaderboardController";

const generateQRCodeController = new GenerateQRCodeController();
const listLeaderboardController = new ListLeaderboardController();

const router = Router();

router.post('/new', generateQRCodeController.handle)

router.get('/leaderboard', listLeaderboardController.handle)

export { router };