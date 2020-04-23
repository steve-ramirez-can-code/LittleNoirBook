var express = require('express');
var path = require('path');
var logger = require('morgan');

/*
Morgan is useful for logging everything that the backend does to the console in the terminal
*/
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 3001;
var users = require('./users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/*
Notice the order of how the file is structured. Middleware should be named before the actual request. so usually app.use
comes before app.get
*/
app.use('/users', users);

//Serving static files
app.use(express.static(path.join(__dirname, '../build')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found- Checking this is in expressapp.js');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(500)
    .json({error: err.message || 'something went wrong'});
    /*
    200 means that the request was successful 
    304 means you already have the expected sucessful response
    404 means that there was an error. Not found
    */
});

app.listen(port, () =>{
    console.log(`App listening on ${port}: this is expressapp.js line 48`)
})

module.exports = app;

/*
app.use uses 2 arguments; the route and the function 
that you do on that specific route or the file that you return.
this is best for middleware

both get and use have a route as the first argument

get's second argument contains a function that is explicitly set up as a response

use's second argument is middleware. it allows us to modify the message that we're sending to express. Depnding on our needs. For example, sql or
database crap. 

RES. can do 
send
sendfile
status
json

SQL dependencies
Pgpromise
*/


