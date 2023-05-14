module.exports = (sequelize, Datatypes) => {
  const Course = sequelize.define("courses", {
    name: Datatypes.STRING,
    level: Datatypes.INTEGER,
  });
  return Course;
};
