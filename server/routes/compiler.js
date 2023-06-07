const express = require("express");

const { executeJs } = require("../executeJs");
const { generateFile } = require("../generateFile");

const router = express.Router();

router.route("/compile").post(async (req, res) => {
  const { languageType = "cpp", code } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }
  const filepath = await generateFile(languageType, code)
  if (languageType == "js") {
    try {
      const result = await executeJs(filepath);
      console.log(result);
      res.status(200).json({ success: true, "result": result });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false });
    }
  } else {
    res.status(200).json({ success: true });
  }

});

module.exports = router;
