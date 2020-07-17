import React, { useCallback } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom'
import Route from '../../../../config/routes'
import styles from './style.module.css';
import { INavBarRouteProps } from '../model'
interface INavBarProps {

}
const NavBarRoute : INavBarRouteProps[] = [
  {
    label: '个性推荐',
    url:Route.RECOMMENDATION
  },
  {
    label: '歌单',
    url:Route.SONGLIST
  },
]

const NavBar : React.FC<INavBarProps> = props => {
  const history = useHistory();
  const handleRouteUrl = useCallback((url:string)=> {
    console.log(url)
    history.push(url)
  },[]);
  return (
    <div className={styles.navBar}>
      {
        NavBarRoute && NavBarRoute.map( ({label,url},index)  => {
          return (
            <div
              key={label}
              className={cn(styles.routeItem)}
              onClick={ ()=> handleRouteUrl(url)}
            >
              {label}
            </div>
          )
        })
      }
    </div>
  )
}

export default NavBar;