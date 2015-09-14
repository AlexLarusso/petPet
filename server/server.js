var express = require('express');
var app = express();
var routes = require('./routes');
var port = '4444';
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
var partials = require('express-partials');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'petPet'
});

connection.connect();

connection.query('SELECT * from `products`', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(log.logger);
app.use(express.static(__dirname + '/static'));

app.listen(port);

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/account/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function(req, res, next){
next(new Error('A contrived error'));
});

app.use(partials());
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

console.log("App server running on port: " + port);