import CryptoJS from 'crypto-js';
const secretKey = "secretKey";
window.tools = {};
window.tools.CryptoJS = CryptoJS;
window.tools.encrypt = function (data) {return CryptoJS.AES.encrypt(data, secretKey).toString();}
window.tools.decrypt = function (data) {return CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);}
// exports.CryptoJS = CryptoJS;