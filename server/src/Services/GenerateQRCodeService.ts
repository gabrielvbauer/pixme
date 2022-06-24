import { generateQRCode } from '../functions/generateQRcode';
import { PrismaPixRespository } from '../repositories/prisma/prisma-pix-repository';

class GenerateQRCodeService {
  async execute(name: string, value: string, message: string) {
    const pixRepository = new PrismaPixRespository();
    
    const qrCode = await generateQRCode(value);

    await pixRepository.create({
      name: name,
      value: parseFloat(value),
      message: message
    })

    return qrCode;
  }
}

export { GenerateQRCodeService }