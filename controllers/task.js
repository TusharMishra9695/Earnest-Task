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
    const pool = await sql.connect(config);
    const poolConnection = await pool.connect();
    const request = poolConnection.request();
    const query = "SELECT * FROM Tasktable";
    const result = await request.query(query);
    res.status(200).json({ result: result.recordset, success: true });
    poolConnection.release();
  } catch (e) {
    console.log(e, "error");
    res
      .status(500)
      .json({ message: "Some Server Error in Get", success: false });
  }
}

async function handlePostTask(req, res) {
  try {
    if (req.body.title && req.body.description && req.body.status) {
      const pool = await sql.connect(config);
      const poolConnection = await pool.connect();
      const request = poolConnection.request();
      const query =
        "INSERT INTO Tasktable (title, description, status) VALUES ('" +
        req.body.title +
        "','" +
        req.body.description +
        "','" +
        req.body.status +
        "')";
      await request.query(query);
      res
        .status(201)
        .json({ result: "Task Created Successfully", success: true });
      poolConnection.release();
    } else {
      res.status(400).json({
        result: "Required field not found",
        success: false,
      });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Some Server Error in Post", success: false });
  }
}
async function handleUpdatetTask(req, res) {
  try {
    const pool = await sql.connect(config);
    const poolConnection = await pool.connect();
    const request = poolConnection.request();
    const query = `UPDATE Tasktable SET status=1 WHERE id=${req.query.id + 1}`;
    await request.query(query);
    res.status(200).json({ result: "Updated", success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Some Server Error in Update", success: false });
  }
}
async function handleDeleteTask(req, res) {
  try {
    const pool = await sql.connect(config);
    const poolConnection = await pool.connect();
    const request = poolConnection.request();
    const query = `DELETE FROM Tasktable WHERE id=${req.query.id + 1}`;
    await request.query(query);
    res.status(200).json({ result: "Deleted", success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Some Server Error in Delete", success: false });
  }
}

module.exports = {
  handleGetAllTask,
  handlePostTask,
  handleUpdatetTask,
  handleDeleteTask,
};
