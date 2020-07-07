// Packages suplémentaires//
/***************************/
const express = require('express'); // Importe Express//
const bodyParser = require ('body-parser');// Transforme le corps de la requête en JSON//
const mongoose = require('mongoose');// Importe MongoDB
const path = require('path');
require("dotenv").config();

// Création de l'application express//
/*************************************/
const app = express();

//Import routes//
/*******************/
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const ID = process.env.ID;
const MDP = process.env.MDP;


// Connection à MongoDB "Base de donnée"//
/********************************************/
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-enxkf.mongodb.net/test?retryWrites=true&w=majority`,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true })


  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Contourner les erreurs de CORS//
/************************************/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// La requête est traduit en format JSON//
/******************************************/
app.use(bodyParser.json());

// Ressource image en statique//
/**********************************/
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes attendues pour les differentes API//
/************************************************/
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;