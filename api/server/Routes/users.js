var express = require('express');
var router = express.Router();
let db = require('../db/queries')

/*router is used to package things in such way that allows for a better organization of routing. Only way to do routing
outside of app.js. Router is a way to keep all the infromation viable between files without losing info. 
Much like props and state in react */

router.get("/", db.getUsers)
/* arguments: (route,(function or file)
in this case: route = / which is students and db.getStudents is a function  
the slash in here is refering to the previous file path it was taking. in this case students. /students is unnecessary
/ is enoughule.exports = router
*/
router.post("/register", db.createUser)

router.post("/login", db.verifyUser)

router.post("/createcontact", db.createContact)

// router.get("")

module.exports = router
