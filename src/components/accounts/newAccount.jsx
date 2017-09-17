import React, {Component} from 'react';
import AddNewAccountButton from './AddNewAccountButton.jsx';
import errorContainer from './errorContainer.jsx';
const axios = require('axios');

class NewAccount extends Component{
	constructor(props){
		super(props)
		this.state={
			domain:'',
			userName:'',
			password:'',
			package:'',
			email:'',
			errors:{
				domainError:'',
				userNameError:'',
				passwordError:'',
				emailError:''
			}			
			
		}
	}

	handleValidation(){
		let isError=false;
		let errors={
			domainError:'',
			userNameError:'',
			passwordError:'',
			emailError:''
		}
		if(this.state.domain.length <6){
			isError=true;
			errors.domainError="Domain Name needs to be atleast 6 characters long";
		}
		// if(this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
		// 	isError=true;
		// 	errors.emailError="Email is Invalid";
		// }
		if(this.state.email.indexOf("@")===-1){
			isError=true;
			errors.emailError="Email is Invalid";
		}
		if(this.state.password.length <8){
			isError=true;
			errors.passwordError="Password needs to be atleast 8 characters long";
		}
		if(this.state.userName.length <6){
			isError=true;
			errors.userNameError="Username needs to be atleast 6 characters long";
		}
		if(this.state.email.length <6){
			isError=true;
			errors.emailError="Email needs to be atleast 6 characters long";
		}
		this.setState({		
			errors:errors
		});
		console.log(errors);
		return isError;  		
	}

	
	handleInput(event){
		event.preventDefault();
		let name=event.target.name;
		let value=event.target.value;
		this.setState({[name]:value});
	}
	
	handleSubmitForm(event){
		event.preventDefault();
		let err=this.handleValidation();
		if(!err){
			this.state.errors={
				domainError:'',
				userNameError:'',
				passwordError:'',
				emailError:''
			}
			console.log("submitted");
		}		
		// axios.post('/accounts/add', this.state)
		// .then((response) => {
		// 	console.log(response);
		// 	// this.props.setQueryResults(response.data);
		// });		
	}
	
	render(){
		let newAccount={
			url:"/accounts",
			pageName:"Go Back"
		}
		
		return(
			<div>
			<section>	
				<AddNewAccountButton clickedButton={newAccount} />	
				<div className="container">
					<div className="page-header">
						<h2>Web Accounts</h2>
					</div>
				</div>
			</section>
			<section>	
				<div className="container">					
					<div className="form-main-container">
						<div className="form-header">
							<h3>New Account</h3>
						</div>
						<form id="new-account" onSubmit={this.handleSubmitForm.bind(this)}>
							<div className="form-container">
								<errorContainer formErrors={this.state.formErrors} />
								
								<div className="form-elements">
									<label htmlFor="name">
										Domain:
									</label>
									<input type="text" name="domain" onChange={this.handleInput.bind(this)} />
									<label htmlFor="userName">
										User Name:
									</label>
									<input type="text" name="userName" onChange={this.handleInput.bind(this)} />
									<label htmlFor="password">
										Password:
									</label>
									<input type="password" name="password" onChange={this.handleInput.bind(this)} />
									<label htmlFor="package">
										Choose Package
									</label>
									<select name="package" value={this.state.package} onChange={this.handleInput.bind(this)}>
										<option>Basic</option>
										<option>Premium</option>
									</select>
									<label htmlFor="email">
										Contact Email:
									</label>
									<input type="text" name="email" onChange={this.handleInput.bind(this)} />
									<input type="submit" className="button-submit" value="Add Account" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			</div>
		);
	}
	
}
export default NewAccount;



