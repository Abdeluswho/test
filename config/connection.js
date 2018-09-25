const Sequelize = require("sequelize");
const key = require("./keys");

const sequelize = new Sequelize(
  key.mySqlDatabase,
  key.mySqlUser,
  key.mySqlPassword,
  {
    host: key.mySqlHost,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
