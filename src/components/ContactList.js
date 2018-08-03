import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props){
    super(props);
    //props will include namae, number, birthdate
  }

  render() {
    return (
      this.props.contacts.map( (contact) => <p key={contact._id}>{contact.number}</p>) 
    )
  }
}

export default ContactList;
