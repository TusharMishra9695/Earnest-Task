const express = require("express");
const router = express.Router();

const {
  handleGetAllTask,
  handlePostTask,
  handleUpdatetTask,
  handleDeleteTask,
} = require("../controllers/task");

router
  .get("/", handleGetAllTask)
  .post("/", handlePostTask)
  .patch("/", handleUpdatetTask)
  .delete("/", handleDeleteTask);

module.exports = router;
