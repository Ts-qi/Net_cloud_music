import musicAxios ,{ AxiosRequestConfig,ResponseType } from 'axios';
// import { message } from 'antd';
import { SERVER } from '../config/server'

const TIME_OUT = 40000;
const DATA_JSON: IDictionary<ResponseType> = {
  JSON: 'json'
}
const axios = musicAxios.create({
    timeout: TIME_OUT,
    baseURL:SERVER,
    responseType: DATA_JSON.JSON
});
// 成功处理
const handleSuccessResponse = (res: any): any => {
    console.log(res,'res-----')
    if(res.status === 200) {
      return res.data
    }
};
// 错误处理
const handleError = (error: any):any => {
  console.log(error,'res-----')
  const { response, message } = error
  return Promise.reject(response ? new Error(response.data.message || message) : error)
};
axios.interceptors.response.use( handleSuccessResponse,handleError);


export default axios;
