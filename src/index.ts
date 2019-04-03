import * as express from "express";

import booksRouter from "./routes/books";
import booksIDRouter from "./routes/booksID";

const app = express();

const PORT = 3000;

app.use("/books", booksRouter);
app.use("/books", booksIDRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT} ...`);
});
