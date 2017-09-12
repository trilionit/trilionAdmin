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
			displayError:{}
		}
	}

	handleValidation(){
		let checkDomain=this.state.domain;
		let checkUserName=this.state.userName;
		let checkPassWord=this.state.password;
		let checkPackage=this.state.package;
		let checkEMail=this.state.email;

		//check domain
		if(!checkDomain || !checkUserName){
			console.log("error");
		}
	}
	
	handleInput(event){
		event.preventDefault();
		let name=event.target.name;
		let value=event.target.value;
		this.setState({
			[name]:value
		});

	}
	
	handleSubmitForm(event){
		event.preventDefault();
		console.log("submitted...");
		
		// else{
		// 	axios.post('/accounts/add', this.state.processForm)
  // 			.then((response) => {
  // 				console.log(response);
  // 				// this.props.setQueryResults(response.data);
		// 	});
		// }
		
		
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
								<errorContainer displayError={this.state.displayError} />
								
								<div className="form-elements">
									<label for="name">
										Domain:
									</label>
									<input type="text" name="domain" onChange={this.handleDomainInput.bind(this)} />
									<label for="userName">
										User Name:
									</label>
									<input type="text" name="userName" onChange={this.handleUserNameInput.bind(this)} />
									<label for="password">
										Password:
									</label>
									<input type="text" name="password" onChange={this.handlePasswordInput.bind(this)} />
									<label for="package">
										Choose Package
									</label>
									<select name="package" value={this.state.package} onChange={this.handlePackageInput.bind(this)}>
										<option>Basic</option>
										<option>Premium</option>
									</select>
									<label for="email">
										Contact Email:
									</label>
									<input type="text" name="email" onChange={this.handleEmailInput.bind(this)} />
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



