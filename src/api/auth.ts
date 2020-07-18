
import { post,get } from '../utils/requestMethod';
import { ILoginProps,ILoginResult }  from '../api/types/auth';

// type LoginFn = (params:ILoginProps) => Promise<ILoginResult>

const LoginRequest:any= (url:string,data:ILoginProps) => {
  return post(url, data)
}


export default  {
  LoginRequest
}