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
exports.generateQRCode = void 0;
/* eslint-disable no-octal */
const steplix_emv_qrcps_1 = require("steplix-emv-qrcps");
const qrcode_1 = require("qrcode");
function generateQRCode(value = '10.0') {
    return __awaiter(this, void 0, void 0, function* () {
        const emvqr = generateEMVQR();
        const accountInformation = generateAccountInformation();
        const additionalDataFieldTemplate = generateAdditionalFieldTemplate();
        emvqr.addMerchantAccountInformation(process.env.MERCHANT_ACCOUNT_INFORMATION_CODE, accountInformation);
        emvqr.setAdditionalDataFieldTemplate(additionalDataFieldTemplate);
        emvqr.setTransactionAmount(value);
        const payload = generatePayload(emvqr);
        const qrcodeURL = (0, qrcode_1.toDataURL)(payload);
        return qrcodeURL;
    });
}
exports.generateQRCode = generateQRCode;
function generateEMVQR() {
    const emvqr = steplix_emv_qrcps_1.Merchant.buildEMVQR();
    emvqr.setPayloadFormatIndicator(process.env.PAYLOAD_FORMAT_INDICATOR);
    emvqr.setCountryCode(process.env.MERCHANT_COUNTRY);
    emvqr.setMerchantName(process.env.MERCHANT_NAME);
    emvqr.setMerchantCity(process.env.MERCHANT_CITY);
    emvqr.setMerchantCategoryCode(process.env.MERCHANT_CATEGORY_CODE);
    emvqr.setTransactionCurrency(process.env.TRANSACTION_CURRENCY);
    return emvqr;
}
function generateAccountInformation() {
    const accountInformation = steplix_emv_qrcps_1.Merchant.buildMerchantAccountInformation();
    accountInformation.setGloballyUniqueIdentifier(process.env.GLOBALLY_UNIQUE_IDENTIFIER);
    accountInformation.addPaymentNetworkSpecific(process.env.PAYMENT_NETWORK_SPECIFIC_CODE, process.env.PAYMENT_NETWORK_SPECIFIC);
    return accountInformation;
}
function generateAdditionalFieldTemplate() {
    const additionalDataFieldTemplate = steplix_emv_qrcps_1.Merchant.buildAdditionalDataFieldTemplate();
    return additionalDataFieldTemplate;
}
function generatePayload(emvqr) {
    const payload = emvqr.generatePayload();
    return payload;
}
