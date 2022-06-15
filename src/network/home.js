import { request } from "./request";
import { request_dm } from "./request_dm";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
    // url:'/api/get_test'
  })
  
}
export function get_home_swiper() {
  return request_dm({
    url:'/multi_data',
  })
}

export function get_recommoned_data() {
  return request_dm({
    url:'/recommoned_data',
  })
}

export function get_home_goods(type,page) {
  return request_dm({
    url: '/goods_list',
    params: {
      type,
      page
    }
  })
}


export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',  
    params: {
      type,
      page
    }
  })
}

// // 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// // 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// // function test() {
// //   const names = ['why', 'aaa']
// // }
// //
// // test()
// //
// // test()

// let totalNums = []

// const nums1 = [20, 11, 222]
// const nums2 = [111, 22, 333]

// // for (let n of nums1) {
// //   totalNums.push(n)
// // }

// totalNums.push(...nums1)
