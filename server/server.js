const express = require("express");
const app = express();
const router = require("./routes/compiler");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

const port = 8080;

//compiler route
app.use("/compiler", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
