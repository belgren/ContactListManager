import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props){
    super(props);
    //props will include namae, number, birthdate
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Birthdate</th>
          </tr>
        </thead>
        {this.props.contacts.map( (contact) => {
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>{contact.birthdate}</td>
            </tr>
          </tbody>
        })}

      </table>
      // this.props.contacts.map( (contact) => <p key={contact._id}>{contact.name}</p>)
    )
  }
}

export default ContactList;
