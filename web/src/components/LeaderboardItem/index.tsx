import { ChatCircleText } from 'phosphor-react';

import style from './leaderboarditem.module.scss';

export type LeaderboardItemProps = {
  userName: string;
  picture: string;
  value: number;
  message?: string;
}

function LeaderboardItem({ userName, picture, value, message }: LeaderboardItemProps) {
  return (
    <div className={style.container}>
      <img 
        src={picture}
        alt='Imagem de perfil'
        className={style.image}
      />
      <p className={style.username}>
        {userName}
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
          value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL' 
          })
        }
      </p>
    </div>
  )
}

export { LeaderboardItem }