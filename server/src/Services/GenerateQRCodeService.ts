import { generateQRCode } from '../functions/generateQRcode';

// interface IGenerateQRCodeProps {
//   name: string;
//   value: string;
//   message?: string;
// }

class GenerateQRCodeService {
  async execute() {
    const qrCode = await generateQRCode();

    return qrCode;
  }
}

export { GenerateQRCodeService }