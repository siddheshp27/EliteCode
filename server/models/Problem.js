const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  p_id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  statement: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    require: true,
    enum: ["Easy", "Medium", "Hard"],
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  dislikes: {
    type: Number,
    required: true,
    default: 0,
  },
});

const exampleSchema = mongoose.Schema({
  p_id: {
    type: Number,
    required: true,
  },
  input: {
    type: Object,
    required: true,
  },
  output: {
    type: Object,
    required: true,
  },
});

const testCasesSchema = mongoose.Schema({
  p_id: {
    type: Number,
    required: true,
  },
  input: {
    type: Object,
    required: true,
  },
  ouptu: {
    type: Object,
    required: true,
  },
});

const Problem = mongoose.model("Problem", problemSchema);
const Examples = mongoose.model("Examples", exampleSchema);
const TestCases = mongoose.model("TestCases", testCasesSchema);

module.exports = { Problem, Examples, TestCases };
