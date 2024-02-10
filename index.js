const express = require("express");
const app = express();
const taskRouter = require("./routes/task");
const port = 5000;
app.use("/api/task", taskRouter);

app.listen(port, () => {
  console.log(`Task listening on ${port}`);
});
