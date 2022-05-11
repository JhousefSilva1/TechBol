import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPagoComponent } from './verify-pago.component';

describe('VerifyPagoComponent', () => {
  let component: VerifyPagoComponent;
  let fixture: ComponentFixture<VerifyPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
