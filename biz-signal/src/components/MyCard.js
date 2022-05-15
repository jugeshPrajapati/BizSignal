
import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';
export default class MyCard extends Component {
  constructor(props){
    super()
     this.state={
       count:0
     }
    }
  render() {
    return (
      <Card>
      <Card.Body>
        <Card.Title>{this.props.name}:{this.state.count}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">see on map</Button>
        <Button variant="primary" 
                onClick={() => this.setState({count: this.state.count+1})}>
                upvote 
        </Button>
        <Button variant="primary" 
                onClick={() =>  this.setState({count: this.state.count-1})}>
                downvote
        </Button>
      </Card.Body>
    </Card>
    )
  }
}