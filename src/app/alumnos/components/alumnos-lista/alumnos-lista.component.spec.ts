import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListaComponent } from './alumnos-lista.component';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlumnosListaComponent', () => {
  let component: AlumnosListaComponent;
  let fixture: ComponentFixture<AlumnosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AlumnosListaComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
