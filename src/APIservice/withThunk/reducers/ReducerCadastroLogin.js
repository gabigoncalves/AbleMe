const INITIAL_STATE = {
    teste: ''
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'CADASTRAR': 
            return  { ...state, teste: action.payload }
        
        case 'LOGIN': 
            return  { ...state, teste: action.payload }
        
        case 'ESQUECEU_SENHA': 
            return { ...state, teste: action.payload }

        case 'RESETAR_SENHA': 
            return { ...state, teste: action.payload }

        case 'ESTA_LOGADO': 
            return { ...state, teste: action.payload }

        default:
            return state;
    }
}