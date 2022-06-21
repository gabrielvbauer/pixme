import { Router } from "express";

import { GenerateQRCodeController } from '../src/Controller/GenerateQRCodeController';

const generateQRCodeController = new GenerateQRCodeController();

const router = Router();

router.post('/new', generateQRCodeController.handle)

export { router };