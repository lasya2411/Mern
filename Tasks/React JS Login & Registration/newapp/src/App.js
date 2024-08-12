/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {age: ''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({age: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfullys: ' + this.state.age);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.age} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App; */

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: '',
      username: '',
      password: '',
      name: '',
      phone: '',
      email: '',
      country: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    alert(`Submitted:\nName: ${this.state.name}\nAge: ${this.state.age}\nPhone: ${this.state.phone}\nEmail: ${this.state.email}\nCountry: ${this.state.country}\nUsername: ${this.state.username}\nPassword: ${this.state.password}`);
  }

  render() {
    return (
      <div className="container">
        <div className="form-container login-form">
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Enter your username"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter your password"
              />
            </label>
            <input type="submit" value="Login" className="button" />
          </form>
        </div>
        <div className="form-container registration-form">
          <h1>Registration Form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                placeholder="Enter your age"
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Enter your phone number"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter your email"
              />
            </label>
            <label>
              Country:
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="singapore">Singapore</option>
                <option value="newzealand">New Zealand</option>
              </select>
            </label>
            <label>
              <input type="checkbox" name="declaration" />
              I hereby declare that all the information given above is true.
            </label>
            <input type="submit" value="Register" className="button" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
