import { AVANCE } from '../action';

const initialState = {
    casillero: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === AVANCE) {
        return {
            ...state,
            casillero: state.casillero + action.payload
        }
    }
    return state;
}

export default rootReducer;