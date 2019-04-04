import * as express from "express";
import data from "../data/books";

const router = express();

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  if (req.params.id > data.length || req.params.id < 1) {
    res.send("This book does not exist ...");
  } else {
    const index = req.params.id - 1;
    res.send(data[index]);
  }
});

export default router;
