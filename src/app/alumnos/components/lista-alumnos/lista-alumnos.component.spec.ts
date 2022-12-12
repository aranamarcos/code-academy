import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnosComponent } from './lista-alumnos.component';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaAlumnosComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ListaAlumnosComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
