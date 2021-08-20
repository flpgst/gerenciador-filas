import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    protocolo: {
        type: String,
        required: true
    },
    inscrito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa',
        required: true
    },
    entidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entidade'
    },
    regiao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Regiao'
    },
    chamado: {
        type: Boolean,
        required: true,
        default: false 
    }
    
},{
    timestamps:true,
    collection: 'inscricoes'
})

export default mongoose.model('Regiao', Schema)