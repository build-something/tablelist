import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Form, Label} from 'semantic-ui-react'

import {saving, login} from '../actions'

class Modals extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      label: true
    }
  }

  close(){
    this.setState({username: "", password: ""})
    this.props.onHandle(false)
  }

  handleChange(event){
    let newData = {...this.state}
    newData[event.name] = event.value
    this.setState(newData)
  }

  handleEvent(event){
    if(event.name === "LOGIN"){
      this.props.login(this.state)
      this.close();
    }else {
      this.props.register(this.state)
      this.close()
    }
  }

  renderLabel(desc){
    return(
      <Label basic color='red' pointing='left'>{desc}</Label>
    )
  }

  render(){
    let modal = this.props
    let stating = this.state
    return(
      <Modal size="tiny" open={modal.open} onClose={()=>this.close()}>
       <Modal.Header>
         {this.props.header}
       </Modal.Header>
       <Modal.Content>
         <Form>
           <Form.Field>
             <label>Username</label>
             <Form.Field inline>
               <input name="username" onChange={(e)=>this.handleChange(e.target)} style={styles.input} type='text' placeholder='Username' />
               {stating.label && stating.username ?this.renderLabel('username cannot be empty'):null}
             </Form.Field>
           </Form.Field>
           <Form.Field>
             <label>Password</label>
             <Form.Field inline>
               <input name="password" onChange={(e)=>this.handleChange(e.target)} style={styles.input} type='password' placeholder='Username' />
               {stating.label && stating.username ? this.renderLabel('password must be 2 caracter or more'):null}
             </Form.Field>
           </Form.Field>
         </Form>
       </Modal.Content>
       <Modal.Actions>
         <Button name={modal.value} onClick={(e)=>this.handleEvent(e.target)} className={modal.color} content={modal.value} />
         <Button negative onClick={(e)=>this.close()}>
           Cancel
         </Button>
       </Modal.Actions>
     </Modal>
    )
  }
}

const styles = {
  input:{
    width: "15rem"
  }
}

const mapDispatchToStore = dispatch =>({
  register: data => dispatch(saving(data)),
  login: data => dispatch(login(data))
})

export default connect(null, mapDispatchToStore)(Modals)