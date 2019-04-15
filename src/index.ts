import * as dotenv from "dotenv";
import * as express from "express";

import authorsRouter from "./routes/authors";
import booksRouter from "./routes/books";

dotenv.config();

const app = express();

app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

const PORT = parseInt(process.env.PORT) || 3000;

app.listen(PORT, () =>
  console.log(`Server is listening on localhost:${PORT} ...`)
);
