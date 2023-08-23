import KnowledgePort from '../../../domain/knowledge.port'

const MOCK_CONVERSATIONAL_APP = {
    name: 'OpenAI',
    description: '',
    type: 'AI',
    url: 'url',
}

export class ConversationalRepository implements KnowledgePort {
    getCurrentConversationalInterface() {
        return MOCK_CONVERSATIONAL_APP
    }
}
