import React, {Component} from 'react'
import {Modal, Button} from 'semantic-ui-react'

class Modals extends Component {
  constructor(props){
    super(props)
  }

  close(bool){
    console.log('modal', bool)
    this.props.onCloseClick(false)
  }

  render(){
    let parent = this.props
    console.log(parent);
    return(
      <Modal size="mini" open={parent.open} onClose={()=>this.close(false)}>
       <Modal.Header>
         Delete Your Account
       </Modal.Header>
       <Modal.Content>
         <p>Are you sure you want to delete your account</p>
       </Modal.Content>
       <Modal.Actions>
         <Button negative onClick={(e)=>this.close(false)}>
           No
         </Button>
         <Button positive icon='checkmark' labelPosition='right' content='Yes' />
       </Modal.Actions>
     </Modal>
    )
  }
}

export default Modals