import axios from "axios";

axios.defaults.timeout = 5000;

axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response;
  } else {
    return Promise.reject(new Error("请求失败"));
  }
});

export function apiGet(url, params) {
  return new Promise((resizeBy, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resizeBy(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function apiPost(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: url,
      data: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
