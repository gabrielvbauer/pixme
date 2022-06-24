import { QrCode } from 'phosphor-react'

import style from './qrcode.module.scss';

type Props = {
  url: string
}

function QRCode({ url }: Props) {
  return (
    <div className={style.container}>
      {
        url
          ? <img 
              src={url}
              alt='QRCode'
              className={style.qrcode}
            />
          : 
            <QrCode 
              className={style.qrcodeIcon}
            />
      }
    </div>
  )
}

export { QRCode };