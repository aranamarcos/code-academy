import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.css']
})
export class AlumnosDetalleComponent implements OnInit {
  alumno$!: Observable<Alumno>;

  constructor(
    private activateRoute: ActivatedRoute,
    private alumnoService: AlumnosService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');
      this.alumno$ = this.alumnoService.obtenerAlumno(id);
    })

  }

}
