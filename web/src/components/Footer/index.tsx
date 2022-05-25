import { GithubLogo } from 'phosphor-react';

import style from './footer.module.scss';

function Footer() {
  return (
    <footer className={style.container}>
      <a href="https://github.com/gabrielvbauer" target={'_blank'} rel="noreferrer">
        <GithubLogo 
          size={16}
          weight={'fill'}
          className={style.githubLogo}
        />
        gabrielvbauer
      </a>
    </footer>
  )
}

export { Footer }