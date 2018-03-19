<template lang="html">
    <div :class="$style.header">
        <span :class="$style.left">
            <router-link :to="{name: ''}">注册</router-link>
            |
            <router-link :to="{name: ''}">登录</router-link>
        </span>
        <btn :class="$style.right">
            <router-link :to="{name: 'download'}">
                APP下载
            </router-link>
        </btn>
    </div>
</template>

<script>
  import btn from '../core/btn.vue';
  export default {
    components: {
      btn
    }
  }
</script>

<style lang="scss" module>
    .header {
        color: #666;
        font-size: 28px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        background: #fff url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
        background-size: auto 50%;
        line-height: 100px;
        z-index: 100;
        height: 100px;
        .left {
            height: 30px;
            line-height: 30px;
            margin: 18px 0 0 24px;
            a {
                font-size: 28px;
                color: #666;
            }
        }
        .right {
            float: right;
            border-width: 0;
            height: 56px;
            line-height: 56px;
            min-width: 120px;
            padding: 0;
            border-radius: 4px;
            margin: 28px 24px 0 0;
            a {
                display: block;
                text-decoration: none;
                font-size: 24px;
                color: inherit;
            }
        }
    }
</style>