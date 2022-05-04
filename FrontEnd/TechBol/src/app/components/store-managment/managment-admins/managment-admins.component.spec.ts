import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentAdminsComponent } from './managment-admins.component';

describe('ManagmentAdminsComponent', () => {
  let component: ManagmentAdminsComponent;
  let fixture: ComponentFixture<ManagmentAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
