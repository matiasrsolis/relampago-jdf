export const AVANCE = 'AVANCE';
export const SACAMEDIO = 'SACAMEDIO';
export const GOL = 'GOL';
export const GOLRIVAL = 'GOLRIVAL';
export const TURNO = 'TURNO';

export function avance(n){
    return {
        type: AVANCE,
        payload: n
    }
}

export function sacaMedio(){
    return {
        type: SACAMEDIO
    }
}

export function gol(n){
    return {
        type: GOL,
        payload: n
    }
}

export function golRival(n){
    return {
        type: GOLRIVAL,
        payload: n
    }
}

export function turno(){
    return {
        type: TURNO
    }
}

// export function elegirEquipo(n){
//     return {
//         type: EQUIPO,
//         payload: n
//     }
// }