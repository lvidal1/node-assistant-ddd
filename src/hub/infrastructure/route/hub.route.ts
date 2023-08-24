import { HubController } from '@/hub/infrastructure/controller/hub.controller'
import { Router } from 'express'

const hubRoute = Router()

const hubController = new HubController()

hubRoute.get('/', hubController.welcome)
hubRoute.get('/ask', hubController.askQuestion)

export default hubRoute
