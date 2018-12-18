const express = require("express");

// var bodyParser = require("body-parser");
// var contactRoute = require("./routes/contact");

const app = express();

app.get("/", function(req, res) {
  res.send("asdasdasdsa");
});

const port = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/contact", contactRoute);

app.listen(port, () => console.log(`server running on port ${port}`));
