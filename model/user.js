const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instance/instance");

const user = database.define(
  "user",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    employee_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    levelUser: {
      type: Sequelize.STRING,
      defaultValue: "guest",
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    //option
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;
