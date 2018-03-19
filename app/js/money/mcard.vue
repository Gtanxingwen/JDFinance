<template lang="html">
    <Panel title="信用卡片" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{ name: 'money'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
            </router-link>
        </section>
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
        >h4 {
           display: none;
        }
        .content {
           a {
                display: block;
                img {
                    width: 100%;
                }
           }

        }
    }
</style>