const db = require("./models/index");
const { students, courses } = require("./models/index");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/students", async (req, res) => {
  try {
    courses.hasMany(students, { foreignkey: "courseID" });
    students.belongsTo(courses, { foreignkey: "courseID" });
    const data = await students.findAll({
      include: [{ model: courses }],
    });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      isError: true,
      error,
    });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    const data = await students.create({
      ...req.body,
    });
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
// CRUD -> C -> create, R -> findAll, U -> upsert, D -> destroy

app.get("/api/courses", async (req, res) => {
  try {
    const data = await courses.findAll();
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

app.post("/api/courses", async (req, res) => {
  try {
    const data = await courses.create({
      ...req.body,
    });
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
app.put("/api/courses/:id", async (req, res) => {
  try {
    const data = await courses.upsert({
      id: req.params.id,
      ...req.body,
    });
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
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const data = await courses.destroy({
      where: {
        id: req.params.id,
      },
    });
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
// mongoose.connect -> promise
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Started");
  });
});
