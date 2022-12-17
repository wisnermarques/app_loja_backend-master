const { Sequelize } = require("sequelize");

if (process.env.NODE_ENV == "production") {
  const connection = new Sequelize("bdloja", "user_bdloja", "Senac@2022", {
    host: "svc-app-loja.mysql.database.azure.com",
    port: 3306,
    dialect: "mysql",
    timezone: "-03:00",
    ssl: { ca: fs.readFileSync("{ca-cert filename}") },
  });

  module.exports = connection;
} else {
  const connection = new Sequelize("bdloja", "user_bdloja", "Senac@2022", {
    host: "svc-app-loja.mysql.database.azure.com",
    port: 3306,
    dialect: "mysql",
    timezone: "-03:00",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  });

  module.exports = connection;
}
