import dotenv from 'dotenv'
import { replaceTscAliasPaths } from 'tsc-alias'
import App from './src/app'

replaceTscAliasPaths()
dotenv.config()

const app = new App(parseInt(process.env.PORT || '8000'))

app.listen()
