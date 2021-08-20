import Pessoa from '../../../models/Pessoa';

export default {
    Query: {
        pessoas: () => Pessoa.find(),
        pessoa: (_,{id}) => Pessoa.findById(id)
    },
    Mutation: {
        createPessoa: (_, { data }) => Pessoa.create(data),
        updatePessoa: (_, { id, data }) => Pessoa.findOneAndUpdate(id, data, { new: true }),
        deletePessoa: async (_, { id }) => !!(await Pessoa.findOneAndDelete(id))
    }
}