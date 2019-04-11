import * as express from "express";
import * as dotenv from "dotenv";

import booksRouter from "./routes/books";

dotenv.config();

const app = express();

app.use("/books", booksRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on localhost:${process.env.PORT} ...`)
);
