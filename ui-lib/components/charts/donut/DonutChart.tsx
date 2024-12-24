"use client";
import React from "react";
import * as echarts from "echarts";

type ChartData = {
  entity: string;
  value: number;
};
export type DonutChartProps = {
  data: ChartData[];
  colors?: string[];
  height?: number;
  width?: number;
};
type EChartsOption = echarts.EChartsOption;

/*
  TODO: Include more  options, like tooltip modification, labels display options
  Chart is implemented based on the default configuration
*/

export default function DonutChart({
  data,
  colors = ["#fc9054", "#9457f5"],
  height = 250,
  width = 300,
}: DonutChartProps) {
  const chartRef = React.useRef<HTMLDivElement>(null);
  const chartId = React.useId();
  React.useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    if (chartRef.current) {
      chartInstance.clear();
      chartInstance = echarts.init(chartRef.current);
      const option: EChartsOption = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: data.map(({ value, entity }, index) => ({
              name: entity,
              value,
              itemStyle: {
                color: colors[index % colors.length],
              },
            })),
          },
        ],
      };
      chartInstance.setOption(option);
    }
    const resizeChart = () => {
      chartInstance.resize();
    };
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chartInstance.dispose();
    };
  }, [data, colors]);
  return (
    <div id={chartId} ref={chartRef} style={{ width, height: `${height}px` }} />
  );
}
