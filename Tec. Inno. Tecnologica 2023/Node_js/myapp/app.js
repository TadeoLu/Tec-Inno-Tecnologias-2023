var http = require('http')
var fs = require('fs')
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.use(express.static('files'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
 
// fs.readFile('./index.html',function(error, html){
//     if(error) throw error;
//     http.createServer(function(request,response){
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end(); 
//     }).listen(port)
// });



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'TecSop'
});


connection.connect();

// connection.query("select 2 + 2 as suma", (error, req, res) => {
//   if (error) throw error;
//   console.log(res);
// });

app.post('/insert', (req, res) => {
  let gmail = req.body.email;
  let dni = req.body.DNI;
  let contra = req.body.contra;
  let telefono = req.body.celular;
  console.log(req.body);
  connection.query('insert into Cliente(dni, gmail, contraseña, celular) values (' + dni + ', ' + gmail + ' , ' + contra + ' , ' + telefono + ')', (error, results, fields) => {
      if (error) throw error;
      res.send('Inserts successful');
  });
})


app.listen(port);
console.log('Server started at http://localhost:' + port);
