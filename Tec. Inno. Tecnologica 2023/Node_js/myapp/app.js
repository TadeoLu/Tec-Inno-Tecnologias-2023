var http = require('http')
var fs = require('fs')
const express = require('express');
const app = express();
const path = require('path');

const port = 3000

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.use(express.static('files'));

app.get('/insert', function (req, res) {

});

app.listen(port);
console.log('Server started at http://localhost:' + port);

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
  database: 'mydb'
});


connection.connect();

connection.query('insert into Cliente(dni, gmail, contraseña, celular) values ({$dni}, {$gmail}, {$contraseña}, {$celular})', (error, results, fields) => {
  if (error) throw error;
  app.get('/insert', function (req, res) {
    res.sendFile(path.join(__dirname, '/insert.html'));
  });
});

connection.end();