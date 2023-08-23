import KnowledgePort from '../knowledge/domain/knowledge.port'
import { ConversationalRepository } from '../knowledge/infraestructure/repository/mock/conversational.repository'

export class KnowledgeAdapter {
    constructor(private readonly knowledgeRepository: KnowledgePort) {}

    public getConversationalInterface = () => {
        return this.knowledgeRepository.getCurrentConversationalInterface()
    }
}

const conversationalRepository = new ConversationalRepository()
const knowledgeAdapter = new KnowledgeAdapter(conversationalRepository)

export default knowledgeAdapter
