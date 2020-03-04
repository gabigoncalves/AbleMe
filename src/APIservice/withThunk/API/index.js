import axios from 'axios'

const urlBackend = 'http://192.168.0.105:3030/able-me'
const cadastroElogin = 'http://192.168.0.105:3030/auth'
const estaLogado = 'http://192.168.0.105:3030/estaAuth'

// informações da busca de estabelecimentos
const raioDeBusca = 250
const tipoDeBusca = 'restaurant'

// chave da API do GOOGLE
const GOOGLE_MAPS_APIKEY = 'AIzaSyC8FV5bh8VLBqDmbqRVpVtDNle8J7HudmU'

const API  = {

    listarLugares : (lat, long) => 
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${raioDeBusca}&types=${tipoDeBusca}&key=${GOOGLE_MAPS_APIKEY}`)
            .then( resp => resp.json() )
            .catch( err => { console.log('Erro ao listar estabelecimentos: ', err) }),

    listarLugar : (place_id) => 
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${GOOGLE_MAPS_APIKEY}`)
            .then( resp => resp.json() )
            .catch( err => { console.log('Erro ao listar lugar específico: ', err) } ),


    // ---------------------------- backend ----------------------------


    createAndUpdate: (body, placeId) => 
        axios.post(`http://192.168.0.105:3030/able-me/${placeId}`, body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro createAndUpdate: ', err) } ),


    readMedia : (placeId) => 
        fetch(urlBackend + '/' + placeId)
            .then( res => res.json() )
            .catch( err => { 
                console.log('Não é possível ler a média, pois não há notas ainda: ', err)
            }),

    getMedia : (placeId) => 
        fetch(urlBackend + '/' + placeId)
            .then( res => res.json() )
            .catch( err => { 
                console.log('Erro getMedia: ', err)
    }),

    // ---------------------------- Cadastro e Login ----------------------------

    cadastrar: (body) =>
        axios.post(cadastroElogin + '/register', body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro action cadastrar: ', err) } ),

    login: (body) =>
        axios.post(cadastroElogin + '/authenticate', body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro action login: ', err) } ),    

    esqueceuSenha: (body) =>
        axios.post(cadastroElogin + '/forgot_password', body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro action esqueceuSenha: ', err) } ), 
    
    resetarSenha: (body) =>
        axios.post(cadastroElogin + '/reset_password', body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro action resetarSenha: ', err) } ), 
    
    verificaEstaLogado: (body) =>
        axios.post(estaLogado, body)
            .then( res => res.data)
            //.then( resp => { console.log('res: ', resp) } )
            .catch(err => { console.log('Erro action verificaEstaLogado: ', err) } ), 

}

export { API }
