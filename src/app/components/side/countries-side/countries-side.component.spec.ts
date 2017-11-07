import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSideComponent } from './countries-side.component';

describe('CountriesSideComponent', () => {
  let component: CountriesSideComponent;
  let fixture: ComponentFixture<CountriesSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
