// const express = require("express")
import * as express from "express";
// import data from './data/books.js'

const app = express();

app.get("/books", (req, res) => {
    res.send("ciao");
});

const PORT = 3000;

app.listen(PORT, () => {
    return `Server is listening on localhost:${PORT} ...`;
});
