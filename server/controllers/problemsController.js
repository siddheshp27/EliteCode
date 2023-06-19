const { Problem, Examples, TestCases } = require("./../models/Problem");

//Problem
const getProblem = async (req, res) => {
  res.json(req.params);
};

module.exports = { getProblem };
