export class Experiencia {
    id?: number;
    nombreE: string;
    empresaE: string;
    fechaE: string;
    descripcionE: string;

    constructor(nombreE: string, fechaE: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.fechaE = fechaE;
        this.descripcionE = descripcionE;
    }
}
