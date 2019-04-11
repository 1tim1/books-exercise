import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";

import booksRouter from "./routes/books";
import seedDB from "./script/seedDB";

mongoose.connect("mongodb://localhost/books-exercise", {
  useNewUrlParser: true
});

dotenv.config();

const app = express();

seedDB();

app.use("/books", booksRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on localhost:${process.env.PORT} ...`)
);
