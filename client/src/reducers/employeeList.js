

const register = (state, payload) =>{
  let alert = payload.hasOwnProperty("message") ?
    {...state.alert, ...payload, status:true}
  :
    {...state.alert, message: "Register Sucess", status: true}
  let newData = {...state, alert}
  return newData
}

const netral = (state, payload) => {
  if(payload === 'token'){
    let data = {...initialState.data}
    let newData = {...state, data}
    return newData
  } else {
    let alert = {...state.alert, ...initialState.alert}
    let newData = {...state, alert}
    return newData
  }
}

const login = (state, payload) => {
  if(payload.hasOwnProperty('message')){
    let alert = {...state.alert, ...payload, status: true}
    let newData = {...state, alert}
    return newData
  } else {
    let data = {...state.data, ...payload}
    let newData = {...state, data}
    return newData
  }
}

const check = (state, payload) => {
  let data = {...payload}
  let newData = {...state, data}
  return newData
}

const show = (state, payload) => {
  let newData = {...state, list: payload}
  return newData
}


let initialState = {
  alert: {
    status: false,
    message: ""
  },
  data: {
    username: "",
    token: ""
  },
  list:[]
};


const employeeList = (store=initialState, actions)=>{
  switch (actions.type) {
    case 'REGIS': return register(store, actions.payload)
    case 'NETRAL': return netral(store, actions.payload)
    case 'LOGIN': return login(store, actions.payload)
    case 'CHECK': return check(store, actions.payload)
    case 'SHOW': return show(store, actions.payload)
    default: return store
  }
}

export default employeeList