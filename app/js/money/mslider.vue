<template lang="html">
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cName="$style.slider"/>
        </section>
    </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  import Slider from '../core/slider.vue'
  export default {
    data() {
      return {
        items: [{
          href: 'money',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400'
        },{
          href: 'money',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400'
        },{
          href: 'money',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400'
        }]
      }
    },
    components: {
      Slider,
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
             .slider {
                margin-top: 120px;
                img {
                    width: 100%;
                }
             }
         }

    }

</style>