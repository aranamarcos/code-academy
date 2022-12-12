import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInscripcionesComponent } from './agregar-inscripciones.component';

describe('AgregarInscripcionesComponent', () => {
  let component: AgregarInscripcionesComponent;
  let fixture: ComponentFixture<AgregarInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
