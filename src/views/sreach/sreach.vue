<template>
  <div>
    <navbar class="navbar">
      <div slot="left">相机</div>
      <div slot="center">
        <input type="text" v-model="data" />
      </div>
      <div slot="right" @click="get_search_data(data)">
      搜索
      </div>
    </navbar>
    <goods_list :goods="showGoods" class="goods_list"></goods_list>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import goods_list from "components/content/goods/goods_list";
import { get_test } from "network/sreach";

export default {
  name: "",
  components: {
    navbar,
    goods_list,
  },
  data() {
    return {
      showGoods: [],
      data: "",
    };
  },
  activated() {
    this.showGoods = [];
    if (this.$route.query.search_in_cate) {
      this.get_search_data(this.$route.query.search_in_cate);
    } else if (this.$route.query.search_cate) {
      this.get_search_data(this.$route.query.search_cate);
    }
  },
  methods: {
    get_search_data(search_data) {
      get_test(search_data).then((res) => {
        this.showGoods = res;
      });
    },
  },
};
</script>

<style>
.navbar {
  /* background-color: aqua; */
  color: #fff;
}
input {
  width: 100%;
  height: 35px;
  border-radius: 30px;
  border: none;
  outline: none;
}
.goods_list {
  width: 95%;
  margin: 0 auto;
}
</style>
