import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Alumno } from '../../models/alumno';

describe('AlumnosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AlumnosService ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de alumnos mockeados', (done: DoneFn) => {
    const mockDatos: Alumno[] = [
      {"nombre":"Sabina","apellido":"Barrows","email":"David82@yahoo.com","usuario":"Bernhard_Casper","password":"KOztOQtEMekvJQf","id":9},
      {"nombre":"MelvinaS","apellido":"Jacobson","email":"Noelia.Satterfield16@hotmail.com","usuario":"Maeve.Gleichner24","password":"Bta3bw1RArxL29f","id":12},
      {"nombre":"Jonatan","apellido":"Halvorson","email":"Russell.Treutel@yahoo.com","usuario":"Dorothea_Lynch","password":"IfVs8EehYh9WY4F","id":13},
      {"nombre":"Boyd","apellido":"Barrows","email":"Arnoldo.Erdman72@yahoo.com","usuario":"Alysson49","password":"ZA5ghPLDvbJVgOP","id":18}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerAlumnos().subscribe((alumnos) => {
      expect(alumnos).toEqual(mockDatos);
      done();
    })
  });
});
