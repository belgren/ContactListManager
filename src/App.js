import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm.js';
import ContactList from './components/ContactList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      // showModal: false,
      // contactToDelete: '',
    }
  }

  componentDidMount(){
    var self = this;
    fetch('/db/all', {
      method: 'GET',
    })
    .then( (res) => {
      if (res.status===200){
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
    fetch('/ping', {
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
    var self = this;
    fetch('/db/add', {
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
        console.log("success");

      } else {
        console.log('failure')
      }
    }).catch((err) => {
      // network error
    })
  }

  deleteContact(event, targetContact){
    console.log(targetContact)
    // var contactToDelete = this.state.contacts[index].name
    // this.setState({
    //   contactToDelete: contactToDelete,
    //   showModal: !this.state.showModal,
    // })
    fetch('/db/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/text'
      },
      body: targetContact,
    })
    .then((res)=>{
      console.log(res.body)
      if (res.status === 200){
        this.setState({
          contacts: this.state.contacts.filter((contact) => contact._id != targetContact._id)
        });
      } else{
        // alert("unable to delete contact");
      }
    })
    .catch( (err) => {
      console.log(err);
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
        <ContactList deleteContact={(event, contact)=> this.deleteContact(event, contact)} contacts={this.state.contacts}/>
        {/* <button className="btn btn-primary" onClick={this.sendPing}>Ping</button> */}
        {/* {this.state.showModal && < ConfirmDeleteModal / >} */}
      </div>
    );
  }
}

class ConfirmDeleteModal extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="modal display-block">
        <section className="modal-main">
          test
        <button>close</button>
      </section>
      </div>
    )
  }
}


export default App;
