const express = require("express");
const Sequelize = require("sequelize");

const seq = new Sequelize("admission", "root", "Sourav@1999", {
  host: "localhost",
  dialect: "mysql", // postgress, Oracle, MS-SQL, mariadb
});

// students -> Table Name
const students = seq.define("students", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  age: Sequelize.INTEGER,
});
const app = express();

app.get("/api/students", async (req, res) => {
  try {
    const data = await students.findAll();
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(404).json({
      isError: true,
      error,
    });
  }
});

// mongoose.connect -> Promise
seq.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Started");
  });
});
