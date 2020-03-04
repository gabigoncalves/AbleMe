const INITIAL_STATE = {
    nota: 0,
    media: 0,
    nroClassificacoes: 0,
    msgErro: ''
}

export default ( state = INITIAL_STATE, action ) => {

    switch (action.type) {

        //read        
        case 'READ_MEDIA' : {
            if(action.payload.data){
                return {
                    ...state, 
                    media: action.payload.data.mediaNota, 
                    nroClassificacoes: action.payload.data.nroClassificacoes
                }
            } else {
                return { ...state, media: 0, nroClassificacoes: 0 }
            }
        }

        case 'VER_NOTA_USUARIO': 
            return  { ...state, nota: +action.payload }

        //create and update
        case 'CREATE_AND_UPDATE': {
            return {
                ...state,
                nota: action.payload.data.nota, 
                media: action.payload.data.mediaNota,
                nroClassificacoes: action.payload.data.nroClassificacoes
            }
        }

        //delete
        case 'DELETAR_NOTA_ENVIADA':
            return {}  
            
        default:
            return state;
    }
}