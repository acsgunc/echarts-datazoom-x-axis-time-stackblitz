import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatazoomExampleComponent } from './datazoom-example/datazoom-example.component';
import { ZoomChartComponent } from './zoom-chart/zoom-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DatazoomExampleComponent, ZoomChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
