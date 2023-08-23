import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import { hubRoute } from './hub/hub.app'

class App {
    public app: Application
    public port: number

    constructor(port: number) {
        this.app = express()
        this.port = port

        this.middleware()
        this.routes()
    }

    private middleware() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(compression())
    }

    private routes() {
        this.app.use('/', hubRoute)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(
                `⚡️[server]: Server is running at http://localhost:${this.port}`
            )
        })
    }
}

export default App
