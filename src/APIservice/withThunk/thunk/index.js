import { API } from '../API'
import { actions } from '../actions'

const thunk = {

    // ---------- listagem de estabelecimentos ---------- 

    listarLugares: (lat, long) => dispatch => {
        API.listarLugares(lat, long)
            .then( locais => dispatch(actions.listarLugares(locais)) )
            .catch( err => { console.log('Erro no THUNK listarLugares: ', err) } )
    },

    listarLugar : (place_id) => dispatch => {
        API.listarLugar(place_id)
            .then(local => dispatch(actions.listarLugar(local)))
            .catch( err => {console.log('Erro no THUNK listarLugar: ', err)})
    },

    // ---------- avaliação e classificação através da média ---------- 

    createAndUpdate : (body, placeId) => dispatch => {
        API.createAndUpdate(body, placeId)
            //.then( media => {console.log('media: ', media)} )
            .then( media => dispatch(actions.createAndUpdate(media)) )
            .catch( err => {console.log('Erro no THUNK createAndUpdate: ', err)})
    },
    
    readMedia : placeId => dispatch => {
        API.readMedia(placeId)
            .then( media => dispatch(actions.readMedia(media)))
            .catch( err => {console.log('Erro no THUNK readMedia: ', err)})
    },

    getMedia : placeId => dispatch => {
        API.getMedia(placeId)
            .then( media => dispatch(actions.getMedia(media)))
            .catch( err => {console.log('Erro no THUNK readMedia: ', err)})
    },

    //  ---------- autenticação de usuário: login e cadastro ---------- 

    cadastrar: body => dispatch => {
        API.cadastrar(body)
            .then(cadastro => dispatch(actions.cadastrar(cadastro)))
            .catch(err => {console.log('Erro no THUNK cadastrar: ', err)})
    },

    login: body => dispatch => {
        API.login(body)
            .then(login => dispatch(actions.login(login)))
            .catch(err => {console.log('Erro no THUNK login: ', err)})
    },

    esqueceuSenha: body => dispatch => {
        API.esqueceuSenha(body)
            .then(senha => dispatch(actions.esqueceuSenha(senha)))
            .catch(err => {console.log('Erro no THUNK esqueceuSenha: ', err)})
    },

    resetarSenha: body => dispatch => {
        API.resetarSenha(body)
            .then(senha => dispatch(actions.resetarSenha(senha)))
            .catch(err => {console.log('Erro no THUNK resetarSenha: ', err)})
    },

    verificaEstaLogado: body => dispatch => {
        API.verificaEstaLogado(body)
            .then(logado => dispatch(actions.verificaEstaLogado(logado)))
            .catch(err => {console.log('Erro no THUNK verificaEstaLogado: ', err)})
    },

}

export { thunk }

