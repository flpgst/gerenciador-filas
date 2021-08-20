import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    cpf: String,
    certidaoNascimento: String,
    nomeResponsavel: {
        type: String,
        required: true
    },
    cpfResponsavel: {
        type: String,
        required: true
    },
    telefoneResponsavel: {
        type: String,
        required: true
    },
})

export default mongoose.model('Pessoa', Schema)