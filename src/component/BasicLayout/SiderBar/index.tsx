import React from 'react'
import styles from './style.module.css'
interface ISiderBarProps {

}
const SiderBar : React.FC<ISiderBarProps> = (props) => {
  return (
    <div className={styles.SiderBar}>
      SiderBar
    </div>
  )
};
export default SiderBar;