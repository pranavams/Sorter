import {Component, OnInit} from '@angular/core';
import {BubbleSort} from './bubble.sort';
import {InsertionSort} from './insertion.sort';
import {DefaultSort} from './default.sort';
import {MergeSort} from './merge.sort';

import {NgxMaskModule} from 'ngx-mask';

import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  private unSortedValue: string;
  private chart: Chart;
  private sortedValue: string;

  constructor() {
    this.chart = this.createDefaultChart();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  doSort() {
    const tempArray = this.convertStringToIntArray(this.unSortedValue).map(x => x);
    this.chart.addPoint(new DefaultSort(tempArray).getTimeTaken());
    this.chart.addPoint(new InsertionSort(tempArray).getTimeTaken());
    this.chart.addPoint(new MergeSort(tempArray).getTimeTaken());
    this.chart.addPoint(new BubbleSort(tempArray).getTimeTaken());
    this.sortedValue = '\nInsertion Sort [' + new InsertionSort(tempArray).sort() + ']';
    this.sortedValue = this.sortedValue + '\nMerge Sort [' + new MergeSort(tempArray).sort() + ']';
    this.sortedValue = this.sortedValue + '\nBubble Sort [' + new BubbleSort(tempArray).sort() + ']';
    this.sortedValue = this.sortedValue + '\nDefault Sort [' + new BubbleSort(tempArray).sort() + ']';
  }

  convertStringToIntArray(valueSeries: string) {
    return valueSeries
      .split(' ')
      .map((x) => parseFloat(x));
  }

  getRandomNumbers(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const maxValue = 100000000;
      this.unSortedValue = Math.round((Math.random() * maxValue)) + '';
      for (let i = 0; i < 10000; i++) {
        this.unSortedValue = this.unSortedValue + ' ' + Math.round((Math.random() * maxValue));
        this.unSortedValue = this.unSortedValue;
      }
      resolve(this.unSortedValue);
    });
  }

  generateUnsorted(): string {
    this.getRandomNumbers().then(
      (randomNumbers) => (this.unSortedValue = randomNumbers)
    );
    return this.unSortedValue;
  }

  createDefaultChart() {
    return new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sort Comparision'
      },

      xAxis: {
        title: {
          text: 'Sorting Algorithms'
        },
        categories: ['Default Sort', 'InsertionSort', 'Merge Sort', 'Bubble Sort']
      },

      yAxis: {
        title: {
          text: 'Milliseconds consumed to Sort'
        }
      },

      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: []
        },
      ]
    });

  }

  ngOnInit() {
  }

}
