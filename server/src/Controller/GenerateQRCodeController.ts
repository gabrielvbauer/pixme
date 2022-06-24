import { Request, Response } from "express";
import { GenerateQRCodeService } from "../Services/GenerateQRCodeService";

class GenerateQRCodeController {
  async handle(req: Request, res: Response) {
    const generateQRCodeService = new GenerateQRCodeService();

    const { name, value, message } = req.body;

    const QRCodeURL = await generateQRCodeService.execute(name, value, message);

    return res.json({QRCodeURL})
  }  
}

export { GenerateQRCodeController }