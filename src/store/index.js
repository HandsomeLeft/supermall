import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  user_id: "",
  UserName: "登录/注册",
  UserAvatar: "游客",
  total_price: 0,
  is_checked: true,
  number:0
};
const mutations = {
  user_id_change(state, user_id) {
    state.user_id = user_id;
  },
   user_id_change(state,user_id) {
        state.user_id=user_id
    },
    total_price_change(state, total_price) {
        state.total_price=total_price
    },
    total_price_min(state, total_price) {
        state.total_price-=total_price
    },
    total_price_add(state, total_price) {
        state.total_price+=total_price
    },
    total_is_false(state, is_checked) {
        state.is_checked=is_checked
    },
    total_number_change(state, number) {
        state.number=number
    },
    zero(state,new1 ) {
        state.total_price=new1
    }
};
const store = new Vuex.Store({
  state,
  mutations,
});
export default store;
