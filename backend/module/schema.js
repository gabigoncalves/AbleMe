const mongoose = require('mongoose')
var Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ableMeSchema = mongoose.Schema({
    local: {
        type: String,
        //required: true
    },

    place_id: {
        type: String,
        //required: true
    },

    nota: {
        type: Number,
    },

    mediaNota: {
        type: Number,
    },

    totalDasNotas: {
        type: Number,
    },

    nroClassificacoes: {
        type: Number,
    }

}, {
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})


/*
ableMeSchema.index({ local:1 })
ableMeSchema.virtual('totalClassificacoes').get(function() {
    const totalClassificacoes = this.totalClassificacoes + 1
    return totalClassificacoes;
})

ableMeSchema.virtual('totalNotas').get(function() {
    const totalNotas = this.totalNotas + this.nota
    return totalNotas;
})

ableMeSchema.virtual('mediaNota').get(function() {
    const mediaNota = this.totalNotas/this.totalClassificacoes
    return mediaNota;
})
*/

module.exports = mongoose.model('ableme', ableMeSchema)
