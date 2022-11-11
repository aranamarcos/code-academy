import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAgregarComponent } from './alumnos-agregar.component';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('AlumnosAgregarComponent', () => {
  let component: AlumnosAgregarComponent;
  let fixture: ComponentFixture<AlumnosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AlumnosAgregarComponent ],
      providers: [ AlumnosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Formulario invalido si todos los campos estan vacios', () => {
    const formulario = component.formulario;

    expect(formulario.valid).toBeFalse();
  })

  it('Formulario invalido si algun campo esta vacio', () => {
    const formulario = component.formulario;

    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const usuario = formulario.controls['usuario'];
    const password = formulario.controls['password'];

    nombre.setValue('Juan')
    apellido.setValue('Perez')
    usuario.setValue('jperez')
    password.setValue('123ABC')

    expect(formulario.valid).toBeFalse();
  })


  it('Formulario valido si todos los campos estan completos', () => {
    const formulario = component.formulario;

    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const email = formulario.controls['email'];
    const usuario = formulario.controls['usuario'];
    const password = formulario.controls['password'];

    nombre.setValue('Juan')
    apellido.setValue('Perez')
    email.setValue('jperez@gmail.com')
    usuario.setValue('jperez')
    password.setValue('123ABC')

    expect(formulario.valid).toBeTrue();
  })


  it('Formulario se vacia cuando hago click a boton submit', () => {
    const formulario = component.formulario;

    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const email = formulario.controls['email'];
    const usuario = formulario.controls['usuario'];
    const password = formulario.controls['password'];

    nombre.setValue('Juan')
    apellido.setValue('Perez')
    email.setValue('jperez@gmail.com')
    usuario.setValue('jperez')
    password.setValue('123ABC')

    const boton = fixture.debugElement.query(By.css('#botonAltaAlumno'))
    boton.nativeElement.click();
    fixture.detectChanges();

    expect(formulario.value).toBeNull();
  })
});
