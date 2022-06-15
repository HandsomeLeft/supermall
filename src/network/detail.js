import { request } from "./request";
import { request_dm } from "./request_dm";

export function get_detail(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function get_goods_detail(iid) {
    return request_dm({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function add_cart_list(image_url,title,desc,price,count,user_id) {
    return request_dm({
        url: 'add_cart_list',
        params: {
            image_url,
            title,
            desc,
            price,
            count,
            user_id
        }
    })
}