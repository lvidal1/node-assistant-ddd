import express, { Application } from 'express'
import { Server } from 'http'
// Middlewares
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
// IOC
import 'reflect-metadata'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
// Container
import hubContainer from './hub/hub.app'

class App {
    private readonly _container: Container
    public _port: number

    constructor(container: Container, port: number) {
        this._container = container
        this._port = port
        this.modules()
    }

    public start(): Server {
        const server = new InversifyExpressServer(this._container, null, {
            rootPath: '/',
        })

        return server
            .setConfig((app) => this.middlewares(app))
            .build()
            .listen(this._port, () => {
                console.log(
                    `⚡️[server]: Server is running at http://localhost:${this._port}`
                )
            })
    }

    private middlewares(app: Application) {
        app.use(express.json())
        app.use(cors())
        app.use(morgan('dev'))
        app.use(compression())
    }

    private modules(): void {
        hubContainer.load(this._container)
    }
}

export default App
