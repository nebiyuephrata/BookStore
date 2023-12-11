import { Sequelize} from 'sequelize-typescript';
import * as dotenv from 'dotenv'
import { Book } from '../models/Book';

dotenv.config()
class Database {
    public sequelize : Sequelize | undefined

    private POSTGRES_DB  =  process.env.POSTGRES_DB as string;
    private POSTGRES_HOST  =  process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT  =  process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER  =  process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD  =  process.env.POSTGRES_PASSWORD as string;

    constructor (){
        this.connectToPostgeSQL()
    }

    private async connectToPostgeSQL() {
        const models = [Book]
        this.sequelize = new Sequelize({
            database:this.POSTGRES_DB,
            username:this.POSTGRES_USER,
            password:this.POSTGRES_PASSWORD,
            host:this.POSTGRES_HOST,
            port:this.POSTGRES_PORT,
            dialect:'postgres',
            models: [ Book ],
            
        })

        await this.sequelize.authenticate().then(() => {
         console.log("connection to the database established succesfully")
        }).catch((err)=> {
            console.log("connection to the db was unsuccessful ",err)
        })
    }
}



export default Database