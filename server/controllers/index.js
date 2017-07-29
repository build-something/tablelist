const jwt = require('jsonwebtoken');
const Employee = require('models/employees');

let controllers = new Object()

//get employee
controllers.getemployee = (req, res)=>{
  jwt.verify(req.headers.token, process.env.SECRET, function(err, decoded) {
  if(err) res.send({message: "Log In First"})
    Employee.find({}).then((users)=>{
      res.send(users)
    })
  })
}

// create employee
controllers.employee = (req, res)=>{
  let data = req.body
      jwt.verify(req.headers.token, process.env.SECRET, (err, decode) => {
        if(err) res.send({message: 'login dulu please'})
        let saving = new Promise((resolve, reject)=>{
          let dummy = Array.apply(null,new Array(1000)).map((value, index)=>{
            return ({employee: `Jhon Doe ${index + 1}`})
          })
          Employee.insertMany(dummy).then((value)=>{
            resolve(value)
          }).catch((err)=>{
            reject(err)
          })
        })
        saving.then((value)=>{
          res.send(value)
        })
      })
}

module.exports = controllers