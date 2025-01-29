require('dotenv').config()
const express = require('express');
const Roads = express();
const body = require('body-parser');
const {checkEmail, checkEmailExists, checkPassword, LoginUser, authToken} = require('../../middleware/auth');
const connection = require('../../config/db');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let global = '';

Roads.use(body.urlencoded({extended: true}));
Roads.use(body.json());
Roads.post('/signup', checkEmail, checkEmailExists, checkPassword, (req, res) => {
    res.send('Account created successfully');
});

Roads.post('/register', checkEmailExists, function (req, res) {
    var name_of_the_restaurant = req.body.name_of_the_restaurant;
    var email = req.body.email;
    var localisation = req.body.localisation;
    var contact = req.body.contacts;
    var password = req.body.password;

    let salt = bcrypt.genSaltSync(10);  
    global = bcrypt.hashSync(password, salt);

    password = global;
    var user = [
        name_of_the_restaurant,
        email,
        localisation,
        contact,
        password
    ];
    
    connection.query('INSERT INTO restaurant(name_of_the_restaurant, is_admin, email, localisation, contact, password) VALUES(?,false,?,?,?,?)', user, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Database error'});
        } else {
            res.status(200).json({message: 'Successfully registered'});
        }
    });
});

Roads.post('/auth', authToken, function(req, res) {
    let user_identity = {
        id: req.id,
        contact: req.contact
    }
    res.json({message : 'You are connected'});
});

Roads.post('/login', LoginUser, function(req, res) {
    var contact = req.body.contact;
    var password = req.body.password;
    var email = req.body.email;

    let identity = {
        id: req.id,
        contact: req.contact,
        email: req.email
    }

    let token = jwt.sign(identity, process.env.SECRET_KEY);
    res.status(200).send({token});
});

Roads.get('/User', authToken, function(req, res) {
    const query_connect = `SELECT * FROM restaurant WHERE id = '${req.id}'`;
    connection.query(query_connect, [req.id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result[0].email);
        }
    });
});

module.exports = Roads;
