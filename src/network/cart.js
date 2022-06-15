import { request_dm } from "./request_dm";

export function get_cart_list(user_id) {
  return request_dm({
    url: '/get_cart_list',
    params: {
      user_id:user_id
    }
  })
}

export function remove_cart(id) {
  return request_dm({
    url: '/del_cart_list',
    params: {
      id:id
    }
  })
}