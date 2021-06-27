export const AVANCE = 'AVANCE';
export const GOL = 'GOL';
export const TURNO = 'TURNO';

export function avance(n){
    return {
        type: AVANCE,
        payload: n
    }
}

export function gol(n){
    return {
        type: GOL,
        payload: n
    }
}

export function turno(n){
    return {
        type: TURNO, 
        payload: n
    }
}

// export function elegirEquipo(n){
//     return {
//         type: EQUIPO,
//         payload: n
//     }
// }