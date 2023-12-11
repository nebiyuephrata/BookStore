import express, { Application, Request, Response } from "express"
import Database from "./config/database"
import BookRouter from "./routes/BookRouter"


class App {
  public app: Application

  constructor() {
    this.app = express()
    this.databaseSync()
    this.plugins()
    this.routes()

  }
  protected databaseSync():void{
      const db = new Database()

      db.sequelize?.sync()
  }
  protected plugins():void{
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended:true}))

  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("welcome")
    });
    this.app.use("/api/v1/book",BookRouter)
  }
}

const port = process.env.PORT || 5000
const app = new App().app

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
