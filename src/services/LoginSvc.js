import { message } from 'antd';
import request from '../config/request'

export const checkToken = async (admin) => {
  const data = await request.post("survey-api/admin", admin).then((res) => {

    if (res.code == 1400) {
      sessionStorage.setItem('admin', res.data.username)
      sessionStorage.setItem('token', res.data.token)
    } else {
      message.error("Login Fail");
    }
    return res.code
  })
  return data;
}
