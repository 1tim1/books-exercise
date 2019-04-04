import * as express from "express";

import booksRouter from "./routes/books";

const app = express();

const PORT = 3000;

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT} ...`);
});
