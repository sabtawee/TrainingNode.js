const Sequelize = require("sequelize");
const sequelize = new Sequelize("D7198", "sa", "sa@admin", {
  host: "10.121.1.122",
  dialect: "mssql",
  dialectOptions: {
    options: {
      instanceName: "SQLEXPRESS",
    },
  },
});

(async () => {
  await sequelize.authenticate();
})();

module.exports = sequelize;
