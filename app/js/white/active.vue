<template lang="html">
    <Panel title="精品活动" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'white' }">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'white' }">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264" alt="">
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  export default {
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        .content {
            width: 100%;
            height: 264px;
            @include flex(row);
            li {
                width: 50%;
                height: 100%;
                a {
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                    display: block;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>