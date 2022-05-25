import { useEffect, useState } from 'react';
import { SortAscending, SortDescending } from 'phosphor-react';

import { leaderboardMockData } from 'Mock/LeaderBoard';
import { LeaderboardItem, LeaderboardItemProps } from 'components/LeaderboardItem';
import style from './leaderboard.module.scss';

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
    setLeaderboardData(leaderboardMockData);
  }, [leaderboardMockData]);

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
        leaderboardData.map(({userName, picture, value, message}, index) => {
          return (
            <LeaderboardItem 
              userName={userName}
              picture={picture}
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