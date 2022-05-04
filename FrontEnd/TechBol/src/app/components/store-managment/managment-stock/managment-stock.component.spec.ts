import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentStockComponent } from './managment-stock.component';

describe('ManagmentStockComponent', () => {
  let component: ManagmentStockComponent;
  let fixture: ComponentFixture<ManagmentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
