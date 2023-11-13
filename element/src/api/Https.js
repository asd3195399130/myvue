import { apiGet, apiPost } from "./api";

// 获取教师列表
export function getlist(params) {
  return new Promise((resolve, reject) => {
    apiGet("/index.php/index/teacher/getsearch", params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//添加教师列表
export function addlist(params) {
  return new Promise((resolve, reject) => {
    apiPost("/index.php/index/index/addteacher", params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//搜索教师信息
export function getinfo(params) {
  return new Promise((resolve, reject) => {
    apiGet("/index.php/index/teacher/getsearch", params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//删除
export function getdel(id) {
  return new Promise((resolve, reject) => {
    apiGet("/index.php/index/teacher/delteacher", { id })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 查看教师列表详情信息
export function getsech(id) {
  return new Promise((resolve, reject) => {
    apiGet("/index.php/index/index/getteacherbyid",{id})
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
