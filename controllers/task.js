const sql = require("mssql/msnodesqlv8");
const config = {
  server: "DESKTOP-K591M60SQLEXPRESS",
  database: "TaskApps",
  user: "DESKTOP-K591M60hp",
  password: "",
  options: {
    trustedConnection: true,
  },
  driver: "msnodesqlv8",
};

async function handleGetAllTask(req, res) {
  try {
    res.status(200).json({ result: "data fetched", success: true });
  } catch (e) {
    console.log(e, "error");
    res.status(500).json({ message: "Some Server Error", success: false });
  }
}

async function handlePostTask(req, res) {
  try {
    if (req.body.title && req.body.description && req.body.status) {
      sql.connect(config, function (err) {
        console.log("connected");
        var request = new sql.Request();
        var query =
          "INSERT INTO tasktable (title, description, status) VALUES ('" +
          req.body.title +
          "','" +
          req.body.description +
          "','" +
          req.body.status +
          "')";
        request.query(query, (err, result) => {
          if (err) {
            console.log("Error executing query:", err);
            return;
          }
          console.log("Data inserted successfully", result);
        });
      });
      res.status(201).json({ result: req.body, success: true });
    } else {
      res.status(400).json({
        result: "Required field not found",
        success: false,
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Some Server Error", success: false });
  }
}
async function handleUpdatetTask(req, res) {
  const { id } = req.params;
  try {
    res.status(200).json({ result: "Updated", success: true });
  } catch (e) {
    res.status(500).json({ message: "Some Server Error", success: false });
  }
}
async function handleDeleteTask(req, res) {
  try {
    res.status(200).json({ result: "Deleted", success: true });
  } catch (e) {
    res.status(500).json({ message: "Some Server Error", success: false });
  }
}

module.exports = {
  handleGetAllTask,
  handlePostTask,
  handleUpdatetTask,
  handleDeleteTask,
};
