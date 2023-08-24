import { LLMService } from '@/hub/domain/LLM.service'
import OpenAI from 'openai'

export class OpenAIService implements LLMService {
    client

    constructor() {
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        })
    }

    async askQuestion(question: string): Promise<string | null> {
        const params: OpenAI.Chat.CompletionCreateParams = {
            messages: [{ role: 'user', content: question }],
            model: 'gpt-3.5-turbo',
        }

        const completion: OpenAI.Chat.ChatCompletion =
            await this.client.chat.completions.create(params)

        return completion.choices[0].message.content
    }
}
