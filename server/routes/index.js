module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.backet = backet;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'petPet'
});



function index(req, res){

	res.render('index', {title: 'Index'});

};


function login(req, res){
res.render('login', {title: 'Login'});
};

function loginProcess(req, res){
res.redirect('/');
};

function backet(req, res){
res.render('backet', {title: 'Backet'});
};
