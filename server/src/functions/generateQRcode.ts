/* eslint-disable no-octal */
import { Merchant } from 'steplix-emv-qrcps';
import { toDataURL } from 'qrcode';

async function generateQRCode(value: string = '10.0') {
  const emvqr = generateEMVQR();
  const accountInformation = generateAccountInformation();
  const additionalDataFieldTemplate = generateAdditionalFieldTemplate();

  emvqr.addMerchantAccountInformation(process.env.MERCHANT_ACCOUNT_INFORMATION_CODE, accountInformation);
  emvqr.setAdditionalDataFieldTemplate(additionalDataFieldTemplate);

  emvqr.setTransactionAmount(value);

  const payload = generatePayload(emvqr);
  const qrcodeURL = toDataURL(payload);

  return qrcodeURL;
}

function generateEMVQR() {
  const emvqr = Merchant.buildEMVQR();

  emvqr.setPayloadFormatIndicator(process.env.PAYLOAD_FORMAT_INDICATOR);
  emvqr.setCountryCode(process.env.MERCHANT_COUNTRY);
  emvqr.setMerchantName(process.env.MERCHANT_NAME);
  emvqr.setMerchantCity(process.env.MERCHANT_CITY);
  emvqr.setMerchantCategoryCode(process.env.MERCHANT_CATEGORY_CODE);
  emvqr.setTransactionCurrency(process.env.TRANSACTION_CURRENCY);

  return emvqr;
}

function generateAccountInformation() {
  const accountInformation = Merchant.buildMerchantAccountInformation();
  accountInformation.setGloballyUniqueIdentifier(process.env.GLOBALLY_UNIQUE_IDENTIFIER)
  accountInformation.addPaymentNetworkSpecific(process.env.PAYMENT_NETWORK_SPECIFIC_CODE, process.env.PAYMENT_NETWORK_SPECIFIC);

  return accountInformation;
}

function generateAdditionalFieldTemplate() {
  const additionalDataFieldTemplate = Merchant.buildAdditionalDataFieldTemplate();
  
  return additionalDataFieldTemplate;
}

function generatePayload(emvqr: any) {
  const payload = emvqr.generatePayload();

  return payload;
}

export { generateQRCode }