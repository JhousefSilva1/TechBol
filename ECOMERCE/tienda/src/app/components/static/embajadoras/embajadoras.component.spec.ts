import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbajadorasComponent } from './embajadoras.component';

describe('EmbajadorasComponent', () => {
  let component: EmbajadorasComponent;
  let fixture: ComponentFixture<EmbajadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbajadorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbajadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
