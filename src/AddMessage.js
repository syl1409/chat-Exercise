import React,{Component} from 'react';

class AddMessage extends Component{
state={
message:{
text:''
}
}

handlerMessage =(e)=>{
  const {name, value}=e.target
  this.setState((oldState)=>({
    message:{
		username: this.props.currentUser, 
    	text: value,
    }
  }))
}

send=(e)=>{
  	e.preventDefault();
	this.props.addMessage(this.state.message);
  this.setState((oldState)=>({
    message:{

    	text: '',
    }
  }))
}

render(){
	const {text} = this.state.message;
  return(
  
 <form className="input-group" onSubmit={this.send}>
                <input type="text" className="form-control" placeholder="Enter your message..." 
    					value={text} name={text} onChange={(event)=>this.handlerMessage(event)}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={text == ''}>
                    SEND
                  </button>
                </div>
              </form>
  )
}
}

export default AddMessage