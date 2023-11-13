import axios from "axios";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response;
  } else {
    return Promise.reject(new Error("请求失败"));
  }
});
// axios.interceptors.request.use(config=>{
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     return config;
// });

export function apiGet(url, params) {
  return new Promise((reslove, reject) => {
    axios
      .get(url, {
        params: params,
        headers: { token: sessionStorage.getItem("token") },
      })
      .then((res) => {
        reslove(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function apiPost(url, params) {
  return new Promise((reslove, reject) => {
    axios({
      method: "POST",
      url: url,
      data: params,
    })
      .then((res) => {
        reslove(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
