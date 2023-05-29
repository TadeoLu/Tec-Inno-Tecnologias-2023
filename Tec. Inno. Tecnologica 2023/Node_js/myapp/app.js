const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static("files"));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, error) => {
  res.sendFile(__dirname + "/index.html");
});

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "alumno",
  password: "alumnoipm",
  database: "TecSop",
});

connection.connect();

app.post("/insert", (req, res) => {
  let gmail = req.body.email;
  let dni = req.body.DNI;
  let contra = req.body.contra;
  let telefono = req.body.celular;
  console.log(req.body);
  connection.query(
    "insert into Cliente(dni, gmail, contrasenia, celular) values (" +
      dni +
      ", " +
      gmail +
      " , " +
      contra +
      " , " +
      telefono +
      ")",
    (error, results, fields) => {
      if (error) throw error;
      res.send("Inserts successful");
    }
  );
});

connection.end();

app.listen(port);
console.log("Server started at http://localhost:" + port);
