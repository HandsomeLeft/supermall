<template>
  <div class="register_content">
    <div class="user">
      <div class="user_img"></div>
      <input
        id="user"
        type="text"
        v-model="user_name"
        placeholder="请输入用户名"
      />
    </div>
    <div class="password">
      <div class="password_img"></div>
      <input
        id="password"
        type="password"
        v-model="user_password"
        placeholder="请输入密码"
      />
    </div>
    <div class="login_button" @click="reguser">注册</div>
    <div class="flxed" v-show="this.if_data">{{ this.message }}</div>
  </div>
</template>

<script>
import { reguser } from "network/reguser";

export default {
  data() {
    return {
      if_data: false,
      user_name: "",
      user_password: "",
      message: "",
    };
  },
  methods: {
    reguser() {
      reguser(this.user_name, this.user_password).then((res) => {
        this.message = res.message;
      });
      let that = this;
      that.if_data = true;
      setTimeout(function () {
        that.if_data = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.register_content {
  width: 304px;
  height: 281px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 21px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user {
  width: 262px;
  height: 39px;
  position: absolute;
  top: 16%;
}

.user_img {
  width: 32px;
  height: 38px;
  background-image: url(assets/img/login/用户.svg);
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
}

#user {
  width: 211px;
  height: 39px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  float: right;
}

.password {
  width: 262px;
  height: 39px;
  position: absolute;
  top: 36%;
}

.password_img {
  width: 34px;
  height: 38px;
  background-image: url(assets/img/login/密码.svg);
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
}

#password {
  width: 211px;
  height: 39px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  float: right;
}

.password_choice {
  width: 246px;
  height: 17px;
  position: absolute;
  top: 57.6%;
}

.remember_password {
  color: black;
  font-size: 13px;
  float: left;
  display: flex;
  align-items: center;
}

.forget_password {
  color: black;
  font-size: 13px;
  float: right;
}

.login_button {
  width: 262px;
  height: 55px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  color: black;
  font-size: 18px;
  font-weight: 1000;
  text-align: center;
  line-height: 55px;
  position: absolute;
  top: 70%;
}

.flxed {
  width: 80px;
  height: 30px;
  background-color: gray;
  border-radius: 10px;
  color: #eee;
  text-align: center;
  line-height: 30px;
  position: absolute;
  top: 100%;
  z-index: 1000;
}
</style>
