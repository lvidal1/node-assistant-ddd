import { APPLICATION_TYPES } from '@/hub/application/_ioc'
import LLMService from '@/hub/domain/LLM.service'
import { inject, injectable } from 'inversify'

@injectable()
export default class QuestionUseCase {
    constructor(
        @inject(APPLICATION_TYPES.OpenAIService)
        private readonly llmService: LLMService
    ) {}

    public async askQuestion(question: string): Promise<string> {
        const response = await this.llmService.askQuestion(question)

        if (!response) {
            throw new Error('Question not found')
        }
        return response
    }
}
