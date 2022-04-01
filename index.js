const bodyParser = require("body-parser");
var express = require("express");
const flash = require("express-flash");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var bodyParser = require("body-parser");

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));

app.use(flash());

app.get("/",(req, res) => {
    console.log("Está rodando...");
    res.send("Rodando...")
})

app.listen(3000,(req, res) => {
    console.log("Servidor rodando!");
});