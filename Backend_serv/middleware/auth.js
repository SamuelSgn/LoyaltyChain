require('dotenv').config()
const express = require("express");
const mid = express();
const jwt = require("jsonwebtoken");
const connection = require("../config/db");
const encrypt = require('bcrypt');

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function checkEmail(req, res, next) {
    const mail = isValidEmail(req.body.email);
    if (mail) {
        next();
    } else {
        res.send("Invalid email");
    }
}

function checkstring(str){
    return /^[A-Za-z0-9]*$/.test(str);
}

function isValidPassword(password){
    let isValid = checkstring(password);
    if (password.length >= 8 && isValid == true) {
        return true;
    } else {
        return false;
    }
}

function checkPassword(req, res, next){
    const words = isValidPassword(req.body.password);
    if (words){
        next();
    } else {
        res.status(400).send("Invalid password or contact");
    }
}

function checkEmailExists(req, res, next){
    const query_mail = `SELECT * FROM restaurant WHERE email = '${req.body.email}'`;
    connection.query(query_mail, [req.body.email], (err, results) => {
        if (err){
            res.send(err);
        } else {
            if (results.length > 0){
                res.send('Account already exists');
            } else {
                next();
            }
        }
    });
}

function LoginUser(req, res, next){
    const query_contact = `SELECT * FROM restaurant WHERE contact = '${req.body.contact}'`;
    connection.query(query_contact, (err, results) => {
        if (err){
            res.send(err);
        } else {
            if (results.length > 0) {
                encrypt.compare(req.body.password, results[0].password, (error, same) => {
                    if (error){
                        console.error(error);
                    } else {
                        if (same){
                            req.id = results[0].id;
                            req.contact = results[0].contact;
                            next();
                        } else {
                            // console.log(error);
                            res.send("Incorrect password");
                        }
                    }
                });
            } else {
                res.send("Incorrect contact");
            }
        }
    });
}

function authToken(req, res, next){
    try {
        const token = req.headers.authorization.split(' ')[1];
        const response = jwt.verify(token, process.env.SECRET_KEY);
        req.id = response.id;
        req.contact = response.contact;
        req.email = response.email;
        next();
    } catch {
        // console.log(response);
        res.status(500).send("error");
    }
}

module.exports = {
    checkEmail,
    checkEmailExists,
    LoginUser,
    authToken,
    checkPassword
}