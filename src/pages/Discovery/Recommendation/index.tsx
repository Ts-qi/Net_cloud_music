import React from 'react';
import styles from './style.module.css'
interface IRecommendationProps {

}

const Recommendation :React.FC<IRecommendationProps> = props => {
  return(
    <div className={ styles.Recommendation}>Recommendation</div>
  )
};
export default Recommendation;