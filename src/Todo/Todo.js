import React, { Component } from 'react';
import './Todo.css';
import {  InputGroup, 
          InputGroupButton, 
          Input, 
          Button, 
          Container, 
          Row, 
          Col,
          Card,
          CardBlock  
      } from 'reactstrap';

export class Todo extends Component {
  state = {
    inputText: '',
    listItem: []
  }

  submitList = (event) => {
    this.setState({
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value})
  }

  deleteListAtIndex = (index) => {
    const result = this.state.listItem;
    result.splice(index,1);
    this.setState({
      listItem: result
    });
  }
   
  render() {
    return (
      <div class="card clearfix">
        <div class="to-do-box">
          <h1 class="title">To-do-list</h1>
          <Container>
            <InputGroup>
              <Input  type="word" 
                      onChange={this.handleChangeText} 
                      value={this.state.inputText}
                      onKeyPress={this.handleKeyPress}
                      placeholder="Please enter a word" />
              <InputGroupButton>
                <Button onClick={this.submitList}>Submit</Button>
              </InputGroupButton>
            </InputGroup>
            <br />
            {
              this.state.listItem.map((value, index) => {
                return (
                  <Row>
                    <Col xm="3">
                      <p key={index}>{index+1}</p>
                    </Col>
                    <Col xm="6">
                      <p key={value}>{value}</p>
                    </Col>
                    <Col>
                        <button type="button" className="aaa" onClick={this.deleteListAtIndex.bind(this, index)}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </Col>
                  </Row>
                  
                );
              })
            }
          </Container>
        </div>
      </div>
    );
  }
}