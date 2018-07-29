export const MOVIMIENTO = 0;

export const SIN_ARMADURA = 0;
export const CUERO = 1;
export const CUERO_ENDURECIDO = 2;
export const COTA_MALLA = 3;
export const CORAZA = 4;

export const ARMAS = 1;

export const FILO = 0;
export const CONTUNDENTES = 1;
export const A_2_MANOS = 2;
export const ARROJADIZAS = 3;
export const PROYECTILES = 4;
export const ASTA = 5;

export const GENERALES = 2;

export const TREPAR = 0;
export const MONTAR = 1;
export const NADAR = 2;
export const RASTREAR = 3;

export const SUBTERFUGIO = 3;
export const EMBOSCAR = 0;
export const ACECHAR = 1;
export const ABRIR_CERRADURAS = 2;
export const DESACTIVAR_TRAMPAS = 3;

export const MAGICAS = 4;
export const LEER_RUNAS = 0;
export const USAR_OBJETOS = 1;
export const SORTILEGOS_DIRIGIDOS = 2;

export const OTRAS_HABILIDADES = 5;
export const PERCEPCION = 0;
export const DESARROLLO_FISICO = 1;

export const DEFENSIVAS = 6;
export const SORTILEGIOS_BASE = 0;
export const LIDERAZGO = 1;
export const BONIFICACION_DEFENSIVA = 2;
export const TR_ESENCIA = 3;
export const TR_CANALIZACION = 4;
export const TR_VENENOS = 5;
export const TR_ENFERMEDAD = 6;

export const SECUNDARIAS = 7;

export const TIRADA_MM = 0;
export const TIRADA_BO = 1;
export const TIRADA_ME = 2;
export const TIRADA_PE = 3;
export const TIRADA_BD = 4;
export const TIRADA_TR = 5;


export class Habilidad {
    descripcion: string;
    grado: number;
    valorGrado: number;
    aplicaGrado: boolean;
    gradoRaza: number;
    gradoMaximo: number;
    aplicaTiradas: boolean;
    valorTiradas: number[];
    abrCar: string;
    aplicaCar: boolean;
    caracteristica: number;
    aplicaProfesion: boolean;
    profesion: number;
    objeto: number;
    especial: number;
    especial2: number;
    especial2sl: boolean;
    tipoTirada: number;
    valorTotal: number;

    bonGrado(): number {
        let valor = 0;
        if ( this.aplicaTiradas ) {
            for (let i = 0; i < this.grado; i++) {
                if (this.valorTiradas[i]) {
                    valor += this.valorTiradas[i];
                } else {
                    let tirada = 0;
                    do {
                        tirada = Math.floor((Math.random() * 10) + 1);
                    } while (tirada < 4);
                    this.valorTiradas[i] = tirada;
                    valor += tirada;
                }
            }
        } else {
            for (let i = 0; i < this.grado; i++) {
                if (i < 10) {
                    valor += 5;
                } else if (i < 15) {
                    valor += 2;
                }
            }
        }
        if (this.grado === 0) {
            valor = -25;
        }
        return valor;
    }

    total(): number {
        let valor = 0;
        if (this.aplicaGrado) {
            valor += this.bonGrado();
        }
        if (this.aplicaCar) {
            valor += Number(this.caracteristica);
        }
        if (this.aplicaProfesion) {
            valor += Number(this.profesion);
        }
        valor += Number(this.objeto);
        valor += Number(this.especial);
        valor += Number(this.especial2);
        return valor;
    }

    constructor(descripcion: string,
                abr: string,
                gradoMaximo: number,
                tipoTirada: number,
                aplicaProfesion = true,
                especial2 = null) {
        this.descripcion = descripcion;
        this.abrCar = abr;
        this.gradoMaximo = gradoMaximo;
        this.tipoTirada = tipoTirada;
        this.grado = 0;
        this.aplicaGrado = true;
        this.gradoRaza = 0;
        this.aplicaTiradas = false;
        this.valorTiradas = [];
        this.aplicaCar = true;
        this.caracteristica = null;
        this.aplicaProfesion = aplicaProfesion;
        this.profesion = null;
        this.objeto = null;
        this.especial = null;
        this.especial2 = especial2;
        if (especial2) {
            this.especial2sl = true;
        } else {
            this.especial2sl = false;
        }

        this.valorGrado = this.bonGrado();
        this.valorTotal = this.total();
    }
}
