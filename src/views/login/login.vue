<template>
  <div class="login">
    <div class="login_title">
      <div class="back" @click="goprofile"></div>
      <div @click="(register = !register), (login = !login)">
        <div
          class="register"
          v-if="register"
          @click="tabChange('register_content')"
        >
          注册
        </div>
        <div class="register" v-if="login" @click="tabChange('login_content')">
          登录
        </div>
      </div>
    </div>

    <div :is="loginContent"></div>

    <div class="third_party">
      <div class="line_one"></div>
      <div id="third_party">以第三方登录</div>
      <div class="line_two"></div>
    </div>

    <div class="third_party_all">
      <div class="qq"></div>
      <div class="wechat"></div>
      <div class="micro_blog"></div>
    </div>

    <div class="phone_number">本机号码一键登录</div>
  </div>
</template>

<script>
import login_content from "./children/login_content.vue";
import register_content from "./children/register_content.vue";

export default {
  name: "Login",
  components: {
    login_content,
    register_content,
  },
  data() {
    return {
      register: true,
      login: false,
      loginContent: login_content,
    };
  },
  methods: {
    goprofile() {
      this.$router.push("/profile");
    },
    tabChange(tabContent) {
      this.loginContent = tabContent;
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-color: #0086f6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login_title {
  width: 300px;
  height: 23px;
  position: absolute;
  top: 3.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back {
  width: 30px;
  height: 30px;
  background-image: url(assets/img/login/返回.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

.register {
  color: black;
  font-size: 20px;
  font-weight: 1000;
}

.third_party {
  width: 230px;
  height: 15px;
  position: absolute;
  top: 58%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.line_one {
  width: 59px;
  height: 0.5px;
  background-color: black;
}

#third_party {
  color: black;
  font-size: 13px;
}

.line_two {
  width: 59px;
  height: 0.5px;
  background-color: black;
}

.third_party_all {
  width: 282px;
  height: 71px;
  position: absolute;
  top: 66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.qq {
  width: 60px;
  height: 60px;
  background-image: url(assets/img/login/QQ.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.wechat {
  width: 60px;
  height: 60px;
  background-image: url(assets/img/login/微信.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.micro_blog {
  width: 60px;
  height: 60px;
  background-image: url(assets/img/login/微博.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.phone_number {
  width: 304px;
  height: 63px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  color: black;
  font-size: 18px;
  font-weight: 1000;
  text-align: center;
  line-height: 63px;
  position: absolute;
  top: 80%;
}
</style>
