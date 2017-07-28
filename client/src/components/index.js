import React, {Component} from 'react'
// import {} from 'semantic-ui-react'
// import {connect} from 'react-redux'

import Header from './Header'

class Main extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Header />
      </div>
    );
  }
}

export default Main