const INITIAL_STATE = {
    selected: [],
    all: []
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'LISTAR_LUGARES': 
            return  { ...state, all: action.payload.data.results }
        
        case 'LISTAR_LUGAR': 
            return  { ...state, selected: action.payload.data.result }
        
        case 'LISTAR_FOTO': 
            return { ...state, photo: action.payload.data }

        default:
            return state;
    }
}