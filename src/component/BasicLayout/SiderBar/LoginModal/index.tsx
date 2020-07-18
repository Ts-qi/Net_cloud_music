import React, {memo, useCallback, useState, ChangeEvent } from 'react';
import { Modal ,Form, Input} from 'antd';
import { ILoginProps } from '../../../../api/types/auth'
interface ILoginModalProps {
  isVisible: boolean;
  handleOk:(params:ILoginProps)=> void;
  handleCancel:()=>void;
};
const LoginModal :React.FC<ILoginModalProps> = ({isVisible,handleOk,handleCancel}) => {
  const [ loginInfo,setLoginInfo ] = useState<ILoginProps>({
    phone:'',
    password:''
  })
  const { phone,password } = loginInfo
  const handleGetUserNameInputValue = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    const _getloginInfo = {
      ...loginInfo,
      phone:e.currentTarget.value
    }
    setLoginInfo(_getloginInfo)

  },[loginInfo])
  const handleGetPasswordInputValue = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    const _getloginInfo = {
      ...loginInfo,
      password:e.currentTarget.value
    }
    setLoginInfo(_getloginInfo)
  },[loginInfo]);
  const handleSumbit = useCallback(()=>{
    handleOk(loginInfo)
  },[handleOk,loginInfo]);
  return(
    <Modal
      getContainer={false}
      title="登录"
      visible={isVisible}
      onOk={handleSumbit}
      onCancel={handleCancel}
 
    >
    <Form
      name="basic"
      initialValues={{ remember: true }}
      labelAlign="left"
    >
      <Form.Item
        label="账号"
        name="phone"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input value={phone} onChange={(e)=> handleGetUserNameInputValue(e)}/>
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password  value={password} onChange={(e)=> handleGetPasswordInputValue(e)}/>
      </Form.Item>

    </Form>
    </Modal>
  )
};

export default memo(LoginModal);