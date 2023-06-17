const express = require("express");
const app = express();
const router = require("./routes/compiler");
const cors = require("cors");
const { authObj } = require("./auth")
require('express-openid-connect');
const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected Successfully')).catch((err) => { console.error(err); });

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const port = 8080;

//compiler route
app.use("/compiler", router);


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(authObj);

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

