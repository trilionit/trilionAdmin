import React, {Component} from 'react';
import EmailStats from './EmailStats.jsx';
import AccountStats from './AccountStats.jsx';
import AddNewAccountButton from './AddNewAccountButton.jsx';
import ListAccounts from './ListAccounts.jsx';

class Accounts extends Component{
	
	render(){

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
				<AddNewAccountButton />
				<div className="container">
					<ListAccounts />
				</div>
			</section>
			</div>
		);
	}
	
}
export default Accounts;



