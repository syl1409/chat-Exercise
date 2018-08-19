import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListMessages from './listMessages';
import AddMessage from './AddMessage'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  
    state={messages: [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
]}
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };
	addMessage = (message) =>{
      this.setState((oldState)=>({
      messages: [...oldState.messages, message]
      }))
    }
  render() {
    
    const {messages} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>
			<ListMessages messages={messages} currentUser={users[0].username}/>
           

            <div>
				<AddMessage  currentUser={users[0].username}  addMessage={this.addMessage}/>
           
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
			<ListMessages messages={messages} currentUser={users[1].username}/>
            <div>	
			<AddMessage  currentUser={users[1].username}  addMessage={this.addMessage}/>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
