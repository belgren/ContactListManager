import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm.js';
import ContactList from './components/ContactList.js';
const serverUrl = "http://localhost:3000";
const dbUrl = "http://localhost:3000/db";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
    }
  }

  componentDidMount(){
    var self = this;
    fetch(dbUrl+'/all', {
      method: 'GET',
    })
    .then( (res) => {
      if (res.status==200){
        return res.json()
      } else{
        return [];
      }
    })

    .then( (res) => {
      self.setState({
        contacts: res,
      })
    })
    .catch((err) => {
      console.log(err)
    })
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
    fetch(dbUrl + '/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        number: data.number,
        birthdate: data.birthdate,
      })
    }).then((res)=> {
      if(res.status === 200) {
        console.log("success")
      } else {
        console.log('failure')
      }
    }).catch((err) => {
      // network error
    })
  }

  //IN render, should add a ContactList component and a NewContactInput component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact List Manager</h1>
        </header>
        <InputForm submit={(event, data) => this.addContact(event, data)}></InputForm>
        <ContactList contacts={this.state.contacts}/>
        <button className="btn btn-primary" onClick={this.sendPing}>Ping</button>
      </div>
    );
  }
}



export default App;
