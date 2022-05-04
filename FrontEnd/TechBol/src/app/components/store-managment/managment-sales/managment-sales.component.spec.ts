import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentSalesComponent } from './managment-sales.component';

describe('ManagmentSalesComponent', () => {
  let component: ManagmentSalesComponent;
  let fixture: ComponentFixture<ManagmentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
