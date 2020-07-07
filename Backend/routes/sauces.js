// Ajout des packages suplémentaires
const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauces');

//Import du middleware auth pour sécuriser les routes//
/*******************************************************/
const auth = require('../middleware/auth');

//Import du middleware multer pour la gestion des images//
/*********************************************************/
const multer = require ('../middleware/multer-config');

// Toutes les toutes des API
router.post ('/', auth, multer, sauceCtrl.createSauce); //* Creer une nouvel objet sauce *//
router.put ('/:id', auth, multer, sauceCtrl.modifySauce); //* Mettre à jour l'objet suivant l'utilisateur *//
router.delete('/:id', auth, sauceCtrl.deleteSauce); //* Supprime la sauce choisie *//
router.get('/:id', auth, sauceCtrl.getOneSauce); //*Affiche une sauce unique*//
router.get('/', auth, sauceCtrl.getListe);//* Affiche toutes les sauces *//
router.post('/:id/like', auth, sauceCtrl.likeSauce);//* mettre un jour les likes et dislikes*//


module.exports = router;