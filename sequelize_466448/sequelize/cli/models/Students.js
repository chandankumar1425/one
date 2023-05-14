module.exports = (sequelize, Datatypes) => {
  const Students = sequelize.define("students", {
    name: { type: Datatypes.STRING, allowNull: false }, // NOT NULL
    email: Datatypes.STRING,
    age: Datatypes.INTEGER,
    courseID: {
      type: Datatypes.INTEGER,
      references: {
        model: "courses",
        key: "id",
      },
    },
  });
  return Students;
};
