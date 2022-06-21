'use strict';

import BookModel, { Book } from '../models/Book';

class BooksBo {
  public async getBooks(): Promise<Book[]> {
    const books: Book[] = await BookModel.find();

    return books;
  }

  public async saveBook(
    title: string,
    author: string,
    isbn: string,
  ): Promise<Book> {
    const book: Book = new BookModel({ title, author, isbn });
    const bookSave: Book = await book.save();

    return bookSave;
  }
}

export const booksBo = new BooksBo();
