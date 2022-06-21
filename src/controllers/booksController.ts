'use strict';

import { Request, Response } from 'express';
import { booksBo } from '../bos/booksBo';
import { Book } from '../models/Book';

class BooksController {
  public async getBooks(req: Request, res: Response): Promise<void> {
    const books: Book[] = await booksBo.getBooks();
    res.status(200).json({ results: books });
  }

  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;

    const book: Book = await booksBo.saveBook(title, author, isbn );

    res.status(201).json({ result: book });
  }
}

export const booksController = new BooksController();
