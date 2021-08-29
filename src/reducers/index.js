import { AVANCE, GOL, GOLRIVAL, TURNO, SACAMEDIO } from '../action';

const initialState = {
    casillero: 0,
    gol: 0,
    golRival: 0,
    turno: true
};

function rootReducer(state = initialState, action) {
    if (action.type === AVANCE && !state.turno) {
        return {
            ...state,
            casillero: state.casillero - action.payload
        }
    }
    if (action.type === AVANCE) {
        return {
            ...state,
            casillero: state.casillero + action.payload
        }
    }
    if (action.type === SACAMEDIO) {
        return {
            ...state,
            casillero: 0
        }
    }
    if(action.type === GOLRIVAL) {
        return {
            ...state,
            golRival: state.golRival + action.payload
        }
    }
    if (action.type === GOL) {
        return {
            ...state,
            gol: state.gol + action.payload
        }
    }
    if (action.type === TURNO) {
        return {
            ...state,
            turno: !state.turno
        }
    }
    return state;
}

export default rootReducer;