import { ConversationalEntity } from './conversational.entity'

export default interface KnowledgePort {
    getCurrentConversationalInterface(): ConversationalEntity
}
