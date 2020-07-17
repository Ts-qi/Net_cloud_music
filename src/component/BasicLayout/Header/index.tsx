import React, { useMemo } from 'react';
import NavBar from './NavBar'
import styles from './style.module.css'
interface IHeaderProps {}
const Header : React.FC<IHeaderProps> = (props) => {
  const musicLogo = useMemo(()=> <>网易云音乐</>,[])
  return (
    <div className={styles.rootHeader}>
      <div className={styles.left}>
        <div className={styles.musicLogo}>
          {musicLogo}
        </div>
      </div>
      <div className={styles.right}>
        <NavBar />
      </div>
    </div>
  )
};
export default Header;