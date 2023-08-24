import AskQuestionUseCase from '../operation/application/AskQuestionUseCase'
import knowledgeAdapter from './knowledge.adapter'

export class OperationAdapter {
    constructor(private readonly askQuestionUseCase: AskQuestionUseCase) {}

    public askQuestion = () => {
        return this.askQuestionUseCase.askProgramming()
    }
}

const askQuestionUseCase = new AskQuestionUseCase(knowledgeAdapter)
const operationAdapter = new OperationAdapter(askQuestionUseCase)

export default operationAdapter
