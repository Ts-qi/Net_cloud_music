import React from 'react'
import styles from './style.module.css'
interface IFooterProps {

}
const Footer : React.FC<IFooterProps> = (props) => {
  return (
    <div className={styles.Footer}>
      Footer
    </div>
  )
};
export default Footer;