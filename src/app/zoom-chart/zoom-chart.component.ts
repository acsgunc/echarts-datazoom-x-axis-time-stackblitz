import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts, graphic, EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import dayjs from "dayjs";


// Define the component
@Component({
  selector: 'app-zoom-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './zoom-chart.component.html',
  styleUrl: './zoom-chart.component.css'
})
export class ZoomChartComponent {
  options = {
    xAxis: {
      type: 'time',
      min: '2024-08-04 00:00:00',
      max: '2024-08-04 02:00:00'
    },
    yAxis: {},
    series: [
      {
        data: [
          ['2024-08-04 00:00:00', 10],
          ['2024-08-04 00:30:00', 20],
          ['2024-08-04 01:00:00', 30],
          ['2024-08-04 01:30:00', 40],
          ['2024-08-04 02:00:00', 50]
        ],
        type: 'line'
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 50
      },
      {
        type: 'slider',
        start: 0,
        end: 50
      }
    ]
  };
}


