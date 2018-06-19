import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSort } from './bubble.sort';

describe('BubbleSort', () => {
  it('should return sorted elements', () => {
    let unSortedElements:string[] = [4, 2, 1, 3];
    let actualSortedElements = new BubbleSort().sort(unSortedElements);
    let expectedSortedElements:string[] = [1, 2, 3, 4];
    expect(actualSortedElements).toEqual(expectedSortedElements);
  });

});
