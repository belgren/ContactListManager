import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm.js';

const serverUrl = "http://localhost:3000";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
    }
  }
  //test request
  sendPing(){
    fetch(serverUrl+'/ping', {
      method: 'GET',
    })
    .then((res) => res.text())
    .then( (res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  addContact(event, data){
    console.log(data);
    return
  }

  //IN render, should add a ContactList component and a NewContactInput component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact List Manager</h1>
        </header>
        <InputForm submit={(event, data) => this.addContact(event, data)}></InputForm>
        <button className="btn btn-primary" onClick={this.sendPing}>Ping</button>
      </div>
    );
  }
}



export default App;
