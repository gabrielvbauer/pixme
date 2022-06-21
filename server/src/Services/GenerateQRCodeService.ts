import { generateQRCode } from '../functions/generateQRcode';

class GenerateQRCodeService {
  async execute(value: string) {
    if (value) {
      value = value.replace(',','.')
    }

    console.log(value)

    const qrCode = await generateQRCode(value);

    return qrCode;
  }
}

export { GenerateQRCodeService }