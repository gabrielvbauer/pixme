import { Router } from "express";

import { GenerateQRCodeController } from '../src/Controller/GenerateQRCodeController';

const generateQRCodeController = new GenerateQRCodeController();

const router = Router();

router.get('/new', generateQRCodeController.handle)

export { router };