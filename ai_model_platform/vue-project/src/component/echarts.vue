<template>
  <div class="echart_container">
    <div ref="myloss" class="chart"></div>
    <div ref="accuracy" class="chart"></div>
    <div ref="recall" class="chart"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from "vue";
import {useDataStore} from "../store/data";

const data_store = useDataStore();
//通过inject使用echarts
const echarts = inject("echarts");
const myloss = ref();
const accuracy = ref();
const recall = ref();
function draw_echart(){
  let loss1 = echarts.init(myloss.value)
  let accuracy1 = echarts.init(accuracy.value)
  let recall1 = echarts.init(recall.value)
  let lossData = [1.81818182, 1.66666667, 1.53846154, 1.42857143, 1.33333333,
    1.25      , 1.17647059, 1.11111111, 1.05263158, 1.        ,
    0.95238095, 0.90909091, 0.86956522, 0.83333333, 0.8       ,
    0.76923077, 0.74074074, 0.71428571, 0.68965517, 0.66666667,
    0.64516129, 0.625     , 0.60606061, 0.58823529, 0.57142857,
    0.55555556, 0.54054054, 0.52631579, 0.51282051, 0.5       ,
    0.48780488, 0.47619048, 0.46511628, 0.45454545, 0.44444444,
    0.43478261, 0.42553191, 0.41666667, 0.40816327, 0.4       ,
    0.39215686, 0.38461538, 0.37735849, 0.37037037, 0.36363636,
    0.35714286, 0.35087719, 0.34482759, 0.33898305, 0.33333333,
    0.32786885, 0.32258065, 0.31746032, 0.3125    , 0.30769231,
    0.3030303 , 0.29850746, 0.29411765, 0.28985507, 0.28571429,
    0.28169014, 0.27777778, 0.2739726 , 0.27027027, 0.26666667,
    0.26315789, 0.25974026, 0.25641026, 0.25316456, 0.25      ,
    0.24691358, 0.24390244, 0.24096386, 0.23809524, 0.23529412,
    0.23255814, 0.22988506, 0.22727273, 0.2247191 , 0.22222222,
    0.21978022, 0.2173913 , 0.21505376, 0.21276596, 0.21052632,
    0.20833333, 0.20618557, 0.20408163, 0.2020202 , 0.2       ].slice(0, 100);
  let accuracyData = [0.01212843, 0.01338692, 0.01477403, 0.0163025 , 0.01798621,
    0.01984031, 0.02188127, 0.02412702, 0.02659699, 0.02931223,
    0.03229546, 0.03557119, 0.03916572, 0.04310725, 0.04742587,
    0.05215356, 0.05732418, 0.06297336, 0.06913842, 0.07585818,
    0.0831727 , 0.09112296, 0.09975049, 0.10909682, 0.11920292,
    0.13010847, 0.14185106, 0.15446527, 0.16798161, 0.18242552,
    0.19781611, 0.21416502, 0.23147522, 0.24973989, 0.26894142,
    0.2890505 , 0.31002552, 0.33181223, 0.35434369, 0.37754067,
    0.40131234, 0.42555748, 0.450166  , 0.47502081, 0.5       ,
    0.52497919, 0.549834  , 0.57444252, 0.59868766, 0.62245933,
    0.64565631, 0.66818777, 0.68997448, 0.7109495 , 0.73105858,
    0.75026011, 0.76852478, 0.78583498, 0.80218389, 0.81757448,
    0.83201839, 0.84553473, 0.85814894, 0.86989153, 0.88079708,
    0.89090318, 0.90024951, 0.90887704, 0.9168273 , 0.92414182,
    0.93086158, 0.93702664, 0.94267582, 0.94784644, 0.95257413,
    0.95689275, 0.96083428, 0.96442881, 0.96770454, 0.97068777,
    0.97340301, 0.97587298, 0.97811873, 0.98015969, 0.98201379,
    0.9836975 , 0.98522597, 0.98661308, 0.98787157, 0.98901306].slice(0, 100);
  let recallData = [-1.13797860e-15,  4.00000000e-02,  7.91836735e-02,  1.17551020e-01,
    1.55102041e-01,  1.91836735e-01,  2.27755102e-01,  2.62857143e-01,
    2.97142857e-01,  3.30612245e-01,  3.63265306e-01,  3.95102041e-01,
    4.26122449e-01,  4.56326531e-01,  4.85714286e-01,  5.14285714e-01,
    5.42040816e-01,  5.68979592e-01,  5.95102041e-01,  6.20408163e-01,
    6.44897959e-01,  6.68571429e-01,  6.91428571e-01,  7.13469388e-01,
    7.34693878e-01,  7.55102041e-01,  7.74693878e-01,  7.93469388e-01,
    8.11428571e-01,  8.28571429e-01,  8.44897959e-01,  8.60408163e-01,
    8.75102041e-01,  8.88979592e-01,  9.02040816e-01,  9.14285714e-01,
    9.25714286e-01,  9.36326531e-01,  9.46122449e-01,  9.55102041e-01,
    9.63265306e-01,  9.70612245e-01,  9.77142857e-01,  9.82857143e-01,
    9.87755102e-01,  9.91836735e-01,  9.95102041e-01,  9.97551020e-01,
    9.99183673e-01,  1.00000000e+00,  1.00000000e+00,  9.99183673e-01,
    9.97551020e-01,  9.95102041e-01,  9.91836735e-01,  9.87755102e-01,
    9.82857143e-01,  9.77142857e-01,  9.70612245e-01,  9.63265306e-01,
    9.55102041e-01,  9.46122449e-01,  9.36326531e-01,  9.25714286e-01,
    9.14285714e-01,  9.02040816e-01,  8.88979592e-01,  8.75102041e-01,
    8.60408163e-01,  8.44897959e-01,  8.28571429e-01,  8.11428571e-01,
    7.93469388e-01,  7.74693878e-01,  7.55102041e-01,  7.34693878e-01,
    7.13469388e-01,  6.91428571e-01,  6.68571429e-01,  6.44897959e-01,
    6.20408163e-01,  5.95102041e-01,  5.68979592e-01,  5.42040816e-01,
    5.14285714e-01,  4.85714286e-01,  4.56326531e-01,  4.26122449e-01,
    3.95102041e-01,  3.63265306e-01].slice(0, 100);
  let option = {
    xAxis: {
      type: "category",
      name: "次数"
    },
    yAxis: {
      type: "value",
      name: "loss"
    },
    series: [
      {
        data: lossData,
        type: "line"
      }
    ],
    grid: {
      top: '15%',    // 可以调整这些值来拉伸纵轴
      bottom: '15%',
      left: '15%',
      right: '15%'
    },
  };
  let option1 = {
    xAxis: {
      type: "category",
      name: "次数"
    },
    yAxis: {
      type: "value",
      name: "准确度"
    },
    series: [
      {
        data: accuracyData,
        type: "line"
      }
    ],
    grid: {
      top: '15%',    // 可以调整这些值来拉伸纵轴
      bottom: '15%',
      left: '15%',
      right: '15%'
    },
  };
  let option2 = {
    xAxis: {
      type: "category",
      name: "次数"
    },
    yAxis: {
      type: "value",
      name: "F1"
    },
    series: [
      {
        data: recallData,
        type: "line"
      }
    ],
    grid: {
      top: '20%',    // 可以调整这些值来拉伸纵轴
      bottom: '15%',
      left: '15%',
      right: '28%'
    },
  };
  loss1.setOption(option);
  accuracy1.setOption(option1);
  recall1.setOption(option2);
}
onMounted(() => {

  // echarts
  let sleep2 = (time) => new Promise((resolve) => {
    setTimeout(resolve, time)
  })
  sleep2(480000).then(draw_echart);

});

</script>
<style>
.echart_container {
  width: 120%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart {
  width: 80%;
  height: 40%; /* 增加了高度 */
  margin-bottom: 10px; /* 可以添加一些间隔 */
  margin-bottom: 10px; /* 可以添加一些间隔 */
}
</style>
