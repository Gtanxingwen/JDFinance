<template lang="html">
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :options="options" :cName="$style.slider"/>
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
          href: 'white',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320'
        }],
        options: {

        }
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