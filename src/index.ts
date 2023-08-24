import dotenv from 'dotenv'
import { replaceTscAliasPaths } from 'tsc-alias'
import App from './app'
import { Container } from 'inversify'
;(function main() {
    replaceTscAliasPaths()
    dotenv.config()

    const container = new Container()
    const app = new App(container, parseInt(process.env.PORT || '8000'))

    app.start()
})()
