// Ajout des packages suplémentaires
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Création des tokens d'authentification
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // retourner un tableau 
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');// Vérifier la clé 
    const userId = decodedToken.userId; 
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: Error |'Invalid request!' });
  }
};