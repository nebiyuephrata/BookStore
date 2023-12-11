import { Book } from "../models/Book"


type bookIdAndPrice = {
  id:number,
  price:number
}
interface IBookRepo {
  save(book: Book): Promise<void>
  editPrice(book: Book): Promise<void>
  delete(bookId: number): Promise<void>
  retrieveById(bookId: number): Promise<Book>
  retrieveAll(): Promise<Book[]>
}

export class BookRepo implements IBookRepo {
  async save(book: Book): Promise<void> {
    try {
      await Book.create({
        title: book.title,
        author: book.author,
        cover_image: book.cover_image,
        price: book.price,
        tags:book.tags
      })
    } catch (error:any) {
      throw new Error(`Failed to create a Book ${error.message}`)
    }
  }
  async editPrice(book: bookIdAndPrice): Promise<void> {
    try {
      //do something here
      const bookToBeEdited = await Book.findOne({
        where: {
          id: book.id,
        },
      })

      if (!bookToBeEdited) {
        throw new Error("Book not Found ")
      }
      bookToBeEdited.price = book.price

      await bookToBeEdited.save()
    } catch (error) {
      throw new Error("Failed to edit the price of the  Book ")
    }
  }
  async delete(bookId: number): Promise<void> {
    try {
      const bookToBeDeleted = await Book.findOne({
        where: {
          id: bookId,
        },
      })

      if (!bookToBeDeleted) throw new Error("book not found ")

      bookToBeDeleted.destroy()
    } catch (error) {
      throw new Error("")
    }
  }
  async retrieveById(bookId: number): Promise<Book> {
    try {
      const book = await Book.findOne({
        where: { id: bookId },
      })
      if (!book) throw new Error("book not found ")

      return book
    } catch (error) {
      throw new Error("")
    }
  }
  async retrieveAll(): Promise<Book[]> {
    try {
      return await Book.findAll()
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
