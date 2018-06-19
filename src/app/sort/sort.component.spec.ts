import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return array of elements', () => {
    let expectedArray: number[] = [1, 2, 3, 4, 55, 66];
    expect(component.convertStringToIntArray ('1 2 3 4 55 66').equals(expectedArray))    
  });
  
  it('should generate random string', () => {
    
    expect(component.generateUnsorted().length).greaterThan(0);
    
  )};

});
