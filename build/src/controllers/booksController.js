'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const booksBo_1 = require("../bos/booksBo");
class BooksController {
    getBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield booksBo_1.booksBo.getBooks();
            res.status(200).json({ results: books });
        });
    }
    saveBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, isbn } = req.body;
            const book = yield booksBo_1.booksBo.saveBook(title, author, isbn);
            res.status(201).json({ result: book });
        });
    }
}
exports.booksController = new BooksController();
