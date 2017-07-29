import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Menu, Image} from 'semantic-ui-react'

import logo from '../../public/image/logo.svg';
import '../../public/css/App.css';
import {netral, check} from '../../actions'

import Button from './Button'

class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      unactive: [
        {
          name: "LOGIN",
          color: "primary"
        },{
          name: "SIGNUP",
          color: "basic"
        }
      ],
      username: "",
      active: [
        {
          name: "INSERT",
          color: "twitter"
        },{
          name: "LOGOUT",
          color: "google plus"
        }
      ]
    }
  }

  componentWillMount() {
    let token = localStorage.getItem('token')
    if(localStorage.hasOwnProperty('token')) this.props.checkAvailableToken(token)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    let checkStorage = localStorage.getItem('token')
    let receive = newProps.store.employee
    if(receive.alert.status) this.alerting(receive.alert.message)
    if(receive.data.token !== "" && !checkStorage) this.setToken(receive.data, checkStorage)
    if(receive.data.token === "" && checkStorage) this.clearToken()
  }

  setToken(user, bool){
    if(!bool) localStorage.setItem('token', user.token);
    this.setState({username: user.username})
  }

  clearToken(){
    localStorage.removeItem('token');
  }

  alerting(value){
    alert(value)
    this.props.netral(value)
  }

  render(){
    let initToken = localStorage.getItem('token')
    return(
        <Menu>
          <Image src={logo} style={{marginTop:5}} className="App-logo"/>
          <Menu.Menu position="right" >
            { initToken ?
              this.state.active.map((value, index)=>(
              <Menu.Item key={index} style={{padding:5}}>
                <Button token={initToken} color={value.color} text={value.name}/>
              </Menu.Item>
              ))
              :
              this.state.unactive.map((value, index)=>(
              <Menu.Item key={index} style={{padding:5}}>
                <Button color={value.color} text={value.name}/>
              </Menu.Item>
              ))
            }
          </Menu.Menu>
        </Menu>
    );
  }
}

const mapStateToProps = state =>({
  store: state
})

const mapDispatchToStore = dispatch => ({
  netral: (value) => dispatch(netral(value)),
  checkAvailableToken: (value) => dispatch(check('token', value))
})

export default connect(mapStateToProps, mapDispatchToStore)(MainHeader)