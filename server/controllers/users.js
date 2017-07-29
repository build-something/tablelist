const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('models/users');

require('dotenv').config()

let controllers = new Object()

controllers.checkToken = (req, res)=>{
  jwt.verify(req.headers.token, process.env.SECRET, (err, decoded)=>{
    if(err) res.send(err)
    res.send(decoded)
  })
}

controllers.signIn = (req,res)=>{
  let data = req.body
  User.findOne({username: data.username},(err, user)=>{
    if(user){
      bcrypt.compare(data.password, user.password).then(resolve => {
        let token = jwt.sign({
                      username: data.username
                    }, process.env.SECRET, {expiresIn: '1d'})
        jwt.verify(token, process.env.SECRET, function(err, decoded){
          if(err) res.send(err)
          res.send({username:decoded.username, token})
        });
      })
    }
  })
}

controllers.signUp = (req, res)=>{
  let data = req.body
  User.findOne({username: data.username},(err, user)=>{
    if(!user){
      bcrypt.hash(data.password, Number(process.env.SALT)).then(function(hash) {
        let newUser = new User({
          username: data.username,
          password: hash
        })
        newUser.save((err, user)=>{
          if(!err){
            res.send(user)
          }
        })
      })
    } else {
      res.send({message: `username has been use`})
    }
  })
}

module.exports = controllers;