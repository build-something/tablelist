

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
    let newData = {...state, ...initialState}
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
  let newData = {...state, list: payload, loader: false}
  return newData
}

const loading = (state, payload) => {
  let newData = {...state, loader: payload}
  return newData
}

const checkPages = (state, payload)=>{
  if(payload === 'next'){
    let nextPage = {...state}
    nextPage['pages'] += 1
    return nextPage
  }
  let prevPages = {...state}
  prevPages['pages'] -= 1
  return prevPages
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
  list:[],
  loader: false,
  pages: 1
};


const employeeList = (store=initialState, actions)=>{
  switch (actions.type) {
    case 'REGIS': return register(store, actions.payload)
    case 'NETRAL': return netral(store, actions.payload)
    case 'LOGIN': return login(store, actions.payload)
    case 'CHECK': return check(store, actions.payload)
    case 'SHOW': return show(store, actions.payload)
    case 'LOADER': return loading(store, actions.payload)
    case 'CHECK_PAGES': return checkPages(store, actions.payload)
    default: return store
  }
}

export default employeeList