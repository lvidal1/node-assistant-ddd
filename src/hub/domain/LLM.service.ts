export interface LLMService {
    askQuestion(question: string): Promise<string | null>
}
