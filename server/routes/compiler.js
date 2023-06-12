const express = require("express");
const compile = require("../compile");

const router = express.Router();

router.route("/compile").post(async (req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;
  const output = await compile(lang, code);
  console.log(req.body);
  res.json({ output: output });
});

module.exports = router;
