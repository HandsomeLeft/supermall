import { request_dm } from "./request_dm";

export function user_login(username,password) {
  return request_dm({
      url: '/login',
      method: 'post',
      data: {
          username: username,
          password: password
    }
  })
}