import { AVANCE } from '../action';

const initialState = {
    casillero: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === AVANCE) {
        return {
            ...state,
            casillero: state.casillero + action.payload
            // el payload será el número que nos dé el dado en el turno
        }
    }
    return state;
}

export default rootReducer;