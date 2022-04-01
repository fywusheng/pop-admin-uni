import Axios from "axios"
import Store from "@/store/index.js"
import ENV from "@/config/env";
Axios.defaults.baseURL = ENV.API

Axios.interceptors.request.use(request => {
  const headers = {
   "content-type": "application/json;charset=utf-8",
  }
  request.headers = Object.assign(headers, request.headers);
  return request;
});
Axios.interceptors.response.use(response => {
  // if(response.data.result.errorCode == 999){
  //   //XIU.goLogin();
  // }
  return response.data;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});
// 用Axios的适配器把通讯转换为底层的微信request api
Axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.url,
      data: Object.assign({
        deviceNumber: wx.getStorageSync('deviceNumber'),
        sessionId: Store.state.login.sessionId,
        // sessionId: '06e35f57-ca34-4fc2-9a4e-e89877e862a0',
      },(config.data ? JSON.parse(config.data) : config.params)),
      header: config.headers,
      method: config.method,
      success(res) {
        console.log(res.data)
        resolve({
          config,
          headers: res.header,
          status: res.statusCode,
          data: res.data,
          cookies: res.cookies,
        });
      },
      fail(error) {
        reject(error);
      }
    });
  });
};

export default Axios
