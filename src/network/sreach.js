import { request_dm } from "./request_dm";

export function get_cart_list() {
  return request_dm({
    url:'/get_cart_list',
  })
}

export function get_test(data) {
  return request_dm({
      url: '/get_sreach_goods_list',
      method: 'post',
      data: {
          sreach_data:data
    }
  })
}