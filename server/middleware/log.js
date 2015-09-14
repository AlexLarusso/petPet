exports.logger = function logger(req, res, next){
console.log(req.headers['host'] + req.url);
next();
};