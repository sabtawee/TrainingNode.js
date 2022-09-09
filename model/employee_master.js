const { Sequelize, DataTypes } = require("sequelize");
const database = require("./../instance/instance");

const emp_master = database.define(
  "employee_master",
  {
    // attributes
    employee_title_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employee_first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employee_last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employee_number: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    employee_sex: {
      type: Sequelize.STRING,
      defaultValue: "guest",
      allowNull: false,
    },
    division_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    //option
  }
);

(async () => {
  await emp_master.sync({ force: false });
})();

module.exports = emp_master;
