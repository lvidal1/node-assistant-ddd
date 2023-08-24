import QuestionUseCase from '@/hub/application/Question.usecase'
import { OpenAIService } from '@/hub/application/service/OpenAI.service'
import { interfaces } from 'inversify'

export const APPLICATION_TYPES = {
    OpenAIService: Symbol.for('OpenAIService'),
    QuestionUseCase: Symbol.for('QuestionUseCase'),
}

const containers = [
    {
        type: APPLICATION_TYPES.OpenAIService,
        class: OpenAIService,
    },
    {
        type: APPLICATION_TYPES.QuestionUseCase,
        class: QuestionUseCase,
    },
]

export function application(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(container.class)
    })
}
