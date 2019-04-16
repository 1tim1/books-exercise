import * as express from "express";

import authors from "../data/authors";
import books from "../data/books";

const router = express();

router.get("/", (_req, res) => res.send(authors));

router.get("/:id", (req, res) => {
  const IDAuthor = authors.find(author => {
    if (author._id === parseInt(req.params.id)) {
      author.books = [];
      books.filter(book => {
        if (author.name === book.author) {
          author.books.push(book);
        }
      });
      return author;
    }
  });
  res.send(IDAuthor);
});

export default router;
