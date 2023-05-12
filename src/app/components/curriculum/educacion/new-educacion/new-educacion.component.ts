import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string = '';
  institucionE: string = '';
  fechaE: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Educacion(this.nombreE, this.institucionE, this.fechaE, this.descripcionE);
    this.sEducacion.save(expe).subscribe(
      {
        next: data => {
          alert("Educacion añadida con exito!");
          this.router.navigate(['']);
        },
        error: err => {
          alert("Error al añadir la educacion");
          this.router.navigate(['']);
        }
      });
  }
}
