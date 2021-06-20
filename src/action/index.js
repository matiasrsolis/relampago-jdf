export const AVANCE = 'AVANCE';
export const EQUIPO = 'EQUIPO';

export function avance(n){
    return {
        type: AVANCE,
        payload: n
    }
}

// export function elegirEquipo(n){
//     return {
//         type: EQUIPO,
//         payload: n
//     }
// }