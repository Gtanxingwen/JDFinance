<template lang="html">
    <article class="">
        <Slider :items="items" :cName="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
  import Slider from '../core/slider.vue'
  export default {
    data() {
      return {
        items: [{
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t14554/135/2425649982/36377/877a7f5a/5a9e74fdNa65625e2.jpg?width=750&height=320'
        },{
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t14815/202/2383106816/47183/c50f2bfd/5a9e754eNe283d841.jpg?width=750&height=320'
        },{
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t15013/216/2393741798/48095/4cce9527/5a9e756eN781b28b5.jpg?width=750&height=320'
        },{
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t19126/149/685129191/34011/59334e67/5a9e752fNfb1b27d4.jpg?width=750&height=320'
        }],
        enters: [{
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        },{
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领红包'
        },{
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },{
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }]
      }
    },
    components: {
      Slider,
    }
  }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider {
        margin-top: 120px;
        img {
            width: 100%;
        }
    }
    .list {
        @include list(row);
        background: #fff;
        padding: 40px 0 20px;
        justify-content: space-around;
        a {
            text-decoration: none;
        }
        .item {
            text-align: center;
            img {
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4 {
                font-size: 26px;
                color: #666;
                margin-top: 12px;
            }
        }
    }
</style>