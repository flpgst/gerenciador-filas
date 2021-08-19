import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required
    },
    cpf: String,
    certidaoNascimento: String,
    nomeResponsavel: {
        type: String,
        required
    },
    cpfResponsavel: {
        type: String,
        required
    },
    telefoneResponsavel: {
        type: String,
        required
    },
})

export default mongoose.Model('Pessoa', Schema)