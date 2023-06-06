const express = require("express");

const router = express.Router();

router.route("/compile").post((req, res) => {
  console.log(req.body);
  res.json({ success: "true" });
});

module.exports = router;
