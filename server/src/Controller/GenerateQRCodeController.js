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
exports.GenerateQRCodeController = void 0;
const GenerateQRCodeService_1 = require("../Services/GenerateQRCodeService");
class GenerateQRCodeController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const generateQRCodeService = new GenerateQRCodeService_1.GenerateQRCodeService();
            const { name, value, message } = req.body;
            const QRCodeURL = yield generateQRCodeService.execute(name, value, message);
            return res.json({ QRCodeURL });
        });
    }
}
exports.GenerateQRCodeController = GenerateQRCodeController;
