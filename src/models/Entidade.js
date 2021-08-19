import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
    regiao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Regiao'
    }
    
})

export default mongoose.Model('Entidade', Schema)