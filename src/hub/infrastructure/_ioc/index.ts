import { interfaces } from 'inversify'

type ContainerType = {
    type: symbol
    class: any
}

export const INFRASTRUCTURE_TYPES = {}

const containers: ContainerType[] = [
    //
]

export function infrastructure(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(container.class)
    })
}
