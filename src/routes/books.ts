import * as express from "express";
import data from "../data/books";

const router = express();

router.get("/", (req, res) => {
  res.send(data);
});

export default router;
