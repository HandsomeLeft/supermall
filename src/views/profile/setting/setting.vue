<template>
  <div class="setting">
    <div class="title">
      <div class="title_img" @click="goprofile"></div>
      <div>设置</div>
      <div class="save">保存</div>
    </div>

    <div class="subitem user_avatar">头像</div>

    <div class="subitem user_name">昵称</div>

    <div class="subitem user_sex">性别</div>

    <div class="subitem receiving_address">收货地址</div>

    <div class="subitem bind_mobile_number">绑定手机号</div>

    <div class="logout">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  methods: {
    goprofile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.setting {
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

.save {
  position: absolute;
  top: 0%;
  right: 17px;
}

.subitem {
  width: 328px;
  height: 70px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  font-size: 18px;
  text-align: center;
  line-height: 70px;
  position: absolute;
}

.user_avatar {
  top: 11%;
}

.user_name {
  top: 24.5%;
}

.user_sex {
  top: 38%;
}

.receiving_address {
  top: 51.5%;
}

.bind_mobile_number {
  top: 65%;
}

.logout {
  width: 328px;
  height: 40px;
  background-color: #0086f6;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  position: absolute;
  top: 80%;
}
</style>
