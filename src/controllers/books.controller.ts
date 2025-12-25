import type { Request, Response } from "express";
import type { Book } from "../types/Book";

class BooksController {

  private Books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];

  getAllBooks = (req: Request, res: Response) => {
    res.json(this.Books);
  };
}


export default new BooksController();
