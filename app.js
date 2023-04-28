const express = require("express");
const app = express();
const path = require("path");
const dBPath = path.join(__dirname, "cricketTeam.db");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
//app.use(express.json());
let db = null;
const initalizeDbAndSever = async () => {
  try {
    db = await open({
      filename: dBPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB error is ${e.message}`);
    process.exit(1);
  }
};
initalizeDbAndSever();
