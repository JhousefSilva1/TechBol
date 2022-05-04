import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentBillsComponent } from './managment-bills.component';

describe('ManagmentBillsComponent', () => {
  let component: ManagmentBillsComponent;
  let fixture: ComponentFixture<ManagmentBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
