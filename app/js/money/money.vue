<template lang="html">
    <Panel :class="$style.panel" title="理财精选">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{item.title}}<span>{{item.subTitle}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
  import Panel from '../core/panel.vue'
  export default {
    components: {
      Panel,
    },
    data() {
      return {
        items: [{
          title: '定期理财',
          subTitle: '90天可质押',
          rate: '5.50%',
          text: '历史年化结算利率'
        },{
          title: '小白理财',
          subTitle: '理财推荐',
          rate: '5.80%',
          text: '综合年华收益率'
        },{
          title: '基智账户',
          subTitle: '组合投资',
          rate: '8%-10%',
          text: '止盈年化收益率'
        },{
          title: '小白基金',
          subTitle: '超短期',
          rate: '5.00%',
          text: '7日年化收益率'
        }]
      }
    }
  }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        .content {
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 0;
                box-sizing: border-box;
                border-top: 1px solid #ddd;
                position: relative;
                top: -218px;
            }
            flex-warp: warp;
            .item {
                position: relative;
                box-sizing: border-box;
                width: 50%;
                height: 218px;
                padding-left: 34px;
                &:after {
                    content: '';
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    box-sizing: border-box;
                    top: 50%;
                    right: 0;
                    margin-top: -68px;
                    border-right: 1px solid #eee;
                }
                &:nth-child(2n) {
                    &:after {
                         display: none;
                    }
                }
                dt {
                    font-size: 30px;
                    line-height: 42px;
                    color: #333;
                    margin: 34px 0 16px;
                    span {
                        font-size: 22px;
                        color: #ff5155;
                        border: 1px solid #ff5155;
                        padding: 0 8px;
                        vertical-align: 1px;
                        margin-left: 2px;
                    }
                }
                dd {
                    &:nth-child(2) {
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #ff5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3) {
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                     }
                }
            }
        }
    }
</style>