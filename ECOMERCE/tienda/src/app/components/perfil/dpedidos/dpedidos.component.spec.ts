import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpedidosComponent } from './dpedidos.component';

describe('DpedidosComponent', () => {
  let component: DpedidosComponent;
  let fixture: ComponentFixture<DpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
