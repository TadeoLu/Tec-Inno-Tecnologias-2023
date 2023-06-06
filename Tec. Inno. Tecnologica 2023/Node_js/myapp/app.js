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
  let email = req.body.gmail;
  let DNI = req.body.dni;
  let contra = req.body.contraseña;
  let celu = req.body.telefono;
  console.log(req.body);
  connection.query(
    'insert into Cliente(dni, gmail, contraseña, celular) values (' +
      DNI +
      ', "' +
      email +
      '" , "' +
      contra +
      '" , "' +
      celu +
      '")',
    (error, results, fields) => {
      if (error) {
        res.send(error);
      }
      app.get("/insert", (req, res, error) => {
        res.send("Inserts successful");
      });
      res.redirect(301,"/insert");
    }
  );
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
