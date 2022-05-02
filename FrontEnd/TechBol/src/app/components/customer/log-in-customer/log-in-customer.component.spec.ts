import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCustomerComponent } from './log-in-customer.component';

describe('LogInCustomerComponent', () => {
  let component: LogInCustomerComponent;
  let fixture: ComponentFixture<LogInCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
