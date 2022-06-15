<template>
<div class="biggestBox">
  <ul>
  <!-- data-type=0 隐藏删除按钮 data-type=1 显示删除按钮 -->
    <li class="li_vessel"  data-type="0">
    <!-- "touchstart" 当手指触摸屏幕时候触发  "touchend"  当手指从屏幕上离开的时候触发  "capture" 用于事件捕获-->
      <div @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="oneself">
        <div class="contant">
          <div id="shop-item">
            <div class="item-selector">
              <CheckButton :isChecked='this.$store.state.is_checked' @click="checked_change()"/>
            </div>
            <div class="item-img">
              <img :src="itemInfo.image_url" alt="商品图片" @click="checked_change()">
            </div>
            <div class="item-info">
              <div class="item-title">{{itemInfo.title}}</div>
              <div class="item-desc">{{itemInfo.desc}}</div>
              <div class="item-bottom">
                <div class="item-price left">￥{{itemInfo.price}}</div>
                <div class="item-count right">x{{itemInfo.count}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="removeBtn" @click="remove" :data-index="index">删除</div>
    </li>
  </ul>
</div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
  import { remove_cart } from "network/cart";

   export default{
    name:"CartListItem",
    components:{
      CheckButton
    },
    props:{
      itemInfo:{
        type:Object,
        default(){
          return {}
        }
      },
      index:{
        type:Number,
        default(){
          return 0
        }
      },
      list:{
        type:Array,
        default(){
          return []
        }
      },
  },
    methods:{
    checked_change() {
      // console.log(1);
        this.isChecked = !this.isChecked
        if (!this.isChecked) {
          this.$store.commit("total_price_min", Number(this.itemInfo.price));
        } else {
          this.$store.commit("total_price_add", Number(this.itemInfo.price));
        }
      },
      // 向左滑动出现删除按钮时，点击商品信息区域取消删除
      oneself() {
        if (this.checkSlide()) {
          this.restSlide();
        } else {
          // 点击商品信息弹出弹框
          // console.log("点击当前商品触发事件...");
        }
      },
      //滑动开始
      touchStart(e) {
        // 记录初始位置
        this.startX = e.touches[0].clientX;
      },
      //滑动结束
      touchEnd(e) {
        // 当前滑动的父级元素
        let parentElement = e.currentTarget.parentElement;
        // 记录结束位置
        this.endX = e.changedTouches[0].clientX;
        // 左滑大于30距离删除出现
        if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
          this.restSlide();
          parentElement.dataset.type = 1;
        }
        // 右滑
        if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
          this.restSlide();
          parentElement.dataset.type = 0;
        }
        this.startX = 0;
        this.endX = 0;
      },
      //判断当前是否有滑块处于滑动状态
      checkSlide() {
        let listItems = document.querySelectorAll(".li_vessel");
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].dataset.type == 1) {
            return true;
          }
        }
        return false;
      },
      //复位滑动状态
      restSlide() {
        let listItems = document.querySelectorAll(".li_vessel");
        // 复位
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].dataset.type = 0;
        }
      },

      remove() {

        let index = this.index;
        // 复位
        this.restSlide();
        let number = this.$store.state.number;
        let price = this.itemInfo.price;
        this.list.splice(index, 1);
        number--;
        this.$store.commit("total_number_change", number);
        this.$store.commit("total_price_min", price);
        // console.log(this.itemInfo.id);
        remove_cart(this.itemInfo.id)
      },
    },
  data() {
    return {
      isChecked: this.$store.state.is_checked,
      startX: 0, //滑动开始
      endX: 0, //滑动结束
    }
  },
  
  }
</script>

<style scoped>
  #shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 10px;
  }

  .item-img{
    padding: 5px;
    /* border:1px solid #ccc; */
  }
  
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .info-bottom{
    margin-top: 30px;
    top:30px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price{
    color: orangered;
  }

.biggestBox {
    overflow: hidden;
    background-color: #fff;
    width: 93%;
    margin: 10px auto;
    border-radius: 10px;
    margin-top: 10px;
    
    /*超出部分隐藏*/
  }
 
  .li_vessel {
    /* 全部样式 0.2秒 缓动*/
    transition: all 0.2s;
  }

  /* =0隐藏 */
  .li_vessel[data-type="0"] {
    transform: translate3d(0, 0, 0);
  }

  /* =1显示 */
  .li_vessel[data-type="1"] {
    /* -64px 设置的越大可以左滑的距离越远，最好与下面删除按钮的宽度以及定位的距离设置一样的值*/
    transform: translate3d(-64px, 0, 0);
  }

  /* 删除按钮 */
  .li_vessel .removeBtn {
    width: 64px;
    height: 121px;
    background: #ff4949;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    position: absolute;
    top: 0px;
    right: -64px;
    line-height: 121px;
    text-align: center;
    border-radius: 2px;
  }
</style>