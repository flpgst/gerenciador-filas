import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    }
    
})

export default mongoose.model('Regiao', Schema)