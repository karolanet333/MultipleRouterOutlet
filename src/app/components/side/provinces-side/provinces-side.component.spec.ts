import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincesSideComponent } from './provinces-side.component';

describe('ProvincesSideComponent', () => {
  let component: ProvincesSideComponent;
  let fixture: ComponentFixture<ProvincesSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincesSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
