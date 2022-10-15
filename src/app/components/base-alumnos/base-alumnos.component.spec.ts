import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAlumnosComponent } from './base-alumnos.component';

describe('BaseAlumnosComponent', () => {
  let component: BaseAlumnosComponent;
  let fixture: ComponentFixture<BaseAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
