export class Educacion {
    id?: number;
    nombreE: string;
    institucionE: string;
    fechaE: string;
    descripcionE: string;

    constructor(nombreE: string, institutoE: string, fechaE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.institucionE = institutoE;
        this.fechaE = fechaE;
        this.descripcionE = descripcionE;
    }
}
