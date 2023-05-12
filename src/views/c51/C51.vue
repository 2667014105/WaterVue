
<template>
  <div>
    <el-card>
      <div id="linechart" style="height: 300px;"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import dayjs from 'dayjs'
import request from "@/util/request";
import C51 from '@/views/c51/C51Test.vue'

export default {

  data() {
    return {
      chart: null,
      xData: [],
      yData: [],
      maxLength: 10
    }
  },
  mounted() {
    this.initChart()
    if (this.xData.length < this.maxLength) {
      for (let i = 0; i < this.maxLength - this.xData.length; i++) {
        this.updateData(0)  // 补0
      }
    }
    this.timer = setInterval(async () => {
      await this.updateData()
    }, 1000)
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
    clearInterval(this.timer)
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('linechart'))
      this.chart.setOption({

        color: ['#32E5FF'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '30%',
          left: '10%',
          right: '10%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: [
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(20, 35, 87, 1)'
            }
          },
          boundaryGap: true, // 坐标两侧是否留白
          axisTick: {
            show: false  // 是否显示刻度线
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#FF44AA', // y 轴文字颜色
              formatter: '{value}  °C'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E6E6FA'  // y 轴轴线颜色
              }
            },
            splitLine: {
              lineStyle: {
                color: '#FFDEAD', //grid 区域中的分隔线颜色
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            type: 'value',
            name: '(摄氏度)',
            position: 'left',
            alignTicks: true,
            nameGap: 8,
            axisLine: {
              show: false  // 是否显示 y 轴轴线
            },
            axisLabel: {
              formatter: '{value}'
            },
            nameTextStyle: {
              padding: [0, 10, 8, 0] // 单位位置
            }
          }
        ],
        series: [
          {
            type: 'line',
            name: '折线图',
            data: [0,0,0,0,0,0,0,0,0,0],
            label: {
              show: true,
              position: 'top',
              formatter: '{c} °C',
              color: '#00DDAA',
              fontSize: '10px',
              fontFamily: 'ArialMT'
            },
            itemStyle: {
              color: '#FFE4E1', // 数据颜色
              gradientColorNum: 1
            },
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0.1,
                    color: 'rgba(6, 252, 254, 0.1) ' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(6, 252, 254, 0.5)' // 0% 处的颜色
                  },
                  {
                    offset: 0.7,
                    color: 'rgba(6, 252, 254, 0.3)' // 0% 处的颜色
                  },
                  {
                    offset: 0.9,
                    color: 'rgba(0,0,0, 0.1)' // 100% 处的颜色
                  }
                ]
              }
            }
          }]
      })
    },
    async updateData() {
      let c51 = await request.get("/c51/test");
      if (c51.data.code === 200) {
        // console.log(c51.data.msg);
        this.yData.push(c51.data.msg)

      } else {
        console.log(c51)
      }
      // this.yData.push(1)

      // this.xData.push(Date.now() - 950)
      this.xData.push( dayjs(Date.now()).format('HH:mm:ss'))
      if (this.yData.length > this.maxLength) {
        this.yData.shift()
        this.xData.shift()
      }
      this.chart.setOption({
        xAxis: {
          data: this.xData
        },
        series: [
          {
            data: this.yData
          }
        ]
      })
      // console.log(this.xData + " " + this.yData)
    }
  }
}
</script>
