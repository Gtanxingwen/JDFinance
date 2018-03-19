<template lang="html">
    <Panel title="有钱有车" :class="$style.panel">
        <section :class="$style.festival">
            <ul>
                <li>
                    <router-link :to="{ name: 'home'}">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17800/224/698056253/28974/d3ad0665/5aa0ec80N348451f8.png?width=375&height=233" alt="">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'home'}">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
                    </router-link>
                </li>
            </ul>
        </section>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in items" :key="item.img">
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  export default {
    components: {
      Panel
    },
    data() {
      return {
        items: [{
          img: '//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
          href: 'home',
          title: '旅游'
        },{
          img: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
          href: 'home',
          title: '医美'
        },{
          img: '//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
          href: 'home',
          title: '房抵贷'
        },{
          img: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
          href: 'home',
          title: '驾校'
        },{
          img: '//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
          href: 'home',
          title: '分期用'
        }]
      }
    }
  }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        .festival {
            ul {
                width: 100%;
                height: 223.1px;
                li {
                    float: left;
                    box-sizing: border-box;
                    width: 50%;
                    height: 100%;
                    a {
                        text-decoration: none;
                        display: inline-block;
                        width: 100%;
                        line-height: 1;
                        height: 100%;
                        img {
                            width: 100%;
                        }
                    }
                }
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
    }

</style>