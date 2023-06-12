const express = require("express");
const compile = require("../compile");

const router = express.Router();

router.route("/compile").post((req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;
  compile(lang, code);
  console.log(req.body);
});

module.exports = router;
