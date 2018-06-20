import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSort } from './insertion.sort';

describe('InsertionSort', () => {
  it('should return sorted elements', () => {
    let unSortedElements:string[] = [4, 2, 1, 3];
    let actualSortedElements = new InsertionSort().sort(unSortedElements);
    let expectedSortedElements:string[] = [1, 2, 3, 4];
    expect(actualSortedElements).toEqual(expectedSortedElements);
  });

});
