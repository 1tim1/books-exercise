import * as express from "express";

import data from "../data/books";

const router = express();

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  for (const i in data) {
    if (req.params.id === `${data[i]._id}`) {
      res.send(data[i]);
    }
  }
  res.send("Book not found ...");
});

export default router;
