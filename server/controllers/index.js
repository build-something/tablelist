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
  if(req.headers.token){
      jwt.verify(req.headers.token, process.env.SECRET)
      let saving = new Promise((resolve, reject)=>{
        let dummy = Array.apply(null,new Array(1000)).map((value, index)=>{
          return ({employee: `${data.username} ${index+1}`})
        })
        console.log(dummy)
        Employee.insertMany(dummy).then(()=>{
          resolve({message:'has been add'})
        }).catch((err)=>{
          reject(err)
        })
      })
      saving.then((message)=>{
        res.send(message)
      })
  } else {
    res.send({message: 'login dulu please'})
  }
}

module.exports = controllers