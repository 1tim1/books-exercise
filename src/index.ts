// const express = require("express")
import * as express from "express";
import * as booksRouter from "./routes/books";
// import data from './data/books.js'

const app = express();

const PORT = 3000;

app.use("/books", booksRouter);

app.listen(PORT, () => {
    return `Server is listening on localhost:${PORT} ...`;
});
