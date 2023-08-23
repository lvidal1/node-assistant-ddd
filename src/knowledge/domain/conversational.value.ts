import { ConversationalEntity } from './conversational.entity'

export class ConversationalValue implements ConversationalEntity {
    name: string
    description: string
    url: string
    type: string

    constructor({ name, description, url, type }: ConversationalEntity) {
        this.name = name
        this.description = description || ''
        this.url = url || ''
        this.type = type || ''
    }
}
