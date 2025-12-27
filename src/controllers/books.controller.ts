import type { Request, Response } from "express";
import type { Book } from "../types/Book";

class BooksController {

  private static Books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];

  static getAllBooks = (req: Request, res: Response) => {
    res.json(this.Books);
  };

  static getBookById = (req: Request, res: Response) => {
    
    const bookId = Number(req.params.id) as number | undefined;

    if (!bookId) {
      res.status(400).json({ message: "Book ID is required" });
      return;
    }
    
    const book = this.Books.find((b) => b.id === bookId);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  };

}

export default BooksController;
