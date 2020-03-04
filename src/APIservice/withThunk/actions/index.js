
const actions = {

    // --- listagem locais ---

    listarLugares : locais => ({
        payload: locais,
        type: "LISTAR_LUGARES"
    }),

    listarLugar: lugar => ({
        payload: lugar,
        type: 'LISTAR_LUGAR'
    }),

    // ----- avaliação -----

    createAndUpdate: media => ({
        payload: media,
        type: 'CREATE_AND_UPDATE'
    }),

    enviarNotaLugar : nota => ({
        payload: nota,
        type: 'VER_NOTA_USUARIO'
    }),

    readMedia : media => ({
        payload: media,
        type: 'READ_MEDIA'
    }),

    getMedia : media => ({
        payload: media,
        type: 'GET_MEDIA'
    }),

    // --- cadastro e login ---

    cadastrar : cadastro => ({
        payload: cadastro,
        type: 'CADASTRAR'
    }),

    login : login => ({
        payload: login,
        type: 'LOGIN'
    }),

    esqueceuSenha : esqueceu => ({
        payload: esqueceu,
        type: 'ESQUECEU_SENHA'
    }),

    resetarSenha : resetar => ({
        payload: resetar,
        type: 'RESETAR_SENHA'
    }),

    verificaEstaLogado : logado => ({
        payload: logado,
        type: 'ESTA_LOGADO'
    }),
}

export { actions }
