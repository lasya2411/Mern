/*
import logo from './anna.jfif';
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

export default App;
*/

/*
import React, { Component } from 'react';  
class Lasya extends React.Component {  
   render() {  
      return (  
         <div>  
            <First/>  
            <Second/>  
         </div>  
      );  
   }  
}  
class First extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>MERN</h1>  
         </div>  
      );  
   }  
}  
class Second extends React.Component {  
   render() {  
      return (  
         <div>  
            <h2>www.mernstack.com</h2>  
            <p>This websites contains the great CS tutorial.</p>  
         </div>  
      );  
   }  
}  
export default Lasya;  

lasya - image 
joshna - Video 
geetha - audio 
cherry - login form 
main class - 4 idiots 
*/

/*
import React, { Component } from 'react';  
import audio from './Frozen - Let it Go.mp3';
import video from './videoplayback.mp4';
import logo from './anna.jfif';

class FourIdiots extends React.Component {  
   render() {  
      return (  
         <div className="container"> 
            <div className="row">
               <Lasya/>  
               <Joshna/>  
            </div>
            <div className="row">
               <Geetha/> 
               <Cherry/>
            </div>
         </div>  
      );  
   }  
} 
class Lasya extends React.Component {  
   render() {  
      return (  
         <div>  
            <img src={logo} className="anna.jfif" alt="anna" />
         </div>  
      );  
   }  
}  
class Joshna extends React.Component {  
   render() {  
      return (  
         <div>  
            <video src={video} className="videoplayback.mp4" alt="video" controls/>
         </div>  
      );  
   }  
} 
class Geetha extends React.Component {  
   render() {  
      return (  
         <div>  
            <audio src={audio} className="Frozen - Let it Go.mp3"alt="audio" controls />
         </div>  
      );  
   }  
}
class Cherry extends React.Component {  
   render() {  
      return (  
         <div> 
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <input type="password" placeholder="Enter password" name="password" required/>
            <button>Login</button>
         </div>  
      );  
   }  
}  

export default FourIdiots; */

/*
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="app-root">
        <Login />
        <Welcome />
      </div>
    );
  }
}

class Base extends React.Component {
  updateUI(page) {
    const loginForm = document.getElementById('login-form');
    const welcomePage = document.getElementById('welcome-page');
    const timerElement = document.getElementById('timer');

    if (page === 'login') {
      loginForm.style.display = 'block';
      welcomePage.style.display = 'none';
      timerElement.style.display = 'none';
    } else if (page === 'welcome') {
      loginForm.style.display = 'none';
      welcomePage.style.display = 'block';
      timerElement.style.display = 'block';
    }
  }

  startTimer() {
    let timerValue = 60;
    const timerElement = document.getElementById('timer-text');
    this.timer = setInterval(() => {
      if (timerValue <= 0) {
        this.stopTimer();
        this.updateUI('login');
        return;
      }
      timerValue -= 1;
      timerElement.innerText = `${timerValue} seconds`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

class Login extends Base {
  handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    this.username = email.split('@')[0];
    this.updateUI('welcome');
    this.startTimer();
  };

  render() {
    return (
      <div className="container" id="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
          <input type="password" name="password" className="form-control" placeholder="Enter your password" required />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    );
  }
}

class Welcome extends Base {
  constructor(props) {
    super(props);
    this.rows = [
      { id: 1, name: 'Harry Potter', email: 'harry@example.com', age: 26 },
      { id: 2, name: 'Ron Weasley', email: 'ron@example.com', age: 26 },
      { id: 3, name: 'Hermione Granger', email: 'hermione@example.com', age: 25 },
      { id: 4, name: 'Draco Malfoy', email: 'draco@example.com', age: 27 },
      { id: 5, name: 'Luna Lovegood', email: 'luna@example.com', age: 27 }
    ];
  }

  handleLogout = () => {
    this.updateUI('login');
    this.stopTimer();
  };

  handleDelete = (id) => {
    this.rows = this.rows.filter(row => row.id !== id);
    this.renderTable();
  };

  renderTable = () => {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    this.rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.name}</td>
        <td>${row.email}</td>
        <td>${row.age}</td>
        <td><span class="fa delete" onclick="document.getElementById('app-root').handleDelete(${row.id})">Delete</span></td>
      `;
      tbody.appendChild(tr);
    });
  };

  componentDidMount() {
    this.renderTable();
  }

  render() {
    return (
      <div className="container" id="welcome-page" style={{ display: 'none' }}>
        <h2 id="welcome-message">Welcome to lasya's timer project, {this.username}!</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="table-body">
           {/* Rows will be dynamically added here */
          /* </tbody>
        </table>
        <p id="timer" style={{ display: 'none' }}>
          <span id="timer-text">60 seconds</span>
          <button id="logout-btn" onClick={this.handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
} 

export default App; */

/*
import React from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      }  
      render() {  
          const mango = this.state.myinfo ? (  
              <div>  
                  <p><h3>used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to Mango city </h1>  
                      { mango }   
                  </div>  
              );  
     }  
}  
export default App; */

/*
import Lasya from 'react';  
class App extends Lasya.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <input type="email" name="login-email" placeholder="Enter email" required/> <br/>
                              <input type="password" name="login-password" placeholder="Enter password" required/> <br/>
                              <button> Login </button> <br/>
                              <button onClick={this.togglemyBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App; */

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Mangoes are imported from { this.props.name } </h1>    
            <p> <h4> Welcome to Mango city </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  */


/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city is guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem"  
}  
export default App; */

/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {name: ''};  
      this.Changevariable = this.handleChange.bind(this);  
      this.Submitvariable = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({name: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfully: ' + this.state.name);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.Submitvariable}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.name} onChange={this.Changevariable} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App; */

import React from 'react';

class Lasya extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: ['Apple', 'Banana', 'Cherry','Grape']
    };
  }

  render() {
    return (
      <div>
        <First={this.state.listItems} />
        <Second={this.state.listItems} />
        <Third={this.state.listItems} />
      </div>
    );
  }
}

class First extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

class Second extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <ol type="I">{listItems}</ol>
      </div>
    );
  }
}

class Third extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <ol type="a">{listItems}</ol>
      </div>
    );
  }
}

export default Lasya;