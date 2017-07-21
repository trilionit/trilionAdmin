import React, {Component} from 'react';
import '../../css/style.css';
class LoginForm extends Component{
	constructor(){
		super();
		this.state ={
			email: null,
			password:null
		};
	}
	handleEmail(event){
		event.preventDefault();
		console.log(event.target.value);
	}
	handlePassword(event){
		event.preventDefault();
		console.log(event.target.value);
	}
	handleSubmit(event){
		event.preventDefault();
		console.log("submitted");
	}

	render(){
		return(
			<div className="login">
				<div className="frm-ctn">
				<form className="sign-in" id="ta-login" onSubmit={this.handleSubmit.bind(this)}> 
					<div id="emailDiv">
	        			<input type="email" name="email" onChange={this.handleEmail.bind(this)} className="frm-ctn-input" placeholder="Your Email" id="email" required />
	      			</div>
	      			<div id="passwordDiv">
          				<input type="password" name="password" onChange={this.handlePassword.bind(this)}  placeholder="password" className="frm-ctn-input" id="password" required />
        			</div>
        			<input type="submit" name="submit" value="Sign In" className="submit" id="submit" />
             		<p className="p"><a href="#">Forgotten my password</a></p>
             	</form>
      			</div>
			</div>
		);
	}
}
export default LoginForm;
