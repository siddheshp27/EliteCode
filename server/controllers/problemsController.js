const { Problem, Examples, TestCases } = require("./../models/Problem");

//Problem
const getProblem = async (req, res) => {
  res.json(req.params);
};

const addProblem = async (req, res) => {
  const data = req.body;

  Problem.insertMany(data)
    .then(() => console.log("noice"))
    .catch((err) => console.log(err));

  res.json(req.body);
};

module.exports = { getProblem, addProblem };
