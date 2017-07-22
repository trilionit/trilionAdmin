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
	handleLoginSubmit(event){
		event.preventDefault();
		console.log("submitted");
	}
	handleForgotSubmit(event){
		event.preventDefault();
		console.log("submitted");
	}

	render(){
		return(
			<div className="login">
				<div className="frm-ctn">
				<form className="sign-in" id="ta-login" onSubmit={this.handleLoginSubmit.bind(this)}> 
					<div id="emailDiv">
	        			<input type="email" name="email" onChange={this.handleEmail.bind(this)} className="frm-ctn-input" placeholder="Your Email" id="email" required />
	      			</div>
	      			<div id="passwordDiv">
          				<input type="password" name="password" onChange={this.handlePassword.bind(this)}  placeholder="password" className="frm-ctn-input" id="password" required />
        			</div>
        			<input type="submit" name="submit" value="Sign In" className="submit" />
             		<p className="p"><a href="#">Forgotten my password</a></p>
             	</form>
             	<form className="forgotten-password" id="ta-forgot-password" onSubmit={this.handleForgotSubmit.bind(this)}>
					<div id="emailDiv">
						<input type="email" className="frm-ctn-input" placeholder="Email" name="email" />
					</div>
					<input type="submit" name="submit" className="submit" value="Recover Password" />
					<p className="p"><a href="#">Back to Login Page</a></p>
    			</form>
      			</div>
			</div>
		);
	}
}
export default LoginForm;
