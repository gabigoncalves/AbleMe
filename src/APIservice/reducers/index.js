// Retornar todos os reducers combinados aqui

import {combineReducers} from 'redux'
import Reducer from './Reducer'
import AvaliacaoReducer from './AvaliacaoReducer'

export default combineReducers({
    locais: Reducer,
    avaliacao: AvaliacaoReducer
});