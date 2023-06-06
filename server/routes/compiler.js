const express = require("express");
const generateFile = require("../generateFile");

const router = express.Router();

router.route("/compile").post((req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;
  generateFile(lang, code);
  console.log(req.body);

  res.json({ success: "true" });
});

module.exports = router;
