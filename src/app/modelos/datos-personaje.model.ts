import { Raza } from './raza.model';
import { Profesion } from './profesion.model';

export class DatosPersonaje {
    nombre: string;
    raza: Raza;
    estatura: string;
    peso: string;
    pelo: string;
    ojos: string;
    actitud: string;
    especial: string;
    profesion: Profesion;
    nivel: number;

    constructor() {
    }
}
