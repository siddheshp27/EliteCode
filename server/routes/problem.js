const express = require("express");
const { getProblem } = require("./../controllers/problemsController");

const router = express.Router();

router.route("/:p_id").get(getProblem).post();

module.exports = router;
