import Entidade from '../../../models/Entidade';

export default {
    Query: {
        entidades: () => Entidade.find(),
        entidade: (_,{id}) => Entidade.findById(id)
    },
    Mutation: {
        createEntidade: (_, { data }) => Entidade.create(data),
        updateEntidade: (_, { id, data }) => Entidade.findOneAndUpdate(id, data, { new: true }),
        deleteEntidade: async (_, { id }) => !!(await Entidade.findOneAndDelete(id))
    }
}