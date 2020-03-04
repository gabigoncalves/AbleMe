
const INITIAL_STATE = {
    nota: 0,
    media: 0,
    nroClassificacoes: 0,
    msgErro: ''
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {

        //create and update
        case 'CREATE_AND_UPDATE': {
            console.log('CREATE_AND_UPDATE ACTION: ', action)
            return {
                ...state,
                media: action.payload.mediaNota,
                nroClassificacoes: action.payload.nroClassificacoes
            }
        }

        //read        
        case 'READ_MEDIA' : {
            if(action.payload){
                return {
                    ...state, 
                    media: action.payload.mediaNota, 
                    nroClassificacoes: action.payload.nroClassificacoes
                }
            } else {
                return { ...state, media: 0, nroClassificacoes: 0 }
            }
        }

        case 'GET_MEDIA' : {
            if(action.payload) {
                return { ...state, media: action.payload.mediaNota }
            } else {
                return { ...state, media: 0 }
            }
        }

        case 'VER_NOTA_USUARIO': {
            return  { ...state, nota: +action.payload }
        }

        //delete
        case 'DELETAR_NOTA_ENVIADA': {
            return {}  
        }
            
        default:
            return state;
    }
}