module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.backet = backet;


function index(req, res){
res.render('index', {title: 'title'});
};

function login(req, res){
res.send('Login');
};
function loginProcess(req, res){
res.redirect('/');
};
function backet(req, res){
res.send('backet');
};
