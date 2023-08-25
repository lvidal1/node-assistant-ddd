import { application } from '@/hub/application/_ioc'
import { infrastructure } from '@/hub/infrastructure/_ioc'
import * as route from '@/hub/infrastructure/route'
import { Container, ContainerModule } from 'inversify'

const hubContainer = {
    load: (container: Container) => {
        const containers = new ContainerModule((bind) => {
            application(bind)
            infrastructure(bind)
        })

        return container.load(containers)
    },
    route,
}

export default hubContainer
