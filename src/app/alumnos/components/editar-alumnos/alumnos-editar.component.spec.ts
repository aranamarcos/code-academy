import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosService } from '../../services/alumnos.service';

import { EditarAlumnosComponent } from './editar-alumnos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditarAlumnosComponent', () => {
  let component: EditarAlumnosComponent;
  let fixture: ComponentFixture<EditarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ EditarAlumnosComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
