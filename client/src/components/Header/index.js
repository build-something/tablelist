import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Menu, Image} from 'semantic-ui-react'

import logo from '../../public/image/logo.svg';
import '../../public/css/App.css';

import Button from './Button'

class MainHeader extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Menu>
        <Image src={logo} style={{marginTop:4}}className="App-logo"/>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button className="primary" text="Log In"/>
          </Menu.Item>
          <Menu.Item>
            <Button className="basic" text="Sign Up"/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainHeader