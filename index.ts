import dotenv from 'dotenv'
import App from './src/app'

dotenv.config()

const app = new App(parseInt(process.env.PORT || '8000'))

app.listen()
