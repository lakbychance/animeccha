const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/data"));
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
