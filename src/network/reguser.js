import { request_dm } from "./request_dm";

export function reguser(username,password) {
  return request_dm({
      url: '/reguser',
      method: 'post',
      data: {
          username: username,
          password: password
    }
  })
}