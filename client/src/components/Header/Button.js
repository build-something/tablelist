import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

import Modal from '../Modal'

class HButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      open: false
    }
  }

  handleModal(name){
     name == "LOGIN" ?
    this.setState({name: "Log In Form", open:true}) :
    this.setState({name: "Register Form", open:true})
  }

  handleClose(open){
    this.setState({name:"", open})
  }

  render(){
    let value = this.props
    let data = this.state
    return (
      <div>
        <Button name={value.text} className={value.color} onClick={(e)=>this.handleModal(e.target.name)}>{value.text}</Button>
        <Modal value={value.text} color={value.color} header={data.name} open={data.open} onHandle={(e)=>{this.handleClose(e)}}/>
      </div>
    )
  }
}

export default HButton