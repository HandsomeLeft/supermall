import {request_reguser} from "./request_reguser";

export function getHomeMultidata() {
  return request_reguser({
    url: '/home/multidata'
  })
}

export function getHomeGoods(username,password) {
  return request_reguser({
      url: '/api/reguser',
      method: 'post',
      data: {
          username: username,
          password: password
    }
  })
}