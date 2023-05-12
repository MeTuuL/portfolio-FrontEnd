import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  fechaE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.fechaE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      {
        next: data=>{
          alert("Experiencia añadida con exito!");
          this.router.navigate(['']);
        },
        error: err =>{
          alert("Error al añadir la experiencia");
          this.router.navigate(['']);
        }
      });
  }

}

