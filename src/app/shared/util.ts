export function calculaPoder(valor: number): number {
    let response = 0;
    if (valor === 102) {
        response = 4;
    } else if (valor === 101) {
        response = 3;
    } else if (valor === 100) {
        response = 3;
    } else if (valor < 100 && valor > 97) {
        response = 2;
    } else if (valor < 98 && valor > 94) {
        response = 2;
    } else if (valor < 95 && valor > 89) {
        response = 1;
    } else if (valor < 90 && valor > 74) {
        response = 1;
    } else if (valor < 75 && valor > 24) {
        response = 0;
    } else if (valor < 25 && valor > 9) {
        response = 0;
    } else if (valor < 10 && valor > 4) {
        response = 0;
    } else if (valor < 5 && valor > 2) {
        response = 0;
    } else if (valor === 2) {
        response = 0;
    } else {
        response = 0;
    }
    return response;
}

export function calculaBonificacion(valor: number): string {
    let response = 0;
    valor = Number(valor);
    if (valor > 101) {
        response = 35;
    } else if (valor === 101) {
        response = 30;
    } else if (valor === 100) {
        response = 25;
    } else if (valor < 100 && valor > 97) {
        response = 20;
    } else if (valor < 98 && valor > 94) {
        response = 15;
    } else if (valor < 95 && valor > 89) {
        response = 10;
    } else if (valor < 90 && valor > 74) {
        response = 5;
    } else if (valor < 75 && valor > 24) {
        response = 0;
    } else if (valor < 25 && valor > 9) {
        response = -5;
    } else if (valor < 10 && valor > 4) {
        response = -10;
    } else if (valor < 5 && valor > 2) {
        response = -15;
    } else if (valor === 2) {
        response = -20;
    } else {
        response = -25;
    }

    return String(response);
}
