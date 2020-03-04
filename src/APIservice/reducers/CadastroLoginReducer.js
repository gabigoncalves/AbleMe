const INITIAL_STATE = {
    email: ''
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'CADASTRAR': 
            return  { ...state, email: action.payload }
        
        case 'LOGIN': 
            return  { ...state, selected: action.payload }
        
        case 'ESQUECEU_SENHA': 
            return { ...state, photo: action.payload }

        case 'RESETAR_SENHA': 
            return { ...state, photo: action.payload }

        case 'ESTA_LOGADO': 
            return { ...state, photo: action.payload }

        default:
            return state;
    }
}