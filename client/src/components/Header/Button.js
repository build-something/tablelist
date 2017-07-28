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

  handleModal(name, bool){
    console.log(name, bool)
    this.setState({name, open:true})
  }

  handleClose(open){
    this.setState({name:"", open})
  }

  render(){
    console.log(this.state);
    let {className} = this.props
    return (
      <div>
        <Button name={this.props.text} className={className} onClick={(e)=>this.handleModal(e.target.name, true)}>{this.props.text}</Button>
        <Modal open={this.state.open} onCloseClick={(e)=>this.handleClose(e)}/>
      </div>
    )
  }
}

export default HButton