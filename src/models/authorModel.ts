import * as mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: String,
  books: []
});

const authorModel = new mongoose.model("Author", authorSchema);

export default authorModel;
