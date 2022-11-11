import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosService } from '../../services/alumnos.service';

import { AlumnosEditarComponent } from './alumnos-editar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlumnosEditarComponent', () => {
  let component: AlumnosEditarComponent;
  let fixture: ComponentFixture<AlumnosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ AlumnosEditarComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
