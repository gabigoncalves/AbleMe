// Retornar todos os reducers combinados aqui

import {combineReducers} from 'redux'
import ReducerAvaliacao from './ReducerAvaliacao'
import ReducerListagem from './ReducerListagem'
import ReducerCadastroLogin from './ReducerCadastroLogin'

export default combineReducers({
    locais: ReducerListagem,
    avaliacao: ReducerAvaliacao,
    cadastroElogin: ReducerCadastroLogin
});