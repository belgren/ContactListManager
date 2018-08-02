import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      typedName: "",
      typedNumber: "",
      typedBirthdate: "",
    }
    //props will include namae, number, birthdate
  }

  handleNameTyping(event){
    this.setState({
      typedName: event.target.value
    })
  }
  handleNumberTyping(event){
    this.setState({
      typedNumber: event.target.value
    })
  }
  handleBirthdateTyping(event){
    this.setState({
      typedBirthdate: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.typedName && this.state.typedNumber && this.state.typedBirthdate){
      var contactInfo = {
        name: this.state.typedName,
        number: this.state.typedNumber,
        birthdate: this.state.typedBirthdate
      }
      this.props.submit(event, contactInfo);
      this.setState({
        typedName: "",
        typedNumber: "",
        typedBirthdate: "",

      })
    } else{
        alert('All contact fields are required');
    }
  }

  render() {
    return (
      <form>
        <h6>New Contact</h6>
        <input placeholder="Name" type="text" value={this.state.typedName} onChange={
          (event) => this.handleNameTyping(event)
        }>
        </input>
        <input placeholder="Number" type="text" value={this.state.typedNumber} onChange={
          (event) => this.handleNumberTyping(event)
        }>
        </input>
        <input placeholder="Birthdate" type="text" value={this.state.typedBirthdate} onChange={
          (event) => this.handleBirthdateTyping(event)
        }>
        </input>
        <button type="submit" className="btn btn-primary" onClick={
          (event) => this.handleSubmit(event)
        }>
        Add Contact</button>
      </form>
    )
  }
}

export default InputForm;
