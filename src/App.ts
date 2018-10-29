import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as mongoose from 'mongoose'

import Routes from './routes/Routes'

class App {

  public app: express.Application
  public routePrv: Routes = new Routes()
  public mongoURL: string = 'mongodb://localhost/petGramDB'

  constructor() {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)
    this.mongoConfig()
  }

  private config(): void {
    this.app.use(bodyParser.json())

    this.app.use(bodyParser.urlencoded({ 
      extended: false 
    }))
  }

  private mongoConfig(): void {
    (<any>mongoose).Promise = global.Promise
    mongoose.connect(this.mongoURL, { useNewUrlParser: true })
  }
}

export default new App().app