import React, { useCallback, useState, useEffect } from 'react';
import { Avatar } from 'antd';
import { UserOutlined ,CaretRightOutlined} from '@ant-design/icons';
import LoginModal from './LoginModal'
import { ILoginProps ,ILoginResult} from '../../../api/types/auth';

import { post } from '../../../utils/requestMethod';

import styles from './style.module.css';
interface ISiderBarProps {

}
const SiderBar : React.FC<ISiderBarProps> = (props) => {
  const [isLoginModalVisible,setSHowLoginModal ] = useState<boolean>(false)
  useEffect(()=>{
    
  },[])

  const handleLogin = useCallback(()=> {
    setSHowLoginModal(true)
  },[])
  // modal 确定
  const handleShowLoginModal = useCallback(async (loginInfo:ILoginProps)=> {
    // const { phone, password} = loginInfo
   const data = await post('/login/cellphone',loginInfo) as ILoginResult
    console.log(loginInfo,data,'')

  },[]);
  const handleHiddenLoginModal = useCallback(()=> {
    setSHowLoginModal(false)
  },[])
  return (
    <div className={styles.SiderBar}>
      <div className={ styles.avatar} onClick={ handleLogin}>
        <Avatar size="large" icon={< UserOutlined />} gap={10}/>
        <span className={ styles.notLogin}>未登录<CaretRightOutlined /></span>
      </div>
      <LoginModal 
        isVisible={isLoginModalVisible}
        handleOk={handleShowLoginModal}
        handleCancel={handleHiddenLoginModal}
      />
    </div>
  )
};
export default SiderBar;