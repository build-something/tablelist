import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Form, Label} from 'semantic-ui-react'

import {saving, login} from '../../actions'

class Modals extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      labelU: false,
      labelP: false
    }
  }

  close(){
    let clear = {
      username: "",
      password: "",
      labelU: false,
      labelP: false
    }
    this.setState(clear)
    this.props.onHandle(false)
  }

  handleChange(event){
    let stateInitial = this.state
    if(event.name === "username"&& stateInitial.labelU && !stateInitial.username){
      let newData = {...this.state, labelU: false}
      newData[event.name] = event.value
      this.setState(newData)
    } else if(event.name === "password" && stateInitial.labelP && !stateInitial.password){
      let newData = {...this.state, labelP: false}
      newData[event.name] = event.value
      this.setState(newData)
    } else {
      let newData = {...this.state}
      newData[event.name] = event.value
      this.setState(newData)
    }
  }

  handleEvent(event){
    let data = this.state,
        labelU = true,
        labelP = true
    if(event.name === "LOGIN"){
      if(data.username && data.password){
        this.props.login(this.state)
        this.close();
      } else {
        if(!data.username) this.setState({labelU})
        if(!data.password) this.setState({labelP})
      }
    } else {
      if(data.username && data.password.length >= 2){
        this.props.register(this.state)
        this.close()
      } else {
        if(!data.username) this.setState({labelU})
        if(!data.password || data.password.length <2){
          this.setState({labelP})
        }
      }
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
               { modal.value === "LOGIN" ? stating.labelU ? this.renderLabel('Username Field is Required')
                    : null
                 : stating.labelU && !stating.username ? this.renderLabel('username cannot be empty')
                    : null
               }
             </Form.Field>
           </Form.Field>
           <Form.Field>
             <label>Password</label>
             <Form.Field inline>
               <input name="password" onChange={(e)=>this.handleChange(e.target)} style={styles.input} type='password' placeholder='Username' />
               { modal.value === "LOGIN" ? stating.labelP ? this.renderLabel('Password Field is Required')
                    : null
                 : stating.labelP && (!stating.password || stating.password.length < 2) ? this.renderLabel('password must be 2 caracter or more')
                    : null
               }
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