import { useState } from 'react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className={styles.headerContainer} >
      <div className={styles.headerContent} >
        <a href="" title="exiospay"></a>

        <div className={styles.menuDesktop}>
          <nav>
            <a className={styles.active} href="" title="Home" >Home</a>
            <a href="" title="Transactions" >Transactions</a>
            <a href="" title="Cards" >Cards</a>
            <a href="" title="Payments" >Payments</a>
          </nav>
          <SignInButton />
        </div>

        <div className={styles.menuMobile}>
          <button
            type="button"
            onClick={openMenu}
            className={styles.menuOpen}
          >
            { isOpenMenu !== true ? (<FaBars/>) : (<FaTimes/>) }
          </button>
          <nav
            className={isOpenMenu !== true ? '' : `${styles.activeMenu}`}
          >
            <a className={styles.active} href="" title="Home" >Home</a>
            <a href="" title="Transactions" >Transactions</a>
            <a href="" title="Cards" >Cards</a>
            <a href="" title="Payments" >Payments</a>
          </nav>
          <SignInButton />
        </div>
      </div>
    </header>
  )
}