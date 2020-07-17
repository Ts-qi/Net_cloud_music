import React from 'react';
import styles from './style.module.css'
interface ISongListProps {

}

const SongList :React.FC<ISongListProps> = props => {
  return(
    <div className={ styles.SongList}>SongList</div>
  )
};
export default SongList;