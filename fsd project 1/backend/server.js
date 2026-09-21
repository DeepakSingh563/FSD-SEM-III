const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/StudentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
