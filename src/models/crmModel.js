import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firsName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  company: {
    Type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
