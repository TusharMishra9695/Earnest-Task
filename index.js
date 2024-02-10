const express = require("express");
const app = express();
var cors = require("cors");

var bodyParser = require("body-parser");
const taskRouter = require("./routes/task");
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/task", taskRouter);

app.listen(port, () => {
  console.log(`Task listening on ${port}`);
});
