var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;

/*
app.use uses 2 arguments; the route and the function 
that you do on that specific route or the file that you return.
this is best for middleware

both get and use have a route as the first argument

get's second argument contains a function that is explicitly set up as a response

use's second argument is middleware. it allows us to modify the message that we're sending to express. Depnding on our needs. For example, sql or
database stuff. 

RES. can do 
send
sendfile
status
json

SQL dependencies
Pgpromise
*/