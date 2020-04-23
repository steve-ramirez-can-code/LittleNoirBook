/*
    Queries is specifically for interactions with the Database only!!!
    Routes is for interactions with how the backend deals with front end interactions outside of 
    database
*/ 

var pgp = require ("pg-promise")({});
var connectionString = "postgres://localhost/lbb";
var db = pgp(connectionString)

const getUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
    console.log(`this is in getsusers fun in queries: ${req}`)
    .then((data) => {
        res.status(200)
        .send({
            data: data
        });
    })
    .catch((err)=>{
        return ("this is an error")
    })
};

const createUser = (req, res, next) => {
    console.log(`we are hitting createUser in queries.js. this is req.body: ${req}`)
    db.any('INSERT INTO users (first_name, last_name, user_name, email_address, sexuality, gender, password_digest, password_confirm) VALUES (${firstName}, ${lastName}, ${userName}, ${emailAddress} ,${sexuality} ,${gender} ,${passwordDigest}, ${passwordConfirm})', req.body)
    .then(() =>{
        res.status(200)
        .json({
            message: "Registration Successful"
        })
    })
    .catch((err)=>{
        res.status(500)
        .json({
            message:err
        })
    })
}

const verifyUser = (req, res, next) => {
    console.log(`we are hitting verifyUser in queries js: ${req}`)
    db.one('SELECT * FROM users WHERE user_name = ${userName} AND password_confirm = ${passwordConfirm}',req.body)
    .then((data) =>{
        res.status(200)
        .json({
            data:data
        })
    })
    .catch((err)=>{
        res.status(500)
        .json({
            message:"You haven't registered yet!"
        })
    })
}

const createContact = (req, res, next) => {
    console.log(`we are hitting createContact in queries.js: ${req}`)
    db.any('INSERT INTO contacts (person_name, user_id, person_phone, address, date, safe_yes, birth_control, last_tested, last_tested_date, status, promiscuity, extra_notes, rating, menstruating) VALUES (${personName}, ${userId}, ${personPhone}, ${address}, ${date} ,${safeYes} ,${birthControl} ,${lastTested}, ${lastTestedDate}, ${status}, ${promiscuity}, ${extraNotes}, ${rating}, ${menstruating})', req.body)
    .then(() =>{
        res.status(200)
        .json({
            message: "Contact Created"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.status(500)
        .json({
            message:err
        })
    })
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
module.exports = {
    getUsers,
    createUser,
    verifyUser,
    createContact
}
