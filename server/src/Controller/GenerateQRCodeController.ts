import { Request, Response } from "express";
import { GenerateQRCodeService } from "../Services/GenerateQRCodeService";

class GenerateQRCodeController {
  async handle(req: Request, res: Response) {
    const generateQRCodeService = new GenerateQRCodeService();

    const { value } = req.body;

    const QRCodeURL = await generateQRCodeService.execute(value);

    return res.json({QRCodeURL})
  }  
}

export { GenerateQRCodeController }