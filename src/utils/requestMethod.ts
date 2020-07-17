
import axios from './axios';

/**
 * @description GET 请求
 * @param url 
 * @param data 
 */
export function get(url: string, data: any):Promise<any>  {
  return axios.get(url, {
      params: data
  });
};

/**
* @description GET 请求  post 请求
* @param url 
* @param data 
*/
export function post(url: string, data: any): Promise<any> {
  return axios({
      method: 'post',
      url,
      data
  });
};