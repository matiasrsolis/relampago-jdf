import { AVANCE, GOL, TURNO } from '../action';

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
    if(action.type === GOL && !state.turno) {
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
            turno: action.payload
        }
    }
    return state;
}

export default rootReducer;