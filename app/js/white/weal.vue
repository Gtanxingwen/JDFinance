<template lang="html">
    <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送百元礼包</p>
                </div>
                <em>立即查看 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额 > </em>
            </div>
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
        .content {
            @include flex;
            .item {
                height: 140px;
                position: relative;
                &:before {
                    content: '';
                    width: 100%;
                    height: 0;
                    box-sizing: border-box;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-top: 1px solid #eee;

                }
                img {
                    float: left;
                    width: 88px;
                    height: 88px;
                    display: block;
                    margin: 24px 32px 0;
                }
                >div {
                    float: left;
                    height: 88px;
                    line-height: 88px;
                    margin-top: 26px;
                    >h4 {
                        font-size: 32px;
                        color: #333;
                        line-height: 1.8;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    >p {
                        font-size: 24px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        line-height: 1.1;
                        color: #999;
                     }
                }
                >em {
                    float: right;
                    height: 88px;
                    line-height: 88px;
                    font-size: 28px;
                    margin-top: 26px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #ff801a;
                    padding: 0 32px 0 20px;
                }
            }
        }
    }
</style>