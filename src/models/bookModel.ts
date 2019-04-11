import * as mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: String
});

const bookModel = new mongoose.model("Book", bookSchema);

export default bookModel;
