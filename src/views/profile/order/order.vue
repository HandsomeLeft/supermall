<template>
  <div class="order">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>订单</div>
    </div>

    <orderlist />
  </div>
</template>

<script>
import orderlist from "./children/OrderList";

export default {
  name: "Order",
  components: {
    orderlist,
  },
  methods: {
    goprofile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.order {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  position: relative;
}

.title {
  width: 100vw;
  height: 50px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: fixed;
  background-color: #0086f6;
  position: relative;
}

.title_img {
  width: 30px;
  height: 30px;
  background-image: url(assets/img/profile/返回.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 9.5px;
  left: 10px;
}
</style>
