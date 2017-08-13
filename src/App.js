import React, { Component } from 'react';
import './App.css';

import { Todo } from './Todo/Todo.js';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
