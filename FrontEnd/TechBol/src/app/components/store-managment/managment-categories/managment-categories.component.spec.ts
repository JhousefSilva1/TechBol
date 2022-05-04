import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentCategoriesComponent } from './managment-categories.component';

describe('ManagmentCategoriesComponent', () => {
  let component: ManagmentCategoriesComponent;
  let fixture: ComponentFixture<ManagmentCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
