import { Footer } from 'components/Footer';
import { Leaderboard } from 'components/Leaderboard';
import { QRCodeForm } from 'components/QRCodeForm';
import { QRCode } from '../../components/QRCode';
import style from './landing.module.scss';

function Landing() {
  return (
    <main className={style.container}>
      <section className={style.qrcode_form_wrapper}>
        <QRCode />
        <QRCodeForm />
      </section>
      <section className={style.leaderboard_wrapper}>
        <Leaderboard />
      </section>
      <Footer />
    </main>
  )
}

export { Landing };