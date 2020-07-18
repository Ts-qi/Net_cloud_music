import React from 'react';
import styles from './style.module.css'
 interface ILatestMusicProps {

 }
const LatestMusic :React.FC<ILatestMusicProps> = props => {
  return (
    <div className={ styles.LatestMusic}>  latestMusic</div>
  )
}
export default LatestMusic;