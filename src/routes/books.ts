import * as express from "express";
import * as mongoose from "mongoose";

import bookModel from "../models/bookModel";

mongoose.connect("mongodb://localhost/books-exercise");

const router = express();

router.get("/", (req, res) => {
  bookModel.find({}, (err, foundBooks) => {
    if (err) {
      console.log("Error finding all Books");
    } else {
      res.send(foundBooks);
    }
  });
});

router.get("/:id", (req, res) => {
  bookModel.findById(req.params.id, (err, foundBook) => {
    if (err) {
      console.log("Error finding Book by ID");
    } else {
      res.send(foundBook);
    }
  });
});

export default router;
