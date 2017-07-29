

export const saving = (data) => {
  return dispatch => (
    fetch('http://localhost:3000/user/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resolve => dispatch({type: "REGIS", payload: resolve}))
    .catch(err => {console.log(err)})
  )
}

export const netral = (value)=>{
  if(value === 'token') return {type:"NETRAL", payload:value}
}

export const login = (data)=>{
  return dispatch => (
    fetch('http://localhost:3000/user/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resolve => dispatch({type:"LOGIN", payload:resolve}))
    .catch(err => {console.log(err)})
  )
}