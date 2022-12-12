import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlumnosComponent } from './detalle-alumnos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetalleAlumnosComponent', () => {
  let component: DetalleAlumnosComponent;
  let fixture: ComponentFixture<DetalleAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      declarations: [ DetalleAlumnosComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
