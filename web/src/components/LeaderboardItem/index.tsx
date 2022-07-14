import { ChatCircleText, User } from 'phosphor-react';
import { formatValue } from 'Utils/functions';

import style from './leaderboarditem.module.scss';

export type LeaderboardItemProps = {
  name: string;
  picture?: string;
  value: number;
  message?: string;
}

function LeaderboardItem({ name, picture, value, message }: LeaderboardItemProps) {
  return (
    <div className={style.container}>
      {/* <img 
        src={picture}
        alt='Imagem de perfil'
        className={style.image}
      /> */}
      <User 
        className={style.image}
        color='#fff'
      />
      <p className={style.username}>
        {name}
      </p>
      {
        message ? (
          <div className={style.messageWrapper}>
            <ChatCircleText
              size={22}
              className={`${style.messageIcon}`}
            />
            <div 
              className={style.message}
            >
              <p>{message}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
      <p className={style.value}>
        {
          value ? ('R$ ' + formatValue(Number(value).toFixed(2).toString())) : '-'
        }
      </p>
    </div>
  )
}

export { LeaderboardItem }