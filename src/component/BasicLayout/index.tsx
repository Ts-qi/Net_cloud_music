import React  from 'react'

import Header from './Header';
import Sidebar from './SiderBar';
import Footer from './Footer';
import style from './style.module.css'
interface IBasiclayOutProps {
  children: React.ReactNode
}
const BasicLayOut : React.FC<IBasiclayOutProps> = ({ children })=> {
    return (
      <div>
        < Header />
        <div className={style.content}>
          <Sidebar />
          <div className={style.children}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default BasicLayOut