<template>
  <scroll class="content" ref="scroll">
    <collection-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
    />
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/scroll";
import CollectionListItem from "./CollectionListItem.vue";
import { get_cart_list } from "network/cart";

export default {
  name: "OrderList",
  components: {
    Scroll,
    CollectionListItem,
  },
  activated() {
    this.get_cart_list(this.$store.state.user_id);
  },
  data() {
    return {
      cartList: [],
    };
  },
  methods: {
    get_cart_list(user_id) {
      this.cartList = [];
      get_cart_list(user_id).then((res) => {
        this.cartList = res;
      });
    },
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 50px - 49px);
  overflow: hidden;
}
</style>
