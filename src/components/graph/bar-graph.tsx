import * as echarts from 'echarts';
import { useRef } from "react"

export type GraphsConfig = {
  id?: string,
  data: {
    name: string,
    value: string,
    itemStyle?: any
  }[],
  config: {
    pallete?: string[],
    direction: string,
    showLegend: boolean,
    radious?: string[]
  }
}
export function BarGraph({ config, data }: GraphsConfig) {
  const wrapperGraph = useRef<HTMLDivElement>(null);

  if (!wrapperGraph.current || !data) return;

  const chart = echarts.init(wrapperGraph.current, null, {
    width: 500,
    height: 560
  });

  var yAxis;
  var xAxis;


  if (config.direction === 'horizontal') {
    yAxis = {
      type: 'category',
      data: data.map((item) => item.name)
    };
    xAxis = {
      type: 'value',
      grid: {
        show: false
      },
    };
  } else if (config.direction === 'vertical') {
    yAxis = {
      type: 'value',
      grid: {
        show: false
      },
    };
    xAxis = {
      type: 'category',
      data: data.map((item) => item.name)
    };
  }

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => `${params.seriesName}: ${params.value}`
    },
    grid: { containLabel: true, top: '10%', bottom: '10%' },
    yAxis: yAxis,
    xAxis: xAxis,
    series: [
      {
        type: 'bar',
        data: data.map((item) => ({
          value: item.value,

        })),
        label: {
          show: true,
          position: 'right',
          formatter: '{c}',
        }
      }
    ]
  };

  chart.setOption(option);
  chart.resize();

  return (
    <div ref={wrapperGraph}></div>
  )
}