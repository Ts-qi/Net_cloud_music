import React , { lazy,Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routes from '../../config/routes'
import styles from './style.module.css'
interface IDiscoveryProps {}
/**
 * 
 */
const RECOMMENDATION = lazy(()=> import('./Recommendation'));// 个性推荐
const SONGLIST = lazy(()=> import('./SongList'));// 歌单
const LATESTMUSIC = lazy(()=> import('./LatestMusic'));// 最新音乐


const Discovery :React.FC<IDiscoveryProps> = props => {
  return(
    <div className={ styles.Discovery}>
      <Suspense fallback= { null} >
        <Switch>
          <Route exact path={Routes.RECOMMENDATION }  component = { RECOMMENDATION }/>
          <Route exact path={Routes.SONGLIST}  component={SONGLIST} />
          <Route exact path={ Routes.LATESTMUSIC} component={ LATESTMUSIC} />
          {/*  在 url  只有 discovery 菜单的时候 */}
          <Route exact path={Routes.DISCOVERY}  component={RECOMMENDATION} />
          <Redirect from={`${Routes.DISCOVERY}/*`} to={Routes.RECOMMENDATION} />
        </Switch>
      </Suspense>
    </div>
  )
};
export default Discovery;