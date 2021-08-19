import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    }
    
})

export default mongoose.Model('Regiao', Schema)