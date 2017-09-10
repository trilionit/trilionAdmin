import React, {Component} from 'react';
import AddNewAccountButton from './AddNewAccountButton.jsx';
import errorContainer from './errorContainer.jsx';
const axios = require('axios');

class NewAccount extends Component{
	constructor(props){
		super(props)
		this.state={
			processForm:{
				domain:"",
				userName:"",
				password:"",
				package:"basic",
				email:""
			},
			displayError:{
				error:0,
				element:"",
				errorMessage:""
			}	
		}
	}
	
	
	handleDomainInput(event){
		event.preventDefault();
		this.setState({
			domain:event.target.value
		})
	}
	handleUserNameInput(event){
		event.preventDefault();
		this.setState({
			userName:event.target.value
		})
	}
	handlePasswordInput(event){
		event.preventDefault();
		this.setState({
			password:event.target.value
		})
	}
	handlePackageInput(event){
		event.preventDefault();
		this.setState({
			package:event.target.value
		})
	}
	handleEmailInput(event){
		event.preventDefault();
		this.setState({
			email:event.target.value
		})
	}
	handleSubmitForm(event){
		event.preventDefault();
		console.log("submitted...");
		if(this.state.processForm.domain.length <3){
			this.setState({
				displayError:{
					error:1,
					element:"Domain",
					errorMessage:"Invalid Domain Name"	
				}
				
			})
			
		}
		else{
			axios.post('/accounts/add', this.state.processForm)
  			.then((response) => {
  				console.log(response);
  				// this.props.setQueryResults(response.data);
			});
		}
		
		
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
									<input type="text" name="" onChange={this.handleDomainInput.bind(this)} />
									<label for="userName">
										User Name:
									</label>
									<input type="text" name="" onChange={this.handleUserNameInput.bind(this)} />
									<label for="password">
										Password:
									</label>
									<input type="text" name="" onChange={this.handlePasswordInput.bind(this)} />
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
									<input type="text" name="" onChange={this.handleEmailInput.bind(this)} />
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



