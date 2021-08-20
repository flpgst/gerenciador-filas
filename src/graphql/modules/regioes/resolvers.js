import Regiao from '../../../models/Regiao';
import Pessoa from '../../../models/Pessoa';

export default {
    Regiao: {
        responsavel: (regiao) => Pessoa.findById(regiao.responsavel),
        createdAt: ({createdAt}) => `${createdAt}`,
        updatedAt: ({updatedAt}) => `${updatedAt}`
    },
    Query: {
        regioes: () => Regiao.find(),
        regiao: (_,{id}) => Regiao.findById(id)
    },
    Mutation: {
        createRegiao: (_, { data }) => Regiao.create(data),
        updateRegiao: (_, { id, data }) => Regiao.findOneAndUpdate(id, data, { new: true }),
        deleteRegiao: async (_, { id }) => !!(await Regiao.findOneAndDelete(id))
    }
}