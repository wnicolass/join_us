const express = require("express");
const db = require("./database/config");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const myQuery = "SELECT COUNT(*) AS count FROM users";
  db.query(myQuery, (err, results) => {
    if (err) {
      throw err;
    }
    const count = results[0].count;
    res.render("home", { count });
  });
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  db.query(`INSERT INTO users(email) VALUES('${email}')`, (err, results) => {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
