import React, {Component} from 'react';
import EmailStats from './EmailStats.jsx';
import AccountStats from './AccountStats.jsx';
import AddNewAccountButton from './AddNewAccountButton.jsx';
import ListAccounts from './ListAccounts.jsx';
import ListEmails from './ListEmails.jsx';

class Accounts extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		url:"",
	// 		buttonName:""
	// 	}
	// 	//this.handleClickedButton=this.handleClickedButton.bind(this);
	// }


	render(){
		let newAccount={
			url:"/newAccount",
			pageName:"New Account"
		}
		return(
			<div>
			<section>
				<div className="container">
					<div className="page-header">
						<h2>Web Accounts</h2>
					</div>
					<div className="quick-stats-container">
						<AccountStats />
						<EmailStats />
					</div>
				</div>
			</section>
			<section>
				<AddNewAccountButton clickedButton={newAccount} />
				<div className="container">
					<ListAccounts />
					<ListEmails />
				</div>
			</section>
			</div>
		);
	}
	
}
export default Accounts;



