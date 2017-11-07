import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSideComponent } from './customers-side.component';

describe('CustomersSideComponent', () => {
  let component: CustomersSideComponent;
  let fixture: ComponentFixture<CustomersSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
