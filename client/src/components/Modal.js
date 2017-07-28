import React, {Component} from 'react'
import {Modal, Button, Form} from 'semantic-ui-react'

class Modals extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:""
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
    event.name === "LOGIN" ?
    console.log('login') : console.log('register')
  }

  render(){
    console.log(this.state);
    let modal = this.props
    return(
      <Modal size="mini" open={modal.open} onClose={()=>this.close()}>
       <Modal.Header>
         {this.props.header}
       </Modal.Header>
       <Modal.Content>
         <Form>
           <Form.Field>
             <label>Username</label>
             <input name="username" onChange={(e)=>this.handleChange(e.target)} style={styles.input} type='text' placeholder='Username' />
           </Form.Field>
           <Form.Field>
             <label>Password</label>
             <input name="password" onChange={(e)=>this.handleChange(e.target)} style={styles.input} type='password' placeholder='Username' />
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
    width: "17rem"
  }
}



export default Modals