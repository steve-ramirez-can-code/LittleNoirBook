var express = require('express');
var router = express.Router();
let db = require('../db/queries')

/*router is used to package things in such way that allows for a better organization of routing. Only way to do routing
outside of app.js. Router is a way to keep all the infromation viable between files without losing info. 
Much like props and state in react */

/* arguments: (route,(function or file)
in this case: route = / which is users and db.getUsers is a function  
the slash in here is refering to the previous file path it was taking. in this case users. /users is unnecessary    / is enough
*/

//Queries are here as I get my database up and functional

// router.get("/", db.getUsers)
// router.post("/register", db.createUser)

// router.post("/login", db.verifyUser)

// router.post("/createcontact", db.createContact)


router.post("/register", function(req, res, next){
    res.send(`hey there! this is the req: ${req.body}`)
    // res.redirect('../')
})

router.post("/*", function(req, res, next){
    res.send(`hey there! this is the req: ${req.body}`)
})

router.post("/login", function(req, res, next){
    res.send(`hey there! this is the req: ${req.body}`)
    // res.redirect('../')
})
router.post("/createcontact", db.createContact)

router.get("/test", function(req,res,next){
    res.render('index', {title: 'testing the users/test route'})
})

module.exports = router
