import {combineReducers} from 'redux'
import employeeList from './employeeList'

const rootReducer = combineReducers({
  employee : employeeList
})

export default rootReducer