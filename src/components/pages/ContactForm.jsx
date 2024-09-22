import React, { Component } from 'react';
import '../css/ContactForm.css'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    const { name, email, password, message } = this.state;
    console.log({ name, email, password, message });
  };

  render() {
    return (
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group5">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group5">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group5">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group5">
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className='button5'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
