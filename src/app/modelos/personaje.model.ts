import { DatosPersonaje } from './datos-personaje.model';
import { Caracteristica, FUE, AGI, CON, INT, I, PRE, APA } from './caracteristicas.model';
import { Idioma } from './idioma.model';
import { ListaSortilegio } from './lista-sortilegio.model';
import { Habilidad,
    MOVIMIENTO,
    ARMAS,
    GENERALES,
    SUBTERFUGIO,
    MAGICAS,
    OTRAS_HABILIDADES,
    DEFENSIVAS,
    SECUNDARIAS,
    TIRADA_MM,
    TIRADA_BO,
    TIRADA_ME,
    TIRADA_PE,
    TIRADA_BD,
    TIRADA_TR
} from './habilidad.model';
import { Dominio } from './dominio.model';

export class Personaje {

    datos: DatosPersonaje;
    caracteristicas: Caracteristica[];
    idiomas: Idioma[];
    listas: ListaSortilegio[];
    dominio: Dominio;

    habilidades: Habilidad[][];
    tr: Habilidad[];
    secundarias: Habilidad[];

    constructor () {
        this.datos = new DatosPersonaje();
        this.caracteristicas = [];
        this.caracteristicas[FUE] = new Caracteristica(FUE, 'Fuerza', 'FUE');
        this.caracteristicas[AGI] = new Caracteristica(AGI, 'Agilidad', 'AGI');
        this.caracteristicas[CON] = new Caracteristica(CON, 'Constitución', 'CON');
        this.caracteristicas[INT] = new Caracteristica(INT, 'Inteligencia', 'INT');
        this.caracteristicas[I] = new Caracteristica(I, 'Intuición', 'I');
        this.caracteristicas[PRE] = new Caracteristica(PRE, 'Presencia', 'PRE');
        this.caracteristicas[APA] = new Caracteristica(APA, 'Apariencia', 'APA');
        this.idiomas = [];
        this.listas = [];
        this.dominio = {dominio: '', ppoder: 0 };

        this.habilidades = [];

        this.habilidades[MOVIMIENTO] = [
            new Habilidad('Sin Armadura', 'AGI', 2, TIRADA_MM, false, ' '),
            new Habilidad('Cuero', 'AGI', 3, TIRADA_MM, false, -15),
            new Habilidad('Cuero endurecido', 'AGI', 5, TIRADA_MM, false, -30),
            new Habilidad('Cota de malla', 'FUE', 8, TIRADA_MM, false, -45),
            new Habilidad('Coraza', 'FUE', 10, TIRADA_MM, false, -60)
        ];
        this.habilidades[ARMAS] = [
            new Habilidad('De filo', 'FUE', 15, TIRADA_BO),
            new Habilidad('Contundentes', 'FUE', 15, TIRADA_BO),
            new Habilidad('A 2 manos', 'FUE', 15, TIRADA_BO),
            new Habilidad('Arrojadizas', 'AGI', 15, TIRADA_BO),
            new Habilidad('Proyectiles', 'AGI', 15, TIRADA_BO),
            new Habilidad('Armas de asta', 'FUE', 15, TIRADA_BO),
        ];
        this.habilidades[GENERALES] = [
            new Habilidad('Trepar', 'AGI', 15, TIRADA_MM),
            new Habilidad('Montar', 'I', 15, TIRADA_MM),
            new Habilidad('Nadar', 'AGI', 15, TIRADA_MM),
            new Habilidad('Rastrear', 'AGI', 15, TIRADA_ME),
        ];
        this.habilidades[SUBTERFUGIO] = [
            new Habilidad('Emboscar', 'xxx', 15, TIRADA_PE),
            new Habilidad('Acechar/esconderse', 'PRE', 15, TIRADA_PE),
            new Habilidad('Abrir cerraduras', 'INT', 15, TIRADA_ME),
            new Habilidad('Desactivar trampas', 'I', 15, TIRADA_ME),
        ];
        this.habilidades[SUBTERFUGIO][0].aplicaCar = false;
        this.habilidades[MAGICAS] = [
            new Habilidad('Leer Runas', 'INT', 15, TIRADA_ME),
            new Habilidad('Usar objetos', 'I', 15, TIRADA_ME),
            new Habilidad('Sortilegios dirigidos', 'AGI', 15, TIRADA_BO),
        ];
        this.habilidades[OTRAS_HABILIDADES] = [
            new Habilidad('Percepcion', 'I', 15, TIRADA_ME),
            new Habilidad('Desarrollo físico', 'CON', 15, TIRADA_PE, true, 5),
        ];
        this.habilidades[OTRAS_HABILIDADES][1].aplicaTiradas = true;
        this.tr = [
            new Habilidad('Sortilegios de base', 'xxx', 0, TIRADA_BO),
            new Habilidad('Liderazgo e influencia', 'PRE', 0, TIRADA_ME),
            new Habilidad('Bonificación defensiva', 'AGI', 0, TIRADA_BD),
            new Habilidad('TR Esencia', 'INT', 0, TIRADA_TR),
            new Habilidad('TR Canalización', 'I', 0, TIRADA_TR),
            new Habilidad('TR Venenos', 'CON', 0, TIRADA_TR),
            new Habilidad('TR Enfermedad', 'CON', 0, TIRADA_TR),
        ];
        this.tr[0].aplicaCar = false;
        this.tr[0].aplicaGrado = false;
        this.tr[1].aplicaGrado = false;
        this.tr[1].aplicaProfesion = false;
        this.tr[2].aplicaGrado = false;
        this.tr[2].aplicaProfesion = false;
        this.tr[3].aplicaGrado = false;
        this.tr[3].aplicaProfesion = false;
        this.tr[4].aplicaGrado = false;
        this.tr[4].aplicaProfesion = false;
        this.tr[5].aplicaGrado = false;
        this.tr[5].aplicaProfesion = false;
        this.tr[6].aplicaGrado = false;
        this.tr[6].aplicaProfesion = false;
        this.secundarias = [];
    }
}
