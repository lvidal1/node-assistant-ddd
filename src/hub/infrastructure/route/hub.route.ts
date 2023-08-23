import { Router } from 'express'
import { HubController } from '../controller/hub.controller'

const hubRoute = Router()

const hubController = new HubController()

hubRoute.get('/', hubController.welcome)
hubRoute.get('/ask', hubController.askQuestion)

export default hubRoute
