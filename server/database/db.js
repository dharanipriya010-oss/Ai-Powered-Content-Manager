const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./cms.db");

db.serialize(() => {

  db.run(`
  CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
  )
  `);

  db.run(`
  CREATE TABLE IF NOT EXISTS posts(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT
  )
  `);

});

module.exports = db;