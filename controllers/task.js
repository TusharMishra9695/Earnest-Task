async function handleGetAllTask(req, res) {
  res.send({ result: "get all task", success: true });
}

async function handlePostTask(req, res) {
  res.send({ result: "post task", success: true });
}
async function handleUpdatetTask(req, res) {
  res.send({ result: "update task", success: true });
}
async function handleDeleteTask(req, res) {
  res.send({ result: "delete task", success: true });
}

module.exports = {
  handleGetAllTask,
  handlePostTask,
  handleUpdatetTask,
  handleDeleteTask,
};
