const INITIAL_STATE = {
    selected: [],
    all: []
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'LISTAR_LUGARES':
            return  { ...state, all: action.payload.results }

        case 'LISTAR_LUGAR': 
            return  { ...state, selected: action.payload.result }            

        default:
            return state;
    }
}