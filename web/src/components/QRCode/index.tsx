import style from './qrcode.module.scss';

type Props = {
  url: string
}

function QRCode({ url }: Props) {
  return (
    <div className={style.container}>
      <img 
        src={url}
        alt='QRCode'
        className={style.qrcode}
      />
    </div>
  )
}

export { QRCode };