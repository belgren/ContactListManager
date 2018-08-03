import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
  }

  deleteContact(event){
    event.preventDefault();
    this.props.deleteContact(event, this.props.contact);
  }

  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.number}</td>
        <td>{this.props.contact.birthdate}</td>
        <td><button className="btn btn-danger" onClick={  (event, contact) => this.deleteContact(event)}>Delete</button></td>
      </tr>
      // <td>{contact.name}</td>
      // <td>{contact.number}</td>
      // <td>{contact.birthdate}</td>
    )
  }
}

export default Contact;
