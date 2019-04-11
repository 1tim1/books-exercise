import * as mongoose from "mongoose";

import authorModel from "../models/authorModel";
import bookModel from "../models/bookModel";

mongoose.connect("mongodb://localhost/books-exercise", {
  useNewUrlParser: true
});

const books = [
  {
    name: "milk and honey",
    author: "Tim",
    price: 14.99
  },
  {
    name: "Black Out",
    author: "Tim",
    price: 10.99
  },
  {
    name: "Harari",
    author: "Vittorio",
    price: 24.95
  },
  {
    name: "12 RULES FOR LIFE",
    author: "Vittorio",
    price: 12.09
  },
  {
    name: "The Hate U Give",
    author: "Tim",
    price: 7.39
  },
  {
    name: "String Book",
    author: "Vittorio",
    price: 8.0
  }
];

const authors = [
  {
    name: "Tim",
    books: []
  },
  {
    name: "Vittorio",
    books: []
  }
];

const seedDB = () => {
  bookModel.deleteMany({}, err => {
    if (err) console.log("Error deleting all books");
  });
  authorModel.deleteMany({}, err => {
    if (err) console.log("Error deleting all authors");
  });

  books.forEach(book => {
    bookModel.create(
      {
        name: book.name,
        author: book.author,
        price: book.price
      },
      err => {
        if (err) console.log("Error adding book");
      }
    );
  });

  authors.forEach(author => {
    authorModel.create(
      {
        name: author.name,
        books: []
      },
      err => {
        if (err) console.log("Error adding author");
      }
    );
  });
};

export default seedDB;
