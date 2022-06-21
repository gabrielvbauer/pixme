import { Request, response, Response } from "express";
import { GenerateQRCodeService } from "../Services/GenerateQRCodeService";

class GenerateQRCodeController {
  async handle(req: Request, res: Response) {
    const generateQRCodeService = new GenerateQRCodeService();

    const QRCodeURL = await generateQRCodeService.execute();

    return res.json({QRCodeURL})
  }  
}

export { GenerateQRCodeController }