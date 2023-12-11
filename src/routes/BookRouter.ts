import { Router } from "express";
import validate from "../helper/validate";
import BookController from '../controller/BookController'
import { createBookSchema, updateBookPriceSchema } from "../schema/BookSchema";
import BaseRoutes from "./base/BaseRouter";

export class BookRoutes extends BaseRoutes {

  public routes(): void {
     this.router.post("",validate(createBookSchema),BookController.create)
     this.router.patch("/:id:price",validate(updateBookPriceSchema),BookController.editPrice)
     this.router.delete("/:id",BookController.delete)
     this.router.get("",BookController.retriveAll)
     this.router.get("/:id",BookController.retriveById)


    }
    
}

export default new BookRoutes().router