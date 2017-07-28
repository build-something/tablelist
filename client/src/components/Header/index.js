import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Menu, Image} from 'semantic-ui-react'

import logo from '../../public/image/logo.svg';
import '../../public/css/App.css';

import Button from './Button'

class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      button: [
        {
          name: "LOGIN",
          color: "primary"
        },{
          name: "SIGNUP",
          color: "basic"
        }
      ],
    }
  }

  render(){
    return(
      <Menu>
        <Image src={logo} style={{marginTop:5}} className="App-logo"/>
        <Menu.Menu position="right" >
          {this.state.button.map((value, index)=>(
            <Menu.Item key={index} style={{padding:5}}>
              <Button color={value.color} text={value.name}/>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainHeader