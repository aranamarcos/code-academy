import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetalleComponent } from './alumnos-detalle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlumnosDetalleComponent', () => {
  let component: AlumnosDetalleComponent;
  let fixture: ComponentFixture<AlumnosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      declarations: [ AlumnosDetalleComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
