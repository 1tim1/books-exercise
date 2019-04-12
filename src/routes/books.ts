import * as express from "express";

import books from "../data/books";

const router = express();

router.get("/", (req, res) => res.send(books));

router.get("/:id", (req, res) => {
  const IDBook = books.find(book => {
    if (book._id == req.params.id) {
      return book;
    }
  });
  res.send(IDBook);
});

export default router;
