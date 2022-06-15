<template>
  <div class="message">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>消息</div>
    </div>

    <div class="content">消息</div>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    goprofile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.message {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100vw;
  height: 50px;
  background-color: #0086f6;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0%;
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

.content {
  width: 328px;
  height: 520px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 18px;
  text-align: center;
  line-height: 520px;
  position: absolute;
  top: 11%;
}
</style>
