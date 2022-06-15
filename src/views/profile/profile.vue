<template>
  <div class="profile">
    <div class="title">个人中心</div>

    <div class="content one">
      <div id="head">
        <div>{{ this.$store.state.UserAvatar }}</div>
      </div>
      <div id="login" @click="gologin">{{ this.$store.state.UserName }}</div>
      <div id="setting" @click="gosetting"></div>
    </div>

    <div class="content two">
      <div class="collection" @click="gocollection">
        <div id="collection_img"></div>
        <div id="collection_p">收藏</div>
      </div>
      <div class="message" @click="gomessage">
        <div id="message_img"></div>
        <div id="message_p">消息</div>
      </div>
    </div>

    <div class="content three">
      <div class="order">订单</div>
      <div class="order_all" @click="goorder">全部</div>
      <div class="order_button">
        <div
          class="to_be_paid"
          @click="
            tabChange('to_be_paid'),
              (change_one = false),
              (change_two = true),
              (change_three = true),
              (change_four = false),
              (change_five = true),
              (change_six = false),
              (change_seven = true),
              (change_eight = false),
              (scroll_one = true),
              (scroll_two = false),
              (scroll_three = false),
              (scroll_four = false)
          "
        >
          <div class="to_be_paid_img" v-if="change_one"></div>
          <div class="to_be_paid_p" v-if="change_one">待支付</div>
          <div class="to_be_paid_img img_blue_paid" v-if="change_two"></div>
          <div class="to_be_paid_p p_blue_paid" v-if="change_two">待支付</div>
        </div>
        <div
          class="to_be_shipped"
          @click="
            tabChange('to_be_shipped'),
              (change_one = true),
              (change_two = false),
              (change_three = false),
              (change_four = true),
              (change_five = true),
              (change_six = false),
              (change_seven = true),
              (change_eight = false),
              (scroll_one = false),
              (scroll_two = true),
              (scroll_three = false),
              (scroll_four = false)
          "
        >
          <div class="to_be_shipped_img" v-if="change_three"></div>
          <div class="to_be_shipped_p" v-if="change_three">待发货</div>
          <div
            class="to_be_shipped_img img_blue_shipped"
            v-if="change_four"
          ></div>
          <div class="to_be_shipped_p p_blue_shipped" v-if="change_four">
            待发货
          </div>
        </div>
        <div
          class="to_be_received"
          @click="
            tabChange('to_be_received'),
              (change_one = true),
              (change_two = false),
              (change_three = true),
              (change_four = false),
              (change_five = false),
              (change_six = true),
              (change_seven = true),
              (change_eight = false),
              (scroll_one = false),
              (scroll_two = false),
              (scroll_three = true),
              (scroll_four = false)
          "
        >
          <div class="to_be_received_img" v-if="change_five"></div>
          <div class="to_be_received_p" v-if="change_five">待收货</div>
          <div
            class="to_be_received_img img_blue_received"
            v-if="change_six"
          ></div>
          <div class="to_be_received_p p_blue_received" v-if="change_six">
            待收货
          </div>
        </div>
        <div
          class="to_be_evaluated"
          @click="
            tabChange('to_be_evaluated'),
              (change_one = true),
              (change_two = false),
              (change_three = true),
              (change_four = false),
              (change_five = true),
              (change_six = false),
              (change_seven = false),
              (change_eight = true),
              (scroll_one = false),
              (scroll_two = false),
              (scroll_three = false),
              (scroll_four = true)
          "
        >
          <div class="to_be_evaluated_img" v-if="change_seven"></div>
          <div class="to_be_evaluated_p" v-if="change_seven">待评价</div>
          <div
            class="to_be_evaluated_img img_blue_evaluated"
            v-if="change_eight"
          ></div>
          <div class="to_be_evaluated_p p_blue_evaluated" v-if="change_eight">
            待评价
          </div>
        </div>
      </div>
      <div class="scroll_bar scroll_one" v-if="scroll_one"></div>
      <div class="scroll_bar scroll_two" v-if="scroll_two"></div>
      <div class="scroll_bar scroll_three" v-if="scroll_three"></div>
      <div class="scroll_bar scroll_four" v-if="scroll_four"></div>
      <div class="order_content" :is="orderContent"></div>
    </div>
  </div>
</template>

<script>
import to_be_paid from "./order_content/to_be_paid.vue";
import to_be_shipped from "./order_content/to_be_shipped.vue";
import to_be_received from "./order_content/to_be_received.vue";
import to_be_evaluated from "./order_content/to_be_evaluated.vue";

export default {
  name: "Profile",
  components: {
    to_be_paid,
    to_be_shipped,
    to_be_received,
    to_be_evaluated,
  },
  data() {
    return {
      orderContent: "to_be_paid",
      change_one: false,
      change_two: true,
      change_three: true,
      change_four: false,
      change_five: true,
      change_six: false,
      change_seven: true,
      change_eight: false,
      scroll_one: true,
      scroll_two: false,
      scroll_three: false,
      scroll_four: false,
    };
  },
  methods: {
    gologin() {
      this.$router.push("/login");
    },
    gosetting() {
      this.$router.push("/setting");
    },
    gocollection() {
      this.$router.push("/collection");
    },
    gomessage() {
      this.$router.push("/message");
    },
    goorder() {
      this.$router.push("/order");
    },
    tabChange(tabContent) {
      this.orderContent = tabContent;
    },
  },
};
</script>

<style scoped>
.profile {
  height: 100vh;
  background-image: url(assets/img/profile/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100%;
  font-size: 20px;
  font-weight: 1000;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 2%;
}

.content {
  width: 328px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  position: absolute;
}

.one {
  height: 83px;
  top: 7.8%;
}

#head {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  /* background-image: url(assets/img/profile/游客.png);
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: #eeeeee;
  position: absolute;
  top: 16px;
  left: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 1000;
}

#login {
  font-size: 18px;
  color: #333333;
  position: absolute;
  top: 32px;
  left: 89px;
}

#setting {
  width: 45px;
  height: 45px;
  background-image: url(assets/img/profile/设置.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px;
  left: 263px;
}

.two {
  height: 96px;
  top: 22.6%;
}

.collection {
  width: 129px;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 24px;
  position: relative;
}

#collection_img {
  width: 50px;
  height: 50px;
  background-image: url(assets/img/profile/收藏.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 2px;
  left: 15px;
}

#collection_p {
  font-size: 18px;
  color: #333333;
  position: absolute;
  top: 18px;
  left: 72px;
}

.message {
  width: 129px;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 174px;
}

#message_img {
  width: 50px;
  height: 50px;
  background-image: url(assets/img/profile/消息.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 4px;
  left: 17px;
}

#message_p {
  font-size: 18px;
  color: #333333;
  position: absolute;
  top: 19px;
  left: 74px;
}

.three {
  height: 326px;
  top: 39.4%;
}

.order {
  font-size: 15px;
  color: #333333;
  position: absolute;
  top: 7px;
  left: 19px;
}

.order_all {
  font-size: 15px;
  color: #333333;
  position: absolute;
  top: 7px;
  left: 278px;
}

.order_button {
  width: 328px;
  height: 70px;
  border-top: 1px solid #0086f6;
  border-bottom: 1px solid #0086f6;
  position: absolute;
  top: 29px;
  font-size: 15px;
  color: #333333;
}

.to_be_paid {
  width: 55px;
  height: 62px;
  position: absolute;
  top: 0px;
  left: 19px;
  position: relative;
}

.to_be_paid_img {
  width: 41px;
  height: 38px;
  background-image: url(assets/img/profile/待支付-黑.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 5px;
  left: 7px;
}

.img_blue_paid {
  background-image: url(assets/img/profile/待支付-蓝.svg);
}

.to_be_paid_p {
  position: absolute;
  top: 45px;
  left: 4px;
}

.p_blue_paid {
  color: #0086f6;
}

.to_be_shipped {
  width: 55px;
  height: 62px;
  position: absolute;
  top: 0px;
  left: 97px;
}

.to_be_shipped_img {
  width: 41px;
  height: 40px;
  background-image: url(assets/img/profile/待发货-黑.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 5px;
  left: 9px;
}

.img_blue_shipped {
  background-image: url(assets/img/profile/待发货-蓝.svg);
}

.to_be_shipped_p {
  position: absolute;
  top: 45px;
  left: 4px;
}

.p_blue_shipped {
  color: #0086f6;
}

.to_be_received {
  width: 55px;
  height: 62px;
  position: absolute;
  top: 0px;
  left: 175px;
}

.to_be_received_img {
  width: 48px;
  height: 45px;
  background-image: url(assets/img/profile/待收货-黑.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 2px;
  left: 3px;
}

.img_blue_received {
  background-image: url(assets/img/profile/待收货-蓝.svg);
}

.to_be_received_p {
  position: absolute;
  top: 45px;
  left: 4px;
}

.p_blue_received {
  color: #0086f6;
}

.to_be_evaluated {
  width: 55px;
  height: 62px;
  position: absolute;
  top: 0px;
  left: 253px;
}

.to_be_evaluated_img {
  width: 41px;
  height: 42px;
  background-image: url(assets/img/profile/待评价-黑.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 4px;
  left: 7px;
}

.img_blue_evaluated {
  background-image: url(assets/img/profile/待评价-蓝.svg);
}

.to_be_evaluated_p {
  position: absolute;
  top: 45px;
  left: 4px;
}

.p_blue_evaluated {
  color: #0086f6;
}

.scroll_bar {
  width: 60px;
  height: 6px;
  background-color: #0086f6;
  border-radius: 10px;
  position: absolute;
  top: 99px;
}

.scroll_one {
  left: 16px;
}

.scroll_two {
  left: 94px;
}

.scroll_three {
  left: 172px;
}

.scroll_four {
  left: 250px;
}

.order_content {
  width: 300px;
  height: 190px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 117px;
  left: 14px;
}
</style>
