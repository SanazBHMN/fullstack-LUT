const express = require("express");
const path = require("path");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, () => {
  console.log("THE SERVER IS RUNNING ON PORT 8000");
});
