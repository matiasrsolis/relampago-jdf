export const AVANCE = 'AVANCE';

export function avance(n){
    return {
        type: AVANCE,
        payload: n
    }
}