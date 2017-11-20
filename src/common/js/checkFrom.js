export const checkForm = {
  tel: (tel) => {
    const reg = new RegExp("^[1]{1}[3,4,5,8]{1}[0-9]{9}$");
    return reg.test(tel)
  },
  pwd: (pwd) => {
    return pwd.length > 6
  },
  code: (code) => {
    return code.length > 0
  },
  nickname: (nickname) => {
    return nickname.length > 0
  }
};
