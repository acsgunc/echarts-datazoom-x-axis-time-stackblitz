import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts, graphic, EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import dayjs from "dayjs";

@Component({
  selector: 'app-datazoom-example',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './datazoom-example.component.html',
  styleUrl: './datazoom-example.component.css',
})
export class DatazoomExampleComponent {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    // Simulated data for two hours, one data point per minute
    const now = Math.floor(Date.now() / 1000);
    const data = [];
    for (let i = 0; i < 120; i++) {
      data.push([now - (120 - i) * 60, Math.random() * 100]);
    }

    console.log('data', data);

    // Determine the start and end values for the last hour
    const startValue = now - 60 * 60; // One hour ago
    const endValue = now; // Now

    const option = {
      title: {
        text: 'DataZoom Example with Unix Time',
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const date = new Date(params[0].value[0] * 1000);
          console.log(date, params[0].value[0])
          return `Time: ${dayjs(date).format(
            'h:mm:ss'
          )}<br/>value: ${params[0].value[1].toFixed(
            2
          )}`;
        },
      },
      xAxis: {
        type: 'time',
        axisLabel: {
          formatter: (value: number) => {
            const date = new Date(value*1000);
            return `${dayjs(date).format(
              'h:mm:ss'
            )}`;
          },
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          data: data,
        },
      ],
      dataZoom: [
        {
          zoomOnMouseWheel: true,
          type: 'inside',
          startValue: startValue * 1000, // Convert to milliseconds
          endValue: endValue * 1000, // Convert to milliseconds
        },
      ],
    };

    myChart.setOption(option);
  }
}
