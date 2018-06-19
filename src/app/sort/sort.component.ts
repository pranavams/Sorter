import {Component, OnInit} from '@angular/core';
import {BubbleSort} from './bubble.sort';

import {NgxMaskModule} from 'ngx-mask';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  private unSortedElements: number[];
  private bubbleSortedElements: number[];
  private unSortedValue: string;
  private tsSortTime: number;
  private tsSortedElements: number[];
  private bubbleSortTime: number;

  constructor() {}

  bubbleSort(tempArray) {
    const startTime = new Date().getMilliseconds();
    this.bubbleSortedElements = new BubbleSort().sort(tempArray);
    this.bubbleSortTime = new Date().getMilliseconds() - startTime;
  }

  defaultSort(tempArray) {
    const startTime = new Date().getMilliseconds();
    this.tsSortedElements = tempArray.sort();
    this.tsSortTime = new Date().getMilliseconds() - startTime;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  doSort() {
    this.unSortedElements = this.convertStringToIntArray(this.unSortedValue);
    const tempArray = this.unSortedElements.map(x => x);
    this.bubbleSort(tempArray);
    this.defaultSort(tempArray);
  }

  convertStringToIntArray(valueSeries: string) {
    return valueSeries
      .split(' ')
      .map((x) => parseFloat(x));
  }

  generateUnsorted(): string {
    this.unSortedValue = '';
    for (let i = 0; i < 1000; i ++) {
      this.unSortedValue = this.unSortedValue + ' ' + Math.round((Math.random() * 1000));
    }
    return this.unSortedValue;
  }

  ngOnInit() {
  }

}
