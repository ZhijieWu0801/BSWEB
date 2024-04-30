// plugins/config.js

import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // 设置你的 API 地址
  timeout: 5000, // 设置请求超时时间
});

/**
 * 登录
 * @param {*} data {tel:账号/手机号，pwd:密码}
 * @returns 
 */
export function login(data) {
  return axiosInstance.post("/api/login", data)
}

/**
 * 注册
 * @param {*} data {address: "吉林省吉林市" ,name: "123456", pwd: "·1123123", tel: "18580528910"}
 * @returns 
 */
export function signIn(data) {
  return axiosInstance.post("/api/master/signIn", data)
}

/**
 * 发送到python程序处理预测结果
 * @param {*} data 图片的base64数据
 * @returns 
 */
export function forecastByPy(data) {
  return axiosInstance.post("/api/serve/PY", data)
}
// 
/**
 * 添加宠物
 * @param {*} data {species: 物种 ,name: 名字 ,master: 主人电话};
 * @returns 
 */
export function addPet(data) {
  return axiosInstance.post("/api/pet/addPet", data)
}
/**
 * 通过宠物类型获取所有宠物列表
 * @param {} data {species:宠物类型,[page:页码,pageSize:页容量]}
 * @returns 
 */
export function getAllPetByType(data) {
  return axiosInstance.post("/api/pet/getAllPetByType", data)
}
/**
 * 创建管理员 {
          tel: ,
          name: ,
          limit: ,
          tissue: ,
          address: ,
          pwd: ,
          birth: ,
        }
 * @param {*} data 
 * @returns 
 */
export function createAdmin(data) {
  return axiosInstance.post("/api/admin/createAdmin", data)
}
/**
 * 获取所有管理员列表
 * @param {*} data 
 * @returns 
 */
export function getAllAdmin(data) {
  return axiosInstance.post("/api/admin/getAllAdmin",data)
}
/**
 * 通过电话获取管理员
 * @param {*} data 
 * @returns 
 */
export function getAdminByTel(data) {
  return axiosInstance.post("/api/admin/getAdminByTel",data)
}
/**
 * 通过电话删除管理员
 * @param {*} data 
 * @returns 
 */
export function deleteAdminByTel(data) {
  return axiosInstance.post("/api/admin/deleteAdminByTel",data)
}
/**
 * 通过电话获取管理员
 * @param {*} data 
 * @returns 
 */
export function updataAdmin(data) {
  return axiosInstance.post("/api/admin/updataAdmin",data)
}
/**
 * 连接宠物和主人
 * 宠物领养
 * @param {*} data {tel:电话，serial：宠物编号}    
 * @returns 
 */
export function linkPet(data) {
  return axiosInstance.post("/api/master/linkPet",data)
}
/**
 * 断开宠物和主人的连接
 * 宠物归还
 * @param {*} data {tel:电话，serial：宠物编号}    
 * @returns 
 */
export function disconnectPetLink(data) {
  return axiosInstance.post("/api/master/disconnectPetLink",data)
}