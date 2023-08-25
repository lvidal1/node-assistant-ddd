import 'reflect-metadata'
import dotenv from 'dotenv'
import App from './app'
import { Container } from 'inversify'
;(function main() {
    dotenv.config()

    const container = new Container()
    const app = new App(container, parseInt(process.env.PORT || '8000'))

    app.start()
})()
