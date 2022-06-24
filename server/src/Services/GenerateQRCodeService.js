"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateQRCodeService = void 0;
const generateQRcode_1 = require("../functions/generateQRcode");
const prisma_pix_repository_1 = require("../repositories/prisma/prisma-pix-repository");
class GenerateQRCodeService {
    execute(name, value, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const pixRepository = new prisma_pix_repository_1.PrismaPixRespository();
            const qrCode = yield (0, generateQRcode_1.generateQRCode)(value);
            yield pixRepository.create({
                name: name,
                value: parseFloat(value),
                message: message
            });
            return qrCode;
        });
    }
}
exports.GenerateQRCodeService = GenerateQRCodeService;
