import { useEffect, useState } from 'react';
import { SortAscending, SortDescending } from 'phosphor-react';

import { LeaderboardItem, LeaderboardItemProps } from 'components/LeaderboardItem';
import style from './leaderboard.module.scss';
import { api } from 'api/api';

function Leaderboard() {
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardItemProps[]>([])

  function handleDescSort() {
    let sorted;

    sorted = leaderboardData.sort((a, b) => {
      return a.value - b.value;
    })

    setSorting('desc')
    setLeaderboardData(sorted);
  }

  function handleAscSort() {
    let sorted;

    sorted = leaderboardData.sort((a, b) => {
      return b.value - a.value;
    })

    setSorting('asc')
    setLeaderboardData(sorted);
  }

  useEffect(() => {
    getLeaderboard();
  }, [])

  async function getLeaderboard() {
    try {
      const { data } = await api.get('/leaderboard');
      console.log(data)
      setLeaderboardData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Leaderboard</h2>
        {
          sorting === 'asc' ? (
            <SortAscending 
              size={22}
              weight={'regular'}
              className={style.icon}
              onClick={() => handleDescSort()}
            />
          ) : (
            <SortDescending
              size={22}
              weight={'regular'}
              className={style.icon}
              onClick={() => handleAscSort()}
            />
          )
        }
      </div>
      {
        leaderboardData.map(({name, value, message}, index) => {
          return (
            <LeaderboardItem 
              name={name}
              value={value}
              message={message}
              key={index}
            />
          )
        })
      }
    </div>
  )
}

export { Leaderboard };