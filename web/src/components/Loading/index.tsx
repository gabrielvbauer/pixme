import { CircleNotch } from 'phosphor-react';
import style from './loading.module.scss';

function Loading() {
  return (
    <CircleNotch 
      className={style.loading}
    />
  )
}

export { Loading };