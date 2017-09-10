import React, {Component} from 'react';
import AddNewAccountButton from './AddNewAccountButton.jsx';

class NewAccount extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		url:"",
	// 		buttonName:""
	// 	}
	// 	//this.handleClickedButton=this.handleClickedButton.bind(this);
	// }
	// clickedButton(){
	// 	this.setState({
	// 		url:"/account",
	// 		buttonName:"Go Back"
	// 	})
	// }
	
	handleDomainInput(event){
		event.preventDefault();
		let inputDomain=event.target.value;
		console.log(inputDomain);
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
						<div className="form-container">
							<div className="alert-container alert-error">
								<strong>Something Wrong !</strong> Check and try again
							</div>
							<div className="form-elements">
								<label for="name">
									Domain:
								</label>
								<input type="text" name="" onChange={this.handleDomainInput.bind(this)} />
								<label for="email">
									User Name:
								</label>
								<input type="text" name=""/>
								<label for="email">
									Password:
								</label>
								<input type="text" name=""/>
								<label for="email">
									Choose Package
								</label>
								<select name="package">
									<option>Basic</option>
									<option>Premium</option>
								</select>
								<label for="email">
									Contact Email:
								</label>
								<input type="text" name=""/>
								<input type="submit" name="" className="button-submit" value="Add Email" />
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
		);
	}
	
}
export default NewAccount;



