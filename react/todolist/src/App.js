import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Grid, FormGroup, Form, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <h1>ToDo List</h1>
        
        <Form inline>
          <FormControl type='text'/> &nbsp;
          <Button bsStyle="primary">Add</Button>
        </Form>

        <ListGroup id='todolist'>
          <ListGroupItem>1</ListGroupItem>
        </ListGroup>
      </Grid>
    );
  }
}

export default App;
