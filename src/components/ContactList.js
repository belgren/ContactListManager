import React, { Component } from 'react';
import Contact from './Contact.js';

class ContactList extends Component {

  render() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map( (contact) => <Contact key={contact._id} deleteContact={(event) => this.props.deleteContact(event, contact)} contact={contact}/>)}
        </tbody>
      </table>
    )
  }
}

export default ContactList;
