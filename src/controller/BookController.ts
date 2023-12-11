import { Request, Response } from "express"
import { Book } from "../models/Book"
import { BookRepo } from "../repository/BookRepo"

class BookController {
  async create(req: Request, res: Response) {
    try {
      const newBook = new Book()

      newBook.title = req.body.title
      newBook.author = req.body.author
      newBook.cover_image = req.body.coverImage
      newBook.price = req.body.price
      newBook.tags = req.body.tags

      await new BookRepo().save(newBook)

      res.status(201).json({
        status: "Created!",
        msg: "Successfully created Book",
      })
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        msg: err,
      })
    }
  }
  async editPrice(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"])
      const price = parseInt(req.params["price"])

      await new BookRepo().editPrice({ id, price })

      res.status(201).json({
        status: "Edited!",
        msg: "Successfully edited  Book Price",
      })
    } catch (err) {
      res.status(500).json({
        status: "failed to edit Book Price",
        msg: err,
      })
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"])

      await new BookRepo().delete(id)

      res.status(200).json({
        status: "OK!",
        msg: "Successfully edited  Book Price",
      })
    } catch (err) {
      res.status(500).json({
        status: "failed to Delete Book ",
        msg: err,
      })
    }
  }

  async retriveById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"])

      const book = await new BookRepo().retrieveById(id)

      res.status(200).json({
        status: "OK!",
        data:book,
      })
    } catch (err) {
      res.status(500).json({
        status: "faild to retrive books",
        msg: err,
      })
    }
  }
  async retriveAll(req: Request, res: Response) {
    try {
      const books = await new BookRepo().retrieveAll()

      res.status(200).json({
        status: "OK!",
        data:books,
      })
    } catch (err:any) {
      console.log(err)
      res.status(500).json({
        status: "failed to retrive books  ",
        msg: err,
      })
    }
  }
}


export default new BookController();