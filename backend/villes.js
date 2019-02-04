//Importation de la bibliothèque Express
const express = require('express');

//Importation du module body-parser
const bodyparser = require("body-parser");

//importation du module BD
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

 // ouverture de la base de données
connection.query('USE ecf');

 //exportaion du module
module.exports = connection;


/*//Importation du module de BD
const db = require("./db-connection");*/


//Initialisation de l'application Express
const app = express();

// Création des middleware
//Middleware recupération de la liste des villes
app.use("/villes", (req, res, next) => {
    connection.query("SELECT * FROM villes", (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            req.ville = data;
            next();
        }
    });

});
// Middleware récupération des données d'une ville
app.use("/ville/:id", (req, res, next) => {
    connection.query("SELECT * FROM villes WHERE id =?",
    [req.params.id],
    (err, data) => {
            if (err) {
                res.status(404).send(err);
            } else {
                req.ville = data[0];
                next();
            }
        }
    );
});

//Middleware pour insertion ville
app.use("/ville", (req, res, next) => {
    connection.query("SELECT * FROM villes", (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            req.villesList = data;
            next();
        }
    });
});


//Création des routes
//route pour Home
app.get("/villes", (req, res) => {     
    res.json(req.ville);
});

//route pour une ville
app.get("/ville/:id", (req, res) => {
    res.json(req.ville);
    });


//route pour insertion ville 
app.post("/ville", (req, res) => {
        
    let postedData = {
        ville: req.body.ville,
        pays: req.body.pays,
        continent: req.body.continent,
        pays: req.body.pays
    }

    connection.query("INSERT INTO villes SET ?", postedData,
        (err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect("/");
            }
        });    
});

//Lancement de l'application sur port donné
app.listen(3000);