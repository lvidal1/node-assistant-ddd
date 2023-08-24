import AskQuestionUseCase from '../../application/AskQuestionUseCase'

export class OperationController {
    constructor(private askQuestionUseCase: AskQuestionUseCase) {}

    public askQuestion = () => {
        return this.askQuestionUseCase.askProgramming()
    }
}
