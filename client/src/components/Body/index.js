import React, {Component} from 'react'
import { Table, Segment, Dimmer, Loader, Menu, Icon} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {showing, checkPages} from '../../actions'


class Body extends Component {
  state={
    start_pagination: this.props.pages,
    end_offset_pagination: 5
  }

  componentWillUpdate(){
    this.props.pages === this.state.end_offset_pagination ? this.setState({start_pagination: this.props.pages,end_offset_pagination: this.state.end_offset_pagination+5}) : null
  }

     componentDidUpdate(prevProps, prevState) {
        let token = localStorage.getItem('token')
        if(this.props.store.employee.loader) this.props.showing(token)
     }


  render(){
    let data = this.props.store.employee
    const per_page = 10;
    const sum_pagenation = Math.ceil(data.list.length / per_page)
    const item_page = Array.apply([],new Array(sum_pagenation)).map((value, index)=>{
      return index + 1
    })
    const current_page = this.props.pages
    let start_offset = current_page * per_page;
    let start_count = start_offset - per_page
    return(
      <div>
        {
          data.loader ?
            <Segment size="large" style={{height:'10rem'}}>
              <Dimmer active>
                <Loader indeterminate>Preparing Files</Loader>
              </Dimmer>
            </Segment>
          : !data.loader && data.list.length !== 0 ?
            <div style={styles.parent}>
              <Table celled textAlign="center">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    data.list.map((value, index)=>{
                      if(index >= start_count && index < start_offset){
                        return (
                          <Table.Row key={index}>
                            <Table.Cell>{value.employee}</Table.Cell>
                          </Table.Row>
                        )
                      } return null
                     }
                    )
                  }
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                      <Menu floated='right' pagination>
                        {
                          this.props.pages !== 1 ?
                          <Menu.Item as='abc' onClick={()=>this.props.checkPages('previous')} icon>
                            <Icon name='left chevron' />
                          </Menu.Item>
                          : null
                        }
                        {
                          item_page.map(value =>{
                            if(this.state.start_pagination <= value && value <= this.state.end_offset_pagination){
                              if(value === this.props.pages){
                                return (
                                  <Menu.Item as='a' key={value} active>{value}</Menu.Item>
                                )
                              } else {
                                return (
                                  <Menu.Item as='a' key={value}>{value}</Menu.Item>
                                )
                              }
                            } return null
                          })
                        }
                        {
                          sum_pagenation !== this.props.pages ?
                          <Menu.Item onClick={()=>this.props.checkPages('next')} icon>
                            <Icon name='right chevron' />
                          </Menu.Item>
                          : null
                        }
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </div>
          : null
        }
      </div>
    )
  }
}

const styles = {
  parent: {
    padding: '0 28rem'
  }
}

const mapStateToProps = state =>({
  store : state,
  pages: state.employee.pages,
})

const mapDispatchToStore = dispatch =>({
  showing: (value) => dispatch(showing(value)),
  checkPages: (value) => dispatch(checkPages(value)),
})

export default connect(mapStateToProps, mapDispatchToStore)(Body)