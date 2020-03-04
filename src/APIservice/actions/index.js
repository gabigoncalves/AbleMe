import axios from 'axios';

export const listarLugares = (lat, long, radius, type, KEY) => {
    const link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location = `location=${lat},${long}&radius=${radius}`
    const typeData = `&types=${type}`
    const key = `&key=${KEY}`
    const url = `${link}${location}${typeData}${key}`
    
    const request = axios.get(url)
    return {
        type: 'LISTAR_LUGARES',
        payload: request
    }
}

export const listarLugar = (place_id, KEY) => {
    const linkListarLugar = "https://maps.googleapis.com/maps/api/place/details/json?"
    const id= `place_id=${place_id}`;
    const key = `&key=${KEY}`;
    const url = `${linkListarLugar}${id}${key}`; 
    
    const request = axios.get(url)
    return {
        type: 'LISTAR_LUGAR',
        payload: request
    }
}

// -------------- backend --------------

const urlBackend = 'http://192.168.0.105:3030/able-me'

 export const enviarNotaLugar = (nota) => {
    return {
        type: 'VER_NOTA_USUARIO',
        payload: nota
    }
}

export const createAndUpdate = (body, placeId) => {
    const request = axios.post(`${urlBackend}/${placeId}`, body)
    return {
        type: 'CREATE_AND_UPDATE',
        payload: request
    }
}

export const readMedia = (placeId) => {
    const request = axios.get(`${urlBackend}/${placeId}`)
    return {
        type: 'READ_MEDIA',
        payload: request
    }
}

// -------------- Cadastro e Login --------------

const cadastroElogin = 'http://192.168.0.105:3030/auth'
const estaLogado = 'http://192.168.0.105:3030/estaAuth'

export const cadastrar = (body) => {
    const request = axios.post(`${cadastroElogin}/register`, body)
    return {
        type: 'CADASTRAR',
        payload: request
    }
}

export const login = (body) => {
    const request = axios.post(`${cadastroElogin}/authenticate`, body)
    return {
        type: 'LOGIN',
        payload: request
    }    
}

export const esqueceuSenha = (body) => {
    const request = axios.post(`${cadastroElogin}/forgot_password`, body)
    return {
        type: 'ESQUECEU_SENHA',
        payload: request
    }
}

export const resetarSenha = (body) => {
    const request = axios.post(`${cadastroElogin}/reset_password`, body)
    return {
        type: 'RESETAR_SENHA',
        payload: request
    }
}

export const verificaEstaLogado = () => {
    const request = axios.post(estaLogado, body)
    return {
        type: 'ESTA_LOGADO',
        payload: request
    }  
}
