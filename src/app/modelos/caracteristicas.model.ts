export const FUE = 0;
export const AGI = 1;
export const CON = 2;
export const INT = 3;
export const I = 4;
export const PRE = 5;
export const APA = 6;

export class Caracteristica {
    id: number;
    caracteristica: string;
    abr: string;
    valor: string;
    normal: string;
    raza: string;
    total: string;

    constructor( id: number, caracteristica: string, abr: string) {
        this.id = id;
        this.caracteristica = caracteristica;
        this.abr = abr;
        this.valor = '';
        this.normal = '';
        this.raza = '';
        this.total = '';
    }
}
