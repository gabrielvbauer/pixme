/* eslint-disable no-octal */
import { Merchant } from 'steplix-emv-qrcps';
import { toDataURL } from 'qrcode';

function handleGeneratePayload() {
  const emvqr = Merchant.buildEMVQR();

  emvqr.setPayloadFormatIndicator("01");
  emvqr.setCountryCode("BR");
  emvqr.setMerchantName("GabrielBauerVieira");
  emvqr.setMerchantCity("IJUI");
  emvqr.setMerchantCategoryCode("0000");
  emvqr.setTransactionCurrency("986");

  const accountInformation = Merchant.buildMerchantAccountInformation();
  console.log(accountInformation);
  accountInformation.setGloballyUniqueIdentifier("BR.GOV.BCB.PIX")
  accountInformation.addPaymentNetworkSpecific("01", "03885533081");

  emvqr.addMerchantAccountInformation("27", accountInformation);
  const additionalDataFieldTemplate = Merchant.buildAdditionalDataFieldTemplate();
  emvqr.setAdditionalDataFieldTemplate(additionalDataFieldTemplate);

  const payload = emvqr.generatePayload();

  const a = toDataURL(payload)
    .then((result) => {
      console.log(result)
      return result;
    })
    .catch((err) => {
      console.log(err)
      return 'a'
    })

    return a;
}

export { handleGeneratePayload }