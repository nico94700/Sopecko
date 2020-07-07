const mongoose = require('mongoose');// importe Mongoose//
const uniqueValidator = require('mongoose-unique-validator'); //Utilisateur unique//

const userSchema = mongoose.Schema({
  email: { 

    type: String, 
    lowercase:true,
    required: true, 
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'is invalid'],
    index:true,
},

//regex 
password: {
    type: String,
    required: true
 }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);