import React, { useCallback , useEffect} from 'react';
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
  const  { pathname } = useLocation(); 
  useEffect( ()=> {
  },[])
  // 点击路由
  const handleRouteUrl = useCallback((url:string)=> {
    console.log(url)
    
    history.push(url)
  },[]);
  // 是否点击 
  const isClickMatchRoute = NavBarRoute.find(({ url }) => url === pathname)
   
   
  return (
    <div className={styles.navBar}>
      {
        NavBarRoute && NavBarRoute.map( ({label,url},index)  => {
          const isActive = isClickMatchRoute ?  url == pathname : index == 0 ;
          return (
            <div
              key={label}
              className={cn(styles.routeItem, isActive ? styles.active : '')}
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