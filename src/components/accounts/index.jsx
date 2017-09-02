import React, {Component} from 'react';
import EmailStats from './EmailStats.jsx';
import AccountStats from './AccountStats.jsx';

class Accounts extends Component{
	
	render(){

			return(
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
			);
	}
	
}
export default Accounts;



