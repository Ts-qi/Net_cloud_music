import musicAxios ,{ ResponseType } from 'axios';
import { SERVER } from '../config/server'
import { message } from 'antd';

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
    return res.data.code === 200 ? res.data : message.error(res.data.msg )
};
// 错误处理
const handleError = (error: any):any => {
  const { response, message } = error
  return Promise.reject(response ? new Error(response.data.message || message) : error)
};
axios.interceptors.response.use( handleSuccessResponse,handleError);


export default axios;
