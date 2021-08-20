import Inscricao from '../../../models/Inscricao';
import Pessoa from '../../../models/Pessoa';
import Entidade from '../../../models/Entidade';
import Regiao from '../../../models/Regiao';

export default {
    Inscricao: {
        inscrito: ({inscrito}) => Pessoa.findById(inscrito),
        entidade: ({entidade}) => Entidade.findById(entidade),
        regiao: ({regiao}) => Regiao.findById(regiao),
        createdAt: ({createdAt}) => `${createdAt}`,
        updatedAt: ({updatedAt}) => `${updatedAt}`
    },
    Query: {
        inscricoes: () => Inscricao.find(),
        inscricao: (_,{id}) => Inscricao.findById(id)
    },
    Mutation: {
        createInscricao: async (_, { data }) => {
            function createFirstProtocolo(){
                const year = new Date().getFullYear()
                return year.toString()+1000
            }
            const {protocolo:ultimoProtocolo} = await Inscricao.findOne().sort({$natural:-1}) || {protocolo:null}
            const protocolo = !ultimoProtocolo ? createFirstProtocolo() : parseInt(ultimoProtocolo)+1
            return Inscricao.create({...data, protocolo})
        },

        updateInscricao: (_, { id, data }) => Inscricao.findOneAndUpdate(id, data, { new: true }),
        deleteInscricao: async (_, { id }) => !!(await Inscricao.findOneAndDelete(id))
    }
}