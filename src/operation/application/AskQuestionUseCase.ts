import { KnowledgeAdapter } from '../../adapters/knowledge.adapter'

export default class AskQuestionUseCase {
    constructor(private readonly knowledgeAdapter: KnowledgeAdapter) {}

    public askProgramming = () => {
        const conversational =
            this.knowledgeAdapter.getConversationalInterface()
        return conversational
    }
}
