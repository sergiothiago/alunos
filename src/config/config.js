module.exports = {
  development: {
    database: {
      host: "192.168.254.1",
      port: 3320,
      name: "NODE",
      dialect: "mariadb",
      user: "root",
      password: "root"
    }
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    }
  }
};
