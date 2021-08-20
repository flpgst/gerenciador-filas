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
    
},{
    timestamps:true,
    collection: 'regioes'
})

export default mongoose.model('Inscricao', Schema)