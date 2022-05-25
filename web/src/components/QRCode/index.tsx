import style from './qrcode.module.scss';

function QRCode() {
  return (
    <div className={style.container}>
      <img 
        src='https://qrcode.tec-it.com/API/QRCode?data=QR+Code+Generator+by+TEC-IT'
        alt='QRCode'
        className={style.qrcode}
      />
    </div>
  )
}

export { QRCode };